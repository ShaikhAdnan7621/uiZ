"use client"
import componentsCode from '@/app/data/componentscode'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/Component/Accordion'
import MdView from '@/Component/Mdview'
import React, { useState } from 'react'

function Page() {
    // State to manage accordion items
    const [openItem, setOpenItem] = useState(null);

    const toggleAccordion = (index) => {
        setOpenItem(openItem === index ? null : index);
    };

    return (
        <section className="space-y-4 flex flex-col w-full" id='section1'>
            <h2 className="text-4xl my-5 text-center font-semibold">MdView</h2>
            <div className='md:flex px-5 gap-2 items-center'>
                <div className=' md:grow  flex items-center justify-center'>
                    <MdView>
                        {"## Markdown Example\n\nHere is an example of Markdown syntax:\n\n**Headers:**\n\n* `# Heading 1`\n* `## Heading 2`\n* `### Heading 3`\n\n**Text Styles:**\n\n* **Bold:** `**This text is bold**`\n* *Italics:* `*This text is italicized*`\n* ***Bold and Italics:*** `***This text is bold and italicized***`\n\n**Lists:**\n\n* **Unordered list:**\n  * Item 1\n  * Item 2\n  * Item 3\n* **Ordered list:**\n  1. Item 1\n  2. Item 2\n  3. Item 3\n\n**Links:**\n\n* [This is a link to Google](https://www.google.com)\n\n**Images:**\n\n* ![Image alt text](https://www.example.com/image.jpg)\n\n**Code:**\n\n* Inline code: `` `This is inline code` ``\n* Block code: \n```python\ndef hello_world():\n  print(\"Hello, world!\")\n```\n\n**Horizontal Rule:**\n\n --- \n\n**Tables:**\n\n| Header 1 | Header 2 |\n|---|---|\n| Cell 1 | Cell 2 |\n| Cell 3 | Cell 4 |\n\n**Blockquotes:**\n\n> This is a blockquote.\n\n**Emphasis:**\n\n* You can also emphasize text with underscores: _This text is italicized_\n* You can also make text bold with double asterisks: **This text is bold**\n\nThis is a basic example of Markdown syntax. There are many other features available, such as code highlighting, footnotes, and tables. For more information, you can check out the official Markdown documentation at [https://www.markdownguide.org/](https://www.markdownguide.org/). \n"}
                    </MdView>
                </div>
            </div>
            <AccordionItem open={openItem === 0} onClick={() => toggleAccordion(0)}>
                <AccordionTrigger>Copy Code</AccordionTrigger>
                <AccordionContent>
                    <MdView>
                        {"```## Markdown Example\n\nHere is an example of Markdown syntax:\n\n**Headers:**\n\n* `# Heading 1`\n* `## Heading 2`\n* `### Heading 3`\n\n**Text Styles:**\n\n* **Bold:** `**This text is bold**`\n* *Italics:* `*This text is italicized*`\n* ***Bold and Italics:*** `***This text is bold and italicized***`\n\n**Lists:**\n\n* **Unordered list:**\n  * Item 1\n  * Item 2\n  * Item 3\n* **Ordered list:**\n  1. Item 1\n  2. Item 2\n  3. Item 3\n\n**Links:**\n\n* [This is a link to Google](https://www.google.com)\n\n**Images:**\n\n* ![Image alt text](https://www.example.com/image.jpg)\n\n**Code:**\n\n* Inline code: `` `This is inline code` ``\n* Block code: \n```python\ndef hello_world():\n  print(\"Hello, world!\")\n \n\n**Horizontal Rule:**\n\n --- \n\n**Tables:**\n\n| Header 1 | Header 2 |\n|---|---|\n| Cell 1 | Cell 2 |\n| Cell 3 | Cell 4 |\n\n**Blockquotes:**\n\n> This is a blockquote.\n\n**Emphasis:**\n\n* You can also emphasize text with underscores: _This text is italicized_\n* You can also make text bold with double asterisks: **This text is bold**\n\nThis is a basic example of Markdown syntax. There are many other features available, such as code highlighting, footnotes, and tables. For more information, you can check out the official Markdown documentation at [https://www.markdownguide.org/](https://www.markdownguide.org/). \n ```"}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem open={openItem === 1} onClick={() => toggleAccordion(1)}>
                <AccordionTrigger>Component Code</AccordionTrigger>
                <AccordionContent>
                    <MdView>
                        {componentsCode.Mdview}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
        </section>
    )
}

export default Page;
