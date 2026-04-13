---
publishDate: 2026-04-08T00:00:00Z
title: Data Reduction Log Template
excerpt: A short journal format for recording script versions, parameter choices, anomaly handling, and the traps hidden in a reduction workflow.
category: Data Reduction
tags:
  - Python
  - Astropy
  - Data cleaning
---

Data reduction gets painful when everything felt obvious at the time and impossible to reconstruct two weeks later.
That is why this kind of journal entry should preserve process, not just results.

## What to record for each run

- Where the input data came from and whether the version is fixed.
- What preprocessing steps were applied, such as outlier removal, normalization, time correction, or coordinate conversion.
- Which parameters are most sensitive for the final result.
- Whether any temporary scripts were used and where those files ended up.

## A useful structure

### Input

Record the data source, download date, and selection rules.

### Processing

List the key commands, script entry points, and important parameters in order.

### Problems

Write down any outliers, failed steps, or unresolved behavior that appeared in this run.

### Conclusion

End with a short note on whether the result is ready for the next stage of analysis.
