$.extend(dialogs,{contentScriptSite:new LPDialog.DialogLoader({id:"siteDialog",htmlSource:"contentScriptSiteDialog.html",css:["contentScriptSiteDialog","lmiDialog"],js:["contentScriptDialog","dialogWithGroupInput","contentScriptSiteDialog","selectDropdown","typeaheadDropdown"],type:"SiteDialog"}),inContextTutorialWelcomeDialog:new LPDialog.DialogLoader({id:"inContextTutorialWelcomeDialog",htmlSource:"IntroTutorial/inContextTutorialWelcomeDialog.html",css:["fonts/opensans/opensans","buttons","dialog","lpGrid","IntroTutorial/inContextTutorial"],js:["contentScriptDialog","lpTile","IntroTutorial/LPSiteService","IntroTutorial/introTutorialImages","IntroTutorial/inContextTutorialWelcomeDialog"],type:"InContextTutorialWelcomeDialog"}),inContextTutorialLogoutPromptDialog:new LPDialog.DialogLoader({id:"inContextTutorialLogoutPromptDialog",htmlSource:"IntroTutorial/inContextTutorialLogoutPromptDialog.html",css:["fonts/opensans/opensans","buttons","dialog","lpGrid","IntroTutorial/inContextTutorialLogoutPromptDialog"],js:["contentScriptDialog","IntroTutorial/LPSiteService","IntroTutorial/inContextTutorialLogoutPromptDialog"],type:"InContextTutorialLogoutPromptDialog"}),inContextTutorialCompleteDialog:new LPDialog.DialogLoader({id:"inContextTutorialCompleteDialog",htmlSource:"IntroTutorial/inContextTutorialCompleteDialog.html",css:["fonts/opensans/opensans","lmiDialog","IntroTutorial/inContextTutorialCompleteDialog","buttons","dialog","lpGrid"],js:["contentScriptDialog","IntroTutorial/inContextTutorialCompleteDialog"],type:"InContextTutorialCompleteDialog"}),introTutorialHelp:dialogs.introTutorialHelp.extend({css:["fonts/opensans/opensans","lmiDialog","IntroTutorial/introTutorialHelpDialog"],js:"contentScriptDialog"}),inContextIntroTutorialHelpDialog:new LPDialog.DialogLoader({id:"inContextIntroTutorialHelpDialog",htmlSource:"IntroTutorial/inContextIntroTutorialHelpDialog.html",css:["fonts/opensans/opensans","lmiDialog","IntroTutorial/inContextIntroTutorialHelpDialog"],js:["contentScriptDialog","IntroTutorial/LPSiteService","IntroTutorial/inContextIntroTutorialHelpDialog"],type:"InContextIntroTutorialHelpDialog"}),omsNotificationPopup:new LPDialog.DialogLoader({id:"omsNotificationPopup",htmlSource:"notificationPopup/notificationPopup.html",css:"notificationPopup/notificationPopup",js:["notificationPopup/notificationPopupDialog","contentScriptDialog"],type:"OmsNotificationPopupDialog"}),migrationPopup:new LPDialog.DialogLoader({id:"migrationPopup",htmlSource:"migrationPopup.html",css:"migrationPopup",js:["migrationPopup","contentScriptDialog"],type:"MigrationPopupDialog"})});