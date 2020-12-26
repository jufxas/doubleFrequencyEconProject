let preventRateLimitPls = false;
$('input#contactButtonSubmit').click(function() {
    let incompleteForm = false;
    let incompleteItems = [];
    let name = $('input[name="formName"]').val()
    let email = $('input[name="formEmail"]').val()
    let subject = $('#selectSubject').val()
    let body = $('textarea#contactBody').val()
    let formInfo = {
        Fname: {
            property: "name",
            value: name.length === 0 ? undefined : name
        }, 

        Femail: {
            property: "email",
            value: email.length === 0 ? undefined : email
        },

        Fsubject: {
            property: "Subject",
            value: subject.length === 0 ? undefined : subject
        },

        Fbody: {
            property: "body",
            value: body.length === 0 ? undefined : body
        },
    }
    // console.log(formInfo);
    for (const i in formInfo) {
        if (formInfo[i].value === undefined) {
            incompleteForm = true;
            incompleteItems.push(formInfo[i].property);
        }
    }
    // console.log(incompleteItems); 

    if (incompleteForm) {
        $("a.warningFormIncomplete")
        .css("color","red")
        .html("Your form is missing the ");
        if (incompleteItems.length > 1) {
            for (const i in incompleteItems) {
                if (parseInt(i) + 1 !== incompleteItems.length) {
                    $("a.warningFormIncomplete").append(`${incompleteItems[i]}, `);
                } else {
                    $("a.warningFormIncomplete").append(`and ${incompleteItems[i]}.`);
                }
            }
        } else {
            $("a.warningFormIncomplete").append(`${incompleteItems}.`);
        }
    }
    if (!incompleteForm && !preventRateLimitPls) {
        function sendEmail() {
            Email.send({
                    Host: "smtp.gmail.com",
                    Username: "doublefrequencybusiness@gmail.com",
                    Password: "mynameisbob",
                    To: 'doublefrequencybusiness@gmail.com',
                    From: "doublefrequencybusiness@gmail.com",
                    Subject: `User has submitted form request!`,
                    Body: `Name: ${formInfo.Fname.value}\nSubject: ${formInfo.Fsubject.value}\nEmail: ${formInfo.Femail.value}\n
                    Body: ${formInfo.Fbody.value}`
                })
                .then(function (message) {
                    console.log(message);
                    $("a.warningFormIncomplete")
                        .css("color", "green")
                        .html("Your form has been sent successfully.");

                    $('input[name="formName"]').val("")
                    $('input[name="formEmail"]').val("")
                    $('textarea#contactBody').val("")
                });
        }
        sendEmail();
        preventRateLimitPls = true;
    }
    else if (preventRateLimitPls) {
        $("a.warningFormIncomplete")
            .css("color", "black")
            .html("Please do not spam form submissions.");
    }
}); 
