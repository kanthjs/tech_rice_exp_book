# Report images in figures/ and images/ that no page uses, and image paths
# that pages reference but don't exist. Base R only.
#
#   Rscript _check-media.R
#
# Exits with status 1 if any referenced image is missing.

dirs <- c("figures", "images")
images <- unlist(lapply(dirs, function(d) file.path(d, list.files(d, recursive = TRUE))))
images <- images[grepl("[.](png|jpe?g|svg|gif|ico)$", images, ignore.case = TRUE)]
pages <- c(list.files(".", pattern = "[.]qmd$"), "_quarto.yml", "favicon-head.html", "site.webmanifest")
text <- unlist(lapply(pages, readLines, encoding = "UTF-8", warn = FALSE))

used <- vapply(images, function(img) any(grepl(img, text, fixed = TRUE)), logical(1))
# images referenced relative to the site root in the manifest/head
used <- used | vapply(basename(images), function(b) any(grepl(b, text, fixed = TRUE)), logical(1))

refs <- unique(unlist(regmatches(text, gregexpr("(figures|images)/[^)\"'[:space:]{}]+[.](png|jpe?g|svg|gif|ico)", text))))
missing <- refs[!file.exists(refs) & !grepl("[*]", refs)]  # skip globs from _quarto.yml

cat("Unused images (", sum(!used), "):\n", sep = "")
if (any(!used)) cat(paste0("  ", images[!used]), sep = "\n") else cat("  none\n")

cat("\nMissing images (", length(missing), "):\n", sep = "")
if (length(missing)) cat(paste0("  ", missing), sep = "\n") else cat("  none\n")

if (length(missing)) quit(status = 1)
