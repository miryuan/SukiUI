import{_ as i}from"./chunks/autocompletebox.ClT3kpWX.js";import{_ as a,c as t,o as n,ag as l}from"./chunks/framework.iG7LfLDF.js";const y=JSON.parse('{"title":"AutoCompleteBox","description":"","frontmatter":{},"headers":[],"relativePath":"zh/documentation/controls/inputs/autocompletebox.md","filePath":"zh/documentation/controls/inputs/autocompletebox.md"}'),e={name:"zh/documentation/controls/inputs/autocompletebox.md"};function h(k,s,p,E,r,o){return n(),t("div",null,s[0]||(s[0]=[l('<h1 id="autocompletebox" tabindex="-1">AutoCompleteBox <a class="header-anchor" href="#autocompletebox" aria-label="Permalink to &quot;AutoCompleteBox&quot;">​</a></h1><p>为 <code>TextBox</code> 添加补全功能，当你需要提示建议输入项时这将有用</p><h2 id="展示" tabindex="-1">展示 <a class="header-anchor" href="#展示" aria-label="Permalink to &quot;展示&quot;">​</a></h2><img src="'+i+`" height="300px" width="300px"><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">AutoCompleteBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">AutoCompleteBox.ItemsSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!-- Suggested strings --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">objectModel:ObservableCollection</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x:TypeArguments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;system:String&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">system:String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;USA 1&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">system:String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">system:String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;USA 2&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">system:String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">system:String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;USA 3&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">system:String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">system:String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;France&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">system:String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">system:String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;England&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">system:String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">system:String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Germany&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">system:String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">system:String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Belgium&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">system:String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">system:String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;China&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">system:String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">objectModel:ObservableCollection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">AutoCompleteBox.ItemsSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">AutoCompleteBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="参阅" tabindex="-1">参阅 <a class="header-anchor" href="#参阅" aria-label="Permalink to &quot;参阅&quot;">​</a></h2><p><a href="https://github.com/kikipoulet/SukiUI/blob/main/SukiUI.Demo/Features/ControlsLibrary/CollectionsView.axaml" target="_blank" rel="noreferrer">Demo: SukiUI.Demo/Features/ControlsLibrary/CollectionsView.axaml</a></p>`,8)]))}const c=a(e,[["render",h]]);export{y as __pageData,c as default};
