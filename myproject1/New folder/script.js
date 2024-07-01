import { FooterData } from './Data/footer.js';

document.addEventListener('DOMContentLoaded', function() {
    const footerContent = document.getElementById('footer_middle_content');
    
    const sections = [
        { title: FooterData.TopTutorials.name, menu: FooterData.TopTutorials.menu },
        { title: FooterData.TopReference.name, menu: FooterData.TopReference.menu },
        { title: FooterData.TopExample.name, menu: FooterData.TopExample.menu },
        { title: FooterData.GetCertified.name, menu: FooterData.GetCertified.menu }
    ];

    sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        const sectionTitle = document.createElement('h2');
        sectionTitle.innerText = section.title;
        sectionDiv.appendChild(sectionTitle);
        
        section.menu.forEach(item => {
            const link = document.createElement('a');
            link.href = item.link;
            link.innerText = item.title;
            sectionDiv.appendChild(link);
        });
        
        footerContent.appendChild(sectionDiv);
    });
});
