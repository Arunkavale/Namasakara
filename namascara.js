(function (global,$) {
    
    var Namascara = function (firstName , lastName , language){
        return new Namascara.init(firstName,lastName,language);
    }
    
    var supportedLanguages = ['en','mr'];
    var greetings = {
        en:"Hello",
        mr:"Namaskar"
    };

    var formalGreetings = {
        en:"welcome",
        mr:"Shubhecha"
    };

    var logMessages = {
        en:"logged in ",
        mr:"Madhi ala "
    };

    Namascara.prototype = {
        fullName: function() {
            return this.firstName + ' ' + this.language;
        },

        validate: function(){
            if(supportedLanguages.indexOf(this.language) === -1) {
                throw "invalid language";
            }
        },
        greeting : function(){
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        formalGreetings: function(){
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        
        greet: function(formal){
            var msg;
            if(formal){
                msg = this.formalGreetings();
            }
            else {
                msg = this.greeting();
            }

            if(console){
                console.log(msg);
            }

        },

        log:function(){
            if(console){
                console.log(logMessages[this.language]+ ': '+ this.fullName());
            }
            return this; 

        },

        setLang: function(lang){
            this.language = lang;
            this.validate();
            return this;
        }
    };
    
    Namascara.init = function (firstName , lastName ,language) {
        var self = this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";
    }

    Namascara.init.prototype = Namascara.prototype;

    global.Namascara = global.N$ = Namascara;

 }(window ,jQuery));