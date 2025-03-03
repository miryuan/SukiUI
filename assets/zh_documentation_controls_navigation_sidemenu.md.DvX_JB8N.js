import{_ as i}from"./chunks/sukisidemenu.CMrCrOEo.js";import{_ as a,c as n,o as t,ag as e}from"./chunks/framework.iG7LfLDF.js";const g=JSON.parse('{"title":"SukiSideMenu","description":"","frontmatter":{},"headers":[],"relativePath":"zh/documentation/controls/navigation/sidemenu.md","filePath":"zh/documentation/controls/navigation/sidemenu.md"}'),l={name:"zh/documentation/controls/navigation/sidemenu.md"};function k(h,s,p,E,r,d){return t(),n("div",null,s[0]||(s[0]=[e('<h1 id="sukisidemenu" tabindex="-1">SukiSideMenu <a class="header-anchor" href="#sukisidemenu" aria-label="Permalink to &quot;SukiSideMenu&quot;">​</a></h1><p><code>SukiSideMenu</code> 是 SukiUI 主要的导航控件，类似其他库中的 <code>NavigationView</code></p><h2 id="展示" tabindex="-1">展示 <a class="header-anchor" href="#展示" aria-label="Permalink to &quot;展示&quot;">​</a></h2><img src="'+i+`" height="200px" width="200px"><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiSideMenu</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsSearchEnabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;True&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiSideMenu.Items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiSideMenuItem</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Page Title&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Classes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Compact&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiSideMenuItem.Icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                &lt;!-- Icon --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiSideMenuItem.Icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiSideMenuItem.PageContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                &lt;!-- Page Content (必需) --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiSideMenuItem.PageContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiSideMenuItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!-- 其他页面 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiSideMenu.Items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiSideMenu.HeaderContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!-- Header Content --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiSideMenu.HeaderContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiSideMenu.FooterContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!-- Footer Content --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiSideMenu.FooterContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:SukiSideMenu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如果 <code>suki:SukiSideMenuItem.PageContent</code> 内没有内容，类似 <code>System.InvalidOperationException: The control SukiUI.Controls.SukiSideMenuItem already has a visual parent StackPanel while trying to add it as a child of ContentPresenter (Name = PART_FirstBufferControl)</code> 的异常会被触发。</p></div><h2 id="参阅" tabindex="-1">参阅 <a class="header-anchor" href="#参阅" aria-label="Permalink to &quot;参阅&quot;">​</a></h2><p><a href="https://github.com/kikipoulet/SukiUI/blob/main/SukiUI.Demo/SukiUIDemoView.axaml" target="_blank" rel="noreferrer">Demo: SukiUI.Demo/SukiUIDemoView.axaml</a></p><p><a href="https://github.com/kikipoulet/SukiUI/blob/main/SukiUI/Controls/SukiSideMenu.axaml.cs" target="_blank" rel="noreferrer">API: Controls/SukiSideMenu.axaml.cs</a></p>`,10)]))}const c=a(l,[["render",k]]);export{g as __pageData,c as default};
