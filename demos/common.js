/* ============================================================
   与 ABWC EIGEN (ABWC0644-0790) 同算法的 Jacobi 阈值旋转对角化
   ============================================================ */
function eigen(Ain, n){
  var A=[], R=[], i, j;
  for(i=0;i<n;i++){A.push(Ain[i].slice()); var r=[]; for(j=0;j<n;j++) r.push(i===j?1:0); R.push(r);}
  var RANGE=1e-12, anorm=0;  // 与 ABWC EIGEN 双精度版要求一致：阈值判据 = anorm*RANGE/n，单精度会把有效数字压到 3~4 位
  for(i=0;i<n;i++) for(j=i+1;j<n;j++) anorm+=A[i][j]*A[i][j];
  if(anorm<=0){var d0=[];for(i=0;i<n;i++)d0.push(A[i][i]);return {val:d0,vec:R,sweeps:0,idx:(function(){var a=[];for(i=0;i<n;i++)a.push(i);return a;})()};}
  anorm=1.414*Math.sqrt(anorm);
  var anrmx=anorm*RANGE/n, thr=anorm, sweeps=0, guard=0;
  while(thr>anrmx && guard<200){
    thr=thr/n; var ind=1;
    while(ind===1 && guard<200){
      ind=0; sweeps++; guard++;
      for(var l=0;l<n-1;l++) for(var m=l+1;m<n;m++){
        if(Math.abs(A[l][m])<thr) continue;
        ind=1;
        var x=0.5*(A[l][l]-A[m][m]);
        var y=-A[l][m]/Math.sqrt(A[l][m]*A[l][m]+x*x);
        if(x<0) y=-y;
        var sn=y/Math.sqrt(2*(1+Math.sqrt(1-y*y)));
        var sn2=sn*sn, cs=Math.sqrt(1-sn2), cs2=cs*cs, sc=sn*cs;
        for(i=0;i<n;i++){
          if(i!==l && i!==m){
            var til=A[i][l], tim=A[i][m];
            A[i][l]=A[l][i]=til*cs-tim*sn;
            A[i][m]=A[m][i]=til*sn+tim*cs;
          }
          var rl=R[i][l], rm=R[i][m];
          R[i][l]=rl*cs-rm*sn; R[i][m]=rl*sn+rm*cs;
        }
        var t=2*A[l][m]*sc, All=A[l][l], Amm=A[m][m];
        A[l][m]=A[m][l]=(All-Amm)*sc+A[l][m]*(cs2-sn2);
        A[l][l]=All*cs2+Amm*sn2-t;
        A[m][m]=All*sn2+Amm*cs2+t;
      }
    }
  }
  var ev=[],idx=[];
  for(i=0;i<n;i++){ev.push(A[i][i]);idx.push(i);}
  idx.sort(function(a,b){return ev[a]-ev[b];});
  var V=idx.map(function(k){return ev[k];});
  var Vec=idx.map(function(k){var c=[];for(i=0;i<n;i++)c.push(R[i][k]);return c;});
  return {val:V, vec:Vec, sweeps:sweeps, idx:idx};
}

/* ---------- 画布工具 ---------- */
function ctxOf(id){var c=document.getElementById(id);var g=c.getContext('2d');
  g.setTransform(1,0,0,1,0,0);g.clearRect(0,0,c.width,c.height);return {c:c,g:g};}
function axis(g,x0,y0,x1,y1){g.strokeStyle='#39424f';g.lineWidth=1.5;g.beginPath();
  g.moveTo(x0,y1);g.lineTo(x0,y0);g.moveTo(x0,y1);g.lineTo(x1,y1);g.stroke();}
function txt(g,s,x,y,col,size,align){g.fillStyle=col||'#9aa4b2';
  g.font=(size||13)+'px ui-monospace,Consolas,monospace';g.textAlign=align||'left';g.fillText(s,x,y);}

/* ---------- 新增数学工具：sinc-DVR 构建 / 伪 Voigt / Wigner 6j ---------- */
// 一维 sinc-DVR：在 [xmin,xmax] 上用 N 点网格，对角化 H = T(sinc) + V
// T_ij = (1/2Δ²)·{ π²/3 (i=j) ; 2(-1)^{i-j}/(i-j)² }  （原子单位 ħ=m=1）
function sincBuild(N, xmin, xmax, Vfun){
  var dx=(xmax-xmin)/(N-1), H=[], i, j;
  for(i=0;i<N;i++){ var row=[], x=xmin+i*dx;
    for(j=0;j<N;j++){
      var t;
      if(i===j) t=Math.PI*Math.PI/(6*dx*dx);
      else t=(((i-j)%2===0)?1:-1)/((i-j)*(i-j)*dx*dx);
      row.push(t + (i===j? Vfun(x):0));
    }
    H.push(row);
  }
  return eigen(H,N);
}
// 伪 Voigt（Thompson 近似）：Lorentz(aL) 与 Gauss(aD) 的线性组合，光谱学标准做法
function pseudoVoigt(x,aL,aD){
  var r=aL/(aL+aD);
  var eta=1.36603*r-0.47719*r*r+0.11116*r*r*r;
  var L=aL/(Math.PI*(x*x+aL*aL));
  var G=Math.exp(-x*x/(2*aD*aD))/(aD*Math.sqrt(2*Math.PI));
  return eta*L+(1-eta)*G;
}
// Wigner 6j 符号（整数加倍参数 A=2a）：Racah 求和公式，含三角/宇称保护
function sixjD(A,B,C,D,E,F){
  function hf(n){ if(n<-1e-12)return Infinity; var m=Math.round(2*n);
    if(Math.abs(2*n-m)>1e-9)return Infinity;
    if(m%2===0){var k=m/2,p=1;for(var i=2;i<=k;i++)p*=i;return p;}
    var k=(m-1)/2,num=1;for(var i=1;i<=2*k+1;i+=2)num*=i;
    return num/Math.pow(2,k+1)*Math.sqrt(Math.PI);}
  function tri2(X,Y,Z){return ((X+Y-Z)>=0&&(X-Y+Z)>=0&&(-X+Y+Z)>=0&&((X+Y+Z)%2===0));}
  if(!(tri2(A,B,C)&&tri2(A,E,F)&&tri2(D,B,F)&&tri2(D,E,C)))return 0;
  function Df(X,Y,Z){return Math.sqrt(hf((X+Y-Z)/2)*hf((X-Y+Z)/2)*hf((-X+Y+Z)/2)/hf((X+Y+Z)/2+1));}
  var pre=Df(A,B,C)*Df(A,E,F)*Df(D,B,F)*Df(D,E,C);
  var tmin=Math.max((A+B+C)/2,(A+E+F)/2,(D+B+F)/2,(D+E+C)/2);
  var tmax=Math.min((A+B+D+E)/2,(A+C+E+F)/2,(B+C+D+F)/2);
  if(tmin>tmax+1e-9)return 0;
  var sum=0, t;
  for(t=tmin;t<=tmax+1e-9;t++){
    var s=hf(t+1)/(hf(t-(A+B+C)/2)*hf(t-(A+E+F)/2)*hf(t-(D+B+F)/2)*hf(t-(D+E+C)/2)
             *hf((A+B+D+E)/2-t)*hf((A+C+E+F)/2-t)*hf((B+C+D+F)/2-t));
    sum+=(t%2===0?1:-1)*s;
  }
  return pre*sum;
}
