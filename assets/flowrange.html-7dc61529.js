import{_ as n,W as a,X as s,a0 as e}from"./framework-fe2d940b.js";const i={},t=e(`<h2 id="flow-range" tabindex="-1"><a class="header-anchor" href="#flow-range" aria-hidden="true">#</a> Flow Range</h2><p>A flow exception range obfuscation pass is a technique used in compiler optimization to add obfuscation to a program&#39;s exception handling code.</p><p>The idea behind this technique is to modify the program&#39;s exception handling routines (such as try-catch blocks) to include additional control flow instructions that make it harder to understand the program&#39;s logical flow.</p><p>For example, a simple try-catch block might be transformed into a more complex structure that includes nested try-catch blocks or additional branching instructions. This can make it more difficult for an observer to understand the program&#39;s exception handling behavior and potentially uncover vulnerabilities that could be exploited.</p><p>This technique is often used in conjunction with other obfuscation techniques to provide additional layers of protection. However, it should be noted that adding unnecessary complexity to exception handling code can also make it harder to debug and maintain the program, so it should be used judiciously.</p><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>flowRange <span class="token punctuation">{</span>
     <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span>
     <span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="behind-the-scenes" tabindex="-1"><a class="header-anchor" href="#behind-the-scenes" aria-hidden="true">#</a> Behind-the-scenes</h2><h4 id="unobfuscated" tabindex="-1"><a class="header-anchor" href="#unobfuscated" aria-hidden="true">#</a> Unobfuscated</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">String</span> uwu <span class="token operator">=</span> <span class="token string">&quot;UwU&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>uwu<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="obfuscated" tabindex="-1"><a class="header-anchor" href="#obfuscated" aria-hidden="true">#</a> Obfuscated</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">String</span> uwu <span class="token operator">=</span> <span class="token string">&quot;UwU&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     label1<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token keyword">try</span> <span class="token punctuation">{</span>
               <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token number">0x92A8B44</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">8</span> <span class="token operator">!=</span> <span class="token number">0x97F7F</span><span class="token punctuation">)</span>
                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalReflectiveException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token keyword">break</span> label1<span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IllegalReflectiveException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
               <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>uwu<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ir-representation" tabindex="-1"><a class="header-anchor" href="#ir-representation" aria-hidden="true">#</a> IR Representation</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> Original flow:       Obfuscated Flow:

 ┌─────────┐            ┌─────────┐
 │ Block A │            │ Block A │
 └────┬────┘            └────┬────┘
      │                      │
 ┌────▼────┐         ┌───────▼────────┐
 │ Block B │         │ Random If Stmt │
 └─────────┘         └───────┬────────┘
                             │
                   ┌─────┐◄──┴───►┌─────┐
                   │ Yes │        │ No  │
                   └─────┘        └──┬──┘
                                     │
                               ┌─────▼─────┐
                               │ Exception │
                               └───────────┘

                      ┌─────────────┐
                      │  Exception  │
                      │   Catcher   │
                      └──────┬──────┘
                             │
                        ┌────▼────┐
                        │ Block B │
                        └─────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[t];function c(l,p){return a(),s("div",null,o)}const r=n(i,[["render",c],["__file","flowrange.html.vue"]]);export{r as default};
