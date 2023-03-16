import{_ as e,W as i,X as n,a0 as a}from"./framework-a6fc1c2a.js";const s={},d=a(`<h2 id="flow-range" tabindex="-1"><a class="header-anchor" href="#flow-range" aria-hidden="true">#</a> Flow Range</h2><p>A flow exception range obfuscation pass is a technique used in compiler optimization to add obfuscation to a program&#39;s exception handling code.</p><p>The idea behind this technique is to modify the program&#39;s exception handling routines (such as try-catch blocks) to include additional control flow instructions that make it harder to understand the program&#39;s logical flow.</p><p>For example, a simple try-catch block might be transformed into a more complex structure that includes nested try-catch blocks or additional branching instructions. This can make it more difficult for an observer to understand the program&#39;s exception handling behavior and potentially uncover vulnerabilities that could be exploited.</p><p>This technique is often used in conjunction with other obfuscation techniques to provide additional layers of protection. However, it should be noted that adding unnecessary complexity to exception handling code can also make it harder to debug and maintain the program, so it should be used judiciously.</p><h2 id="ir-representation" tabindex="-1"><a class="header-anchor" href="#ir-representation" aria-hidden="true">#</a> IR Representation</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> Original flow:       Obfuscated Flow:

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[d];function l(o,r){return i(),n("div",null,t)}const u=e(s,[["render",l],["__file","flowrange.html.vue"]]);export{u as default};
