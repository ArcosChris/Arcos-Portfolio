const projectData = [
    {
        projectId: 1,
        projectTitle: 'Monsterplex',
        technologyUsed: 'Java, IntelliJ by Jetbrains ',
        projectImg: 'resources/monsterplexintro.gif',
        projectDescription: 'I assisted in creating this project while attending the TLG Software Development Engineer training program. During our Java course portion we were given the task to create an interactive Java application. With my teammates and a few long nights of coding we were able to get this project built. This is a Java console application, the user has to try to escape the randomly generated map in the alloted time! Feel free to check out the code below!',
        previewLink: 'https://github.com/ArcosChris/Monsterplex',
        hasPreview: true
    },
    {
        projectId: 2,
        projectTitle: 'JavaScript Calculator',
        technologyUsed: 'HTML, CSS, JavaScript, Visual Studio Code Editor',
        projectImg: 'resources/jscalcproj.png',
        projectDescription: 'This is one of the first HTML, CSS, and JavaScript projects I worked on. This was a tutorial project but I was able to get a great introduction to how JavaScript works. It really motivated me to start building my own projects.',
        previewLink: 'https://arcoschris.github.io/SimpleJS-Calculator/',
        hasPreview: true
    },
    {
        projectId: 3,
        projectTitle: 'Rock, Paper, Scissors',
        technologyUsed: 'HTML, CSS, Bootstrap, JavaScript',
        projectImg: 'resources/rps-img.png',
        projectDescription: 'While attending a Software Development Engineer program at TLG we were given a task to re-create the Rock, Paper, Scissors game as a console application. I really enjoyed the project so I wanted to make a UI with HTML, CSS, and Bootstrap.',
        previewLink: 'https://arcoschris.github.io/RockPaperScissors/',
        hasPreview: true
    },
    {
        projectId: 4,
        projectTitle: 'WealthBuild.ai',
        technologyUsed: 'React.JS, C#, .Net, MSSQL, T-SQL, Stellar Blockchain Framework, Vue.JS, Python, Azure, Visual Studio 2022',
        projectImg: 'resources/wealthbuild-img.png',
        projectDescription: 'WealthBuild.ai was the first startup company I had to opportunity to help. While working on this team I assisted in creating Azure resources, .NET API\'s, MSSQL Tables and Stored Procedures, front-end components using React, and Blockchain integration using the Stellar tools.',
        hasPreview: false
    },
    {
        projectId: 5,
        projectTitle: 'Kitchmet',
        technologyUsed: 'React.JS, HTML, CSS, Azure, .NET, C#, MSSQL, Visual Studio 2019, Visual Studio Code Editor',
        projectImg: 'resources/kitchmet-img.png',
        projectDescription: 'Kitchmet is a startup company with the goal of assisting private chefs find licensed commercial kitchens to use. While working on this project I assisted in building front-end component with HTML, CSS, and React.JS, MSSQL Database tables and stored procedures, .NET API\'s using C#, and worked with Azure Resources.',
        hasPreview: false
    },
    {
        projectId: 6,
        projectTitle: 'Bucket List App ',
        technologyUsed: 'HTML, CSS, Bootstrap, JavaScript',
        projectImg: 'resources/bucketlist-img.png',
        projectDescription: 'The Bucket List app was created as a project while I attended a JavaScript course for TLG\'s Software Development Engineer program. During our JavaScript course we were given the task to create a project using the tools listed below.',
        previewLink: 'https://arcoschris.github.io/BucketListApp/',
        hasPreview: true
    },
]



let portfolioItems = document.querySelectorAll('.portfolio-card a');

portfolioItems.forEach((item) => {
    item.addEventListener('click', getItemData);
});

function getItemData(e) {
    let imgClicked = e.target;
    let parent = imgClicked.parentElement;
    let itemData = projectData.find(item => item.projectId === Number(parent.id));
    showModal(itemData);
}

function showModal(item) {
    let projectModal = document.getElementById('projectDisplay');
    //portfolio-modal-title
    projectModal.querySelector('.portfolio-modal-title').innerHTML = item.projectTitle;
    //modal-project-img src / alt 
    projectModal.querySelector('.modal-project-img').src = item.projectImg;
    projectModal.querySelector('.modal-project-img').alt = `${item.projectTitle}-image`;
    //project-description
    projectModal.querySelector('.project-description').innerHTML = item.projectDescription;
    //tech-description
    projectModal.querySelector('.tech-description').innerHTML = item.technologyUsed;

    let modalFooter = projectModal.querySelector('.modal-footer');

    if (item.hasPreview) {
        modalFooter.classList.remove('d-none')
        modalFooter.querySelector('.live-preview-btn').href = item.previewLink;
        modalFooter.querySelector('.live-preview-btn').classList.add('fancy');
    }
    else {
        modalFooter.classList.add('d-none');
    }
}

