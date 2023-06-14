# **landing website for the intelowlproject.**



[Figma Prototype](https://www.figma.com/proto/1WoQUNP99W1Ou3xMelv9AT/IntelOwl-website?type=design&nod%5B%E2%80%A6%5D81%2C0.04=&scaling=scale-down&starting-point-node-id=258%3A5174&node-id=258-3631&show-proto-sidebar=1)

## Adding new content to the website

### **Adding up a new feature/testimonial/sponsor.**

In [Constants folder](https://github.com/intelowlproject/site/tree/develop/constants), you can add the content for specific section in thier specific file in form of these json objects, no need to scour the codebase.

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
}
```
Sponsors in `sponsordata.ts`
```
{
        companyname: "ushfhjhb",
        companylevel: "bronze",
        companylogo: "image path",
        companydesc: "akjda jlfal jfbjabj lablj absjlfba"
}
```


Faq's in `faqdata.ts`
```
{
        question: "Lorem ipsum dolor sit a",
        answer:"Lorem ipsum dolor sit a Lorem ipsum dolor sit a"
}
```

### **Adding up blogs.**
Add your blog as a new markdown file in the [Blogs directory](https://github.com/intelowlproject/site/tree/develop/Blogs) with the same title as the file.


**Note**
For any newer images/pdf's/media to be added, the path shall be `/site/{image.png}` rather than `/image.png` this is due to how routes are handled while deploying to github pages.

