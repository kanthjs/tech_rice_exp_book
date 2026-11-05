# R code chunks

R chunks execute at render time, locally and in CI, so the output shown in the book is real output. A chunk is done when it renders with sensible output: the analysis it demonstrates has degrees of freedom left for the error term, and the numbers match the prose around it.

## Writing a chunk

- Use executable fences: ```` ```{r} ````. A plain ```` ```r ```` fence is display-only and its output is never checked.
- Load only the packages the chunk uses. Packages available in CI are installed in `.github/workflows/deploy.yml` (`knitr`, `rmarkdown`, `agricolae`); when a chunk needs another package, add it there in the same change.
- Use example data that is **realistic**: the right size for the design (e.g. 4 treatments × 4 replications for an RCB), plausible values for rice (yields in t/ha around 3–7), and enough residual df for an F-test (aim for at least 12, as chapter 2 recommends). Define the data in the chunk, or read it from a file committed next to the chapter.
- Seed anything random (`design.rcbd(..., seed = 123)`, `set.seed()`), so the rendered layout is stable between builds.
- Interpret the output in the prose right after the chunk, using the numbers the chunk actually prints.

## Chunks that must not run

Mark them with `#| eval: false`. Two legitimate cases: installation commands (`install.packages(...)`), and code shown for another tool's syntax. Code that fails because its data is broken counts as a bug to fix, not a case for `eval: false`; if you can't fix it now, add an HTML comment `<!-- TODO: ... -->` above the chunk saying what's wrong.

Non-R code (SAS, GenStat) uses its own display fence, e.g. ```` ```sas ````.
