/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const md = require('markdown-it')();

/**
 * @this {Object}
 * @param {string} content Markdown with the content for the compare element.
 * @return {string}
 */
function CompareCaption(content) {
  if (this.ctx.export) {
    return `<span class="wd-caption">${md.renderInline(content)}</span>`;
  }

  return `<figcaption class="compare__caption">
${content}</figcaption>`;
}

module.exports = CompareCaption;
