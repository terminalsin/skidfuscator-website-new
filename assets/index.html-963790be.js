import{_ as i,W as l,X as r,Y as n,Z as s,$ as a,a2 as c,a0 as t,E as e}from"./framework-a6fc1c2a.js";const d={},u=n("h1",{id:"config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),s(" Config")],-1),v=n("p",null,"Here you'll learn everything about what the configuration has to offer. Make sure to read these details with a very keen eye. If you encounter any issues, please contact support. For premium members, you are entitled to a free configuration service by our team.",-1),k=n("h2",{id:"basic-of-the-configuration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#basic-of-the-configuration","aria-hidden":"true"},"#"),s(" Basic of the configuration")],-1),m={href:"https://github.com/lightbend/config",target:"_blank",rel:"noopener noreferrer"},b=t(`<p>By principle, we <strong>highly recommend using HOCON</strong> as it is simpler, more elegant and all-round easy to use. See attached the default config:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token literal-property property">libs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token literal-property property">driver</span><span class="token operator">:</span> <span class="token boolean">true</span>

stringEncryption <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">STANDARD</span>
  <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

numberEncryption <span class="token punctuation">{</span>
  <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

intAnnotationEncryption <span class="token punctuation">{</span>
  <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

stringAnnotationEncryption <span class="token punctuation">{</span>
  <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

flowCondition <span class="token punctuation">{</span>
  <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

flowException <span class="token punctuation">{</span>
  <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token literal-property property">strength</span><span class="token operator">:</span> <span class="token constant">AGGRESSIVE</span>
  <span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

flowRange <span class="token punctuation">{</span>
  <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

flowFactoryMaker <span class="token punctuation">{</span>
  <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

flowSwitch <span class="token punctuation">{</span>
  <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

outliner <span class="token punctuation">{</span>
  <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

ahegao <span class="token punctuation">{</span>
  <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token literal-property property">native</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

classRenamer <span class="token punctuation">{</span>
  <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

methodRenamer <span class="token punctuation">{</span>
  <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

fieldRenamer <span class="token punctuation">{</span>
  <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exemptions" tabindex="-1"><a class="header-anchor" href="#exemptions" aria-hidden="true">#</a> Exemptions</h2>`,3),h=t(`<div class="hint-container warning"><p class="hint-container-title">Note</p><p>Java parses string by sanitizing the backwards slash. This means you MUST double all backward slashes</p></div><h3 id="excluding-a-class" tabindex="-1"><a class="header-anchor" href="#excluding-a-class" aria-hidden="true">#</a> Excluding a class</h3><p>As a starting basis, to exclude a specific class, you must use the class regex exemption:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span><span class="token punctuation">{</span><span class="token operator">^</span>my\\<span class="token operator">/</span><span class="token keyword">class</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To fit this in the config, you need to pass it as a string.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;class{^my\\\\/class}&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="excluding-a-method" tabindex="-1"><a class="header-anchor" href="#excluding-a-method" aria-hidden="true">#</a> Excluding a method</h3><p>As a starting basis, to exclude a specific method, you must use the class method exemption:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>method<span class="token punctuation">{</span><span class="token operator">^</span>myMethod<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To fit this in the config, you need to pass it as a string.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;method{^myMethod}&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="excluding-a-method-in-a-specific-class" tabindex="-1"><a class="header-anchor" href="#excluding-a-method-in-a-specific-class" aria-hidden="true">#</a> Excluding a method in a specific class</h3><p>Just as we learnt previously, to exclude a method and a class we must do the following:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span><span class="token punctuation">{</span><span class="token operator">^</span>my\\<span class="token operator">/</span><span class="token keyword">class</span><span class="token punctuation">}</span>
method<span class="token punctuation">{</span><span class="token operator">^</span>myMethod<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, to exclude a method IN that specific class, all that is needed to be done is for the two to be chained up in a single line, as such:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span><span class="token punctuation">{</span><span class="token operator">^</span>my\\<span class="token operator">/</span><span class="token keyword">class</span><span class="token punctuation">}</span> method<span class="token punctuation">{</span><span class="token operator">^</span>myMethod<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Hence in the config, it&#39;d be as follow:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;class{^my\\/class} method{^myMethod}&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="libraries" tabindex="-1"><a class="header-anchor" href="#libraries" aria-hidden="true">#</a> Libraries</h2><p>Libraries are an important aspect of computing the classpath and ensuring maximum protection for your software. In this instance, you must provide a valid Java path argument as a string</p><p>Here below is the implementation code:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getLibs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getStringList</span><span class="token punctuation">(</span><span class="token string">&quot;libraries&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">emptyList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">File</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">distinct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here below is an example of valid java paths:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\test.jar
test.jar
./test.jar
/Home/test.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the config, these would be represented as follows:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>libraries <span class="token punctuation">[</span>
    <span class="token string">&quot;C:\\\\test.jar&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;test.jar&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;./test.jar&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;/Home/test.jar&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="driver" tabindex="-1"><a class="header-anchor" href="#driver" aria-hidden="true">#</a> Driver</h2><p>The driver is the hardening part of Skidfuscator. This feature is reserved to Premium. In a nutshell, per obfuscation, a new driver is generated and compiled for the following architectures:</p><table><thead><tr><th>Operating System</th><th>Supported Architectures</th></tr></thead><tbody><tr><td>Windows</td><td>x64_86</td></tr><tr><td>MacOS</td><td>x64_86, AARCH64 (ARM)</td></tr><tr><td>Linux</td><td>x64_86 (AMD64)</td></tr></tbody></table><p>To disable this feature (⚠️ this significantly decreases obfuscation strength), you must toggle the boolean:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">driver</span><span class="token operator">:</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="transformers" tabindex="-1"><a class="header-anchor" href="#transformers" aria-hidden="true">#</a> Transformers</h2><p>You can individually enable/disable each transformer.</p>`,33);function y(g,f){const p=e("ExternalLinkIcon"),o=e("RouterLink");return l(),r("div",null,[u,v,k,n("p",null,[s("The basis of the configuration is based on "),n("a",m,[s("lightbend config"),a(p)]),s(". This means by default, we support the three following formats: Java Properties, JSON, and HOCON.")]),b,n("p",null,[s("Using exemptions is identical to how these were previously done in the old system. To learn more about exemptions, navigate to "),a(o,{to:"/docs/exclusion.html"},{default:c(()=>[s("the page")]),_:1})]),h])}const w=i(d,[["render",y],["__file","index.html.vue"]]);export{w as default};
