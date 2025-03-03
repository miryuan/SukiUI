import{_ as s,c as a,o as t,ag as e}from"./chunks/framework.iG7LfLDF.js";const u=JSON.parse('{"title":"SukiWindow","description":"","frontmatter":{},"headers":[],"relativePath":"zh/documentation/controls/layout/sukiwindow.md","filePath":"zh/documentation/controls/layout/sukiwindow.md"}'),n={name:"zh/documentation/controls/layout/sukiwindow.md"};function l(h,i,k,p,o,d){return t(),a("div",null,i[0]||(i[0]=[e(`<h1 id="sukiwindow" tabindex="-1">SukiWindow <a class="header-anchor" href="#sukiwindow" aria-label="Permalink to &quot;SukiWindow&quot;">​</a></h1><p>在 SukiUI 中, <code>SukiWindow</code> 代替 <code>Window</code> 成为构建 App 的基础</p><p><img src="https://github.com/user-attachments/assets/9be7f60b-d694-42dd-86ff-490ea80a3347" alt="SukiWindow"></p><h2 id="背景样式" tabindex="-1">背景样式 <a class="header-anchor" href="#背景样式" aria-label="Permalink to &quot;背景样式&quot;">​</a></h2><p>SukiUI 允许你在三种不同的背景选项之间进行选择，分别是“气泡”（Bubble），即玻璃拟态设计；以及经典的“平面”（Flat）背景。</p><p>需要注意的是，背景会根据你的主题颜色（此处为蓝色）动态生成。</p><h2 id="bubble" tabindex="-1">Bubble <a class="header-anchor" href="#bubble" aria-label="Permalink to &quot;Bubble&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiWindow</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BackgroundStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bubble&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- 内容 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiWindow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h4 id="暗色" tabindex="-1">暗色 <a class="header-anchor" href="#暗色" aria-label="Permalink to &quot;暗色&quot;">​</a></h4><p><img src="https://github.com/user-attachments/assets/bdfeec4e-d0e7-4d7e-b075-b0616720acbd" alt="sukiwindow - dark"></p><h4 id="亮色" tabindex="-1">亮色 <a class="header-anchor" href="#亮色" aria-label="Permalink to &quot;亮色&quot;">​</a></h4><p><img src="https://github.com/user-attachments/assets/84dd83b4-be4f-4a0f-8c86-4d0c0e01e3ea" alt="sukiwindow - light"></p><h2 id="gradient" tabindex="-1">Gradient <a class="header-anchor" href="#gradient" aria-label="Permalink to &quot;Gradient&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiWindow</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BackgroundStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Gradient&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- 内容 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiWindow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h4 id="暗色-1" tabindex="-1">暗色 <a class="header-anchor" href="#暗色-1" aria-label="Permalink to &quot;暗色&quot;">​</a></h4><p><img src="https://github.com/user-attachments/assets/491a5e69-7b2f-4db0-87d0-6925aa79dee4" alt="sukiwindow - dark"></p><h4 id="亮色-1" tabindex="-1">亮色 <a class="header-anchor" href="#亮色-1" aria-label="Permalink to &quot;亮色&quot;">​</a></h4><p><img src="https://github.com/user-attachments/assets/7ef7bfcb-3fcf-4993-9aa6-aa1616c8a2e9" alt="sukiwindow - light"></p><h2 id="flat" tabindex="-1">Flat <a class="header-anchor" href="#flat" aria-label="Permalink to &quot;Flat&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiWindow</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BackgroundStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Flat&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- 内容 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiWindow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h4 id="暗色-2" tabindex="-1">暗色 <a class="header-anchor" href="#暗色-2" aria-label="Permalink to &quot;暗色&quot;">​</a></h4><p><img src="https://github.com/user-attachments/assets/2ff1b465-570b-4681-87b5-46fbc618e670" alt="sukiwindow - dark"></p><h4 id="亮色-2" tabindex="-1">亮色 <a class="header-anchor" href="#亮色-2" aria-label="Permalink to &quot;亮色&quot;">​</a></h4><p><img src="https://github.com/user-attachments/assets/bdeee364-3bb6-4509-8427-f150569618a9" alt="sukiwindow - light"></p><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h2><h3 id="logo" tabindex="-1">Logo <a class="header-anchor" href="#logo" aria-label="Permalink to &quot;Logo&quot;">​</a></h3><img src="https://sleekshot.app/api/download/AQ6CiLMLhBaA"><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiWindow.LogoContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!-- Logo --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiWindow.LogoContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="menu" tabindex="-1">Menu <a class="header-anchor" href="#menu" aria-label="Permalink to &quot;Menu&quot;">​</a></h3><img src="https://sleekshot.app/api/download/iGuqowytQiOn"><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiWindow</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsMenuVisible</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;True&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiWindow.MenuItems</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!-- Menu --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiWindow.MenuItems</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiWindow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h3 id="添加标题栏右侧控件" tabindex="-1">添加标题栏右侧控件 <a class="header-anchor" href="#添加标题栏右侧控件" aria-label="Permalink to &quot;添加标题栏右侧控件&quot;">​</a></h3><img src="https://sleekshot.app/api/download/aLrqQYoOd9N2"><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiWindow.RightWindowTitleBarControls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!-- 显示在标题栏右侧的控件 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiWindow.RightWindowTitleBarControls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="参阅" tabindex="-1">参阅 <a class="header-anchor" href="#参阅" aria-label="Permalink to &quot;参阅&quot;">​</a></h2><p><a href="https://github.com/kikipoulet/SukiUI/blob/main/SukiUI.Demo/SukiUIDemoView.axaml" target="_blank" rel="noreferrer">Demo: SukiUI.Demo/SukiUIDemoView.axaml</a></p><p><a href="https://github.com/kikipoulet/SukiUI/blob/main/SukiUI/Controls/SukiWindow.axaml.cs" target="_blank" rel="noreferrer">API: Controls/SukiWindow.axaml.cs</a></p>`,37)]))}const c=s(n,[["render",l]]);export{u as __pageData,c as default};
