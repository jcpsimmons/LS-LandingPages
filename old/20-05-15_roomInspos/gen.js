links = [
  "inspiration/styles/modern/modern-office-design-with-pierce-black-corner-desk",
  "inspiration/styles/modern/modern-office-design-with-pierce-black-writing-desk",
  "inspiration/styles/modern/modern-office-design-with-adams-white-desk",
  "inspiration/styles/industrial/industial-office-design-with-whistler-desk",
  "inspiration/styles/mid-century/mid-century-office-design-with-rita-sofa-table",
  "inspiration/styles/traditional/traditional-office-design-with-valencia-executive-desk2",
  "inspiration/styles/industrial/industial-office-design-with-foundry-writing-desk",
];

out = [];

for (let i = 0; i < links.length; i++) {
  out.push(` <a
href="${links[i]}"
class="item-link"
>
<img
  src="/globalassets/images/inspiration/2020/05/OfficeDesign${i + 1}_Small.jpg"
  alt="${links[i].split(/\//g).pop().replace(/-/g, " ")}"
  class="img-responsive"
/>
</a>`);
}

out.join("");
