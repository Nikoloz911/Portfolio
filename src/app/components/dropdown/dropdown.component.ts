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
       firstDescription: 'I have strong expertise in back-end development, and it’s where my true passion lies. Compared to front-end, back-end development excites me more due to the variety of complex and powerful features it offers.',
       secondDescription: 'Most of my work is done in Visual Studio 2022, which I am highly proficient in. I’ve mastered almost every feature of it, making it my most comfortable and productive environment. Occasionally, I also use JetBrains Rider. I am also highly skilled in using the terminal within Visual Studio, especially when it comes to solving challenging problems like database errors, Connection problems between classes and migration issues. I know exactly where to look and how to resolve them efficiently.',
       thirdDescription: 'My experience includes working with one-to-one, one-to-many, and many-to-many relationships, with a strong understanding of their concepts and practical implementation. I enjoy designing and managing database relationships and ensuring smooth data interaction across applications.',
       fourthDescription: 'While its sometimes difficult to showcase back-end projects since they’re not like front-end websites you can easily host, I’ve shared my work on GitHub. Feel free to explore my repositories and don’t forget to read the README files. they contain valuable insights about each project.',
       fifhtDescription: 'Over the past year, I have dedicated myself to learning back-end development and continue to grow my skills every day. I’ve completed two significant projects using console applications, where I invested a lot of time refining my problem-solving and coding abilities.',
       sixthDescription: 'I also have experience with ASP.NET and building RESTful APIs. One of the most valuable lessons I’ve learned is the importance of project organization, especially when working on larger systems. Keeping code clean and structured is something I take pride in.',
       backEndTitle: 'Back-End Developer Experience',
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
     firstDescription: 'მე მაქვს ძლიერი გამოცდილება ბექენდ დეველოპმენტში, და სწორედ აქ არის ჩემი რეალური ვნება. შედარებით ფრონტ-ენდთან, ბექენდ დეველოპმენტი მეტწილად მხიბლავს თავისი კომპლექსური და ძლიერ შესაძლებლობებით.',
  secondDescription: 'ჩემი უმეტესობა სამუშაოს გაკეთებულია Visual Studio 2022-ში, რომელშიც მე ძალიან მძლავრად ვარ დაკავებული. მე შევისწავლე თითქმის ყველა ფუნქცია და ეს ჩემი ყველაზე კომფორტული და პროდუქტიული გარემოა. ზოგჯერ ასევე ვიყენებ JetBrains Rider-ს. ასევე ძალიან გამოცდილება მაქვს Visual Studio-ს ტერმინალში მუშაობაში, განსაკუთრებით მაშინ, როცა მაქვს გამოწვევები, როგორიცაა მონაცემთა ბაზის შეცდომები, კლასების შორის კავშირის პრობლემები და მიგრაციის საკითხები. მე ზუსტად ვიცი სად უნდა ვეძებო და როგორ განვიხილო ისინი ეფექტურად.',
  thirdDescription: 'ჩემი გამოცდილება მოიცავს ერთზე ერთ, ერთზე მრავალი და მრავალი - მრავალი ურთიერთობების მუშაობას, რომელთაც კარგად მესმის მათი კონცეფციები და პრაქტიკული გამოყენება. მიყვარს მონაცემთა ბაზის ურთიერთობების დიზაინი და მართვა და ვაცნობიერებ მათ შეუფერხებელი ურთიერთქმედება აპლიკაციებში.',
  fourthDescription: 'დროებით რთულია ბექენდ პროექტების ჩვენება, რადგან ისინი არ არიან მსგავსი ფრონტ-ენდ საიტებს, რომლებსაც ადვილად ჰოსტავ, მაგრამ მე ჩემი სამუშაო GitHub-ზე მაქვს გაზიარებული. გთხოვთ, ეწვიოთ ჩემს რეპოზიტორიებს და ნუ დაგავიწყდებათ წაიკითხოთ README ფაილები. ისინი შეიცავენ მნიშვნელოვან ინფორმაციას თითოეული პროექტის შესახებ.',
  fifhtDescription: 'გაცილებით წარსულ წელს, მე მიმდებარედ ვსწავლობდი ბექენდ დეველოპმენტს და ყოველდღე ვზრდი ჩემს უნარებს. შევასრულე ორი მნიშვნელოვანი პროექტი კონსოლ აპლიკაციებით, სადაც ბევრი დრო დავხარჯე ჩემი პრობლემების გადაწყვეტისა და კოდირების უნარების გამოთამაშებაში.',
  backEndTitle: 'ბექენდ დეველოპერის გამოცდილება',

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