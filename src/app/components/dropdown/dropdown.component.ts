import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ITranslations } from '../../Interfaces/ITranslations';

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent implements OnInit {
  @Output() dropdownOpened = new EventEmitter<boolean>();

  isOpen = false;
  currentLanguage = 'en';
  dropdownVisible = false;

  languages: Language[] = [
    { code: 'en', name: 'English', flag: 'assets/flags/usa.webp' },
    { code: 'ka', name: 'ქართული', flag: 'assets/flags/georgia.webp' }
  ];
/// TRANSLATIONS  /// TRANSLATIONS  /// TRANSLATIONS  /// TRANSLATIONS  /// TRANSLATIONS
/// TRANSLATIONS  /// TRANSLATIONS  /// TRANSLATIONS  /// TRANSLATIONS  /// TRANSLATIONS
  translations: ITranslations = {
    en: {
      home: 'Home',
      about: 'About Me',
      projects: 'Projects',
      backend: 'Back-End',
      Name: 'Nikoloz Lobzhanidze',
      title: 'FullStack Developer',
      languages: 'Languages',
      resume: 'Download Resume',
      languagesText: 'Feel free to check out my languages page for more details.',
      languagesLink: 'Languages',
      summary: 'Summary',
       apiSummary: 'I am an experienced Full-Stack Web Developer with a strong proficiency in building high-quality web applications. I specialize in front-end development with Angular, delivering clean, well-structured, and fully responsive websites with clear, properly documented code to ensure maintainability and scalability.\n\nI focus on crafting seamless user experiences with optimized, efficient solutions. On the back-end, I am skilled in developing RESTful APIs with ASP.NET, writing well-documented and maintainable code to enhance clarity, performance, and scalability.\n\nMy strong problem-solving skills allow me to quickly and effectively debug, optimize, and implement innovative solutions. With strong organizational skills, I am able to efficiently plan and execute projects, ensuring smooth development workflows and high-quality deliverables.\n\nI am passionate about creating robust, efficient, and scalable web applications that align with business objectives and exceed expectations.',
       contact: 'Contact Me',
       followMe: 'Follow Me',
       footerText: '© 2025 Nika Lobzhanidze | All Rights Reserved.',
       aboutMe: 'About Me',
       introduction: 'I’m Fullstack developer who graduated from the IT Step Academy Georgia in April 2025. I successfully completed a full-stack development course, where I gained expertise in both front-end and back-end technologies. During this journey, I’ve developed a strong foundation in coding, problem-solving, and building dynamic applications, and I’m proud to share these skills.',
       skills: 'Skills',
       AboutMeText1: 'Knowledge in IT Fundamentals: Familiar with concepts covered in CompTIA A+, including hardware, software, networking',
       AboutMeText2: 'Frontend Development: Proficient in HTML, CSS, SCSS, JavaScript, TypeScript, and the Angular framework',
       AboutMeText3: 'Backend Development: Skilled in C#, ASP.NET, and .NET Core',
       AboutMeText4: 'Backend Tools and Services: Proficient in .NET, with experience in integrating SMTP and Twilio Services',
       AboutMeText5: 'Database Management: Strong understanding of SQL and Entity Framework',
       AboutMeText6: 'Additional Knowledge: Basic experience with Python, Kotlin, Go, Java and Unity',
       AboutMeText7: 'Here’s my LinkedIn skills page. feel free to check out my skills here too  ',
       github: 'My Github',
       githubText: 'My favorite platform for collaborating with other developers is GitHub. You can check out Codes of my projects and connect with me at:  ',
       goal: 'my Goal',
       goalText: 'My ultimate goal is to work in my field of expertise and create efficient and scalable web applications. I am continuously improving my skills to become a better developer.',
       projectsTitle: 'PROJECTS',
       projectsDetails: 'Projects Details',
       hasApi: 'Has API:',
       yes: 'YES',
       no: 'NO',
       TechStack: 'Tech Stack: ',
       design: 'design: ',
       responsive: 'Responsive: ',
    },
    /// GEORGIAN  /// GEORGIAN  /// GEORGIAN  /// GEORGIAN  /// GEORGIAN  /// GEORGIAN
    ka: {
      home: 'მთავარი',
      about: 'შესახებ',
      projects: 'პროექტები',
      backend: 'ბექ-ენდი',
      Name: 'ნიკოლოზ ლობჟანიძე',
      title: 'FullStack დეველოპერი',
      languages: 'ენები',
      resume: 'ჩამოტვირთეთ რეზიუმე',
      languagesText: 'ნუ მოგერიდებათ რომ დაათვალიეროთ ჩემი ენების გვერდი დამატებითი დეტალებისთვის.',
      languagesLink: 'ენები',
      summary: 'შეჯამება',
     apiSummary: 'მე ვარ გამოცდილი Full-Stack ვებ დეველოპერი, რომელსაც აქვს ძლიერი უნარი მაღალი ხარისხის ვებ აპლიკაციების შექმნაში. ვსპეციალიზდები front-end დეველოპმენტში Angular-ით, ვქმნი სუფთა, კარგად სტრუქტურირებულ და სრულად რესპონსიულ ვებსაიტებს, გასაგები და სათანადოდ დოკუმენტირებული კოდით, რათა უზრუნველვყო მისი მოვლა და სკალირება.\n\nვფოკუსირდები უწყვეტი მომხმარებლის გამოცდილების შექმნაზე ოპტიმიზირებული, ეფექტური გადაწყვეტილებებით. back-end-ზე, მე მაქვს უნარი შევქმნა RESTful API-ები ASP.NET-ის გამოყენებით, წერო კარგად დოკუმენტირებული და მოვლადი კოდი სიცხადის, შესრულების და სკალირების გასაუმჯობესებლად.\n\nჩემი ძლიერი პრობლემების გადაჭრის უნარი საშუალებას მაძლევს სწრაფად და ეფექტურად დავდებაგო, ოპტიმიზაცია გავუკეთო და განვახორციელო ინოვაციური გადაწყვეტილებები. ძლიერი ორგანიზაციული უნარებით, შემიძლია ეფექტურად დავგეგმო და განვახორციელო პროექტები, უზრუნველვყო გლუვი განვითარების სამუშაო პროცესები და მაღალი ხარისხის შედეგები.\n\nმე მაქვს პასიონალური დამოკიდებულება მძლავრი, ეფექტური და სკალირებადი ვებ აპლიკაციების შექმნისადმი, რომლებიც შეესაბამება ბიზნეს მიზნებს და აღემატება მოლოდინებს.',
     contact: 'დამიკავშირდით',
     followMe: 'გამომყევი',
     footerText: '© 2025 ნიკა ლობჟანიძე | ყველა უფლება დაცულია.',
     aboutMe: 'ჩემ შესახებ',
     introduction: 'მე ვარ Fullstack დეველოპერი, რომელმაც 2025 წლის აპრილში დაამთავრა IT Step Academy Georgia. წარმატებით გავიარე Fullstack დეველოპმენტის კურსი, სადაც მივიღე გამოცდილება როგორც ფრონტ-ენდ, ისე ბექ-ენდ ტექნოლოგიებში. ამ მოგზაურობის განმავლობაში ჩამოვაყალიბე მყარად პროგრამირების, პრობლემების გადაჭრისა და დინამიკური აპლიკაციების შექმნის უნარები, და ამ ცოდნას სიამოვნებით ვუზიარებ სხვებს.',
     skills: 'უნარები',
     AboutMeText1: 'IT-ის საფუძვლები: გაცნობილი ვარ CompTIA A+ კონცეფციებით, მათ შორის აპარატურა, პროგრამული უზრუნველყოფა და ქსელები',
     AboutMeText2: 'ფრონტ-ენდ დეველოპმენტი: ვფლობ HTML, CSS, SCSS, JavaScript, TypeScript და Angular Framework-ს',
     AboutMeText3: 'ბექ-ენდ დეველოპმენტი: ვფლობ C#, ASP.NET და .NET Core ტექნოლოგიებს',
     AboutMeText4: 'ბექ-ენდის ხელსაწყოები და სერვისები: გამოცდილება მაქვს .NET-ით, SMTP და Twilio სერვისების ინტეგრირებით',
     AboutMeText5: 'ბაზის მართვა: გამართული ცოდნა მაქვს SQL-სა და Entity Framework-ზე',
     AboutMeText6: 'დამატებითი ცოდნა: საბაზისო გამოცდილება Python, Kotlin, Go, Java და Unity-ში',
     AboutMeText7: 'აი, ჩემი LinkedIn უნარების გვერდი — შეამოწმე აქაც ჩემი უნარები  ',
     github: 'ჩემი Github',
     githubText: 'ჩემი საყვარელი პლატფორმა სხვა დეველოპერებთან თანამშრომლობისთვის არის GitHub. შეგიძლია ნახო ჩემი პროექტების კოდები და დამიკავშირდე შემდეგ მისამართზე:  ',
     goal: 'ჩემი მიზანი',
     goalText: 'ჩემი მთავარი მიზანია ვიმუშაო ჩემს სპეციალობაში და შევქმნა ეფექტური და მასშტაბირებადი ვებ აპლიკაციები. მუდმივად ვმუშაობ საკუთარ უნარების გაუმჯობესებაზე, რომ უკეთესი დეველოპერი გავხდე.',
     projectsTitle: 'პროექტები',
     projectsDetails: 'პროექტების დეტალები',
     hasApi: 'აქვს აპი:',
     yes: 'კი',
     no: 'არა',
     TechStack: 'ტექნიკური დასტა: ',
     design: 'დიზაინი:',
     responsive: 'რესპონსივი:',
    }
    /// GEORGIAN  /// GEORGIAN  /// GEORGIAN  /// GEORGIAN  /// GEORGIAN  /// GEORGIAN
  };
/// TRANSLATIONS  /// TRANSLATIONS  /// TRANSLATIONS  /// TRANSLATIONS  /// TRANSLATIONS
/// TRANSLATIONS  /// TRANSLATIONS  /// TRANSLATIONS  /// TRANSLATIONS  /// TRANSLATIONS

  ngOnInit(): void {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      this.currentLanguage = savedLanguage;
      setTimeout(() => {
        this.updatePageText();
      }, 0);
    }
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
    this.dropdownVisible = this.isOpen;
    this.dropdownOpened.emit(this.dropdownVisible);
  }
  
  setLanguage(langCode: string): void {
    this.currentLanguage = langCode;
    this.isOpen = false;
    this.dropdownVisible = false;
    this.updatePageText();
    this.dropdownOpened.emit(this.dropdownVisible);
    localStorage.setItem('selectedLanguage', langCode);
  }
  
  getCurrentLanguage(): Language | undefined {
    return this.languages.find(lang => lang.code === this.currentLanguage);
  }

  updatePageText(): void {
    document.querySelectorAll('[data-translate]').forEach(element => {
      let key = element.getAttribute('data-translate');
      if (key && this.translations[this.currentLanguage] && this.translations[this.currentLanguage][key]) {
        element.textContent = this.translations[this.currentLanguage][key];
      }
    });
  }

  updateNavbarText(lang: string): void {
    let labels = this.translations[lang];

    Object.keys(labels).forEach(key => {
      let li = document.querySelectorAll(`[data-translate="${key}"]`);
      li.forEach(el => {
        let word = labels[key];
        el.innerHTML = '';

        word.split('').forEach(letter => {
          let span = document.createElement('span');
          span.className = letter === ' ' ? 'space' : 'letter';
          span.textContent = letter;
          el.appendChild(span);
        });
      });
    });
  }

  translate(key: string): string {
    if (this.translations[this.currentLanguage] && this.translations[this.currentLanguage][key]) {
      return this.translations[this.currentLanguage][key];
    }
    return key;
  }

  onClickOutside(event: Event): void {
    if (!(event.target as HTMLElement).closest('.languages-dropdown')) {
      if (this.isOpen) {
        this.isOpen = false;
        this.dropdownVisible = false;
        this.dropdownOpened.emit(false);
      }
    }
  }  
}