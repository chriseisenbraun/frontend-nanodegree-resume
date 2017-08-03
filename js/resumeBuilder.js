
// Header
var name = "Chris Eisenbraun"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Code Janitor";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);




var work = {
    "jobs": [{
        "employer": "Google",
        "title": "Android Developer",
        "location": "Mountain View",
        "dates": "2001 - 2006",
        "description": "Make neat things sometimes. Other times I break them"
    }, {
        "employer": "Apple",
        "title": "iOS Developer",
        "location": "San Fransisco",
        "dates": "2008 - 2012",
        "description": "The best things I built, I copied."
    }, {
        "employer": "EMP",
        "title": "Manger",
        "location": "Seattle",
        "dates": "2012 - Present",
        "description": "I manage everything at the EMP. I also work in the kitchen."
    }]
}

var project = {
    "projects": [{
            "title": "Google apps",
            "dates": "2001 - 2006",
            "description": "Wrote the Java to made Andriod mostly work.",
            "images": [
                "www.example.com/test1", "www.example.com/test2", "www.example.com/test3"
            ]
        }, {
            "title": "Apple apps",
            "dates": "2001 - 2006",
            "description": "Pretty much got yelled at.",
            "images": [
                "www.example.com/test1", "www.example.com/test2", "www.example.com/test3"
            ]
        },

        {
            "title": "Salad",
            "dates": "2012 - 2015",
            "description": "Made a website about salad.",
            "images": [
                "www.example.com/test1", "www.example.com/test2", "www.example.com/test3"
            ]

        }
    ]
}


var bio = {
    "name": "Chris",
    "role": "Game Designer",
    "welcomeMessage": "Welcome to the rarley updated website.",
    "contacts": {
        "phone": "123-123-1234",
        "email": "name@email.com",
        "github": "ceisenbraun",
        "location": "Seattle"
    },
    "skills": ["Level design", "Css", "Pre-processors", "Testing"]
}

var education = {
    "schools": [{
        "name": "Bellevue College",
        "location": "Bellevue, WA",
        "degree": "Game Design",
        "majors": ["Game Design", "Web Design"],
        "dates": "2000 - 2004",
        "website": "www.bcc.edu"
    }, {
        "name": "Seattle College",
        "location": "Seattle, WA",
        "degree": "Web Design",
        "majors": ["Web Design"],
        "dates": "2004 - 2008",
        "website": "www.sccc.edu"
    }],
    "onlineCourses": [{
        "title": "Git",
        "school": "Lynda",
        "dates": "2012 - Present",
        "url": "http://lynda.com"
    }, {
        "title": "Git",
        "school": "Lynda",
        "dates": "2012 - Present",
        "url": "http://lynda.com"
    }]
}




if (bio.skills.length > 0) {

    $('#header').append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $('#skills').append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $('#skills').append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $('#skills').append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $('#skills').append(formattedSkill);

}


function displayWork() {
    // For in Work object

    for (job in work.jobs) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }

}

displayWork();

