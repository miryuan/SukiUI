import{_ as s,c as i,o as t,ag as e}from"./chunks/framework.iG7LfLDF.js";const c=JSON.parse('{"title":"TextBox","description":"","frontmatter":{},"headers":[],"relativePath":"zh/documentation/controls/inputs/textbox.md","filePath":"zh/documentation/controls/inputs/textbox.md"}'),l={name:"zh/documentation/controls/inputs/textbox.md"};function h(n,a,o,p,r,k){return t(),i("div",null,a[0]||(a[0]=[e('<h1 id="textbox" tabindex="-1">TextBox <a class="header-anchor" href="#textbox" aria-label="Permalink to &quot;TextBox&quot;">​</a></h1><p>收集用户提供的信息的基础控件</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><h3 id="simple" tabindex="-1">Simple <a class="header-anchor" href="#simple" aria-label="Permalink to &quot;Simple&quot;">​</a></h3><img src="https://sleekshot.app/api/download/8nnHYLrgchCe"><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TextBox</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h3 id="clear-button" tabindex="-1">Clear Button <a class="header-anchor" href="#clear-button" aria-label="Permalink to &quot;Clear Button&quot;">​</a></h3><img src="https://sleekshot.app/api/download/tNkEf1yb0lml"><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TextBox</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> theme:TextBoxExtensions.AddDeleteButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;True&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h3 id="prefix" tabindex="-1">Prefix <a class="header-anchor" href="#prefix" aria-label="Permalink to &quot;Prefix&quot;">​</a></h3><img src="https://sleekshot.app/api/download/354ntrKtfvXo"><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TextBox</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> theme:TextBoxExtensions.Prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;www.google.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h3 id="watermark" tabindex="-1">Watermark <a class="header-anchor" href="#watermark" aria-label="Permalink to &quot;Watermark&quot;">​</a></h3><img src="https://sleekshot.app/api/download/Y3odALgSfPCT"><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TextBox</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Watermark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Watermark&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="参阅" tabindex="-1">参阅 <a class="header-anchor" href="#参阅" aria-label="Permalink to &quot;参阅&quot;">​</a></h2><p><a href="https://github.com/kikipoulet/SukiUI/blob/main/SukiUI.Demo/Features/Dashboard/DashboardView.axaml" target="_blank" rel="noreferrer">Demo: SukiUI.Demo/Features/Dashboard/DashboardView.axaml</a></p>',17)]))}const E=s(l,[["render",h]]);export{c as __pageData,E as default};
