# atomic-physics-topics-intro

**从原子到磁力仪**：原子物理与光谱学的自底向上系统性导览（纯静态 HTML，GitHub Pages 托管，无后端依赖）。

## 这是什么

一个从零开始学原子物理的知识站点：不假设任何前置知识，从量子力学地基逐层搭起，一路走到原子磁力仪、光钟、量子计量与量子计算的前沿。每个概念都配一句"一句话直觉"，每章有可动手的**交互演示**——页面里的数值全部由浏览器内脚本现场计算，不依赖任何后端。

## 站点地图（怎么逛）

### ① 主线页

| 文件 | 内容 |
|---|---|
| [index.html](https://wadesha.github.io/atomic-physics-topics-intro/index.html) | **主线 13 章**：量子力学基石 → 碱金属原子 → 光与物质 → 自旋动力学 → SERF 磁力仪 / FADOF 滤光器 / 费米共振三支线 → 计算方法 → 25 个交互演示 → 文献谱系 → 术语表。含学习地图与难度阶梯，三条读法（直觉流 / 标准流 / 钻研流）。 |
| [demos/](https://wadesha.github.io/atomic-physics-topics-intro/demos/) | **25 个独立交互演示页**：能级、光谱、光抽运、SERF、FADOF、费米共振、Bloch 方程等，每个都可拖滑块看响应。 |

### ② 实验与专题支线（从主线"专题库"进入）

| 文件 | 主题 | 核心内容 |
|---|---|---|
| [atomic_experiments.html](https://wadesha.github.io/atomic-physics-topics-intro/atomic_experiments.html) | **原子磁力仪实验** | 光抽运极化、SERF、FID 脉冲磁力仪、脑磁图四个真实验：原理 → 搭建 → 测量 → 结果。含灵敏度进步史（2002 年 10 fT → 2010 年 0.16 fT/√Hz）与灵敏度阶梯表。 |
| [noise_suppression.html](https://wadesha.github.io/atomic-physics-topics-intro/noise_suppression.html) | **噪声抑制** | 磁力仪的"消音"工程：环境 / 光 / 原子 / 电子四类噪声的数学语言、屏蔽、主动稳定、梯度仪、平衡探测、调制解调、光移、SERF、自旋压缩、噪声预算表。 |
| [cold_atoms.html](https://wadesha.github.io/atomic-physics-topics-intro/cold_atoms.html) | **冷原子** | 激光冷却的"降温接力赛"：多普勒冷却（铷 140 µK）→ 亚多普勒（2.5 µK）→ 磁光阱 → 蒸发冷却与 BEC（1995，170 nK）→ 光钟 / 原子干涉仪 / 量子模拟应用。 |
| [molecular_spectroscopy.html](https://wadesha.github.io/atomic-physics-topics-intro/molecular_spectroscopy.html) | **分子光谱与费米共振** | 振动-转动能级、简正模式、费米共振的 2×2 对角化、CO₂ 双峰（1285/1388 cm⁻¹）、HITRAN 数据库、温室效应机制。 |
| [atomic_clocks.html](https://wadesha.github.io/atomic-physics-topics-intro/atomic_clocks.html) | **原子钟与时间频率** | 秒的定义（9,192,631,770 Hz）、铯喷泉钟、光钟（10⁻¹⁸）、核钟前沿、GPS 相对论修正、时间同步网络。 |
| [biomagnetism.html](https://wadesha.github.io/atomic-physics-topics-intro/biomagnetism.html) | **生物磁测量** | 脑磁图 / 心磁图 / 胎儿磁图：SQUID 到 OPM 头盔、阵列信号处理、临床前景（与主线 SERF 直接衔接）。 |
| [quantum_metrology.html](https://wadesha.github.io/atomic-physics-topics-intro/quantum_metrology.html) | **量子计量学** | 标准量子极限 → 自旋压缩 → 海森堡极限、纠缠增强测量、QND、LIGO 压缩光实例。 |
| [spectroscopy_methods.html](https://wadesha.github.io/atomic-physics-topics-intro/spectroscopy_methods.html) | **光谱学方法** | 饱和吸收（兰姆凹陷）、偏振光谱、腔增强、光学频率梳、Pound-Drever-Hall 稳频、DAVLL/MTS——"看光谱的手艺"。 |
| [atom_interferometry.html](https://wadesha.github.io/atomic-physics-topics-intro/atom_interferometry.html) | **原子干涉仪与惯性传感** | 物质波分束 / 反射（π/2-π-π/2）、重力仪 / 梯度仪 / 陀螺仪、测 g / G / α、等效原理检验、空间应用。 |
| [seop_polarized_gases.html](https://wadesha.github.io/atomic-physics-topics-intro/seop_polarized_gases.html) | **SEOP 与极化气体** | ³He / ¹²⁹Xe 自旋交换光泵浦、超极化（10⁴–10⁵ 倍）、肺部 MRI、中子极化。 |
| [neutral_atom_quantum.html](https://wadesha.github.io/atomic-physics-topics-intro/neutral_atom_quantum.html) | **中性原子量子计算** | 光镊阵列、里德伯阻塞、两比特门（>99%）、逻辑量子比特、量子模拟现状。 |
| [magnetic_shielding.html](https://wadesha.github.io/atomic-physics-topics-intro/magnetic_shielding.html) | **磁屏蔽与磁场环境** | 屏蔽材料与多层桶设计（1 kHz 达 10⁹）、屏蔽房、主动补偿（40 fT/√Hz）、磁场标定。 |

### ③ 跨站点专题（核物理侧仓库，内容与原子主线呼应）

| 文件 | 主题 |
|---|---|
| [element_origins.html](https://wadesha.github.io/nuclear-physics-rmf-eos/element_origins.html) | **元素起源**：大爆炸核合成 → 恒星燃烧 → s/r 过程 → 中子星并合造金。"你身体里的每个原子从哪来"。 |

## 每页都有的功能

- **☰ 顶部折叠目录**：右上角展开，自动从章节生成，滚动时高亮当前位置
- **◐ 深/浅主题切换**：右下角小圆钮，一键切换并记忆偏好
- **一句话直觉**：每章开头先用生活语言说清"这一步在干什么"
- **术语表**：每站末尾，术语首次出现时配一句通俗解释
- **交互演示**：数值由页内脚本实时计算，可拖滑块、调参数看响应

## 技术说明

- 纯静态 HTML + 原生 JavaScript + Canvas，无任何外部依赖、无后端、无跟踪
- 全部内容为公开文献知识的系统化整理（含文献年份与数据来源标注），页面本身不含任何个人信息
