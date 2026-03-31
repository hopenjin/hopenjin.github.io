Title: Update advisor sentence on homepage
Time: 2026-03-31 13:50:00
Task: 将主页 about 页面中的导师介绍句子改为当前版本，并给 Dr. Bogdan Carbunar 名字加入主页链接。
Actions: Edited `_pages/about.md` to replace the old advisor sentence with the new wording and Markdown link; created `agents_note.md` for project-level traceability.
Artifacts: N/A

Title: Verify homepage text update
Time: 2026-03-31 13:52:00
Task: 验证主页导师句子替换后的文件内容与站点构建状态。
Actions: Checked the updated snippet in `_pages/about.md`; ran `bundle exec jekyll build`, which failed because the `jekyll` gem executable is not currently available in the local Ruby environment (`bundler: command not found: jekyll`).
Artifacts: N/A
