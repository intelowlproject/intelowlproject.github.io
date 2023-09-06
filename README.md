# **Landing website for the IntelOwl Project Community**

[Figma Prototype](https://www.figma.com/proto/1WoQUNP99W1Ou3xMelv9AT/IntelOwl-website?type=design&nod%5B%E2%80%A6%5D81%2C0.04=&scaling=scale-down&starting-point-node-id=258%3A5174&node-id=258-3631&show-proto-sidebar=1)

## Adding new content to the website

### **Adding up blogs.**
Add your article as a new markdown file in the [Blogs directory](https://github.com/intelowlproject/intelowlproject.github.io/tree/develop/Blogs) with the same title as the file.

If you are an IntelOwl contributor and you would like to add content on this blog which is related to IntelOwl, feel free to fork this repository and submit an article! We will review it and publish it! 

### **Adding up a new feature/testimonial/sponsor.**

In [Constants folder](https://github.com/intelowlproject/intelowlproject.github.io/tree/develop/constants), you can add the content for specific section in thier specific file in form of these json objects, no need to scour the codebase.

Features in `featuresdata.ts`
 ```(json)
{
        "color": "lighter",
        "title":"feature name",
        "description":"feature desc"
}
```
(color here defines the shade of the container which would be rendered.)

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
        companylink: "link",
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

### **Contributor Notes**
Make sure to go through the [contribute](https://intelowl.readthedocs.io/en/latest/Contribute.html#create-a-pull-request) section here, before creating your pr.


While testing any markdown related changes, if you run into any issue, you can do `npx --no-install contentlayer build` to generate the contentlayer content yourself, through your vscode terminal.

##### Run The Application locally
```commandline
npm install
npm run dev
```


