# **landing website for the intelowlproject.**



[Figma Prototype](https://www.figma.com/proto/1WoQUNP99W1Ou3xMelv9AT/IntelOwl-website?type=design&nod%5B%E2%80%A6%5D81%2C0.04=&scaling=scale-down&starting-point-node-id=258%3A5174&node-id=258-3631&show-proto-sidebar=1)

## Adding new content to the website

### **Adding up a new feature/testimonial/sponsor.**

In Constants folder, you can add the content for specific section in thier specific file in form of these json objects, no need to scour the codebase.

Features in `featuresdata.ts`
 ```(json)
{
        "id": "1",
        "title":"feature name",
        "description":"feature desc"
}
```

Testimonials in `testimonialdata.ts`
 ```(json)
{
        name: "meh",
        designation: "engineer",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."  
 },
```
Sponsors in `sponsordata.ts`
```
{
        companyname: "ushfhjhb",
        companylevel: "bronze",
        companylogo: "image path",
        companydesc: "akjda jlfal jfbjabj lablj absjlfba"
 },
```


Faq's in `faqdata.ts`
```
{
        question: "Lorem ipsum dolor sit a",
        answer:"Lorem ipsum dolor sit a Lorem ipsum dolor sit a"
 },
```

### **Adding up blogs.**
Add your blog as a new markdown file in the blogs directory with the same title as the file.



