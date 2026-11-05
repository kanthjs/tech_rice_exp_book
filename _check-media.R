# Report images in images/ that no page uses, and image paths that
# pages reference but don't exist. Base R only.
#
#   Rscript _check-media.R
#
# Exits with status 1 if any referenced image is missing.

images <- list.files("images", recursive = TRUE)
pages <- c(list.files(".", pattern = "\\.qmd$"), "_quarto.yml")
text <- unlist(lapply(pages, readLines, encoding = "UTF-8", warn = FALSE))

used <- vapply(images, function(img) {
  any(grepl(paste0("images/", img), text, fixed = TRUE))
}, logical(1))

refs <- unique(unlist(regmatches(text, gregexpr("images/[^)\"'[:space:]{}]+", text))))
missing <- refs[!file.exists(refs)]

cat("Unused images (", sum(!used), "):\n", sep = "")
if (any(!used)) cat(paste0("  images/", images[!used]), sep = "\n") else cat("  none\n")

cat("\nMissing images (", length(missing), "):\n", sep = "")
if (length(missing)) cat(paste0("  ", missing), sep = "\n") else cat("  none\n")

if (length(missing)) quit(status = 1)
