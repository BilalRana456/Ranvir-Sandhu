(function(m){function a(c){if(c.ctrlKey&&c.keyCode===85){c.preventDefault();b();return false}}document.addEventListener("keyup",a,false);m(document).ready(function(){var c=localStorage.getItem("actionList")?JSON.parse(localStorage.getItem("actionList")):[];if(c){m.each(c,function(e,d){setTimeout(function(){var f=d.split("-");var g=parseInt(f[1].replace(/[^\d.]/g,""))==9?8:parseInt(f[1].replace(/[^\d.]/g,""));m(".spkac_menu_item_"+g).trigger("click")},500)})}});m(document).on("click",".spkac_icon_toggle,.spkac_close_menu",function(){b()});m(document).on("click",".spkac_menu_item_8",function(){if(!m("html").hasClass("spkac-s9")){l("spkac-s9",1);alert("Please hover on anything to speak.")}else{l("spkac-s9",0)}m("img,button,p,h1,h2,h3,h4,h5,h6,a,input,textarea,li").mouseenter(function(){if(m("html").hasClass("spkac-s9")){var c="";responsiveVoice.cancel();if(m(this).is("img")){c=m(this).attr("alt")!=undefined?"Image of"+m(this).attr("alt"):"Image"}else{if(m(this).is("input")||m(this).is("textarea")){c="Field of"+m(this).attr("placeholder")}else{c=m(this).text()}}if(m(this).parents("#spkac_widget").length==0){responsiveVoice.speak(c,"US English Female")}}})});m(document).on("click",".spkac_menu a",function(){var e=m(this);var d=e.data("class");var c="spkac-"+d;n(e,d,c)});function n(e,d,c){switch(d){case"s10":l(c,2);m("html").removeAttr("class");m(".spkac_menu a").removeClass("spkac_option_v1 spkac_option_v2 spkac_option_v3 spkac_option_active");m(".spkac_menu a").find(".spkac_check").removeClass("st_checked");break;case"s3":i(e);break;case"s4":k(e);break;default:if(m("html").hasClass(c)){l(c,0);m("html").removeClass(c);e.find(".spkac_check").removeClass("st_checked")}else{l(c,1);m("html").addClass(c);e.find(".spkac_check").addClass("st_checked")}break}}function b(){m("#spkac_widget").toggleClass("spkac_hidden");m("#spack_toggle").toggleClass("spkac_tactive");return false}function l(c,f){var d=localStorage.getItem("actionList")?JSON.parse(localStorage.getItem("actionList")):[];var e=d.indexOf(c);if(f==1&&e==-1){d.push(c)}else{if(f==0&&e>-1){d.splice(e,1)}}localStorage.setItem("actionList",JSON.stringify(d));if(f===2){localStorage.setItem("actionList",JSON.stringify([]))}return true}function i(c){if(m("html").hasClass("spkac-s3-1")){m("html").removeClass("spkac-s3-1");m("html").addClass("spkac-s3-2");c.find(".spkac_check").addClass("st_checked");c.removeClass("spkac_option_v1");c.addClass("spkac_option_v2");l("spkac-s3-2",1)}else{if(m("html").hasClass("spkac-s3-2")){m("html").removeClass("spkac-s3-2");m("html").addClass("spkac-s3-3");c.find(".spkac_check").addClass("st_checked");c.removeClass("spkac_option_v2");c.addClass("spkac_option_v3");l("spkac-s3-3",1)}else{if(m("html").hasClass("spkac-s3-3")){m("html").removeClass("spkac-s3-3");c.removeClass("spkac_option_v3 spkac_option_active");c.find(".spkac_check").removeClass("st_checked");l("spkac-s3-3",0)}else{m("html").addClass("spkac-s3-1");c.addClass("spkac_option_v1 spkac_option_active");c.find(".spkac_check").addClass("st_checked");l("spkac-s3-1",1)}}}return true}function k(c){if(m("html").hasClass("spkac-s4-1")){m("html").removeClass("spkac-s4-1");c.find(".spkac_check").removeClass("st_checked");m("[data-spkac-font-size]").removeClass("spkac-font62 spkac-font53 spkac-font45 spkac-font39 spkac-font36 spkac-font33 spkac-font32 spkac-font31 spkac-font28 spkac-font27 spkac-font26 spkac-font23 spkac-font20 spkac-font19 spkac-font18 spkac-font15");l("spkac-s4-1",0)}else{var d=0;m("html").addClass("spkac-s4-1");l("spkac-s4-1",1);c.find(".spkac_check").addClass("st_checked");m("[data-spkac-font-size]").each(function(e){var f=m(this);d=m(this).data("spkac-font-size");switch(d){case j(d,20,25):f.addClass("spkac-font28");break;case j(d,15,20):f.addClass("spkac-font23");break;case j(d,10,15):f.addClass("spkac-font18");break}})}return true}function j(e,c,d){if(e>=c&&e<=d){return e}else{return !e}}})(jQuery);

"use strict";
function convertLanguageCode(a, i, e) {
    if (!a || "undefined" === a || "" === a)
        return !1;
    for (var n in lngCollection)
        if (lngCollection[n][i] === a)
            return lngCollection[n][e]
}
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
    return typeof a
} : function (a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
};
!function () {
    function a() {
        window._spkac || (window._spkac = !0, e(), l(), r(), b(), s(function () {
            n(), F(W, function () {
                responsiveVoice.init(), U(), Z(), D()
            }), j(V), v(J), o(), u(), c(), w(), m()
        }))
    }

    function i(a) {
        85 !== a.keyCode && 85 !== a.which || !a.ctrlKey || (a.preventDefault(), d())
    }

    function e() {
        window.addEventListener("keydown", i), window.addEventListener("message", function (a) {
            var i = a.data || {};
            if (i.isUserWay)
                switch (i.action) {
                    case "getConfig":
                        t("hide");
                        window.frames.spkac.postMessage({
                            isUserWay: !0,
                            action: "sendConfig",
                            config: K
                        }, "*");
                        break;
                    case "close":
                        var e = document.getElementsByClassName("spkac")[0];
                        e && e.classList.remove("spkac_on");
                        var n = document.getElementsByClassName("spkac_accessibility_icon")[0];
                        n && (n.setAttribute("aria-pressed", e.classList.contains("spkac_on")), n.setAttribute("aria-expanded", e.classList.contains("spkac_on"))), window.focus();
                        break;
                    case "setProperties":
                        "spkac-s9" == i.lastSetProperty.key && "end" == ia && (ia = "wait");
                        for (var s in i.settings)
                            i.settings.hasOwnProperty(s) && void 0 !== K.settings[s] && (S(s, i.settings[s].value), "spkac-s9" == s && D());
                        w();
                        break;
                    case "setWidgetColor":
                        K.tunings.widget_color = i.color, o();
                        break;
                    case "setWidgetLanguage":
                        K.tunings.widget_language = i.language, u();
                        break;
                    case "setWidgetPosition":
                        K.tunings.widget_position = i.position, c();
                        break;
                    case "takeScreenShot":
                        h()
                }
        }, !1)
    }

    function n() {
        K.tunings.widget_language && "null" !== K.tunings.widget_language && (K.language = K.tunings.widget_language);
        for (var a = K.languages, i = [K.languageHardcoded, window.navigator.language, K.language, document.querySelector("html").lang], e = 0; e < i.length; e++)
            if (i.hasOwnProperty(e))
                return K.language = i[e], void(K.autoLanguage = i[e])
    }

    function t(a) {
        a = void 0 === a ? "toggle" : a;
        var i = document.getElementsByClassName("spkac_accessibility_icon")[0];
        switch (a) {
            case "show":
                i.classList.add("loading");
                break;
            case "hide":
                i.classList.remove("loading");
                break;
            case "show":
                i.classList.toggle("loading")
        }
    }

    function o() {
        var a = document.getElementsByClassName("spkac_accessibility_icon")[0],
                i = K.color || K.tunings.widget_color || null;
        if (i) {
            if (a) {
                a.setAttribute("style", "background-color: " + i + "!important");
                var e = O(i.replace("#", ""));
                x(e.r, e.g, e.b) ? (a.classList.add("spkac_light"), a.classList.remove("spkac_dark")) : (a.classList.remove("spkac_light"), a.classList.add("spkac_dark"))
            }
            var n = document.getElementsByClassName("spkac_hide_on")[0];
            n && n.setAttribute("style", "background-color: " + i + "!important");
            var t = document.getElementsByClassName("spkac_hide_off")[0];
            t && t.setAttribute("style", "background-color: " + i + "!important");
            var o = document.querySelector(".spkac_hide_icon span");
            o && o.setAttribute("style", "background-color: " + i + "!important")
        } else
            a.classList.add("spkac_dark")
    }

    function u() {
        K.language = K.tunings.widget_language && "null" !== K.tunings.widget_language ? K.tunings.widget_language : K.language
    }

    function s(a) {
        var i = JSON.stringify({
            identity: K.identity,
            settings: K.settings,
            origin: window.location.origin,
            referrer: document.referrer
        });

//        var responseTextx = '{"code": 200, "data": {"language": ["ar", "bg", "bn", "cs", "de", "el", "en", "es", "fr", "he", "hi", "it", "ja", "ko", "locale_template", "nl", "pa", "pl", "pt", "ro", "ru", "sv", "tr", "uk", "zh"], "locales": {"ar": {"widget": {"home": {"title": "القائمة الوصول"}, "menu": {"contrast": {"label": {"v0": "على النقيض +", "v1": "عكس الألوان", "v2": "على النقيض من الظلام", "v3": "على النقيض من الضوء"}}, "bigger_text": {"label": "نص أكبر"}, "big_cursor": {"label": "المؤشر كبيرة"}, "underline_links": {"label": "روابط تسليط الضوء"}, "desaturation": {"label": "التشبع"}, "legible_fonts": {"label": "الخطوط مقروءة"}, "reset": {"label": "إعادة ضبط الجميع"}, "keyboard_nav": {"label": "الإنتقال لوحة المفاتيح"}}, "responsive_voice": {"href": "رابط ل", "alt": "صورة"}}}, "bg": {"widget": {"home": {"title": "Опции за достъпност"}, "menu": {"contrast": {"label": {"v0": "контраст +", "v1": "Обръщане", "v2": "Контраст Тъмно", "v3": "Контраст Светлина"}}, "bigger_text": {"label": "Голям Текст"}, "big_cursor": {"label": "голям курсор"}, "underline_links": {"label": "Светещи връзки"}, "desaturation": {"label": "Без цвят"}, "legible_fonts": {"label": "четливи шрифтове"}, "reset": {"label": "Нулиране"}, "keyboard_nav": {"label": "клавиатура навиг."}}, "responsive_voice": {"href": "Връзка към", "alt": "Снимка на"}}}, "bn": {"widget": {"home": {"title": "এ্যাক্সেসিবিলিটি মেনু"}, "menu": {"contrast": {"label": {"v0": "কনট্রাস্ট +", "v1": "ব্যুত্ক্রমে রং", "v2": "ডার্ক কনট্রাস্ট", "v3": "হাল্কা কনট্রাস্ট"}}, "bigger_text": {"label": "বিগার পাঠ্য"}, "big_cursor": {"label": "বড় কার্সার"}, "underline_links": {"label": "হাইলাইট লিংক"}, "desaturation": {"label": "লাইটনেস"}, "legible_fonts": {"label": "সহজপাঠ্য ফন্ট"}, "reset": {"label": "সব রিসেট"}, "keyboard_nav": {"label": "কীবোর্ড ন্যাভিগেশন"}}, "responsive_voice": {"href": "লিঙ্ক এ", "alt": "এর ছবি"}}}, "cs": {"widget": {"home": {"title": "přístupnost Menu"}, "menu": {"contrast": {"label": {"v0": "Kontrast +", "v1": "Inverze barev", "v2": "Tmavě Contrast", "v3": "Light Kontrastní"}}, "bigger_text": {"label": "velký text"}, "big_cursor": {"label": "větší kurzoru"}, "underline_links": {"label": "Zvýraznit odkazy"}, "desaturation": {"label": "odbarvěte"}, "legible_fonts": {"label": "čitelné fonty"}, "reset": {"label": "Obnovit vše"}, "keyboard_nav": {"label": "klávesnice Navig."}}, "responsive_voice": {"href": "Odkaz na", "alt": "Obrázek"}}}, "de": {"widget": {"home": {"title": "Barrierefreiheit"}, "menu": {"contrast": {"label": {"v0": "Kontrast +", "v1": "Umkehren", "v2": "Dunkler Kontrast", "v3": "Licht Kontrast"}}, "bigger_text": {"label": "Großer Text"}, "big_cursor": {"label": "Großer Zeiger"}, "underline_links": {"label": "Mark. Sie Links"}, "desaturation": {"label": "Entsättigen"}, "legible_fonts": {"label": "Lesbare Schrift."}, "reset": {"label": "Zurücksetzen"}, "keyboard_nav": {"label": "Tastatur Nav"}, "responsive_voice": {"label": "Vorlesen", "label_stop": "Anhalten"}}, "responsive_voice": {"href": "Link zu", "alt": "Bild von"}}}, "el": {"widget": {"home": {"title": "προσβασιμότητα Μενού"}, "menu": {"contrast": {"label": {"v0": "αντίθεση +", "v1": "Αντιστρέφω", "v2": "σκούρο Αντίθεση", "v3": "φως Αντίθεση"}}, "bigger_text": {"label": "μεγάλο Κείμενο"}, "big_cursor": {"label": "μεγάλες Δρομέας"}, "underline_links": {"label": "συνδέσεις"}, "desaturation": {"label": "Αποκορεσμός"}, "legible_fonts": {"label": "σαφές Κείμενα"}, "reset": {"label": "Αναίρεση Όλα"}, "keyboard_nav": {"label": "Πλοήγηση πληκτρ."}}, "responsive_voice": {"href": "Συνδέω με", "alt": "Φωτογραφία από"}}}, "en": {"widget": {"home": {"title": "Accessibility Menu"}, "menu": {"contrast": {"label": {"v0": "Contrast +", "v1": "Invert Colors", "v2": "Dark Contrast", "v3": "Light Contrast"}, "aria": {"v0": "Toggle contrast", "v1": "Inverted colors enabled", "v2": "High contrast (dark) enabled", "v3": "High contrast (light) enabled"}}, "bigger_text": {"label": "Bigger Text", "aria": "Increase text size", "alt": {"img": "Bigger text is enabled", "v1": "Text size is big", "v2": "Text size is bigger", "v3": "Text size is even bigger", "v4": "Text size is huge"}}, "big_cursor": {"label": "Big Cursor", "aria": "Toggle big cursor", "alt": "Big cursor is enabled"}, "underline_links": {"label": "Highlight Links", "aria": "Toggle underline links", "alt": "Underline links is enabled"}, "desaturation": {"label": "Desaturate", "aria": "Toggle color desaturation", "alt": "Desaturate colors is enabled"}, "legible_fonts": {"label": "Legible Fonts", "aria": "Toggle legible fonts", "alt": "Legible fonts is enabled"}, "reset": {"label": "Reset All", "aria": "Reset all accessibility styles"}, "responsive_voice": {"label": "Read page", "label_stop": "Stop Reading", "aria": "Enable voice reading of page text", "alt": "Toggle voice reading of page text"}, "keyboard_nav": {"label": "Keyboard Nav", "aria": "Enable enhanced keyboard navigation", "alt": "Toggle enhanced keyboard navigation"}}, "header": {"close": {"aria": "Close the accessibility menu"}}, "footer": {"report": {"label": "Report a problem"}, "statement": {"label": "{site}s Accessibility Statement", "aria": "{site}s Accessibility Statement"}, "manage": {"label": "Manage", "aria": "Access UserWay Accessibility Toolbar Settings"}, "accessibility": {"label": "Accessibility by UserWay.org", "aria": "Link to UserWay Website"}}, "report": {"title": "Report a Problem", "text": {"label": "Please describe the problem", "placeholder": "Describe any issues you are having on this page..."}, "email": {"label": "Please enter your email ", "placeholder": "your_email@example.com"}, "screenshot": {"label": "Screen-shot of current view:"}, "buttons": {"cancel": {"label": "Cancel", "aria": "Cancel and close this form"}, "submit": {"label": "Submit Report", "aria": "Submit this form"}}, "saved": "Report submitted, thanks!"}, "login": {"title": "Log into UserWay", "labels": {"email": "Email", "password": "Password"}, "placeholders": {"email": "Email", "password": "Password"}, "buttons": {"forgot": "Forgot password?", "login": "Login", "cancel": "Cancel"}, "arias": {"login": "Sing in button", "cancel": "Cancel and close this form"}, "incorrect": "Email or password are incorrect"}, "forgot": {"title": "Forgot your password?", "labels": {"email": "Email"}, "placeholders": {"email": "Email"}, "buttons": {"reset": "Reset password", "cancel": "Cancel"}, "arias": {"reset": "Reset password button", "cancel": "Cancel and close this form"}}, "recovery": {"title": "Password recovery", "labels": {"code": "Code", "password": "Enter your new password", "password_confirm": "Re-enter your new password"}, "placeholders": {"code": "Code from email", "password": "New password", "password_confirm": "Re-enter new password"}, "buttons": {"submit": "Send", "cancel": "Cancel"}, "arias": {"submit": "Send button", "cancel": "Cancel and close this form"}}, "dashboard": {"title": "Settings", "buttons": {"color": "Change the button color", "location": "Change the button location", "language": "Change the widget language", "script": "View the widgets embed script", "password": "Change your admin password", "logout": "Log out", "cancel": "Back to accessibility menu"}, "arias": {"cancel": "Back to accessibility menu buttons"}}, "password": {"title": "Update your password", "labels": {"password_current": "Enter your current password", "password": "Enter your new password", "password_confirm": "Re-enter your new password"}, "placeholders": {"password_current": "Current password", "password": "New password", "password_confirm": "Re-enter new password"}, "buttons": {"cancel": "Cancel", "save": "Update password"}, "arias": {"cancel": "Cancel and close this form", "save": "Update password"}, "saved": "Password has been updated successfully"}, "script": {"title": "Embed script", "labels": {"embed": "Place the following script just before the </body> tag on your website"}, "buttons": {"cancel": "Cancel"}, "arias": {"cancel": "Cancel and close this form"}}, "color": {"title": "Change the button color", "buttons": {"submit": "Change", "cancel": "Cancel"}, "arias": {"submit": "Change button", "cancel": "Cancel and close this form"}, "saved": "Color has been changed successfully", "annotation": "Press Enter key to save color"}, "position": {"title": "Change button location", "arias": {"positions": {"1": "button location top right", "2": "button location right center", "3": "button location bottom right", "4": "button location bottom", "5": "button location bottom left", "6": "button location center left", "7": "button location top left", "8": "button location top"}}, "labels": {"positions": {"1": "top right", "2": "middle right", "3": "bottom right", "4": "bottom center", "5": "bottom left", "6": "middle left", "7": "top left", "8": "top center"}}, "saved": "Widget position saved", "hardcoded": "Custom position is currently hard coded on this page. Please remove it to manage the widget button position via the widget."}, "language": {"title": "Change Widget Language", "saved": "Widget language saved", "update": "Update language"}, "responsive_voice": {"href": "Link to", "alt": "Picture of", "placeholder": "Input for"}}}, "es": {"widget": {"home": {"title": "Menú de accesibilidad"}, "menu": {"contrast": {"label": {"v0": "Contraste +", "v1": "Inver", "v2": "Contraste Oscuro", "v3": "Contraste de luz"}}, "bigger_text": {"label": "Gran texto"}, "big_cursor": {"label": "Gran cursor"}, "underline_links": {"label": "Enlaces realce"}, "desaturation": {"label": "Desaturar"}, "legible_fonts": {"label": "Fuentes legibles"}, "read_page": {"label": "LEER PÁGINA", "label_stop": "Stop reading"}, "reset": {"label": "Reset all"}, "keyboard_nav": {"label": "Teclado nav"}}, "responsive_voice": {"href": "Enlace a", "alt": "Foto de"}}}, "fr": {"widget": {"home": {"title": "Menu daccessibilité"}, "menu": {"contrast": {"label": {"v0": "Contraste +", "v1": "Couleur Invert", "v2": "Contraste sombre", "v3": "Contraste élevé"}}, "bigger_text": {"label": "Grand texte"}, "big_cursor": {"label": "Grand curseur"}, "underline_links": {"label": "Liens Surligner"}, "desaturation": {"label": "Désaturer"}, "legible_fonts": {"label": "Polices lisibles"}, "reset": {"label": "Défaire tout"}, "keyboard_nav": {"label": "Nav. par clavier"}}, "responsive_voice": {"href": "Lié à", "alt": "Photo de"}}}, "he": {"widget": {"home": {"title": "תפריט נגישות"}, "menu": {"contrast": {"label": {"v0": "+ ניגודיות", "v1": "היפוך צבעים", "v2": "ניגודיות קהה", "v3": "ניגודיות בהירה"}}, "bigger_text": {"label": "טקסט גדול"}, "big_cursor": {"label": "סמן גדול"}, "underline_links": {"label": "הדגשת קישורים"}, "desaturation": {"label": "ביטול צבעים"}, "legible_fonts": {"label": "גופן קריא"}, "reset": {"label": "איפוס הנגשה"}, "responsive_voice": {"label": "קריאת עמוד", "label_stop": "עצירת קריאה"}, "keyboard_nav": {"label": "ניווט במקלדת"}}, "responsive_voice": {"href": "Link to", "alt": "Picture of"}}}, "hi": {"widget": {"home": {"title": "पहुंच योग्यता मेनू"}, "menu": {"contrast": {"label": {"v0": "कंट्रास्ट +", "v1": "रंग बदलें", "v2": "डार्क कंट्रास्ट", "v3": "हल्का कंट्रास्ट"}}, "bigger_text": {"label": "बड़ा पाठ"}, "big_cursor": {"label": "बिग कर्सर"}, "underline_links": {"label": "हाइलाइट लिंक"}, "desaturation": {"label": "विलुप्त होना"}, "legible_fonts": {"label": "वैध फ़ॉन्ट्स"}, "reset": {"label": "सभी को रीसेट करें"}, "keyboard_nav": {"label": "कीबोर्ड नेविगेशन"}}, "responsive_voice": {"href": "करने के लिए लिंक", "alt": "का चित्र"}}}, "it": {"widget": {"home": {"title": "Accessibilità Menu"}, "menu": {"contrast": {"label": {"v0": "Contrasto +", "v1": "Inverti colori", "v2": "Contrasto Scuro", "v3": "Contrasto Luce"}}, "bigger_text": {"label": "Testo Grande"}, "big_cursor": {"label": "Grande Cursore"}, "underline_links": {"label": "Mostra colleg."}, "desaturation": {"label": "Desatura"}, "legible_fonts": {"label": "Font Leggibili"}, "reset": {"label": "Resetta tutto"}, "keyboard_nav": {"label": "Navig. Tastiera"}}, "responsive_voice": {"href": "Collegamento a", "alt": "Immagine di"}}}, "ja": {"widget": {"home": {"title": "アクセシビリティメニュー"}, "menu": {"contrast": {"label": {"v0": "コントラスト+", "v1": "反転色", "v2": "ダークコントラスト", "v3": "ライトコントラスト"}}, "bigger_text": {"label": "より大きいテキスト"}, "big_cursor": {"label": "ビッグカーソル"}, "underline_links": {"label": "ハイライトリンク"}, "desaturation": {"label": "不飽和化する"}, "legible_fonts": {"label": "読みやすいフォント"}, "reset": {"label": "すべてリセット"}, "keyboard_nav": {"label": "キーボードナビ"}}, "responsive_voice": {"href": "リンク先", "alt": "の写真"}}}, "ko": {"widget": {"home": {"title": "내게 필요한 옵션 메뉴"}, "menu": {"contrast": {"label": {"v0": "대비 +", "v1": "색상 반전", "v2": "다크 콘트라스트", "v3": "명암 대비"}}, "bigger_text": {"label": "더 큰 텍스트"}, "big_cursor": {"label": "큰 커서"}, "underline_links": {"label": "하이라이트 링크"}, "desaturation": {"label": "불포화"}, "legible_fonts": {"label": "눈에 잘 보이는 글꼴"}, "reset": {"label": "모두 초기화"}, "keyboard_nav": {"label": "키보드 탐색"}}, "responsive_voice": {"href": "다음으로 연결", "alt": "그림"}}}, "locale_template": {"widget": {"home": {"title": "Accessibility Menu"}, "menu": {"contrast": {"label": {"v0": "Contrast +", "v1": "Invert Colors", "v2": "Dark Contrast", "v3": "Light Contrast"}}, "bigger_text": {"label": "Bigger Text"}, "big_cursor": {"label": "Big Cursor"}, "underline_links": {"label": "Highlight Links"}, "desaturation": {"label": "Desaturate"}, "legible_fonts": {"label": "Legible Fonts"}, "reset": {"label": "Reset All"}, "keyboard_nav": {"label": "Keyboard Nav"}}, "responsive_voice": {"href": "Hyperlink to", "alt": "Picture of"}}}, "nl": {"widget": {"home": {"title": "Toegankelijkheid Menu"}, "menu": {"contrast": {"label": {"v0": "Contrast hoog", "v1": "Kleuren omkeren", "v2": "Dark Contrast", "v3": "Licht Contrast"}}, "bigger_text": {"label": "Tekst Groter"}, "big_cursor": {"label": "Grotere Muis"}, "underline_links": {"label": "Zichtbare Links"}, "desaturation": {"label": "Zwart / Wit"}, "legible_fonts": {"label": "Leesbare Fond"}, "reset": {"label": "Alles resetten"}, "responsive_voice": {"label": "Lees pagina", "label_stop": "Stop met lezen"}, "keyboard_nav": {"label": "Toetsenbord nav"}}, "responsive_voice": {"href": "Link til", "alt": "Billede af"}}}, "pa": {"widget": {"home": {"title": "ਅਸੈੱਸਬਿਲਟੀ ਮੇਨੂ"}, "menu": {"contrast": {"label": {"v0": "ਭਿੰਨਤਾ +", "v1": "ਉਲਟ ਰੰਗ", "v2": "ਹਨੇਰੇ ਭਿੰਨਤਾ", "v3": "ਚਾਨਣ ਭਿੰਨਤਾ"}}, "bigger_text": {"label": "ਵੱਡਾ ਟੈਕਸਟ"}, "big_cursor": {"label": "ਵੱਡੇ ਕਰਸਰ"}, "underline_links": {"label": "ਹਾਈਲਾਈਟ ਲਿੰਕ"}, "desaturation": {"label": "ਕਲਰ"}, "legible_fonts": {"label": "ਪਿੜਆ ਲਿਖਣਾ"}, "reset": {"label": "ਰੀਸੈੱਟ ਸਾਰੇ"}, "keyboard_nav": {"label": "ਕੀਬੋਰਡ ਨੇਵੀਗੇਸ਼ਨ"}}, "responsive_voice": {"href": "ਲਿੰਕ ਕਰੋ", "alt": "ਦੀ ਤਸਵੀਰ"}}}, "pl": {"widget": {"home": {"title": "Dostępność menu"}, "menu": {"contrast": {"label": {"v0": "Kontrast +", "v1": "Odwróć kolory", "v2": "ciemny Kontrast", "v3": "światło Kontrast"}}, "bigger_text": {"label": "Duży Tekst"}, "big_cursor": {"label": "Duży Kursor"}, "underline_links": {"label": "podświetlić linki"}, "desaturation": {"label": "Brak kolorów"}, "legible_fonts": {"label": "czytelne czcionki"}, "reset": {"label": "Cofnij"}, "keyboard_nav": {"label": "nawig. klawiatury"}}, "responsive_voice": {"href": "Łączyć z", "alt": "Zdjęcie"}}}, "pt": {"widget": {"home": {"title": "Menu Acessibilidade"}, "menu": {"contrast": {"label": {"v0": "Contraste +", "v1": "Cores invertidas", "v2": "Contraste escuro", "v3": "Contraste de Luz"}}, "bigger_text": {"label": "Texto maior"}, "big_cursor": {"label": "Cursor grande"}, "underline_links": {"label": "Destaque links"}, "desaturation": {"label": "Desaturar"}, "legible_fonts": {"label": "Fontes legíveis"}, "reset": {"label": "Reiniciar tudo"}, "keyboard_nav": {"label": "Teclado Nav"}}, "responsive_voice": {"href": "Link para", "alt": "Foto de"}}}, "ro": {"widget": {"home": {"title": "Accesibilitate Meniu"}, "menu": {"contrast": {"label": {"v0": "Contrast +", "v1": "Inversați Culori", "v2": "Contrast întuneric", "v3": "Contrast lumină"}}, "bigger_text": {"label": "Text mai mare"}, "big_cursor": {"label": "Cursor mare"}, "underline_links": {"label": "URI evidențiere"}, "desaturation": {"label": "Desaturate"}, "legible_fonts": {"label": "Fonturi lizibili"}, "reset": {"label": "Reseteaza tot"}, "keyboard_nav": {"label": "Navig. tastatură"}}, "responsive_voice": {"href": "Conectați-vă la", "alt": "Imagine cu"}}}, "ru": {"widget": {"home": {"title": "Меню"}, "menu": {"contrast": {"label": {"v0": "Контраст +", "v1": "Инвертировать", "v2": "Темный контраст", "v3": "Легкий контраст"}}, "bigger_text": {"label": "Большой текст"}, "big_cursor": {"label": "Большой курсор"}, "underline_links": {"label": "Выделить ссылки"}, "desaturation": {"label": "Обесцвечивать"}, "legible_fonts": {"label": "Понятный шрифт"}, "responsive_voice": {"label": "Читать страницу", "label_stop": "Остановить", "aria": "Возможность голосового чтения страницы", "alt": "Включение\\Отключение голосового чтения"}, "reset": {"label": "сброс"}, "keyboard_nav": {"label": "Клав. навигация"}}, "responsive_voice": {"href": "Ссылка на", "alt": "Картинка"}}}, "sv": {"widget": {"home": {"title": "tillgänglighet Meny"}, "menu": {"contrast": {"label": {"v0": "kontrast +", "v1": "Invertera färger", "v2": "mörk kontrast", "v3": "ljus Kontrast"}}, "bigger_text": {"label": "större text"}, "big_cursor": {"label": "stor Markör"}, "underline_links": {"label": "markera Länkar"}, "desaturation": {"label": "avmätta"}, "legible_fonts": {"label": "tydliga typsnitt"}, "reset": {"label": "Återställ allt"}, "keyboard_nav": {"label": "Tangentbord Nav."}}, "responsive_voice": {"href": "Anknyta till", "alt": "Bild av"}}}, "tr": {"widget": {"home": {"title": "Erişilebilirlik Menüsü"}, "menu": {"contrast": {"label": {"v0": "Kontrast +", "v1": "Ters çevir", "v2": "Koyu Kontrast", "v3": "Işık Kontrastı"}}, "bigger_text": {"label": "Büyük Metin"}, "big_cursor": {"label": "Büyük İmleç"}, "underline_links": {"label": "Bağlant. Vurgula"}, "desaturation": {"label": "Renk Yok"}, "legible_fonts": {"label": "Okunaklı Fontlar"}, "reset": {"label": "Hepsini sıfırla"}, "keyboard_nav": {"label": "Klavye Gezintisi"}}, "responsive_voice": {"href": "Bağlamak", "alt": "Resmi"}}}, "uk": {"widget": {"home": {"title": "доступність меню"}, "menu": {"contrast": {"label": {"v0": "контраст +", "v1": "инвертировать", "v2": "темний Контраст", "v3": "світло Контраст"}}, "bigger_text": {"label": "великий текст"}, "big_cursor": {"label": "великий Курсор"}, "underline_links": {"label": "посилання"}, "desaturation": {"label": "знебарвте"}, "legible_fonts": {"label": "читаються Тексти"}, "reset": {"label": "скинути все"}, "keyboard_nav": {"label": "клавіатура навіг."}}, "responsive_voice": {"href": "Посилання на", "alt": "Зображення"}}}, "zh": {"widget": {"home": {"title": "辅助功能菜单"}, "menu": {"contrast": {"label": {"v0": "对比度+", "v1": "反转颜色", "v2": "黑暗对比", "v3": "光对比度"}}, "bigger_text": {"label": "更大的文本"}, "big_cursor": {"label": "大光标"}, "underline_links": {"label": "突出显示链接"}, "desaturation": {"label": "去饱和"}, "legible_fonts": {"label": "可读字体"}, "reset": {"label": "重置全部"}, "keyboard_nav": {"label": "键盘导航"}}, "responsive_voice": {"href": "链接到", "alt": "的图片"}}}}, "tunings": {"widget_position": "3", "widget_language": "en", "widget_color": "#017ace", "site_name": "Wp"}}}';
//        try {
//            var i = JSON.parse(responseTextx);
//            200 === i.code && (K.tunings = i.data.tunings, K.languages = i.data.language, K.locales = i.data.locales)
//        } catch (a) {
//        }
//        a();
//        e = new XMLHttpRequest;
//        e.open("post", Q + "/tunings/" + (K.account || K.code)), e.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), e.send(i), e.onload = function () {
//            try {
//                var i = JSON.parse(e.responseText);
//                200 === i.code && (K.tunings = i.data.tunings, K.languages = i.data.language, K.locales = i.data.locales)
//            } catch (a) {
//            }
//            a && a()
//        }
    }

    function r() {
        for (var a = document.querySelectorAll("body, body *"), i = 0; i < a.length; i++)
            a[i].setAttribute("data-spkac-font-size", parseInt(z(a[i], "font-size")))
    }

    function l() {
        var a = document.getElementsByName("viewport")[0];
        if (a) {
            var i = document.createElement("meta");
            i.setAttribute("name", "viewport"), i.setAttribute("content", "width=device-width"), document.getElementsByTagName("head")[0].replaceChild(i, a)
        }
    }

    function m() {
        var a = document.getElementsByTagName("body")[0],
                i = document.getElementsByClassName("spkac_accessibility_icon")[0],
                e = document.getElementsByClassName("spkac")[0],
                n = document.getElementsByClassName("spkac_hide")[0],
                t = document.getElementsByClassName("spkac_hide_icon")[0];
        a && a.addEventListener("touchstart", function (a) {
            for (var i = !1, n = a.target; n; ) {
                if (n.classList && n.classList.contains("spkac_accessibility_icon")) {
                    i = !0;
                    break
                }
                n = n.parentNode
            }
            i || e.classList.remove("spkac_over")
        }), i.addEventListener("touchstart", function () {
            setTimeout(function () {
                e.classList.add("spkac_over")
            }, 50)
        }), i.addEventListener("click", function () {
            K.isMobile && !e.classList.contains("spkac_over") && e.classList.contains("spkac_hidden") || d()
        }), i.addEventListener("keyup", function (a) {
            32 != a.keyCode && 13 != a.keyCode || d()
        }), i.addEventListener("mouseover", function () {
            K.isMobile || (clearTimeout(aa), aa = setTimeout(function () {
                e.classList.add("spkac_over")
            }, 100))
        }), i.addEventListener("mouseout", function () {
            K.isMobile || (clearTimeout(aa), aa = setTimeout(function () {
                e.classList.remove("spkac_over")
            }, 100))
        }), n.addEventListener("click", function (a) {
            a.stopPropagation(), e.classList.toggle("spkac_hidden"), e.classList.contains("spkac_hidden") ? S("spkac_hidden", !0) : S("spkac_hidden", !1)
        }), t.addEventListener("click", function (a) {
            a.stopPropagation(), e.classList.add("spkac_hidden"), S("spkac_hidden", !0), e.classList.remove("spkac_over")
        })
    }

    function k(a, i) {
        return (" " + a.className + " ").indexOf(" " + i + " ") > -1
    }

    function d() {
        var a = document.getElementsByClassName("spkac")[0],
                i = document.getElementsByClassName("spkac_accessibility_icon")[0],
                e = document.getElementsByClassName("spkac_iframe")[0];
        if (a.classList.toggle("spkac_on"), i.setAttribute("aria-pressed", a.classList.contains("spkac_on")), i.setAttribute("aria-expanded", a.classList.contains("spkac_on")), !e.hasAttribute("src")) {
            e.setAttribute("src", H + "/?code=" + (K.account || K.code) + "&rand=" + +new Date);
            var n = JSON.stringify({
                code: K.account || K.code,
                identity: K.identity,
                origin: window.location.origin,
                referrer: document.referrer
            });
            t("show");
            // var o = new XMLHttpRequest;
            // o.open("post", Q + "/stats/opens"), o.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), o.send(n)
        }
        window.frames.spkac.postMessage({
            isUserWay: !0,
            action: "toggled",
            state: k(a, "spkac_on") ? "show" : "hide"
        }, "*")
    }

    function g() {
        var a = window,
                i = "inner";
        return "innerWidth" in window || (i = "client", a = document.documentElement || document.body), {
            width: a[i + "Width"],
            height: a[i + "Height"]
        }
    }

    function h() {
        var a = document.getElementsByClassName("spkac")[0];
        if (!a)
            return !1;
        a.classList.remove("spkac_on"), t("show");
        var i = (html2canvas(document.body, {
            allowTaint: !1,
            useCORS: !0,
            width: 300,
            height: 300
        }).then(function (i) {
            var e = document.createElement("canvas"),
                    n = e.getContext("2d"),
                    o = g();
            n.canvas.width = o.width, n.canvas.height = o.height, n.drawImage(i, 0, 0, o.width, o.height, 0, 0, o.width, o.height);
            var u = e.toDataURL("image/png");
            window.frames.spkac.postMessage({
                isUserWay: !0,
                action: "sendScreenShotPreview",
                imageSrc: u
            }, "*"), a.classList.add("spkac_on"), t("hide")
        }).catch(function (e) {
            a.classList.add("spkac_on"), t("hide"), i && clearTimeout(i)
        }), setTimeout(function () {
            a.classList.add("spkac_on"), t("hide")
        }, 5e3))
    }

    function y(a, i) {
        var e = new RegExp("\\b" + i + ".*?\\b", "g");
        return a.className = a.className.replace(e, ""), a
    }

    function c() {
        var a = K.position || K.tunings.widget_position || 1,
                i = document.getElementsByClassName("spkac");
        (i.length > 0 && null !== i[0] && (y(i[0], "spkac_p"), i[0].classList.add("spkac_p" + a)), I("spkac_hidden")) && document.getElementsByClassName("spkac")[0].classList.add("spkac_hidden")
    }

    function p(a) {
        32 != a.keyCode && 13 != a.keyCode || this.click()
    }

    function w() {
        var a = !1,
                i = document.getElementsByTagName("html")[0].classList;
        for (var e in K.settings)
            if (K.settings.hasOwnProperty(e))
                if (K.settings[e].value) {
                    if ("spkac-s1" == e) {
                        for (var n = document.querySelectorAll("[onclick], [ng-click], .btn, .radio, .checkbox, [role=link]"), t = 0; t < n.length; t++)
                            n[t].setAttribute("tabindex", 0), n[t].hasAttribute("role") || n[t].setAttribute("role", "link"), n[t].addEventListener("keypress", p);
                        n = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
                        for (var o = 0; o < n.length; o++)
                            n[o].setAttribute("tabindex", 0);
                        n = document.querySelectorAll("[role=button], [role=tab]");
                        for (var u = 0; u < n.length; u++)
                            n[u].setAttribute("tabindex", 0);
                        i.add(e)
                    } else if ("spkac-s2" == e)
                        -1 !== ["ie", "edge"].indexOf(K.browser) ? i.add(e + "-ie") : i.add(e);
                    else if ("spkac-s3" == e)
                        if (i.remove("spkac-s3-1"), i.remove("spkac-s3-2"), i.remove("spkac-s3-3"), i.add(e + "-" + K.settings[e].value), "1" == K.settings[e]) {
                            var s = document.querySelector("html"),
                                    r = z(s, "background-color");
                            "rgba(0, 0, 0, 0)" == r && s.style && (s.style.backgroundColor = "#ffffff");
                            var l = document.querySelector("body"),
                                    m = z(l, "background-color");
                            "rgba(0, 0, 0, 0)" == m && l.style && (l.style.backgroundColor = "#ffffff")
                        } else {
                            var k = document.querySelector("html");
                            k.style && (k.style.backgroundColor = null);
                            var d = document.querySelector("body");
                            d.style && (d.style.backgroundColor = null)
                        }
                    else if ("spkac-s4" == e) {
                        if (i.remove("spkac-s4-1"), i.remove("spkac-s4-2"), i.remove("spkac-s4-3"), i.remove("spkac-s4-4"), K.isMobile || -1 === ["chrome", "safari", "ie"].indexOf(T())) {
                            for (var g = [130, 160, 190, 205], h = K.settings[e] - 1 || 0, y = document.querySelectorAll("body, body *"), c = "", w = 0; w < y.length; w++) {
                                if ($[h - 1])
                                    for (var b = 0; b < $[h - 1].length; b++)
                                        y[w].classList.remove($[h - 1][b]);
                                var v = y[w].getAttribute("data-spkac-font-size"),
                                        S = parseInt(v * g[h] / 100);
                                if (S) {
                                    var I = "spkac-font" + S;
                                    -1 === $[h].indexOf(I) && ($[h].push(I), c += " ." + e + "-" + K.settings[e].value + " ." + I + "{font-size: " + S + "px!important; line-height: 1.1!important;}"), y[w].classList.add(I)
                                }
                            }
                            c && j(c)
                        }
                        i.add(e + "-" + K.settings[e].value)
                    } else if ("spkac-s7" == e) {
                        for (var L = ["fa", "glyphicon", "icon", "icon-.*", "typcn"], f = document.querySelectorAll("body, body *"), x = 0; x < f.length; x++)
                            f[x].classList.value && M(L, f[x].classList.value.split(" ")) || f[x].classList.add("spkac-s7-active");
                        i.add(e)
                    } else
                        i.add(e);
                    a = !0
                } else if ("spkac-s1" == e) {
                    i.remove(e);
                    for (var O = document.querySelectorAll("[onclick], [ng-click], .btn, .radio, .checkbox, [role=link]"), D = 0; D < O.length; D++)
                        O[D].removeEventListener("keypress", p)
                } else if ("spkac-s2" == e)
                    i.remove("spkac-s2"), i.remove("spkac-s2-ie");
                else if ("spkac-s3" == e) {
                    i.remove("spkac-s3-1"), i.remove("spkac-s3-2"), i.remove("spkac-s3-3");
                    var C = document.querySelector("html"),
                            q = z(C, "background-color");
                    "rgb(255, 255, 255)" == q && C.style && (C.style.backgroundColor = null);
                    var N = document.querySelector("body"),
                            A = z(N, "background-color");
                    "rgb(255, 255, 255)" == A && N.style && (N.style.backgroundColor = null)
                } else if ("spkac-s4" == e) {
                    i.remove("spkac-s4-1"), i.remove("spkac-s4-2"), i.remove("spkac-s4-3"), i.remove("spkac-s4-4");
                    for (var E = document.querySelectorAll("body, body *"), _ = 0; _ < E.length; _++)
                        if (E[_].classList && E[_].classList.value)
                            for (var B = E[_].classList.value.split(/\s+/), Y = 0; Y < B.length; Y++)
                                B[Y].match(/^spkac-font/) && E[_].classList.remove(B[Y])
                } else if ("spkac-s7" == e) {
                    i.remove(e);
                    for (var F = document.getElementsByClassName("spkac-s7-active"), U = 0; U < F.length; U++)
                        F.hasOwnProperty(U) && F[U].classList.remove("spkac-s7-active")
                } else
                    i.remove(e);
        var Z = document.getElementsByClassName("spkac")[0];
        a ? Z.classList.add("spkac_enabled") : Z.classList.remove("spkac_enabled")
    }

    function b() {
        for (var a in K.settings)
            K.settings.hasOwnProperty(a) && (K.settings[a].value = I(a))
    }

    function j(a) {
        var i = document.createElement("style");
        i.innerHTML = a, document.body.appendChild(i)
    }

    function v(a) {
        var i = document.createElement("div");
        i.innerHTML = a, i.classList.add("spkac"), K.isMobile && i.classList.add("spkac_mobile"), i.setAttribute("tab-index", 1), document.body.appendChild(i)
    }

    function S(a, i, e) {
        e ? K.settings[a].value[e] = i : "object" == _typeof(K.settings[a]) ? K.settings[a].value = i : K.settings[a] = i, K.supportsLocalStorage ? window.localStorage.setItem(a, i) : f(a)
    }

    function I(a) {
        if (K.supportsLocalStorage) {
            var i = window.localStorage.getItem(a);
            return void 0 !== i && "undefined" !== i && null !== i && JSON.parse(i)
        }
        var e = L(a);
        return void 0 !== e && "undefined" !== e && null !== e && JSON.parse(e)
    }

    function L(a) {
        var i = document.cookie.match(new RegExp("(?:^|; )" + a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        return i ? decodeURIComponent(i[1]) : void 0
    }

    function f(a, i, e) {
        e = e || {};
        var n = e.expires;
        if ("number" == typeof n && n) {
            var t = new Date;
            t.setTime(t.getTime() + 1e3 * n), n = e.expires = t
        }
        n && n.toUTCString && (e.expires = n.toUTCString()), i = encodeURIComponent(i);
        var o = a + "=" + i;
        for (var u in e)
            if (e.hasOwnProperty(u)) {
                o += "; " + u;
                var s = e[u];
                !0 !== s && (o += "=" + s)
            }
        document.cookie = o
    }

    function M(a, i) {
        for (var e = 0; e < i.length; e++)
            for (var n = 0; n < a.length; n++)
                if (i[e].match(new RegExp("^" + a[n] + "$")))
                    return !0;
        return !1
    }

    function z(a, i) {
        return a.currentStyle ? a.currentStyle[i] : document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(a, "")[i] : a.style[i]
    }

    function x(a, i, e) {
        return 1 - (.299 * a + .587 * i + .114 * e) / 255 < .5
    }

    function O(a, i) {
        i = i || !1;
        var e = parseInt(a, 16),
                n = e >> 16 & 255,
                t = e >> 8 & 255,
                o = 255 & e;
        return i ? [n, t, o].join(",") : {
            r: n,
            g: t,
            b: o
        }
    }

    function T() {
        return -1 != (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) ? "opera" : -1 != navigator.userAgent.indexOf("Edge") ? "edge" : -1 != navigator.userAgent.indexOf("Chrome") ? "chrome" : -1 != navigator.userAgent.indexOf("Safari") ? "safari" : -1 != navigator.userAgent.indexOf("Firefox") ? "firefox" : -1 != navigator.userAgent.indexOf("MSIE") || document.documentMode ? "ie" : "unknown"
    }

    function D() {
        X.responsiveVoice.ready && (K.settings["spkac-s9"].value ? ("wait" == ia && C(), ia = "play") : (q(), ia = "wait"))
    }

    function C() {
        X.responsiveVoice.isReading = !0, A(P(), 0)
    }

    function q() {
        X.responsiveVoice.isReading = !1, X.responsiveVoice.currentNode && R(Y(!0), X.responsiveVoice.className), responsiveVoice.cancel()
    }

    function N(a) {
        return a.replace(/\|/g, "").trim()
    }

    function A(a, i) {
        if (!a.length || i >= a.length)
            return void(ia = "end");
        if (X.responsiveVoice.isReading) {
            X.responsiveVoice.currentNode = a[i || 0], i = ++i;
            var e = E(Y()),
                    n = N(e);
            if (n) {
                var t = X.responsiveVoice.processedList;
                t[t.length - 1] && t[t.length - 1] == n ? (t.push(n), A(a, i)) : responsiveVoice.speak(n, X.responsiveVoice.voice_locale, {
                    onstart: function () {
                        G(Y(!0), X.responsiveVoice.className)
                    },
                    onend: function () {
                        t.push(n), R(Y(!0), X.responsiveVoice.className), setTimeout(A, X.responsiveVoice.delayReading, a, i)
                    }
                })
            } else
                A(a, i)
        }
    }

    function E(a) {
        return _(a) + " " + a.textContent
    }

    function _(a) {
        var i = B(a) ? a : X.responsiveVoice.currentNode.parentNode,
                e = i.getAttribute("placeholder");
        if (X.responsiveVoice.tagsWithSubContent.indexOf(i.nodeName.toLowerCase()) >= 0)
            switch (i.nodeName.toLowerCase()) {
                case "a":
                    return K.locales[X.responsiveVoice.language].widget.responsive_voice.href;
                case "img":
                    return K.locales[X.responsiveVoice.language].widget.responsive_voice.alt + ": " + i.alt;
                case "input":
                case "textarea":
                    return K.locales[X.responsiveVoice.language].widget.responsive_voice.placeholder + ": " + e
            }
        return ""
    }

    function B(a) {
        return "#text" !== a.nodeName
    }

    function Y(a) {
        var i = X.responsiveVoice.currentNode;
        return a && !B(i) && (i = X.responsiveVoice.currentNode.parentNode), i
    }

    function F(a, i) {
        var e = document.createElement("script");
        e.src = a, e.readyState ? e.onreadystatechange = function () {
            "loaded" != e.readyState && "complete" != e.readyState || (e.onreadystatechange = null, X.responsiveVoice.ready = !0, i())
        } : e.onload = function () {
            X.responsiveVoice.ready = !0, i()
        }, document.getElementsByTagName("body")[0].appendChild(e)
    }

    function U() {
        if ("undefined" != typeof _spkac_config && _spkac_config.hasOwnProperty("language"))
            X.responsiveVoice.languages[_spkac_config.language] && (X.responsiveVoice.voice_locale = X.responsiveVoice.languages[_spkac_config.language], X.responsiveVoice.language = _spkac_config.language);
        else {
            var a = document.getElementsByTagName("html")[0],
                    i = null;
            if (a && (i = a.getAttribute("lang") || a.getAttribute("xml:lang")), i)
                -1 !== i.indexOf("-") && (i = i.split("-")[0]), -1 !== i.indexOf("_") && (i = i.split("_")[0]), X.responsiveVoice.languages[i] && (X.responsiveVoice.voice_locale = X.responsiveVoice.languages[i], X.responsiveVoice.language = i);
            else {
                var e = function a(i) {
                    if (3 === i.nodeType)
                        return i.nodeValue;
                    for (var e = i.childNodes, n = e.length, t = "", o = 0; o < n; o++)
                        if (3 != e[o].nodeType)
                            if (e[o].tagName) {
                                var u = e[o].getAttribute("placeholder");
                                switch (e[o].tagName.toLowerCase()) {
                                    case "script":
                                    case "img":
                                    case "styles":
                                    case "style":
                                    case "iframe":
                                    case "frame":
                                    case "xmp":
                                    case "br":
                                    case "select":
                                        t += "";
                                        break;
                                    case "input":
                                    case "textarea":
                                        t += u && "" !== u ? u : "";
                                        break;
                                    default:
                                        var s = e[o].getAttribute("aria-label");
                                        t += s && "" !== s ? s : a(e[o])
                                }
                                t += ""
                            } else
                                t += a(e[o]);
                        else
                            t += e[o].nodeValue;
                    return t
                }(document.getElementsByTagName("body")[0]),
                        n = franc(e);
                if (i = !!n && convertLanguageCode(n, "ISO 639-3", "ISO 639-1"))
                    X.responsiveVoice.voice_locale = X.responsiveVoice.languages[i], X.responsiveVoice.language = i;
                else {
                    var t = window.navigator.languages ? window.navigator.languages[0] : null,
                            o = t || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
                    -1 !== o.indexOf("-") && (o = o.split("-")[0]), -1 !== o.indexOf("_") && (o = o.split("_")[0]), X.responsiveVoice.languages[o] && (X.responsiveVoice.voice_locale = X.responsiveVoice.languages[o], X.responsiveVoice.language = o)
                }
            }
        }
    }

    function Z() {
        null === X.responsiveVoice.language ? K.settings["spkac-s9"].disabled = !0 : K.settings["spkac-s9"].disabled = !1
    }

    function P() {
        function a(n, o) {
            if (n.childNodes.length) {
                var u = 0;
                for (u; u < n.childNodes.length; u++) {
                    var s = n.childNodes[u];
                    s.pushedFlag && s.pushedFlag == t || !i(n) || !e(s) || (o.push(s), s.pushedFlag = t), -1 !== X.responsiveVoice.tags.indexOf(s.nodeName.toLowerCase()) && a(s, o)
                }
            }
            return n.pushedFlag && n.pushedFlag == t || -1 === X.responsiveVoice.tagsIncluded.indexOf(n.nodeName.toLowerCase()) || !i(n) || (o.push(n), n.pushedFlag = t), o
        }

        function i(a) {
            return a.getBoundingClientRect().top > 0
        }

        function e(a) {
            return "#text" == a.nodeName && a.textContent.trim().length > 0
        }
        var n = document.getElementsByTagName("*"),
                t = "isPushed_" + Date.now();
        if (n.length) {
            var o = 0,
                    u = [];
            for (o; o < n.length; o++) {
                var s = n[o];
                -1 !== X.responsiveVoice.tags.indexOf(s.nodeName.toLowerCase()) && a(s, u)
            }
            return u
        }
    }

    function G(a, i) {
        a.classList.add(i)
    }

    function R(a, i) {
        a.classList.remove(i)
    }
    var H = "https://cdn.spkac.org/widget",
            Q = "https://spkac.org/api",
            W = "https://code.responsivevoice.org/responsivevoice.js",
            V = " ",
            J = ' ',
            X = {
                responsiveVoice: {
                    ready: !1,
                    isReading: !1,
                    currentNode: null,
                    delayReading: 50,
                    className: "spkac-responsive-voice",
                    voice_locale: null,
                    languages: {
                        en: "US English Male",
                        ru: "Russian Female",
                        ar: "Arabic Female",
                        cs: "Czech Female",
                        el: "Greek Female",
                        es: "Spanish Female",
                        fr: "French Female",
                        hi: "Hindi Female",
                        it: "Italian Female",
                        ja: "Japanese Female",
                        ko: "Korean Female",
                        nl: "Dutch Female",
                        pl: "Polish Female",
                        pt: "Portuguese Female",
                        ro: "Romanian Male",
                        sv: "Swedish Female",
                        tr: "Turkish Female",
                        uk: "UK English Female",
                        zh: "Chinese Female",
                        in: "Indonesian Female",
                        no: "Norwegian Female",
                        sk: "Slovak Female",
                        ta: "Tamil Male",
                        th: "Thai Female",
                        sq: "Albanian Male",
                        ca: "Catalan Male",
                        hr: "Croatian Male",
                        da: "Danish Female",
                        fi: "Finnish Female",
                        hu: "Hungarian Female",
                        is: "Icelandic Male",
                        lv: "Latvian Male",
                        mk: "Macedonian Male",
                        sr: "Serbian Male",
                        vi: "Vietnamese Male"
                    },
                    tags: ["form", "input", "textarea", "section", "nav", "article", "table", "tbody", "thead", "th", "tr", "td", "aside", "div", "a", "span", "p", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "li", "option", "header", "main", "img", "footer", "em", "strong", "u", "label", "button"],
                    tagsWithSubContent: ["a", "img", "input", "textarea"],
                    tagsIncluded: ["img", "input", "textarea"],
                    processedList: []
                }
            },
            K = {
                browser: T(),
                isMobile: function () {
                    return navigator.userAgent.match(/mobile/i)
                }(),
                identity: function () {
                    var a = "spkac_identity",
                            i = Math.random().toString(36).substring(7);
                    try {
                        var e = sessionStorage.getItem(a);
                        return e || (e = i, sessionStorage.setItem(a, e)), e
                    } catch (a) {
                        return i
                    }
                }(),
                supportsLocalStorage: function () {
                    try {
                        return "localStorage" in window && null !== window.localStorage && (window.localStorage.setItem("spkac-test", null), !0)
                    } catch (a) {
                        return !1
                    }
                }(),
                href: function () {
                    return document.location.href
                }(),
                account: "",
                language: "en",
                autoLanguage: "",
                languageHardcoded: null,
                async: !1,
                settings: {
                    "spkac-s1": {
                        value: !1,
                        disabled: !1
                    },
                    "spkac-s2": {
                        value: !1,
                        disabled: !1
                    },
                    "spkac-s3": {
                        value: !1,
                        disabled: !1
                    },
                    "spkac-s4": {
                        value: !1,
                        disabled: !1
                    },
                    "spkac-s5": {
                        value: !1,
                        disabled: !1
                    },
                    "spkac-s6": {
                        value: !1,
                        disabled: !1
                    },
                    "spkac-s7": {
                        value: !1,
                        disabled: !1
                    },
                    "spkac-s8": {
                        value: !1,
                        disabled: !1
                    },
                    "spkac-s9": {
                        value: !1,
                        disabled: !1
                    }
                },
                tunings: {},
                languages: {}
            },
            $ = {
                0: [],
                1: [],
                2: [],
                3: []
            },
            aa = null,
            ia = "wait";
    !function () {
        if ("undefined" != typeof _spkac_config)
            for (var a in _spkac_config)
                _spkac_config.hasOwnProperty(a) && (K[a] = _spkac_config[a], "language" === a && _spkac_config[a] && (K.languageHardcoded = _spkac_config[a]))
    }(), K.async ? a() : document.addEventListener("DOMContentLoaded", function () {
        a()
    })
}();
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
    return typeof a
} : function (a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
};
!function (a, i) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define([], a) : (i = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, i.franc = a())
}(function () {
    return function a(i, e, n) {
        function t(u, s) {
            if (!e[u]) {
                if (!i[u]) {
                    var r = "function" == typeof require && require;
                    if (!s && r)
                        return r(u, !0);
                    if (o)
                        return o(u, !0);
                    var l = new Error("Cannot find module '" + u + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var m = e[u] = {
                    exports: {}
                };
                i[u][0].call(m.exports, function (a) {
                    var e = i[u][1][a];
                    return t(e || a)
                }, m, m.exports, a, i, e, n)
            }
            return e[u].exports
        }
        for (var o = "function" == typeof require && require, u = 0; u < n.length; u++)
            t(n[u]);
        return t
    }({
        1: [function (a, i, e) {
                i.exports = {
                    Latin: {
                        spa: " de|os |de | la|la | y | a |es |Ã³n |iÃ³n|rec|ere|der| co|e l|el |en |ien|cho|ent|ech|ciÃ³|aci|o a|a p| el|a l|al |as |e d| en|na |ona|s d|da |nte| to|ad |ene|con| pr| su|tod| se|ho |los| pe|per|ers| lo|o d| ti|cia|n d|cio| es|ida|res|a t|tie|ion|rso|te |do | in|son| re| li|to |dad|tad|e s|est|pro|que|men| po|a e|oda|nci| qu| un|ue |ne |n e|s y|lib|su | na|s e|nac|ia |e e|tra| pa|or |ado|a d|nes|ra |se |ual|a c|er |por|com|nal|rta|a s|ber| o |one|s p|dos|rÃ¡ |sta|les|des|ibe|ser|era|ar |ert|ter| di|ale|l d|nto|hos|del|ica|a a|s n|n c|oci|imi|io |o e|re |y l|e c|ant|cci| as|las|par|ame| cu|ici|ara|enc|s t|ndi| so|o s|mie|tos|una|bre|dic|cla|s l|e a|l p|pre|ntr|o t|ial|y a|nid|n p|a y|man|omo|so |n l| al|ali|s a|no | ig|s s|e p|nta|uma|ten|gua|ade|y e|soc|mo | fu|igu|o p|n t|hum|d d|ran|ria|y d|ada|tiv|l e|cas| ca|vid|l t|s c|ido|das|dis|s i| hu|s o|nad|fun| ma|rac|nda|eli|sar|und| ac|uni|mbr|a u|die|e i|qui|a i| ha|lar| tr|odo|ca |tic|o y|cti|lid|ori|ndo|ari| me|ta |ind|esa|cua|un |ier|tal|esp|seg|ele|ons|ito|ont|iva|s h|d y|nos|ist|rse| le|cie|ide|edi|ecc|ios|l m|r e|med|tor|sti|n a|rim|uie|ple|tri|ibr|sus|lo |ect|pen|y c|an |e h|n s|ern|tar|l y|egu|gur|ura|int|ond|mat|l r|r a|isf|ote",
                        eng: " th|the| an|he |nd |and|ion| of|of |tio| to|to |on | in|al |ati|igh|ght|rig| ri|or |ent|as |ed |is |ll |in | be|e r|ne |one|ver|all|s t|eve|t t| fr|s a| ha| re|ty |ery| or|d t| pr|ht | co| ev|e h|e a|ng |ts |his|ing|be |yon| sh|ce |ree|fre|ryo|n t|her|men|nat|sha|pro|nal|y a|has|es |for| hi|hal|f t|n a|n o|nt | pe|s o| fo|d i|nce|er |ons|res|e s|ect|ity|ly |l b|ry |e e|ers|e i|an |e o| de|cti|dom|edo|eed|hts|ter|ona|re | no| wh| a | un|d f| as|ny |l a|e p|ere| en| na| wi|nit|nte|d a|any|ted| di|ns |sta|th |per|ith|e t|st |e c|y t|om |soc| ar|ch |t o|d o|nti|s e|equ|ve |oci|man| fu|ote|oth|ess| al| ac|wit|ial| ma|uni| se|rea| so| on|lit|int|r t|y o|enc|thi|ual|t a| eq|tat|qua|ive| st|ali|e w|l o|are|f h|con|te |led| is|und|cia|e f|le | la|y i|uma|by | by|hum|f a|ic | hu|ave|ge |r a| wo|o a|ms |com| me|eas|s d|tec| li|n e|en |rat|tit|ple|whe|ate|o t|s r|t f|rot| ch|cie|dis|age|ary|o o|anc|eli|no | fa| su|son|inc|at |nda|hou|wor|t i|nde|rom|oms| ot|g t|eme|tle|iti|gni|s w|itl|duc|d w|whi|act|hic|aw |law| he|ich|min|imi|ort|o s|se |e b|ntr|tra|edu|oun|tan|e d|nst|l p|d n|ld |nta|s i|ble|n p| pu|n s| at|ily|rth|tho|ful|ssi|der|o e|cat|uca|unt|ien| ed|o p|h a|era|ind|pen|sec|n w|omm|r s",
                        por: "os |de | de| a | e |o d|to |Ã£o | di|ent|da |ito|em | co|eit|as |dir|es |ire|rei| se|Ã§Ã£o|ade|a p|dad|e d|s d|men|nte|do |s e| pr| pe|dos| to| da|a a|o e| o |o a|ess|con|tod|que| qu|te |e a| do|al |res|ida|m d| in| ou|er |sso| na| re| po|a s| li|uma|cia|ar |pro|e e|a d| te|aÃ§Ã£|a t| es| su|ou |ue |s p|tos|a e|des|ra |com|no |ame|ia |e p|tem|nto| pa|is |est|tra|Ãµes|na |s o|oda|das|ser|soa|s n|pes|o p|s a|o s|e o| em| as| Ã  |o o|ais|ber|ado|oa |o t|e s|man|sua|ua | no| os|a c|ter|Ã§Ãµe|erd|lib|rda|s s|nci|ibe|e n|ica|odo|so |nal|ntr|s t|hum|ura| ao|ona|ual| so|or |ma |sta|o c|a n|pre|ara|era|ons|e t|r a|par|o Ã | hu|ind|por|cio|ria|m a|s c| um|a l|gua|ran| en|ndi|o i|e c|raÃ§|ion|nid|aci|ano|soc|e r|oci| ac|und|sen|nos|nsi|rec|ime|ali|int|um |per|nac| al|m o|r p| fu|ndo|ont|aÃ§Ãµ| ig|igu|fun|nta| ma|uni|cÃ§Ã£|ere| ex|a i| me|ese|rio|l d|a o|s h|pel|ada|pri|ide|am |m p|pod|s f|Ã©m |a f|io |ode|ca |ita|lid|tiv|e f|vid|r e|esp|nda|omo|e l|naÃ§|o r|ant|a q|tad|lic|iva| fa|ver|s l|ial|cla|ngu|ing| ca|mo |der| vi|eli|ist|ta |se |ati|ios|ido|r o|eci|dis| un|e i|r d|ecÃ§|o q|s i|qua|Ãªnc|a m|seu|sti|nin|uer|rar|cas|aos|ens|guÃ©|ias|sid|uÃ©m|tur|dam|sse|ao |ela|l e|for|tec|ote| pl|ena| tr|m c|tro| ni|ico|rot",
                        ind: "an |ang| da|ng | pe|ak | ke| me|ata| se|dan|kan| di| be|hak|ber|per|ran|nga|yan|eng| ya| ha|asa|gan|men|ara|nya|n p|n d|n k|a d|tan| at|at |ora|ala|san| ba|ap |erh|n b|rha|ya | ma|g b|a s|pen|eba|as |aan|uk |ntu| or|eti|tas|aka|tia|ban|set| un|n s|ter|n y| te|k m|tuk|bas|iap|lam|beb|am | de|k a|keb|n m|i d|unt|ama|dal|ah |ika|dak|ebe|p o|sa |pun|mem|n h|end|den|ra |ela|ri |nda| sa|di |ma |a m|n t|k d|n a|ngg|tau|man|gar|eri|asi| ti|un |al |ada|um |a p|lak|ari|au | ne|neg|a b|ngs|ta |ole|leh|ert|ers|ida|k h|ana|gsa|dar|uka|tid|bat|sia|era|eh |dap|ila|dil|h d|atu|sam|ia |i m| in|lan|aha|uan|tu |ai |t d|a a|g d|har|sem|na |apa|ser|ena|kat|uat|erb|erl|mas|rta|ega|ung|nan|emp|n u|kum|l d|g s| hu|ka |ent|pat|mba|aga|nta|adi| su|eni|uku|n i|huk|ind|ar |rga|i s|aku|ndi|sua|ni |rus|han|si |car|nny| la|in |u d|ik |ua |lah|rik|usi|emb|ann|mer|ian|gga|lai|min|a u|lua|ema|emu|arg|dun|dip|a t|mat|aya|rbu|aru|erk|rka|ini|eka|a k|rak|kes|yat|iba|nas|rma|ern|ese|s p|nus| pu|anu|ina| ta|mel|mua|kel|k s|us |ndu|nak|da |sya|das|pem|lin|ut |yar|ami|upu|seo|aik|eor|iny|aup|tak|ipe|ing|tin| an|dik|uar|ili|g t|rse|sar|ant|g p|a n|aks|ain| ja|t p| um|g m|dir|ksa|umu|kep|mum|i k|eca|rat|m p|h p|aba|ses|m m",
                        fra: " de|es |de |ion|nt |et |tio| et|ent| la|la |e d|on |ne |oit|e l|le | le|s d|e p|t d|ati|roi| dr|dro|it | Ã  | co|tÃ© |ns |te |e s|men|re | to|con| lâ€™|tou|que| qu|les| so|des|son| pe|ons| un|s l|s e| pr|ue | pa|e c|t l|ts |onn| au|e a|eme|e e| li|ont|ant|out|ute|t Ã |res|ers| sa|ce | a |tre|per|a d|cti|er |lib|itÃ©| en|ux | re|en |rso|Ã  l| ou| in|lle|un |nat|ou |nne|n d|une| dâ€™| se|par|nte|us |ur |s s|ans|dan|a p|r l|pro|its|Ã©s |t p|ire|e t|s p|sa | dÃ©|ond|Ã© d|a l|nce|ert|aux|omm|nal|me | na| fo|iqu| ce|rtÃ©|ect|ale|ber|t a|s a| da|mme|ibe|san|e r| po|com|al |s c|qui|our|t e| ne|e n|ous|r d|ali|ter| di|fon|e o|au | ch|air|ui |ell| es|lit|s n|iss|Ã©ra|tes|soc|aut|oci|Ãªtr|ien|int|du |est|Ã©tÃ©|tra|pou| pl|rat|ar |ran|rai|s o|ona|ain|cla|Ã©ga|anc|rs |eur|pri|n c|e m|s t|Ã  u| do|ure|bre|ut | Ãªt|age| Ã©t|nsi|sur|ein|sen|ser|ndi|ens|ess|ntr|ir | ma|cia|n p|st |a c| du|l e| su|bli|ge |rÃ©s| rÃ©|e q|ass|nda|peu|Ã©e |lâ€™a| te|a s|tat|il |tÃ©s|ais|u d|ine|ind|Ã© e|quâ€™| ac|s i|n t|t c|n a|lâ€™h|t q|soi|t s|cun|rit| Ã©g|oir|â€™en|nta|hom| on|n e| mo|ie |ign|rel|nna|t i|l n| tr|ill|ple|s Ã©|lâ€™e|rec|a r|ote|sse|uni|idÃ©|ive|s u|t Ãª|ins|act| fa|n s| vi|gal| as|lig|ssa|prÃ©|leu|e f|lic|dis|ver| nu|ten|ssi|rot|tec|s m|abl",
                        deu: "en |er |der| un|nd |und|ein|ung|cht| de|ich|sch|ng | ge|ie |che|ech| di|die|rec|gen|ine|eit| re|ch | da|n d|ver|hen| zu|t d| au|ht | ha|lic|it |ten|rei| be|in | ve| in| ei|nde|auf|den|ede|zu |n s|uf |fre|ne |ter|es | je|jed|n u| an|sei|and| fr|run|at | se|e u|das|hei|s r|hte|hat|nsc|nge|r h|as |ens| al|ere|lle|t a| we|n g|rde|nte|ese|men| od|ode|ner|g d|all|t u|ers|te |nen| so|d d|n a|ben|lei| gr| vo|wer|e a|ege|ion| st|ige|le |cha| me|haf|aft|n j|ren| er|erk|ent|bei| si|eih|ihe|kei|erd|tig|n i|on |lun|r d|len|gem|ies|gru|tli|unt|chu|ern|ges|end|e s|ft |st |ist|tio|ati| gl|sta|gun|mit|sen|n n| na|n z|ite| wi|r g|eic|e e|ei |lie|r s|n w|gle|mei|de |uch|em |chl|nat|rch|t w|des|n e|hre|ale|spr|d f|ach|sse|r e| sc|urc|r m|nie|e f|fen|e g|e d| ni|dur|dar|int| du|geh|ied|t s| mi|alt|her|hab|f g|sic|ste|taa|aat|he |ang|ruc|hli|tz |eme|abe|h a|n v|nun|geg|arf|rf |ehe|pru| is|erf|e m|ans|ndl|e b|tun|n o|d g|n r|r v|wie|ber|r a|arb|bes|t i|h d|r w|r b| ih|d s|igk|gke|nsp|dig|ema|ell|eru|n f|ins|rbe|ffe|esc|igu|ger|str|ken|e v|gew|han|ind|rt | ar|ieÃŸ|n h|rn |man|r i|hut|utz|d a|ls |ebe|von|lte|r o|rli|etz|tra|aus|det|hul|e i|one|nne|isc|son|sel|et |ohn|t g|sam| fa|rst|rkl|ser|iem|g v|t z|err",
                        jav: "ng |an |ang| ka|ing|kan| sa|ak |lan| la|hak| ha| pa| ma|ngg|ara|sa |abe|ne | in|n k|ant| ng|tan|nin| an|nga|ata|en |ran| ba|man|ban|ane|hi |n u|ong|ra |nth|ake|ke |thi| da|won|uwo|ung|ngs| uw|asa|gsa|ben|sab|ana|aka|beb|a k|g p|nan|nda|adi|at |awa|san|ni |dan|g k|pan|eba| be|e k|g s|ani|bas| pr|dha|aya|gan|ya |wa |di |mar|n s| wa|ta |a s|g u| na|e h|arb|a n|a b|a l|n n| ut|yan|n p|asi|g d|han|ah |g n| tu| um|as |wen|dak|rbe|dar| di|ggo|sar|mat|k h|a a|iya| un|und|eni|kab|be |art|ka |uma|ora|n b|ala|n m|ngk|rta|i h| or|gar|yat|kar|al |a m|n i|na |g b|ega|pra|ina|kak|g a|a p|tum|nya|kal|ger|gge| ta|kat|i k|ena|oni|kas| pe|dad|aga|g m|duw|k k|uta|uwe| si| ne|adh|pa |n a|go |and|i l| ke|nun|nal|ngu|uju|apa|a d|t m|i p|min|iba|er | li|anu|sak|per|ama|gay|war|pad|ggu|ha |ind|taw|ras|n l|ali|eng|awi|a u| bi|we |bad|ndu|uwa|awe|bak|ase|eh | me|neg|pri| ku|ron|ih |g t|bis|iji|i t|e p| pi|aba|isa|mba|ini|a w|g l|ika|n t|ebu|ndh|ar |sin|lak|ur |mra|men|ku | we|e s|a i|liy| ik|ayo|rib|ngl|ami|arg|nas|yom|wae|ut |kon|ae |rap|aku| te|dil|tin|rga|jud|umu| as|rak|bed|k b|il |kap|h k|jin|k a| nd|e d|i s| lu|i w|eka|mum|um |uha|ate| mi|k p|gon|eda| ti|but|n d|r k|ona|uto|tow|wat|gka|si |umr|k l|oma",
                        vie: "ng |Ì£c |Ìc | qu| th|aÌ€ |nh | ng|Ì£i | nh|vaÌ€| va|Ì€n |uyÃª| ph| ca|quy|ÃªÌ€n|yÃªÌ€|Ì€i | ch|Ì€nh| tr| cu|ngÆ°|i n|gÆ°Æ¡|Æ°Æ¡Ì€|Ìt |Æ¡Ì€i| gi|aÌc| co|Ì£t |oÌ |c t|Æ°Ì£ |n t|caÌ|Ã´ng| kh|Æ°Æ¡Ì£|Æ¡Ì£c| tÆ°| Ä‘Æ°|iÃªÌ£|Ä‘Æ°Æ¡|iÌ€n|Ìi | ha|coÌ|i Ä‘|gia| Ä‘Ãª|pha| mo|oÌ£i|moÌ£|nhÆ°|n n|cuÌ‰| ba|Ì£n |Ì‰a |uÌ‰a|n c|Ì€u |Ìƒng|Ã¢n |ÃªÌ€u|Ã¢Ìt| bi|tÆ°Ì£|hÃ´n| vi|g t| la|n Ä‘|Ä‘ÃªÌ€|nhÃ¢| ti|t c| Ä‘Ã´|Ãªn |baÌ‰|hiÃª|u c| tÃ´|do |hÃ¢n| do|ch |Ì q|Ì€ t| na|Ìn |ay | hi|aÌ€n|Ì£ d|Æ¡Ìi|haÌ| Ä‘i|hay|g n| mÃ´|Ã´Ìc|uÃ´Ì|n v|Ã´Ì£i|hÆ°Ìƒ|thÆ°|Ìp |quÃ´| ho|Ì£p |naÌ€|aÌ€o|Ì€ng|Ì‰n |iÌ£ |Ìch|Ã´n |Ì€o |khÃ´|c h|i c|c Ä‘| hÃ´|i v|tro| Ä‘a|Ìng|mÃ´Ì£|i t|Ã´Ì£t|g v|ia |Ì£ng|aÌ‰n|Æ°Æ¡Ì|Æ°Ìƒn|Ì‰ng|h t|hÆ° |ÃªÌ£n|n b|Ã´Ì£c|aÌ‰ |laÌ€|c c|g c| Ä‘o|Ì‰ c|n h|haÌ€|hÃ´Ì£| bÃ¢|aÌƒ |Ì€y | vÆ¡|Ì£ t|Ì‰i |iÃªÌ| cÃ´|t t|g Ä‘|Æ°Ìc|iÃªn| vÃª|viÃª|vÆ¡Ì|h v|Æ¡Ìc|Æ°Ì£c|Ã¢Ì£t|tha|Ì‰m |ron|ong|aÌp|g b|hÆ°Æ¡| sÆ°|a c|sÆ°Ì£|Ì‰o |aÌ‰o|h c|ÃªÌ‰ |o v|uÃ¢Ì£|a m|ÃªÌ |iaÌ|Ì€ c|cho|qua|haÌ£|uÌ£c| mi|Ì€ n|phÃ¢|c q|cÃ´n|o c|aÌ |i h|aÌ£i| hÆ¡|Ìƒ h| cÆ°|n l|biÌ£| lu|bÃ¢Ì|caÌ‰|iÌn|h Ä‘| xa|Ä‘Ã´Ì£|g h|c n|c p|thu|aÌ‰i|ÃªÌ£ | hÆ°|Ì c|o n| nÆ°|Ã´Ìn|Ìo |aÌo|xaÌƒ|oaÌ€|y t|haÌ‰|tÃ´Ì£|Ì£ c| tÃ¢|thÃ´| du|m v|miÌ€|ho |hÆ°Ì|ÃªÌ£c|Ì t|hÆ¡Ì£|aÌn|n p|cuÌƒ|uÌƒn|iÃªÌ‰|Ã´Ìi|tiÃª|ÃªÌ€ |hÃ¢Ì|Æ¡Ì£p|hoa|y Ä‘|chi|o h|Æ¡Ì‰ |aÌ€y|Ì‰ t|Ä‘oÌ|c l|vÃªÌ€|Ì€ Ä‘|i b|kha|c b| Ä‘Ã¢|luÃ¢|ai |Ì‰ n|Ä‘Ã´Ì|ÃªÌt|hÆ°Ì£|tri|p q|nÆ°Æ¡|duÌ£|hiÌ|g q|yÃªn|hoÌ£|Ình| ta| bÄƒ|c g|n g|thÃª|o t|c v|am |c m|an ",
                        ita: " di|to | de|ion| in|la |e d|di |ne | e |zio|re |le |ni |ell|one|lla|rit|a d|o d|del|itt|iri|dir| co|ti |ess|ent| al|azi|tto|te |i d|i i|ere|tÃ  | pr|ndi|e l|ale|o a|ind|e e|e i|gni|nte|con|i e|li |a s| un|men|ogn| ne|uo | og|idu|e a|ivi|duo|vid| es|tti| ha|div| li|a p|no |all|pro|za |ato|per|sse|ser| so|i s| la| su|e p| pe|ibe|na |a l| il|ber|e n|il |ali|lib|ha |che|in |o s|e s| qu|o e|ia |e c| ri|nza|ta |nto|he |oni|o i| o |sta|o c|nel| a |o p|naz|e o|so | po|o h|gli|i u|ond|i c|ers|ame|i p|lle|un |era|ri |ver|ro |el |una|a c| ch|ert|ua |i a|ssi|rtÃ |a e|ei |dis|ant| l |tat|a a|ona|ual| le|itÃ |are|ter| ad|nit| da|pri|dei|Ã  e|cia| st| si|nal|est|tut|ist|com|uni| ed|ono| na|sua|al |si |anz| pa| re|raz|gua|ita|res|der|soc|man|o o|ad |i o|ese|que|enz|ed | se|io |ett|on | tu|dic|Ã  d|sia|i r|rso|oci|rio|ari|qua|ial|pre|ich|rat|ien|tra|ani|uma|se |ll |eri|a n|o n| um|do |ara|a t|zza|er |tri|att|ico|pos|sci|i l|son|nda|par|e u|fon| fo|nti|uzi|str|utt|ati|sen|int|nes|iar| i |hia|n c|sti|chi|ann|ra | eg|egu|isp|bil|ont|a r| no|rop| me|opr|ost| ma|ues|ica|sso|tal|cie|sun|lit|ore|ina|ite|tan| ra|non|gio|d a|e r|dev|i m|l i|ezz|izi| cu|nno|rÃ  |a i|tta|ria|lia|cos|ssu|dal|l p| as|ass|opo|ve |eve",
                        tur: " ve| ha|ve |ler|lar|ir |in |hak| he|her|bir|er |an |arÄ±|eri|ya | bi|ak |r h|eti|Ä±n |iye|yet| ka|asÄ±|Ä±nÄ±| ol|tle|eya|kkÄ±|ara|akk|etl|sÄ±n|esi|na |de |ek | ta|nda|ini| bu|ile|rÄ±n|rin|vey|ne |kla|e h|ine|Ä±r |ere|ama|dÄ±r|n h| sa|Ä±na|sin|e k|le | ge|mas|Ä±nd|nÄ±n|Ä± v| va|lan|lma|erk|rke|nma|tin|rle| te|nin|akl|a v|da | de|let|ill|e m|ard|en |riy|aya|nÄ± | hÃ¼| ÅŸa|e b|k v|kÄ±n|k h| me|mil|san| il|si |rdÄ±|e d|dan|hÃ¼r|var|ana|e a|kes|et |mes|ÅŸah|dir| mi|ret|rri| se|ola|Ã¼rr|irl|bu |mak| ma|mek|n e|kÄ± |n v|n i|lik|lle| ed| hi|n b|a h| ba|nsa| iÅŸ|eli|kar| iÃ§|Ä± h|ala|li |ulu|rak|evl|e i|ni |re |r ÅŸ|eme|etm|e t|ik |e s|a b|iÅŸ |n k|hai|nde|aiz| eÅŸ|izd|un |olm|hiÃ§|zdi|ar |unm|ma | gÃ¶|ilm|lme|im |n t|tir|dil|mal|e g|i v| ko|lun|e e|mel|ket|Ä±k |n s|ele|la |el |r v|ede|ÅŸit|ili|eÅŸi|yla|a i| an|anÄ±| et|rÄ± |ahs| ya|sÄ± |edi|siy|t v|i b|se |iÃ§i|Ã§in|bul|ame| da|miÅŸ|may|tim|a k|tme|r b|ins|yan|nla|mle| di|eye|ger|ye |uÄŸu|erd|din|ser| mÃ¼|mem|vle| ke|nam|ind|len|eke|es | ki|n m|it | in| ku|rÅŸÄ±|a s|arÅŸ| ay|eml|lek|oru|rme|kor|rde|i m| so|tÃ¼r|al |lam|eni|nun| uy|ken|hsÄ±|i i|a d|ri |dev|Ã¼n |a m|r a|mey|cak|Ä±yl|maz|e v|ece|ade|iÃ§ |ÅŸma|mse|te |tÃ¼n|ims|kim|e y|ÅŸÄ± |end|k g|ndi|alÄ±| ce|lem|Ã¶ÄŸr|Ã¼tÃ¼|k i|r t| Ã¶ÄŸ|bÃ¼t|anl| bÃ¼",
                        pol: " pr|nie| i |ie |pra| po|ani|raw|ia |nia|wie|go | do|ch |ego|iek|owi| ni|Å›ci|ci |a p|do |awo| cz|oÅ›c|ych| ma|ek |rze| na|prz| w |wo |ej | za|noÅ›|czÅ‚|zÅ‚o|eni|wa | je|Å‚ow|i p|wol|oln| lu|rod| ka| wo|lno|wsz|y c|ma |ny |kaÅ¼|aÅ¼d|o d|stw|owa|dy |Å¼dy| wy|rzy|sta|ecz| sw|dzi|i w|e p|czn|twa|na |zys|Ã³w |szy|ub |lub|a w|est|kie|k m|wan| sp|ajÄ…| ws|e w|pow|pos|nyc|rac|spo|aÄ‡ |a i|cze|sze|neg|yst|jak| ja|o p|pod|acj|ne |Å„st|aro|mi | z |i i|nar| ko|obo|awa| ro|i n|jÄ…c|zec|zne|zan|dow| rÃ³|iej|zy |zen|nic|ony|aw |i z|czy|no |nej|o s|rÃ³w|odn|cy |Ã³wn|odz|o w|o z|jeg|edn|o o|aki|mie|ien|kol| in|zie|bez|ami|eÅ„s|owo|dno| ob| or| st|a s|ni |orz|o u|ym |stÄ™|tÄ™p|Å‚ec|jed|i k| os|w c|lwi|ez |olw|oÅ‚e|poÅ‚|cji|y w|o n|wia| be|ktÃ³|a j|zna|zyn|owe|wob|ka |wyc|owy|ji | od|aln|inn|jes|icz|h p|i s|siÄ™|a o|jÄ… |ost|kra|st |sza|swo|war|cza|roz|y s|raz|nik|ara|ora|lud|i o|a z|zes| kr|ran|ows|ech|w p|dÃ³w|Ä… p|pop|a n|tki|stk|gan|zon|raj|e o|iec|i l| si|Å¼e |eka| kt| de|em |tÃ³r|iÄ™ |wni|lni|ejs|ini|odo|dni|eÅ‚n|kow|peÅ‚|a d|ron|dek|pie|udz|bod|nan|h i|dst|ieg|taw|z p|z w|zeÅ„|god|iu |ano|lar| to|y z|a k|ale|kla|trz|zaw|ich|e i|ier|iko|dzy|chn|w z|by |kÃ³w|adz|ekl|ywa|ju |och|kor|sob|ocz|oso|u p|du |tyc|tan|Ä™dz| mi|e s| ta|ki ",
                        gax: "aa |an |uu | ka|ni |aan|umm|ii |mma|maa| wa|ti |nam| fi|ta |tti| na|saa|fi | mi|rga|i k|a n| qa|dha|iyy|oot|in |mir|irg|raa|qab|a i|a k|kan|akk|isa|chu|amu|a f|huu|aba|kka| ta|kam|a a| is|amn|ami|att|ach|mni|yaa| bi|yuu|yyu|ee |wal|miy|waa|ga |ata|aat|tii|oo |a e|moo| ni| ee|ba | ak|ota|a h|i q| ga| dh|daa|haa|a m|ama|yoo|a b|i a|ka |kaa| hi|sum|aas|arg|man| hu| uu|u n| yo| ar| ke| ha|ees| ba|uf |i i|taa|uuf|iin|ada|a w|i f|ani|rra|na |isu| ad|i w|a u|nya|irr|da |hun|hin|ess| ho| ma|i m|und|i b|bar|ana|een|mu |is |bu |f m| ir| sa|u a|add|aad| la|i d|n h|eeg|i h|sa |hoj|abu| ya|kee|al |udh|ook|goo|ala|ira|nda|itt|gac|as |n k|mum|see|rgo|uum|ra |n t|n i|ara|muu|ums|mat|nii|sii|ssa|a d|a q| da|haw|a g|yya|asu|eef|u h|tum|biy| mo|a t|ati|eny|gam|abs|awa|roo|uma|n b|n m|u y|a s|sat|baa|gar|n a|mmo|nis| qo|nna| ku|eer| to|kko|bil|ili|lis|bir|otu|tee|ya |msa|aaf|suu|n d|jii|n w|okk|rka|gaa|ald|un |rum| ye|ame| fu|mee|yer|ero|amm|era|kun|i y|oti|tok|ant|ali|nni| am|lda|lii|n u|lee|ura|lab|aal|tan|laa|i g|ila|ddu|aru|u m|oji|gum|han|ega| se|ffa|dar|faa|ark|n y|hii|qix|gal|ndi| qi|asa|art|ef |uud| bu|jir| ji|arb|n g|chi|tam|u b|dda|bat|di |kar|lam|a l| go|bsi|sad|oka|a j|egu|u t|bee|u f|uun",
                        swh: "a k|wa |na | ya| ku|ya | na| wa|a m| ha|i y|a h|a n|ana|ki |aki|kwa| kw|hak| ka| ma|la |a w|tu |li |a u|ni |i k|a a|ila| ki|ali|a y|ati|za |ili|ifa| mt|ke | an|kil|kat|mtu|ake|ote|te |ka |ika|ma |we |a s|yo |fa |i n|ata|e k|ama|zi |amb|u a|ia |u w| yo|azi|kut|ina|i z|asi| za|o y|uhu|yak|au |ish|mba|e a|u k|hur|ha |tik|wat| au|uru| bi|sha|mu |ara|u n| as|hi | hi|ru |aif|tai|cha|ayo|a b|hal| uh| ch|yot|i h| zi|awa|chi|atu|e n|ngi|u y|mat|shi|ani|eri| am|uli|ele|sa |ja |e y|a t|oja|o k|nch|i a|a j| nc|ima| sh|ami| ta|end|any|moj|i w|ari|ham|uta|ii |iki|ra |ada|wan|wak|nay|ye |uwa| la|ti |eza|o h|iri|iwa|kuw|iwe| wo|fan| sa|she|bu |kan|ao |jam|wen|lim|i m|her|uto|ria| ja| ni|kam|di | hu|zo |a l|da |kaz|ahi|amu|wot|o w|si |dha|bin|ing|adh|a z|bil|e w|nya|kup|har|ri |ang|aka|sta|aji|ne |kus|e m|zim|ini|ind|lin|kul|agu|kuf|ita|bar|o n|uu |iyo|u h|nad|maa|mwe|ine|gin|nye|nde|dam|ta | nd|ndi|rik|asa| ba|rif|uni|nga|hii|lez|bo |azo|uzi|mbo|sil|ush|tah|wam|ibu|uba|imu| ye|esh| ut|taa|aar|wez|i s|e b| si|ala|dhi|eng|aza|tak|hir|saw|izo|kos|tok|oka|yan|a c|wal|del|i b|pat| um|ndo|zwa|mam|a i|guz|ais|eli|mai|laz|ian|aba|man|ten|zin|ba |nda|oa |u m|uku|ufu| mw|liw|aha|ndw|kuh|ua |upa| el|umi|sia",
                        sun: "an |na |eun| ka|ng | sa|ana|ang| di|ak | ha|nga|hak|un |ung|keu|anu| ba| an|nu |a b| bo| je|a h|ata|asa|jeu|ina| ng|ara|nan|awa|gan|ah |sa |a k| na|n k|kan|aha|a p|a s|ga |ban| ma|a n|ing|oga|bog|sar| pa| ku|man|a a|ha |san|ae |bae|din|g s|aga|sah|ra |tan|n s| pe|ala| si|kat|ma |per| ti|aya|sin| at| pi| te|n a|aan|lah|pan|gar|n n|u d|ta |eu |ari|kum|ngs|a m|n b|n d|ran|a d|gsa|wa |taw|k h|ama|ku |ike|n p|eba|bas| ja|al |a t|ika|at |beb|kab|pik|asi|atu|nda|una|a j|nag|e b|n h|en |g k|oh |aba|ila|rta|aku|boh|ngg|abe|art|ar |n j|di |ima|um |ola|geu|usa|aca|sak|adi|k a|udu|teu|car|tin| me| ay|h k| po|eh |u s|aka|rim|ti |sac|k n|ngt|jen|awe|ent|u a|uma|teh|law|ur |h s|dan|bar|uku|gaw|aru|ate|iba|dil|pol|aja|ieu|ere|jal|nar| hu|n t|nya|pa |are|upa|mas|ake|ut |wan| ge|kal|nus| so|ngk|ya |yan|huk| du|tun| mi|mpa|isa|lan|ura|u m|uan|ern|ena|nte|rup|tay|n m| ke|ka |han|und|us |h b|kud|ula|tut| tu| ie|hna|kaw|u k|lak|gam|mna|umn|g d| nu|yun|ri |ayu|wat| wa|eri|g n|a u|i m|u p| ta|du |dit|umu|k k|ren|mba|rik|gta| be|ali|h p|h a|eus|u n|alm|il | da|sas|ami|min|lma|ngu|nas|yat|rak|amp|mer|k j|sab|mum| ra|rua|ame|ua |ter|sal|ksa|men|kas|nge|k d|ona| bi|bis|sio|ion|nal|taa| de|uh |gal|dip|we |bad",
                        ron: " de|È™i | È™i|re | Ã®n|are|te |de |ea |ul |rep|le |ept|dre|e d| dr|ie |Ã®n |e a|ate|ptu| sa|tul| pr|or |e p| pe|la |e s|ori| la| co|lor| or|ii |rea|ce |au |tat|aÈ›i| a | ca|ent| fi|ale|Äƒ a|a s| ar|ers|per|ice| li|uri|a d|al | re|e c|ric|nÄƒ |i s|e o|ei |tur| sÄƒ|lib|con|men|ibe|ber|rso|sÄƒ |tÄƒÈ›|sau| ac|ilo|pri|ÄƒÈ›i|i a|i l|car|l l|ter| in|È›ie|cÄƒ |soa|oan|È›ii|lÄƒ |tea|ri |a p| al|ril|e È™|anÄƒ|in |nal|pre|i Ã®|uni|ui |se |e f|ere|i d|e Ã®|ita| un|ert|ile|tÄƒ |a o| se|i È™|pen|ia |ele|fie|i c|a l|ace|nte|ntr|eni| cÄƒ|alÄƒ| ni|ire|Äƒ d|pro|est|a c| cu| nu|n c|lui|eri|ona| as|sal|Ã¢nd|naÈ›|ecu|i p|rin|inÈ›| su|rÄƒ |e n| om|ici|nu |i n|oat|Äƒri|l d| to|tor| di| na|iun| po|oci|tre|ni |ste|soc|ega|i o|gal| so| tr|Äƒ p|a a|n m|sta|va |Äƒ Ã®|fi |res|rec|ulu|nic|din|sa |cla|nd | mo| ce| au|ara|lit|int|i e|ces|uie|at |rar|rel|iei|ons|e e|leg|nit|Äƒ f| Ã®m|a Ã®|act|e l|ru |u d|nta|a f|ial|ra |Äƒ c| eg|È›Äƒ | fa|i f|rtÄƒ|tru|tar|È›i |Äƒ È™|ion|ntu|dep|ame|i i|reb|ect|ali|l c|eme|nde|n a|ite|ebu|bui|Ã¢t |ili|toa|dec| o |pli|vÄƒÈ›|nt |e r|u c|È›a |t Ã®|l È™|cu |rta|cia|ane|È›io|ca |itÄƒ|poa|cÈ›i|Ã®mp|bil|r È™| st|omu|ÄƒÈ›Äƒ|È›iu|rie|uma|mÃ¢n| ma|ani|nÈ›a|cur|era|u a|tra|oar| ex|t s|iil|ta |rit|rot|mod|tri|riv|od |lic|rii|eze|man|Ã®nv|ne |nvÄƒ|a È™|cti",
                        hau: "da | da|in |a k|ya |an |a d|a a| ya| ko| wa| a |sa |na | ha|a s|ta |kin|wan|wa | ta| ba|a y|a h|n d|n a|iya|ko |a t|ma |ar | na|yan|ba | sa|asa| za| ma|a w|hak|ata| ka|ama|akk|i d|a m| mu|su |owa|a z|iki|a b|nci| Æ™a| ci| sh|ai |kow|anc|nsa|a Æ™|a c| su|shi|ka | ku| ga|ci |ne |ani|e d|uma|â€˜ya|cik|kum|uwa|ana| du| â€˜y|É—an|ali|i k| yi|ada|Æ™as|aka|kki|utu|n y|a n|hi | ra|mut| do| ad|tar| É—a|nda| ab|man|a g|nan|ars|and|cin|ane|i a|yi |n k|min|sam|ke |a i|ins|yin|ki |nin|aÉ—a|ann|ni |tum|za |e m|ami|dam|kan|yar|en |um |n h|oka|duk|mi | ja|ewa|abi|kam|i y|dai|mat|nna|waÉ—|n s|ash|ga |kok|oki|re |am |ida|sar|awa|mas|abu|uni|n j|una|ra |i b| Æ™u|dun|a â€˜|cew|a r|aba|Æ™un|ce |e s|a É—|san|she|ara|li |kko|ari|n w|m n|buw|aik|u d|kar| ai|niy| ne|hal|rin|bub|zam|omi| la|rsa|ubu|han|are|aya|a l|i m|zai|ban|o n|add|n m|i s| fa|bin|r d|ake|n â€˜|uns|sas|tsa|dom| ce|ans| hu|me |kiy|Æ™ar| am|É—in| an|ika|jam|i w|wat|n t|yya|ame|n Æ™|abb|bay|har|din|hen|dok|yak|n b|nce|ray|gan|fa |on | ki|aid| ts|rsu| al|aye| id|n r|u k|ili|nsu|bba|aur|kka|ayu|ant|aci|dan|ukk|ayi|tun|aga|fan|unc| lo|o d|lok|sha|un |lin|kac|aÉ—i|fi |gam|i i|yuw|sun|aif|aja| ir|yay|imi|war| iy|riy|ace|nta|uka|o a|bat|mar|bi |sak|n i| ak|tab|afi|sab",
                        fuv: "de | e |e n|nde| ha|la |e e| ka|akk| nd| wa|ina|al |hak|na | in|ndi|kke|É—o |di |ii |ade|aad|um |ko |i h|ala| mu| ne|lla|mum|ji |wal| jo| fo|all|eÉ—É—| le|neÉ—|e h|kal| ko|taa|re | ng|aaw|e k|aa |jog|e w|ley|ee |ke |laa|e m|eed|e l|nnd|aag|É—É—o|ol | ta|o k|gu |kee|le |waa|ond|gal|a j|ogi|am |eji|dee|m e|ti |nga|e d|É—e |awa|É“e | wo|gii|eej|ede|gol|aan| re| go|i e|agu|e t|ann|fot|eyd|oti|É—ee|pot| po|maa|naa|oto|ydi| he|i n|ni |taw|enn|een|dim|to |a i|e f|e j|goo|a k|der| fa| aa|ele| de|o n|dir| ba|er |ngu|oot|ndo|i k|ota|ima| sa|won|ay |ka |a n|oor|a f|ngo|tee| ja|i f| to|o f|e É“|i w|wa |ren|a e|nan|kam|hay|ma |eyÉ—|o t|awi|yÉ—e|ore|o e|too|and|fof|i m|a w|Ã±aa|e y|hee| do|eel|ira|nka|aak|e g|e s|l e|of |aar| É“e|dii| la|ani|e p|tin|a t| te| na|e i| so|o w|ral|e r|are|ooj|awo|woo|gaa| ma|u m|kaa|faw| Ã±a|dow| mo|oo | ya|aam|nge|nng| yi|und| ho|en |i l|so | mb| li|o i|e a| nj| o |ude|e b|o h|igg|É—i |lig|nda|ita|baa| di|iin| fe|iti|aaÉ—|ama|inn|haa|iiÉ—|a h| no|tii|den|tal| tu|tuu|yan|l n|yim|do |non|imÉ“|bel| je|ine| hu|njo|ugn|guu|no | da|edd|uug|mii|nee|jey|a d|ano| ke|lit|lli|go |je |ank|tde|amt|ent|eÉ—e|É“am| É“a|mÉ“e|y g|aga|alt|É—É—a|ind|wit| su|nna| É—e|ree|Å‹de|i a|m t|aÅ‹d|l h|jaÅ‹|ago|ow |ete| É—u",
                        bos: " pr| i |je |rav| na|pra|na |da |ma |ima| sv|a s|nje|a p| da| po|anj|a i|vo |va |ko |ja | u |ako|o i|no | za|e s|ju |avo| im|ti |sva|ava|i p|o n|li |ili|i s|van|ost| ko|vak|ih |ne |a u| sl|nja|koj| dr| ne|jed| bi|i d|ije|stv|u s|lob|im |slo| il|bod|obo| ra|sti|pri| je| su|vje|om |a d|se |e i| ob|a n|i i| se|dru|enj| os|voj|cij|e p|a b|su |o d|uje|u p|raz|i n|a o| od|lo |u o|ova|u i|edn|i u| nj|ovo|jen|lju|ni |oje|nos|a k|ran|dje|iti|o p|aci|Å¾av|a j|i o|e o|pre|pro|bra|nih|ji | ka|e d|jeg|og |sta| tr|tre|bud|u n|drÅ¾|u z|rÅ¾a|bit|svo|ija|elj|reb|e b|mij|jem|avn|pos| bu|ka |aju| iz|ba |ve |rod|de |aro|e u|iva|a z|em |Å¡ti|ilo|eni|lje|Ä‡i |red|bil|jel|jer| ni|odn|m i|du |tva|nar|gov| sa|oji| do|tu |vim|u d| st|o k|e n|a t|za |nim| dj| sm|uÄ‡i|iÄn|dna|i m|oda|vno|eba|ist|nac|e k|Äno|nak|ave|tiv|eÄ‘u|nov|olj|sno|ani|aln|an |nom|i b|stu|nst|eno|oj |osn|a r|ovj|nap|smi|nog|Äov|oja|nju|ara|nu |dno|ans|ovi|jan|edi|m s| kr|h p|tup| op| Äo|iko|jek|tvo| vj| mi|tel|vu |obr|Å¾iv|tit|o o|una|odu| mo| ov|kri|ego|din|rug|nik|rad|pod|nji|sam|sto|lja|dst|rim|ite|riv| te|m n|vol|i v|e t|vni|akv|itu|g p| ta|aÅ¡t|zaÅ¡|svi|ao |te |o s|ak |mje|a Ä|odr|udu|kla|i t|avi|tno|niÄ| vr|nic|dni|u u|ina| de|oba|od |jih|st ",
                        hrv: " pr| i |je |rav|pra|ma | na|ima| sv|na |ti |a p|nje| po|a s|anj|a i|vo |ko |da |vat|va |no | za|i s|o i|ja |avo| u | im|sva|i p| bi|e s|ju |tko|o n|li |ili|van|ava| sl|ih |ne |ost| dr|ije| ne|jed|slo| ra|u s|lob|obo| os|bod| da| ko|ova|nja|koj|i d|atk|iti| il|stv|pri|om |im | je| ob| su| ka|i i|i n|e i|vje|i u|se |dru|bit|voj|ati|i o|Ä‡en|a o|o p|a b|a n|uÄ‡i| se|enj|sti|a u|edn|dje|lo |Ä‡av| mo|raz|u p| od|ran|ni |rod|a k|su |aro|drÄ‡|svo|ako|u i|rÄ‡a|a j|mij|ji |nih|eni|e n|e o| nj|pre|pos|Ä‡iv|oje|eno|e p|nar|oda|nim|ovo|aju|ra |Ä‡i |og |nov|iva|a d|nos|bra|bil|i b|avn|a z|jen|e d|ve |ora|tva|jel|sta|mor|u o|cij|pro|ovi|za |jer|ka |sno|ilo|jem|red|em |lju|osn|oji| iz|aci| do|lje|i m| ni|odn|nom|jeg| dj|vno|vim|elj|u z|o d|rad|o o|m i|du |uje| sa|nit|e b| st|oj |tit|a Ä‡|dno|e u|o s|u d|eÄ‡u|ani|dna|nak|nst|stu| sm|e k|u u|an |gov|nju|juÄ‡|aln|m s|tu |a r|Ä‡ov|jan|u n|o k|ist|Ä‡u |te |tvo|ans|Å¡ti|nu |ara|nap|m p|niÄ‡|olj|bud| bu|edi|ovj|i v|pod|sam|obr|tel| mi|ina|zaÅ¡|e m|aÅ¡t| vj|ona|nji|jek| ta|duÄ‡|ija| Ä‡o|tup|h p|oja|smi|ada| op|oso|una|sob|odu|dni|rug|udu|ao |di |avi|tno|jim|itu|itk|Ä‡e |odr|ave|meÄ‡|nog|din|svi| Ä‡i|kak|kla|rim|akv|elo|Å¡tv|ite|vol|jet|opÄ‡|pot|tan|ak |nic|nac|uÄ‡e| sk| me|ven",
                        nld: "en |de |an | de|van| va| en| he|ing|cht|der|ng |n d|n v|et |een| ge|ech|n e|ver|rec|nde| ee| re| be|ede|er |e v|gen|den|het|ten| te| in| op|n i| ve|lij| zi|ere|eli|zij|ijk|te |oor|ht |ens|n o|and|t o|ijn|ied|ke | on|eid|op | vo|jn |id |ond|in |sch| vr|aar|n z|aan| ie|rde|rij|men|ren|ord|hei|hte| we|eft|n g|ft |n w|or |n h|eef|vri|wor| me|hee|al |t r|of |le | of|ati|g v|e b|eni| aa|lle| wo|n a|e o|nd |r h|voo| al|ege|n t|erk| da| na|t h|sta|jke|at |nat|nge|e e|end| st|om |e g|tie|n b|ste|die|e r|erw|wel|e s|r d| om|ij |dig|t e|ige|ter|ie |gel|re |jhe|t d| za|e m|ers|ijh|nig|zal|nie|d v|ns |d e|e w|e n|est|ele|bes| do|g e|che|vol|ge |eze|e d|ig |gin|dat|hap|cha|eke| di|ona|e a|lke|nst|ard| gr|tel|min| to|waa|len|elk|lin|eme|jk |n s|del|str|han|eve|gro|ich|ven|doo| wa|t v|it |ove|rin|aat|n n|wet|uit|ijd|ze | zo|ion| ov|dez|gem|met|tio|bbe|ach| ni|hed|st |all|ies|per|heb|ebb|e i|toe|es |taa|n m|nte|ien|el |nin|ale|ben|daa|sti| ma|mee|kin|pen|e h|wer|ont|iet|tig|g o|s e| er|igd|ete|ang|lan|nsc|ema|man|t g|is |beg|her|esc|bij|d o|ron|tin|nal|eer|p v|edi|erm|ite|t w|t a| hu|rwi|wij|ijs|r e|weg|js |rmi|naa|t b|app|rwe| bi|t z|ker|ame|eri|ken| an|ar | la|tre|ger|rdi|tan|eit|gde|g i|d z|oep",
                        srp: " pr| i |rav|pra| na|na |ma | po|je | sv|da |a p|ima|ja |a i|vo |nje|va |ko |anj|ti |i p| u |ako|a s| da|avo|i s|ju |ost| za|sva|o i|vak| im|e s|o n|ava| sl|nja| ko|no |ne |li |om | ne|ili| dr|u s|slo|koj|a n|obo|ih |lob|bod|im |sti|stv|a o| bi| il| ra|pri|a u|og | je|jed|e p|enj|ni |van|u p|nos|a d|iti|a k|edn|i u|pro|o d|ova| su|ran|cij|i i|sta|se | os|e i|dru| ob|i o|rod|aju|ove| de|i n| ka|aci|e o| ni| od|ovo|i d|ve | se|eni|voj|ija|su |u i|Å¾av|avn|uje| st|red|m i|dna|a b|odi|ara|drÅ¾|ji |nov|lju|e b|rÅ¾a|tva|Å¡to|u o|oja| ov|a j|odn|u u|jan|poÅ¡|jen| nj|nim|ka |oÅ¡t|du |raz|a z| iz|sno|o p|vu |u n|u d|Å¡ti|osn|e d|pre|u z|de |ave|nih|bit|aro|oji|bez|tu |gov|lje|iÄn| sa|lja|svo|lo |za |vno|e n|eÄ‘u| tr|nar| me|vim|Äno|oda|ani|Ä‘en|nac|nak|an |to |tre|aÅ¡t| kr|stu|nog|o k|m s|tit|aln|nom|oj |pos|e u|reb| vr|olj|dno|iko|ku |me |nik| do|ika|e k|jeg|nst|tav|em |i m|sme|o s|dni|bra|nju|Å¡en|ovi|tan|te |avi|vol| li|zaÅ¡|ilo|rug|var|kao|ao |riv|tup|st |Å¾iv|ans|eno|Äov|Å¡tv|kla|vre|bud|ena| ve|ver|odu|meÄ‘|oju|uÅ¡t| bu|kom|kri|pod|ruÅ¡|m n|i b|ba |a t|ugi|edi| mo|la |u v|kak| sm|ego|akv|o j|rad|dst|jav|del|tvo| op|nu |por|vlj|avl|m p|od |jem|oje| Äo|a r|sam|i v|ere|pot|o o|Å¡te|rem|vek|svi| on|rot|e r",
                        ckb: " he| Ã» |Ãªn | bi| ma|in |na | di|maf|an |ku | de| ku| ji|xwe|her| xw|iya|ya |kes|kir|rin|iri| ne|ji |bi |yÃªn|afÃª|e b|de |tin|e h|iyÃª|ke |es |ye | we|er |di |we |Ãª d|i b| be|erk|ina| na| an|Ã® Ã»|yÃª |eye|Ã® y|kÃ® |rke|nÃª |diy|ete|eke|ber|hem|hey| li| ci|wek|li |n d|fÃª | bÃª| te|ne |yÃ® | se|net|rÃ® |tew|yek|sti|af | ki|re |yan|n b|kar|hev|e k|aza|n Ã»|wÃ® | ew|i h|n k|Ã» b|Ã® b| mi| az|dan| wÃ®|ekÃ®|Ã® a|a m|zad|e d|mir|bin|est|ara|iro|nav|ser|a w|adi|rov|n h|anÃª|tÃª |ewe|be |ewl|ev |mÃ» | ya|tÃ® |ta |emÃ»| yÃª|ast|wle| tÃª|n m| bo|wey|s m|bo | tu|n j|ras| da| me|din|Ã® d|Ãª h|n n|n w|ing|st | ke| ge|Ã®n |ar | pÃª|iye|Ã®na|bat|r k|ema|cih|Ãª b|wed|Ã» m|dÃ® |Ã» a|vak|Ãª t|ekh|par| ye|vÃ® |civ|n e|ana|Ã® h|Ãª k|khe|geh|nge|Ã»na|fÃªn|ane|av |Ã® m|bik|eyÃª|eyÃ®|e Ã»| re|man|erb|a x|vÃª |Ãª m|iva|e n|hÃ® |bÃ»n|kÃª | pa|erÃ®|jÃ® |end| ta|ela|nÃªn|n x|a k|ika|f Ã»|f h|Ã® n|ari|mÃ® |a s|e j|eza|tÃªn|nek| ni|ra |ehÃ®|tiy|n a|bes|rbe|Ã» h|rwe|zan| a |erw|ov |inÃª|ama|ek |nÃ®n|bÃª |ovÃ®|ike|a n| ra|riy|i d|anÃ®|Ã» d|e e|etÃª|Ãª x|yet|aye|Ãª j|tem|e t|erd|i n|eta|ibe|a g|u d|xeb|atÃª|i m|tu | wi|dew|mal|let|nda|ewa| Ãªn|awa|e m|a d|mam|han|u h|a b|pÃªÅŸ|ere| ba|lat|ist| za|bib|uke|tuk|are|asÃ®|rti|arÃ®|i a|hÃ®n| hÃ®|edi|nÃ»n|anÃ»|qan| qa| hi| ÅŸe|ine|n l|mÃªn|Ã»n |e a",
                        yor: "ti | nÃ­|Ã³Ì© | Ã¨Ì©|nÃ­ | lÃ¡|Ì©n |oÌ©n|Ã©Ì© |woÌ©|Ã n | eÌ©|kan|an |tÃ­ | tÃ­|tÃ³Ì©| kÃ²|Ã²Ì© |Ì©tÃ³| Ã w| Ã t|Ã¨Ì© |Ã¨Ì©t|eÌ©n|bÃ­ |Ã ti|lÃ¡t|Ã¡ti| gb|lÃ¨Ì©|sÌ©e| lÃ³| Ã³ |Ã wo|gbo|Ì©nÃ¬|n l| a | tÃ³|Ã­ Ã¨|ra | sÌ©|n t|Ã²Ì©k|sÃ­ |tÃ³ |Ì©ka|kÃ²Ì©|Ã¬yÃ |oÌ© | sÃ­|Ã­lÃ¨|orÃ­|ni |yÃ n|dÃ¨ |Ì©â€Ã¨|Ã¬ k|Ì© Ã |Ã¨dÃ¨| or|Ãºn |rÃ­l|Ã¨Ì©â€|Ã­ Ã |jÃ©Ì©|â€Ã¨d|Ã bÃ­|Ì©Ã²Ì©|Ã²Ì©Ã²|tÃ b|nÃ¬ |Ã­ Ã³|n Ã | tÃ |Ì© l|joÌ©| ti|Ì©e |Ì© t| wo|nÃ¬y|Ã­ Ã¬|Ã³ n| jÃ©| sÃ¬|lÃ³ |kÃ² |n Ã¨|wÃ³Ì©| bÃ¡|n n|sÃ¬ | fÃº|Ì© s|Ã­ a|rÃ¨Ì©|fÃºn| pÃ©| Ã²m|Ì©ni|gbÃ | kÃ­| Ã¨n|Ã¨nÃ¬|in |Ã²mÃ¬|Ã¬Ã­ |ba |nir|pÃ© |ira|mÃ¬n|Ã¬ni|n o|rÃ n|Ã¬gb| Ã¬g|bÃ¡ |eÌ© | rÃ¨|Ì© n|kÃ­ |n e|un |gba|Ì© p|Ã­ Ã²|nÃº | oÌ©|nÃ­n|gbÃ©|yÃ© | ka|Ã­nÃº|a k|fi | fi|moÌ©|bÃ©Ì©|oÌ©d|dÃ²Ì©|Ì©dÃ²|Ã³ s|i l|Ì© o|Ì© Ã¬|wÃ  |Ã­ i|i Ã¬|hun|bÃ² |i Ã²|dÃ¡ |boÌ©|oÌ©m|Ì©mo|Ì©wÃ³|bo |Ã¡Ã  |Ì© k|Ã³ j|lÃ³Ì©|Ã gb|ohu| oh| bÃ­| Ã²Ì©|bÃ  |ara|yÃ¬Ã­|ogb|Ã­rÃ |n s|Ãº Ã¬| Ã¬b|pÃ²Ì©|Ã­ k| lÃ¨|bog|i t|Ã  t|Ã³Ã² |yÃ³Ã²|kÃ³Ì©|gÃ©Ì©|Ã  l|Ã³Ì©n|rÃº |lÃ¨ | yÃ³|Ì© Ã²|Ì© e|a w|Ì© y|Ã²Ì©r|Ì© f| wÃ |Ã² l|Ã­ t|Ã³ b|i n|Ã³Ì©w|Ì©gb|yÃ­ |Ã­ w|Ã¬kÃ©|Ì© a|lÃ¡Ã |wÃ¹j|Ã bÃ²|i Ã¨|Ã¹jo|fin|Ã©Ì©n|n k|Ã­ e|i j|Ãº Ã | Ã¬k|Ã²fi| Ã²f| ar|i s|mÃ¬Ã­|Ã¬Ã­r| mÃ¬| ir|rin|nÃ¡Ã | nÃ¡|jÃº |Ì© b| yÃ¬|Ã³ t|Ì©Ã©Ì©| i |Ì© m|fÃ©Ì©|kÃ n|rÃ­ |Ãº Ã¨|Ã  n|wÃ¹ |sÌ©Ã©|Ã© Ã | mÃº| Ã¨t|Ã¡yÃ©|Ã­ g|Ì©kÃ³|Ì©dÃ¡|Ã¨Ì©d|Ã wÃ¹|Ã¨Ì©k| Ã¬d|irÃº|Ã­ o|i o|i Ã |lÃ¡Ã¬|Ã­ n|Ã­pa| kÃº|nÃ­p| Ã¬m|a l|kÃ©Ì©|bÃ© |i g|de |Ã¡bÃ©|Ã¬n |bÃ¡y|Ì©Ã¨Ì©|Ã­gb|wÃ²Ì©|nÃ­g|mÃº |lÃ¡b| Ã Ã |n f|Ã¨Ì©s|Ì© w|Ã¹n |i a|ayÃ©|Ã¨yÃ­| Ã¨y|mÃ³Ì©|Ã¡ Ã¨| ni|n b| wÃ³|jeÌ©| Ã¬j|gbÃ¡|Ã²Ì©n|Ã³Ì©g",
                        uzn: "lar|ish|an |ga |ar | va| bi|da |va |ir | hu|iga|sh |uqu|shi|bir|quq|huq|gan| bo| ha|ini|ng |a e|r b| ta|lis|ni |ing|lik|ida|oÊ»l|ili|ari|nin|on |ins| in|adi|nso|son|iy | oÊ»|lan| ma|dir|hi |kin|har|i b|ash| yo|boÊ»| mu|dan|uqi|ila|ega|qla|r i|qig|oÊ»z| eg|kla|a b|qil|erk|ki | er|oli|nli|at | ol|gad|lga|rki|oki|i h|a o| qa|yok|lig|osh|igi|ib |las|n b|atl|n m| ba|ara| qi|ri | sh|iya|ala|lat|in |ham|bil|a t|a y|bos|r h|siy|n o|yat|inl|ik |a q|cha|a h| et|eti|nis|a s|til|ani|h h|i v|mas|tla|osi|asi| qo|Ê»li|ati|i m|rni|im |uql|arn|ris|qar|a i|gi | da|n h|ha |sha|i t|mla|rch| xa|i o|li |hun|bar|lin|Ê»z |arc|rla| bu|a m|a a| as|mum| be| tu|aro|r v|ikl|lib|taÊ¼|h v|tga|tib|un |lla|mda| ke|shg| to|n q|sid|n e|mat|amd|shu|hga| te|tas|ali|umk|oya|hla|ola|aml|iro|ill|tis|iri|rga|mki|irl| ya|xal|dam| de|gin|eng|rda|tar|ush|rak|ayo| eÊ¼| so|ten|alq| sa|ur | is|imo|r t| ki|mil| mi|era|zar|hqa|aza|k b| si|nda|hda|kat|ak |oÊ»r|n v|a k|or |rat|ada|Ê»lg|miy|tni|i q|shq|oda|shl|bu |dav|nid|y t|ch |asl|sos|ilg|aso|n t|atn|sin|am |ti |as |ana|rin|siz|yot|lim|uni|nga|lak|n i|a u|qon|i a|h k|vla|avl|ami|dek| ja|ema|a d|na | em|ekl|gÊ»i|si |i e|ino| ka|uch|bor|ker| ch|lma|liy|a v|Ê¼ti|lli|aka|muh|rig|ech|i y|uri|ror",
                        zlm: "an |ang| ke| se|ng | da|dan|ada|ara| pe|ak | be|ran|ber| me|ah |nya|hak|per|n s|ata|ala|ya |a s|kan|asa|n k|lah| di|da |aan|gan|nga|dal| ma|n d|erh|eba|rha|a p| ha|kep|pad|yan| ya|ap |ama| ba|nda| te|ra |tia|man|eng|a b|a d|ora|men|n p|ter|iap|san|epa| or|pen|eti| ad| at|a a|n a|set|tan|h b|tau|sia|n t|apa|dak|pa |sa |au |ta |ela|bas|at | sa|n b|beb|n m|keb|h d|p o|end|ega|aka|a k|am |sam|gar|ana|leh|lam|ole| un|neg|k k|ban|g a|di |n y|eh |a m|eri|aha|han| ti|a t|ma |any|uan|seb|ebe|ngs|atu|mas|bag|car|mem|ing|ian| ne|kes|i d|gsa|ia |ika|mat|agi|ert| de| la|emb|und|nan|asi|emu|ers|epe|na |anu|gi |ung|erk|n h|ngg|tu |ind|pem|i m|g b|kla| in|iha|pun|i s|erl|akl|era|as |dap|eca|sec|al |k m|bar|nus|usi|lan|tin|si |awa|nny| su|bol|sas| as|ini|rta|rat|ena|sem|aya|ni |den|g m|g t|kem|i k|adi|ai |ti | ap| ta|in | he| bo|had|uka|tar| an|hen|ann|ain|ka |rka|ri |ema|k h|n i|g s|dia|dun|ira|rsa|elu|nta|a n|mel|iad|uk |mpu|ua |har|kat|aga|lai|enu|ses|emp|ntu|k d|ent|un |mba|rma|jua|uat|k a|mar|rak|h m|ila|lua|i a|aja|ker|dil|g d|uma|rli|lin|esi|sua|nak|ndu|l d| pu|t d|erm|ser|ar |ese|ati|tuk|rga|i p|dar|esa|bah| ol|ari|ngk|ant|sek|gam|raa|mbe|ida|sat|iri|kea|i b|saa|dir|g u|erj|tik|unt|eka|rja",
                        ibo: "a n|e n|ke | na|na | á» | bá»¥| n |nwe|ere|á» b|re |nye| nk|ya |la | nw| ik| ma|ye |e á»|ike|a o|nke|a m|á»¥ n| ya|a á»|ma |bá»¥l|á»¥la| on| a |e i|kik|iki|ka |ony|ta |bá»¥ |kwa| nd|a i|i n|di |a a|wa |wer|do | mm|dá»¥ |e a|ha | ga|any| ob|ndi| ok|he |e m|e o|a e|á» n|ite|rá»¥ |hi |mma|gaâ€|wu |ara| dá»‹|aka|che|oke|we |o n| ih|n o|adá»¥|mad|obo|bod|a g|odo| ka| ez|te |há»‹ |be |á»¥ta|dá»‹ | an|zi | oh|aâ€e|akw|gba|i m|me | ak|u n|nya|ihe|ala|ohe|ghi|ri | á»z|her|ra |weg| nt| iw| mb|ba |pá»¥t| si|ro |oro|iwu|chi|aâ€a|rá»‹ |á»¥ i|á»¥ á»| eb|iri|ebe|á»¥rá»¥|zá» | in|a y|ezi|e á»‹|kpa|le |ile|á»‹rá»‹|n e|kpe|mba| ha|bi |sit|e e|inw|nil|asá»‹| en|mak|a u| ni|apá»¥|chá»‹|i i|ghá»‹|i á»|i o|si | e |ide|o i|e y|á»¥ m|a s|u o|kwu|ozu|yer|ru |enw|á»¥ o|á»zá»|gid|há»¥ |n a|ahá»¥|nkw|sor|egh|edo|a á»¥|tar|n i|toz|á»‹ o|pa |i a| me|ime|uru|kwe| mk|tu |ama|eny|uso|de | im|á» d|osi|hed|a d| kw|mkp|wet| á»r| á»n|obi|á»rá»¥| á»‹k| to|gas| ch|á»‹ch|nha|á»ná»|ná»d| nc| al|n á»¥|á»‹ m| us|ná» |u á»|nch| o |eta|n u| ot|otu|sir|sá»‹r| nh|a k|ali|o m| ag| gb|e s|á»ta|nwa|á»‹ n|lit|ega|ji |á»dá»¥|e k|ban|e g|á»‹ k|esi|agb|eme|hu |ikp|zu |pe |nta|naâ€|chá»|u a|a b|uch|n á»|onw|ram|kwá»¥|eká»|i e| ná»| ug|á»ch|u m|gwu|a h|zá»¥z|ugw|meg|á»‹ e|nat|e h|dá»‹g|o y|kpu|pá»¥r|cha|zá»¥ |há»‹c|ich| ng|ach| og|wap|wan|á»‹gh|uwa| di| nn|i á»‹",
                        ceb: "sa | sa|ng |ang| ka|an | pa|ga | ma|nga|pag| ng|a p|on |kat|a k|ug |od | ug|g m| an|ana|n s|ay |ung|ata|ngo|a m|atu|ala|san|ag |tun|g s|g k|god|d s|a s|ong|mga| mg|g p|n u|yon|a a|pan|ing|usa|tan|tag|una|aga|mat|ali|g u|han|nan| us|man|y k|ina|non|kin| na|syo|lan|a b|asa|nay|n n|a i|awa| ta|taw|gaw|nsa|a n|nas| o |ban|agp|isa|dun|was|iya| gi|asy|adu|ini|bis| ad|ili|o s| bi|g a|nah|nag|a t| ki|lin|lay|ahi|sam|al |wal| di|nal|asu| ba|ano|agt| wa|ama|yan|a u| iy|kan|him|n k|gan|ags|n a|kag| un|ya |kas|gpa|g t| su|aha|wha|agk|awh|gka|a g|kal|l n|gla|gsa|sud|gal|imo|ud |d u|ran|uka|ig |aka|aba|ika|g d|ara|ipo|ngl|g n|uns|n o|kau|i s|y s|og |uta|d n|li | si|gik|g i|mta|ot |iin| la| og|o a|ayo|ok |awo|aki|kab|aho|n m|hat|o p|gpi|a w|apa|lip|ip | hu| ga|a h|uba|na | ti|bal|gon|la |ati|wo |ad |hin|sal|gba|buh| bu| ub|uha|agb|hon|ma |nin|uga|t n|ihi| pi|may| pu|mak|ni | ni|d a|pin|abu|agh|ahu|uma|as |dil|say| in|at |ins|lak|hun|ila|mo |s s|sak|amt|o u|pod|ngp|tin|a d|but|ura|lam|aod|t s|bah|ami|aug|mal|sos|os |k s| il|tra| at|gta|bat|aan|ulo|iha|ha |n p| al|g b|lih|kar|lao|agi|amb|mah|ho |sya|ona|aya|ngb|in |inu|a l| hi|mag|iko|it |agl|mbo|oon|tar|o n|til|ghi|rab|y p| re|yal|aw |nab|osy|dan",
                        tgl: "ng |ang| pa|an |sa | sa|at | ka| ng| ma|ala|g p|apa| na|ata|pag|pan| an| at|ay |ara|ga |a p|tan|g m|mga| mg|n n|pat| ba|n a|aya|na |ama|g k|awa|kar|a k|lan|rap|gka|nga|n s|g n|aha|g b|a a| ta|agk|gan|tao|asa|aka|yan|ao |a m|may|man|kal|ing|a s|nan|aga| la|ban|ali|g a|ana|y m|kat|san|kan|g i|ong|pam|mag|a n|o a|baw|isa|wat| y |lay|g s|y k|in |ila|t t| ay|aan|o y|kas|ina|t n|ag |t p|wal|una|yon| o | it|nag|lal|tay|pin|ili|ans|ito|nsa|lah|kak|any|a i|nta|nya|to |hay|gal|mam|aba|ran|ant|agt|on |t s|agp| wa| ga|gaw|han|kap|o m|lip|ya |as |g t|hat|y n|ngk|ung|no |g l|gpa|wa |lag|gta|t m|kai|yaa|sal|ari|lin|a l|pap|ahi| is| di|ita| pi|pun|agi|ipi|mak|a b|y s|bat|yag|ags|o n|aki|tat|pah|la |gay|hin| si|di |i n|sas|iti|a t|t k|mal|ais|s n|t a|al |ipu|ika|lit|gin| ip|ano|gsa|alo|nin|uma|hal|ira|ap |ani|od |i a|gga|y p|par|tas|ig |sap|ihi|nah|ini| bu|ngi|syo|o s|nap|o p|a g| ha|uka|a h|aru|a o|mah|iba|asy|li |usa|g e|uha|ipa|mba|lam|kin|kil|duk|n o|iga| da|dai|aig|igd|gdi|pil|dig|pak| tu|d n|sam|nas|nak|ba |ad |lim|sin|buh|ri |lab|it |tag|g g|lun|ain|and|nda|pas|kab|aho|lig|nar|ula| ed|edu| ib|git|ma |mas|agb|ami|agg|gi |sar|i m|siy|g w|api|pul|iya|amb|nil|agl|sta|uli|ino|abu|aun|ayu| al|iyo",
                        hun: " sz| a |en | va|Ã©s | Ã©s|min|ek | mi| jo|jog|ind|an |nek|sze|sÃ¡g| az|gy |sza|nde|ala|az |den|a v|val|ele| el|oga|mÃ©l|egy| eg|n a|ga |zab| me|zem|emÃ©|aba|int|van|bad|tel|tet| te|ak |tÃ¡s|Ã©ny|t a| ne|gye|Ã©ly|tt |n s|ben|sÃ©g|zet|lam|meg|nak|ni | se|ete|sen|agy|let|lyn|s a|yne|ra |z e|et | al|mel|kin|k j|etÃ©|ok |tek| ki|vag|re |n m|oz |hoz|ez |s s|ett|gok|ogy| kÃ¶|mbe|es |em |nem|ely| le|ell|emb|hog|k a|atÃ¡|kÃ¶z|nt | ho|yen|hez|el |z a|len|dsÃ¡|Ã¡sÃ¡|tÃ©s|ads|k m| Ã¡l| em|a s|nte|a m|szt|a t|Ã¡ll|Ã¡s |y a|ogo|sem|a h|enk|nye|ese|nki|Ã¡go|t s|lap|ame|ber|lÃ³ |k Ã©|nyi|ban|mÃ©n|s e|i m|t m| vÃ©|lla|ly |Ã©be|lat|Ã¡g |ami|on |mze|n v|emz|fel|a n|lÅ‘ |a a|eki|eri|yes| cs|lle|tat|elÅ‘|nd |i Ã©|Ã©g |Ã©sÃ©|lis|yil|vet|Ã¡t |kÃ¼l|Ã©rt| ke|Ã©te|rÃ©s|l a|het|szo|art|alÃ¡| ny|tar|koz| am|a j|Ã©sz|enl|elÃ©|Ã³l |s k|tÃ¡r|s Ã©|Ã©le|s t|lem|sÃ­t|ges|ott| fe|n k|tko|zÃ¡s|t Ã©|kel|ja | ha|alÃ³|zÃ©s|nlÅ‘|Ã©se|ot |ri |lek|mÃ¡s|tÅ‘ |vel|i j|se |ehe|tes|eve|ssÃ¡|tot|t k|olg|eze|i v|Ã¡za|leh|n e|Ã¼l |tte|os |ti |atk|zto|e a|tos|Ã¡ny|Ã¡na|zte|fej|del|Ã¡rs|k k|kor|Ã©ge|szÃ¡|t n| bi|zat|vÃ©d|nev|elm|Ã©de|zer|tÃ©b|biz|rra|ife|izt|ere|at |ll |k e|ny |sel| nÃ©|Ã¡ba|lt |ai |sÃ¼l|hÃ¡z|kif|t e| ar|leg|d a|is |i e|arr|t t|Ã¡so|it |etÅ‘|al | mÃ¡|t v| bÃ¡|bÃ¡r|a Ã©|esÃ¼|lye|m l| es|nyo",
                        azj: " vÉ™|vÉ™ |É™r |lar| hÉ™|in |ir | ol| hÃ¼| bi|hÃ¼q|Ã¼qu|quq|na |lÉ™r|dÉ™ |hÉ™r| ÅŸÉ™|bir|an |lik| tÉ™|r b|mal|lma|asÄ±|ini|r h|É™xs|ÅŸÉ™x|É™n |arÄ±|qla|a m|dir|aq |uqu|ali| ma|una|ilÉ™|Ä±n |yÉ™t| ya|ara|ikd|É™ri|ar |É™si|É™ti|r ÅŸ|rin|yyÉ™|n h| az|dÉ™n|nin|É™rÉ™|tin|iyy|mÉ™k|zad| mÃ¼|sin| mÉ™|ni |nda|É™t |ndÉ™|aza|rÄ±n|Ã¼n |Ä±nÄ±|É™ a|i v|nÄ±n|olu|qun| qa| et|ilm|lÄ±q|É™ y|É™k |lmÉ™|lÉ™ |kdi|ind|Ä±na|olm|lun|mas|xs |sÄ±n|É™ b| in|n m|q v|nÉ™ |É™mi|n t|ya |da | bÉ™|tmÉ™|dlÄ±|adl|bÉ™r| on|É™ya|É™ h|sÄ± |nun|maq|dan|inÉ™|etm|un |É™ v|rlÉ™|n b|si |raq| va|É™ m|n a|Ä±nd|rÄ± |anÄ±| Ã¶z|É™ra|nma|n i|ama|a b|irl|ala|li |ins|bil|ik | al| di|Ä±ÄŸÄ±|É™ d|lÉ™t|il |É™lÉ™|É™ i|Ä±q |nÄ± |nla|dil|mÃ¼d|n v|É™ e|unm|alÄ±| sÉ™|xsi|É™ o|uq |uql|nsa|É™tl| dÉ™|ili|Ã¼da|asi| he|ola|san|É™ni|mÉ™s| da|lan| bu|tÉ™r|hÉ™m|dÄ±r|kil|iÅŸ |u v| ki|min|eyn|mi |yin| ha|sos|heÃ§|bu |eÃ§ | ed|kim|lÄ±ÄŸ|alq|xal| as|sia|osi|r v|q h|rÉ™ |yan|i s| É™s|daf|afi| iÅŸ|Ä± h|fiÉ™| ta|É™ q|Ä±ql|a q|yar|sas|lÄ± |ill|mil|É™sa|liy|tlÉ™|siy|a h|mÉ™z|tÃ¼n|É™ t| is|ist|iyi| so|n É™|al |ifa|ina|lÄ±d|Ä± o|Ä±dÄ±|É™mÉ™|Ä±r |É™dÉ™|ial| mi|É™yi|miy|Ã§Ã¼n|n e|iya|edi| cÉ™| bÃ¼|bÃ¼t|Ã¼tÃ¼|xil|Ã¼Ã§Ã¼|mÉ™n|adÉ™|t v|a v|axi|dax|r a|onu| Ã¼Ã§|seÃ§| nÉ™| se|man|ril|sil|É™z |iÉ™ |Ã¶z |Ä±lÄ±|aya|qan|i t|ÅŸÉ™r|tÉ™m|ulm|rÉ™f|mÉ™h| xa|ÄŸÄ±n| dÃ¶| ni|sti|ild|amÉ™|qu |nam|n o|n d|var|ad |zam|tam|tÉ™h",
                        ces: " pr| a |nÃ­ | ne|prÃ¡|rÃ¡v|ost| sv| po|na |ch |ho | na|nos|o n| ro|Ã¡nÃ­|ti |vo |neb|Ã¡vo|mÃ¡ |bo |ebo| mÃ¡|kaÅ¾| ka|ou |aÅ¾d| za| je|dÃ½ |svo|Å¾dÃ½| pÅ™|a s| st|sti|Ã¡ p| v |obo|vob| sp|bod| zÃ¡|Ã½ch|pro|rod|vÃ¡n|enÃ­|nÃ© |Ã½ m|Ã©ho| by| nÃ¡|spo|nÄ› |o p|mi |Ã­ a|ter|roz|ovÃ¡|to | ja| li|Ã¡ro|nÃ¡r|by |jak|a p|a z|ny | vÅ¡|kte|i a|lid|Ã­m |o v|Ã­ p|u p|mu |at | vy|odn| so| ma|a v| kt|Ã­ n|zÃ¡k|li |oli|vÃ­ |kla|tnÃ­|pod|stÃ¡|en |do |t s|mÃ­ |je |em |Ã¡va| do|byl| se|bÃ½t|Ã­ s|rov| k |Äin| ve|Ã½t |Ã­ b|it |dnÃ­|vÅ¡e|pol|o s| bÃ½|tvÃ­|nÃ½c|stn|nou|ejn|sou|ran|ci |vol|se |nes|a n|pÅ™Ã­|eho|nÃ½m|tÃ¡t|va |nÃ­m|mez|ajÃ­|i s|stv|kÃ© |Ã­ch|eÄn|Å¾en|e s|vÃ© |ova|svÃ©|Ã½m |kol|du |u s|jeh|kon|ave|ech|erÃ©|nu | ze|i v|o d|Ã­ v|hra|ids|m p|Ã©mu|ole|y s| i |maj|o z| to|aby|sta| ab|m a|pra| ta|chn| ni|Å¾e |ovn|ako|nÃ©h|len|dsk|rac|lad|chr| Å¾e|vat| os|sob|akÃ©|i p|smÃ­|esm|st |i n|m n|a m|lnÄ›|lnÃ­|pÅ™i|bez|dy |Ã¡ln|ens|zem|t v|Äen|leÄ|kdo|Ã½mi| ji|oci|i k| s |Ã­ m|jÃ­ | Äi|Ã¡v |ste|och| oc|vou|Ã¡kl| vz|rav|odu|nez|inn|skÃ½|nit|ivo|a j|u k|iÃ¡l| me|ezi|skÃ©|ven|stu|u a|tej|oln|slu|zen|Ã­ z|y b|oko|zac|nÃ­c|jin|ky |a o|Å™Ã­s|obe|u v|tak|vÄ›d|oje| vÃ½|ikd|h n| od|Äno|oso|ciÃ¡|h p| de|a t|Å¯m |soc|jÃ­c|odÅ¯|nÄ›n|adn|tup|dÅ¯ |dÄ›l|jno|kÃ©h|por|oÅ¾e|hov|aci|nem|Ã© v|rok|i j|u o|od |Ã­ho|vin|odi",
                        run: "ra |we |wa | mu|e a|se | n |a k|ira|ntu|tu | ku| um|ko |a i|mu |iri|mun|hir|ye |unt|ing|ash|ere|shi|a n|umu|zwa| bi|gu |ege|a a|za |teg|ama|e k|go |uba|aba|ngo|ora|o a|ish| ba| ar|ung|a m| we|e n|na |sho|ese|nga| ab|e m|mwe|ugu| kw|ndi| gu|ate|kwi|wes|riz|ger|u w| at|di |gih|iza|n u|ngi|ban|yo |ka |e b|a b| am| ca|ara|e i|obo|hob|ri |u b|can|nke|ro |bor| in|bah|ahi|ezw|a u|gir|ke |igi|iki|iwe|rez|ihu|hug|aku|ari|ang|a g|ank|ose|u n|o n|rwa|kan| ak|nta|and|ngu| vy|aka|n i|ran| nt| ub|kun|ata|i n|kur|ana|e u| ko|gin|nye|re | ka|any|ta |uko|amw|iye| zi|ga |ite| ib|aha| ng|era|o b|ako|o i| bu|o k|o u|o z| ig|o m|ho |mak|sha| as| iv|ivy|n a|i b|izw|o y| uk|ubu|aga|ba |kir|vyi|aho| is|nya|gan|uri| it| im|u m|kub|rik|hin|guk|ene|bat|nge|jwe|imi| y |vyo|imw|ani|kug|u a|ina|gek|ham|i i|e c|ze |ush|e y|uru|bur|amb|ibi|agi|uza|zi |eye|u g|gus|i a| nk|no |abi|ha |rah|ber|eme|ras|ura|kiz|ne |tun|ron| zu|ma |gen|wo |zub|w i|kor|zin|wub|ind| gi|y i|ugi|je |iro|mbe| mw|bak| ma|ryo|eka|mat| ic|onk|a z| bo|ika|eko|ihe|ukw|wir|bwa| ry| ha|bwo| ag|umw|yiw|tse| ya|he |eng| ki|nka|bir|ant|aro|gis|ury|twa| yo|bik|rek|ni | ah| bw|uro|mw |tan|i y|nde|ejw| no|zam|puz|ku |y a|a c|bih|ya |mur|utu|eny|uki|bos",
                        plt: "ny |na |ana| ny|y f|a n|sy |aha|ra |a a| fa|n n|y n|a m|an | fi|tra|any| ma|han|nan|ara|y a| am|ka |in |y m|ami|olo| ts|lon|min| mi| sy| na|a t| ol|fan| ha|a i|man|iza| iz|ina|ona|y h|aka|o a|ian|a h|reh|etr|a s|het|on |a f|ire|fah|tsy|mba| ar| hi|zan|ay |ndr|y o|ira|y t| an|ehe|o h|afa|y i|ren|ran| zo|ena|amb|dia|ala|amp|zo |ika| di|tan|y s|y z| az|ia |m p|rin|jo |n j| jo| dr|zy |ry |a d|ao |and|dre|haf|nen|mpi|rah| ka|eo |n d| ir|ho |am |rai|fa |elo|ene|oan|omb| ta| pi| ho|ava|azo|dra|itr|iny|ant|tsi|zon|asa|tsa| to|ari|ha |a k|van|n i|fia|ray| fo|mbe|ony|sa |isy|azy|o f|lal|ly |ova|lom| vo|nat|fir|sam|oto|zay|mis|ham|bel| ra|a r|ban|kan|iha|nin|a e|ary|ito| he| re| no|ita|voa|nam|fit|iar| ko|tok|isa|fot|no |otr|mah|aly|har|y v|y r| sa|o n|ain|kam|aza|n o|oka|ial|ila|ano|atr|oa | la|y l|eri|y d|ata|hev|sia|pia|its|reo| ao|pan|anj|aro|tov|nja|o s|fam|pir| as|ty |nto|oko|y k|sir|air|tin|hia|ais|mit|ba | it| eo|o t|mpa|kon|a z|a v|ity|ton|rak|era|ani|ive|mik|ati|tot|vy |hit|hoa|aho|ank|ame|ver|vah|tao|o m|ino|dy |dri|oni|ori| mo|hah|nao|koa|ato|end|n t| za|eha|nga|jak|bar|lah|mia|lna|aln|va | mb|lan| pa|aov|ama|eve|za |dro|ria|to |nar|izy|ifa|adi|via|aja| va|ind|n k|idi|fiv|rov|vel",
                        qug: "una|ta | ka|na |ka |ash|cha|a k|ari|ish|kun|kta|ana|pak|hka|shk|apa|mi |ach|hay|akt|shp|man|ak | ch| ha|rin|ata|tak|lla|ita|ami|ama|aku|har| pa|pas|ayÃ±|yÃ±i|ina| ma| ru|uku|sh |hpa|run|all|kuy|aka|an | tu|tuk|yta|chi|chu|a c|Ã±it|in |nak|a h|nka|ris|tap|kan| ki|ayt|pi | sh|pa |i k|a p|nap|kam|kaw|pay|nam|ayp|aws|iri|wsa|a s|ank|nta|uy |a t|hin|a m|ay | li|ant|lia|kay|nat|a r|shi|iak|lak|uya| wa|yuy|say|kis|y r|ypa|hun|a a| yu|n t|tam| ti|yay|n k| ya|a w|hpi|lli| al|api|yku|un |ipa|a i|iku|ayk|shu| sa|ush|pir|ich|kat|hu |huk| il|ill|kas|a y|rik|yac|a l| ku|kac|hik|tan|wan|ypi|ink|ika| ni|ila|ima|i c|yll|ayl| wi|mac|nis| ta|i y|kus|tin|n s|i p|yan|llu|la |iks|tik|kpi| pi|awa|may|lan|li | ri|kll|yas|kin|kak|aya|ksi|k h|aym|war|ura| ay|lat|ukt|i t|iya|ull|mas|sha|kir|uch|h k|nch|akp|uma|pip|han|kik|iki|riy|aki| ii|i s|n p|h m|kar|nal|y h|tac| su|nac|mak|n m|nki|k a|mam|iwa|k t|k k|i m|yma| Ã±a|wil|asi|nmi|kap|pal|sam|pam|k i|k l|i i|pan|sum|i w| hu|his| mu|iia|mun|k m|u t|pik|was|ik |ma |hat|k r|akl|huc| im|mal|uyk|imi|n y|anc|y k|a n|iÃ±i| iÃ±|wak|unk|yka| mi|iÃ±a|a u|has|ywa| ak|llp|ian|ha |tar|rmi|i a|arm|las|ati|pur|sak|ayw|hap|yar|uti|si |iyt|uri|kim| ar|san|h p|akk|iy |wat|wpa|y i|u k",
                        mad: "an |eng|ban|ng | sa| ka|dha| ba|ren|ak |ang| se| ha|hak| dh|na | pa|se |adh|a s|aba|n s|ara|ngg|are|ha |aga|sa | or|ore|asa|sar|ana| ma|aan|a k|ale|gi | ag|gad|a b|n o|n k|eba|ala|ra |gan| ke|dhu|ota|aja|bas|n b|ka |man|tab|dhi|beb|sab|ama|ako|abb|at |ggu|nga| ta|pan|wi |huw|uwi|eka|ata|a d|san| ot|agi|lak|hal|ba |bba|i h|ong|em |kab|g a|lem|a o| pe| na|ane|par|ngs|nge|gar|a a|tan|gsa|a p|ran|i s|k h|n p|uy |guy|ken|n a|al |ada| ga|apa|pon|e d| e |nek| an|g s|ta |kaa|on |kal|a m|ssa|ona|abe|kat| la|a e|e e|sal|ate|jan|ri |nan|lab|asi|sad|i p|e a|lan|aka|a h|ari| bi|ena|si |daj| ng|ton|e k|har|oss|gen|i k|g k|car|ase|ano|era|kon| be|nya|n d|nag|bad|ar |epo| da|mas| kl| al|n t|mat|nos|n n|ela|g e|a n|k k|uwa|adi|pad|ggi|uan|i d|ne | so|hi |sae|oan|wan|as |le |gap|ter|yat|om |kla|k a|e b|ina|ah |k s|koa|i a|ega|neg|n h|m p|aha| as| ja|abi|ma |kas|bi | mo|aon| di|one| ep|per|aya|e s|nto|te |bat|epa|nda|n e| ca|int|pam|di |ann| ra|aen|k d|amp|a t|nta|and|e p|rga|pen|yar|mpo|ste|dra|ok |oko|ila|g p|k b|i b|set|to |isa|nao|nna|n m|ett| a |bis|hid|bin|i m|nas| ho|kar|t s| po|dil| to|aju|ika|kom|arg|ant|raj|a l|das|tto|ost|mos|lae|ga |rek|idh|tad|hig|en |rny|arn|ndh|eta|adu| dr|jat|jua|gam",
                        nya: "ndi|ali|a k|a m| ku| nd|wa |na |nth| mu| al|yen|thu|se |ra |nse|hu |di |a n|la | pa|mun| wa|nga|unt| la|a u|u a|e a|ons|za | ma| lo|iye|ace|ce |a l|idw|ang| ka|kha|liy|ens|li |ala|ira|ene|pa |i n|we |e m|ana|dwa|era|hal|ulu|lo |ko |dzi| ci|yo |o w|iko|ga |a p|chi| mo|lu |o l|o m|oyo|ufu| um|moy|zik| an|ner|and|umo|ena| uf|dan|iri|ful|a a|ka |to |hit|nch| nc|a c|ito|fun|dwe| da|kuk|wac| dz|e l|a z|ape|kap|u w|e k|ere|ti |lir| za|pen|tha|aye|kut|mu |ro |ofu|ing|lid| zo|amu|o c|i m|mal|kwa|mwa|o a|eza|i p|o n|so |i d|lin|nso| mw|iro|zo | a |ati| li|i l|a d|ri |edw|kul|una|uti|lan|a b|iki|i c|alo|i k| ca|lam|o k|dza|ung|o z|mul|ulo|uni|gan|ant|nzi| na|nkh|e n|san|oli|wir|tsa|u k|ome|ca |gwi|unz|lon|dip|ipo|yan|gwe|pon|akh|uli|aku|mer|ngw|cit| po| ko|kir|mba|ukh|tsi|bun|iya|ope|kup|bvo|han| bu|pan|ame|vom|ama| ya|siy| am|rez|u n|zid|men|osa|ao |pez|i a| kw| on|u o|lac|ezo|aka|nda|hun|u d|ank|diz|ina|its|adz| kh|ne |nik|e p|o o|ku |phu|eka| un|eze|mol|ma | ad|pat|oma|ets|wez|kwe|kho|ya |izo|sa |o p|kus|oci|khu|okh|ans|awi|izi|zi |ndu|iza|no |say| si|i u|aik|jir|ats|ogw|du |mak|ukw|nji|mai|ja |sam|ika|aph|sid|isa|amb|ula|osi|haw|u m| zi|oye|lok|win|lal|ani| ba|si | yo|e o|opa|ha |map|emb",
                        zyb: "bou|aeu|enz|nz |eng|iz |ih |uz |uq |oux|ing| bo| di| ca|z g|dih|ux |ngh|cae|gen|euq|z c|you|ng |ung|ngz|ij | gi| mi|miz|aen| ge|z d| ci|gya| yi| de|ouj|uj | gu|cin|ngj|ien|mbo|dae| mb|zli| se|gij|j g|ang|ouz|z y|j d|nae| cu| ba| da|h g|oz |yin|de |z b|nzl|li |nj |euz|x m| cw|iq | yo|gz |q g|yau|inh|vun|x b|h c| ga|ix |cwy|wyo| ro|rox|oxn|vei|nda|i c| nd|z m|gh |j b|wz | si| gy|hoz|unz|xna|cun|gue| li|ei |z h|yen|bau|can|inz|q c|dan| hi|gj |uh |yie| vu|faz|hin| bi|uek|goz|zci|nh |aej|ya |ej | fa|gun|ciz|au | go| ae|h m|ngq|den|gva|ouq|nq |z s|q d|ekg|q s| do|h d|kgy|eix| wn|ci |az |hu |nhy| ha|j c|u d|j n|z l|auj|gai|gjs|lij|eve|h s|sen|sin|sev|ou |sou|aiq|q y|h y|jso|bin|nei| la|en |ouh|din|uen|enj|enh|i b|z r|awz|q n|vih|j y|anj|bwn|sei|z n| ne|ozc|hye|j s|i d|awj|liz|g g|bae|wng|g b|eiq|bie|enq|zda| ya|n d|h f|x d|gak|hix|z v|h b|oen|anh|u c|in |i g|ghc|zsi|hci|siz|anz|ghg|ez |dun|cou| du|ngg|ngd|j m|cuz| ho|law|eiz|g c| dw|aw |g d|izy|hgy|ak |nde|min|dei|gda|ujc|wn |env|auy|iuz|ai |wnj|a d|hen|ozg|nzg|ek |g y|gzd|gzs|yaw|e c|yuz|daw|giz|jhu|ujh| co|nvi|guh|coz| ve| he|i m|sae|aih|x l|iet|iuj|dwg|iqg|qgy|gih|yai| na| fu|uyu|zbi|zdi|q b|cie|inj|zge|wnh|jsi|uzl| bu| le|eij|izc|aq ",
                        kin: "ra | ku| mu|se |a k|ntu|nga|tu |umu|ye |li | um|mun|unt|a n|ira| n |ere|wa |we | gu|mu |ko |a b|e n|o k|e a|a u|a a|u b|e k|ose|uli|aba|ro | ab|gom|e b|ba |ugu| ag|omb|ang| ib|eng|mba|o a|gu | ub|ama| by| bu|za |ihu|ga |e u|o b| ba|kwi|hug|ash|ren|yo |ndi|e i| ka| ak| cy|iye| bi|ora|re |gih|igi|ban|ubu| nt| kw|di |gan|a g|a m|aka|nta|aga| am|a i|ku |iro|i m|ta |ka |ago|byo|ali|and|ibi|na |uba|ili| bw|sha|cya|u m|yan|o n| ig|ese|no |obo|ana|ish|kan|sho| we|era|ya |aci|wes|ura|i a|uko|e m|n a|o i|kub|uru|hob|ber|ran|bor| im|ure|u w|wo |cir|gac|ani|bur|u a|o m|ush| no|e y| y |rwa|eke|nge|ara|wiy|uga|zo |ne |ho |bwa|yos|anz|aha|ind|mwe|teg|ege|are|ze |n i|rag|ane|u n|ge |mo |u k|bul| uk|bwo|bye|iza|age|ngo|u g|gir|ger|zir|kug|ite|bah| al| ki|uha|go |mul|ugo|n u|tan|guh|y i| ry|gar|bih|iki|atu|ha |mbe|bat|o g|akw|iby|imi|kim|ate|abo|e c|aho|o u|eye|tur|kir| ni|je |bo |ata|u u| ng|shy|a s|gek| ru|iko| bo|bos|i i| gi|nir|i n|gus|eza|nzi|i b|kur| ya|o r|ung|rez|ugi|ngi|nya| se|mat|eko|o y| in|uki| as|any|bis|ako|gaz|imw|rer|bak|ige|mug|ing|byi|kor|eme|nu | at|bit| ik|hin|ire|kar|shi|yem|yam| yi|gen|tse|ets|ihe|hak|ubi|key|rek|icy| na|bag|yer| ic|eze|awe|but|irw| ur|fit|ruk|ubw|rya|uka|afi",
                        zul: "nge|oku|lo | ng|a n|ung|nga|le |lun| no|elo|wa |la |e n|ele|ntu|gel|tu |we |ngo| um|e u|thi|uth|ke |hi |lek|ni |ezi| ku|ma |nom|o n|pha|gok|nke|onk|a u|nel|ulu|oma|o e|o l|kwe|unt|ang|lul|kul| uk|a k|eni|uku|hla| ne| wo|mun| lo|kel|ama|ath|umu|ho |ela|lwa|won|zwe|ban|elw|ule|a i| un|ana|une|lok|ing|elu|wen|aka|tho|aba| kw|gan|ko |ala|enz|o y|khe|akh|thu|u u|na |enk|kho|a e|zin|gen|i n|kun|alu|mal|lel|e k|nku|e a|eko| na|kat|lan|he |hak| ez|o a|kwa|o o|ayo|okw|kut|kub|lwe| em|yo |nzi|ane|obu| ok|eth|het|ise|so |ile|nok| ba|ben|eki|nye|ike|i k|isi| is|aph|esi|nhl|mph| ab|fan|e i|isa| ye|nen|ini|ga |zi |fut| fu|uba|ukh|ka |ant|uhl|hol|ba |and|do |kuk|abe|za |nda| ya|e w|kil|the| im|eke|a a|olo|sa |olu|ith|kuh|o u|ye |nis| in|ekh|e e| ak|i w|any|khu|eng|eli|yok|ne |no |ume|ndl|iph|amb|emp| ko|i i| le|isw|zo |a o|emi|uny|mel|eka|mth|uph|ndo|vik| yo|hlo|alo|kuf|yen|enh|o w|nay|lin|hul|ezw|ind|eze|ebe|kan|kuz|phe|kug|nez|ake|nya|wez|wam|seb|ufa|bo |din|ahl|azw|fun|yez|und|a l|li |bus|ale|ula|kuq|ola|izi|ink|i e|da |nan|ase|phi|ano|nem|hel|a y|hut|kis|kup|swa|han|ili|mbi|kuv|o k|kek|omp|pho|kol|i u|oko|izw|lon|e l| el|uke|kus|kom|ulo|zis|hun|nje|lak|u n|huk|sek|ham| ol|ani|o i|ubu|mba| am",
                        swe: " oc|och|ch |er |ing|fÃ¶r|tt |ar |en |Ã¤tt|nde| fÃ¶|rÃ¤t|ill|et |and| rÃ¤| en| ti| de|til|het|ll |de |om |var|lig|gen| fr|ell|ska|nin|ng |ter| ha|as | in|ka |att|lle|der|sam| i |und|lla|ghe|fri|all|ens|ete|na |ler| at|Ã¶r |den| el|av | av| so|igh|r h|nva|ga |r r|env|la |tig|nsk|iga|har|t a|som|tti| ut|ion|t t|a s|nge|ns |a f|r s|mÃ¤n|a o| sk| si|rna|isk|an | st|Ã¤r |ra | vi| al|t f| sa|a r|ati| Ã¤r| me| be|n s| an|tio|nna|lan|ern|t e|med| va|ig |Ã¤ns| Ã¥t|sta|ta |nat| un|kli|ten| gr|vis|Ã¤ll| la|one|han|Ã¤nd|t s|stÃ¤|t i|ner|ans|gru| ge|ver| mÃ¥| li|lik|ihe|ers|rih|r a| re|mÃ¥ |sni|n f|t o| mÃ¤| na|r e|ri |ad |ent|kla|det| vÃ¤|run|rkl|da |h r|upp|dra|rin|igt|dig|n e|erk|kap|tta|ed |d f|ran|e s|tan|uta|nom|lar|gt |s f| pÃ¥| om|kte|lin|r u|vid|g o|Ã¤nn|erv|ika|ari|a i|lag|rvi|id |r o|s s|vil|r m|Ã¶rk|ot |ndl|str|els|ro |a m|mot| mo|i o|pÃ¥ |r d|on |del|isn|sky|e m|ras| hÃ¤|r f|i s|a n|nad|n o|gan|tni|era|Ã¤rd|a d|tÃ¤l|ber|nga|r i|enn|nd |n a| up|sin|dd |Ã¶rs|je |itt|kal|n m|amt|n i|kil|lse|ski|nas|end|s e| sÃ¥|inn|tat|per|t v|arj|e f|l a|rel|t b|int|tet|g a|Ã¶ra|l v|kyd|ydd|rje| fa|bet|se |t l|lit|sa |nÃ¤r|hÃ¤l|l s|ndr|nis|yck|h a|llm|lke|h f|arb|lmÃ¤|nda|bar|ckl|v s|rÃ¤n|gar|tra|re |ege|r g|ara|ess|d e|vÃ¤r|mt |ap ",
                        lin: "na | na| ya|ya |a m| mo|a b|to | ko| bo|li |o n| li|i n| pe|i y|a y|a n|ngo|ki | ba| ma|kok|pe |la |a l|zal|oki|ali|nso|oto|ala|ons|so |mot|a k|nyo|eng|kol|go |nge| ny|yon|o e|ang|eko|te |o y|oko|olo|ma |iko|a e|e m|e b|lik|ko |o a|ako|ong| ye|mak|ye |isa| ek|si |lo |aza|sal|ama| te|bat|o p|oyo|e n| az|a p|ani|sen|o m|ela|ta |amb|i k|ban|ni | es|yo |mi |mba|osa| oy|aka|lis|i p|eli|a t|mok|i m|ba |mbo| to| mi|isi|bok|lon|ato|ing|o b| nd|ota|bot| ez|ge |nga|eza|o t|nde|ka |bo |gel|kan|e k|lam|sa |ese|koz| po|den|ga |oba|omb|oli|yan|kop|bon|mos|e e|kob|oka|kos|bik|lin|po |e a| lo| bi|kot|â€™te|ngi|sam| â€™t|omi|e y|ti |i b| el|elo|som|lok|esa|gom|ate|kam|i t|ika|a s|ata|kat|ati|wa |ope|oza|iki|i e| ka|bom|tal|o l|bek|zwa|oke|pes| se|bos|o o|ola|bak|lak|mis|omo|oso|nza| at|nda|bal|ndi|mu |mob|osu|e t|asi|bis|ase|i l|ele|sus|usu|su |ozw|and|mol|tel|lib|mbi|ami| nz|ne |ene|kel|aye|emb|yeb|nis|gi |obo|le |kum|mal|wan|a â€™|pon| ep|baz|tan|sem|nya|e l| ta|gis|opo|ana|ina|tin|obe| ti|san| ak|mab|bol|oku|u y|mat|oti|bas|ote|mib|ebi|a o|da |bi | mb|lel|tey|ibe|eta|boy|umb|e p|eni|za |be |mbe|bwa|ike|se | et|ibo|eba|ale|yok|kom| en|i a|mik|ben|i o| so|gob|bu |son|sol|sik|ime|eso|abo| as|kon|eya|mel",
                        som: " ka|ay |ka |an |uu |oo |da |yo |aha| iy|ada|aan|iyo|a i| wa| in|sha| ah| u |a a| qo|ama| la|hay|ga |ma |aad| dh| xa|ah |qof|in | da|a d|aa |iya|a s|a w| si| oo|isa|yah|eey|xaq|ku | le|lee| ku|u l|la |taa| ma|q u|dha|y i|ta |aq |eya|sta|ast|a k|of |ha |u x|kas|wux| wu|doo|sa |ara|wax|uxu| am|xuu|inu|nuu|a x|iis|ala|a q|ro |maa|o a| qa|nay|o i| sh| aa|kal|loo| lo|le |a u| xo| xu|o x|f k| ba|ana|o d| uu|iga|a l|yad|dii|yaa|si |a m|gu |ale|u d|ash|ima|adk|do |aas| ca|o m|lag|san|dka|xor|adi|add| so|o k| is|lo | mi|aqa|na | fa|soo|baa| he|kar|mid|dad|rka|had|iin|a o|aro|ado|aar|u k|qaa| ha|ad |nta|o h|har|axa|quu| sa|n k| ay|mad|u s| ga|eed|aga|dda|hii|aal|haa|n l|daa|xuq|o q|o s|uqu|uuq|aya|i k|hel|id |n i| ee|nka| ho|ina|waa|dan|nim|elo|agu|ihi|naa|mar|ark|saa|riy|rri|qda|uqd| bu|ax |a h|o w|ya |ays|gga|ee |ank| no|n s|oon|u h|n a|ab |haq|iri|o l| gu|uur|lka|laa|u a|ida|int|lad|aam|ood|ofk|dhi|dah|orr|eli| xi|ysa|arc|rci|to |yih|ool|kii|h q|a f| ug|ayn|asa| ge|sho|n x|siy|ido|a g|gel|ami|hoo|i a|jee|n q|agg|al | di| ta|e u|o u| ji|goo|a c|sag|alk|aba|sig| mu|caa|aqo|u q|ooc|oob|bar|ii |ra |a b|ago|xir|aaq| ci|dal|oba|mo |iir|hor|fal|qan| du|dar|ari|uma|d k|ban|y d|qar|ugu| ya|xay|a j",
                        hms: "ang|gd |ngd|ib | na|nan|ex |id | ji|ad |eb |nl |b n|d n| li|ud |jid| le|leb| ga|ot |anl|aot|d g|l l|b l| me|ob |x n|gs |ngs|mex|nd |d d| ne|jan|ul | ni|nja| nj| gu| zh|lib|l n|ong| gh|gao|b j|b g|nb |l g|end|gan| ad| je|jex|ngb|gb |han|el | sh| da|ub |d j|d l|t n| nh|nha|b m|is |d z|x g| ya|oul|l j| wu|she|il |nex| ch|b y|d s|gue|gho|uel|wud|d y| gi|d b|hob|nis|s g| zi| yo|lie|es |nx |it |aob|gia|ies| de|eib|you| ba| hu|ian|zib|d m|s j|oud|b d|chu|ol |ut | do|t j|nen|hud|at |s n|hen|iad|ab |enl| go|dao| mi|t g|zha|b z|enb|x j| ze|eit|hei|d c|nt |b s| se|al | xi|inl|hao| re| fa|d h|gua|yad|ren| ho|anb|gx |ngx|ix |nib|x z|and|b h|b w|fal| xa|d x|t l|x m|don|gou|bao|ant|s z|had|d p|yan|anx|l d|zhe|hib| pu|ox | du|hui|sen|uib|uan|lil|dan|s m| di| we|gha|xin|b x|od |zhi|pud| ju| ng|oub|xan| ge|t z|hub|t h|hol|t m|jil|hea|x l| ma|eud|jul|enx|l z|l s|b a| lo| he|nga|d r|zen| yi|did|hon|zho|gt |heb|ngt|os |d a|s l|aos| si|dei|dud|b b|geu|wei|d w|x c|x b|d k|dou|l h|lou| bi|x a|x d|b c| sa|s a| bo|eut|blo| bl|nia|lol|t w|bad|aod| qi|ax |deb| ja|eab| nd|x s|can|pao| pa|gl |ngl|che|sat|s y|l m|t s|b f|heu|s w| to|lia| ca|aox|unb|ghu|ux | cu|d f|inb|iel| pi|jib|t p|x x|zei|eul|l t|l y|min|dad",
                        hnj: "it | zh| ni|ab |at | sh|ang|nit|os | do|uat|ox |ax |nx |ol |ob | nd|t d|x n|nf |zhi|as | ta|tab|ef |if |d n|ad | mu| cu|uax|cua|mua|b n|uf |ib |s d|dos|id |enx|nb |hit| lo|f n|t l|ngd|gd |us |inf|ux |ed | go|she|b d|b z|t n| ho|x z| yi|aob|l n|ong|t z| zi|ix |nda|d z|ut |yao|uab|enb| de|dol|f g| dr|zhe| yo| le|euf|x d|inx|nen|das| ne|dro|gb |ngb|d s| ge|hox|f z|uef|s n|len|b g| ua|ud |nd |gox| na|il | du|x j|oux|f y|f h|ndo|x c|han|of |zha|uad|s z| da| ny| ja| gu|heu| ji|ik | bu|shi|lob|od | ya|gf |t g|hai|ged|ngf|b h|you| hu|ex |bua|out|nil|hen|rou|yin|zhu|ous|nya|enf|f d|is | re|b c|lol|nad|dou|af | xa| id|t s| ha|uk |jai|xan|sha|b y|hua|aib|s s|d d| la| qi|ren|x l|hue|l m|x g|ot | xi| ba| zo| kh| dl|jua| ju|aod|zif|ait|bao| di| ga|x y| nz|b s|x s|xin| li|aof|b b|ngx|gx |eb |b l|x t|x m|hed| be|dax|b t|s t|hef|las|d j|gua| pi|t y|f b|d l|l d|nzh| ib|hif|t h|dus|t r|hou|f l|hun|und|s l|el |aik|d y|aos|f t| mo| bi|hab|ngt|gai| za|uas|x h|gt | zu|ros|aid|zos| gh|end|pin|k n|k z| ao|iao|s b|dex|x b|due|ak |d g| fu|s x|deu|s y|mol|x i|f s|hik| hl| bo|l b|eut|lb |uaf|zho|d b| lb|s m|lan|al |b k|t b| ch|d p|x x|f x|ub |t c|d m| ro| nt|d h|et |uak|aox|gon|tua|yua|t t|zis|deb|d t| we|shu",
                        ilo: "ti |iti|an |nga|ga | ng| pa| it|en | ka| ke| ma|ana| a | ti|pan|ken|agi|ang|a n|a k|aya|gan|n a|int|lin|ali|n t|a m|dag|git|a a|i p|teg|a p| na|nte|man|awa|kal|da |ng |ega|ada|way|nag|n i| da|na |i k|sa |n k|ysa|n n|no |a i|al |add|aba| me|i a|eys|nna|dda|ngg|mey| sa|pag|ann|ya |gal| ba|mai| tu|gga|kad|i s|yan|ung|nak|tun|wen|aan|nan|aka| ad|enn| ag|asa| we|yaw|i n|wan|nno|ata| ta|l m|i t|ami|a t| si|ong|apa|kas|li |i m|ina| an|aki|ay |n d|ala|gpa|a s|g k|ara|et |n p|at |ili|eng|mak|ika|ama|dad|nai|g i|ipa|in | aw|toy|oy |ao |yon|ag |on |aen|ta |ani|ily|bab|tao|ket|lya|sin|aik| ki|bal|oma|agp|ngi|a d|y n|iwa|o k|kin|naa|uma|daa|o t|gil|bae|i i|g a|mil| am| um|aga|kab|pad|ram|ags|syo|ar |ida|yto|i b|gim|sab|ino|n w| wa| de|a b|nia|dey|n m|o n|min|nom|asi|tan|aar|eg |agt|san|pap|eyt|iam|i e|saa|sal|pam|bag|nat|ak |sap|ed |gsa|lak|t n|ari|i u| gi|o p|nay|kan|t k|sia|aw |g n|day|i l|kit|uka|lan|i d|aib|pak|imo|y a|ias|mon|ma | li|den|i g|to |dum|sta|apu|o i|ubo|ged|lub|agb|pul|bia|i w|ita|asy|mid|umi|abi|akd|kar|kap|kai| ar|gin|kni| id|ban|bas|ad |bon|agk|nib|o m|ibi|ing|ran|kda|din|abs|iba|akn|nnu|t i|isu|o a|aip|as |inn|sar| la|maa|nto|amm|idi|g t|ulo|lal|bsa|waw|kip|w k|ura|d n|y i",
                        uig: "ish| he|ini|ing|nin|gha|ng |ili| we|we |sh |in | bo|quq|oqu|ni |hoq| ho|ush|shi|lik|qil|bol|shq|en |lis|qa |hqa|n b|hem| qi|ki |dem|iy | ad|ade|igh|e a|em |han|liq|et |ge |uq |nda|din| te| bi|idi|let|qan|nli|ige|ash|tin|ha |kin|iki|her|de | er| ba|and|iti|olu|an | dÃ¶|dÃ¶l|aq |luq| ya|me |lus|Ã¶le|mme|emm| qa|daq|rki|lgh|erq|erk|shk|esh|rqa|iq |uqi|ile|rim|i w|er |ik |yak|aki|ara|a h| be|men| ar|du |shu|uql|hri|hi |qlu|q h|inl|lar|da |i b|ime| as|ler|etl|nis| Ã¶z|ehr|lin|e q|ar |ila| mu|len| me|qi |asi|beh|a b|ayd|q a|bir|bil| sh|che|rli|ke |bar|hke|yet|Ã©li|shl|tni|u h|ek |may|e b| kÃ©|h h| ig|ydu|isi|ali|hli|k h| qo|iri|emd|ari|e h|ida|e t|tle|rni| al|siy|lid|olm|iye|anl| tu|iqi|lma|ip |mde|e e|tur|a i|uru|i k|raw|hu |mus|kil| is|i a|ir |Ã©ti|r b|Ã¶zi|ris|asa|i h|sas| je|he | ch|qig|bas|n q|alg|ett|les| xi|tid| Ã©l|tes|ti |awa|ima|nun|a a| xe| bu|hil|n h| xa|adi|dig|anu|uni|mni| sa|arl|rek|Ã©re| hÃ¶|kÃ©r| ji|min|i q|tis|rqi| iy|elq|xel|p q| qe|y i|i s|lig| ma|iya|i y|siz|ani| ki|qti| de|q w|emn|met|jin|niy|i i|tim|irl| ti|rin|Ã©ri|i d|ati|si |tew|i t|tli|eli|e m|rus|oli|ami|gen|ide|ina|chi|dil|nay|ken|ern|n w| to|ayi| ij|elg|she|tti|arq|hek|e i|n a|zin|r a|ijt|g b|atn|qar|his|uch|lim|hki|dik",
                        hat: "ou |an | li|on |wa |yon| po|li |pou|te | yo|oun| mo|un |mou|ak | na|en |n p|nan|tou|syo| dw| to|yo | fÃ¨|dwa| ak| ki|ki | pa| sa|out| la| ko| ge|ut |n s|gen| de|se |asy|Ã¨t |i p|n d| a | so|n l|a a|fÃ¨ |n k| se|pa |e d|u l| re|ite|sa | ch|kon|n n|e l|t p|ni |cha|a p|nn |ans|pi |t m| ka| an|nm |fÃ¨t|i s|son|man| me|n m|n a|e p|swa|sou|e k|hak|Ã²t |n y|men|i l|epi| pe|ote|san| ep|i k| si|yen|eyi|a l| ap|i a|yi |pey|je |n t|e a|k m|e s| ni|lib|e n|i t|lit|ran|lÃ¨ |enn|al |a s| pr|a f|ns | lÃ²|ap |lÃ²t|enm|k l|n e|t l|kla|anm|e y|a k| ma|e t|ay |i m|ali| lÃ¨|Ã¨ a|ye |a y|ant| os| ba|i g| tÃ¨|aso|u t|a n| pw|ras| pÃ¨|n f|nas|ka |n g|osw| ta|dek|i d|pwo|e m| di| vi|la |i n|u s|sos|bli| te|o t| tr|lwa|Ã¨te|a t|le |u y|i f|tan|a c|lar|a m|ete|ara|t k| pi|ibÃ¨|bÃ¨t|re |osy|de |ati|ke |res|tis|i y|tÃ¨ |nen| fa|ekl|ze |nal|ons|ksy|ini|che| le|e r|a d| en|aye|he |o p|alw| kÃ²|lal| no|esp|a g|ava|kou|las|way|u f|isy| za| ok|oke|kal|ken|sye|ta |onn|k k|nje|pra|van|esi|pÃ¨s|kot|ret|sya|n v|lek|jan|ik |a b|eks|wot|Ã¨ n|di |Ã²l |tra|u k|i r|nou| as|k a|u d|ist|Ã¨so|ib | ne|iti|ti |is |y a|des|Ã¨ l|a r|ont| ke|nsa|pat|rit|sit|pÃ²t|ona|ab |Ã¨ s| sw|ond|ide| ja|rav|t a|ri |bon|viv| sÃ¨|pre|vay|k p|l l|kÃ²m|i o| ra|era|fan|dev",
                        aka: "sÉ› |a a| sÉ›|ne |ra |a n| wÉ”| a |ara|an |eÉ› |no | ne| bi| no| as|iar|bia|yÉ› |mu |aa | an|É› s|e a|ma | ho|bi |man|deÉ›| mu|ho |É› a|na |a É›| ob|obi|e n|a b|n a|so |o n|pa |ama|É› o|o a|ipa|nip|É› n|naa| na|a w|ana| so| ad| nn|É› É”|É›de|asÉ›|kwa| on|oni|wan| am|a É”|sÉ›d|wÉ” | ah|É›yÉ›| ny|oÉ” | n |mma|i a| mm|nni| kw|ie |wÉ”n|É› w|de | É›y| ba|ase|É” n|o b|i m|É” a|uo |n n|a m|o s|iri| yi|ni |e s|nyi|di |u n|a o|aho| de|tum| É›n|É”n |nya|i n|É”ma|e m|adw| yÉ›|umi|die|mi |É› É›|o k| ab|É›m |a s| ma|nam| É”m| É›s|yin| at| bÉ”|o d|ina|pÉ› |sÉ›m|ua |n s|bÉ” |adi|ya |e h|aso|mar|ani|kuo|rÉ› |fa |a k|É”de|a h|ba |n b|re |uma|wum|om |É” h|m n|yi |u a| sa|se |dwu|É” b| nt|m a|erÉ›| kÉ”|a y|orÉ”| nk| bÉ›| É”d|ten|rÉ” |hyÉ›|saa|ka |É› b|e b|i s|ade|am |nka|kor|i É›|ene|ena| ns|ban|É›ns| ku|É›sÉ›|ane|nsÉ›|fof|É›É› | fi|gye|É”tu| di|ano|i k|o m| É”t| ko|yÉ›É›|bir| ak|im |kye| pÉ›|a d|yie|ko |nti|i b|ete|ofo|amm|ye |ri |foÉ”|kÉ” |bom|abo|É” s|É”ne| É›b|soÉ”|for|isÉ›|m k|asa|nod|É› m|fir|ti | da|e y|sua| be|nii|seÉ›|wa |ber| aw|dwe|n f| fo|o É›|i h|u b|É” m| mf|hÉ” |kab|wÉ› |to |rib|hwÉ›|ibi| dw|dis|nso|ans|tir|u É›| ti| hÉ”|sa |e o| tu|odi|É› y|ia |ofa| É”n|o w|É›bÉ›|aba| ka|ii |wen|É›si|m m|sia|ada|yer|ian|da |set| gy|dua|i d|som|mfa|É” w| af|i y|any|ora|rim|wÉ”d|dwa|nsi",
                        hil: "nga|ang| ka|ga |ng | sa|an |sa | ng| pa| ma|ag |on |san|pag| an|ung|kag|a p|n s|a k|n n|a m|ata|kat| ta|gan|g p|ay |tar|g k|ags|run|ala|aru|gsa|tag|a s|g m| mg|mga|n k|a t|od |kon|g s|a n|ing|a i|man|g t|agp|tan| si|n a|y k|mag|gpa|may|hil|pan|ya |ahi|la |g a|sin|gin|ina|aya|ana|ili| pu|han|g i|yon|nan| in|way|uko|gka| gi|aha| uk|ilw|lwa|asa|apa|kas|syo|at |ban|lin|iya|kah|n p| na|o n|lan|a a|in |ngk|g n|ini|aba|pat|pun|a g|ali|o s| iy|yan|agt|tao|ngs|gba|kab|wal|ngo|al |nag|agk|o m|ni |i s|aga|ano| wa|isa|abu|kal|a h|dap|ong|a d|mat| tu|gso|no |aho|aki|sod|agb| da|asy|ila|d k|pas| hi|agh|d s|n m|na |lal|yo |di |til| la|o k|s n|non|gay|sal|a b|god|ao |ati|aan|uha| is|ka |aka|asu|ngb|o a|ama|ato|atu|uga|paa|but|una|n u|bah|uan|iba| di| ba|pah|bat| du|ulo|os |y s|nah| ko|aag|agi|sil|gi |i m|hay|yag|gon|y n|sta|n d|ot |oha|tun|ida| pr| su|a l|uta|m s| al|do |uli|sug|n t|as |lon|sul|og |pam|pro|him|gua|alo|lig| bi|bis|asi|ula|ton|ksy|gtu|a e|k s| ib|n b|maa|ugu|ko |lib|ron|i a|hi |hin|tek|lab|abi|ika|mak|bot|aoh|ok | hu|ghi|ind|ote|tok|i n|t n|g e|eks|dal|uma|ubo|tum|hat|to |ado|kin| ed|rot|ho |ndi|inu|ibu|y a|nta|ad |gko|lah|duk|abo|iko|nda|aro|gal|mo |g o| bu|int| o |n o|aay|da |gsu",
                        sna: "wa |a k|ana|ro |na | ku| mu|nhu|dze|hu |a m| zv|mun|oku|chi|a n|aka|dzi|ka |zer|ero| ch|che|se |unh|odz|rwa|ra |kod|zvi| ne| pa|kan| we| dz| no|ika|va |iri| an|kut|nyi|o y|yik|van|nek|ese|eko|zva|idz|e a| ka|ane|ano|ngu|eku|cha|ung| yo|ri |ake|ke |ach|udz|iro|a z|u w| va|ira|wes|ang|ech|nge|i p|eng|yok|nok|edz|o i|irw|ani|ino|uva|ich|nga|ti |zir|anh|rir|ko |dza|o n|wan|wo |tan|sun|ipi|dzw|eny|asi|hen|zve|kur|vak|a p|sha|unu|zwa|ita|kwa|e k|rud|nun|uru|guk|a c|a d| ya|a y|bat|pas|ezv|ta |e n|uti| kw|o k|o c|o m|ara| ma|si |ga |uko|ata|ose|ema|dzo|uch|hip|kuv|no |rus|hec|omu|i z|wak|o r|kus|kwe|ere|re | rw| po|o a|mwe|yak|mo |usu|isi|za |sa |e z|uta|gar| in|hin|nem|pac|kuc|we |ete| ye|twa|pos|o d|a i|hur|get|ari|ong|pan|erw|uka|rwo|vo | ak|tem|zo |emu|emo|oru| ha|uit|wen|uye|kui| uy|vin|hak|kub|i m|a a|kud| se| ko|yo |and|da |nor|sin|uba|a s|a u| ic|zvo|mut|mat|nez|e m|a w|adz|ura|eva|ava|pi |a r|era|ute|oko|vis| iy|ha |u a|han|cho|aru|asa|fan|aan|pir|ina|guv|ush|ton| hu|uny|enz|ran|yor|ted|ait|hek| ny|uri|hok|nen|osh| ac|ngi|muk|ngo|o z|azv|kun|nid|uma|i h|vem|a h|mir|usa|o p|i n|a v|i k|amb|zan|nza|kuz|zi |kak|ing|u v|ngw|mum|mba|nir|sar|ewo|e p|uwa|vic|i i|gwa|aga|ama|go |yew|pam",
                        xho: "lo |lun|oku|nge|elo|ntu|tu |e n|ele| ku|nye|ye |nga|ung|la | ng|lek|a n|o n|yo |o l|e u|nel|gel|a k|ko |ho |ulu|ke | ne| na|lul|we |le |wa |ngo| kw|ule|kub| no|a u|onk| um|nke|o e| lo|ela|kun|ama|any|unt|ang|eko|uba|elu|ezi|mnt| wo|a i|eyo|alu|lel|umn|lwa|kwe|olu|ba | uk|kuk|won|ukh|une|uku|gok|nok|enz| un|khu| ok|the|e k|zwe|kan|eki|aph|ane|uny|ile|o z|aku|ley|lok| ez|het|eth|ath|oka|pha|sel|ala|o y|kul|akh|kil|enk| in|esi|o k| yo|use|hul|u u|tho|obu|wen|ana|nku|khe|o o|e a|na |kho|ban|a e|ise|ent|gan|uth|ni |kel| zo|he |izw|o w|hi |elw|nam|ing|eli|fun|za |lwe|eng|ya |kwa|fan|isa|o a|ndl|ntl|ayo|eni|gen|hus|uhl|iph|tha|nzi|isw|sa |phi|aba|ben|und|ume|thi|ha |alo|ka |ink|hla|lal|wan|i k| lw|i n|bel| ba|o u|azi|e o|swa|ngu|bal|pho| ab|man|kut|emf|e i|mfa|a a|e e|een|int|uph|eka|ebe|seb|lan|nee|zi |o i|mal|sha|sek|dle|ziz|mth|nen|zel| se|okw|tya|ike|lin|tla|ene|sis|ima|ase|yal|ubu| ak|ant|sen|olo|wak| ko|a o|mfu|ezo|sid|nay|oko| ub|ulo|zo |do |isi|wez|iso|han|nte| ph|zim| ya|ga |li | le|iba|ham|ube|kup|aza|jik| ul| en|eem|phu| ol|and|imf| es|o s| im|kuf|u k|kwi|nak|ma |nan|ety|kuh|kus|yol| am|hel|idi| so|lis| nj|nje|jen|tsh|aka|zin|kuz|â€ji|no |ufu|ale|ong| el|bo |a y|e l|men|yen|lum",
                        min: "an |ak |ang| ma| da| ka| sa|ara| ha|yo |nyo|hak| ba|ran|dan|man|nan|ng | pa| di|kan|ura| na|ata|asa|ok |nda|ala| pu|pun|uak|ntu|n d|k m| ti|ah |o h|n s|k u|n k| ur| un|tua|n b|and|unt| ta|uny|n p|tio|iok|ama|pan|ek |ban|jo |n m|k h|k d|ado|nga|aan|g p|tan|aka|ind|at |dak|dap|o p|tau|pek|uan| at|amo|mar|ape|au |kat|mo |sas|ari|asi|di |o s|ia |ngg|bas|ika|sam|am |lia|o d|san|gan|sia|tar|n n| jo| su|anu|lam|gar|o t| in|par|sua|dek|sar|k s|ri |o m|ana|bat|asu|ko |ai | la|ant|dal|lak|aga|alu|iah|o u|n a|tu |k a|adi|rad|i m|mal|dok|usi|aku|i d|k k|al |aro|eka|neg|ega|ato|to | ne|mam|o b|eba|ian|beb|n u|um |si |aba|rat|uah|ro |mas|ila|a d|ali|uka|ard|kam|ti |atu|nus|dar|ami|n t|sa |in |amp|kal|car|lan|aha|kab|so |rde|un |i k|gsa|das|ngs|aca|yar|ka |ati|ar | an|uku|ras| ko|sya|mat|k n|aya|nta|lo |any|sur|kaa|dil|kar|o a|u d|k t|pam|dia|ra |iba|lai|i t|lah| bu|mpa|kum|abe|n h|ili|nny| as|u p|aki|amb|sac|as |k b|h d|uli|ajo|a n|raj|n i|dua|ndu|k p|i p|itu|lin|han|huk|o k|rik|a b| li|ik |ggu|jam|bai|a a|i a|nia| ad|i j| hu|gam|sal|aso|ngk|sad|apa|ann| mu|ony|dik|bad|ain|did|min|l d|ada|bul|rga|tin|ga |ani|alo| de|arg|ahn|sio|hny|n l|sti|awa|uju|per|bak| pe|tik|ans| pi|a s| um|bag|ndi|anj|mba",
                        afr: "ie |die|en | di| en|an |ing|ng |van| va|te |e v|reg| re|n d| ge|ens|et |e r|e e| te| be|le |ver|een| in|ke | ve| he|eg |het|lke|lik|n h|de |nie|aan|t d|id |men| vr|nde|eid|e o| aa|in |of |der|hei|om |g v| op| ni|e b| el|al |and|elk|er | me|ord|e w|g t| to| of|ers| we| sa| vo|ot |erk|n v|vry|ge |kee|asi|tot| wa|sie|ere| om|aar|sal|dig|wor|egt|gte|rdi|rd |at |nd |e s|ede|ige| de| â€™n|n a|eni| wo|e g| on|n s|â€™n |e t|erd|ns |oor|bes|ond|se |ska|aak|nig|lle|yhe|ryh|is |eli|esk|ien|sta|vol|ele|e m| vi|ik |r d|vir|edi|kap|g e|ir |es |sy |ang|din| st|ewe|gem|gel|g o| is|el |e i|op |ker|ak |uit|ike|nse|hie|ur |eur| al|e a|nas|e n|nge|ier|n o|wer|e d|ap | hu|ale|rin| hi|eme|deu|min|wat|n e|s o| as| so|as |e h|del|d v|ter|ten|gin|end|kin|it | da| sy|per|re |n w|ges|wet|ger|e k|oed|s v|nte|s e|ona|nal|waa|d t|ees|soo| ma|d s|ies|tel|ema|d e|red|ite| na|ske|ely|lyk|ren|nsk|d o|oon|t e|eke|esi|ese|eri|hul| gr|ig |sio|man|rde|ion|n b|n g|voo|hed|ind|tee| pe|rso|t v|s d|all|n t|rse|n i|eem|d w|ort|ndi|daa|maa|t g|erm|ont|ent|ans|ame|yke|ari|n m|lan|voe|n â€™|nli|rkl|r m|sia|ods|ard|iem|g s|wee|r e|l g|taa|sek|bar|gti|n n|lin|sen|t o|t a|raa|ene|opv|pvo|ete| ty|arb| sl|igh|dee|g a|str|nsl|sel|ern|ste",
                        lua: "ne |wa | ne|a m| ku|a k| mu|di | bu|a b| di|e b|tu |nga|bwa|ntu| bw|udi|a d|e m|i b| ba| ma|shi|adi|u b|a n|la |ons|mun|i n|ung|nsu|ga |yi |ya |na |unt| dy|idi|e k|buk|mu |ika|esh|su |u m|ku |nde|any| bi|lu |nyi|end|yon|dik|ba | ci| ka|ang|u n|u y| mw|ka |i m| yo|we |oke|tun|de |kes|hi |kok|mwa| kw|e n|ban|dya|sha|u d|ken|kwa|ji |ha |wen|dit| ud|a a| an|mwe|itu| pa|le | a | wa|nji|kan|kum|ibw|bwe|a c|ant|ena|yen|mba|did|e d|ala|u u|ish|mak|bul|i a|nda|enj|u a|ila|pa |ako|ans|uke|ana|nso|amb|hin|umw|kal|uko|i k|bad|aka|ela|ele|u w|u k|du |ja |bu | mi|ind|ndu|kwi| ns|mbu|atu|bud|dil|ile|sun|eng|ula|enz|nan|nsh|kad|alu| cy|bis|kud|lon|u c|gan|dib|da |dye|bid| by|ukw|i d|aa |ngu|a p|sam|isa| aa|ilu| na|aba|lel|ye |dim|cya|kub|so |ond|kus|mat|nge|e c| bo|aku|bak|mus|ta |umb|ulo|elu|man|iki|mon|ngi|abu|mud|kuk|omb| mo|und|diy|kwe|umu|mal| ke|ush|gil|uba|imu|dis|wil|wu |san|gad|uka|bon|ma |aci|mik|wik| me|pan|iku|nza|ben|ulu|ifu|iba|kak|ata|som|ong|e a|apa| tu|o b|umo|bya|utu|uja|yan| be|ke |akw|ale|ilo|uku|cil|tup|kul|cik|kup|upe|bel|amw|ona| um|iko|awu|and|za |ike|a u|ima|muk| ya|mum|me |map|ita|iye|ole|lum|wab|ane| lu|nu |kis|mbe|kab|ine|bum|lam|pet| ad|fun|ama| mb|isu|upa|ame|u p|ubi",
                        fin: "en |ise|ja |ist| ja|on |ta |sta|an |n j|ais|sen|n o|keu|ike|oik|lis| va|ell|lla|n t|uks| on|ksi| oi|n k| ka|aan|een|la |lli|kai|a j| ta|sa |in |mis| jo|a o|Ã¤Ã¤n|Ã¤n |sel|n s|kse|a t|a k|tai|us |tta|ans|ssa|kun|den|tÃ¤ |eus|nen|kan|nsa|apa|all|est| se|eis|ill|ien|see|taa| yh|jok|n y|vap|a v|ttÃ¤|oka|n v|ai |itt|aa |aik|ett|tuk|ti |ust| ku|isi|stÃ¤|ses| tÃ¤| tu|lai|n p|sti|ast|n e|n m|tÃ¤Ã¤|sia|unn|Ã¤ j|ude|Ã¤ o|ste|si |tei|ine|per|a s|ia |kÃ¤ |Ã¤ne| mi|maa| pe|a p|ess|a m|ain|Ã¤mÃ¤|tam|yht| ju|jul|yks|hÃ¤n|Ã¤ t| hÃ¤|utt|ide|et |llÃ¤|val|sek|stu|n a|lÃ¤ |ami|hmi| ke|ikk|lle|iin|sÃ¤ |euk|tÃ¤m|ihm|tee| ih|lta|pau| sa|isk|mÃ¤Ã¤|ois|un |tav|ten|dis|hte|n h|iss|ssÃ¤|a h|ava| ma|a y| ei| te| si| ol|ekÃ¤|sty|alt|toi|att|oll|tet| jÃ¤| ra|vat| mu|iel| to|mai|sal|isu|a a|kki|at |suu|n l|vÃ¤l|Ã¤Ã¤ |uli|tun|tie|eru| yk|etu|vaa|rus|muk| he|ei |a e|kie|sku|eid|iit| su|nna|sil|oma|min| yl|lin|aut|uut|sko| ko|tti|le |sie|kaa|a r| ri|sii|nno|eli|tur|saa|aat|lei|oli|na | la|oon|urv|lma|rva|ite|mie|vas|Ã¤ m| ed|tus|iaa|itÃ¤|Ã¤ v|uol|yle| al|lit|suo|ama|joi|unt|ute|i o|tyk|n r|ali|lii|nee|paa|avi|omi|oit|jen|kÃ¤Ã¤|voi|yhd|Ã¤ k| ki|eet|eks| sy|ity|ilÃ¶|ilm|oim|ole|sit|ita|uom|vai|usk|ala|hen|ope| pu|auk|pet|oja|i s|rii|uud|hdi|Ã¤li|va | om",
                        slk: " pr| a |prÃ¡|rÃ¡v| po|ie |ch |ost| ro|ho | na|vo |ani|na | ne|nos|aÅ¾d|kto|kaÅ¾| ka|mÃ¡ |nÃ© |Ã¡vo|om | mÃ¡|ebo|ti | v | al|ale|leb|bo | je| za|Ã½ch|o n|Å¾dÃ½|dÃ½ |ia | sl|mi |ova|sti|nie|van|to |eni|ne |Ã¡va|lob|Ã©ho|slo|rod|tor|rov| sp| zÃ¡|Ã¡ p|o v|a p| kt|Ã½ m| sv|voj|bod|obo|nia| nÃ¡| vy|ej |je |aÅ¥ |o p|a v|a s|Ã¡ro|a z| sa| ma|a n|e a|e s|mu |mie|kla|nÃ¡r|svo|spo| by|ovn|by |roz|sa |Ä¾ud|iÅ¥ |odn| vÅ¡|ov |i a|nÃ©h|vÅ¡e|o s|va |o a| Ä¾u|oci|pre|nu |a m|u a|enÃ½|e v|nÃ½ |nes|a k|zÃ¡k|pod|nÃ½m| do|u p| k |u s|Ã¡ci|ajÃº|byÅ¥|yÅ¥ |nÃ½c|eho|ran|pol|tÃ¡t|stn|jeh|a r|Å¡et|Ã½mi|lad|Äin|Ã©mu|a o|edz|Å¥ s|kon|stv|orÃ©| sÃº| ni|e z|pri|och|ny |Å¡tÃ¡|sÅ¥ |oje|vna|tre|u k| Äi|ko |Ã© p|maj|smi|a a|etk|nak|Ã½m |med|dov|prÃ­| ob|iu |uds|osÅ¥|esm|e b|m a|hra|i s|rÃ¡c|bez|vaÅ¥|chr|e p| ab|jÃº | Å¡t|Å¾en| ho|Äen| de|i p|Å¥ v| vo|dsk|pro|nom| in|ou |du |Å¾e |aby|est| bo|rÃ© |bol| so|nÃº |olo|kej|Ã¡ln| oc|obe|ky |dzi|dom|Ã¡v |por|lne|rav|akÃ©|ens|pra|ok | Å¾e|tnÃ©| ta|ako|res| vz|i k|ami| tr| ak|nÃ­ |len|o d|del|skÃ½|cho|ach|ivo|h p|oÅ¾e|iÃ¡l|inn|slu|kra|loÄ|oÄn|ju | os|anu|oju|voÄ¾|Ã¡kl|str|Ã© s|enÃ©| Å¾i|niu|sta| st|ved|tvo| me|dno|m p|de |kÃ© |kÃ½m|ikt|stu|Ã© v|i v|vyh| to|v a|odu|hoc|a t|Ã­m |ly |hov|y s|soc|jÃºc|Ãº p|odi|vod|liv|anÃ­|ciÃ¡| ve|rej|ku |ci |ske|sob|Äno|oso",
                        tuk: "lar| we|we | bi|yÅˆ |ary|ada|da | he| ha|an |yny|kla|dam|de | ad|yna|er |na | Ã½a|ir |dyr|iÅˆ |bir|r b|ydy|ler|ara|am |yr |ini|lan|r a|kly|lyd| Ã¶z|mag|nyÅˆ|Ã¶z |her|gyn|aga|en |ryn|akl|ala|dan|hak|eri|ne |uku|ar |r h|ga |ny |huk| de|ili|ygy|li |kuk|a h|nda|asy|len| ed|bil|atl|ine|edi|niÅˆ|lyg| hu| ga|e h|nde|dil|ryÅˆ|aza|zat|a g|â€da|aâ€d|eti|ukl| gÃ¶|ly | bo|tly|gin| az|lma|ama|hem|dir|ykl|â€de|e d|ile|Ã½an|a d|Ã½et|Ã½aâ€|ynd|lyk|aÃ½y|e a|Ã¼nd|ge | go|egi|ilm|sy |ni |etm|emâ€|lme|mâ€d|aly|any| be|tle|syn|rin|y b|let|mak|a w|a Ã½|den|Ã¤ge|ra | Ã¤h|mÃ¤g| du|n e|bol|meg|ele|Åˆ h| et|igi|Åˆ w|im |iÃ½a| Ã½e| di|r e|ek | ba|ak |esi|ril|a b|in |p b|deÅˆ|etl|agy| bu| je|bu |e Ã¶|y d| hi|mez| es|ard| sa|Ã¤hl|e b|yly| ka|esa|mek| gu|n a|e t|lik| do|e g|sas|ill|nma|Åˆ a|ram|ola|hal|y w|Ã½ar| ar|anm|mel|iri|siÃ½|ndi|ede|gal|end|mil|rla|gÃ¶z| ma|n b|e Ã½|Ã¶ÅˆÃ¼|ÅˆÃ¼n|n h| tu|hiÃ§|yÃ½e| ge|my |iÃ§ | Ã¶Åˆ|n Ã½|tla|Åˆ Ã½|lin|rda|al |lig|gar| mi|i g|dal|rle|mal|kan|gat|tme|sin|and|Åˆ g|gor| ta|Ã¶wl|Ã½le|y g|e w|ora|tiÅˆ|ekl| yn|alk|dÃ¶w| dÃ¶|ere|m h| me|dur| er|asi|tut|at |Ã§in|irl|umy|eli|erk|nme|wle|gur|a Ã¶|aÃ½a| Ã§Ã¤|nun| ki|ras|aml|up |Ã½aÅŸ|tyn| aÃ½|ry |Åˆ d|baÅŸ|ip |gi |z h|kin|z Ã¶|n w|ter|inm|eÃ½l|i Ã½|kim|nam|eÅˆ |beÃ½|dol| se| te|r d|utu|gyÃ½|ez |umu|mum",
                        dan: "er |og | og|der| de|for|en |et |til| fo| ti|ing|de |nde|ret| re|hed|il |lig| ha|lle|den| en|ed |ver|els|und|ar | fr| me|se |lse|and|har|gen|ede|ge |ell|ng |at | af|nne|le |nge|e f|ghe|e o|igh|es |af |enn| at|ler| i |ske|hve|e e|r h|ne |enh|t t|ige|esk| el| be|ig |tig|fri|or |ska|nin|e s|ion| er|nhv|re |men|r o|e a| st|ati| sk| in|l a|tio| pÃ¥|ett|ens|al |tti|med|r f|om |end|r e|del|g f|ke | so|pÃ¥ |eli|g o| an|r r|ns | al|nat|han| ve|r s|r a| un| he|t f|lin| si|r d|ter|ere|nes|det|e r| ud|ale|sam|ihe|lan|tte|rin|rih|ent|ndl|e m|isk|erk|ans|t s|kal| na|som|hol|lde|ind|e n|ren|n s|ner|kel|old|dig|te |ors|e i| hv|sni|sky|ene|vÃ¦r| li| sa|s f|d d|ers|ste|nte|mme|ove|e h|nal|ona|ger| gr|age|g a|vil|all|e d|fre|tel|s o|g h|t o|t d|r i|e t| om|arb|d e|ern|r u| vÃ¦|d o|res|g t|klÃ¦|Ã¸re|n f| vi| mÃ¥|ven|sk | la|gte|kab|str|n m|rel|e b|run|rbe|bej|t i|ejd|kke|t e|g d|rkl|ilk|gru|ved|bes| da|nd | fu|lÃ¦r|Ã¦ri|rdi|Ã¦rd|ld |t m|dli|fun|sig| mo|sta|nst|rt |od | ar| op|vis|igt|Ã¦re|tet|t a|emm|g e|mod|rho|ie |g u|ker|rem| no|n h| fa|rsk|orm|e u|s s|em |d h| ge|ets|e g|g s|per| et|lem| tr|i s|da |dre|n a|des|dt |kyt|rde|ytt|eri|hen|erv|l e|rvi|ffe|off|isn|r t| of|ken|l h|rke|g i|tal|mÃ¥ |r k|lke|gt |t v|t b",
                        nob: "er | og|og |en | de|for|til|ing|ett| ti|et | ha| fo| re|ret|il |het|lle|ver|tt |ar |nne| en|om |ell|ng |har| me|enn|ter|de |lig| fr| so|r h|ler|av |le |den|and| i | er|som| Ã¥ |hve|or |t t|ne | el|els|re | av|se |esk|enh|nge|ska|nde|e o|ete|gen|ke |lse|ghe|ten|men| st|r s|fri|igh|ig | be|e e|nhv|r r|tte|ske|te | pÃ¥| ut| sk|al | in|sjo|pÃ¥ |der|e s|ner|rin|jon|t o|unn|e f|han|asj|tig|ed |es |g f|sam|ent|tti|ene|nes|med|ge | al|r o|ens|r e|eli|isk|lin| ve|nin|g o| sa| an|t f|itt|lik|end|kal|r f|t s|rih|ihe|nas|nte|e r|ns | si|lan|g s|mme|ige|l Ã¥|erk|dig| gr|n s|ren|r a|all| na|kte|erd|ere|e m|und|r u|res|tel|ste|gru|inn|lÃ¦r|ers| un|det|t e|arb|ale|del|ekt|ven|t i|g e|bei|eid|e a|n m|e d| ar|rbe|e g| bl|ans|klÃ¦| li| he|g t|Ã¦ri|sky|run|rkl| la|sta|sni|kke|m e|rt |mot| mo|e n|tat|at |e h|e b|ove|e t|jen|t d|str| mÃ¥|r m|n e|ors|rel|ker| et|n a|bes|one| vi|nn |g r|e i|kap|sk |ot |ndi|nnl|i s| da|s o| no|id |ger|g h|vis|n o|bar|s f|ndl|t m|g a|opp|t a|dis|nal|r d|per|dre|ona|Ã¦re|rdi|da |ute|nse|bli|ore|tet|rit| op|kra|eri|hol|old| kr|ytt|kyt|ffe|emm|g d|l f| om|isn| gj|Ã¥ d|ser|r b| di| fa|n t|r k|lt |set| sl|dom|rvi|me |l e|gre|Ã¥ s|mÃ¥ | tr|nd |m s|g i|ikk|n h| at|tes|vil|dli|g b|d d| hv|rav",
                        suk: "na | mu| bu| na|a b|ya |hu |a n|we | gu|nhu|a g| ba|a m|ili|wa | ya|li |unh| bo|mun|ali|bul|han|bo |i m|ilw|uli|ang|lil|la |i b|e n|ga | wi|kil|mu | al| se|u a|ge |kge|ekg|sek|lwe|ose|le |lo |bi |ulu|e y|kwe|ila|and|e b|i n|yo |ngâ€™|a s|nga| ns|si |abi|nsi|ina|lin|aki|se |ban| ly| gw|dak|lu |ngi|gil|a w|o g|akw|u b|ile|anh|ka |ilo|a l|ubi|e g| nu|o n|ja |gan| ng| ma|lya|nul|gâ€™w|ani|ndi|u m|iya|wiy| ji|jo | ka|yab|lwa|ada|o b|e k| ad|gwi|ho |gub| ku|ing|o a|o l|ula|ika|a i|u n|dik|iha|shi|ayo|gun| ja|ha |biz|o j|lag|ma |wen| sh|ele|ung|o s|gi |gul|mo |lan|iwa|a k|ala|iki|jil|ola|ji |a a|yak| li|nil|iza|agi|aha|man|bos|iga|kuj| ha|ana| lu| gi|iti| mh|uga|uyo|win| ga|za |a y|ki | nd|oma|ene|o w|a u|mah|yos|sol|hay| mi|iko|ong|aga|iku|gwa|i a|ndu|pan|u g|e i| ab|ujo|ida|nya|ibi|duh|but|i y|u w|iji|nhy| we|nik|aya|uhu|nda| il|je |abo|aji|lel|ubu|nay|ba |lug|lon|ale|mil|da |a j|dul|o m|mha|aka|e u|gâ€™h|udu|lyo|e m|e a|gik|bus|bal|sha|wit|twa|ngh|nek|wig| um|okw|any|uma|ima|uso|bud|â€™we| ij|hil|bil|a h|imo|ita|no | ih|gut|nha|ne |iso|ulo|uno|yom|â€™ha|u l|elo|eki|wel|hya|ngu|omb|som|mbi|i g|o i|u i|bak| is|ugu| yi|utu|eni|tum|umo|u s|tog|inh|â€™wi|lit|waj|e j|ule|jiw|u u|kub|kul|lik|uto| uy|upa",
                        als: "tÃ« | tÃ«|dhe|he | dh|nÃ« |Ã« d|e t| e |et |Ã« t|imi|pÃ«r|ejt|dre|rej| pÃ«| dr| nÃ«|it |gji|sht|ve |jit|Ã« p| gj|ith| sh| i | li|het|e p| nj|t t|Ã«r |Ã« n|in | ve|me |jtÃ«|e n| ka|ara|e d|ush|n e|tet| pa|jer|hku|a t|re |Ã«n |Ã« s|sh | ku|sÃ« |t d|Ã« m|kus|mit|lir|ka |Ã« k|jÃ« |se | si| qÃ«| ba|etÃ«|qÃ« |Ã« b|si |Ã« g|eri|thk|nje|eve|e k|e s|jet|ose|bas|ohe| os|ra | mb|iri|h k|min|shk|ash|rim|ndÃ«| nd|njÃ«|jta|e m| me|eti|do | du|es |rÃ« |e l|mi |anÃ«|tar|t n| as|dÃ«r|hte|end|tÃ«n|vet|uar|und|Ã«si|kom|tje|duh|ndi|at |ave| ko|ri |ta |Ã« v|shm| de|ar |omb|i d| kÃ«|i p|jes| ng|uhe|nga|i n|en |Ã« e|ga | ar|e a|Ã«s |hme|bar| pe|htÃ«|Ã« l|ur |Ã« i|isÃ«|ime|sim|ris|tÃ«s|art|Ã«m |cil|tim|tyr|Ã«sh| ma|shÃ«|or |t a|kÃ«t|gje| ci|r n|e v|par|nuk|Ã«ta|rgj|i i|ish|uk | nu|Ã« r|are| je|Ã« c| pu|atÃ«|lim|lli| Ã«s|Ã« a|i t|mar|ore| sÃ«|tit|lar|per|t p|rat|ite|inÃ«|t s|riu|ke |Ã«rg|a n|edh| pr|esi|irÃ«|Ã«rk| po|hÃ« |Ã« j|i s|a e|ht |mba|roh|im |ari|e b|lit|ti |asn|tav|snj|t e|ik |tij|k d|qÃ«r|hÃ«m|ras|res|otÃ«|nal|mun| an|kla|ven|e q|tat|t i| fa|ij | tj|igj|te |ali|bro| di|roj| ti|uri|ojÃ«|Ã« q|Ã§do|det|n p| pl|ekl|ind|erÃ«|vep|dek|nim|ive|ror|sho|hoq|oqÃ«|Ã«ri|pri|r d|shp|esÃ«|le |a d|shi| mu|dis|r t|ete| t |Ã« f|Ã«zo|zim| Ã§d|mbr| re|e f|jen|i m|iut|n k|tha|s s|lot",
                        sag: "tÃ® | tÃ®|na | na| ng|a n|ngb|gÃ¶ |ngÃ¶|nga|nÃ® | lo|lo |zo |bi |la |gbi|ang| sÃ´|sÃ´ |Ã® l|gan|Ã¶ t| zo|o n| wa|a t|Ã®ng|i t|ngÃ¼|gÃ¼ | al|lÃ®n| nd|a l|Ãª t| kÃ»|Ã¤ng|Ã® n| te|wal|ala|alÃ®|Ã® k|Ã« t|Ã® m|Ã¢ t|Ã® Ã¢|Ã´ a|Ã® b| mb|Ã»Ãª |gÃ¢ |Ã¶rÃ¶|ngÃ¢|kÃ»Ãª| lÃª|o k|a Ã¢|e n|ko |Ã® s| kÃ¶|ter|dÃ¶r|kÃ¶d|Ã¶dÃ¶|Ã¯ n|a k|lÃªg|gÃ« |Ã´ko|Ã«pÃ«|mÃ» |pÃ«p| pÃ«|o a|ÃªgÃ«|eke|yek|ke |Ã¼ t|Ã® t| ay|o t|bÃªn|Ãª n|rÃª |pÃ«e|ra |Ã«e |erÃª|rÃ¶ |tÃ¯ |kua|aye| nÃ®| Ã´k|ua |a z|Ã¤ t| Ã¢l|Ã¢ n|Ã¯ng|Ã® d|Ã¶ n|Ã¢ng|ÃªnÃ®| am|Ã® z|ten|Ã¢la| yÃ¢|Ãª a|mbÃª|a m|Ã» n|a y|ne |ene|rÃ¤ |Ã® g|a s|bÃª | ku|arÃ¤|ndi|ga |diÃ¤|Ã«ng|iÃ¤ | du| Ã¢n|amÃ»|dut|Ã¶ng|yÃ¢ |utÃ¯|ro |Ã¶nÃ®|lÃ¯ |a p| gÃ¯|oro|lÃ« |Ã® a| Ã¢m|ndo| sÃª|ngÃ´|do |i n|o s|ndÃ¶|Ã¢ra|e t| bÃª|gba|Ã»ng| mÃ¤|sÃ¢r| sÃ¯|Ã® p| gb|Ã¶ k|e a|yÃª |a a| Ã¢k|dÃ¶ |ara|ba |Ã¯ t| tÃ¶|a w|zar|tÃ¶n|Ã® w|war|ndÃ¢|a g|ana|nÃ« |Ãªnd| tÃ«|ta |ban| lÃ«|zÃ¶n|Ã® f|nzÃ¶| sÃ¢|sÃ¯ |tÃ«n|o w| nz|sÃªn| Ã¢z| da| za|Ã®rÃ®| nÃ«|nÃ«n|ate|Ã¤ s|bÃ¢ | at|o l|Ã«nÃ«|o Ã´|fa | kp| ma|o p| mÃ»|kÃ¢n|a b|bat|ata|Ã´ n|se | kÃ¢|alÃ«| ko|Ã´ng|da |Ã« s|Ã¼ng|Ã« n|ibÃª|rÃ¶s|mbÃ«|bÃ«t|Ã«tÃ¯|Ã¢mb|mbÃ¢|Ã¯gÃ®|mba|gÃ® |tÃ¤n| po|bÃ»n|gÃ¯ |amb|Ã¼ n|gbÃ¯|Ã´i |gÃ´i| af|rÃ« |erÃ«|lÃª | as|afa|Ã¢zo|i p|sor| ad|i s| ba|gÃ¯g|Ã¤ n|bÃ¤t|dÃ« |Ã¶ Ã¢|kÃ»e|Ã»e |kpÃ¤|pÃ¤l|Ã¤lÃ«|e z|Ã¤tÃ¤|Ã¶ w|ngi| yÃª|kÃ¶t|Ã¶tÃ¤|tÃ¤ |Ãª s|kod| hÃ¯|hal|hÃ¯n|lÃ«z|Ã«zo|ngÃ¤|gÃ¤n|odÃ«|Ã¶ m|mar|sÃ¤r|pÃ¤ |Ã¤rÃ¤|Ã®an|rÃ¤n|bÃ®a|a h|gi |bor|du ",
                        nno: " og|og | de| ha|er |en |ar |til| ti|lle|ett|il |ret|om |et | re|le |har|enn| me| al|all| fr|ne |tt |re | Ã¥ | i |nne|and|ing|ska| sk|men| fo|det|den|ver|for|ell|t t|dom| so|de |e s| ve| ei|ere| pÃ¥|al |an |e o|e h|fri|sam| sa|l Ã¥|pÃ¥ |leg| el|ler|som|ein|ei |nde|av | st|dei|or |ten|esk|kal|gje|n s|tte|je |ske|rid|r r|i s|te |nes| gj|eg |ido|med|e f|r s|st |ke |jon| in|r f|sjo|asj|nas|ter|unn|ed |kje|han|ona| er|t o|t e|g f|ski|e m|ast|ane|e t| av| gr|lan|ste|tan|Ã¥ f| na|der| sl|t s|seg|n o|r k|nga|ge | an|g o|at |na |ern|nte|ng | ut|lik|e a|bei|gru|e i|arb|kil|g s|lag|eid|r a|e d|g d| si| fÃ¥|ame|a s|e r|rbe|jen|n m|r d|n e|nn |e n|erd| tr| mÃ¥| bl| mo|ren|run|nin|bli|kra| kr| at|ege|n i|me |nsk|ins|Ã¥r |frÃ¥|in |lov|v p|end|mot|ale|e v|Ã¥ a|fÃ¥ |rav|int|nal| ar|sta|e k|t f|ome| la|ot |t a|sla| ik|nle|itt| li| kv|id |kkj|ikk| lo|nad|Ã¥ v|tta| fa| se|gen|ld |Ã¥ s|kan|g t| ka|r l|god|n a|lin|jel|ild|dig|ha |l d|kap|ve |ndr|g i|g a|inn|var|rna|r m|r g|a o|dre|d a|n t|ag |kÃ¥r|mÃ¥l|ig |va |i d|t m|e e|n d|tyr| om|g e|eve|dÃ¥ |e u| dÃ¥|und| no|ir |gar|g g|l h|se |ga |d d|l f|ker|r o|Ã¥ d|eld|ige|t d|t i|t h|oko|nnl|rel|nok|rt |lt |Ã¥se|jer|ta |ik |ial|eig|r p|i e|olk|bar|osi|kte|sos|lir|opp| un|ad | be",
                        mos: " n |eÌƒn| a | se|a t|seÌƒ|Ìƒn | ne|a s| ye|e n| ta| tÉ©|n t| pa|tÉ© | la| so|nin| ni| b | fÃ£|fÃ£a|Ã£a |ng |a n| bu| tÃµ|la |eÌƒ | te|tÃµe|ne |ye |a a|or | ya| to|ed |ned|pa |e t|Ãµe |tar|em |teÌƒ|g n|Ã£ n|n m|aan| ma|sor|buu|n y|maa|uud|a y|r n|ins|n p|ud |ra |paa|É© n|a b| wa|d f| na|me |n d|ara|n b|sÃ£ |taa|n w|bÃ£ |an |yel|eng|aal|É© b|n n|geÌƒ|Ìƒng|og | ka| bÉ©|bÉ© | tÊŠ|gÃ£ | yÉ©|na |am |e b|ame|wa |g a|d b|aam|ab |mb | bÃ£|Ã£mb| ba|m n|wÃ£ |aab|a m|aa |saa|ga |nsa|yaa| wÃ£|a l|tog|ore|n s|nd |ÊŠÊŠm| sÃµ| sÃ£|Ã£ng|seg|egd|d s|el |tÊŠÊŠ|ngÃ£|ba | tÅ©| da|Ã£ t| me|b s|re |dat|l s|d n|É© y|Ã£ y|dÉ© |aoo|g t| kÃ£|m t|ing|r s|a p|b y|b n|gdÉ©|men|dÃ£ |vÉ©É©| vÉ©|lg |oor|Ã£ s|n k|al |rÃ£ |nga|ar | le|gr |d a|neb|Ìƒnd|É©É©m|Ä©nd|yÉ© |lem| pÊŠ| bÊŠ|pÊŠg|nge|to |b t|É© s|g s| mi| ke|a k|bÃ£m| we|kao|ilg|wil| zÄ©| no|keÌƒ| ra|m b|ÊŠge|b k| bÅ©|oog|Ã£ p|bÅ©m|ngr|at | wi|gam| ko|eb |g b|sÃµn|Ã£ad|Ã£ f|Ãµng|É©m |m s| yi|Å©mb| yÃ£|ÊŠm |oy |weÌƒ|noy|ÊŠmd|da |ren|a z|ya | gÃ£|le |b p|É© t|n g| f |ni |soa|oab|i t| sÉ©|lag| ti|te |o a|s n|oga|go |tÅ© |gem|age|a w|Ìƒ n|in | yÃµ|a g|b b|aor|ka |eÌƒe|tÅ©u|aas|a r|e y|ag |eg |r t|e a|Ã£ k|iid|e p|neg|o t|ate|oa |e s|Å© n|mÃ£ |ms |ell|eem|eÌƒm|b w|Ìƒms|too|ik | zÃ£|zÄ©n|kog|bao|r b|s a|bui|uii|ogl|aba|alo|loa|kÃ£a|od |l b|ll |nda|kat|aka",
                        cat: " de| i |es |de |la | la| a | pe|per|iÃ³ |ent|tat| se|nt |ret|ts |dre|at | el|ls | dr|men|aci|a p|ciÃ³|ona| co|a l|al |na |s d|que|en |el | to|s i| qu| en|e l|ns |tot|et |t a|ers| pr|t d|ons|er | ll|ion|a s|ta |a t|con|els|s e| lâ€™|rso|res|als|son| un|est|cio| re|pro|ita|cia| in|les| o |ue |del|lli|tÃ© | tÃ©|ia |ame|Ã© d|sev|ota|nac|i l| al|s p|a d|ar |a i|ual|nal|a c|ant|nci| le|ert|sta|rta|ser|t i|i a|l d| no|va |ats| dâ€™|s n|re |s a|e c|eva| na|rÃ  | ca|ues|com|lib|Ã©s | so|ibe| es|ets|ber|da |r a|no |una|lâ€™e|s l|ter|sen|ran|ure|des|man|i e|l p|t e|n d|e d|e e|om | di|cci|igu|a a|s t| pa|i d|tra|s o|aqu|tre|vol|ect|a u|l i|gua|ide|s s|ada|ene|ial|nta|ntr|ens|soc|cte|ra |oci|hum|uma|cla|ali|lit|erÃ |cti| aq| hu|ici|pre|era|ess|uni|nte| fo| ni|ble|sse|tes|alt|eme|ass|ica|seg|o s|ote|rac| ig| po|ans| Ã©s|a e|un |us |mit| ma|r s|se |ssi|s h|a m|r l|nit|l t|Ã¨nc|Ã³ d|ten| te|ir |i p|tal|eta|dic|i i|hom|t q|par|egu|s f| as|n l|ria| mi| ac|lic|int| tr|act|eix|n e|s c|ont|nse|ecc|t t|ltr|amb|qua|lâ€™a|eli|ura|an |ist|e t|Ã³ a|one|nam|ing|lar|o p|esp|rec|lig|a f| ha|iva| am|lle|t s|rot|mat|liu|tiu|iur|n a|fon|ots|inc|ndi|e p|seu|olu|gur|i c|mÃ©s|der|rna|ina|for|igi|cie|bli|ic |mb |in |art|ol |rom|nin|omp",
                        sot: " le|le |ng |ho | mo| ho| bo|a h| e |lo |ya |ba |e m|a l| ya| ts| ba|na |ong| ka|a b|tho|e t|sa |elo|olo|a m|ets| di|o e|la |mon|oth|tsa|o y|ka |eng|a k|oke|kel|a t|g l|tok|ang|o t|tla|mot| se|o l|e b| na| ha|lok|wa |e h| tl| a |aba|o b|tse|ha | o |hab|e k|tjh|a d|tso|jha| to|se |so |oko|e e|tsh|dit|pa |apa|o n|e l|loh|kol| ma|o m|a e|ela|ele|ana|a s|let|bol|ohi|a a|tsw|kap| ke|hi |g o|ohl|eo |ke |ona|set|o k|o s|di | kg|e d|aha|lan|bot|bo |ito|o h| mm|hle|eth|ena|i b|ala|ats|moh|swa|lwa|g k|atl|abe|g m|ola|phe|bat|ane|a n|mel| me|o a| ph|ebe|ell|hlo|tlo|etj|mat| sa|g t| th|g y|lat|mol|g b|g h| en|she|the|seb|nan|lek|boh|hae|kgo|hel|e s|edi|wan|me |kga|ae |to |a f|ath|lao| hl|han|ile|nah|we |ume|kan|otl|len|aka|efe|ire|bel|bet|rel|swe|mme|sen|a p| ko|g e|atj|lel|its|bon|oho|eha|shi|man|ano|nts|he |lal|eka| fu|o f|heo|got|all|ao |het|hat|get|ban|hal|kge| wa|a y|lla|fum|mmo|kar|alo| ef|thu|e y|wal|tha|san|hon|tlh| he|e n|ben|hla|ing|uma|pha|o o|si | tu|tum|llo|lle| ta|pan|hen|mo |nen|hir| lo|son|ots|tab|ama|ato|din|lap|hil| eo|dis|oka|elw|tsi|llw|i m|hol|pel|iso|no |e a|fet|lwe|adi| fe|fen|hwa|opa|kop|are|amo|ret|emo|i k|isa|o p|o d|i l|gat|dik|i t| nt| la|ame|shw|hah| am|nya|ita|mab",
                        bcl: "an | sa|in | na|ng |sa | pa|na |nin|ang| ka| ni| ma| an|pag| as|sin|asi|n s|ion|n n|cio|a m|on |ban| de|n a|ga |kan| mg|a p|mga|a n|os |rec|ere|der|cho|ech|n p|aci|aro|n m|man|a s| la|n d|o n|asa|n k|g s|kat|sar|ata|ay |o s|al |ong|n l| o |a a|ho |a k|igw|tal|gwa|amb|kas|sai|mba|wa |ara| ig|agk|o a|lam|ro |o i|gka|ali|apa|nac|san|aba|g p|ina|a d|iya|yan|ing|lin|may|ink|aiy|nka| ba|aka|a i|yo | in|ag |abo| da|aha|ini| ga|tan|s n|nta|ano|agt|s a|kai|ad |hay|ida|hos|o m|og |ia |iba|ent|han| ta|par|n i| hu|at |ron|a b|g n|ant|g m|nal|ayo|a g|dap|mag|no |sta|aya|iri| pr|nga|ran|cia|g k|es |pat|li | co|dad|l n|y n|bos| si|mak|pro|ala|men|gan|aki|nte|lan|o k|con|t n|gab|a l|g d|ona|n b|ta |do |nda|aan|as |uha|agp|a c|uli|awo|taw|pan|n o| so|hul|i n|ter|ado|ags|g a|tra|min|anw|tay|kam|nwa|waa|g o|a o|kap|ain|bal|bil|ami|g i|d a|res|ra |nag|gta|ton|n e|ba |nan| mi|kab|en |bas|gpa|nes|o p| di|pin|ika|l a|n g|ind|isa|cci|ili|ial|ecc|tec|nci|ios|bah| es|one|pak|om |imi|agi|ico| re|ana| bi|a e|nid|rim|rar| se|rab|s s|hal|i a|buh|sab|cri|ubo|bo |gi |wo |rin|int|agh|ipa|sii|ibo|ani|to |sad|hon| le|iis|a t|ast|say|lar|n c|aag|ote|rot|n t|y m|ici|paa|ley|ey |yag|aen|dan|ni | pu|atu|lab|sal|ica| gi",
                        glg: " de|os |de | e |iÃ³n| a |da |to |ciÃ³|ere|Ã³n |der|ito|en |a p| co|ent|eit|n d| se|rei|ade|as |aci|dad|s d| pe|per|o d|s e|e a|e d|men| da|nte|ers| pr| te|do |al |rso|ida|es |ten|soa|oa |que| to| po| o |a t| in|a e| li| do|cia|te |tod|res|o a|pro| re|tos|est|ra | es| ou|dos|lib|con|a d|nci|o e| na|e e|a a|a s|ber| Ã¡ |oda| pa|e o| qu|e c|ue |ar |nac| en| sÃº|tra|s p| un|sÃºa|com|ou |ia |nto|ser|a c|er |ns |a o|se |des|is |ter|s n| ca|ado|or |Ã³ns|sta|Ãºa | no|rda|s s|ibe|rÃ¡ |erd|era|no |nal| as|ica|e p|eme|erÃ¡|pre|sen|das|e n| ni|e s|por|ais|par|ant|ara|ame|cci|ona|io |o p|n p| di|cto|s t| so|o t|o Ã¡|nin| me| os|cio|enc|unh|n e|n c|nha|ha |ntr|ion|n s|Ã¡ s|n t|s o|ese|nta|ect|e i|o s|e l|so |nid|oci|soc|ont|dic|ici|e t|tad| ac|tiv|ndi|ali|gua|l e|rec|a l| ig|omo|cas|o m|re | ma|ing|na |igu|vid|eli|ngu|und|s i|rac|a n|cla|cti|seu|ria|on |ase|o n|lic|s c|man|lid|a u|uni|ta | Ã³ |ual|ido|ori| fu|ind|nda|ste|s a|tes| tr|act|ial|fun|dis|ecc|o Ã³|cal|mo |un |e r|iva|n o|ca |n a|o c|esp|ome|o o|seg|sti|r a|tor|r d|egu|ada|lo |nde|r o|uma|ote| el|alq|lqu|uer|spe|a i|tar|bre|tri|hum|olo|cie|ren|ena|ari|mat| fa|med|ura|lar|edi|ver|ixi|Ã¡ p|ibr|gur|int|pen|rot|a f|cac|s f|ili|rio|ma |a v| vi|rim|len|ita",
                        lit: "as |ir | ir|eis|tei| te|s t|os |uri|ti |us |is |iek| pa|ai | vi|vie|tur| ki|ri |Å¾mo| tu| Å¾m|ien|Ä—s |iÅ³ |ali|ais|mog|vis| ka|lai| la|ini|i t|s i|s Å¾|sÄ™ | Ä¯ |isÄ™|ena| ne| pr| bÅ«| jo|pri|kie| ta|kvi|nas| su|ekv|mas|gus|bÅ«t|tin|isv|s s|ogu|isi|mÄ… |mo |ant| ar|s k|ama|kai|Å«ti|s a|s v|aci| ti|s n| sa|s p|oki|cij|inÄ—|ar |val|ms |tai|jo |i b| na|gal|sav|kur|aus|men|rin| ap|imÄ…|ma |sta|Ä™ Ä¯|ina|i p|imo|nim|i k| nu|ima|oti|mis| ku|jos|lyg|dar|iÅ¡k|je | at|tas|kad|r t|tÅ³ |ad |tik|i i|nÄ—s|arb|i v|ijo|eik|aut|s b| Ä¯s| re|iam|sin|suo| be|isu| va|li |sty|asi|tie|ara|lin|isÄ—|i s|Ä… i|jÅ³ | ly| ga|vo |si |r p|tuo|aik|rie| mo|din|pas|mok|ip |i n|rei|ybÄ—|mos|aip|r l|ntu|Ä¯st|Ä¯ t|gyv| iÅ¡|nti|tyb|Å³ i|pag|kia|kit|es |uot| sk|jim|tis| or|aud|yve|ven|mÅ³ |als|Å³ t|nac|avo|dam|Ä… k|i a|s j|oje|agr|kla|gau|neg|niÅ³|o k|ega|iki|aug|ek |tat|ieÅ¡|tar|ia | Å¡i|ios|Å¡ka|sva| to|tau|int|sau|uti| as|io |oga|san|mon|omi|kin|ito|s g|ome|r j| ve|aty|kim|nt |iai|lst| da|jÄ… |min|r k|o t|nuo|tu |ver|kal|am |usi|o n|o a|ymo|tym|vÄ™ |ati| ji|o p|tim|Å³ n|paÅ¾|ter|s Å¡| vy|alt|ksl|ing|Å³ s|oma|Å¡al|ran|e t| ni| Å¡a|ava|avi|nie|uom|irt|elg|jam|ipa|kiÅ³|tok|eka|tos|oja|kio|eny|nam|s d|ndi|amo|yti|gri|svÄ™| gy|lie|Ä—mi|ats|ygi|soc|sie|oci|pat|cia",
                        umb: "kwe|oku|a o| ok|nda| kw| om|da |wen|e o|a k|la |ko | ly|end|nu |ka |o l|oko|mun|omu|unu|kwa|wa | ko|a v|o y|omo|mok|ali| vy|eka|olo|i o|osi| yo|lyo|mwe|si |okw|we |lo |iwa|o k|i k|le |te |a e|ete|gi |kut|sok|ong|iso| ya|vo |ang| ey|wet|ata|a y|o o|yok|ofe|fek|kuk|ela|a l|ilo| wo|owi|nga|iÃ±g|kul|oka|vyo|uli|u e| va|li |Ã±gi|kal|wat|ta |u o|eci|ngi|ovo|ye |so | li|oci|yo |wiÃ±|nde|ga |ing| nd|ili|nge|ci |eye|ala|vya|e k|kol|isa|a a|lom|lon|go |avo|ako|ovi|pan| ol|uka|ngo|lya|ti |o v|akw|yal|olw|uti|imw|eli|alo|ge |ung| ku|a u|lis| al|onj|ati|wal|ale|e l|sa |i v|and| ov| yi|ika|ukw|ele|lil|yos|he | oc|yov|iha|ikw|omb|val|lin|lim|ahe|apo| ka| ye|yom| vo|lik|i l|kok|wav|aka|cih|o e|tiw| ke|yi |i w|ama|e y|lof|yow|yol| ek|kov|ole|vak|vik|tav|omw|a c|upa| el|ila| lo|aso|su |e v|lyu|ava|Ã±go|lwa| wa|gis|gol| ce|tis|ave| on| es|po |wil|va |eso|kup|co | la|yam| ak|wam|iyo|ekw|e e|i c|tat|i a|a n|yah|eko|lwi|ita|lit| ec|kwi|upi|i y|epa|kan|kiy|nja|dec|asi|e u|yav|asu|mak|lap|yim|tya|vos|kas|cit| ha|lel|u c|a w|emb|u y|ola|yon| os|win|lye| ca|eyo| uk| ci| ow| yu|ayi|vel|liw|has|iti|sil| et|yuk|o w|umb|ulu|ya |wi |anj|kat|ngu|wom|o a|uva|esu|usu|mbo| co| of|mat|o c|ca |cel|vi |u l|ba |kon|mbe|wiw",
                        tsn: " le|le |go | mo|ng | ts| go|lo | bo|ya |we | di|gwe| ya|ong|ngw|sa |olo|elo|a b|tsa|tsh| e |tlh|a l|o t|e t|a g|e m|wa |a t|o y|eng|na |e l| kg|wan|kgo|mo |o n|tse|a k| tl|ets|ane| ba|dit|mon|ele|hwa|shw|la |ka |a m|nel| na| ka|e d|o l| o |o m|ba |se |e g|e e|bot|a d| a |di | ga|ots|tla|otl| se|lol|o b|tho|so |lho|tso|o g|ang|got|e b|ga |lel|seg|o e|its|gol|ose|ho |oth|let|e o|lha|ego|aba|hab|e k|ano|los|a n| nn| ma|eka|g l|Å¡ha|tÅ¡h|kan|alo|ola|lhe|ela|aka|sen|gat|tsw|kga| nt|mol|o a|nng|o o|o k|aga|atl|o s|bat|tlo|agi|yo |len|g y|edi|e y| th|g m|dik|to |tir|e n| ja|a a|mel|o d|ana|ire|g k|rel|swe| yo|bon|gag|lek|e s|mot|kwa|i l| te|a s|he |agw|ats|iwa|i k|itÅ¡|ona|no |a e|mai|any|lao|ikg|she|ntl|lwa|dir|g t|lon|ale| sa|ao |hel|shi|tle| wa|ume|log|jwa|itl|pe |hir| jw|non|iti|a y|set|hok|ira| ti|odi| me|gi |e j|tek|etl|a p|ko |ath|ala|hol|bod|tet|mog|han|nya| mm|g g|nag|i t|adi| lo|oag|i b|nna| ko|the|lan|re |thu|wen|hot|nyo|hut|o i| ne|pol|me |tum|ope|ame|gan|emo|ore|wel|nts|oko|okg|iro|ro |tha|elw|amo|gor|ing|jal|isi|nan|ogo| it|jaa|si |oga|heo|gon|diw|pa |opa| kw|lat|are|bo |o j| ke|ke |ile|gis|o f|rag| ph|bok|aak|kar|rwa|nye|g a|atÅ¡|mok|ago|okw|hag|ate|ato|uto|gwa|mme| fa|fa | op",
                        vec: " de|to |ssi| di| e |de |Æša |ass| in|e d|Æše |Ã³n |iÃ³n|e e|o d|siÃ³|ent| co|rit| so|dir|el |iri|re |eÆša|tÃ  |e a|ti |Ã  d|so |men|te |ess|in |a s| a | gÃ |gÃ  |ito|deÆš| pr|i d|ion| el|sa |aÆše|a d|e i|nto|e p|o a|nte|ame|mo | na|con|sio|hom| te|omo|ni |are|a p|pro|e s|da | ke|ke | i |o e|nas|Æši |aÆša| pa|gni|ssa|aÆši|xe |se |o i|i s| aÆš|ar | eÆš| un|e l| da| ho|on |ia | og| si|sia|e n| al|o s|a e| li|ogn| se| o | ri|n t| lâ€™|i i|naÆš|i h|dei|dis|ei |na |Ã  e|del|o c|ont|iti|tut|ibe|ber|nsa| es|par|iss|res|e c|o g|ona|ond|itÃ |un |ri | tu|lib|sar|n d|ras|a c|nda| st|ens|i e| cu|nit|e o|egn|a n|do |ari|ta |eÆše|ro | xe|gua|ne |a l|n c|a i|n e|i p| re|cia|al |tra|e f|man|n s|no | po|ers|i g|uni|pre| fo|uti|n p|eri| ma|era|l s|ani| fa|per|soc|oci|o o|rtÃ | no|l d| pe|pri|e r|ter|si |a a| as|ndo|i a|fon|a u|end|e k|sen|o p|iaÆš|teÆš|e g|ico|n u|ert|io |lâ€™a|a t|ra | me|ugu|ati| ne|uaÆš|dar|o t|com|asi|e t|iar| Æše|nta|sta|teg|o n|ant| ug|ins|nse| pu|seg| le|ori|ura|ndi|tri|alt|ist|o k|Æšo |kia|e u|rar|tes|ita|ans|rso|ltr| su|l m|n o|Æšit|a r|ai |uma|ici|ato|opo|bli| ca|eÆši|l r|ica|ria|tro|isp|sun|cua|ind|co |vit|cur|cas|int|ute|ric| ra|gna|rse|dam|lic|ono|ere|riv|ite| um|for|avo|sic|vor|icu|ris|eÆš |eto|cos|ntr",
                        nso: "go | le|le | go|a g|lo |ba | di|ka |o y|ya | ka| ya|ng | ma|a m| mo| tÅ¡|elo|etÅ¡|e g|a l|o l| bo|a k|a b|e t|na |o t|tok|wa |e m|a t| ga|la |ang| a | ba| se|man|tÅ¡e|oke|o k|Å¡a |kel|dit|tÅ¡a|tho|we |ele|a d|o g|o a|a s|o b|gwe|e d|ho |o m|ego|e l| na|tÅ¡h| to|Å¡o |Å¡e |oko|ga |di | o |olo| e |let|ong|gob| ye|oba|ago| tl|tÅ¡w|mo |e b|re |g l|ngw|aba|tÅ¡o|swa|Å¡ha|ane|tla|hab|o n|ona|ito|ela| kg|ogo| th|oth|wan|eo |e k| sw|lok|kgo|log|ye |o d|a n|ola|g o|e s|set|hlo|kol|se | wa|lel|ao |eng|o s|Å¡wa|mol| ts|eth|net|ano| bj|a y|o e| ke|thu|hut|Å¡we|ge |itÅ¡|leg|rel|alo|to |ohl| ge|mog|kan|e e|ire|nag|ke |eba|aka|pha|gag|bot|o w|aga|a a|mot|are|mok| yo|gor|oka|ko |gon|no |ore|ana|agw| wo|bon|bat|lwa|tse|bja| ph|din|yo |e r|Å¡eg|e y|ath|nya|get|lao|sa |wo | re|wag|odi| sa|seb| me|utÅ¡|oph|mel|iti|kge|ato|kar|o o|Å¡om| la|o f|phe|edi|hir|ala|pol|lat|uÅ¡o|i g|a p|g y|the| fi|ume|wel|bop|hel|emo| du|ile|gwa|bo |ale|tle|lwe|lek|ban|ta | lo|lon|o Å¡|dir|mae| mm|tlh|god|pel|a w|weg|eka|elw|atÅ¡|iÅ¡o|aem|Å¡hi| ko|gam|rwa|mmo|boi|e n|ntl|pan|amm|i l|i b|hle|hla|leb| am|Å¡on|jo |len|i s|kop|ret|gel|ing|opa|yeo|dum|sen|e a|ape|ase|kwa|lef|mal|amo|oge|bjo|oik|mon|kga|okg|a f|tsh|boh|uto|ika|ahl|ja |adi|iÅ¡a|gab|hom|abo",
                        ban: "ng |an |ang| sa|ing|san| ma| pa|ane|rin|ne |ak |hak| ha| ka|n s| ri| ke|nga| ng|man|in |lan|a s|ara|ma | ja|n p|n k| pe|g s|g p|pun|asa|uwe|gan|n m|nin|sal|pan| la|alu|iri|sa |lui|jan|adi|a m|adu|uir|ra |yan|mad|kan|wan|duw|ur |tan|g j|anm|we | tu|nma|ika|awi|nge|ah |tur|ih |ban|ka |e h| ne|n n|en |nte|un |ngs|eng|anu|beb|aya|ani|ana|ian|a p|ala|bas|nan|gsa|ngg|uta| da|gar|aka|eba|da |apa|asi|ama|lih|aha| wa|ten| ut| ta|a n|ebe|are| wi|han|aje|keb|oni|nik|ent|aki|uni|ata|wia|iad|g n| pu|jer|ero|ron|aan|k h|saj|din|sak|a t|nus|dan|n w|pen|usa| ba|ngk| pi|ant|sam|e p|taw|n r|ate|wi |nen|i m|ega|neg|iwa|pat|atu|e s|ami|ipu|g k|ina|mar|kat|kal|aga|sar|ran|kin|per|g r|ndi|arg|ar |ksa|e m|ren|nya|al |tat|ida|ela|h p|aks|ntu|ngu|ado|lak| ny|oli|at |wen|ep |i k| se|dos|h s|n l|dad|gka|eka|a k|rep|eda|n h|par|upa|ena|swa| sw| in|nay|ewa|ung|era|ali|a u| mu|eh |nip|r p|e k|n t|k p|ras|i n|uku|n i|wah|eri|g m|pak|n b|r n|ayo|nda|mal|mi |um |dik|os |osa| mi|yom|na |teh|awe|k r|lar|car|tah|sia|g h|ti | hu|ut |huk|kum|sti|ewe|tuk| me|rga|pin|h m| su|gi |ari|n d|a w|ta |uan|gaw|gen|h r|on |war|tut|lah|pag|gay|r m|n u|ada|ira|a b|ngi|end|kew|g t|min|ggi|gda|jag|as |rap|agu| an|e n|ngd|s k|ila|eta",
                        bug: "na |eng|ng | na| ri|ang|nge|nna|ngn|gng|ge |sen|a r| ma| pa| si| ta| ha|ri |hak|app|tau|ak |au |ddi|a t|ase|edd|ale|a n|nap|gen|len|ass|pa |e n|ai |ria|enn|ega| ru|upa|rup|ias|a a|ing|inn|a s|pun|ngi|nin|e p|ini|nai|ga |lal|gi |sin|ppu|are|ae |ye | ye|ana|g n|sed|ada|le | as|i h|a p|ama|g r|i r|man| se|una|ara|ra |di |ssa|ren|a m|pad|e r|ila|ban|asa| ke|san|din|e a|ura| la|ane| de|nas|e s|i a|ipa|pan|u n|ann|i l| ad|da |ala|aji|ole|att| pu| e |ong|i s| ba|pur|aga|lai|i p|lan|g a|ngs|sal|ola|gsa|g s|a b|i n|ppa|rip| we|a k|g m|asi|wed|akk|mas|i m|ril|u r|reg|g p| pe|ung|gar|neg|sse| po|e m|k h| ar|pas| ne|map|ian| te|nar|pol|ett|ran| ja|bas|eba|jam|beb|ena|par| al|sib|ebe|ngk|uru|keb| sa|ain|ttu| mo|aka|unn|add|iba|sa |gan|gka|nen|bbi|i t| at|atu|kan|nan|uan|leb|rus|de |e d|ton|ata|tu |ssi|ro |e y|cen|kun|awa|ell| wa|k r|mak|wa |uwe|ire|ebb|gag|apa|sae| tu| ia|tte|mat|sim| to|a d|o r|ta |nat|ece|tur|la |ie |dec|ko |kel| di| hu|nca|caj|pak|rel|ma |lu |g t|bol|uku|e e|ter|jaj|tta|we |bir|deg|huk|e h|dan|ure|baw|kol|rit|kko|ele|arg|rga|llu|oe |lin|use|ari|auw|pat|mul|elo|ula|iti|gau|an |u p|nga|g y|a h|ekk|sil|ka |e w|ade|anc|iga|sip|ten|a y|e t| me|nre|aja|ji |rek|a w|dde|per|iko|sik",
                        knc: " a |ro |be |nzÉ™|ye |a a| ha| kÉ™|abe|akk| ka|zÉ™ |adÉ™|a n|a k|kki|hak|mbe| la| ad|ndu| nd|wa |ben|en |ma |dÉ™ | ya|o a|É™be|É™ a|ga |e a|É™ga|lan|É™na|lar|aye|aro|kin|inz|rdÉ™|ard|ana|yay| ga|É™la|kÉ™l|ji |awa| mb|bej|eji|kÉ™n| ba|an |uro|du | na| ku|anz|dÉ™g|nÉ™m|kal| nÉ™|e m|na |gan| du| sh|shi|amb|n k| su|ara|u y| ta|so |a d|kam|wo | ye| sa|e h|a s|sur|aso|au | au|iwa|nyi|kur|a l| da|kar| as|dÉ™b|iya|kiw|o k|obe|e s|ada|ama|and|u a|aa |ta |ima|n n|la |É™wa|nga| ci|ba | ab| nz|É™gÉ™| fa|É™nd|ata|ndo|ya |tÉ™ |nza|É™ n|ndi|a g|in |nam| fu|É™ k|aya|a t|tÉ™n|a b|tÉ™g|ru |uru|inb|am |e k|al |ida|mga|aar|a h|baa|É™ s|nab|dÉ™w|dun|asa|nya|owu|gad|taw|o w|gÉ™n|a y|kat|dam| sÉ™|o h|É™ra|e n|awo|ade|É™mk| wa| wo|amg|dÉ™n| tÉ™|a f|ala|i a|zÉ™g|o n|uny|iga|zÉ™n|É™li|wur|u k|o s|wan|za |din|utu|e l|san|i k|uwu|wu |awu|n a|on |de |da |nba|mka|yi |gay|tam| ng|laa|gin|azÉ™|bem|gai|taa|ibe|rad|adi|fut| mÉ™|wow|wak|ali|kun| an|mÉ™r|o t|yab|nad|aim|É™gi|i n| aw|liw|cid|u s|edÉ™|atÉ™|any|do |apt|lka|alk|dar|rta|bed|tu |ela|ndÉ™|uwo|gal|yir|wum|n y|ayi|n d|mma|zÉ™b| yi|nan|ltÉ™|lmu|ilm|mar|bel|raj| il|ero|m a|utÉ™|enz|iro|alw|uma|umm| um|e g|how|kka|o f| ny| ho|fuw|É™ h|ang|tin|zÉ™l|o g|ema|É™n |no |a i|a m|wal|É™ny|iwo|lil|É™dÉ™|É™ f|rtÉ™|hi |diy|mu ",
                        kng: " ya|na |ya |a k| na|a y|a m| ku|a n|a b| ba|u y|and|ka | mu|yin|wan|tu | lu|aka| mp|ve | yi|la |ntu| ki|mpe|pe |nda|a l|si |yan|ana|so | ke|e n|ons|nso|di |da |ndi|i y|u n|lu |mun|alu|unt|ina|e y|nza|luv|ala|uve| ma|u m|ke |za |ayi|sal|o m|ban|ndu|ta |isa|kan|ulu|i m|amb|ma |kim|u k|fwa| ny|nyo|yon|ama|ti |ang|anz|du |kus|o y| me|i n|to |ins|nsi|wa |usa| mo|kon|uta|end|i k|uka| bi|a d| ko|mbu|mos|sa | ve|ika|mu |osi|e k|uti|kuz|imp|a v|e m|und|ind| fw|ila| to|pwa|mpw|ngu|bal|adi|ba | sa|len|sam|sik|mab|tin|vwa|mba|kuk| di|yay|a t|yi | le|ant| ka|ata|isi|olo|kis|mut|ula|lo |bu |su | bu| at|amu|o n|dya|kut|dil| nz|ngi|abu|usu|but| nt|ni |bak|kul|e b|nga|e l|inz|imv|gu |wu | dy|lus|awu| ti|lak|bay|bun|kat|ngo|tal|i b|utu|kak|o k|bim|uzi|uza|mvu| ng|nak|iku|baw|esa|kin|ken|yak|mpa|luz|umu|nu |nta|dis|dik|vuk|u f|tan|sad|ati|nka|ank|luk|mak|ong| mb|ani|i l|lwa|aba|luy|uya|yal|ing|zwa|kuv|idi|ku |ga |zit|bis|uvw|uzw| ni|swa| nk|iti|mef|fun|ibu|nsa|aku|ufu|kub|lam|met|i a|mus|eta|a a|u t|twa|atu|tuk|fum|uko|iki|don|kol|kun|bam|eng|uku|ndo| ns|a s|ela|usi|pam|mvw|u b|i t|zo |anu|tis|uke|sul|te |gid|dib|yam|ilw| mf|ola|umb|uso|kam|gi |mbi|oko|nzi|i s| nd|mfu|luf|dus|bum|lut|mam|ded|wil|tad",
                        ibb: "ke | nd| mm|me | ke|e u|ndi|o e| em|mme|de |en |e n|owo| en| ow|wo |i e|mi |ye |emi|nye| un|e e|edi|ene| ek|yen|eny| ed|e m|nen|une|ana|n e|e o|e i| ye| uk|et |n n|eke|na |e k| mb|em |ne | id| es|un |kpu|ede|iet|ndo| nk|o k|di |kpo|ukp|did|am |an |kie|nam|kem|esi|o u| nt|idu|eme|o n|t e|no |yun|mo | uf|ho |mmo|nyu| in|o m|kpe|o o|sie|oho| kp|do |din|ie |ono|kpa|m e|ri |nkp|dib|on |e a|uke| ki|boh|a k| et|po |ida|dut|m u|ked|ded| ub| of|ond|ru |uru|pur|in |ut |du |eko|a u|ina| ot|mbe|n o|bet|iny|man| ak|op |idi|ikp|i o|edu|kon|ade|om | us|uan|wem|a m|uwe| uw|puk|ak |ode|ro |t m|a e|oro|a n|n k|u o|to |te |bo |akp|ufo|ok |dik|pan|mbo|bio|i m|ide|ini|fur|uri|ban|ofu|ubo|n i|o i|uto|iso|dom|omo|ema|diy|fen| nw|dis| ny| is|ni |usu|n m|u u|fin|tom|eto|pem|ed |m m|ibo|oto|o a|sua|wed|nwe|m n| ut|mde|dud| eb|ara| as|i n|oki| ob|nte|mok| ik| an|kar|m k|o y|t k| on|i u|nwa|n y|asa|ama|re |ufi|uka|io |nek|i k| or|pon|top|sun|ion|se |aha|t o|k n|e y|ere| ef|mba|mad|isu| mi|kor|ra |ian|i a|ka |a a|k m|ko |da |t i|ena|obi| ey|ha |dia|ti |aba|uk |u m|d e|dem|san|a o| se|pa | ab|tod|n u|p m|ude|fok|k u|efe|uku|nti|nka|ibi|son|he |pe |nto|dak|a y| od|nde|eye|anw|ndu|mbu|so |ebi|bie|nda|sin|med|tu ",
                        lug: "a o| ok| mu|oku|mu |wa |nga| ob|ga |tu |ntu|a e|na |bwa|a a|ang|ra |aba| n |ba |a m|wan|a n| ng| ab|li |obu|unt|a k|era|ibw|dde|oba|a b|u n|za |la |mun|ban|ali|ka |emb|iri|bul|ate|mbe|i m| ek|tee|eek|uli| bu|u a|edd|sa | ku|ant|ana|eki|u b|be |dem| eb|ama|n o| om|ira|omu| ki| ed|ye |ala|amu| am|e o|gwa|nna| er|kuk|y o|kwa| en|okw|eer| ly|inz|ula|kus|kir|u e| ba| em|eri| ky|any|onn| wa| ye|ggw|ina|kol|n e|awa| bw|uyi|u k|eka|yo |bwe|ola|o e|usa|o o|kwe|mus|yin|bal|i e|u m|ngi|e m|bir|riz|ere|ri |ebi|kul|aga|nza|kub|ekw| eg|ko |a y|u o|we |kut|mat|e l|e e|a l|aan|ger|no |kan|sin|nka|gir|uso| at|a g|iza|gan|nyi|zes|uku|wo |nge|zib|isa|izi|ya |egg|ufu|rir|lin|wam|wal|eby|a w|i o|bee|oze|esa|eta|iko|ebw| ma|ako|bon|tuu|kin|uki|de |zi |kug|yen|ino|e b|obo|aka|ulu| te|ne |lwa|ma |y e|lye|kuy|nsi|i y|gi |utu|ly |imu|e n|taa|asa|enk|ku |o n|o b|sob|si |una|bun|usi|san|e k| ag|uka|uga|ata| ol|rwa|wen|ing|wat|kik|o k| by|nya|ong|kye|by |kyo| bo|ewa|yam|bye|ubi|ngo|kis|ani|boz|kit|i n| aw|ky | al|sib|muk|awo|uko|umu|ibi|uma|afu|olw|eky|tab|ung|buy|ini|uum|saa|y a|lal|mag|ro |end|add|enn|kib|ens|ole|ni |mbi|o a|i k|gat| og|maw|and|kuu|a z|wet|igi|yig|emu| ne| gw|a t|nzi|n a|gya|amb|uwa|ulw| ey",
                        ace: "ng |an |eun|ang| ha|peu|oe |ak |on |nya| ny|yan| ta|ngo|ung|gon|na |ah | pe|reu| ng| ba| ke|hak|meu|keu| me|eut|at |ure| na|ban|ee | di|teu|roe|ata| ur|ara| be|seu|han|a h| sa|am |dro|eur|um |n n|tie|iep| ma| la|ala|nan|g n|ut |ong|a n|ep |tan| te|tap|jeu| ti|eul|eub|eu |eug| da|eum|eh |euk|ra |ih |n p|uga|ai |n b|a t|e n|lam|eba| se|beb|n t|awa|om |a b| ka|asa| at|eus|and|nyo|oh |ta |ka |h t|n k|p u|man|e t|n d|n h|ana|dan| pi|ape|a s|neu|nda| si|t n|bah|ula|yoe|a k|h n|dum|euh|g d|e p|eng|e b| le| pa|ngs|sia|ran|ma |g k|un | wa|ndu|lan|una|heu|ura|n m|lah|sa |n a| ra|aba|g s|a p|ia |und| je|wa |kat|bak|k n|anj| dr|asi| bu|nga|beu|uny|yar|sya|hai|k m|k t|k a|ama|aan|ek |a m|ok |g h|aka|sab|g p|i n|uta|khe|h p|ue |uka|har|ari|di |e d| su| um|t t|a l|ya |san|e s|gan|uko|gsa|e u| li|kan|bat|lee|aro|ot |n s|leu|ina|h d|lak|oih|yat|n u|kom|pat|ate| ne|ngg|nje|taw|mas|uma|sid|anu|umu|aja|si |uh |h m|rat|aya|sal|et |soe|t b|n l|aga|taa|usi| ja|ute|m p|en |dek|ila|a d|ube|dip|gam|any|lin|tam|don|ika|usa| ji|rak|idr|h b|nus|adi| as|dar|ame|n j|ngk|m n|eup|h h|bue|k h|huk|euj|g b|gar|eka|gah|upa|ile|sam| bi|h s| de| in|mum|â€ti|t h| hu|k k|pho|dil|epâ€|nta| ge|geu|h l|hat|ie |tha|use|ieh|sas",
                        bam: " ka|ni |a k|ka |an | ni|kan| bÉ›|n k| la|i k|ya |la |ye |É”gÉ”|na | ye|bÉ›É›|É›É› |en |li |sir|É› k|ama| ma|ira|a d|ra |ali|â€™a | da|man|a n|a b| i |ma | kÉ›| wa|gÉ” |wal|mÉ”g|ana|n n| ba| ja|É”rÉ”| mi| kÉ”| kâ€™| mÉ”| jo| si|min|iya|dan|len|i m|â€™i |in |kÉ”n|ko |aw |den| sa| o | nâ€™|ara|bÉ› |i n|jam|É”nÉ”| na|É›rÉ›|a s|i j|ani|n b|a m|i d| fÉ›| tÉ›| an|osi|jos|a y|kÉ› |a l|iri| ko| di|É› b|ada|ila|É› m|i t| fa|nÉ” | de| ha|asi|tÉ› |ari|a j|raw|a t|É› s|ale|a f|tig|É›n |aya|dam|a i|i b|sar|si |riy|É²a |n y|nu |inn|e k|É”n |rÉ” |ang|a w|o j|w n|nnu|kâ€™i|nti|nÉ²a|ade|abi|bil|ala|hÉ”r|kal|had|igÉ›|i s|a a|mad| a |aga|u k|kab|a É²|aba| ti|olo| hÉ”|o b|É› j|i f| ta|É” k|aar|baa|É› n|nâ€™a|kun|ugu|iÉ²É›|diÉ²|n j|kâ€™a|a h|rÉ› |ati|É” m| se| cÉ›|É²É”g|bÉ” | tÉ”|i y|lan|i h| É²É”|tÉ”n|don|nÉ› |inÉ›|ga |i l|É²É› |ile| fo|o k|É› l|nna|ili|un |gÉ”n|maa|fÉ›n|n d|ant|n i|aay|go |da | jÉ›|u b|ri |rÉ”n|aka|lak|É”nÉ²|e m|É” b|nin|nw |cÉ› |w k|yÉ”r|n o|o f|nga|jo |o m|nen|nâ€™i|on |É› t| ku|o l|igi|É²É›n|anb|fÉ› |É” s| bÉ”|n m|e b|afa|nka|n f|nma| fi|â€™u |É” n| É²É›|fan|i É²|ti |a o|dil|É› d|uya| sÉ”|ago|É› y|e f|É›mÉ›|mÉ›n|aju|e d|bÉ›n| jÉ”| fu|til|bag|fur|n t|uru|kar|atÉ”|be | dâ€™| du|dâ€™a|oma|lom| u | do|riw|taa|w l|mÉ› |gÉ› |imÉ›|n w|iir|nni|iim|amu|so |bal| É²a| bâ€™|gu |É›É›r|â€™o |iwa|n s|wol|ele|É²an",
                        tzm: "en |an | ye| d | n |ad |ur | ad|n i| s |agh|hÌ£e|n t| i |dan| ta| lh|lhÌ£|d y| gh|ell|n a|ra |Ì£eq|i t|eqq|s l|mda|ett|n d|d t|akk|la | ti|qq |hur|di | di| am|gh |ghu| is|t i|r s|in |nag| na|a y|is | te|a d|n n|yet|n g|ll |ara|ghe|ma | we| ar| wa|n s|l a|n l|sen|edd| ak|it |li | le|dd |ull|lla| id|d a| ur|rfa|erf|kul| yi| ku|as | se| ma|zer|amd|a n|lli|lel|men|t a|kw | de|t t|nt |kkw| im|fan|a i|a t|eg |n w|i d|q a|rt |ar |gar| ag|es | tl|ize|emd|i w|i l|deg| as|ken| dd|n u|lan|d i|a a|wak|tta| tm|d u|er | tu|wem|at |ddu|tle|w d|n y|t n|sse|r a|mur|s t|tam|gi | tt|yes|wan|r i|tim|na |wen|twa|d l|ttu|kke|wa |nen| iz|ihÌ£| u |win|d n|ame|s d|ent|dÌ£e|hel|a l|hed|ess|t d|mga|arw|i n|hÌ£u|mi |mad|agi|i g|der|udd|s n|rwa|Ì£en|awa|i i|ya |h d|iya|s y|msa|uhÌ£|idd|urt|un |n m|ane|em |sef|lsa|ili|q i|qan|leq|siy| ik|el |err| in|yed| la|ant|den|tag|man|g w|mma|yen|len|tmu|i u|aw |taw|r y|wad|edm|sÌ£e|hla|t l|Ì£er|ala|asi|ef |u a|tte|ddi|ttw| lÃ¢|imi|l n|til|al | ne|am |Ì£ud| lq|idÌ£| ya|dda|Ì£rÌ£|med|ren| ss|gra|m a|ghl| il|chu|tem| ll|khe|way|eln|lna|ana|ukl|duk|gha|lt |ni |all|i a|tal|ray|nes|s k|tes|naw|ert|ila|awi|lqa|kra|anu|nun| kr|ikh|ezm|n k|iwe|iwi|ima|net|ser|s u|ir |yeh| an|aya|ehw|hwa|esk|dde",
                        kmb: "a k| ku|ya |la |ala| mu| ki|a m| o |u k|ni |o k| ni|kal| ky|mu | ya|lu |dya| dy|a o|ang|kya|a n|tok|i k|oso|so |kwa|nge|xi |na |elu|nga| kw|wa | wa|a d|hu |kut|thu|uka|oka|mut| ka|a i|mba|uth|ka |gel|ba |u m|u y|ku |ene|u n|ga |kuk|ban|ixi|i m|e k|wal|oke| mb|kik|kel|ne |u w|ela|uto|i y|ana| ng|iji|a y|kit|ma | ji|nda|ngu|yos|kum|ulu|ji |i d|isa|und| it|and|ong| mw|u i|iba|ika|wen| di|ten|ilu|ila|ndu|ye |sa |kub|aka|ena|amb|ung|olo|a w|ngo|kil|oxi|lo |muk|ke |sok|du |mox|ate|o w|kus|wat|ta | wo|gu | ph|u d|ito|ita|e m|alu|a j|kis|tun|uma|wos|luk|o m|san|mwe|a a|di |imo|ula|wan|nji|jix|i j|a t|kij|idi|kan|uku|gan|kul|e o|kye|adi|ato|o i| ja| ix|da |nu |o n|uta|kud| yo|i n|udi|ki |su |tal|a u|lun|e y|u u| ye|jin|iki|pha|hal|wij|we |a s|lak|ikw|go |tes|fol|itu|eng| ke| uf|yen|ing|yat|ele|utu|kyo|o y|kwe|kwi|uba| en|kib|ite| we|dal|i o|yan|ge |eny|tan|uki| ik|dib| im|esu|lon|kat|atu|e n|ja |i u|jya|vwa|kam|i w|ute|ini|uke|lel|esa| se|xil| ut|fun|unj|ufo|mbo| a |uso|kim|mun|u p|nen|ukw|u o|i i|umu|han|gon| il|lan|ata|te |i a| ko|jil|o a|nde|nyo|eka| at|o d|exi|ijy|tu |usa|tul|kuz|ilo|dis| un|u j|dit|ufu|ote| ib|ivw|mwi| bh| ha|se |bul|ubu|win| os|imb|bha|ama| to|axi|inu| uk|sak|kos|bot",
                        lun: "la | mu|ng | ku|a k|tu |ntu|chi| ch|a n|aku|di |mun|ma |unt|a m|g a| a | na|ela|ndi|aka| we|ima|jim|shi|eji|u w|i k| ni|ind|wu |i m|a w| in|a i|u m|hi |awu|na |kul|wej|lon|cha| ja|sha| kw|a c|i n|nak|ala|mu |wa |ing|ka |ung|kum|a h|ulo|him|mbi|muk|u c| wa|hak|iku|nsh|yi | ha|bi |amu|imb|ewa|wen|kwa|ang|adi|idi|kut|esh|ana|g o|ila|ha |tun|u j|ong|nik|kuk|tel|ovu| ov|u n|han| an|ate|vu |a a|kal|ula|kwi|jak|u a| ya|a y|ilu|u k| he|ham|and|uch|kus|ond|eka|hel|kew|zat|del|hin|uku|nde|i j|enk|i a|uka|eng|ach|lu |nat|nji|ona|mon|awa|nke|umo|ins| yi|a d|ama|udi|wak|i h|ati|i c|wan|ta |bul|mwi|ata|ayi| ak|uma|i y|ina|ich|itu|uza|kuz|nin| mw|ku |kin|wun|sak|naw|nyi|ni |ant|muc|wal|ish|u y|mul|kud|waw|uke|wes|uki|i i|kam|yid|wit|da |akw|kad|yan| di|ken|uta|ika|imu|iya|nda| ns|mbu|ya |ule|dil|iha|kuy| ko|hik|eni|ahi|kuh|si |kun|ush|umu|atw|g e|his|dik|ji |any|li | ye|dim|kos|osi|hih|wat|eyi|ney| ne|amb|twe|til|wil|nu |kwe|u h|etu|tiy|ja |nan|ash|mwe|win|was|hit|iti| wu|iwa|wah|lem|g i|tam|din|hu |haw|nga|kay| ka|hid|yin|isa|iki| ma|jaw|jil|che|mpe|omp|eta|tan|jin|hiw|usa|umb|eme|inj| hi|ulu|ubu|nam|wik|mpi| da|ale|ite|tal|twa|ahu|end|nka|mba| at|ga |mes|dic|iwu|yej|kan|kuc|iyi|sem|emb|lun|una",
                        war: "an |ga |nga| ka| ng| pa| ha|han|pag|in |ata| hi| an|mga| mg| ma|kat|hin|a m|ay |a p|ya |ung|a k|gan|on |n h|n n|ug |n p|n k| ug|n m|da |a h|n i|ha |iya|adu|dun|tad|a n| ta|ada|sa | iy|ara| na| di| o |pan|may|a t|ang|ud |ana|n a|o h|o n|taw|n u|ags|yon|y k|al |tag|asa|kad|o p|man| ba|awo|gsa|wo |ag |gad| in|a a|a u|ina|syo|a i|a s|od |ing|agp|ala|asy|ngo|n b|ali|nas|san|aka|a d|ra |g a|was|g h|aha|gpa|agt|to |ad |n t|tun|ng |usa| wa| tu|ini|iri|tan|ahi|kan|ray|nal|war|dir|i h|gka| us|god|g p|ri |a b|nan|ida|o a|i n|bal|y h|kas|uga|hat|tal|nah|awa|ni |pin|uha|buh|o m| bu|gud|aba|at |no | pi|bah|g m|ili|him|aya|atu|d h|agi| su|agk|lwa|mo |d a|alw|sya|uma|ano|int|kal|upa|mag|yo |o u|agb|n d|asu|lin|a o| ko|ona|did|hiy| bi|as | ki|l n|sud|iba|hi |o k|kon|ira| la|gba|pam|amo|g i|ton|gin|n o|uro|ho |os |la |g k|gtu|d m|aud|aag|t h|gi | gu| ig| ir|n g|abu|aho|ami| sa|ati|par|kau|ern|ban|tra|gar|ama|ras|yan|adt|tum| un|ka |aga|aso|api|dto|kin|tik|mil|iko|rin|sal|ika|a g|ila|mah|lip|rab|non|agu|ak |dad|lau|d n|ko |it |pak|n e| ti|una|i m|lig|s h|bay|ro |sug|mak|n w|naa|g n| so| ag|yal|nte|lal|ba |aup|lan|ihi|y b|kah|tub|bye| am|ari|yer|uka|ani|uyo|oha|ito|n s|upo|ent| pu|sam|iin|til|mat|ato",
                        dyu: "aâ€™ | kÃ | kÃ¡|kÃ  |ye | ye| Ã  |yaâ€™|ni | bÉ›|kÃ¡n|la |Ã¡n |ya |É”gÉ”| ni| la|É›É› |kÃ¡ |na |a k| mÉ”|bÉ›É›|mÉ”g| i |nya|Ã¡ k|n k|É”rÉ”|â€™ k| mÃ­|â€™ l| kÉ›|mÃ­n|â€™ y|Ã­n | mÃ |Ã  k|É› k|â€™ m|ma | ya|Ã  m| wÃ¡| jÃ | nÃ­| be|be | Ã² |i y|nÃ­ |iâ€™ | lÃ¡|ra |iya|É›rÉ›|nâ€™ |n n| hÃ¡| kÉ”|te |wÃ¡l|Ã ma|jÃ m| te|Ã¡li|a b|ima|man|Ã  Ã |hÃ¡k|e k|lim| kÃ³|É”nÉ”|mÃ  |n b|i k|É›n |gÉ” |e b|n y|É”â€™ |ana|â€™ n|oâ€™ | sÃ |É› y|â€™ s|kÉ› |Ã  l|rÉ” |e Ã |kÉ”n|liâ€™|Ã ni|a m| dÃ­|aw |rÉ› |É” k|â€™ b| bÃ¡|Ã  b|a Ã |Ã¡kÉ›|riy|e s|gbÉ›|nÉ” |a j| bÉ”| Ã¹ | sÉ”|bÉ›n| sÃ­|Ã  y|sÃ r|e m|ara|kÃ³ | fÃ |Ã  s| Ã n|dÃºn| lÃ |en | sÃ¬|anâ€™| fÉ›|Ãºny| dÃº|a n|a y|É›ya|Ã ri| gb|in |kÉ›r|kan|â€™ t|dÃ­ | cÉ›|nin|yaw| tÃ¡|naâ€™|e w|mÃ¬n|Ã¬na|lÃ¡ |É”n | mÃ¬| É²Ã¡|Ã  d|ali|n m|yÉ›r| yÉ›|sÉ”r|gÉ”â€™| tÉ”|ama|bÃ¡a|nga| dÃ |i m|i Ã |sÃ¬g|Ã¬gi|yÉ”r|gÉ”n|w n|Ã¡ar|a d| sÃ©|Ã¡na|Ã ng|len|Ã  i|si |É›ra|Ã¡ d|bÉ›r|a s|bÉ” |Ã³lo|a h|i b|É” s|É› l|den|É›â€™ |Ã  t|Ã ra|É”ya|gÉ”y|kÉ›y|Ã³go|uâ€™ |aya|â€™ d| mÃ¡| dÉ”|raâ€™|a f|É”ny|â€™ f| Ã³ |ili|sÃ­ | se|se |ko |cÃ³g|a t| cÃ³|dÃ©n|hÉ”r|É”É”n| hÉ”|maâ€™|lan|ika|ina|kÃ l| a |Ã la|n s|É› m|i t|rÉ”n|tig|Ã nt|a w|tÃ¡ |e n|i s|Ã  n|nna| Ã­ |â€™Ã  |Ã² k|a g|n d|an |ga |fÉ›n|É” Ã |li |e i|É›É›É›|kÃ©l|ati|soâ€™| yÃ©|i f|Ã¡ki|dÃ n| kâ€™|i n|kâ€™Ã | nÃ |Ã­ i|Ã­ Ã |lik|yÃ© |igÉ›|eâ€™ |e Ã²|go | lÉ”| na|É” b|w l|Ã­ t|rÉ”â€™| dÃ²|Ã² b|min|ti |Ã ga|ow |n t|mad| mi|Ã² l|Ã©le|gi |É²Ã¡n|Ã­ y|kil|dÉ” |nba|i É²|gu | wÃ³|É›li|i l|Ãºru",
                        wol: " ci|ci | sa|am |saÃ±|aÃ± | na| ak|ak |lu |it | mb| am|aa |na |al |Ã± s|Ã±u |ne |mu |te |pp | ne| ko|m n|i a| ku| Ã±u| te| mu|baa|u n|ko |u a|mba|a s|e a|ay | wa| lu| do|ar | ni|u m|nit|oo |Ã©pp| ta|oom|gu |t k|i b|ku |u k| it|Ã©ew|rÃ©e| rÃ©|u y|xal| aa|kk |i d| bu|doo|i w| bi|war|u c| yi|aay|llu| li|fee|loo| xe| xa| ya|taa| di|yi |ama|on |u j|yu |eex|ew | yo|boo|xee| bo| wÃ |Ã ll|wÃ l|mi |o c|ir |mÃ«n| mÃ«|yoo|ul | gu|nn |en |oot| du| so|oon|e m|dam|een|u d|i n|uy |eet|i m|ara| ba|bu |a a|ata|okk|aad| lÃ©| ay|ju |ada| nj|nam|und|axa|dun|m a|enn|r n|aar|ex |taw|ala| jÃ | pa|et |di |Ã«n |ana|ral|ota|k s|awf|naa|wfe| gi|u l|igg|aju| dÃ«|ma | aj|ti |u t| se|ax |gÃ©e|mbo| ja|ool|bii|li |a m| ke|see|m c| ye|i l| ng|yam|ngu| yu|w m|an |ken|n w| lo|i s| me| de|m m|i t|om |u x|n t| an| mi|jaa|laa|ee |bok|lig|p l|n m|t y|ggÃ©|k l|a l|lÃ©p|Ã pp|jÃ p|aam| jÃ«|aax|ekk|nd |gÃ³o|ewa|ndi|tax|a d| da|amu|Ã©ey|gi | su|k c|n n|l b|o n|k t|p n|jÃ n|Ã ng|gir| jo|a c|n a|n c|Ã±oo|i Ã±|a n|kaa|ba |m g|le |une|kan|e b|la |nda|lee|i j|ang|aat|k n|ey |ant|iir|a y|l a|e n|nan|aÃ±u|men|j a|ok |k i|nee|l x|omi|i c|oxa|aw |g m|dox|nte|opp|u w|ngi| mo|omu|y d|are|i k|aan|em |du |a b|njÃ |Ã± Ã±| ti|m r|kun|ddu|ali| sÃ«| la|eg | ma|Ã«ra|ng |xam|mul",
                        nds: "en |un |at |n d| da| de| un|een|dat|de |t d|sch|cht| ee| he|n s| wa|n e| vu|vun|ech|rec|ht |er |ten| to|tt | si| re|ver| ge|nne|t w|n w|ett|n h|n v|k u|n u| el|gen|elk|lk |t u|ien|to |ch | ve|wat|sie|war|het|it | an|n f|ner| mi| in|ann|rn | fÃ¶|Ã¶r |r d| fr|t r|hte|orr|ich|fÃ¶r| sc|rie|eit| or|den|nsc|ege|fri|rer| st|t g| up|aar|t a|nd | is|ll |rre|is |up |t e|chu|rt |se |ins|daa|lt |on |t h|oon|che|all|n g| ma|rrn|min| se|ell|hei| na|t s|n i|n a|nn |len| sÃ¼|in |rd |nen| we| bi|n m|e s|ven|ken|doo|sse|ren|aat|e m|ers|n t|s d|n b|lle|Ã¼nn|t t|n o|ik |kee|e g|t v|n k|hen|arr| dr|heb|lie|ebb|e v| al|e a|llt| ke|hn |he | wi|cho|ehe|ok |ard|sta|men|ill|gel|tsc| ok| do|an |dÃ¼s|ene|erk| gr| dÃ¼|weg|ie |ede|ieh|r s|sÃ¼n|Ã¼ss|und|raa| dÃ¶|rÃ¶f|drÃ¶|t m|ats|Ã¶ff|e f|Ã¼nd|e w|dÃ¶r|ens| gl|rch|sik|ig |kt |Ã¶rc|ere|gru| Ã¼n|ff |ahn|nre|mit|st |al |aal|hon|ert|kan|nat|der|dee|enn|run| so|eih|lic|ehr|upp|iht|nwe| fa|pp |eke|e r|unw|t n|taa|hup| ka| be|bbt| wo|p s|el |as |t f|bt |e e|nee|maa|huu|eve|nst|ste|mee| ni|inn|n n|ern|iet| me|hÃ¶r|dde|ent|n r|t o|Ã¶ve|are|arb|ite|ter|l d|ach|nic|bei| as|lan|t b|d d|t i|ang|ame|rbe|utt| ut|pen| eh|uul|iek|hr | ar|r t|ul |e d|art|n Ã¼|one|eer|na |nte|mut|ete|Ã¼d | mu|Ã¼Ã¼d|lÃ¼Ã¼",
                        vmw: "tth|la |thu|a e|na |hu |kha|a m|we |ana| mu|a o|awe|ela|ni |ala|hal|edi|to | ed|ire|dir|eit|ito|rei|ya |a n|wa |mut|a w| wa| ni|akh|aan|u o| on|o y|okh|utt|a a|haa| nâ€™|wak|nla| wi|ari| yo| si| ok| ot|iwa|ka |iya| sa|ne |apo|lap|ale|le | oh|oth|att|the|mul|aka|oha|kun| el|aku|oni|mwa|ha |e s|unl|tha|ott|ele|ett|e m|o s| va|ene|e n|e o| ya|oot|hav|ade|ihi|iha|ihe|de |o o|e a|eli|hen|amu|e w| aw|hel|dad|ra | at|po |i m|lel|wi |o n|owa|e e|ula| en|ta |o a|i a|moo|waw|ina| ak|ota| mo|sa |a s| so|han|ara|var| kh|a i|ri |aya|itt|anl|row| mw| et|i o|ika|â€™we|nro|i e|nâ€™a|her|lan|nak|sin|lo |elo|vo |u e|eri|nâ€™e|oli|thi|u a|aâ€™w|ida| ah|a v|liw|kan|him|lib|yar|riy|ona|onr|erd|wal|hiy|aa |ibe|rda|wan|ber|era|avi|hiw|nna|i v|hwa|lei|mih|vih| ep|khw|ntt| na|ko |ia |sik|aha|iwe|e k|hun|una|mu |avo|ikh|laa|riw| ma| an|e y|kel|â€™el|huk|u y|phe|kho|pon|i s|nid|upa|ath|ila|yot|eko|ali|tek| es| it|o e|uku|wih|nan|tte| a |mur|â€™at|i w|ani|ulu|nih|wel|lik|ira|ane|a y|nkh|saa|ro |nâ€™h|wir|i n|ile|som|u s|hop|inn|ei |ont|kum|yaw|saw|iri| eh|tel|tti|ola|aki|mak|ret|uth|nnu|a k|nuw|ahi|enk| il| nn|ena|va |yok|ute|soo| pi|lal|ohi|hik|mpa|uwi|lih|har|kin|aph|ma |ope|man|ole|uma| oo|mpw| vâ€™|nal|ehi|nin|uni| ek|khu",
                        ewe: "me |ame|e a|le |wo |kpÉ”| am|É–e |Æ’e | si| me| wo|be |si | le|sia|esi|la | la|e d| É–e| kp|pÉ” |aÉ–e|e l| be|e w| Æ’e|e e|dzi|na |nye|a a| du|ye | Å‹u| na|duk| dz|ukÉ”|e s|ome| mÉ”|e n| aÉ–|kpl|nya|gbe|e b|e m|ple|É”kp|É” a|pÉ”k|woa|É” m|kÉ” |evi|nÉ” |Å‹u |ke | nu|É” l|mes|awo| o |iwo|É”nu|e É–| ab|ya |ekp|e k|É”wÉ”|u a| al|nu |ia |É–ek|e Å‹|kpe|É”me|o a|iny|zi |dze| ny|o k|eme|eÆ’e|o n|iam|egb|mÉ”n|blÉ”|i n|wÉ” |a m| eÆ’|o d|alo|siw|É”É–e|lo |o m|eke|e g| bu|eny|ubu|Å‹ut|É” s|bub|lÉ”É–|enÉ”|meg|akp|abl| ha|e t| ta| go|mek|eÉ–o|ukp|li |nÉ”n|to |any|a l|etÉ”|É” Æ’| ey|e h|nuk|gom|É” É–|É”e |bÉ” |É–o |i s| to|anÉ”|a k|É”nÉ”|e x|awÉ”|e Æ’|tÉ” | Æ’o|mev| es| É–o|É–es| xe|i w|tso| wÃ²|wÉ”w|mÉ” |iaÉ–|i l| ag| li|aÌƒ |o Æ’|odz|a s|agb|yen| ts|bu | he|bet| gb|o e|ewo|a e|É”na|i d|ti |ele|dÉ”w| ka|i a|uti|peÉ–|ta | an|afi|a Å‹|a Æ’| ad|Æ’om|se |É”wo|xex|exe|oma| ma|vin| dÉ”|o l|wÉ”n|eye|a n|i t|vi |É” b|so |edz|gbÉ”|É–ev|ado| se|É” n|oto|ene|eÉ–e|xÉ” |nan|É–od| af|ben|zin|ee |de |É–ok|dzÉ”|gÉ”m|adz|É” k|wom| gÉ”|uwo|i É–|a d| vo|a t|o g|i b| xÉ”|oÉ–o|i m|e v|ats|o Å‹|sÉ” |ovo|i e| at|vov|ne |É” e|kat|o s| ne| aw|da |wÃ²a|eÅ‹u| as|asi| el|o t|yi | sÉ”|men|a b|ze |mee|uny|te |dom| ak|man|eÌƒ |i o|ie |ana|ata|ui |axÉ”|u k|É–oÉ–|tsi|ema|rÉ”Ìƒ|ded|É” g|ena| en|kÉ”m|met|u s| eÉ–|oku|kui|mew|xem",
                        slv: " pr|in | in|rav|pra|do |anj|ti |avi|je |nje|no |vic| do|ih | po|li |o d| za| vs|ost|a p|ega|o i|ne | dr| na| v |ga | sv|ja |van|svo|ako|pri|co |ico|i s|e s|o p| ka|ali|stv|sti|vsa| ne| im|sak|ima|jo |dru|nos|kdo|i d|akd|i p|nja|o s|nih| al|o v|ma |i i| de|e n|pre|vo |i v|ni |red|obo|vob|avn|neg| bi|ova| iz|ove|iti|lov|ki |jan|a v|na | so|em | nj|a i|se | te|tva|oli|bod|ruÅ¾|e i| ra| sk|ati|e p|aro|i k| ob|a d| Äl|eva|rÅ¾a|drÅ¾| sp|ko |i n| se| ki|ena|sto|e v|Å¾en|nak|kak|i z|var|ter|Å¾av| mo|di |gov|imi|va |kol|n s| z |mi |ovo|rod|voj| en|nar|ve | je|pos|a s|ego|vlj|jeg| st|h p|er |kat|Älo|ate|a z|enj|n p|del|i o|lja|pol|Äin|a n|ed |sme|jen|eni| ta|odn| ve| ni|e b|en | me|jem|kon|nan|elj|sam|da |lje|zak|ovi|Å¡Äi|raz|ans|ju |bit|ic | sm|ji |nsk|v s| s |n v|tvo|ene|a k|me |vat|ora|krÅ¡|nim|sta|Å¾iv|ebn|ev |ri |eko|o k|n n|so |za |iÄn|ski|e d| va|o z|aci|cij|eja|elo|dej|si |nju|vol|kih|i m|nst|kup|kov|uÅ¾i|la |mor|vih| da|h i|lju|otr|med|o a|sku|rug|odo|ijo|dst|spo|tak|zna|edn|vne|ara|rÅ¡n|itv|odi|u s|Äen|boÅ¡|nik|avl|akr|e o|vek|dno|oln|o o|oÅ¡Ä|e m|ta |viÄ|bi |pno|Äno|mel|eme|olj|ode|rst|rem|ov |ars| bo|n d|ere|dov|ajo|kla|ice|vez|vni| ko|ose|tev|bno|uÅ¾b|ava|ver|e z|ljn|mu |a b|vi |dol|ker|r s",
                        ayr: "apa|nak|aka| ja| ma|ata|ana|aÃ±a|asi|aqe|cha|aki|Ã±ap|jha|mar|aw |kan|ark| ch|una|aru|paw|ti |jh |pat|jaq|rka| ta|a j| ar|hat|ama|tak| wa|ach|iw |a a|ani|a m|spa|na |kap|ki |taq|pa |jan|sa | uk|qe |kis|kas|ha |ina|niw|may| kh| am|at |ati|pan|i j| ya| mu|iti|ka |ayn|t a|as |amp|ch |a u|an |pjh|yni|mun|iÃ±a|uka|ajh|ru |w k|hit|Ã±an|h a|is |isp|qen|khi|isi|has|ejh|e m|sis|atÃ¤|oqa|nch|rus|kam|siÃ±|han|mpi|kaÃ±|qha|sin|asp| in|ham| uÃ±|Ã±at|haÃ±|qat| sa|yas|yat|ita|Ã¤Ã±a|ska|tap|asa|kha|sit|tÃ¤Ã±|tha|arj|ma |a t|ta |tas|nka|sti|iri|sna| ji|a y|ara|pas| as|Ã±ja|rjh| ku| ut|hap|tat|kat|tis|pi |apj|jam|noq|aya|i t|i u|ukh|ura| ka| ju|ans|qas|uÃ±j|asn|a c|nin|aqa|kaj|naÃ±|sip|i a|us |i m|kun|w u|anc|api|ino|ili|uya|pac|tan|jil|Ã±a |lir|utj|w j|s a|ipa|chi|kiw|w m|kak|muy|pis|rak|hac|isa|njh| lu|mas|amu|ena|nsa|w t|nan|ali|s j|ink|tay| a |upa|wak|a k|way|wa |in | ay|taÃ±|s m|jas|mp |lur|ank|khu|raÃ±|h j|t m|iru|eqa|ayt|yt |heq|che|anq|en |lan|rin|ipj|i c|mat|qpa|aqh|tja|awa|uki|k a|qej|anj|sap|pam|usk|yaq|kar|nip|llu|wal|run|yll| aj|lin|a w|ayl|n m|jac|isk|naq|ast|h u|ni |ath|a i|ayk|jhe|aqp|h k|uch|inc|hus|sar|s u|s w| pa|nap|ap | un|ak |n j|tir| ak|ns |s c|ust|arm|ask|war|ri |man|pit|qer|juc|sir|n w|hik|ika",
                        bem: " uk|la |uku|wa |a i|a u| mu|kwa|ali|ya |shi|a n|amb| na|sam| pa|ula|ta |nsa|fya| no|nga| ya|mbu|bu |ata| in| ku|a m|lo |se |nse| ba|ntu|kul|ons|ala|ang|ins|aku|li |wat|mo |tu |alo|a a|ngu|ili|nok|ika|na |nan|a p|ing|a k| al|mu |gu |o n|sha| ca|ila|oku|e a|ikw|yak|ka |lik| um|ana|lin|yal|ga | ci|aba|lwa|ku |ish| fy|uli|a b|u u|unt|i n| on|kal|lil|u y|ba |hi |ukw|amo|po |ulu|kan| sh|kup|ko |we |and|a c|aka|le |u n|cal|o u|ha |ile|ama|umu|bal|kus|akw|u m|mul| if|o a|kut|nsh|o b|ung|apo|e n|kub|mun|uci|yo |mbi|nka|cit|bul| ab|any| bu|pa |ne |u c|u b| ka|abu|ndu| fi|e u|a f|ton| ne|ant|no |i u|u a|ban|o i|cil|cin|ify| ng|pan|tun|gan|nda|kuc|kwe| ns|o c|ngw|o f|ans|fwa|a l|pam|tan|ti | am|kum|kuk|lan|u s| is|wil|du |nya|und| ic|e k|wal|aya|bi |bil|ubu|ush|fwi|int|nta|utu|twa|wab|afw|ela|o m|uko|ako| ta|lam|ale|gwa|win|u k|apa|ma |onk|way|kap|i k|imi|a o|upo| im|iwa|mba|o y|ngi|ici|pak|lul|ind| ma|e p|de |nde|gil|e b|iti|uti|ilw|a s|imb|da | li|uka|hiw|umo|pat|afu|kat|ine|eng|fyo|bun| af|uma|kuf|alw|til|ita|eka|afy|mas|e y|tul|but|nto|usa|kwi|mut|i i| ak| ap|bom|umw|sa |ont| wa|ilo|u f|baf|fik|ina|kab|ano|pal|ute|nab|kon|ash|bwa|ifi| bo| bw|lya|atu|ubi|bik|min|aik|cak|nak|men|ubo|ye |hil",
                        emk: " ka|a k|ka | la| a |la |an |kan| ma|a l|ni |ya |na |ama|a a|lu |n k| di|É›É› |di |a m|ma | bÉ›| ja|ana|a b|aka|bÉ›É›|man|iya|a d|ara|dÉ” |jam|alu|en |a s| si| sa| mÉ”|mÉ”É”|ani| ye| dÉ”| tÉ›|ye |i s|i a|den| ba|riy|tÉ› |sar|É”É” |da | al| kÉ›| ni|ari|ila|a j| i |a t|n d|É›n |É²a |kak|ra |ada|É› k|i k|i d|len|u d|ele|nna|sil|n n|n m|olo| se| bo|ade|aar|É”dÉ”|É› d| kÉ”|É” a|ank|É”n | fa|fan|a É²|se |lak|lo | da| na|bol|kel|e k| wo|i m|aya| ke|ko | ad| mi|nu |baa| sÉ”|dam|nda|É”nÉ”|mÉ›n| ko|a f|and|ala|É› y|É” b|É› s|le |É› m|i l|i b| wa|n s|a i| de|ina|li |É”ya|mad| mÉ›|aba| le|n a| ha|a n|É” s|u l|nÉ²a|han|n b|sÉ”d|dÉ”n|kÉ”n|kÉ› |ata|nÉ” |kar|dan|in |u k|É” m|kÉ›d|É›da|i j| su|nnu|a w|É” k|nka|lat| gb|É²É”É”|aji| an|a h|nin|olu|u m|kun|a g|on |asa| ku|ibi|jib|don| lÉ”|i t|waj|bÉ›n|É›nn|ban|É”rÉ”|wo |ran|si |É› b|É›nÉ›|É› l|mak|suu|e m|ii |i f| É²i|e a|o m|É²in|enn|usu|ba |É›dÉ›|yan|taa|nan|u b|u t| É²a|nal|nba|É²É› | É²É”|law|ati|nad|rÉ”y|hÉ”r|a y|iri|sii| hÉ”|mir|ti |enÉ²|bÉ” |u s|n t|u y|ini| te|ta |kol|enb|awa|bat| fu|nki|kil|ili| du|bar|É› j|fÉ›n|fÉ› | do| dÉ›|gbÉ›|su |uus|aam| ta|afÉ›|may|lÉ” |nni|É”nn|lÉ”n|maf|o a|e d| bÉ”|din|sab| fÉ›|É” j|o y|i w|tan|É”É”y|dÉ›É›|bÉ›d|kad|min|É”lu|dal|É”É”l| tÉ”|É”É”n|e f|biy|ali|e b|kÉ”d|te |wol|bi |e w| mu|ida|du |ant|nÉ›n|dÉ› |É› a|dah",
                        bci: "an |be | be| É” |un | i |ran|sra|wla| sr|kwl|in |la | kÉ›|n b|kÉ› |n s|n k| kw| ng|n n|lÉ› |a b|n m|le | nu|a k|nun|i s| a |man|n i|É›n |e k|É› n|kun|n É”|mun| ni| ti| mu|nin|nga|ti | n |É› É”|e n|É” n| su|ga |É” f| fa| ku| li|e s|su |a n|a s|a É”|É› b|i n|e a| sÉ”|wa |sÉ” |i k| ma| le|É› i|tin|É” k|di | at|ata|ta |É” l|fat| mÉ”|ati|mÉ” |lik|akw|É› m| sÉ›|lak|e w| sa|dÉ› |ndÉ›|mÉ›n|i b| mm| yo|iÉ› |ba | nd|nvl| nv| kl|vle|sÉ› |a a| mÉ›| fi|ke |und| wu|É› s|n a|mml|liÉ›|mla| ka|ike|yo |É” t|ngb|i a|e b|a m| an|É” É”| di| yÉ›| si| bo|e t|ndi|bo | ye|o n|n t|e m|fin|e y|n f|sa |É” b| fÉ”|dan|n y|fa |i i|uma|yÉ› | ju| ny|É” i|nan| na|kan|É”un| tr|wun| b | o |n l| aw|a y|b a| wa|fÉ”u|i f|É› a|ing|ge |uÉ› |i w|a w|nge|klu|ka |gba|e i|awa|o m|jum|É” y|É› k|wie|a i|ie | fl|e f| wl|tra| ba|lo |lun| ak|ang|ye | wi|e l| kp|uan|i m| uf|uwa|n w|sie|flÉ›|kpa|alÉ›|luw|flu|o i|kle|ua | da|nyi|nzÉ›|wuk|É” s|wo |e É”|ika| wo|wan|bÉ” |ian| bl|wlÉ›| bu|anz|o É”| af|aci|u b|bu | ya|É› w|ufl|bÉ”b|te |zÉ› |É” d|a t|elÉ›|i t|ci |nua|fuÉ›|É”bÉ”|u i|anm|i l| w |w a| bÉ”|o b|lu |se |u m|ilÉ›|iÉ›n| ja|a j|afi|i É”|n u| se|unm|nda|yek|bÉ›n|gbÉ›|eku|É› l|nma|kac|u s|san|ko |o y|o s|a l|u n|si |anu|aka|any|É› d| ko|n j|É” w|u a|fi | yi|anw|i j|uka|fiÉ›|a d|o a|lel| kÉ”|É”lÉ›|É”n |a f",
                        bum: "e a|an |od | mo|e n|ne |am |mod|se |e m| me| ab|ai | ai|na | os|e e| na|a a| ak| ng| an|ose|a n| y | en|nna|y a| nn|le |nam| dz| be|a m|d o|nde|i a|iÃ± |n a|ane|i n| a |de |ie |ele|end| as|e d|nyi|bel|abe| ya|ven|a b|li | bo|mve|ki |asu|ya | et| ay|ge |da |su |be | bi|ngu|bia|i m| e |m a|ia | mi|ul |yiÃ±|gul|ene|eny| ki|oe |bod| mb|ili|dzi|e b|yia|ian|ebe|i e|en |l y|ala|og | mv|e y|oÃ± |ege|nge|Ã± a|om |ayi|la |dzo|mem|ve |a e| nd|bog|eti|Ã± m|d m| ma| fi|fil|nda| ek|tob|bo |e k|emv| at| te|n e|Ã± n|o a|min| ny|m e|e v|ban|fe |abo|woe|u m|uan| to|g a|ga | fe| wo|e f|ben| nt|mbo|abi| se| si|nga| da|lug| ve|oan|beb|d b|k m| ad|ulu|lu |aye|zie|d a|aÃ± |a f|ial|akÅ|kÅk|n m|ato|Åk |eku|a s|Ã± b| al|di |zen|o e|n k|tie|zia|n b| ba|men|te | nk|m y| vo|ese|si |e t|man|do |Ã³Ã± |u e|o m|e o|ma |ad |sie|eÃ± |noÃ±|lad|ela|ae |kua|gan|aka|i b|obo|alu|ug |m m| eb|me |e s|em | ze|ond|ama|sog| no|teg| ey|u a| es|yÃ³Ã±|edz| mf|m w| fu|oba|ako|eyÃ³|e z| di|m o|ye |ali|to |vom| el|Ã± d|bi |mis|n n|n y|kom|dze|inn|i d|tso|is | so|Ã± e|l a|m n|boa| fa|fam| zi|zo |ii |ing|dza|ndo|sal|mam|s m|ui |d e|any|ndi|kal| ye|s a|esa|nts|eyo|oga|ses|mey|ete|ziÃ±|ol |uma|i s|ake| ev|u n|voe|yoÃ±|a o|zom|m s|yae| ob|bon|kam|Ã³ m|kya",
                        epo: "aj | la|la |kaj| ka|oj | de|on |de |raj| ra|iu |ajt|as |o k| Ä‰i|e l|j k| li| pr|eco|aÅ­ |Ä‰iu|jn |ia |jto|est| es| al|an | ki|pro|io | ko|en |n k|kon| ti|co |j p|o d| po|ibe| aÅ­|ro |tas|lib|ber|aci|toj| en|a p| ne|cio|ere|ta | in|to |do |o e|j l|n a|j d| se|a k|j r|ala|j e|taj| re|rec|iuj|kiu| pe|o a|ita|ajn|ado|n d|sta|nac|a a|nta|lia|ekt|eni|iaj|ter|uj |per|ton|int| si|cia| ha|stu|a l|je | je|al |o Ä‰|n p|jta|tu | ri|vas|sen|hav|hom| di| ho|nte|a e|ali|ent| so|nec|tra|a s|ava|por|a r| na|igi|tiu|sia|o p|n l|ega|or | aj|soc|j Ä‰|s l|oci|no | pl|j n|kto|evi|s r|j s|ojn|laj|u a|re | eg|j a|gal|ers|ke |pre|igo|er |lan|n j|pri| ku|era|ian|rim| fa|e s| ju|e a|ika|ata|ntr|el |is |u h|li |ioj|don|ont|tat|ons| el| su|go |un | ke|ebl|bla|n s|oma|Ä‰i |raÅ­|kla|u r|ne |ili|iÄo|o t|s e|tek|men|nen|j i|nda|con|a d|ena|cev|moj|ice|ric|ple|son|art|a h|o r|res| un|u s|coj|e p|Äi |for|ato|ren|ara|ame|tan| pu|ote|rot| ma|vi |j f|len|dis|ive|ant|n r| vi|ami|iÄi|sti|Äo |r l|n Ä‰|u l| ag|erv|u e|unu|gno| ce| me|niu|iel|duk|ern| Åt|laÅ­|o n|lab|olo|abo|tio|bor|Åta|imi| ed|lo |kun|edu|kom|dev|enc|ndo|lig|e e|a f|tig|i e| kr| pa|na |n i|kad|and|e d|mal|ono|dek|pol|oro|eri|edo|e k|rso|ti |rac|ion|loj|j h|pli|j m",
                        pam: "ng |ing|ang| ka|an | pa|g k| at|ala|g p|at |apa| ma|kar|lan| ki|ata|kin|pam|g m|ara|tan|pan|yan| a |pat| in| ba|aya|n a|g a|ung|rap|ama|man|g b| ni| di|nin|din|n k|a a|tin|rin|a k|ami| la|tun|n i|ari|asa|nga|iya|ban|ati| me|nan| da| sa| na|t k|gan|g s|bal|etu|mag|a i|met|sa |la |ant|kal| iy|kap|a n| mi|in |ya |aka|tau| o |san|n d|au |lay|ana|mak|yun|na |ika|a m|ipa|ran|atu| al|n n| ta|ti |ila|g l|ali|kay|nsa|aga|a p|iti|g t|par|u m|ans|nu |al |g i|t p|iwa|a d|syu|t m|sab|anu|un |uli|mip|ra |aki|aba|u a|mal|as |mil| it|una|bla|abl|ita|awa|kat|t a|ili|kas|g n|lag|da |tas|i a|wa |n l|lal|dap|mas|bat| pr|abi|ap |a b| e |mik|ani|sal|li |ad | an|ral|ira|gal|a r|lin|g d|nte| li|ale|kab|e p|ula|wal|lit|nti|s a|lip|nta|pro|te |ie |wan|ag |tu |upa| ya|g e|tek|usa|g g|bie|o p|it |pun|ian| bi|lat|aku|be |n p|sas|iba|yat|alu|tul|e m|kan|l a|nap|t i|lir|u k|isa|pag|abe|len|e k|rot|en |bil|mam|ksy|ngg|lam|p a|ily|liw|eks|ote|n o|gga|u i|eng|ipu| tu|lya| ri|aul|pas|dan|uri|ema|lab|ta |lak|are| ar|ail|tam|o a| ke|ril| pe|sar| ra|ina|asi|ka |art|pak|sak|mit|rel|i k|gaw| ul| re|inu|i i|mun|abu|asy|mba| pi|ags|obr|gpa|a o|am |n m|mem|o k|isi| mu| nu|mis|nun|era|ndi|ga |agp|aun|mab|anm|lub|gla|e a|nme",
                        tiv: "an | u | sh| na|nan|en | a |ha |sha|shi| i |er |a i| er|or | ma|ar |gh |n i|n u|a m| ve| ci|n s|han|u n| ke|lu |man| lu|n m|yÃ´ |a u|u a|n a|r n|a k|mba|in |ii | ha|kwa|ken|n k|na |hin| mb|a a| kw|n n| ga|ga |cii|agh|a n|aa |wag|ve |a s| yÃ´|nge|ba |r u|u i| gb|ana| or|a t|mao|r i|ity|ma |aor|anm|nma|gen|oo | ta|ir |ren| kp|i n|ang|r m|e u|gba| ng|r s| ia|ere|ugh| it|ian|doo|ese|uma|kpa| la|u k|n g|ngu|gu |om |oug|on |ol |a h|ior| ts| he| ne|tar|h u| ka|la |n t|se |e n|r a|a v|hen| ku|aha|mac|yol|i u|ace|ge |ce | de|ish|u t| io| do|tom|hi |a e|u u|o u|i m|iyo|i d|bar|ave|ua |u s| te|igh|a l|e a|m u|a w|un |n c|n e|ne |ev |r k|ind|ene|sen| is|ndi|ker|era| to|a o|ima|u v|a g|paa|n h| wo|di |yar|tya|ase|e s|de |n y|ee |end|him|tes| mk|u m|ka |tyÃ´| mz|won|u e| um|u h| wa| mi|yan|tin|ran|ie |hie|a c|hir|i a|e k|i v|mak| in| za|r c|nen|e l| ig|i k|kur|nah|tse| ik|ves|eng|rum|mzo|men|zou|i l|e i|a d|i e|i i| ya| vo|mlu|Ã´ i|inj|nja| as|vou|ura|ron|gbe| iy|r t|Ã´ro|a y|oru|e e| zu| ti|ra |n l|ci |u l|ver|kpe| fa|was| ml|e m|em |io |mi |da |civ|mÃ´m|ant|see|ivi|wan|vir|nda| ij|soo|zua|lun|ea |vea|wa |Ã´m |av |hio|ake|a f|igb|l i|u z|r l|zan|nta|e g|hem|h s| mt|ded|iky|o s|r g|do |ndo|iji| hi|e h",
                        tpi: "ng |ong|lon| lo|im | ol| na|la | ma|pel|ela|ri |at | bi|ait|na | yu|ol |gat| ra|bil| ka|ilo|man|rai|t l|it |eri|mer| o |wan| i |mi |umi| wa|ing|yum|ta |t r|tin|eta|get|lge|olg|iga| ig| sa|ara|em |rap|i o|ap |nme|anm|in |ain|an |a m|ant|ape|nar|m o|i n| no|g o|g k|i i|as |ini|mas| me|n o|sim|tri|kan|kai|ntr| ga| st|a s| pa|gut| ha| wo|g y|yu |a l|g s|ama|m n|ok |g w|wok|spe|a k|i b|i m|g l|i l|sin|sam|pim|m l|kam| gu|l n|amt|tpe|g n| in|ts |a i|mti|utp|isp|kim|its| la|isi|aim|api|lo |o m|g b|tai| di|a o|dis|a t|p l|en |map|t w|s b| lu|luk|sem|no |tim|lai| ko| ki|ave|ols|nog|m k|lse|sav|nem|ve |a p| fr| em|nim|tu |i y|nka|et |m y| ti|g t|nap|g p|sta|tap|aun|a n| tu|un |asi|fri|pas|n m|m g|l i|aut|ane| sk|kau|t n|nta|sen|n s|oga|i g|g g|m i|kis|o i| ba|tok|os |usi|m s|ngt|anp|a w|s n|a h|s i|iki|i s|sai|l m|npe|ari|o l|o b|g r|ik |uti|iti|gti|aik|ut | to|a g|ili|a y| pi| ta|kin|ni |n b|lim| ye|yet| we|k b|ina|g m|uka|str|ins|rid|a b|anw|nsa|nwa|m w|m m|dom|ot |hap|ido|aus|i w| ne| si|n i|t o|dau|ese|rau|ank|sap|o k|m b|nin|pos|o n|am |go |s o|s l|u y|pik|vim|ivi|es | go|n n|kot|ron|ple|g d|a r|kul|ali|sku|apo|om |g h|l l|s s|ti |les|t m|gav|eki|nai|mek|kom| as|ind|nda|ip |liv|ul |ati",
                        ven: "na | na| vh|a m| mu|ha | u |wa |tsh|a n|a u|we |hu | ts|vha|nga| ya|ya |a v|lo |vhu|á¹…we| dz|thu|ane|ho |ana|o y| kh|shi|a t|ga | pf|e n| zw|elo|uá¹…w|sha|muá¹…|nel|a p|ne |fan| ng|pfa|uth|a k|edz|kha|u n|dza|ele| a |mut|aho|zwa|a h| ha| ka|kan|o n|a z| hu| mb|dzi|la |vho|wo |za |zwi|ang|i n|fho|han|hum|u v|lwa|ela|a d|e u|u m|o d|u t|mul|olo|aka|á¸“o | wa|o v|hol|e a|ofh|u s|no |si |gan|mbo|hi |ano|he |zo |shu|o k|ula|hak|low|zi |ka |led|lel| á¸“o| ma| sh|bof| i |o m|hat|e k|dzw|yo |o t|o h|ngo|owo|elw|tsi|rel|ath|o i|a s|hon|its|sa |dzo| te|awe| mi| nd|go |a i|mba|avh|umb|isa|wi |hil|iá¹…w|ing|nah|unz|ni |and|i h|ine|a l|mis|e v| lu|i k|e m|swa|á¹±he| á¸½a|li |mbu|i t|a y|vel|a á¸“|one|dzh| á¸“i|ush|evh| fh|lan|hut|uts|alo| si|oá¹±h|het| an|amb| it|sir|ire|vhe|u k|ná¸“a|ea |mo |eth|tea|á¸“a |u a|wan| bv|o a|ila|nda|ri | sa|o á¸½|i m|hus|zan|ndu|fha|uri|ou |á¸½a |ivh|umi|ulo|adz|a a| ur|wah|fun|khe|a á¹±|isw|le |i v|ayo|she|e y|kon|hen|hul|o u|o w|ule|zit|aná¸“|thi| ny|hun|hel|ung|i á¸“|uvh|a f|u d|bve|kat|hal|hav|ura|u w|nyi|pfu|lay| ho|iwa|tel|u h| á¹±h|oni| o | ko|mbe|mus|hin|alu| th|san|u á¸“|zwo|huk| fa|u i| á¹±a|zhi|du |o z|hit|udz| yo|usi|a w| á¸½i|pha|lev|mir|eli|i i|u á¹±| iá¹…|hoá¹±|win|hed|so |ira|hir|á¹±ho|mur|ala| li",
                        ssw: "nge|eku|a n|ntf| le|e n| ng|tfu|lo |la |nga| ku|fu | ne|o l|khe|tsi|nkh|le |he |unt|elo| lo|si |ele|a l|ni |ung|mun|ma |lun|lel|wa |lek|nom| um|eni|oma| no|kut|hla|onk|a k|e l|ent|e k|gel|ela|ko |eli| ba| la|pha|ats| em|o n|ang|ema|eti|nel|nye|ban|ulu|uts|hul| na|aka|tfo|e u|lan|oku|lok|won|khu|esi|lul|a e|ule|ala|umu|tse|akh|ye |ve |i l|nek|ana|ane|lil|kwe|aph|na |we |ke |aba| wo|nti|ndl|ale|i n| ye|ba |ilu|gek|gan|lab|any|hat| li|tin|wen|gen|kel|len|ndz|fo |and|let|eko|e b|lwa| ka|te |set|nem| kw|mal|ka |ant|alu|ne |phi|ing| un|u u| ek|ise|une|e e|kul|nal|lal|mph|o y|uhl|fan|â€ke|ile|i k|kub|ukh|ben|kan|ako|a b|kat|eke|ive| ti|sek|nak|sit|seb|u l|alo|yel|kho|wo |kha|les|o e|ngu|kus|lom|ini|ikh|elw|isa|sa |fun|e w|ebe|o k|jen|iph|eng|kwa|ahl|uph|emb|be |tis|lwe| si|etf|isw|uma| se|ene|ta |nan| im|i e|enk|e a|abe|kun|ume|hak|nen|dle|ase|sen|kuv|tel|ebu|omu| in|lin|sel|tfw|nhl|a i|e i|kuk|uba|ti |kuf|mhl|bon|ula|sin|int|fut|dza|lak| wa|ind|ave|ali|yen|ete|to |ngo|use|kuh|hol|ze |aâ€k|ona|a a|se |nje|und|swa|lon|eki|ike|i a|lis|tsa|gab|sim|i w|its|fol|e t|o m|hi |ndv|phe| ya|maâ€|utf|sik|liv|bun|cal|nta|ata|gal|mel|ute|wem|gap|han|uny|oba|alw|ili|a w|mbi| bu|gob| at|awo|ekw|dze|u n|emp",
                        nyn: "omu| om|ntu|tu | ku|a o|ra | ob|wa |obu|ari|a k|mun|a n|unt|mu |uri|nga| mu|aba|ri |a e| na|e o|gye|rik|ho |a a|han|ang|re |ga |iri|bwa|oku|aha|bur| bu|na |eki|ka |iku|ire|uga|ndi|ush|ban|ain|ere|ira|we |kur|sho| ek| ab|ne |ine|a b|and| ni|u a|e k|sa |u b|iha|i m|e n|kir|be |aho|bug|ibw| eb| ba|ing|ura|gir|u n|kut|ung|ant|abe| ah|ye |e b|i n| bw|kwe|ebi|era|iki|ba |ro | kw| ok|uba|gab| no|zi |bir|i k|u o|o o|rwa|o e|kub|end|ama|mer|eka|kug|ate|tee|di |rir|bus|kuk|rin|ish|sha|i b|wah|ha |u m|bwe|ngi| ai|ara|kwa|kan|o g|za |ngo|kuh|ana|i a|eme|eek|i o|baa| ka|go | gw|nib|zib|ash| or|iro|she|o k|u k|iin|o b|iba|oon|gan|agi|ngy|hem|mwe|ona|oro|bwo| ar|ya |i e|uru|nar|eir|uta|tar|kwi| ti|egy| n |hi |bar|isa|ute|o a|shi|ora|e e| en| ki| nk|riz|nda|da |ja |si |nsi|wen|yes|tek|yen|aga| am|o n|rei|rag|ki |obw|mur| ha|ris|wee|amb|aab|bya|kus|ugi|a y|ind|ata| ne|bas| ky|ija|hob|ikw|mus|gar|a g|eky|dii|bor|aar|ibi| we|aka|ham|emi|ekw|rer|ini|har|gi | bi|naa|kor| er|gwa|n o|iza| by|eih|yam|iho|rih|i y|ete|o m|eby|but|a r|ika|mag|ozi| em|ong|iik|iko|uka|nik| yo|sib|eri|utu|tuu|amu|uko|irw|nka|ani|yaa|u e|mut|roz|mub|ens|aij|nis|uku|kye|nde|der|e a|nok|nko|asa|aas|hab|obo|ent|ahu|rye|oba|kih|yob",
                        yao: "chi|ndu| wa|du | ch|a m|aku|akw|ni |kwe|und| mu|wak|wan|mun| ku|la |e m|wa |ulu|amb| ak|kut|u w|ali|mbo|lu |we | ma|le |ufu|ful|ila|a k|bo |a n| ga| ni|amu|kwa|se | na|ose|hil|nga|go |aka|and|ang|na | uf| pa|ete|uti|jwa|kul| jw|son|ngo|lam|e u|ne |kam|oni| so|u j|e a|ele|a c|ana|wal|ti |isy|cha| yi|gan|te |ya |mwa|lij|wet|che|ga |yak|ili|pa |e n| ya|o s|nda|i m|ula|jos|i a|ile|ijo|li |e k|o c|a u| mw|ich|mul|uch|o m|asa|ala|kas| ka|i w|ela|u a|ach|his|nam|lan|yin|i k|ind|ani|sye|yo |si |pe |gal|iwa|man|sya|aga|a w|o a|ule|ikw|asi|kus|ope|ma |gak|e w|jil|kap|hak|ika|ite|aji|mba|u g|ase|mbi|kum|uli|any|ape|a y|ekw|mal|imb|ja | al|end| ng| ja|mas|usi|kup|e c|pen|ye |anj|ka |a j|a p|lem|o n|ama|him|ago|sen|eng|ane|ako|mch|ola|och|oso|ena| kw|sop|lek|pel|gwa|hel|ine|gam|u y| mc|i y|awo|ons| mp|ole| li|wo |i u|hik|kol|auf|mka|tam|syo|e y|mpe|ten|ati|mau|nji|wam|muc|ong|i g|kan|uma|je |iku|nag|kwi|da | ul|cho|ngw|ene|iga|ano|esy|ion|upi|pag|o k|eka|wu |uwa|kuw|sa | un|a l|bom|iya|uni|jo |ale| ji|apa|yil|lil|uku|i n|o g|a a|o w|waj|mus|ipa|pan|pak|one|i c|ujo|duj|emw|nya|tio|jak|oma|nja|hiw|dan|apo|e j|poc| wo|lic|alo|eje|ing| mi|e p|lo |lig|a s| yo|ung|no | m |upa|ata| bo|nde|he |i j|was",
                        lav: "as |Ä«ba| un|un |tie|ies|bas|ai | ti|esÄ«|sÄ«b|ien| vi|bu | ir|vie|ir |Ä«bu| va|iem|em | pa| ne|s u|am |m i|Å¡an|u u|pie|r t| ci| sa|Äs |vai| uz| ka| pi| iz|brÄ«|rÄ«v| br|dzÄ«|cij|ena|uz |ar | ar|es |s p|isk|nam| ap| at|ot |Äci|inÄ|viÅ†|kvi|ikv| ik|vis|i i| no|s v|pÄr| ie|ju |u a|nu |edr| pr|vÄ«b|Ä«vÄ«|drÄ«|iju|dar|ilv| st|cil|lvÄ“|iÅ†a|s i|s t| la|ana|u p|i a|kÄ |n i|Ä«dz|s s|tÄ«b|ija|vÄ“k|jas|cie|ka |aiz|Ä«gu|tu |gu |iec|Äm |arb|ied|Ä«bÄ|s b|val|bai|lÄ«d|Ä«gi|s n| jÄ|umu|zÄ«b|t p|u v|lst|als|ska|kum|mu |a p|st |vÄ“r|n p|gi |s l|aut|jot| tÄ|ama|arÄ«|n v|stÄ| ai|izs|kas|anu|sta|u n| da| ta|s a|u k|ojo|ba |Å†a |nÄ«g|Ä v|jum|stÄ«|sav|m u|u i| kÄ|s d|not|u t| so|iev|a u|cÄ«b|son|Ä a|mat|i u|lÄ«b|u d|a s|nÄt|nÄ«b|nÄc|i n|s k|ajÄ|rÄ«k|rdz| dz|ned|kat|pil| pe|per|Ä“ro|kst|i v|Ä«ks|cit|lÄ«t|pam|ekl|os | re|tau| li|evi|evÄ“|i p|jÄ |ma |u s|t v|bÄ |kur|rÄ«b|ras|bie| pÄ|a a|tis|a v| be|jeb|ciÄ|skÄ|oci| ve|soc|roÅ¡|abi|rso|bÅ«t|bez|zsa|ers|Äda|t s|atr|t k|ieÅ¡| je|sar|nev|ais|oÅ¡a|Ä«Å¡a|nas|kÄd|enÄ|n b|uma|a t| lÄ«|eci|lik|iku|ebk|mie|nod|roj|Ä«ga|ts |Ä“t |arp|tar|iet|aul|du |sab| de|tÄ«t|iÄl|ard|Ät |tÄs|glÄ«|zgl|ant|izg|tik|ta |isp|r j|spÄ|na |paÅ¡|tra|tot|pre|ret|ecÄ«|eja|lie|Ä u| ku|Ä«st|ikt|ier|kt |eno|Ä“ka|dro|oÅ¡i|t t|klÄ|i k|rie|tÄ |arÄ",
                        quz: "una|an | ka|nan|cha|ana|as |apa|pas|man|lla|aq |sqa|ta | ru|run|kun|ach|qa | ll|pa |paq|na |nta|chi|npa| ma|nch|aku|anp| ch|in |a r|ant|hay|mi |taq|ay |ama|asq|qan|tin|kuy|chu|lap|a k|yta|a a|ima|wan|ata|spa|all| wa|n k| ja|ipa| ya|nin|ina|aqm|his|qmi|a m| ju|pi |anc|nap|iku|aus|usa|kau|pan|nak|kan| mu|naq|aqt| pa|kam|aqa|kay|i k|kus|un |ank|isq|nku|may|yku|ayn|a j|a l|ayt|qta|ati|a p| pi| ri|aci|lli|lin|ayk|uku| al| at|n r|yac|ion|pip|han|inc|n j|ayp|yni|qpa|nac|say|asp|uy |mac|s m|cio|awa|a c|laq|tap| yu| im|a y|yoq|n m|asi|mun| de|has|n a| as|n c|int|uch|nma|s k|oq |ari|q k|hu | na|ypa| tu|tuk|tun|atu|rim|q r| sa|jat|yan| ji|nat|anm|jin|a s|api|hik|uya|nti|pac|tan|ash|mas|n p|n l|k a|ura| su|a q|yuy|n y|ech|q j|unt|yay|ypi|is |lan| qa|usp|kas| an|a w|s w|inp|sin| ta|ma |a t|shw|q a|hwa|uyt|nmi|sim|ere|rec|der|uma|s t|isp|n t|Ã±a | ni| ay|upa|nam|hur|war|waw|imi|nka|sap|kaq|s j|was|y r|usq|kin| un|inm|qas| si|ani|tiy|t a|sta|pay|pis|maq|hin|ha |arm|npi|rmi|ink|aqp|q c|la |i p|nis|yma|nk | ku|aym|nal|hak|rik| ti|unc|niy|y s|iyo|juc| qh|ist|pap| aj|s y|cho|onq| re|ayo|iqp|n s|s p|os |i m|t i|ras|ita|piq|qsi|ku |yqa|mik|q y|eqs|pat|tak| pu|lak|i r|ipi|iya|ywa|muc|a n| qe|san|jun|y l",
                        src: " de|de |e s|os | sa|tzi|tu | su|one| a |sa |ne | e | in|ent|ion|der|su |zio|ere|as |e d|a s|u d|ret|es | cu|ess| pr| so|s d|men|ale|ade|atz| s |re |e c|sos|in |s i|chi| un|nte|ten|etu|er | pe|et |e e|ida| te|le | is| ch|ene|are| es|a p| si|u s|a d|pro|hi |dad|te |sse|tad|zi |e t| on|e i|s e|nt |nzi|u a|sso|onz| co|ame|cun|tos|e a|sas|a c|ntu|net|na |e p|at |nes|du | li|t d|n s|son|s a| o |ber|ro |pes|u e|int|zia|nat|i p|ia |res|nu |un | re|sta|s p|ter|era| po| di|per|s c|t s|rar|ser| at|e o|s s|ibe|lib|si |tra|ust|u c|rta|unu|cus|ntz|adu| to|da |nal| na|ant|egu|eto|und|ine|i s|a e|otu|u p|t a|ert|est| da|a a| fa|ist|ona|pod|s o|pre|iss|ra | ma|ica|tot|les|ntr|una|sua|con|dae|ae |s n|man|sia|ndi|nid|ada|a l|nta|o s|a i|ua |ide| ne|otz|min|rat|iat| pa|nde|ode|dis|ren|ali|a u|ta |u o|sot|u t|ime|ssi| as|o a|pet|e u|nsi|fun|lid|epe|eru|unt|st |t e|end|us | fu| ca|ner|dos|s f|ass|nda|uni|das|iu |ind|a t|ial|a f|ghe|gua| eg|a n| se|ont|etz|s m|s Ã²|sti|t p|ual|nen| me|sen|com|ura|a b|lic|a o|pen|ado|nos|inn|des|seg|e f|din|Ã²mi|ire|a m| Ã²m|e l|dep|Ã¨nt|for|ena|par| tr|u i|ara|cra|sid| no|s u|u r|suo|e n|pri|ina| fi|ria|gur|art|det|s t| bo|tar|emo|run|ama|icu|isp|dam|e r|itu|cum|tut|eli| bi",
                        rup: " sh|ri | a |shi|hi |i s|ti |ea |ari|i a| ca|rea|tsi|i c| s |a a|ndr|tu |cÃ¢ |dre|i n|ept|ptu|rep|li | nd| di| un|a s|are|i u|ats|la | la|i l|ear| li|lje|di |ati|lui|ui |a l| tu|tat|Ã¢ s|ei |sea| ti| cÃ¢|un |jei|or |caf|afi| lu|Ã¢ t| ar|ali|i t|fi |ilj|a c|bÃ¢ |rÃ¢ |car|ibÃ¢|lor| cu|nÃ¢ |icÃ¢|a n|i d|s h|hib|tÃ¢ | hi|Ã¢ a|si |u c|eas|tur|tul|ber|Ã¢ c| in| co|lib|u a|n a|cu |ibe|u s|tea|lu |tsÃ¢|ul |tse|int|a p|i i| pr|u p|i p|url|i m|lji|min|sti|alÃ¢| al| pi|sht|nal|Ã¢ n| si|ji |Ã¢ p|rar|ert|sii|ii |nat|til|u l|sÃ¢ |lÃ¢ |Ã¢ l|sta| nu| ic|i f|nu |ist|mlu|ili|a t|ots|uni|rta|a d|its|Ã¢ d|pri| ts|oml|i e| de| na|sia| po|gur|tut| st| at| Ã¢n|ura|al |ita|anÃ¢| ma|ips|can|oat|tsl| su| as| so|Ã¢nd|nts| ap| ea|sh |nit| mi|ent|a i|ate| ac|poa|ilo|sot|ina|ash|ona| lj|Ã¢ts|rli|lip|Ã¢ i|unÃ¢|t c|iti|bli| u |nji| fa|zea|tÃ¢t|ril| om|urÃ¢|con|i b|sig|igu|ntr|pur|par|ntu|let|com|iil| ni|eal|ind|r s|hti|at |ucr|art|adz|arÃ¢|itÃ¢|rtÃ¢|inj|uri| eg| sc|atÃ¢|sin|ral|pse|asi| ba|r a|apu|Ã¢lj|ia |chi| va|sun|ter|rlo|ica| pu|luc|unt|i v|ise|ini|est|ast|gal|ega|act|nda|ead|uts|a u|imi|ma |ra |pis|s l|ets|a o|va |pi |lit|scÃ¢|asc|ial|sa | ta|rim|tar|alt|idi|tlu| gh|era|ant|eri|aes|a m| nÃ¢| ae|oar|nea|pro|apt|ana|ta |atl|lic|l s|iun|nte|mil",
                        sco: " th|the|he |nd | an|and| o |al | in|ae |in |es |ion|cht| ta|tio|or |t t|ric| ri|ich|tae|on |s a|is |e a| aw| be|s t| he|ati|ent|ht |ts |e r| co|er | na| fr|bod|ody|his|dy |hes| fo|e t|o t|for|it |ng |ty |n t| or|be |fre|ree| hi|l a|ing|awb|wbo| sh|s o|ter| on|sha|nat|r t|nal|an |n a| as|hal|e o|y a|d t|tit| pe|l b| re|y h|aw | ma|nt |men|air|ce | pr| a | ti|hts|e f|e c|le |eed|edo|dom|n o|e s|ons|d a|res|e w|man| wi|d f|ed |sta|ar |t o|ona| it|ity|at |as |her|ers|t i| de|con|til|il | st|nti|e p|e i|e g|nce|ny | so| di|nte|ony|ns |und|ith|thi| fu|ie |ir |oun|ont|e e| un|pro|oci|nae|y i|lit|soc|com|nin|en |ic |ne |r a| me|ly | wa|ear|ual| en|ame|uni|r i|e h|hum| is|ane|uma|ess|inc| fa|equ| hu|ver| eq|e m|hei|o h|ms |d o| ha|wi |t n|s f| no|t a|int|cla|rit|qua|d i|iti| se|rsa|y s|ial| le| te|e d|r o|ive|r h| la|nit|om |ite|s r|cie|s i|ali|cti|cia|re |aim|rat|ld |tat|hat|rt |per|s h|n f|dis|tha| pu| we|g a|oms|eil|ntr|fai|tri|ist|ild|e u|r s|dec|lea|e b|hau|imi|mai|s n| ac|elt|lt |l t|omm|d p| ga|din|war|law|eme|y t|era|eir|art|ds |s e|ral|nor|tel|ge |g o|eik|eli|rie|rou|nda| gr|lan|mei|ate| ge|n i|ten|id |s d|ors|iou|bei|sam|nta|sec|mmo|lar| tr|ful|ul |mon|s w|anc|l o|gar|ern|ara|d s",
                        tso: " ku|ku |ni |a k|hi | ni|a n| a |i k|ka |i n|wa | ya| ma|la |ya |na |a m| ti| hi|fan| sv|nel|hu |a t|ane|ela| ka|iwa|u n| na|svi|lo |nhu|a l|a h|ele|le |ndz|u k|va | xi|a w|vi |mbe| Ã  |elo|wu | wu|eli| mu|u y|mun|i l| le|nga|umb|lan|nfa| va|u l|be |u h|li |kum|tik|ihi|iku|aka|unh| wa|a s|liw|isa|i m| fa|ma |anu|nu |u t|han| la| ng| wi|wih| ha|a x|yel|a a|lel| nf|i h|ta |ana|o y|e k| nt|u a|i a|eni| li|ndl|ga |any| ko| kh|van|u w|u v|amb|a y|ti |sa |pfu|i t|i w|in |lek|e y|ang|and|ati|yi | Ã¨ |irh|sva|mat|ani|i s| nd|a v|mel|yen|hla|isi|hin| ye|eke|n k| lo|ulu|kwe|hul|thl| kw|nth|tin|mah|wan|ava| mi|ko |khu|u s|Ã  n|dle|lul|ule|tir|o l|i y|aha|aye|kwa|inf|Ã  k|Ã¨ k|rhu|mba| th|fum|end|anh|xi |dzi|kel|a f|u f| lÃ¨|we |may|eka|nye|gan|dze|vu |ham|xim|mis|thx|aku|tÃ  |xa |hlo| tÃ |eyi|ima|nti|eki|ngo| si|u p|vak|ngu|lak|ume|oko|lon|a Ã¨|o n|lok| ta|zis|hak|u m|i Ã |ke |i x|u x|rhi|ha |awu|dza|u Ã |za | lÃ |n w|ung|e n|a Ã |i f|esv|les|vik|siw| y |Ã  m|to |mha|ola|sav|ond|nya|kot|kol|uma|e h|mbi|e s|naw|ths| dj|fun|mu |a u|xiw| ts| hl|u d| lw|nyi|ki |ong|sun|lwe|ike|ind|nis|xih|e a|Ã¨li|imu|sel|sek|iph|zen|lum| pf| xa|sin|umu|sim|ave|kar|ala|wey|sik|o t|avu|wav|oni|ile|wak| yi|ali| hÃ |gul|e l|ba |i v",
                        rmy: " sh|ri | a |shi|hi |i s|ti |ea |ari|i a| ca|rea|tsi|i c| s |a a|ndr|tu |cÃ¢ |dre|i n|ept|ptu|rep|li | nd| di| un|a s|are|i u|ats|la | la|i l|ear| li|lje|di |ati|lui|ui |a l| tu|tat|Ã¢ s|ei |sea| ti| cÃ¢|un |jei|or |caf|afi| lu|Ã¢ t| ar|ali|i t|fi |ilj|a c|bÃ¢ |rÃ¢ |car|ibÃ¢|lor| cu|nÃ¢ |icÃ¢|a n|i d|s h|hib|tÃ¢ | hi|Ã¢ a|si |u c|eas|tur|tul|ber|Ã¢ c| in| co|lib|u a|n a|cu |ibe|u s|tea|lu |tsÃ¢|ul |tse|int|a p|i i| pr|u p|i p|url|i m|lji|min|sti|alÃ¢| al| pi|sht|nal|Ã¢ n| si|ji |Ã¢ p|rar|ert|sii|ii |nat|til|u l|sÃ¢ |lÃ¢ |Ã¢ l|sta| nu| ic|i f|nu |ist|mlu|ili|a t|ots|uni|rta|a d|its|Ã¢ d|pri| ts|oml|i e| de| na|sia| po|gur|tut| st| at| Ã¢n|ura|al |ita|anÃ¢| ma|ips|can|oat|tsl| su| as| so|Ã¢nd|nts| ap| ea|sh |nit| mi|ent|a i|ate| ac|poa|ilo|sot|ina|ash|ona| lj|Ã¢ts|rli|lip|Ã¢ i|unÃ¢|t c|iti|bli| u |nji| fa|zea|tÃ¢t|ril| om|urÃ¢|con|i b|sig|igu|ntr|pur|par|ntu|let|com|iil| ni|eal|ind|r s|hti|at |ucr|art|adz|arÃ¢|itÃ¢|rtÃ¢|inj|uri| eg| sc|atÃ¢|sin|ral|pse|asi| ba|r a|apu|Ã¢lj|ia |chi| va|sun|ter|rlo|ica| pu|luc|unt|i v|ise|ini|est|ast|gal|ega|act|nda|ead|uts|a u|imi|ma |ra |pis|s l|ets|a o|va |pi |lit|scÃ¢|asc|ial|sa | ta|rim|tar|alt|idi|tlu| gh|era|ant|eri|aes|a m| nÃ¢| ae|oar|nea|pro|apt|ana|ta |atl|lic|l s|iun|nte|mil",
                        men: " ng|a n|i n|É”É” |ti | ti|i l| i | ma| nu| gb|ngi|a k|aa |gi | kÉ”|ia |É›É› |ei | na| a |ma |hu | ye| ta|kÉ”É”|a t|na | hu|a m| kÉ›| nd|gbi|ya |bi |i y| lÉ”|a h|É› n|ii |É”ny|u g|i h|nya|uu |lÉ”n| kp|i m|ngÉ”|nga|la |i t|kÉ›É›|lÉ” |i k|É” t|mia| mi|a y|nge| ji|ee |gaa|a a|É” n|É” i|gÉ” |ind|tao|ao | hi|num| le| yÉ›|umu|mu |ung|nda|hin|ye |i g|hou|hug|e n|ugb|ni |a l|sia|ndÉ”|nuu|a i|maa| ya|ahu|gba|u k|mah|oun|É”ma|le |da |i w|É”lÉ”|i j| va| É”É”|eng|i i|va |yei|dÉ”l|li |lei| sa|yÉ› |kpÉ›|yil|isi| la|bat|a w|u n|e t|ta |ahi| ki| wo|É” k|e a|É›lÉ›|saw| lo|o k|ji |gbÉ”|pÉ›l|uvu|ili| ho|vuu| gu|nde|aho|gbu|É› t|ale|ila|nah|kÉ› |É›i |ndu|kpa| wa|nuv|ge |e m| ny|e k|atÉ›|wei|awe|a g| ii|bua|ie |awa|wot|yek|kÉ”l|ulÉ”|ing|ga |gul|tÉ› |É”le|u t|gbÉ›|É” y|nun|wa |hei|ani|É› k| tÉ”|bÉ”m|É› g|ein|taa| ha|ang|uni|u i|ekp|É” g|lÉ›É›|kpÉ”|a v|kpe|ote|i b|te |u m|tii|É” s| we|É› h|baa|pe |É› y| É›É›|i É›| ba|fa |a j|bu |ifa|kia|jif|u l|eke|ama|gen|u w|lee|lÉ› | lÉ›|É›mb|a b|e y|aah|hii|ngo|bÉ›m|lek| wi|ui | yi|u y|bÉ›É›| he|u a|e h|É” m|uah|o g|yen|yan|nyi|aal|hi |wu |yee|maj|ajÉ”|jÉ”É”|nye|mbo|e g|u É”|ong|ka |oi |lon|dun|uny|É›ng| sÉ”|lÉ”l|nyÉ›|lii|a p|oyi|iti| bÉ›|lÉ”m|akp|e i|É› i| ka|jis|oko|i p|É”la| wÉ›|a s|ewÉ”|iye|dÉ”É”|lok|gua|É› b| li|u h|nin|wee|lah|ula| ga| du|i v",
                        fon: "na | na| e | É–o|É”n |É–o |kpo| kp|nu |o n| É” | nu| mÉ›| gb|mÉ› |po |do |yi |tÉ”n| Ã© | si|gbÉ›|e n|in | to| lÉ›|lÉ› | tÉ”|nyi| al|wÉ› | do|bo |É›tÉ”| ny|tÉ” |e É–|É–e | bo|okp|lo |ee |É–ok|to |É” e|bÉ›t| wÉ›| ac|a n|sin|acÉ›|o t|o a|É›n |i É–|o e|bÉ” |É” É–| bÉ”|cÉ› |É› b| É–e|a É–|É” n|É› É”|n b|an |nÉ” |odo|É› É–|o É”|É› n|É› e|É–É” |ji | É–É”|lin|n n| en|bi |o É–|mÉ” |n e|pod| bi|lÉ” | mÉ”|n a|nÉ› |É› k|i n|un |É” m|i e|mÉ›É–| hw| ji| ye|É›É–e|enÉ›| ÇŽ |alo|o s|kpl|u e|a d|É” b| nÉ”|alÉ”|É” Ã©|É” g|É–ee|si |n m|gbÉ”|a t|n k| yi|sÉ›n|jÉ› |e k| wa|o m|e m|Ã© É–| jl|hÉ›n|e e| hÉ›| sÉ›|nnu|nun|wa |n É–| ee|Ã© n|kpa|unÉ”|bÉ”n|É” t|a s|É› Ã©|u k|É” w|inu|e s|i t|zÉ”n|o l|a y|o g|bÉ› |ma |n t|e j|É” s|É” a|o b|a z| zÉ”|jlo|i k|nuk|É” k|a e|É” l|u t|kÉ”n|xu |e É”| lo|hwÉ›| ka|eÉ–e|o y|e w|jij|sis|n l|ixu|six| su|ali|isi|ukÉ”|É› a| ay|ayi|su |n g|u a|a b|n d|dan|nmÉ›| ta|n É”|etÉ”|e g|o j| we|onu|wem|ba |ema|É› g|o h|É› s|É› t|i s|u w|n s| sÉ”|bÇ | bÇ|hwe|a m|sÉ” |lÉ”n|o d|u m|ple| ma|É› l|azÉ”| az|tog|ye |i l|hun| jÉ›|o w|ogu|o k|u g|kan|oÉ–o|elÉ”|gbe| le| el|wu |ka |É› w|n w| li|sun|esu| hu| i |É–Ã³ | É–Ã³|plÉ”|É–i |É–Ã¨ |É›nn|pan|i m|yet|xo |iin|tii| ti| fi|e b|zan|i w|poÉ–|É–es|a j|ann|a g|gun| É–i| tu|gan|É› m| wu|u s|É” y|a l| da|u n|u l|É”nu|obo|É” h|vi |lee|ijÉ›|ta |e a|ya |nuÉ–|É” d|wen| tÉ›| ga| É› | xo",
                        nhn: "aj |tla| tl| ti|ej |li |j t|i t| ma|an |a t|kaj|tij|uan|sej|eki| no|chi|ij | ua|ma | to| te|j m| ki|noj|ika| se|lis|j u|aka|laj|tle|pa |pan|j k|ka | mo|amp|ali|ech|uaj|iua|j n|man|oj |och|tek|tli|kua|ili|a k|se | pa|ano|ise|ual|mpa|tec|n t|en |len|iaj|is | ue|a m|jto|ajt|pia| am|uel|eli| ni|ya |oua|j i|ni |hi |tok|kin|noc|one|lal|ani|nek|jki|ipa|kit|oli|ati|amo|j s|kam|aua|ia |tim|mo | ku|ant|stl| ik| ke|opa|ase|nij|ama|i m|imo|ijp|ist|tl |ijk|tis|mej|itl|tik|mon|ok |lak|par|n n|ara|ra |tit|kej|jpi|a s|ojk|ki | o |alt|nop|maj|jya| ka|iti|cht|ijt|uam|a n|kiu|lat|leu|o t|ita|lau| ip|tep|kia|jka|n m|ana|lam|kij|nka|tou|epa|n s|til|i n|i u|e t| ak|s t|k t|lti|nem|lan|eyi|mat|nau|ose|emi|j a|ntl|uat|uey|jtl|nit|nti|kip|oka|onk| on|eui|i k|kat|j p|ini|toj|kem|ale|ajy|ame|ats|pal|iki|ema|uik|n k|eua|ach|e a|ijn| sa|mpo|tot|otl|oyo|mil|hiu|eka|tol|ajk|uak|ite|san|pam|atl|yek|tia|ate|ino|jua|a i|ipi|j o|tsa|oke|its|uil|o o|jne|oju|tos|kui|oui|a a|yi |kol|ote|a u|i i|n a|ken|chp|iko|as | ne|tin| me|ank|jti| ye|kon|ojt|aui|xtl|ine|tsi|kii|you|ko |ejk|o k|uas|poy|tst|ejy|nok|las| ya|yol|hti|pou|siu| in|nel|yok|mac|ak |hik|sij| si|sto|htl|jke|nko|jch|sek|mot|i a|ela|ui |kis|mel|axt| ax|ijc|nan",
                        dip: " ku|en |ic |ku | bi|bi | yi| ke|an |yic|aan|raa| ci| th|n e| ka| eb| ra|c k|c b|n a|ci |in |th |kua|ny |ka |i k|Å‹ y|i l|ben|k e|ebe| ek| e |hÃ¶m|nhÃ¶|Ã¶m | al|ai |kem| ye| nh|eme|m k|men|i y|t k|n k| la|c e|ith| er|lÉ›Ìˆ|thi|alÉ›|ua |t e|ek |É›ÌˆÅ‹| lo|É”c |n t|Å‹ k| ep|u l|it |yen|kÉ”c|ÌˆÅ‹ |de |k k|pin|a l|i r|n y|epi|n b|lau|at |iny|aci|aai|u t|ken|au |ok | te|a c|ath| pi|ke | ac|e y|cin|u k|oÅ‹ | lu| ti|a t|uat|baa|ik |tho|yit|ui |hii|u n|h k|e r|n c|te |kek| lÃ¶|l k|h e| lÉ›|hin|thÃ¶|m e|É›Å‹ |n r|n l| et| mi|Ã«k |i b|ekÉ”|era|eÅ‹ |e w|i t|el |ak |nhi|iic|a k|i e|pio| ny|Å‹ e| aa|nde|u b|e k|kak|eba|Ã¶k |k a| ba| en|ye |lÉ›Å‹| pa|iim|im |kÃ¶u|e c|rot|e l| le|Ã¶Å‹ |ot |ioc|c t|i m|r e| kÃ¶| kÉ”|eth|y k|oc |Å‹ n|loo|la |iit| el| we| ey|i p|uny| ro|ut | tu|oi |e t|enh|thÉ›|m b|hok|pan|k t|Ã«Å‹ | wi|yii|tha|wic|pir| li|u e|bik|u c|Ã«n |ynh|y e|lui|eu |ir |y b|nyn|uc |n w|mit| ec|Ã¶un|any| aw|É›t |É›ÌˆÉ›| dh| ak|and|loi|wen|l e|hÃ¶Å‹|e e|thÃ«|aku|ÌˆÉ›Ìˆ|kut|am |eny|u m|i d|iek|k c| ko|tic|leu| ya|u y|tii| tÃ¶| ma|nyo|tÃ¶ | ew|hÃ¶k|den|t t|hÃ«Ã«|i n|k y|i c|cit|h t| ed|uee|bai|É›Ìˆn|Ã¶t |eri|É›Ìˆk|awu|rin|a p|cÉ›Ìˆ|hai|kic|t a| tÃ«|tue|cii|hoÅ‹| bÉ›|ooÅ‹|n p| cÉ›|Ìˆk |c l|u p|uk |c y|lÃ¶i|i a|eke|dhi|wel|thk|eeÅ‹|Ã¶i |elo|n m|r k|ien|om |hom| wa|nho",
                        kde: "na | na| va| wa|la |nu |a k| ku|a w|ila|wa |a v|chi| mu|unu|e n|mun|van|a m|a n|ya |le |ele|sa | ch|asa|amb|ana|was|lam|mbo|ohe|ave| vi|ne |bo |aka|e v|a u|u a| nâ€™|u v|e m|ke |anu| li|ve |vel|ake|ala|hil|ile| pa| av|ngâ€™|a l|he |ing|ene|ela|ili|ika|vil|ngo|vak|ali| di|uku|wun|any|lan|a i|mbe|a a|uni|e a|ama| ma|go |nda|bel|emb|wak|kuw|nya| mw|ola|a d|den|lem|a c| il|ulu|kol|gâ€™a|o v|nji|kan|ji |au |ma | au|lil|mbi|uwu|lik|ye |â€™an|kuk|din|ula|no |and|umi|kum|eng|ane|dya|ong|o l|ach|mwa|e w| ak|anâ€™|a p|kal|nil|lew|mad|nâ€™n|voh|ilo|wen|aya|apa| vy|kut|ale|va | al|ang|ava|kul|hin|o m|hel|e k|ond|hi | la|lin| lu|idy|dye|u l|da |ole|ka |ani|ndo|ton| in|ewa|lov|o c|dan|u m|cho|uva|ia |pan|kam|we |ove|nan|uko|bi |kav| ya|lim| um|eli|u n|nga|uli|lia|mil|o n|â€™ch| kw|li | an|aha|dil|ata| dy|e l|nâ€™t|i v|tuk|hoh|u i|hev|ni |niw|und| ul|ade|lel|kay|lon|e u|ino|i n|nje|uwa|she|yik| ly|hum|ako|i w|uma|vya|kwa|ba |â€™ma|val|kil|mwe|mba|mu |pal|umb|wav|hih|ulo| ka|e c|nde|wal|ima|â€™ni|lun|ihu|a y|vin|yoh|e i|vyo|inj|u c|kup|kuv| ki| mâ€™|a s|e p|dol|lek|awa|o u|nâ€™c|iwa|imu|anj|mal|yen|u w|yac|bil|oja|o a|ha |utu|ech|i d|uka|taw|nâ€™m|ita|awu|ina|mâ€™m|i a|itu|hon|lu |atu|mak|iku|lya|lit|jel|evo| vo|i l|mah|hap",
                        snn: " ba|ye |bai| ye|ai |e b| ca|aiÌ±|ia |ji | ne| si|iÌ± | go|goa|sia|i n|e c|a y|i y|Ì± b| ja|se |aye|i j|a b|jÃ« |iye|e g|re |oa |hua|yÃ« |quÃ«| gu|hue|eÌ± |uÌ±i|guÌ±|ne | ma|Ì±i |jeÌ±|eo |e s| hu| Ã±a|bay|o y|Ã±e |ja |ajÃ«|to |aij|deo| Ã±e|a i|ayÃ«|ba | ji|beo|cat| de| be|e j|i s|mai|e e|bi |a Ã±| co| e |ato|uÃ« |Ã±a |i g|e Ã±|i b| iy|cha|Ã« b|eba|coa|na | ts|e y|Ì±je|reb| i | ti|i t|jaÌ±|ach|ue |e i|i c|ni |oac|e t|a Ã«| re|je |aiy|oji|eoj|aÌ±j|oye| Ã« |Ã« t|cay|ija|ico|ihu| sa|i d|ere|a c| qu|ahu|iji|ca |ua | yÃ«| to|a h|ase|ues|Ã« s|aca| se|uai|e d|ese|asi|caj| ai| tu|tut|utu|Ã« c|yeq|equ| na|cai| iÌ±|ti |mac|e m|Ã« g|ebi|a a|ani|tu |e n|yeb|eje|oya|toy|coÌ±|a m|Ì± t|ije|sic|eso|eoy|a t| a | te|haj|cah|oas|are|i m|a s|ehu|aÃ±e| da|o b| do|i i|i r|e r|neÃ±|yer|huÃ«|Ã« y| o |jai|a j|aje|a g|ibÃ«|Ã«ay|aÃ±a|aja|a o|coc|bÃ«a|oca|sos|doi|oi |aco|eÃ±e| jÃ«|Ã« d|Ã« j|cas|Ã«ca|hay|ea |Ì± g|ari|tsi|yij|sai|Ì± c|osi|teo|o h|co |Ì±re|nej|Ã«hu|o s|ose|jab|Ì±ni| me|rib|Ã±es|si |yaj|jÃ«a|uaj|Ã« m|dar| yi|oe |e o|nes|iÌ±r|ma |nij|i h|oja|uÃ«c|ama|Ã« i|iÌ±h|oÌ±u|Ì±uÃ«|Ì±hu|aqu|Ã«co|e a|aÌ± |Ã«ja|Ì±Ã±e|oÌ±a|goÌ±| Ã«j|Ã±eÌ±|tia|abÃ«|sih| bi|tsÃ«|sÃ«c| je| cu|Ì± a|ned|cab|a d|ore|me | oi| ro|jay|tso|Ã« r|eye|ta |bÃ« |Ã±aj|soe|Ì±ca|oÌ±c|aÃ±o|o c|ire|ohu|uej|Ã±ej|i a|Ã±as|Ã« q| ju|ban",
                        kbp: "aa | pa| se|se |na |nÉ› | nÉ›| yÉ”| wa|yÊŠ | É›y|É› p|É–É› |aÉ–É›|a É›|a w|É›wÉ›|É›na|yÉ› |ala|É› É›|É› s|É”É” |yÉ”É”|É© É›| É› |paa|e É›|e p|É›yÊŠ|aÉ£ | pÉ©| É›w|a p|waÉ–|ÊŠÊŠ |a n| ta|yÉ” |yaa|yÉ© |wÉ›n|la |taa|ÊŠ w| tÉ”|a a|É” p|É›ya| kÉ©| É© |É©yÉ›|a t|ÊŠ É›|a k|wÉ›É›|tÉ”m|É”m |É› t|wal|ÊŠ n| wÉ›| Å‹g| tÉ©|É› n|É› k|kpe|É› É–|maÉ£|zÉ© | an|ÊŠ t|É› y| pÊŠ|nÉ© | tÊŠ|É›yÉ©|É©É£ |É© t| we|É© y|anÉ©| pÉ”|a s|gbÉ›| pÉ›| É›s|pa |kpa|É›É› |wÉ› | nÉ”|daa|nÉ”É”|ÊŠ y|ama|ya | kÊŠ|tÊŠ |pal|mÉ©y|ayÉ©|É© p|É©na|tÉ© | É–É©|ÊŠ p|É” É›| É›l| mb|É” s|Å‹gb|a y|É©ma|É–É© |ÊŠ k|É”É–É”|É© n|bÊŠ |mbÊŠ| É›k| kp|É›ja| É›j|tÊŠm|jaÉ–|paÉ£|kÉ› | ye|É›yÉ›|alÉ©| na|i É›| ke| ya| É–É”|É© É–|É”É”y|nda|É–É” |fÉ›y|É£ É›|É© s|jÉ›y|yi |É–É”É–|É›la|lÉ© |kÉ©m|kÉ© |aÅ‹ |bÉ›y|pee| Ã±É©|lab|É©zÉ©|pe |eyi|Å‹ p|É© É©|É›zÉ©| fa|É”yÊŠ|aÊŠ |ÊŠmÉ©|ÊŠyÊŠ|ÊŠma|a l|sÉ”É”|a É©|ekp|ÊŠ s| aj|ajÉ›| É›t|iya|wey|É© k|ÊŠ Å‹|ma |kan|É©sÉ©|laa|É”yÉ”|É©m |li | kÉ›| lÉ›|and|sam| sa|É£tÊŠ|É” k|day|É”É”l|É£ p|sÉ© |É”Å‹ |É©fÉ›|akp|pak|sÉ©n|pÉ©f|naa|ndÊŠ|kul| ha|aÉ£t|É” y|uli| É–e| kÉ”|eek| pe| sÉ”|m n|Å‹ga|ee |ga |É–ÊŠ |maÊŠ|m t|e e|É£na|É£ s|Å‹gÊŠ|abÉ©|akÉ©|a Ã±|yaÉ£|pÉ©z|eki| É–o|maÅ‹| la|yee|ana|tÉ©Å‹|É£ t|pad|Ã±É©m| ca|É› a|a É–|pÉ©s|ina|dÊŠÊŠ|É–e | É–a|a m|lÉ› |ked| É›É–|lak|aka|gÊŠ |asÉ©|ÊŠ É–| É›d|dÊŠ |nÊŠm| nÊŠ|Ã±É©n|ba |É›pÉ©|pÊŠ |ada|É›hÉ›|hal| a |le |zÉ©É£|É›É›n|É›sÉ©| le|aÉ£z|uu |nÉ–É©|e t|Å‹ n|É›da|lÉ©m|e w|É” w|É© a| É›p| nÉ–|É›kÉ›|i p|É£zÉ©|alÊŠ|zaÉ£|bÉ© |É› l|É©kÉ›|É” t|e y|É–am|aaa|pÉ›w",
                        tem: "yi | yi| ka|a ÊŒ| tÉ™|uni|ni |wun| É” | aÅ‹| wu|ka | kÉ™| kÊŒ| ÊŒÅ‹|nÉ› |kÉ™ |tÉ™k| ÊŒm|É™kÉ™|É”Å‹ |mar| É”w|a k|ma |i k| a |wa | mÊŒ|i t|ri |É”wa|thÉ”| th| ma|ari|i m|a a|ÊŒma|aÅ‹ | o | ba|tha|ba | kÉ”|a y|Å‹ k|É”m |â€e | rÊŒ|lÉ”m|kÉ” |i É”|kom|o w|ÊŒnÉ›|te |mÊŒ | Å‹a|i o|É™m |hÉ”f|É”f |alÉ”|om |a m|É” b|É” y|aÅ‹f|fÉ™m|hal|kÉ™p| mÉ™|Å‹fÉ™|ÊŒth| tÊŒ|a t|a r|Å‹ y|Å‹th|Å‹a | ÊŒt|É” k|e É”|É› t| ro|wan|ema| gb|ank| ye|th |yem|nko| mÉ”|ÊŒwa| sÉ”|kÊŒm|m a|kÉ™t|ÊŒmÊŒ|anÉ›|rÊŒw|É” t|ÊŒme|ÊŒÅ‹t|me |ÊŒte| bÉ›|hÉ” |a É”|ki |ÊŒÅ‹ |m ÊŒ|m k|ar |Å‹ É”|yÉ› |É™th|É› ÊŒ| ta|i a|ta | ÊŒk|É™ k|thi|et |pet|pa |Å‹É”Å‹| te|Å‹e |i ÊŒ|ra |i r|É™pe| Å‹É”|É› k|ÊŒ k| yÉ”| rÉ™|kÊŒt|rÊŒ | yÉ›|bÉ› |e a|e t|ro |É” ÊŒ|akÉ™|thÉ™|É” m|aâ€e|É™pa|a w|kÉ™l|É™ b|yÉ” |É™ t|mÉ” |bot|Å‹ t|e y|É™Å‹ |mÊŒs|gba|e m|m r| bo|ÊŒÅ‹e| ak|É› a|nÊŒn|lÉ™Å‹|É™lÉ™|sÉ”Å‹|Å‹ b|tÉ™m|wop|ÊŒ a|É™ y|kÉ™s|sek|É™ s|tÊŒt|li |ot | ko|É› Å‹|Å‹ a|ekr| ra|É”th|sÉ”t|ÊŒse|ath|ru |t k|É› m|e k|É›th|maâ€|po | po| wo|ÊŒrÊŒ|i y|m t|m Å‹|tÊŒÅ‹|tÉ”Å‹|e w|gbÊŒ|tÉ™ |nth|ÊŒyi|ÊŒlÉ™|hÉ™n|ÊŒ ÊŒ|op |iki|ÊŒkÉ™|rÊŒr|ÊŒru|Å‹gb|sÉ” |É™yi|rÊŒn|gbÉ™|É” a|É™r |É”kÉ”| pÉ™| ÊŒr|É™nÊŒ|lÉ™s|nka|ith|É™li|ÊŒy |bÉ™l|mÊŒy|ran|o É”|É› r|ant|f ÊŒ|mÉ™ |ti |f t| tÉ”|É™s |r k|hi |yik|É” É”|rÉ™k|kar|ÊŒ t|mÊŒt|lÉ”k|ayi|krÊŒ|pan|na |kÊŒr|mÉ™t|tÉ™t|tho|pi |mÊŒl| to|to | wa|ÊŒgb|thÉ›|É™ g|bas|eÅ‹ |aÅ‹k|É” r|thÊŒ|o t|É›Å‹ |iâ€e|kÊŒ |kÊŒs|mÉ”Å‹|o d|kÉ”Å‹|din|É” g|kÉ™w|di |Å‹ w|É™ma|É›r |ÊŒ y|É™k |Å‹ko",
                        toi: " ku|a k|wa | mu|a m|la |ali|ya |tu |i a|e k|a a|aku|ula|ntu|ang| al|lim|lwa|kwa|aan|mun|mwi|de |ulu|ngu|wi |imw|luk|gul|na |ele| ak|kub|ons|unt|kul|oon|se |ant|nse| oo|zyi|gwa|si | ba|ba | lw|zya|uli|ela|a b| ci| ka| zy|waa|and| an| kw|ili|uki|eel|uba|nyi|ala|kut|ide| ma|kid|isi|uny|i m|kun|cis| ya|li |i k|nga|a l|yin|kuk|ka | ul|kus|ina|laa|nte|ila|tel|mul|wab|wee|nda|izy|ede| am|led|amb|ban|we |da |ana|kwe|e a|lil| bu|o k|bwa|aka|ukw|o a|ati|uko|awo|yan|ko |uci|ilw|bil|bo |a c|wo |amu|law|mbu|i b|bul|umi|ale|abi|kak|e m|u b|akw|u o|ti |sal|kuy|ung|bel|wak| bw|o l|ga |kal|asy|e u|lan| mb|lo |usa|ika|asi|aam|a n|ule|bi |cit|bun|kup|egw|muk|igw|u k|u a|mbi|wii|kum|a z|aci|ku |yi | mi|yo |le |mas|yig|ubu|kka|i c| ab|ene|ne |no |a y| wa|abo|ndi|uta|syo|aya|aba|len|kuc|eya|o y|mal|ind|lem| lu|ukk|mo |eka|mil|mbo|ita|uka|ama|lik|u z|ndu|mu |nzy|zum|bal|abu|upe|bam|syi|u m|liz|int|ta |yak|ley|e b|nzi|lii|kab|uti|ube|uum|i n|cik|ezy|iib|iba|ani|iko|iin|ile|was| ca|zye|alw| aa|sya|uku|twa|min|tal|muc|umu| nk|du |azy|onz|lek|kon|buk|o m|yik|i z|lwe|u u|oba|kwi|imo|gan|zil|del|usu| we|peg|yee|ngw|sum|imb|ump|mpu|nde|end|i o|yoo|o n| nc|a u|mi |ano|uya|o c|di |mba|yil|yal|ako|a o|isy|izu|omb",
                        est: "sel|ja | ja|le |se |ust|ste|use|ise|Ãµig|mis| va|gus|ele|te |igu|us |st |dus| Ãµi| vÃµ| on|on |e j| in|ini|nim|ma |el |a v|iga|ist|ime|al |vÃµi|da | te|lik| ig|adu|mes|ami|end|e k|e v|l o| ka|est| ra| se|Ãµi |iku| ko|vab|aba|tus|ud |a k|ese| ku|l i|gal|tsi|lt |es |ema|ida|ks |a i|n Ãµ|lis|atu|rah|tam|ast|sta|e t|s s| mi|ta |ole|stu|bad|ga |val|ine| ta|ne | pe|nda|ell|a t|ali|ava|ada|a p|ik |kus|e s|ioo|tes|ahe|ing|lus| ol|a a|is |vah|a s|ei | ei|kon|vas|tud|ahv|t k|as |a r|s t|e e|i v|eks|oon|t v|oni|kÃµi|s k|sio|sus|e a|gi |mat|min| pi|s v|oma|kul|dad| ni|e p| om|igi|tel|a j|e o|ndu|dse|lle|ees|tse|uta|vus|aal|aja|i t|dam|ats|ni |ete|pid|pea|e Ãµ|its|lma|lev|nis|dis|Ã¼hi|sli|i s|nen|iel|des|de |t i|et |nin|eva|teg|usl|elt|ili|i m|ng | ee|tem|ses|ilm|sek|ab | pÃµ|ait| ne|Ãµrd|sed|vÃµr|ul | Ã¼h| ki|abi| kÃµ|ega|rds| vÃ¤|ots| et| ri|pÃµh|ed |tÃ¶Ã¶|si |ad |i k| tÃ¤|ata| ab| su|eli| sa|s o|s j|sil|nni|ari|asu|nna| al|nud|uma|sik|hvu|onn|eab|emi|rid|ara|set|e m| ke|a e|tÃ¤i|d k|s p|i e|imi|eis|e r|na | Ã¼l|a Ã¼|koh|a o|aks|s e|e n| so|Ãµik|saa|and|isi|nde|tum|hel|lii|kin|Ã¤Ã¤r|sea|isk|een|ead|dum| kÃ¤|rii|rat|lem|umi|kor|sa |idu|mus|rit|har| si|vad|ita|ale|kai|teo| mÃµ|ade|Ã¼ks|mas|lse|als|iaa|sia|sot|jal|iig|ite",
                        snk: "an | a | na|na |a n|ga | ga|en | su|re |a k| ka|su |a a|a s| ta|un | se|ta |ma | i |ama|do |e s|ere|ser|aan| do|nan|nta| ra|n s| ma| ki| ja|jam| da|taq|ne |a g|a d| ya|n d|ni | ku|ren|ri | si|ana|u k|n Å‹|Å‹a | nt|e k|maa| Å‹a|ndi|wa |aqu|ane| ba|ra |a r| sa|oro|n t|raa|tan| ke|oxo| xa|i s|di |a f|and|ti |a b| be|i k|gan|aax|aaw| go|iri|kit|awa|axu|sir|a i| du|a t|me |ara|ya |ini|xo |tta|i a|oll|ran|on |gol|e d|n g|a j|nde|aar|e m|be |a m|ari|u n|lli|ron| fa|qu | ti|n n|aad|axa| Ã±a|o a| so|ke |nu | ko|din|lle|dan|a y|man|i g|sor|u r|i t| no|are|xar|kuu| wa|enm|ada|baa|de |qun|o k|yi |xun|i n|i x| an| ha|kan|fo |att|ang|n k|o s|dam|haa|da |n y|kat|e t|li | fo|i d| mo|nme|u b|i m|aba| fe|len| re|pa |ant|ayi|yan|e n|a x|e y|n b| di|ppa|app|kap|xa |u t|o g|mox|ure| xo|ond|i i|a Ã±|n x|taa|du |ell| me|iti|xu |u d|udo|ind|uud|anu|nga|o b|nun|nox|n f|ku |aga|anÅ‹|dun|itt|eye|ye | bo|ore|ite|u a|oor| yi| ro|sar|saa|ill|e b| wu|le |riy|nma|ro |ken|edd|fed|bur| mu|mun|o n|iin|tey|sel| tu|u m|lla|la |ono|Ã±aa|den|faa|a w|te |inm|ka |aay| te|ina|xoo|o d|ira|u s|o t|nmu|nen|ban|ene| ni|Ã±a |o i|uur|una|o m|xon|n w|kaf|gu |e g|a h|kil|yu |und|aqi|een| bi|bag|i j|n Ã±|laa|i r|no |sig|igi|kor| o |i b|bat",
                        cjk: " ku|a k|yi | ny|nyi|la |wa | ci|a c|a n|we | mu| ha|i k|nga|ga |a m|kul|uli|esw|sa |ana|ela|ha |ung|a h|ze |tel|swe| ka|a u|mwe| wa|ci |ate|kwa|mbu|ya | ya|ma |uci|kut|han|u m| mw|mut| ul|nat|e m|e k|mu |uth| ca| ma|lit|aku|ang|thu|na |ca |ka |nji|i m|kup|pwa|hu |ji |kan|wes|i n|ina|li |ali|e n|asa|mba|a i|e a|ifu|fuc|amb|ize|ing|anj| mb|ita|bun| kw|uta|i u|cip|a y|awa|muk|i c|naw| ak| na|imb|lin|kus| ce|ite|ila| an|upw|ta |ula|ong|ulu|esa|a a|kha|wo |ba |ngu|ukw|lim|u c| xi|nge|kuh| un|umw|cif|lem|emu|ulo|o k|kun|aka|umu|ama|wik|ala|xim|o m|has|ikh|mwi|tam|te |o n|imw|uka|utu|lo | es|a w|ule|ku |ipw|usa| ng|i y|ili|wil|no |aci|e c|ko |kum| ye|bu |kuk|ufu|o w|mo |e u|pwe|cim|uha|e h|ngi|aze|imo|swa|yes|mil|ciz| mi| in|ulw|akw|e w|ika|so |lon|e y|iku|eny|mbi|o y|yum|isa|umb| li|aco|e i| iz| ja|cik|tan|lwi|kat|nda|i a|uni|wak|fun|uma|o c|a x|i h|aha|nal|u k|uze|was|ema|lum|pem|ngw|o u|wam|kal|co |kwo|uso|a e|apw|una|tum|sak|gul|umi|nin|ja |ces|iki| ik|tal|bi |ata|yul|nyu|zan|ile|ge |wan| uf| up|lik|le |wen|waz|kwe|ele| um|aso|wac| if|i w|hak|i i|man|mah|go | cy|oze|yoz|hal|ges|cin|kuz|uvu|iso|da |o l|gik|ngo|lul|eka|cyu|upu| yo| ut|ipe| uk|kol|ise|u i|vul|mun|ne |cen| it|kuc|mul|and",
                        ada: "mi |nÉ› | nÉ”| nÉ›| e | he|he |nÉ” | a |É” n|kÉ› | kÉ›|i k| ng|a n|i n|aa |e n|blÉ”| bl|É› n|É› e|gÉ› |ngÉ›|e b|lÉ” | ma| mi|É› h| ts| ko|hi |É› a| É” |ko |e h|É›É› |tsu| ni|É” k|a m|a k|i h|ma | ny|emi|a h|ami| be|be |i a|ya | si|e m|e j| ka|si |É› m|É” f| kp|nya| je|ni |oo |loo|o n| hi| fÉ›|fÉ›É›|a t|laa|a b|je |e k| pe|pee| ye|mÉ› |umi|É” m| ha|a a|É”mi|omi|kpa| wo|É” e|i t|É› É”|e s|i b|É” h| lo|É› k|ke |ha |bÉ” |maa|mla|i m|É” t|É”Ì |e p|kaa|ahi| sa|lÉ”h|É”hi|sum|É” a|nÉ”Ì|o e| na| gb|ee |e É”| ji|e a|i s| ml|É› s|sa | hÉ›|É”É” |yem|u n|alo| jÉ”| ku| lÉ›| bÉ”| to|a s|É› b|i l|lÉ› |sua|o k|uaa|a j| su|É›mi| ad|É› y|imi|ade| fa| al|jÉ”m|des|esa|eÉ” |ihi|ji |ne |É› t|a e|É› j|ake|e e|kak|ngÉ”|o a|eem|i j|e y|wo | bu|him|e w|Ì k|É” y|tom|suÉ”|ia |ane|mah| ya|o b| ke|e g|wom|gba|ue |ba | bi| gu|uo |e t|san|uu |pa |hia| tu| hu|suo| we|tsÉ”|É” s|e f|kuu|gÉ” |o m|a p| ja|É› p|fa |É” b|É› g|hÉ›É›| ab|a l|hu |ye |na |tue|i É”|isi| sÉ”|sÉ”s|jam|gu |ti |É› w|sis|o h|uÉ” |li |a w| ba|sÉ”É”|abÉ”| ju| hl|É”sÉ”|hla|É” l|a y|sÉ› | É”m|É”mÉ›|i w|É›ti|pÉ›t|kpÉ›|to | yi|asa| kÉ”|nyu|akp|pak|kpe|sÉ”É›|É”É› |u É”|yÉ›m|o s|uÉ› | nu|pe |se | sÉ›|o j|a g|É” w| wa|sem| pu|su |e l| mÉ›|u k|hÉ› |nih|kas| fÉ”|kon|onÉ›|bim|lam|imÉ›|nyÉ›| fi|hiÉ”|usu|i p|bi | nÃ­|yo |eeÉ”|uam|bum|nÃ­h|Ã­hi|o l|ula|kul|guÉ›|naa",
                        quy: "chi|nch|hik|una| ka|anc|kun|man|ana|aq |cha|aku|pas|as |sqa|paq|nan|qa |apa|kan|ikp|ik |ech|spa| de|pa |cho|ere|der|rec|am | ru|an | ma| ch|kpa|asq|ta |na |nam|nak|taq|a k|qan|ina|run|lli|ach|nap|pi |mi | ll|yoq|asp|ima|hay|hin|aqa|nku|ant|ayn|oyo| hi| im|hoy|cio|nta|nas|q k|api|iw |wan|kuy|kay|liw|aci|ion|ipa|lla|oq |npa|ay |kas|a m|nac| na|inc|all|ama|ari|anp| ya|chu| hu|nin|pip|i k|qmi|hon|w r|ata|awa|a c|ota|in |yku|yna| wa|a h|has|a d|iku|a l| li|pan|ich|may| pi| ha|onc|a r|onk| ot|ku | qa|ank|aqm|mun|anm|hu |a p|nma| mu|qta|n h|pap|isq|yni|ikm|ma |wsa|aws|kaw|ibr|bre|lib|ayk|usp|nqa|e k| al|lin|n k|re |ara|nat|yac|kma|war|huk|uwa|yta|hwa|chw| sa|was|kus|yan|m d|kpi|q m|a i|q l|kin|tap|a a|kta|ikt|i c|a s|uy | ca|qaw|uku| tu| re|aqt|ask|qsi|sak|uch|q h|cas|tin|pak|ris|ski|sic|q d|nmi|s l|naq|tuk|mpa|a y|k c|uma|ien|ypi| am|qaq|qap|eqs|ayp|req|qpa|aqp|law|ayt|q c|pun| ni|a q|ruw|i h|haw|n c| pa|amp|par|k h| le|yma|Ã±un|ern|huÃ±|nni|n r|anq|map|aya|tar|s m|uÃ±u|ten|val|ura|ita|arm|isu|s c|onn|igu| ri|qku|naw|k l|u l|his|ley|say|s y|rim|aru|rma|sun|ier|s o|qar|n p|a f|a t|esq|n a|oqm|s i|awk| va|w n|hap|lap|kup|i r|kam|uyk|sap| qe|ual|m p|ran|nya|gua| pe| go|gob|maq|sum|ast| su| ig",
                        rmn: "aj |en | te|te | sa| le|aka|pen| si| e |el |ipe|si |kaj|sar| th|and| o |sav|qe |les| ma|es | ha|j t|hak|ja |ar |ave| an|a s|ta |i l|ia |nas| aj|ne | so|imn|mna|sqe|esq|nd |tha|haj|e s|e t|e a|enq|asq|man| ja|kan|e m| i | ta|the|mes|cia|bar|as |isa|utn|qo |hem|o s|s s| me|vel|ark|i t| na|kas|est| ba|s h|avo| di|ard| bi| pe|rka|lo | ak|ika|e r|a a| pr|e k|qi |mat|ima|e p|a t| av|e d|r s|n s|anu|nuÅ›|o t|avi|orr|o a| ka| re|n a|re |aja|e o|sqo|sti| ov|Ãµl |l p|nqe|ere|d o|vor|so |no |dik|rel|ove|n t|ve |e b|res|tim|ren| de|Ã ci|o m|i a|but|len|ali|ari|rre|de | pa|ver| va|sqi|ara|ana|vip|rak|ang|vi | ra|or |ker|i s|eme|e z|ata|e l|a e|rip|rim|akh|la |o p|kar|e h|a p|na |ane|rin|ste|j b|er |ind|ni |tne| ph|nip|r t| ke|ti |are|ndo| je|l a|uÅ›i|e n|khi| bu|kon|lim|al |tar|ekh|jek|Ã lo|o k| ko|rde|rab|aba| zi|ri |aÄ‡a|Ä‡ar|Å›ik|dÃµl|dor|on |ano|ven| ni|Å›aj| Å›a|khe|Ä‡a |ast|j s|uti|uni|tni|naÅ›|i d|mut| po|i p|a m| pu|a l|l s|som|n n|ikh|nik|del|ala|ris|pes|pe |j m|enÄ‡|e e|nÄ‡a|ndi|rdÃµ|kri|erd|Å›ka|emu|men|alo|nis|aÅ›t|Å›ti|amu|kh |tis|uj |j p|do |ani|ate|nda|o b|nge|o z|soc|a d|muj|o j|da |pri|rdo| as|cie|l t|ro |i r|kla|ing|a j| ze|zen|j e|ziv|hin|aÅ›k| st|maÅ›|ran|pal|khl|mam|i b|oci|rea|l o|nqo| vi|n e",
                        bin: "e o|ne | ne|be |an |en |vbe| o |wan|mwa|n n|e e|emw|evb|mwe|in |na |e n| na| em|omw|e a|n e|e i| vb|re | ke|gha|gbe|wen| gh|ie |wee| om|e u| kh|bo |hia| ir|ha |o k|nmw|tin|n o|vbo|he |eti|ia |kev| ev| we| et|win|ke |ee |o n| hi|a n|a r|o r|gie|ran| ya|ira|mwi|a m| mw|a g|ghe|ogh| a | re| uh|eke| og|n k| no|ro |ye |khe| ye|hek|rri|nog|een|unm|a k|ogi|egb|ya |ere|wun|hun|mwu| mi|mie|de | rr|a e| ar|a o|n y|e v|o g|un |ra | ot| gb|uhu| ok|n i|ien|a v|rhi|e k|n a|i n|a y| ru|khi|n m|hie| eg|oto|arr|ba |ovb|u a|e y|ru |ian|hi |kpa| ra|o m|nde|yan|e w|and|to |o e|o h| ni| rh|e r|n g| er|n h|ugb|we |hae|on | iy|dom|rue|u e| or| ik|ren|a i|aro|iko|o y|n w|ben|ene|rio|se |i k|uem|ehe| ov|otu|okp|kug|oba|iob| uw|aen| do|iru|ae |tu |ue | iw| ma|wu |rro|o o|rie|n v| ug|a u|nna| al|ugh|agb|pa | ay|o w|ze |uwu|ma | eb|iye|aya|ugi|inn|gho|rre|nii|aku|gba|khu| se|yi |onm|ho |a w|ii |iwi| uy|uyi|e d| i |hin|obo|u o| ak|beh|ebe|uhi|bie|ai |da |i r|gbo|o v|won|mwo|umw| ag|ode| ek| la| um|aan| eh|egh|yin|anm|mo | kp| bi|kom|irr|i e|a a|kha|oda|bon|a d| ow|owa|ghi|n u|o a|yen|eem|ieg| az|aze|hoe| yi|oe |e g|ele|le |lug| ka|aa | as|yaa|gue|a h|mu |nre| od|n r|ero|ese| ku|enr|lel|vbi|wa |u i|a b|oro|bi ",
                        gaa: "mÉ” | ni|ni |kÉ› |É› a| ak|lÉ› |i a| he|É› m|akÉ›| lÉ›| ko|gbÉ›|É” n|É›É› | mÉ”| kÉ›|yÉ› |li |É› e|ko |É” k|i e|aa | yÉ›|bÉ› | ml|shi|É› h|egb| gb|É”É” |mli| fÉ›|fÉ›É›|heg|nÉ” |a a|i n|aÅ‹ |oo | nÉ”|i k|he |É› n| es| am|É› k|É” y| sh| ma|esa|loo|ji |maÅ‹|amÉ›|emÉ”|É” f|fee| ek| al|É›i |ii |É” m|É” a|bÉ” |e n|É” l|amÉ”| eh|alo|hi |naa|ee |É”mÉ”|oni| en|o n|kon|aji|i y|i m|sa |o a|eli|umÉ”| bÉ”| hu|yel|hu |eem|nÉ›É›|tsu| ah| nÉ›|sum|tsÉ”| an|nii|o e|baa| as|mÉ›i|yÉ”É”|gbÉ”|aaa|na |i h|eye|É› g|eÉ” |É›ji| at|ana|eko|ena|o h|Å‹ n|kom| ts|É” e|maj|i s|i l|efe|ome| kp|a l|kwÉ›|ku |ehe|toi|a n|saa|bÉ”m|ha |a m|kÉ›j|kpa|hew| ku| sa| na|hiÉ›| hi|ane|gba|e e|i f| mÉ›|É› t|bÉ›i|ash|Å‹ k|e k| ej|hey|aka|ats|ne |its|e a|san| ay|ye | je| kr| ey|mla|eÅ‹m|nit|a h|É” b|É› s|anÉ”|Å‹mÉ”|a e|É› b|jeÅ‹|É› y|aan|kro| ab| af|any|iaÅ‹|É” g|a k| yÉ”|uÉ” |shw|ets|ekÉ›|usu|Å‹Å‹ |Å‹ma|esh|u l| ba| et|iÉ” |i j|o k|suÉ”|oko| yi|e s| ag|afe|agb|oi |Å‹ a|rok|o s| aw|ai | ji|É› j|aye|Å‹ h|ish|nyÉ›|la | ad|o m| ef|tsÉ›|sÉ› |wÉ” |ewÉ”|mÉ”É”|ehi|aÅ‹m|hwe| bÉ›| to|É” h|jÉ› |aha| ja|paÅ‹|alÉ›|awo|sÉ” |Å‹ts|É›Å‹t|iÉ›Å‹|bii|diÉ›| di|mÉ›b|eni|his| ny|e b|hik|u k|ate|i b|Å‹mÉ›|akw|o y|eÅ‹ |ahe| lo|me |ade|É” j|kÉ›n|teÅ‹|yeÉ”|É” s|des| su|wal|nyÉ”| eb| eg|Å‹ m|mef|saÅ‹|É› l|o l|u n|asa|sem|jia|wÉ› | em|o b|gbe|hil|ihi|hih|É”Å‹ |nak|e h|sus|e g",
                        ndo: "na |oku|wa | na|a o|a n|ka |ntu| uu|tu |uth| om|e o|mba|ong|omu|ba | ok|uut| ne|he |the|ang|hem|emb|unt|o o|a u| wo|nge| iy|ehe|kal| no|a w|o n|no |nga|e n|ko |mun|oka|lo |o i|lon|we |ulu|a m|ala| ke|la |a k|u n|han|ku |gwa|osh|shi|ana|ngu|ilo|ano|ngo|keh| mo|ga |nen|man|ho |luk|tha|ge |gul|u k|eng|ha |a y|elo|uko|a e|ye |hil|uka|li |go |wan|ath|wo |thi|dhi|uun| pa|kwa| ta|a p|ya | sh| ko|nka|lwa| os|mwe|oma|ta |ema|sho| ka|e m| yo|sha|wok|ika|po |o w|onk|e p|pan|ith|a i|opa|gel|hik|iya|hi |aan|una|o g|kuk|alo|o e|nok|ndj|le |a a|men|yom|a s|i n| li|and| po|pam|lat|kan|ash|waa|aka|ame|gam|umb|a t|ond|yuu|o k|olo|ane|ing|igw|aa |ele|kul|mon| gw|ilw|gan|o y|iil|iyo| el|kut|nin|oko|ike|o m| ku|adh| ye|amw|ome|yeh|aye| ga| on| yi|a g|lyo|ne | ng|mbo|opo|kug|eko|yok|wom| oy|non|iye| go|ulo|e e| we| e |ina|ant|omo|ene| a |i k|mok|him| dh|und|ndu| me|eho|wen|nek| op|alu|e g|ima|kat|ota|oye|ila|ngw|yop|wat|ela|o u|a l| ii| ay| nd| th|o l|yon|ili|oon|okw|yaa|taa|lwe|omb| ni|aku|i m|mo |ula|ekw|enw|iyu|pok|epa|uki|ke | wu| mb|meh|e t|uni|nom|dho|pau|eta|yi | ly|o a|ono|lun|lak|ola|yo |lol|ank|bo |i o|awa|nwa|a h|naw|hok|nem|kom|ndo|o s|u t|vet|mbu|ani|uga|ndi|ukw|udh|lok|e k|alw|kwe|kun| ya",
                        nym: "a k|na | ku| na|ya |a n|la |hu |a b| ba|a m| ya|ila|aki| ha|nhu|wa |hak|ki |le |a h|ga |nga| mu|ban| wi|ja | kw| ki|i n|ang|a w|i y|ele| bu|we |han|aga|unh| ly|kil|lya| wa|mun|ali|ili|a i|u n| ma| ng|kwe|ina|anh|kwi|si |u b|nsi|win|u w|mu | ns|e b|e k|kul|ula|gan|ala|e n|and|ulu| bi|no |iya|ba |ini|lo |yag|gal|yo |se |kub|lu |alu|ha |ose|lul|a l|ule|mo |ani|wiy|e l|lil|gel|ing|li |uli|iha|lwa|akw|ile|ka |ngu|ige|i k|ku |bi |shi|ngi|i j|lag| lu|a y|u k|bal|aya| ja|o n| nu|o y|u a|cha|gi |aba| al| ig|ana|uno| bo|kuj|gun|ubi|wan|lin|ilo|ika|o l|lim|iku|i b|iwa|nil|jo |ngâ€™|aha|zil|nul|wel|kwa|bos|o a|e i|gâ€™w| ga| li|ziw|uma|nzi|ndi|ung|lel|bo |imo|mah|kus|wen|bil|yak|kuk|o g|gil|usa|a u|iwe| we|kup|ilw|abo| il|e w| hu| sh|ma |bul|elo|dik|o k|o b|uba|lek|gwa|sab|kut|nda|da |nha|aka|u m|mba| zi|eng|kuz|gul|lab|agu|anz| nz|nik|ujo|tum|man|kin| yi|umo|e m|iga|a s|ano|hay|ayo|mil|ish|utu|o u|mal| ul|i w|lis| um|o m|iki|agw|ne |uga| ch|lug|i l|nza| ib|bun|agi|ni |ngo|ye |uko|oba|bya|ndy|ene|asa|bas| ik|zi |o h|azi|mas|ko |biy|uja|uku|i m|imu|som|e h|elw|iyo|iso|za |i i|yi |yin|u l|ngw|uhu|lwe|bak|iba|pan|upa|sha|nel|ash|ima|atu|bad|yal| i |sho| mi|ho |fay|afa|maf|o w|kal|kim|wâ€™i|wib|go |â€™ik",
                        sus: "xa |axa|ma |a a| ma| xa|ama| na|an | a |ra |un | sa|ada|xan|a x|ya |nun|a n|xi |ui |a m| nu| ax|iri|di |dam| ad|i n| ra|fe | bi|de |yi |in |lan|bir|rin|bÉ› |a b|a s| bÉ›|nyi|nax|n a| fe| mu|ari|na |i b|a f|mu |ara|kui| ku| É²a|man|nde|dax|sar|a k| wa| la|É›e |nÉ› |xun|É›tÉ›| ba|i a|ndi|n m|iyÉ›|ayi|aya|fer|ali|era|a y|n n|riy|n b|aba|É› a|adi| xu|mad| fa|i s|any|amu|É²am|n f|una|iya|e m|ana|li |É› n|i m|É› s|ala|e n|e x|e b|É”tÉ”|sab|n x| nd|bar| yi|wal|ati|sÉ”t| e |i k|en |afe|i x|nam| da|ixi| sÉ”|nxi|kan| ya|bun|a l|tÉ› |nad|ima| ki|axi|ti | su|ie |yib| yÉ›|e s|mas|inÉ›|e r| fi|yÉ›t|ira|ibi|anÉ›|É› m|mal|and|yÉ›e| bÉ”| mi|may|a É²| nÉ”|ras|den|biy|way| gb|tÉ” |aga|nma|asa|ase|sen|É›ra|a d|gi |É› k|a w|ind|ere|yir| di|i d| ko|ibu| ib|ank|mak|É”xi|fan|É”ma|i r|e f|yÉ› |i f|abu|kim|nÉ”m|tin|e y|n s|on |xin|bat| ke|e k|bÉ”x|gan|uga|sug|alu|sa |aka|n y|ant|xaf|fin|awa| al|ta |eya| de|ban|anx|tÉ›r|und|i y|mix|É›rÉ›|yo |n l| ta|ren|ide|e a|mui|nba|ker|a t|rÉ› |lon|olo|kol|u n|ga |ri |bÉ›t| fu| an|ee |nka|nan| si|rat|afa|u a| am| yo|mÉ› | so|yam|o m|mun|o n|gbÉ›|mul|a r|lui|ni | ti|xÉ› |É› b|end|axe|É²É› |e t|ral|n k|e l|n d|xam|far|ba |É²ax|rab|n É²|É› d|i g|É› f|iny|lu |inx|ndÉ›| xi|a e|tey|tan|i t|nni| fo|É› r|ndo|iÉ²É›| i |raf|i É²|a i",
                        tly: "iyÉ™| bÉ™|on |É™ti|É™n |yÉ™n| hÉ™|ti |dÉ™ | iy|bÉ™ |É™dÉ™|ard|hÉ™x| ka|lÉ™ |kar|rde|de | tÉ™| ÅŸÉ™|ni |n b|É™ i| ha|e h|har|yÉ™ |ar |É™ m|É™xs|yÉ™t|Ä±lÉ™|ÅŸÉ™x| be|nÉ™ |É™ ÅŸ| qÄ±|te |É™ h|qÄ±l|si |É™ b|i i|i h| he|hes| mÉ™|xsi|est|Ä±ÅŸ |r q|i b|ste|ku |ÅŸtÉ™|ÅŸ h|Ä±É™ | sÉ™|bÄ±É™|É™xÄ±|hÉ™m|xÄ±ÅŸ| mÄ±|É™ s| de|É™y |ozo|zod| oz|tÉ™ |odÉ™|rÉ™ |n h|oni|be |É™ni|Ä±ÅŸt|É™ d|É™rÉ™|onÉ™|n i|É™ k|nin|bÉ™r| va|ya |dÉ™t|É™ n|in |É™mi| ya|yon|son|mon|n d|ne |É™ v|É™yo|iku|sos| Ä±ÅŸ| in|xon|niy|lÉ™t| ko|É™xo|yo | Ã§Ä±| co|bey|tÉ™n|Ã§Ä± |von|osi| bÄ±|e i|É™ É™|co |rdÉ™|n k|É™ t| da|tÉ™d| kÉ™|e b|ins|omÉ™|kÉ™s|yyÉ™|eÉ™d|ton|miy|ini|mÄ±d|inÉ™|É™t |tÉ™m|i t|É™ c|nso|iyy|É™to|e É™|siy|Ä±da|y h|i m|asi|bÉ™y| ni|bÉ™n|daf|sti| iÌ‡| hi|i d| Ã§É™|n t| so|É™tÉ™|min|Ä±ni|É™kÉ™| bo|É™ o| ma|i É™|n o|ine|iyo|tÉ™r| cÉ™| dÉ™|Ã§É™y|dey|afi|mÉ™ |É™ro|É™vo|u b|n Ã§|É™ r|alÉ™| vÄ±|sia|É™x |mÉ™t|mmÉ™|hiÃ§|kÉ™ |eyo| vÉ™| mi|É™mm|ill|o i|nÉ™t|ast|É™ y|non|zÄ±n|ÅŸÉ™r|É™nÉ™|bÉ™ÅŸ|rob|iÃ§ |fiÉ™| É™s|nun|ial|nÄ±b| ji|i s|oy |mil|kÉ™t| nÉ™|É™so| di|kay|o k|emo|mÉ™h|n m|nik|rÉ™f|obÉ™|sÉ™ | ro|ist|dÉ™n|É™ j| nÄ±|var|tÉ™h|É™hs| do|itÉ™|hsi|Ä±bÉ™|iÉ™ |sil|ey |dax|r k|É™bÄ±|É™mÉ™|don|vlÉ™|bÉ™s|deÉ™|nom| ta|mÉ™d|É™ Ã§|ÄŸÉ™t| É™b|É™ra|bo |di | is| ÄŸa|anu|uni|tio|eyn|ion|stÉ™|ifa|ro |din|o b|ali|Ä±n |liy|É™sÉ™|sÉ™r|das|É™nd|bÄ±n|mÉ™y| cu|orÉ™|onn|É™ q|ÄŸan|s b|ynÉ™|cin|fik| hÄ±|seÉ™|lli| se|adÉ™|dev|tif|arÉ™",
                        srr: "na | a |aa | o | mb| wa|ke | na| ke|war| ka|mba|a w|a a|a n|and| no| re|no |ref|baa|ax |at |aat|en |fna|e n|in |a j|waa|a f| te|kaa|jeg|een|a o|uu |am |aax| fa|um |nd | je|efn| ne| sa|ara|o k|a t|el |u r|too|aag|iin|oor| um|a k| fo|mbo| ta|saa|ne |a m|le | ni| le|te |e m|ni |or |e w| an| ox|oxu|ta |xuu|kam|o Ã±|ng | nd|oo |fa |a d|rna| de| ng|ra |a p|ee |gna|Ã±oo|e a|eg |tee|o n|n n|oow| Ã±o|aan|g o| ye| ca| ma|a c|ang|maa| to|una|oox|nda| ki|t o|it |oon|kii|ga |eng|nee| nj|den| Ã±a|n a|ato|kat|m a|m n|len|t n|yee|op |dna| fi|raa|boo| bo|gee|o l|o a|oka|a s| la|arn|ow |r n| da|o m|naa| ja|o j|a b|fi |nga|gaa|egn|ef |a y|uun|aga|eer|a l|fop|bug| ya|bok|an | we|o t| al|eeg|a r| mu|are| jo|e f|ox |bod|aak|t k|ir |Ã±aa|i m|a Ã±|x l|m o|o x|ndi|we |n o| fe|bar|ala|t a|l n|e t|laa|ena|ak | pi| i |gen|ay | xa|m m|n f|adn|pi |gni|ake| ak|f a|nan|ale|g w|eet|ona|nit|d n|d o|i k|jof|o y|e x|du |koo|fog| aa|iid|ern|il |u n| yi|yii|r k|iif|taa| ad|ag |a x|nde|aru|lay|i a|et | xo|xoo|e y|kee|p m|x a|noo| nu|paa| pa|aam|g n|og |ate| ge|can|if |fee|nge|wii|yaa| bu|ugn|e k|dax|re |o s|daa|ene|a É“|jal|ap |doo| do| xe|ina|n k| mo|nuu|xe |aar|ako|luw|uwa|u t|É“is|aay|d u|all|as |moÆ´| ga|e o|x o|l k|p a|odu",
                        kha: " ka|ka |a k| ba| ki|ing| ji|ki |jin|ng |ei | Ã¯a|an |ong|ad |a j|ba |Ã¯a |ban|bad|i k|ha | la|wei| ha| py|ne |ok |pyn| sh|hok| ho|ang|ah |don|sha|lon|a b|a l| do|g k|on |la |a h|n k|i b|ew | pa|iew|i d|d k|rie| ne|i p|iÃ± |a s|am |da |oh |kaw|awe|k b| lo|ait| kh|i h|ar |uwe| uw|e k|aiÃ±|kan|id |lan| ma| ri| jo|jon|ai |lui|lai|d b| ky|na |uid|ri |ngÃ¯|itl|tlu|a Ã¯|pa |h Ã¯|n Ã¯|kum|ynt|m k| sa|bri|ngl|m b|h k|hah|no | da| ku|ngs|at |eh |uh |kam|gÃ¯a|n p|kyn|o k| ai|dei|ynr|ano|or |h b|ngp|a r|i l|em |i n|a d| de|i j|kha|ngb|n l|ngk|yns|man|Ã¯oh| by|aba|a m|r b|a p|byn| na|kab|um |kat|shi|t k|g b|d j|sah|pyr|Ã¯ad|i s|mar|m d|ym |hla|gpy| Ã¯o|leh|rai|g s|it |ada|syn|ane|a n|r k|yng| hi|gla|ta |om |non|ngt|m j|im |h p|ynb|w b| sy|sho|k k| ym|har|n b| im|i r|n s|hei|mla|a i|a t|hon|ahl|yll|nsh|iml| u |nra|nge|khl|anb|gka|ap |ynj|g h|n j|ryn|e b|h h|lem|bar|the|t h|a a|uk |nia|d h|t b|iba| no|kib|nta| ni|aid|en | be|eng|tre|m Ã¯|glo|nbr|aw |gbr|ot |hi |alo|rei|i u|be |hap|ti | le|ngn|d p|ra |un |bah|ynÃ¯| tr|w m|e a|khe| bu|ngi|thu|lah|Ã¯ar|bor| ja|huh|n u|nri|him|ngm| br|ian| se|nth|yrs|pat|tyn|bna|nbn|kyr|dan|lad| ty| ta| pu|gsh|rsh|g j|e j|rim|h s|bha|m s|ngd|Ã± k|yrd|k l|w k|hle|h n|g u|roh|aro|bym",
                        hea: "it |ix |ib |aix|ang|ong|aib|if | la|id |lai| li| do|ot |ef |f l| no|ait|non| ye| ba| da|ol |t d|of | di|aif|t y|dol|et |uai|nx |ngb|gb |lit| qu|mai| ma|ax | ja| go|gf |ngf|enx|b d|qua|hai|ngd|gd |il |f j|ail| ai| ha| hu|t n|x d|dai|t h|ban| se| na| zi| ax|nen|ab | ne| de|d n| gh|t l|x l|nai|ul |nt |t g|x q| xi|nf |ngt|gt | ni|x m|yef|dio|l n|gof|eet|zit|b z|ian|x b| ji| za|gid|ent|t z| gi|f d|ut |yen| id|b g|ns |eef|ngx| xe|gx |hul|nia|ens|d d| je|jab|iee|is |f g|ox | fa|x n|nb |b n|s d|l d|enb|t j| ho|gha|d g|dei|dot|aot|b h|ud | ze|xid|gl |ngl|t a|af |b j|f h|x s|uit| vu|zen| pi|el |eix|f b|f z|x j|t x|uf |t b|eis|x g|as |d h|bao|b l|os |iot| ju|l h| xa| si|xen|aox|d a|f n| ga|t s|f s| mo|s h|f x|inf|l g|ob |ios|l x|enf|gon|xan| zo|x h|x z|x x|gs |ngs|mon|ux |faf|gai| yi|jao|die|ad |hof| bi|d l|ghe|b b|b f|x a|l a|at |zas| du|xit|b s|see| hv|l j| be|t f|hui|d m|f y| fu|b x| ya|zai|t v|l z|sei|iao|jib| sa|x y|zon|sen|lif|s n|b a|sai|iel|eb |aob|aid|x p|set|jee|xee| lo|nd |jan|f q|jef|ub | gu|s g|hot|cai| ca|pin|s l|ben| zu|f a|end|den|ex |hei| wi|jif| hf|fut|lie|yit|lol| ve|d b|dad|us |jus|t i|x f|f m| ib| su| ge|l q|jub|es |b y|sit|lix|x i|s a|yan|f t|vut| ti|t c|fud|jit| hx|t m",
                        gkp: "aa | ma|a k|maa| a | nu| É™ | kÉ›|i h| di|kÉ› | hu|la |a n|le |ei |ala| hw|li | lÉ”|di |É”i | ka|É›li|i k|an |É”n | yi|ele| da|kaa|da |hu |É›i |É“a |aal| mÉ›|É›ni|mÉ›n|pÉ›l|laa|i l| la|ni |É™ k|kel| kp| yÉ›|nuk|i É™|a h|a p| ye|É”É” |a l|É™ m| pÉ›|lÉ”i|lÉ™ |nÉ› |ti |ii |É“o |i a|i y|a m|yii|ai |É™lÉ™|a y|hwÉ™|nu |yei|É”lÉ”| Å‹É”|a d|gbÉ”|aan|i d|kpÉ”|ma |É›nÉ›|i m|pÉ™l| É²e|u m|n n|hwa|wÉ™ |É› a|e y| ga|lÉ› |a t| ti| pÉ™| É²É›|ili| gÉ›| É“a|n m|gaa|i g|yÉ› |É› É™|uke|É²É›i| ke|olo|É²ei|ulo|É“É™ |a É²|u y| tÉ”|Å‹É”É”|bÉ”É”| É“É™|i n|lon|aak|yi |yÉ›n|É› l|wa |a É™|É”pe| lÉ›|É” l|uka|i É²|lo |anÉ›|a É“|Å‹aa|lÉ”p|kan|naa|u d|u k| É²a|i t|ee | lo|kol|É™lÉ›|É”É“o|n d|É” k|É™ g|ju | gb|É™ p| kÉ”| É™l| ni| dÉ”|iÉ™ |nua|É™ l| ko|kpÉ›|a a|lÉ”É“|nii|É› y|É”É”i|ui |na |É”É“a| Å‹a| ta|woo|n g|lÉ” |É›n |i Å‹|É›gb|iiÉ“|É™ h|i É“|É› m|tÉ”É”| ju|mak|É”É”É“|a Å‹|iÉ“a|É”ma|kul|É›lÉ›|un | nÉ”|É› k|É› d|pÉ”n|n É²| ya|mÉ›i|kÉ›n|wai|É”Å‹É”|a g|Å‹É” |ta |wÉ›l| É“o|nui|akÉ›| ki|gÉ› |É²aa|nna|wÉ” |nÉ”i| gu|oo |É”wÉ”|É› n| na|lÉ›g|lan| li|wal|kÉ›i|nut| ku| jÉ”|yil|tÉ”n|e d|lu |É”nÉ”|pe |onn|akw|É™ n|É™la|a w|e h|kÉ›m| hÉ”|É™le|n Å‹|owa|É› g| mÉ™|pee|aam|ila|uan| nÉ›|É™ d|pÉ” |o m|mu | tÉ›|pÉ”m|kil|oi | ge|akp| he|uta|tÉ” |É›na|É›ti|É” t|n y| ho|diÉ™|É” g|awo|É™li|mun|u h|É›yi|kÉ”Å‹|É” m|low|e l|dÉ”n|kÉ™l| kÉ™|liÉ²|iÉ²a|É²ah|É™ t|nÉ”n|ilÉ™|ulu|ahi|hÉ”l|ama|on |lÉ”n|a j|e É“|lok| Å‹u",
                        hni: "aq |ol |iq |il |ei |eil|nei| e |aol|al |oq |uq |sol|vq |aoq|l l| ss| ma|q m| la|mei|yuq|liq| li|l m| me|hha|maq| aq|eiq|sso|q s|q b|col|lne| co|l e|q l|q a|pyu| ne| qi| hh| bi| yo|q h|bi |oln| mi| ha|yoq|haq|q e|iei|lei|av |q y|aqs| le|qso|ovq|qiq|goq| ng|nga|hal| za|uv | xi|miq|l n|oqj|laq|qhh|ivq|saq|ul |l h|q q| mo|ha |yul| go|oqh|q n| ao|xil|l a|olp|avq|lpy|gao|lal| al| da|lao| ya|jal| hu| ta|qja|i h|ssa|nie|zao|aqn|hao|mee|l q|mov| bo|q x| ba| ei|duv|bo |doq|ma |zaq|l y|eeq|v l|e c|eiv|q c|a l|ild|yao|q d| na|aln|qni|i z|jol| ka|l d|duq|zei|l z|dei| lo|iqn|a b|ev | de| sa|hho|uvq|l s|q k|q z|v n|if |gee|kao|ldu|a m|so |lav|e n|i n|i y| ce|i s|qla|i m|qiv|taq| py|ga |eq | zo|zol| du|huv|l b|i l|qa |i c|iv | ni|hyu|aql|qli|el |l k| ga|o m|mia|oqp|lme|qo |qpy|q p|v m|oqg| qa| si|ldo|e m|nyu|lha| ze|qle|q t|ya |a g|cei|q g| qo|faq|i a|mil|dal|jav|eel|ov |vql|l t|i d|qnu| ko|nu | pa|aqh|qdu|hov|l c|nee|o q|lo |olq|hoq|qho| so|loq|o l| jo|siq| do|iao|a s|zyu|alm| ja|lee|bal|oql|yu |old| fa|a n|hu |i g|e g|olk|dav|hav|qha|dao|aqy|iqz|gal|kov|nao|l p|nia|iqh|qji|hol|yo |yil|soq|e s|lja|eev|lka|lla|l x|v s|tao|v d|ilm|aqm|e d|e z|nge|lss|u n|ao |dyu|e q|i q|mol|ilh|mav| gu|l g|qgo|q j",
                        fry: "en |an |de | en| fa|fan|och|n e|cht|ing|n f|joc|rjo|yn | de|ng |it | rj| be| yn|at |e f| it|oar| ha|te |n d|fer|in | fe|der|ht | op| fo| oa|n s|ten| te|op |ien|elk|wur|nde|ke | el|t o| Ã»n|ear|lik|n i|ar | fr|lk | e |er |ch |foa|e e|min| wu|hat|rde|e m|le |t r| ge|of |oan| of|Ã»nd|ste|ike|ens|n w|e s|n o|ken|rij| st|n t|fri|ske|n b|ne |om |ins|gen|urd|asj| mi|e o|nsk|mme| in|id |e w| sy|hte|dy |e b|syn|sje|re |tsj|k h| dy|t f|men|jin|den|hei| da|n h| me|ige|sil| si|il |jen|et |dat|n g|eid|ers| al|eri|e n| om|mei| na|t d|t i|ijh|jhe|e r| t |ei | tr|tro|ski|nne|n n|is |ard|nin|y t|ber|nst|bes|roc|ich|fol| ta|imm|t e|sji|ter|arr|t h|lin|aas|n y|mie|lea|ede|kip|erk|lle|n m|are|all|g e| ma|erw|Ã¢ld|str| gr|tin|naa|haw|inn|ns |aww|ere|r d|rin|es |emi|wwe|s e|sjo|ker|nas|sti|rie| we|jes|ein|je |d f|st |ona|jon|ele|ngs|s f|e y| dÃª|dÃªr|as |ze |e h|nge|ern|lde| ne|ene|nim|hÃ¢l|e a|zen|we |lli|anl|e g| li|pen|end|omm|ink|g f|kle|ij | ni| di| ea|al |t t|est|lit|tea|ale|ge | as|r i|rdi|bie|ren|bet|nte|ean| he|eni|p i|n l|kom|wÃªz|Ãªze|hed|ang| by|esk|wen|pli|rre|tel|ite|nli|iis|wii|rwi|erm|n a|bel|s d| ie|t s|tte|dic|se |sel|tli| no|Ã»nt|rkl|sÃ»n|e t|n Ã»|ik |f o|e d|nom|eit|gel| is|oer|soa|t g|rso|lke",
                        yua: " u |al |aÊ¼a|l u|Ê¼al| tu|Ã¡ak|il |oÊ¼o|u k|ak |el | ka| ye|yet|ete|tel|an |ik |mÃ¡a|tiÊ¼|l m|Ê¼ob| ku| be|k u|l t|ob | mÃ¡|aj |lÃ¡a|kaa|naj|u t|tal| ti|u n|kal|aka|eÊ¼ |n u|eÊ¼e| kÊ¼|l y| wa| na|wa |tul|u b|ulÃ¡| le|baÊ¼|l w|iÊ¼ |aan| je|maÊ¼|aaj|jal|l k|jeÊ¼|le |ajm|ala|jma|nal|Ê¼ u| si| ma|en |kÊ¼a| dz| ba|tik|maj|jil|bee|ali|taÊ¼|aja|Ê¼an|kaÊ¼| ch|u y|uch|ijn|tu |loÊ¼|kux|lil|aji|jna| ya|sij|xta|uxt|Ê¼a |u c|een|aÊ¼ |laÊ¼|ku |ume|tum|mee|Ê¼ t|k y|saÊ¼|Ê¼aa|Ê¼e |tÊ¼a|eet|bey|ini|u m|wÃ­i|nik|l b|Ã­in|uÊ¼u| wÃ­| mi|bes|iÊ¼a|sik|Ê¼aÊ¼|u d|mal|kbe|j t|dzo|nil|alo|ich| tÊ¼| ja|tÃ¡a| tÃ¡|leÊ¼|chi|Ê¼ab|mix|oÊ¼ |ant|eti|ax |chÊ¼|zoÊ¼|bal|b t|una|hil|ol |k t|alm|x k|eya|j u|iÊ¼i|Ã¡an|Ê¼ok|koÊ¼|ach|ili|boÊ¼|l l|x u|u p|yÃ³o| yÃ³|Ê¼ol|n t|lma|u j|e b| me|yaj|esa| un|Ê¼ m|xan|ani|et |mat|olt|l j|noÊ¼|uun|k k|nta|e n|tma|atm|Ê¼ k|a u|mey|yaa|ey |ajt|kul|tzi|Ã¡ax|okb| no|lti| xa|lal| nu|u l| ju|cha|Ê¼at|lak| ic|lta|aba|iku|tuÊ¼|Ã¡at|ch |xak|okÊ¼|zil|kÊ¼o|kil|akÊ¼|Ê¼ux| aÊ¼|teÊ¼|k s|Ã³ok|Ã¡aj|chÃ­|hÃ­i|n k|b y|Ã­im|e m|Ê¼ax|uku|a m|l s| uc|jta|t u|naÊ¼|beÊ¼|pÃ¡a|Ê¼Ã¡a|joÊ¼|iko| pÃ¡|hak|kuu|imp|Ê¼ b|mpo|pol|Ãºuc|abe|eyt|ul |kub|uba|Ã³ol|kÊ¼Ã¡|a t|ana|y j|n j|ex |ixm|ix |xmÃ¡|Ê¼ac|tan| pa|ajo| bo|jaÊ¼|uns|akp|kpa|paj|bet|l x|ata|a j|kÊ¼i|ux |Ê¼ l|aab|chk|pÊ¼Ã©|Ê¼Ã©e|Ã©el| ke|Ê¼ y|Ê¼ex|ab ",
                        fij: "na |aka|a n| na|ni | va| ni|vak|ata| me|a v| ke|me |a k|i n|ua |ena|a e| e | ta|ra | en|mat| do|onu|ka |nu |don|ala|ta |odo|dod|a m|i v|e v|ai |ei |ina| se| ga|u n| no|ama|ki |la |kei|se |aki|ga |tak|a s|vei|ale|i t|a d|a t| ve| ca|e d|tam| vu|anu|a l|tik|i m|ce |e m|kec|ece| ma| le|ara|iko|cak|i k| ki|dua|van|tu |i e|le |nua|wa |a g| qa|awa|e n|lew|kin|ona|non|a i|tau| sa|qai| du|e k|dra|era| ya|tal|uta|e t|e s|ita|nod|ko |kat|ani| it|iva|i d|odr|itu|u m|ura|lal|nak|aca|gal|aut|ula|bul|law|kai|uva|au |e g| ra|vin|a q| ku|kad|ewe|kac| la|o e|mer|avu|va |u k| vi|oqo|ava|kua|tan|uku|vur|kav|li | ti|e e|adu|aga|i s|vat|e l| ka|qo |ma |ito|a y|oka| oq|nit|oma|iti|a o|uli|e c|avi|aba|ewa|ega|dui|asa|a r|seg|a c|vuk|vul|oti|rav|ken|vu |sau|u e|kot|ya |cal|vi |i c|auv|e b|kas|i b|utu|oya|i l|rar|eni|sa |eit|kam|ke |ait| bu|u v| tu|kab|dok|rau|val|o n|o k|tab|ku |taq|qom|ri |we | so|ila|ima|aqo|i i|igi|dig|tov|lai|ti |evu|lev|o v|ovo|wen|niv| ko|yal|eiv|abu|lat|e r|uri| er|abo|bos|ado|vo |cav|tuk|ose|u s|una|mak|kar|koy|mur|ira| be|uit|ci |rai|ba | lo|tav|sag|ali|vuv|gi |oli|yad|ola|rab|lit|idu|uke|wat| di|kil|gau|aun|iki|aqa|ia |uid|eim| vo|yag|e i|kaw|mai|iya|num|oto|oni|nan|lot|otu|idi",
                        fur: " di| de| e |di | in|al |ion| la| ch|rit|eri|e d|zio|is |che|tÃ¢t| a |la |de |der|Ã¢t |on |t d|ts |ndi|ne | al|gni| co| pa|ind|te |i i|ui |azi|he |ogn|ni | li|it |ssi|i a|e p|Ã¢l |si | un|i d|e i| da|in |ivi|e c| og| cu|nt |e l| Ã  |div|Ã  d|s d|par|idu|vid|dui|e s|i p| si|s e|i c| pr|un |t c|e e|a l|l Ã |ce | i |une| o | so|lib|ess|ent|ns |ar |i s|e a|tri|con|int|a s|itÃ¢|ai |naz|ibe|n c|nce|n d| je|il |ber|pro|its|l d|t a| il|ste|rtÃ¢|ris| st|dal|ons|ign|ert|dis| na|es | du|s l|Ã»t | no| ri|com|ri |ant| sÃ´|son|ers|ont|enc|res| ma|est|hes|sÃ´ |e o|ie | pe|per|soc|s n|men| po|i g|cj | an|s a|nis|e n|dai|i v|cla|sun|Ã¢ts|uni|je |iss|s o|e t|an |ins|ich| ta|oci|anc|s c| ti|no |ssu| fa|n p|ate| ni|t e|l o|tig|i l|jes|nÃ¢l|re |duc|e j|fat|e u|a a|sti| vi|ame|ter|n e| gj|des|châ€™|s p|uzi|din|sis|l s|tis|me |ond|str|iet|n a|Ã´r |tra|rso|idi|gje| se|ntr|ran|sie|ucj|art|nst|ara| re|nit|uin|a c|lis|ei |n o|nte|n s|l e|ntÃ¢| om|i f|o s| te|vit|onÃ¢|e m|ltr|n i|alt|a i|a d|hâ€™a|pÃ² |ade| pÃ²|ist|imp|l p|man| ju|ome|e r| pu|gjo| cj|ari|tru| me|i o|ric|se |oss|ite|i r|dec|raz|lit|ass|s t|nde|t p| ce|sta|r d| fo|om |cul|ali|cen|vÃ´r|l c|t o|stÃ¢|bar|one|fon|nda|tan|tal|ruz|cja|fin|e f|ciÃ¢|ern|t l|e b| le|iÃ¢l|i n|etÃ¢",
                        tet: "tu | ho| ha|ia |ha | ih|iha|a h|ma |an |nia| ni| di|ema| em|eit|itu|ho |un |ire|dir|a d|rei| ba|ida| at|ba |otu|hot|ade|a n|aun|atu|dad|u h|de |sau|asa| li| ka|u i| la|ka |la |hal| ne|a i|alu|tan|han|a s| mo|lu |al | se|ir |ne |os |esa| tu|san|e e|n h|da |tui| id|ane|u a|uir|a l|e h| ra|ai | sa|us | te|u b|n i|a t|rai|i h| e |e n|nes|in | ta|ak |lib|nas|ten|a e|ibe|ber|rda|erd|a k|nal|u n| no|sia| na|ki |mos|s h|ens|aso| hu| pr|ara|ras|ebe|bel|be | de|n n| si|a r|u t|ele|enk|nki|n t|tus|u s|nte|n e|le |a f|nid|asi|o l|o m|neb|ona| ma|no |ori| in|sos|ran|uk |ter|ent|ra |hat| be|ei |u e|a b|sa |du | re|a m|usi|as |uni|ira|ali|lei| so|osi|hus| es|abe|n b|sio|a a| fo|luk|men|mor|ion|ata|res|des|s l|at |nsi|rbi|is |iu |e a|lia|es |ate|has|ik | ko|u k|mak|ru |eta|a o|te |s n| he|lar|int|ama|ari| le|ala|sor|si |n l|ris|lab|n s|iku|i n|su |o h|hah|e b|k h|u r|oin|r l|re |soe| me|oen|ser|a p|ns |pro|rim|i s|erb|ili|liu|sal|man|ese|isu| fa|ial|ura|n a| fi|oru|ina|e i|cas|i e|bis|het|n k|u m| lo| ed| to|e t|lid|edu|duc|uca|elu|e k|imi|sir| un|tam|e d|sie|ano|har|en |ku |s b|s e|aha|mun|esp|est|rik|r h|are|era|ral|o d|pri|hir|ime|n d|u p| bu|uma|ern|iar|ar |a u|fo |mu |se |imu|ati|rel|sim|kri",
                        wln: " l |Ã¨s | dÃ¨| qu|t d|Ã¨t | d | di|ou |eÃ»t| po| Ã¨t|s d| a |on |es |reÃ»|dÃ¨ |qu |nt |Ã»t |e d| dr|dre| to|me |ns |di |t l|min|po |tot| on| s |te | Ã¨s|lÃ¨s|s l|dÃ¨s|er | lÃ¨|ot |s Ã¨|sse|ins|ion| co|qui|se | ou|int| ch|i s| mi| i |ui |ts |n a|cha|e Ã¨|a l|cio|ont|l d| pr|de |ome|u q|tÃ© |i l|s p|nde|ne |le |Ã¨ l|u i|Ã§ou| Ã§o|s c|Ã¨ss|e p|vin|e q|in |ske|keu|re | in|ce |l m|s q| lÃ®|ye |has|ask|nme|un |eun|inm|e o| li|ant| so|s o| si|st |i p| ma|e l| no|s s| sÃ¨|Ã¨st| n |s n| pa| av|e s|ond|n d|Ã¥ci| Ã¨n|ind|out| vi|ut |e m|Ã»ts|li |is | mÃ¨|ons|com| mo|eÃ»r|t a|Ã©s |t s|mÃ¨t|lÃ®b|us |u d|div|con|e c|e t|rin| om| ni| de|pou|t c|pay|Ã´te|sÃ¨s| r |Ã© d|Ã®re|i d|l a|s m|t p|vou|ayi|yis|e a| ri|deÃ»|leÃ»|i t| ne|ole| vo| Ã´t|ine|fÃ© |pro| fÃ©|d i|Ã¨ye|man|u Ã¨|dje| ra|n Ã¨|mon|bin|n p|rtÃ©|s a|Ã»r | le|tch|r d|Ã¨nn|tes|Ã¨te|si | bi|itÃ©|je |ivi| bo|Ã¨ p|s t|l o|nte|tÃ©s|nce|l p| il|nÃ®r|dis|s r|Ã®be|d Ã¨|bon|lu |os |n l|sin|djÃ®|u l| fo|anÃ®|rÃ¨s|u b| rÃ¨|nn |wÃ¨ | dj|il |ote|o l|t f|nin|n c|l s|pÃ´r|and|ber|r l|e r|t Ã¨| ci|t t|sco| Ã¨ |ale|k n|u o|t m|jÃ® |pri|tos|ni |Ã® d|les|Ã¨dj|ert|vol|o Ã§|r p|eÃ» | pÃ´|n n|n m|rt |r Ã¨|ice|mes|nol|t n|i v|wÃ¨r|Ã¨ t| tc|t q|noh|t o|tin| pu|i n|ous|avo|d l| Ã¥ | nÃ¥|a d|son|i r|d v|n s| se|n o|l c|o d|s i|Ãªye|cis",
                        eus: "ko |eta|en |ta | et|eko|ide|a e|an |bid| es|o e|esk|sku|iza|n e| ba|ubi| be|kub|tze|ea |era|ber|na |dea| du|rri|art| ez|asu|ak |sun|ren|tas| er|tek|ako|zek|arr|ald|ntz|ik | iz|a b|ere|atu|n a|tza|ate| da|ez |k e|a a|giz| gi|ask|rte| or|ra |abe|are|a i|ert|n b|ria|oro|de | he| as|du |e e|te | ed|edo|a d|nor|a o|za |re |k d|egi|koa|err|rre|zat| de|zar|oa |o b|ean|ri |o d|kat|una|ona|go |rts|ek |do | pe|zko|o a|rok|tso|rra|ari|ezk| di|rik| au|a g| eg|kon|son|tu |u e|lde|per|zan|est|orr|her|atz| al| ja|bes|n d| na| ga|ska|ngo| ar|n h|ten|z e|ok |ita|bat|ata| ha| no| la| in| bi|itz|dut|lan|ezi|aur|int|ien|uzt|ia |da |a h|rak|azi|ont|la |unt|a n|tat| ho|io |ino|k g|tan|ste|bai|ute|rta|har|e h|n i|tik|tea|tua|eri|ite|une|ela|itu|a p|tak|a l|rat|nar|iar|gin| ko|gab|kun|ika|tzi|i e|in |zio|den|izk| gu|rtz|raz|un |hor|ema|eza|k b| za| em|ait|ori|ina|pen|urr|e b|a j|rbe|zti|guz|zin|uan|naz|ago|dez|ker|zen|nah|nta|be |leg|ter|iak|rit|ial|kar|ahi|ara|nik|ang|ioa|zai|ena| le|dar|dee|ege|ira|git|aku|ket|iko|aio|din|dir|lda|dag|ati|nak|kor|rka|nez|orb|uen|del|u b|n o|adi|ske|lak|o l|ani|zia|hau|uru|a z|tar|or |urk|aki|die|ene|aso|oin|bak| oi|i d|ndu|e g|ing|ear|o g|beh|agu|a k|z g|ana|tuz|ort|iz ",
                        nbl: " lo|lo |nge|oku|mun|elo|o l|ung|nye|lok|ye |lel|ntu|tu |la |lun|e l|gel| ku|we |e u|akh|nga| le|aba|ule|khe|ban|unt|uny|wa | um|omu| la|he |a l|yo |ama| ng| uk|uku|uth|ele|ni |le |elw|zwe|a u|lwa|ath|umu|pha| ul|a k|elu|wen|eni|i l|kut|ezi|e a|kum|hi |kho|ela|ho |ba |ulu|ume|mel|na |ke | ab|onk| ba|nke|thi|lul|tsh|lom|eng|eyo|e i|ana|the|enz|a n|o e|o k|eth|zi |any|ala|a a|kwa|lob|a i| am|iph|e n|ant|a e| kw|izw|ane|e k|o a|ndl|het|eli|kul|mal|ang| om|ukh|lwe|alu|tha|hul|o o|kel|ha |kub|uhl|kwe|aka|o u|isa|hat| nj|len|ise|kuz|tho|kuh|thu|ben|wan|hla|alo| ez|and| yi|hwe|liz|i k|man|i a| wo|lek|oba|u u|khu|kun|won|lab|lan|i u|sa |be |hol|uba|li |izi|hlo| ak|nku| in| im|ko |und|thw|lak|ze |isi|ebe|bo |shw|sek|eke|ngo| em|mth|ayo|seb|so |ahl|hlu|fun|gan|mbe|ndo|do |vum|aph|ase|phi| ub|ley|oni|esi|mba|lem|yan|a y|nzi|azi|e e|cal|nja|kuk|o y| ka|nza|iso|ots|lon|eko|ngi|za |aku|enk|kus|kat|ga | ya|azw|zim|i y|ubu|umb|wak|hwa|e b|u o|ing|uma|jal|abe|e o|dle|yak|akw|lin| ol|o z| iz|nda|ney|gen|uli|ind|ham|u b| ye|ale|lez|u l|ziz|uph|luk|nje|ali| yo|uze|ano| ok|hon|no |zak|hen|han|wab| en|les|ili| is|okw|kup|ekh|yis|fan|maz|bal|nya|hel|nel|e w|bak|abo|e y|eze|hak|gab|dla|o b|hle|ilo|end| ph",
                        pov: " di|di | ku|ku |du | ka| na|tu |i k|itu| te|i d|adu|u d|adi|na |dir|son|i p|rit|iri|a k|on | pa|dad|ten| si|kad|a p| i |n d|u k|si |i t|al |ta |us |pa |nti|en |i n|ti | pe| pu|a d|is |s k|u p|udu| o |ra |aso|tud|i s| pr| tu|eka|pek|ent|ka | ko|da |u n|a s|dur|ur |ida| ta|u t| li|ma |in |u s|bi |int|n k|sa |a t| ki|asi|kon|pro|dis|s d|tus| un|nas|ki | ri|a n|pud|sin|i i|ber|udi|ion|lib|men|era|iku|ru | fa|r t|ia |uma|i o|ons|isi|u i| so|ibe|ter|un |nin|rda|idu| se| ji|erd|ada| ni|i r|tru| su|jin|u j|ont|u l|nal|as |sta|u o| st|tra|kum|l k|nta|ris|n s|ona|ns |ntu|kas|utr|ras|ndi|ibi|tam|kal|er |sia|osi| le|sos|ne | ut|mbi|tad|ntr|ene|amb| e |a i|i a| ju|ame|asa|alk|igu|i l|for|i u|a o|gua|s p| al|lei|e d|und|edu|su |nsi|ker|sio|lke| me|ual|ora|mi | ig|l d|a u|gin| ma|i f|i m|a m|tis|u m|a r| at|ili|a e|ial|a l|nid|imi|fas| in|a f|eso| no|nu |rot| de|nte|ote|aju|ind|pri|sie|sum|nsa|ali|dib|u a|s i|orm|ri |ant|kla| or|art|ens|dik|el |uni|ing|rti|n o|bri|rim|min|sid|ati|n p| mu|ei |e t|es |tes|s n|emb|i e|i b| to| mi|vid|ura|ini|lid|s t|iso|sis|mit| vi|se |eda|ied|kri|lda|unt|l i|ans|r s|ral|e k|ime|tal|lik|rsi|ju |uda|opi|dia|ota|a j|not| pi| vo|ita|sib| ra|jun|rat|tik|ika|ran|n i|lvi",
                        cym: " i | a | y |ol |yn |dd |au |an |ydd| ha| ga|gan|awl|haw| yn|th |eth|aet| cy|eu |edd| gy|ddi|rhy|ith| rh| un|l a| ma|y m|l i|mae|ad |wl |wb |awb|ae | ba|n b|nol| ne|e g|iau|baw|iad| dd|hyd|ddy|wn |eit|n a|d y| eu|lia| r |yw | gw|id |od | ac|d a|n y|u h|ac |oed|edi|n g|l y|u a|neu|wyd| ym| o |b h|nrh|rwy|tha|ddo|nia|ll |dyl|wli|i d| dy| na|hyw|iae|yd |red| sy|a r|ymd|unr|cyf|r h|i a| ch|ni |fre|fyn|u c|d g|dei| ar|edl|gyf| me|ned|ewn|ch |eb |nt |d h|add|a c|has|lad|ynn|u d| am| ll|idd|mde| hy|on |dau| he| di|rai|as |i g|wla|fod|u g|mew|ir |di |ait|hau|ysg|dda|h y| u |rha| ni|dol|n f|d c|d n| da|ani|gae|yli|chy|rei|wy |l n|dyn|yr |did|ai |ys |b y|hol| ad|n d|d d|hyn|el | ce|ffy|fyd|thr|yfr|lae|loe|cen|all| fe|i r|wed| bo|adw|lid|h g|yng| an|sg |i w|mdd|y g| dr| we|wei|fra|ed |io |cym|dra| fo|rdd|int|c i|sol|rio|ryd|tia| yr|amd|a u|dia|ael|g y|al | ge| te|n e| po|yno|s a|neb|odd|na |bod|ail|gwl|awn|hed|ddf|gen|ill|hre|u s|ref|dir|lli|d i|ig | go|dig|nti|yni|ein|dfr|ene|n o|ann|do |d r|dif|dat| pa|wch|dys| wa|ar |nhe|efy|lai|syl|oli| pe|lla| hw|wys|gyn| Ã¢ |hwn|gyd|y n|n i|n u|h a|pob|yff|gu |eid|dlo|oda|rad|l g|n r|ant|u r|w g|nig|iol|aen|yla|r r| er|ian|in | de|dwy|ria|han|ddu|dio|rth",
                        lus: " a |na |an | ch|ng | th| le|eh |leh|ang| mi|a n| ni|te |in | tu|ah |ni |am |a t|awh|nga|chu|cha| an|hna|han|haw| hi|hua|a l|awn|h a|a h|chh|anv| za|nvo| ka| in|ih | te|a c|h t|tur|wh |n t|vo | ta|wng|eih|n a|paw| di|hi |uan| hr|i t|hu |a a|hei|i a|mi | lo|the|al |thi|nna| da|van|aw |maw|ak |ur |hun|hia|tha|ung|g t|hhu| ra| pa|kan|ga |n h|o a|kna| hm|h c|int|dan|ram|ei |ian|dik|i m|hra|nei| sa|ava|ikn|ran|n n| ne|n c|ema| av|hri| em|e h|thl|uah|h l|h h|pui|mna|thu|ihn|sak|nih|hma| ti|kaw|a m| hn|hin|h m|l t|ing|r a|tin| ng| nu|tak|tan|a i|un |rin|mah|awi|awm|kha| la|l a|lan|nun|ui |hil|g l|iam|k t|a k| kh|hla|zal|i l|k a| hu|zaw|alÃª| pu|n l|n m|lÃªn|nte|iti|ngt|nch|mal|ima|lam|m t|upa|lo | ve|daw| re|man|mit| he|mih|n r|ata|ihr|u a|a p|h d| na|awl|rem|a r|el |n d|a d| at| ma|mim|gah|il |tla| hl|e c|ka |h z|h s|ek |gte| va|g h|m h|i h| tl|h k|ha |ia |eng|ana|en |g a| si|tih|h p|Ã¢ng|i z|Ãªnn|h n| zi|tup|tlÃ¢|wm |din|n k|m c|aih|g d|nan|wk |awk|ntl|pua|g z|una|gai|e t|i r|ual|whi|aka|hum|hle|him|lov|len|uma|n p| du|he |zir|vek|tum|a s|ann|ahn|t t|sia|loh|at |m a|rna|i k|k l|lh |zah|lna|duh|nam| ph|taw|m l|va |uh | aw|sua|wn |awt| ba|iat|saw| ro|lÃ¢n|iah|ama|emn|l d|baw|i c|phu|a z|ant|zÃ¢w",
                        dag: "ni | ni|li | ka| di|ka | o | za|ali|i n| so|i k|di |i d| la|din|am | sh|shÉ›|i b|a n|an |kam|i s| be| n |zal| yi| ti|im | ma| bÉ›|i o|gu |in |a d|i y| bi|igu|uÉ£u|bÉ› | kp|É£u |la |aÅ‹ |i t|a s|i z|É›li|a b| ny|Å‹a |zuÉ£|oli| da|ee |a z|hi |aa |a k|ya |al |oka|be | zu|ma | su|ani|n n|sok|gba|lan|ili|lig|u n|hÉ›l|o d|ir |sol| Å‹a|uni|maa|n b|yÉ›l|a Å‹| li|l s|bu |iri|iÅ‹g| yÉ›|É›Å‹a|hÉ›Å‹|mal|ri | ta|tiÅ‹|ti |i l| tu| sa|Å‹É” |Å‹an|nyÉ›|i Å‹|taa|bee| ba|É”Å‹ | gb|nim|ari| Å‹É”|uun| na|Å‹ n|so |a t| pa|ini|u b|n k|bi |si |zaa|m n| ch|Å‹si|Å‹gb| yu|mi |aÉ£i|uhi|ita| wu|i p|ama|o s|o y|lit|aaf|É” n|aÅ‹s|ban|ko |i m|m m|fi |afi|tum|o n|zaÅ‹|yik|suh|kpa|iko|m s|nya|a y|e l|iÅ‹ |mdi|aan|na |o k|iya|uhu|dam|kpe|u k| bÉ”|o t|wuh|ia |e n|bil|paÅ‹|nir|É›hi|yÉ› |yaa|a o|yi |m k|u s|a l|u l| do|uli|daa|ahi| mi|nzu|n w|aal| pu|haÅ‹|m z|lim|sim|rig|e s|inz|too| to|ooi|oi |ala|u d|i g|m b|o m|o b|niÅ‹|kan|maÅ‹|yub|ubu|É› n|chi|m t|abi|lli|m l|ba |cha|bÉ”Å‹|aai|n y|n z|ima|n c|igi|n m| ku|baa|puu|ins|r o|e k|n t|Å‹ o|É£si|ihi| du|É› s|e o|ana|É›m |gbÉ”| kÉ”|É£i |aha|eni| ga|hig|laÉ£|Å‹ z|aad|ibu| ya| bu|bÉ›h|n s|yu |u t|u m|nka|un |baÅ‹|i a|da |aas|sÉ”Å‹| sÉ”| mu|paÉ£|sir|É£iÅ‹|aaÅ‹|Å‹gu|u z|hu |kar| ve|iin|É›ll|É”li|ndi|pe |oma|min| wa| Å‹u|n d|rim|Å‹un|Å‹ k| al|ash",
                        dga: "ng |aa | a | ka| o | na|ang|ka |a n|eng|a t|ba |ne | ba| ne|nan|zaa|a b|a s| ta| so|a o| la|la | te|a k|ri | be|taa|na |a a| za|ten| po|nga|neÉ›|lÉ› |ga |poÉ”|e k|oÉ” |ong|a z|e n|ee |e a|É›lÉ›|a l| yÉ›|ori|a y|men|g n|sor| to|yÉ›l|g b|bee|ane| me| ye|e o|o n|o t|yel|yÉ› | an|É›za|ma |eÉ›z| ky| no| bo|a p|e b|ie |É›rÉ›|rÉ› | ny|eÉ› |be |oba|i k|ngÉ›|aal|É” a|nob|g k|re |a d|bo |É›É› |É› n|li | se|a m|kyÉ›|É› a|nen|eli|É› b|nne|sen|saa|É› l|iri|nyÉ›|o a|o y|o k|i a|o s|g t| wa|eÉ›r| ma|oma| ga|g a|rÉ” |soo| dÉ”|oÉ”r|erÉ›|fer|ge |zie|obo|oob|É› k|i n|waa|É” n| fe|rÉ›É›|o p|a f|o b| ng| lÉ›|e z|ala| bi|ron| zi|sob|tom|a e|ebe|ton|gÉ› |a g|ta |o m|a w|ro |lan|É”rÉ”|obi| e |ann| kp|É”Ìƒ |É”ge|boÉ”|É” b|oÉ”Ìƒ|É› s|gsa|É” k|ngs|daa|nda|dÉ”g|ban|É”É” |nÉ” |end| zu|kan|e t|É›so|g l| sa| da|uor|bie|zu | ko|É› z|e p|e y| k | di|bon|peÉ›|o l|sÃ£Ã£|aar|one|uur|ngn|le |puo| pu|alo|ru | de|g s|ana| sÉ›|da |ama|É› p|sÉ›r|gan|maa|son|kpe|mo |nno|beb|gaa| sÃ£|enn|san|mmo|É”gr|g y|man|gne|o o|toÉ”|ben|g d|pÉ”g|teÉ›| pÉ”|so |u k|bin|ing|aba|aab|e l| am|Ã£Ã£ |g p| tÉ”| tu|yÉ›r|É› t|te | ir|min|É› d|ine|i m|g o|aan|uo |k a|É” o|oru|lon|É› e| yi|i o|g m|gro|eÉ›l|ara|ra |de |gÉ›É›|nee|ene|o z|i b| en| yo|bal|no |lÉ›s|É›ng|É› o|uro|ale|lo |kye|yeb|di |zan|iir|É”re|bib|gÉ›s|g w|nsa|oo ",
                        bre: "en |et | ha| de|ar |oÃ¹ |zh |ezh| di| da| ar|aÃ± | pe|n d|da | gw|an |wir| an|ha |gwi| e |enn| en| ga|el |câ€™h| ma|den|ir |nt | a |ant|us |ioÃ¹|a g|ez |n e|eus|ep |r d|ll |vez|t e|ur |ag |t d|hag|deu|n h|a d|eze|pe | be|gan| dâ€™| ve|gez|t a|lez|rez|pep| ke|oll|a v| re|net|eza|e v|s g|nn |r g|ut |ade|out|oad|zaÃ±|eo |roa| ho|iri|rio| eo|ell|dig|hol|hel| fr|h a|del| ne|ran|ere|red| vo|g a|â€™he|fra| câ€™|e a|ank|nki|kiz|aou|dur|re | o |Ã¹ h|adu|eve|h e|uzh|evr|t g|ouz| he|doÃ¹|vo | ge|bet|er | le|edi|gao|ele|o d|are|dio|iz |t h|ige|z e| al|ne |nne|vro|hin|â€™h |dâ€™a|e d| ev|ni |ber|ado| em|ini|n a| hi|zio|p d|Ã¹ a|all|war|vre|r s|a z|ege| br|ed |l a|l d|maÃ±| pa|h d|p h| la| ur|l h| st|l l|Ã± d| vr|iÃ± |h h|oue|bro|h p|r b|vit|nno|skl|r m|dis| zo|z d|r f|eme|l p|bou|z a|al |ven|evi| se|l e|e e|Ã± a|isk|ab | dr| wa|Ã± e|r e|ure|e b|obe|r a|vel| ou|it |mab|r p| zi|i e|lle|n o|aze|our|zen|dez|Ã± m|nna| un|a s|izi|zet|o b|ebe|t p|at |rcâ€™|n p|rel|r r|nan|â€™ar|zel|rzh|r v| do|die|zha| eb|dre|ann|Ã¹ d|Ã¹ p|taÃ±|ane|iou|Ã¹ m|g e|abo|lab|ad |o e|haÃ±|Ãªri|ask| sk| ob|izh|eiz|o a|o g|maâ€™|aâ€™z|ent|â€™z |klÃª|lÃªr|sev|b d|noÃ¹|ren|esk|gwa|bez|gel|eli|ave|iez| na|gev|ud |n u|zeg| ko|erz|ver|una|Ã± h|ken|kad|ria|dia|fe |sta|t n|zo ",
                        kek: " li|li | ch|aq |chi| na|il |al |ru |nam|jun|b a|l l|ch |i x| a | sa|ila|naq|sa | ut|k a| te|am |ab |ut | ta|kil|an |nki|ana|i p|poy| ru|oya| il|yan| po|lal| an|nil|ten|aan|hij|i t|uni|iju| ma|ami|ank|ena|aru|wi | re|mit|ak |wan| al|laq|nar| k | aa|hi |b i|eb |re |nq |maa|q r|ala|it | ju| wi| wa|h o|q t|l c|q a|cha|u l| ra| in|hir|q c| xk|a l|ik |a a|a r|iru|aak| ri| ti| us|u t|a x|l x|i k|xb | xw|xwa|oq |xk |och| xb|l r| xt|anq|i r|l u|i c|e x|tix| xy|xch|te |q x|ib |in | xc|ink|loq| jo|aal|k i|mal|jo | ka|lb |b e|kol|n l|l n|la | aj|m n|om |u n|nk |hic|uch|xlo|ob |t l|haq|ruc|ich| ee|q l|q e|e n|xte| b | ko|jel|h u| aq|taq|l t|a n|aj |b l|rab|q s|anu| oc|aab|i j| xj|el |t t|waa|aqa| ar|a u|anj| xl|ajw|rib|sil|hom|a t|i l|nje|a i|k c|een|k u|olo|ta |eet|l a|yaa|olb|nta|uq |raj|uuq|usi|ruu|jwi|q w|kan|unt|e r|us |ok |xya|leb|t s|ani|enq|awa|nak|o k|ni |iq |i n|l w|sik|q k|uta| tz|unk|iiq|b s|ix |una|n s|tz |i u|ar | ej|xma|k e| q |b c|na |z a|a c|xju|xye|man|hil|i i|nax|taa|h i|tar|n n|ol | ol|xaq|l m|ul |rix|m l|u x| xm|esi| xn|u c| le|b u| e |paa|ama|n a| uu|tik|ent|t x|wak|i m|n c| am|b x|nto|q i|et |tee|ub |akl|q u|lob| ro|toj|s t|e c|k s|tam|e q|to |i w| xp|n t|aje|xko|a j|ara",
                        lij: " a | e | de|de |Ã§io|to | in|on |ion| co| o |rit| pe|a a|aÃ§i| dr|ti |dri|tÃ¦ | se|e a|in |ent|e d|e e|o d|con| di|e p| lâ€™|ito|ers|n d|i d| pr|te |nte|int| gh|rso|per|ghâ€™| da|da |e i|sci|o a|nn |le |son|n a|men|e l|a d| li|ale|a s|an |pro|he |e c|gni|o s|sa | so|a p|a l|ali|nsa|che|ibe|lib|ber|i p|di |se |eu | qu|oin|onn| ch|nto|o p|iÃ¢ | Ã² |ert|ioi|n e|Ã²gn|seu|tra|iti|a g|do |tut|n c|ni |ens|utt|seg| Ã²g|rtÃ¦| tu|a e|hâ€™a|li |itÃ¦|e s|ia |â€™Ã  |hâ€™Ã |pe |i s|naÃ§|ter|Ã¦ d|i e|cia|ond|n o| i |nal|e n|ta |so | at|i a|tti|Ã²u |â€™an|o e|ame| ri| dâ€™|Ã  d| pa|sta|iÃ§i| do| na|ans|ona|ra |a o|que|isc| ni|nti|i i|o l| â€™n| re|atr|e r| po|ze |e Ã²|un | me|e g|ciu|est|uni|ial|ndi|o o| fo|a t|sai|ica|a i|soc|n p|a c|io |lit|eÃ§i|ntr|nis|nta|o c|Ã¢ a|iun|com|Ã¦ e|ie |ues|o i| sa|n Ã²|i c|ese|ver|ico|ego|sen|ist|o m|e o|ge |n s|u c|ont|res|pre|dic|eri|aiÃ¢|sti|giu| st|no |teÃ§|e f|o g| gi|nit|tri|uÃ¦ |quÃ¦|ezz|ggi|eli|co |e q|ern|ita|ca |o q|egn|egg|gio| le|oci|â€™n |par|o Ã²|lo |lâ€™a|vit| un|mis|art|omi| es|ori|ri |ide|tte|dis|nda|gia|fon|o r|gge|rav|osc|goa|ime|lic|man|ina|ind|ase|nsc|tto|onp|nse| mo|iss|lâ€™e|i m|uÃ§i|ant|ami| vi|itt|raÃ§|ian|ote|rot|sso|taÃ§|avi|a n|me | sc|ich|ris|isp|ons| ma|e m|bli|pen|ere|era|ral|e â€™|der",
                        pcd: "Ã¨s | d | l | qu| dÃ¨|nt |es |Ã¨t |s d|t d| Ã¨t| di| s | lÃ¨|eÃ»t|on |lÃ¨s|e d| a |qu |t l|er |s l|reÃ»| to| po| co| on|di |int|ou |Ã»t | dr|ion|min|dre|ns |me |cio|i s|tot| pr|te |ts | lÃ®|s c|ant|tÃ© |e a|ont|le |dÃ¨s|s Ã¨| Ã¨s|ins|sse|con|ne |ome|ot |se |nde|Ã¥ci| so|lÃ®b|ye |ons|dÃ¨ |s p| in|leÃ»|t a|po |i l|de |re |e l|s m|e s|st |s q| li|ond|t p| si| pa| ch|s o|t s| mo|li | ou|e Ã¨|Ã¨ye|Ã©s | i | ma|cha|Ã¨l |Ã»ts|s s|l d|eÃ»r|si |pou|i d|in |u i|qui| no| le|Ã¨ss|out|ce |eun|ut |Ã¨st|ui |l m|a s| sÃ¨|ske|t Ã¨|s n| vi|n d|n a| al|Ã»re|has|dÃ¨l|un |e p|itÃ©| om|e c|keu|t q|ask| rÃ¨|al |vin|i p|r d|tes|l s| de| Ã¨ |ole|ter|tÃ©s|rÃ¨s|ind|com|e t|deÃ»| mi|e o|eÃ» |d l| se|mon|e q|eÂ°t|rin|nte|l a|d v| dj| mÃ¨|Ã®be|n Ã¨|mÃ¨t|l o|ass|Ã´te|s a|seÃ»|rtÃ©|il |k n| il| ni|cla|r l|dje|n p|inm| av| st|n s|be |Ã¨te|Ã© d|ine|u o|wÃ¨r|o l|so | Ã´t|nce|os |sÃ¨s|ni | n |djÃ®|Ã§ou|ran| Ã§o|r c|man|tos|e m|yes|l Ã¨|s r|Ã¨rt|bÃ¨r|Ã®bÃ¨|Ã»r |par| as|nme|a l|s f|t t|emi|vou|u l|Ã® d|is | Ã¨l|d c|u d| sa|nsi|pay|r Ã¨|l p|prÃ©|wÃ¨ | ne|bin| bi| ri| na|d a|e i|ote|one|fÃ© | fÃ©|je |Ã»ye|eÃ»y| nÃ¥| fe|a t|t i|lwÃ¨| lw|ssi|reÂ°|Ã®s |t c|Ã¨ m|u a|Ã¨ s|u Ã¨|s t|u q|Ã¨dj| Ã¨n|nts|Ã®re|tan|prÃ´|adj|fÃ¥t|inc| Ã¥ |n n|spÃ¨|Ã¨sp|dÃ¨y| et| fÃ¥|n o|us |nÃ¥l|dis|que| r |sin|van|nou|pro|avo|eÃ»s|Ã¨ri",
                        roh: " da|da |a l|la |iun| la|ha | in|as |cha|ziu|un |a p| e |ts |ret| dr| il|na |dre|s d|per| pe|a d|ain|azi|er |ls |et |a i|il | pr|in | cu|una|sch|s e| ch|l d|ing|ers| ha| li|inc|an | a |tÃ  |za |min| l |ir |Ã¼na| mi|man|nch|a c|pro|a e|a s|las|sun|lib|mai| qu|ns |nza|ta |e d|ter| Ã¼n|int|t d|ibe|ber|ala|era|is |al | o | ed|s p|ia |ar | co|uma|s l|res| um|als|ent|rsu|a t|nta|ama|s m| re|ed |ran|n s|uns|ess|tra|naz|ets|ats|Ã¼n |ant|s i|gni|nal| gn|ert|ad |chi|cun| sa|n c|hi |sta|ur |nt |anz|ist|uot|s c|ng | na|s s| d |itÃ |ra |nte|cum| me| po| de|con|a m|el |tuo|a h|uis|ras|qui| se|nir|czi| di|nu | su|t a|r i|ual| tu|d a| nu| sc| pa| ma| fa|d e|dal| ad|ss |n d|a a|l e|ica| el|n i|a r|r l|rs |d Ã¼|ngÃ¼|s n|gua|a f|a q|a v|ote|han| es| si|gÃ¼n|Ã  d|r a|lit|ari|and|d i|r p|u p|aja|rta|a g|ons|ali|r s|lla|n e|dis|sia|e l|tta|que|s a| pu|a u|nda|tan|tat| tr|sa | ar|eis|sei|n n|nd |s o|egu|a o|tsc|a n|und|ver|r d|der|ils|uni|l i|ump|cia|o g|ca |r e|n l|gna| as|es |rtÃ | ot|bli|nts|lic|che| te| ac|lur|lia|ern|ais|unt| st|soc|oci|ial| fu|air|l s|l u|ami|giu|ot |po |men|ch |e c|art|s u|pri|n p|rar|ara|ide|els|ita|paj|rot| eg|vit|dad|t i|n a| un|ria|das|pre|par|l a|enz|ati| vi|rat|n m|r Ã¼|tal| lu|n h|isc",
                        bfa: " ko| na|ko |na |i k| ka| i |et | Å‹u|Å‹ut| ti|a k|ti |gwo| to|en |on |si |esi|won| kÃ¶| gw|are|it |yÃ¶ |dyÃ¶| lo|utu|tu |de |kÃ¶d|Ã¶dy|o k|t k|ode|kod|i t|e k|t n| ki| â€˜b|n k|ya |o t|ki |kar|any|to |n n|uto| a | Äe|n Å‹|jur|ren| ju|lo |Äek|ele|liÅ‹|iri|nye|ta |eke|di |bul|ndy|u k|adi|ri | sa| ad| bu| ku|ja |kin|lÃ¶ |ulÃ¶|kan| kw|sar|kwe|yen|kes|i n|kon|a n|in |â€˜ba|ita|dya|t l|i Å‹|Ã¶ t|ak |a a|ret|yit|ur |Ã¶ k|iÅ‹ |nyi| le|kit|a t| li|nag|o l|iÅ‹i|o a|se |Å‹it|i l|an |ogw|ne |agw|iki| an|e t|u l|a i|bak|Ã¶ g|Ã¶ki| ga|ene|ojo|e Å‹|le |n a|n t| ye|a Ä|o Å‹|tol|lel|kaÄ|log|we |gay|Å‹et|t i|a m|ine|o n|ye |Å‹ k|Å‹o | Äu|oli|i i|toÄ|wej|i g|eja|a Å‹| mo|ien|nes|aÄe|kat|den|aki| lu|lie|ase|i b|gi |o s|oro| la|i j| jo|yet|a g|ind| ny|Ã¶n |ubu|bub|â€˜bu|gwe|jo |n l|ili|ju |urÃ¶|laÅ‹| te|i p|ruk|kul|ari|e g|res| ag|agi|ata|rÃ¶n|a l|oÄi|eÅ‹ |aka|rik|tod|o g|kas|yes|mor|joj|i Ä|o j|Äir|Äur|wil|tor|omo|a j| mi|odi|gel| pi|ony|gwi|din|kak|aÅ‹e| ri|e i|a y|eye|tet|orj|i m|aya|Äe |ona|a â€˜|k k|eka|pet|mir|i s|rit| tÃ¶|tÃ¶k|ni |n i|r k| yu|uka|ond|Ã¶ n|ulu|jÃ¶ | mu|oko| ke|o â€˜|e Ä|nyu| de|leÅ‹|urj| ge|du |net|un |o i|aye|yey|ani|rjÃ¶|e l| di|diÅ‹|tok|uru|luÅ‹|kor|ron|e a|mom|pir| se|nen|e n| ne|kun|u n|aÅ‹o|bur|rja|mug| Å‹o|kaÅ‹|ugu|ore|ute",
                        kri: "É›n | fÉ”|di |fÉ” |in | di| É›n| dÉ›| we|dÉ›n|É›t |gÉ›t| gÉ›|we | in| nÉ”|ayt|n d|É”di| i |an |bÉ”d|ray| na|na | ra|yt |t f|ri | kÉ”|i w|n w|É”n |t d|n f|i f|nÉ” | de|de |i g| se|É›ni|ibÉ”| É” |n É›|ul |É” g|n i| go|a d|da |É” d|go |tin|tri| É›v| pi| pa|n k|man|wan|e d| wa|i n|vri|ntr|shÉ”|ek |É›vr|ay |É” f|rib|kÉ”n|É”nt|e i|n g|nt |n n|mek| me| fr|am |t É›|É›f |say| am| bi|hÉ”n|É” m|is |at | da|se | É”l| du|du |É”l |l d|n r| pÉ”| ti|on |sin|n y|t r|i s| wi|i d|É”da|sÉ›f| ma|yon| yo|ant|t i|a p| É”d|É”bÉ”|n s|esh|É”si|i k|n p| wo|wok|it |É”m |wet|fri|É›nt|pÉ”s|nÉ”b|É”t |i p|eti|É” s|É” t|mÉ›n|t n|n É”|pul|ipu|pip|e f|bul|ok |ni |dis| yu|liv|i É›|É›kt|iv |rÉ›s| bÉ”| fi|n b| wÉ”|iÅ‹ |kt | pr|sem|ap |bi |ns |tiÅ‹| lÉ›|pan|É” b|spÉ›|as | eb| ko|em |kin|a i|t É”|al |if |so |ebu|il | if|fil|ba |i l|wit|dat|i É”| rÉ›|wÉ”l|tap| gr|k d|e g| jÉ”| tr|kÉ”m|rid|t p|ins| sÉ›|ili|nes|pÉ›k| ne|s É›|É›d | li|yun|É” p|lÉ›k|É›m |i m|É” i|s d| so| lÉ”|t w| ka| tÉ›|i i|ti |en |s i|n m| dÉ”|l i| la|l f|É›sp|e w|yn |n a|p d|bÉ”t|nay|pik|tÉ›d|nsÉ›|jÉ”y|k w|mar|ati| gÉ”|pat|i r|o d|e É”|É›p |ytÉ›| sh|idÉ”|k s|dÉ”m|m É›|É›k | ch|a w|e n|dÉ”n|mÉ”t|gen| ba|una|d n|iki|É” a|uma|frÉ”|m w|rÉ”m| sa|i y|aw |a É”|lma| as|É”mÉ”|ayn|t a|are| si|ta |red|k É›| to|tmÉ›|etm|ste| st|lat|É” l|ola|kol|m n|ot | ta|nta|pas",
                        cnh: "ak |nak|kha|hna|ah | a |mi | kh|ng |in |an | th| le|le | si| mi|haw|awh|ih |whn| ni|ai | ca|h a| ng|i t|gei| hn| te|nge| ti|thi|am |ang|at |ha |tei|a s|ein|hat| na|na |ei |ung|nih|nga|k a|ing| cu|ram|si | ah| za|k n|a h|k l| an|cu | in| lo|seh|tha|ong| pa|tua|eh |awl| ra|g t|eih|i l|sis| ch|lai|ise|mna|hun|wl |n n|naw|uah| ka|nna|caa|n a| hm|h m|i k| di|i a|te | tu|lo |a t| la|zal|lon|k t|alo|akh|h s|pak|n t|hil| um|ial|chu|uan|a c|hma|k k| ai|i m|hmi|h k|k c|kip|ip |din| ru|lte|a k|man|alt|a n| ki|n k| i |via|i c|tin|gah| up|un |upa|aah| vi|kan|rua|k h|awn|h c| da|tik|l a|ilt| ma|mah|lti|dan|i v|tla|i h|i r|e h|vo |h r|h t|ter|ian|nvo|i z| bi|m k|ihm|k i| hr|n s|o t|a u|i n|lei|han|ria|hmu| pe|e a|ngt| ci|g a|h u|anh|inv|ant|ikh|nh |bia|phu|h n|ann| ri|hia|pi |wh |hle|iah|io |e p|the| he|cio|um |p n|hra|rna|kna| zo|uh |nun| zu|awm|hng| nu|iak|h l|hei|chi|caw| tl|i d|ahn|n m|ntu|umn|h h|e z|nin|awk|him|h p|hte|amn|aih|pad|e t|lna|duh|m l|adi|mhn|i p|n c|di | ph| du|l k|ihn|tia|thl|h d| aw|h z|ern|muh|a a| ba|tel|ti |aln|iam|pat|e n|n h| su|a z|o l|k r|hua|u m|n l| un|aza|dih|he |ngk|wk |a r|eid|wng|k z|t l|wmh|nch|er |u a|n u|ina|eht|iht|a l|aan|ga |zei|pia|api|min|zon|sua|el |m a",
                        lob: " dÉ©| a | wÊ‹|wÊ‹ | ha| th|kÉ› |nÉ© |na |dÉ© | sÉ©|han| kÉ›|sÉ© | ti|bil|aÊ” |tib|ibi|aa |ana|a n| na| rÃ | hÊ‹|nan|rÃ  |il |Ê‹É” |É”É” |thÉ©|a d|É© d| n |a t|ha |kha|a h|ra |anÉ©|yaa|hÊ‹É”|ar |É© t| nÃ¡|dÉ©É©|aan|É©É© | do| ra|ni | nÃ |nÉ› |É› h|nÃ  |nÃ¡ |É© a| gb|do | cÊ‹|cÊ‹Ê‹|anÉ›|oo |É© w|É© s|É›Ê‹ |É” k| ya| fÉ›|l w|fÉ›Ê‹| É”É”| tÉ©| kp|o t|a f|a w| wo|nÉ” |a k|É©n | wa|Ê‹Ê‹ | pu|r r|hÉ©É›|rÉ© |É› d|É© n|Ê‹nÉ”|uur|É›É› |la | É©n|Ê‹ n|an |É›É›n|nn | tÉ›|É©r |É› w|É›n |tÉ©b|tÉ›É›|É©É›n|É›na| le|Ê‹ t|woo|É›r |aar|É©bÉ©|É” a| sÊ‹|É› a|mÉ” | mÉ”|n k|sÊ‹n|pun| fÉ©|bÉ©l|a m|unu| yÉ›|É©la| Ê”l|Ê‹ k|par|É© r|É©É©r|ur |oni| nÉ©|É› t| jÉ”|fÉ©r|É” d| da|É” t| jÉ©|É› n|É” n|nak|Ê” t|jÉ”f|a s|hii|n n| Ê”y|r w|a c| bÉ”|le |gbÉ›|n d|É© k| ca| kh|a g|a a|hÉ©n| tu|rÉ› |haa|l h|É©É›r|É› r|hÉ”m|thÉ”|É”ma|Ê” d|r s| so|ii |a b|wa |the|É”r |Ê‹Ê‹r|n t|akÉ›| cÉ›|uni|É©kh| bÉ©|er |a j|pÉ©É›|hÊ‹ |uu |É©nt|Ê‹ h|r n| É› |É© h|duu|bul|É©rÉ”| ka|rnÉ©|kpa|Ê‹nÉ©|É” s|bÉ›Ê‹|bÉ”É”|nÉ©r|a Ê”| wÉ”|waa|al |nu |É” w|her|i t|pa |fÉ© |aal|a y|iin|wÉ”r| dÊ‹|É©nÉ©|i n| É›É›|don|caa|ma |Ê‹ Ê”|rpa|Ê‹aÊ”|É› k|Ã  n|inn| ma| de|ado|gbe|rÉ”r|dee|yÉ› |Ã  t|too|a p|É”aÊ”| pÉ›|dÉ©k|n g|kpÉ©|n p|Ê” y|É©rÉ©|Ê‹Ê‹n|É© l|r a|Ê‹ p|Ê”ya| ba|eed|É”fÉ©|da |Ê‹ d|a É©|thÉ›|Ê”li|jÉ© |li |É› s|Ã¡ f| to|ntÉ›|tee|tÉ› |nun|i d|Ã  É›|wÊ‹a|Ã  d|n h|l n|guu|n a|akh|o d|arÉ”| bu|puu|fa |n c|Ê‹ c|len|naa|mak| kÉ”| te|É© g|Ã  h|É› y|cÉ›É›|É© c",
                        arn: "Ã±i | ce|pu |ka |ew |ce |el | ta| me|mew| Ã±i|vle|me | ka| ki|ey | pu| mv| fe| ko|ael|ci |i k|mvl| kv|aÃ±i|taÃ±|kom|om |e m|kiÃ±|en |gea| ru|ume|rum|eae|u c|ay |ley|m p|am |gu |vn |gvn| zu|ele|e k|le |tvf| tv|ugu|zug|n k| wi|elu|pi |lu |cem|fey|e c| pe|vme|kvm|em |nie|u k|aci|y Ã±|ke |a k|fel| xo|vfa|xok|oki|gen|gel|oge|iÃ±e|len|Ã±e | we|l k|kim|gka| mo| ma|ta |u m| pi|mog|igk|apu|map|fac|fij|Ã±ma| ci|age|ijk|w k|epi|pep|a w|i p| eg|iÃ± |mag|nor| no|m k|wig|lel|isu|lea|kis|a m|y t|e r|vza|i z|i n|e f|ntu|ege| fi|kvl|i m|lay|zaw|ela|l t|kvz|fem|wen|i t|w m|Ã± c|eam|eay|m c|aya|n m|ij |e e|or |y k|tun|mue|a c| fv|jka|e p|u x| cu|cij|mge|e t|epu| ep|y c|eci|egv|a f|u f|a p| ge|iel|yam|vne| ya| xv| ni|uam|xvr| ku|ole|y r|nay|un |emu|eno|w r|a t|i w|e Ã±|u t|kon|eke|y m|zua|wvn| ke|cum|mu |i f|eju| nv|uec|kej|ayg|n t|afi|vfe|mvn|vr |fvx|vxa|nol|i g|m x|w f|new|uni|u Ã±|aw | ra|i r|i x|eyc|r f| in|yci| az|tua|xa |ygv|w t|uae|iea|u w|ent|az |fie|mel|ule|ake|yay|j m|tuk|n n|uÃ±m|u p| gv|wez|eza|way|nvw|ona|su |eye|ine|may|a n|ida|u r|wae| zo|ime|z m|mni|e n|uku| lo|log|ogk|umu|sug| wv|e z|iri|wir|gko|l c|la |ewe|wkv|nmu|ayt|wel|ugv|m m|ney| na|nac|mek|cio|iÃ±k|ion|vla|kam|vna| re| xa|e w|amv|uji|awv|Ã±ke",
                        bba: " ka|ka | ba|bu |u k|ru |a k|ia | tÉ”|ba | n | sa|a t| ko| mÉ”| wi| kp|ari|a m|nu | bu| u |aa |a n|a s| te|tÉ”n|sar|re |a y| sÉ”|a b|É”nu| mÉ›|ii |u s|mÉ” |ria|ere| Ã¹ |un |ra |in |a w|u b| ti|oo |na |em | ku| wa|baa| yi|win|tem|É”É” |ko |u t|waa|aru|koo| ga|n k|sÉ”É”|wa |kpa|i m|mÉ› | ye|u w|n b|nÉ› | ya|o k|ma |nÌ€ |tii| ma| nÌ€|n t|aaw|É” b| be|u m| ta|É”mb|i t|wer|awe|am |ina| nÉ”|i b|si |i k|n w|mbu|asa|É› b|a d|era|n s|kpu|mi |u g|ya | mi|asi|ri |pur|ro | yÃ¨| da|i s|pa |u n|sia| bi|kun|a g|u d|uro|en | as|aar|e k|ana| go|goo|yÃ¨ |sÉ”m|wi | bw|saa|wii| ke| tu|tÉ”m| di|e m|u y|i n| sw|e u|wee| se| si|n m|iru|ser|É” k|nde|de |ki |e y|ua |te |n n| do| wu|an | de|nÉ”É”|É”si|ni | nd| we|a Ã¹|nun| mu| ki|een|be |É” n|n a|yer|o t| su|mÉ›Ì€|É” Ã¹|É›Ì€ |m t|ibu|e s|ee |n y|su |enÉ›|isi|o b|o n|yen|m m|uru|bur| du|m k|yin|É› t|da |gbÉ›|igb| gi|yig|sin|aan|maa|ta | nÉ›|e t|e b|n g|ye |É” t|eru|Ã¹ w|n d|swa|i d|É”ra|i y|É›ru|iri| na|dok|É”m |gir| ge|abu|ras|rÉ” |urÉ”|oke| to|eu |keu|É› u|Ì€ g|É”É”s|gia|i w|a u|m g|bun|naa|tir|É”ru|ora|aka|ima|Ã¹ g|dee|Ì€ k| yÉ›|aas|san|tor|gar|mÉ”Ì€|yii|É”Ì€ |Ì€ b|una|aye|nam|mÉ”r|kpi|ku |ara|ber|É” s|di |nÉ” |anu|i Ã¹|Ã  n|rim|É”n |wun|wes|sa |ira|ker|ke |bwe|o m|nan| so|ugi|bi |i u|m b|gaa|tur|kua|É› s|pi |awa|rÉ› |ese",
                        kea: "di | di|do |to |em | na|on | e |o d| qu|Ã§on| po| co|na | te|tem|udo|tud| tu|er |i t|qui|Ãªto|ent|ui | pa|dad| dr|rÃªt|drÃª|al |i d|m d|aÃ§o| se|el | ca|ta |i s|adi|a t| ta|i p| li|o p|a s|o e|men|i n| sÃª|ser|pod|i c|pa |que|o n|con|i e| Ã´ |e d|dÃª |a d|Ãªs |um |ti |ida|por|nti| be|a c|a p| el|odÃª| si|ado|sso|nto|co |bem|ra | in|lib|si |a e|sÃª | nu|ion|ido|o t|ndi|n d|ame|und|Ã§a |s d| de|ber|l d|uel| Ãª |nu | cu|sa | es| re| fa|Ãª s|ibe| ni|nal|erd|m p| mu| um|e e|ia |rda|omi|ess|pÃ¢ | Ãªs|Ãªm |a q|uÃªm|guÃª|de | pr|oa |nac|nin|o s|dis|soa|io |m t| pÃ¢|ca |Ã©ss|i Ãª|o m|tra| pÃ©|pÃ©s|com|nÃ§a| ho|igu|a b|i b|i f|Ãª p| tr|oci|Ã´to|soc| so|hom|or |raÃ§|naÃ§| ma|mi |e n|i q| sa|tÃ¢ |a n|ona|ngu|res|nte|cia|i m|uer|m s|rÃ¢ |ter|i l|o q|aci| ar|i r|man|ing| un|nid|rab|lqu|o c|pri|alq|ual|l e|cal|faz|usa|gua|azÃª|no |cio|m c|ort|art|ont|par|sÃªs| me| ig|bÃª |nda|l p| Ã´t|ara|mud|nta|int|ons|Ã¢ d|ntr|zÃª |djo| fu|rio|ssi|lic|e p|cas|cus|l t|l q|lei| st|cla|ial|u t|da |so |ade|Ãª d|s t|sem|r p| fi|ind|Ã¢ n|Ãª n|n p|ura|o Ã´|rte|aba| sc|fun|uni|sta|uma|udj|dje|jer|Ãª c|dam|Ãª t|ime|i Ã´|son|rgu|arg|Ã¢ s|o a|bad|a f|jo |i a|imi|sti|n e| ri|igi|Ã´ d|iÃ§o|l s|l c|r e|i h|lid|adj|cÃ¢ |ma |stÃ¢|orc|gue|lar|ran|n Ã´|o g|fic|tad|Ã¢ c|ali|era",
                        smo: " ta|ata| o |ga |aga| le| ma| fa|le |faa|a t|ma |na | e |ia | i |ai | ai|tau|a a|a o|a e|gat|a f|e t|au |a m|ta |i l|tag|o l|a l| tu|tat|a i|se |e f|e a|ona|aia|si |iga|ua |uma| se|o t|o o|oga| la|i a|asi|a s|alo| um|ula|tas|oto| so|ina|a u|tul|atu| on|ea |i o|lag|ala|o a|tai|fai|u o|ana|ait|mal| at|aig| sa|i t|toa|aat|lo |e i|e m|e l|e s|ama|olo|o s| lo|i m|i s|ito|aua|i u|oat|lot| au| ua|ava|sao|i i|tog|aap|no |o m|aol|fua|po | po|laf|nuu| ia|u i|ino|ei |uu |aal|lea|u m|aam|pea|tu | ao|ato|ape|mai| a |tin|lon|lan|uai|ele|oif|soi|ifu|oa |ain| to|unu|aut|ono| mo|pui|alu| ga|tal|fon|afo|tus|o i|a p|i f|usa|afa|u e|so |ese|usi| pu|i e|tun|isi|maf|va |ali|sa |ati|tut|utu|ega|ton|onu|u p|gai| ag|aas|la | al|loa|asa|ave|anu|e o|nu |ufa|man|fia|aus|gal| av|ale|aai|mo |u t|lia|tot|o f| pe|oli|aog|nog|oai|u a|pul|uga|mau|ola|ou |tou|len|lat|ofi|noa|ae |aav|nei|lei|aa |eag|aoa|lau|lue|ene|uti|i p|fea|o e|itu|sia|e p|ita|lel|lal|auf|pe |a n|lav|ni |uia|tap|apu|uip|tia|ipo|aun|tel|oao|eai|lol| ni|vae|ipu|sol|uin|uag|uig|ao |ueg|tua| va|gi |vea|u f| it|aof|log| no|to |iti| na|vaa|ofo|ule|ili|pot|sag|ilo|tuu| si|afe|ual|i n|ees| fe|nof|iai| is|opo| te|gav|fo | fi|ute|tam|pua| es|lig| fo|poi| ae",
                        koo: "eri| er|a e|ya | om|a o|ho |obu|mo | ob|ith|omo|olh| ne|e e|o e|wa |ndu|and|e o|re |hol|bya|a n| ek|tho|du |we |o k|o b|the|iri|ira|ere|ner|lha|uth|ndi|ath| ki|nga|lho|ind|iwe|kan|ban|di |lhu|but|ulh| bu|osi|han|ugh|ang|si |aba|uts|eki|ebi| eb|uli|ra |li |eky| mu|ha |ko |bul|aka|he |kya| ku|ole|yo |und|ihu|kut|ire|se |rir|omu|tse| ey|ngi|i e|mun|ali|a a|ika|buh|uho|ler|ana|gho|nda|o n|iha|rib|hok|ery|rya|no |e k|ene|hug|i o|bwa|ne |e n|a i|ing|ki |oki|wit|ani| bw|ma |nge| ka|aby|yan|i n|gir|ga |o o|thu|gha|kol|mul|awi| in|anz|i k|ngo|alh|imu|bih|tha| ba| ok|ima|i a|kih|ama|rik|a b|kit|kir|na |ako|a k|nya|i m| aw|rit|oko|awa|ung|iby|ilh| ng|ibw|o m| ky| no|abu| ni|iki| si| ab|wiw|hun|ber|rih|wab|i b|mbi|da |its|ran|yab|bi |amu|iba|yim|tsu|bo |thi|nia|umb|nde|iry|hal|obw|kyo|hir|hwa|ia |agh|wos|hab|e b| na|iyi|bwi|lhw| by|rim|bir|eng|iso|amo|eke|ril|ibe|igh|hek|mib|riy|e a|abo|sib|bal|era|eyo| ol| en|mub| wo|ano| ha|hin|ris|isa|kiw|eby|nza|u b|hu |o a|aha| ak|kul|za |yam|yos|uyi|kin|go |eka|lya|usi|ihi|emb|ka |bwe|u w|emi| at|kat|wan|lin|kwa|sum|ham|iko|ubi|be |sya|ahi| ih|aya|ri |nab|end|ubu|eny|uka|wam|esy|hen|muk|ayi|nob|yak| em|bw |nzi|hul|dek|wak|e s|muy|kis| am|ong|rer|iku|zir",
                        nzi: "la |lÉ› |le |nle| ne| mÉ”|enl|É› n|ne |kÉ› | bÉ›| an|maa|nwo|e a|É”É” |mÉ”É”|e m| bi| kÉ›|ala|a n|a b|ye |ade| ad|den|ial|bia|anl| ma|wÉ” | ye|a a|É› a|ee |wo | la|nee|e n|nu |yia|nla|a m|ie |aa | nw|a É”|É› m|aan|e k|nyi|onl|anz|É” m|e b|li |É›É› |son|nzÉ›|zÉ›É›| so|É› b|nli|ia | wÉ”| me|É› É”| É”n|ian|anw| nu|alÉ›|a l|É” n|yÉ› |É›lÉ›|len|o n|men|yÉ›l| gy|nlÉ›|É” É”|ane|É”lÉ›|a s| É” | ny|bÉ› |o a|mÉ” |a y|ile|É” k| É”k| na|eny|e É”|É›la| lÉ›|na |É”wÉ”| É”w|gyi|É” b|eÉ› |ilÉ›|wol|ma |ua | aw|a É›|e l|e y|lil|olÉ›|É› k|bie| ng|É› É›|awi|wie|elÉ›| a |di |e É›|É” a|mÉ›l| mÉ›|É”nl|ko |tia|zo |anu|i n|ima|e s| no|yim|i a|o b|a k| kp| ko| ek|za |any| ba|unl| É”d|É›kÉ›|ekÉ›|bÉ” |mek| sa|É› w| ez| di|o É”|É›le|saa|nyÉ›| at|É›hy|ulo|ati| É›h|É›ma|ra |i m| É”l|oa |É›ne|deÉ›|u a|e d|a e|oli|pal|hye|kul|bÉ›k|É›yÉ›| am|kpa|É›nl|die|u n|oma|É› g| É›n|o l|eza| de|inl|ti |gya|É› l|É” s| fa|bÉ”l|u l|wom| yÉ›|ban|uko| ti| al|yÉ›n|eku| zo|koa|nde|dwe|É” y|É› e|ole|oko|É› s|i É”|wen|fa |a w|mra|mgb|e g|nok|ama| mr|bÉ›b| ag|abe|bel|bÉ›n|É” w|pÉ› |aam| bÉ”|ola|azo|ka | É”f| az|ale|É› y|lab|agy|u É”|lo | É›m|É”ny| bo| nd|deb|u m|É› d|ebi|u b|yel|olo|e e| su|bÉ›l|É”kÉ›| kÉ”| É›l|oal|yin|É”di|nol|É›pÉ›|ngi|bo |enu|nyu|yea|adw|bÉ›t|ba |ku |kÉ” |nya|É”yÉ›| É”y|nga|kye|nye|bÉ›m|zon|É”ma| pÉ›|pÉ›p|bÉ›a| o | É”t|É”ti| É”m|u k|nrÉ›",
                        maz: "uÌ¸ |ra | ra|ji |yo | nu| uÌ¸|k u| o |a n| yo|o n| k | kj|nu |o o| te|a m|i n| so|eÌ± |kja| nr|nrr|tex| ma|Ì¸ji|uÌ¸j|na | ng|ja |a j|muÌ¸|dya|a k|o r| dy|Ì¸ r|ma |o k|a r|Ì¸ n|exe|oo | b |soo|zo |jo | ne|imi|b e| na|xe | xi|mi |nge| ez|e n|o s|ruÌ¸| in|ezo|ang| pj|ya |xo |ixo| a |rix|e b|rri| mb| jÃ±|ts |suÌ¸|ye |teÌ±|i k|in | eÌ±|Ì± e|osu|a x|je |a t|jan|Ã±i |jua|a p|ngo| jo|eje|kjo|oji| ye| ja|ri |Ì¸ y|nte| ts|i y|ta | ri|iÃ±i|Ã±iÃ±| ga| nt|jÃ±i|ga |e y|mbo|xim|amu| xo|nes|est|sta|mam| ch|go |o y|ua |Ì¸ k|i t| mi|i r| ua|tr |pjo| e |o t|a d|a s|o j|ngu|ana| Ã±e|a y|ama|gek|mim|ek |s a|uyo|nuy|Ã±ej|omu|jom|uam|rra|bos| pa|iji|aji|o d|chj|nee|jos|u x|nuÌ¸|u r| ju| nz|s i|o p|i m|eji|sku| an|kju|pji|chi|kua|anr|so |i j|o m|xis|umu|e k|isk|e t|rjo|jÃ±a|ee |trj|pje|a a|pan|epj|xoÃ±|nru|o i|uan|gum|aÌ¸ |joj|hje|i p|oÃ±i|oru| pe|hi |gez|a g|ara|u n|eze|to |r u|etr|xto|ext|Ì¸ t|gej|n j|ze |e j|i x|i i|Ì¸ a|anu|o g|a c|e e|nza|Ì± n|Ã±a |e r|i Ã±|aba|akj|i s|ba |jek| i |Ì¸ m|man|jab|ekj|mbe|Ì¸ d|raÌ¸| zo|r a|i d| jm|u m|jmu| d |se |o b|pep|u j| jy|ont|xor|io |n n|aja|u i|te |i o|esi|jet|ntr|Ã±ij|ijo|zak|zho|si |ich|goj|hij|d a|Ì¸ x|i a| tr|yaj|its|roj|uaj|ne |gon|ajn|jnu|uar|Ì¸ o|mba|a e|a i|a o|puÌ¸|u k|k i|inc|a z|xes|juÌ¸|yaÌ¸",
                        pis: "ta | ol|eta|ket|lke|olk| en|em |en |lo | fo|fo |an |im |wan| lo| sa| he| wa|are| ga|gar|hem| ev|rem| bl|blo| ka|mi |evr|vri| ra|eni|emi|o o|ait|rai| we|ing|ea | ma|tin|ol |ni |m o|wea|ng |m e| no|iwa| di| me| na|a e|n f|s f|man|o e| ba|i w| or|riw| fr|it |or |n o|no |ae |re |m r|a g| pi|bae|tre|ri |avv|ve |vve|ntr|sav|os | st|is | i |o g|o l|dis|rii|fri|pos|ara| gu|tim|sap|ant|la |ala|a o|kan| lu|apo|fal|pol|a p|n s|n e|luk|sem|a s| pr|gud|ud |i s|mas|t f| fa|a h|ipo|pip|a d|a b|uk |as |ts |iti|o d|k s|its|kem|a m|oa |i g|o s|wak|a l|sam|om | da|amt|m f|ek |aen|at |ed |sta|a i|o m|a f|mek|n n|o h|eke|nit|i k|s e|aka|mti|e h|m s|i f|ra |kae|iid|ido|dom|nar| se|ti | ta|a n|ka |m w|n b|i b|i e|m d|s w|ya |hel|o b|ati|a w|dat|s o|ini|o k|pro|ao |loa|elp|i m|n l|uni|i l|n i|pim| te|o t|uma|n h| ha|m t|on |n w| ya|n m| in| la|ase| un|ei |gti|ngt| ti|a r| go|dim|go |a k|i o|lem|nao|am |e l|ele|uim|sen|nem|tek|nom|m u|ane|tae|ap |o w| du|tap| de|n p| si|rit|m k|ion|ii |ote|m n| tr|up |sim|n r|aed|dui|sae|tio|res|ba |aso|m p|lae|n g|p f|tti|l s|ons|i i|emb|d n|o n| wi|uil| up|ren|fre|son| tu|n k|aem|s b|ins|t l|aot|kas|ns |ami|itt|e s|wei|l e|g o| sk|d f|e o|aek|si |t e|vim|ten|mpo|imp| im",
                        ctd: "na |ng |in | in| th| le|leh|eh |ang|ah | ki| a | ah|ing| hi|thu|hi |ak |h a|din| mi| kh|hei|the|eih|a t|ei |hna| ta|am |te |n a|nei|a l|awh|ung|at |ihn|h k|gam|a a|kim|wh |tak|kha| na|im |ahi| di| ga|g i|h t|kna| su|taw|an | ci|adi|sak|m i|ih |i h|hun|ama|uh |hih|lo |cia|h l|iki|a n|akn|i m|mik|euh|peu| ne|han|g h| ak|g a|h n| la| ha|ban| sa|n k|awl|hat|ong|nga|ian|sua|i a| am|aki|iat|mah|n h| ba|n l|tna|khe|a k|i t| pi|ite|une|uak| za| pa|lna|nad|ngt| tu|zon|n m| ma|tun|itu| hu|pi |pia|hua|a h|tan|n t|nna|en | om| pe|h s|uah|g t|a p|kip|gah|ai |ia |maw|hu |tua|dan|inn|n s|eit|uam|mna|kit|eil|sun|e a|awn| ng|un | nu|i k|ngi|k l|lei| lu|paw|a m|i i|ate|m t|uan|a g| up|g k|ua |h i|sin| va|ngk|bul|pil|k i|a s|ihi|atn|nat|iam|izo|ipa|a i|hta|a b|kua|hem|kik|emp|gin|h b| lo|k t|aht|h m|wln|awm| te| si|hin|m k|mih|mpe|i l|sia|sep|lun|ida|gte|akt|h d|ilo| zo|oh |kta|khi|ila|pna|e t|kil|ina|om |zaw|m a|upa|h z|el |awk|n n|ita|tee|h p|kin|dei|ann| se|tat|loh|g l|iak|hia|khu|kis|hiz|pan|hma|ile|isa|ma |i p|au |a d|ek |di |n i|t t|ngs|unt|pit|hup|ipi|upi|pad|ihk|g g|a o|lam|i s|i n|mi |ikh|i c|ta |hen|n p|san|n z|g n| uh| ii|ii |ep |zia|asa|hke|aih|nta|kei|hut|ihm|nun|ulp|lsi|tha| uk|o i|vai",
                        cos: " di|di |ni |li |tu | Ã  |ti | Ã¨ |i d| i | pa|ell| ch|i p| a |par|itt|rit|i s|oni| in| si|tÃ  |iri|na |dir|tti|â€™el|ali|ion|i c|si |i i|a s|u d|ttu|nu | un| lâ€™| cu|zio|a d| u |Ã  d|hâ€™e|châ€™| li|la |azi|i Ã¨| so|una|u s|ia | pr|du |a p|a c|i l|ri |so |u Ã |itÃ | o |gni|i a|lu | ri|lla|in |ess|lib|ars|i u|i m|ru |sa |ghj|ogn|da |u p|u i|ssa|hÃ  | hÃ | na|Ã  a|icu|ta |nal| og|ona|son|rso|iss|naz|lli|Ã  i|a a|chÃ¬|a l|u c|Ã  u| ni|hÃ¬ | da|ari|cun| tu|pri|int|tut|ndu|u o|ssi|i n| hÃ¨|tat|hÃ¨ | mo|llu|u Ã¨|lâ€™a|gli|cu |pru|un |za |a h|ent|anu|utt| pu|i f|ind|Ã¨ i|sia|mu |u u| st|n l|atu|i o|mod| ma|u l|Ã  c|a Ã |ert|rtÃ |nta|imu|a i| ca|ibe|ber|lit|ar | dâ€™|odu|a v|inu|cia|aru|end|su | el|sta| es|are|i Ã |iu |sci|nza| cÃ¹|cÃ¹ |bar|ett|u n|ili|enz|hju|con|ami|iun|ara|ra |pÃ  |Ã  s| su|Ã¹n | Ã¹n| sc|suc|cum|ati|nit|qua|i t|pÃ² |nsi|u t|ci | ci|man| gh|ren|a u|rim|ial|lâ€™o| pÃ²|Ã¨ d|ich|dic|uci|dar|tar|ca |ziu|n c|iba| de|ris|â€™om|i h|tic|Ã¨ c| tr|rÃ  |ini|ign|ric|ntu|Ã  p| pi| qu| co|nda|ntr| fÃ |tru|ii |uni|igl|nis|lia|hja|a o|fÃ  |ust|sce|ssu|tri|ida|men|ura|chi|evi|ndi|uli|min|Ã¨ Ã |ici|sti|ont| la|iti|ist|ria|nti|esi|ita|unu|u a|u h|a Ã¨|o d| sp|i r|dev|und|sic|i v|alt|o i| an|ica| fa|ivi| is|uri|bli| vo|ran|vit|o p| va|rut|nni",
                        ltz: "en |er |ech|n d|cht| de| an|sch|n a|an | d |ch | re|rec|un | vu|ll |t a|et |ht |ng | al|der|t d|all|che| ge| a | en|ere|eng| mÃ«|oun|nsc|ir |nge| op|Ã«ns|tio|mÃ«n|Ã©i |op |ter|fir|de |vun|r a| hu|ati|hte| fi|dde|uer| dÃ©|ent|em |iou|dÃ©i|in |r d|d r| fr|t o| sÃ©| ze|hue|ver|ren| se|frÃ¤|ner|uet|ze |rÃ¤i|e g|e s|Ã©ng|ong|eet|lec|at |sÃ©n|ier|n o|Ã©ie| ve|e v|l m|nne|ten|men|gem|dee|nat|ger|esc|due| du| ma|r s|den|t f| si|lle|n e| be|odd|h h|hee|tÃ©i|vu |nen|t g| od|ges|h d|ers| hi|len|her|une|nt |een|gen|hen|n z|ale|e m|rt |ert|ell|gin| na| gi| gr|e r|n n|ich|Ã¤ih|n h|Ã«t | as|sel|Ã«nn|ihe|it |le |aus|as | au|mat| da|Ã¤i |int|ele|Ã©it| am|cha|p d|dat|sse|and|kee|hir|Ã©in|nte|sec|idd|am |t s|i a|t v|ss |ion|r g|itÃ©|e f|rch|rf |erf|res|g v| un| dÃ«|tt |dÃ«s|ona|te | st|d g|m g|pro|nal|ken|u s|oll|elw|tle|l d|ree|i d|ann|lwe|um |a f|re | pr|eme| ke|a s|he |tz |kla|erc|est|s a|ese|wer|aft| nÃ«|ond|al |n u|och|t e|p e|ft |ire|ee |arb|nd |s d|e w|sou|gÃ©i|eg |wec| ko|sin|se |wel|het|mme| we|Ã©ch|d f|lt | sc|eem|ete|e k| e | gÃ©|ou |ran|r f|oss|sen|g a|vol| zo|mÃ©i|enz|d e|nÃ«t|Ã©ck|bes|sÃ¤i|str| pe|d m|haf|g d|r p|per|ge |r z|nze|etz| wa|ara|uss|ber|rÃ©c| gl|elt|ene|ane|akt|jid| ji|eso| et| wi|vum| sÃ¤|l a|sta|aar| fa",
                        lia: " ba|ba | ka|ka |iÅ‹ |a k| ma| wÉ”| th|a b|ma |yo |a t|o w| wu|iya|É” k| iÅ‹|Å‹ b|o k|niy|ya |o b| ni|aÅ‹ |ho |É”É” | ki|a m|a w|a n|Å‹ k|na |ndÉ›|dÉ› |nam|thi| ku|ama|wÉ”É”| yo|wÉ” |Å‹ m|É” y|wun|de |und|and| ko|nde|thÉ”| mÉ›| bi|oho|ko | na| hu|kiÅ‹|É› b|mal|tha|mÉ›n|loh|É›Å‹ |ana|kan|iyÉ”|e k| kÉ›|iyo|ali|alo|É›n |É”kÉ”|a d| wo|Å‹ i|a h|kÉ” | kÉ”|kÉ›n|nÉ› |ina| be|Å‹ t|É›nÉ›|maÅ‹|yÉ” |nka|wo |li |be |biy|É”Å‹ | wa|yan|É›kÉ›|a f|É›ti| e |i b|kÉ›k|mÉ›t|the|É› k|ki |mo |É” b|e w|oma|É› w|ti |ank|nth|he | si|uÅ‹ |o m|unk|ta |e b|amÉ›|wal|a p|Å‹ w|thu|É” m|ath|oom| É” |ant|i k|baÅ‹| fo|a s| pa|É” w|hii|a y|aka|foo| fa|in | ho|han|i w|kaÅ‹|mas|nku|ha | bÉ›| yi|kam|kut|asi|kul|him|do |bÉ›Å‹|hÉ”Å‹| bo|iki|man|bÉ› |imo|no |kun|iiy|kiy|fÉ›É›|hu |ayd| dÉ”|ydo|aa |n k|fay|uth|i m|É› i|ani|É› n|mak|É›nk|kuy|Å‹ h|uya|kin|e m|n n|e t|hit|si |niÅ‹|pam| sÉ›|É”y | fÉ›|boh| fu|É”ma|hiy|huÅ‹|É›na|lan|o f|o n|una|o t|hun| yÉ›|wuÅ‹|nki|o i|kaa|eÅ‹ |gbÉ”|yÉ› |sis| kp|mat|yik|uta|tet|oÅ‹ |nkÉ›|alÉ”|lÉ”k|kÉ”y|oo | te|e n|kas|ban|ra |uno|hut|sÉ›m|ute|É›mb| du|u k|hÉ”n|te |ulo|Å‹an|kÉ”s|ni |amo|É›nt|eth|thÉ›| de|o d|y k|to | in|n b|mÉ”k|bal|Å‹ s|dÉ”Å‹| ne|kÉ”m|iyÉ›|oÅ‹k| nk|nan| dÉ›|siÅ‹|ind|min|É” i|deÅ‹|É”mÉ›|dÉ”m| bÉ”|ohi|É›th| gb|wÉ”m|nt |ku |É”mi|tan|isa|É”n |É›ra|É›É›r|Å‹in|n m|mÉ›Å‹|É”si|e i|Å‹ n|mbÉ›|huk|i n|hÉ” |haÅ‹",
                        mlt: "gÄ§a| gÄ§|li | li| ta| l | je| u |il |al |dd |Ä§an|and|u l|Ä§al|jon|l j|edd|jed|ll | ji|tal|ali| ku|du |et |jie|iet| mi|zjo| il|i j|kul|Ä§ad|zzj|ndu|add|d g|i t|ni |oni|ja |tÃ  |iji| fi| bi|l i|l l|aâ€™ |ew | ko|a t|azz|l p| ti|lÄ§a|ulÄ§|ha |ddi|Ä§u |jew|i l|hom|gÄ§u|om |agÄ§|taâ€™|ist|ieg|n i|egÄ§|tie|oll|kun|ra | ma| pr|mil|a l|all|u j|kol|min|l g|i u|a k|ent| in|ill|t t|ber|pro|la | jk|ma |un |em |ibe|ert| Ä§a|in |lib|nal|a j|a g|kon|dij|l Ä§|l b|l f|l k|ija|ndh|da |ien|en |a u|m i| da|jn |u g| is|fil|ona|jis|bil|sta| me|din|a m|liÄ¡|itÃ |i m|t u|ett|i k|u m|ull|r r|ir |ezz| mâ€™|jku|a b|el |u f|ied|nda|men|l Ä¡|ont|ejn|jal|u t|t i|naz|n l|per|i g|jit|ajj|ta |d l| di|Ä§aj|ers|ura|ti |as |int|tag|l m|iÄ¡i|â€™gÄ§|s s|mm |u k|an |i f|mâ€™g|rtÃ | pe|dem| bn|jiÅ¼|l e|ri |lli| fâ€™| so|soÄ‹|qud|nt | hu|uni|sie|lha|oÄ‹j|taj|at |ieÄ§| ir|d m|nij| im|bni|nie|ede|nti|u u|Ã  t|emm|inj|Ä¡i |rta|ar |l o|Ä§ar|ame|w i|a f|rij|wie|iel|ess|aji|arr| fo| na|u s|d d|llh|xej|id |gÄ§h|lu |inn|ntr|tra|dha|Ä§ti| bÄ§|bÄ§a|iss|ter|na |Ä§ra|i s|Ä‹ja|ex |ote|tez|edu|bie|i p|za |oÄ§r|gur| bâ€™| ke| fa|nta|dho|Å¼ Å¼|Ä§aÅ¼|ss |ind|n m|kem|kaz|ond|tij|rri|xi | Ä§i|u i|uma| ki|rot|ssi|jin| ri| ik|tat| iÅ¼|aqs|una|l u|ata|dan|ngÄ§|ing|uka|duk|n t|ral|x j|Ä§ho|iex|nn ",
                        hna: "be |mÉ› |wo |amÉ›| am| le|le | É–o| be|la | la| ke|gbe|e a| nÉ›|É–o |kpe|e n|nÉ› |e l|ekp|nyi|yi | al|ke | ny| wo| a | É–e| ku|o a|É› a| ye|ewo| mÉ›|o l|a n|É–e |É› É–|ku |lo | e |o k|pe |alo|ye |É–ek|e j| sÉ”| gb|na | ji|a k|ji |a l|e m| do|ogb|e e|pek|e w|o n| wÉ”|i a|e k|e b|É–og| kp|a a|nÉ” |eÅ‹u|kpa| du|i b| ag|e g|e É–|kpÉ”|a w|b a|a É–|e d|agb|ea |sÉ” | Å‹t|o m|oÉ–o| o | na|a b|an |yeb|eye|Å‹ti|ba | ey|ti |awo|É” a|kew|a d| nu|É› l|oe |e s|É› e|u É–| je|sew|i k|uwo|woa|o b|a s|ebe| vo|oa | mu|eÉ–e|do |mu |tÉ” | b |gba|É›n |a y|É”nÉ”|Å‹u |osi|n a| ma|nÉ”n|É›a |mÉ›É–|si |e v|É› b| nÉ”|É›É–e|nya|o s|ia |vos|wÉ” |se |o É–|É” k|a g|É› n|nmÉ›|É”n |acÉ›|e Å‹| bl|uku|É”Ì€ |nu |woe|use|omÉ›|sin| ka| ac|o e|e h|a m|umÉ›|É›nÉ›|u k|e y|É–oÉ–|nÉ›n|bus|mÉ›a|pÉ” |ta |ma |É›bu| go|n b|É”nm| ha|nÉ–e| Å‹k| te|É› k|mÉ›b|É”na|i n|É” b|o g|gÉ”n|sia|teÅ‹|etÉ”|Å‹uk|a t|n k| dÉ”|fyÉ”|wÉ”n|É”kp|du |gbÉ”|e t|mÉ›s|É–eÉ–|enu|u a|É”Ì |kan|É” n|o Å‹|je |zin| ba|a e| ak|iny|Å‹ut|sÉ›n|goÉ–|inÉ”|i l|tÉ”Ì€|mÉ›h|É›ha| si|bet| so| se|iji|É› Å‹|mÉ›t|akp|o v|bÉ” |É” w|É”wo|bli|lib|a Å‹|kea|mÉ›j|ibo|o w|É›si|nÃº | tÉ”|a z|É› w|kuÉ–|esi|ata|pat|É” l|kum|ese|eka|yÉ” |É›Ì€n|jis|ise|sÉ›Ì€|nsÉ›| gÉ”|uÉ–o|É”É› |u s|o y|É” É–|so |a j|in |Å‹kÉ”|É”nu|emÉ›|anÉ–|u n|ka |cÉ› |igb|yin|vi |a v|É”a |aÅ‹u|kÉ”n|srÉ”|É›kp| ga|u v|o j|ale|ha |jij|jea| va|va ",
                        zdj: " ha|wa |na |ya | wa| ya|a h|aki|ki |a u|a m|a n| za|a y|he |i y|a w|wo |o u|iya| ze|hak|ha | na|a z| wo|ze |mwa|ahe|ina|dru|e h|wan|har|ru | ye|ne |ana|o w|e z|ye |aha|sha|zi |mu |hau|au | ne| ng|dji|za |o m|i z|si |u n|tsi|i h|mdr| yi|i n| md| ma|ni |u y|e n|nge| sh|la |udj|hah|aru|dam|ho |ain|ndr| mw|ada|i w|amu|ama|rum|ena| nd|nad|azi|yo | ud|hai|umw|u h| zi|gen|i m|pva|iwa|riy|o n|u w| ms| ut|adj|no |and|wah|zah|e m|awa|wak|ari|uhu|ini|ili|li |ayi|shi|yah|dju|a s|end|ndz|zak|aka| ka| uk|wad|nts|ats|ali|uwa|asi| mu|ma | uh| da|zo |ren|ula|dzi|uba|ka |a d| dj|uka|lez|aul|u u|u z| us|kay|aan|e w|hi |o h|djo|dau|lwa|hur| no|imu|dhw|und|e y|ele|vat|uri| fa|a l|aya|e s| pv|ao |tre| ub|a k|nyi|jo |bu |ish|ind| la| up|e d|msh|kin|any|eke|a t|saw|dwa|iba|juw|aho|mud|ifa|ia |ndo|kel|an |ndw|ung|a p|tek|iki|dja|hif|tso|ezi|haz|sin|zit|uzi|itr|piy|i s|i u|zim|laz|wi | nt|hwi|aye|fad|uwo|ra | ho|o y| un|o z|rwa|nga|liy|edj|ati|tam| pi|man|fas|izo|adh|bin|ani|ngu|nde|da |mo |u p|iha| le|i d|maa|wu |usa|mad|bal|hin|e f|ayo| uw|hay| sa|yid|ola|iyo|eha|omo|som|yil|uts|de | hu|mso|gwa|ngw|ste|yiz|she|teh|ehi|kat|afa|dol|ami|ibu|ji |ara|mwe|apv|do |wam|kap|naf|ume|yak|ziw|ong|guz|di |hun|i b|yin",
                        guc: "in | sÃ¼| na|ana|a s|Ã¼in|a n|a i| wa|na |ua |aa |aka|Ã¼la|pÃ¼l|a a|ain|yuu|sÃ¼p| tÃ¼|tÃ¼Ã¼|la |shi|Ã¼Ã¼ |ka |inj|ayu|Ã¼pÃ¼|nja|a w|ma | in|atÃ¼|naa|way|kan|hi |pa |ipa|u u| ip|uka|jat|kua| ka|nai|lu |uuk|n n|n s|a t|tÃ¼i|kat| ak|wan|a e|ata|nak| an|awa|i s|nÃ¼i|sÃ¼l|at | u |sa |Ã¼na|apÃ¼|chi| su|ia |aku|jan|o u| ee|aja|n a|Ã¼lu|a m|nap|ira| mÃ¼|asa| a | sa|ane|ala|ya |Ã¼ a|taa|hik|esh|ees|ajÃ¼|Ã¼sÃ¼|ojo|uu |kas|mma|noj|rua|ach|tÃ¼ |Ã¼nÃ¼|aya|a k|wat| sh|Ã¼sh|sÃ¼n|nno|a u|Ã¼ n|iki|uma|ne |sÃ¼ |pÃ¼s|hua|shu|mÃ¼i|uwa|waa| nn|jÃ¼n| mm| uw|Ã¼ya|lia|laj|naw|mÃ¼s|a j|n w|u s|Ã¼ s|jut|iru|ash|ta |sÃ¼y|eer|nam|nay| ma|atu|lee|ott|Ã¼ k|e n|inm|lÃ¼i|n t|i n|u w|aap|alu|eka| at| ac|che|t a| no|maj|ush|aji|jÃ¼i|Ã¼ma|una|sÃ¼k|no | uj|jot|sal|tum|Ã¼ch| je|nma| ek|amÃ¼|tta|ee |iir|apu| al|je |e m|Ã¼ m|u n|wa |apa|aju|ki |raa|jir| aa|ule|ula|yat|suk| un|pus|hia|sÃ¼m| pÃ¼|eru|le |jol|tch| ot|olÃ¼|mak|u t|Ã¼ku|ita|aas|uje|Ã¼le|ika|jee|ama|uli|pÃ¼t|sÃ¼c|eki|kii|anÃ¼|raj|tai|aaj|n k|Ã¼tc|kaj| ko|sÃ¼s|jaa| ne|Ã¼ p|lo |lau|a o|aak|e i|aul|i a|jÃ¼l| ut|era|Ã¼lÃ¼|nas|n e|pÃ¼n|jaw|nee|Ã¼jÃ¼|uni|ion|e a|hii|sio|tsÃ¼| e |jun| um|uku|uja| ta|re |saa| jÃ¼|nat|tak|sum|kot|ral|as |lÃ¼j|u a|e w|uta|e s|asi|tir|ale|kir|Ã±aj|pia|Ã¼li|Ã¼pu|tka|epi|mÃ¼n|tu |lay|aan|Ã¼sa| nÃ¼|utu|t t|ots",
                        qwh: "una|man|an |kun| ka|apa|ana| nu|nun|na |aku|nma|pis|is |anm|paq| ma|aq |nap|ow |nan|ta |qan|kan|anp|cho|how|npa|n n|qa |nak|yan|nqa|nin|a k|mi |nku|lla| de|der|am |now|ant|erÃ«|chu|yon|Ã«ch|rÃ«c|a m|pan| na| ll|ata|syo|lap|pa | i |ey |asy| ts|hun|key|nam|ach|nas|api| ke|tsu|nch| ni|mey|n k|eyn|i k|nts|anq|all|aya|su |shq|tse|hqa|a n|sey| me| ju|ura|nat| ru|ash| pi|rur|tsa|nmi|yno| al| ya|n m|tsi|in |ima| im| mu|eyk|ats|w k|eyq|nta|yqa|kur|mun|a p|rni|awa|onk|kay| wa|kuy|q n|inm|iku|lli|npi|nac|ni |Ã¤na|cha|a r|ush|sik|kaw|juk|ran|ark|i m|a a|iya|wan|i n|anc|unk|a d|aqp|qpi|apt|li |mar|ina|ama|n i|a t| o |kaq|owp|arn|wak|ley|yÃ¤n|kap|q i|owm|a j|wmi|s m|yar|a i|uya|aqa|yku| le|ida|ayi|yta|rka|ink|inp|yoq|kin|oq |i t|yac|ipi|war|tin|ur |rqa|ish|yin|aki|pip|a w| wi|kiy| pa|n l|unm|arq|uk |may|uku|ita|sya|s i|ayÃ¤|s d|m k| pu|iki|q m|llq|enq|ury| ur|q l|a y|kar|pti|u k|kas|qmi|ann|nno|y n| sh|shu|n p|kik|k n|wpi|y d|onc|q k|pap|s k|uri|pit|pte|ten|w n|inq|eyt| ja|a l|onn|nni|aqm|uts|a o|i p|ras|koq|pur|hak|i l|tap|mat|u n|ari|way|un |huk|i a|uma|hpa|shp| ki|s l|yni|yka|m j|sti|apÃ¤|es |i i|pi |rwa| aw|jut|awt|wto|Ã¤ya|int|tor|ori|rid|hum|aka| qo|ray|kus|s u|yak|ano|ma |rik| qe|shk|lqo|qot|ya ",
                        quc: "ri | ri|ik | ch| ta| ka|al |b a|aq |ch |aj |ach|ina|ya |a t|pa | al| pa|che|ech| wi|tal| we|we | ku| ya| ut|jel|i u|ab |el |oje|noj|ono|naq|ta |jun| ju|a r|chi|q a| ma| an|k a|win|an |l c| k |xik|nik| ro|mal|i k| xu|ron|xuq|nam|k u|hec|uq |e k|wac|laj|uk |k k|ani|ij |taq|l r|kak| ja|aji|man|am |are|ala| ar|uch|cho|l w|re |ib | ru|e r|hi | uw|h k|e u|cha|il |axi| uc|tzi|a j| at|uwa|uma|utz|un |una|j k|i r| ki|tin|he | e |a k|l u|k x| q |k r|taj|q y|ami|wa |chk| xa|ak |zij|ub |wi |it |mit|k o|maj| ke|l k|b e|j r|ke |kab|q k|ob |e t|ne |q r| ni|qe |a w|aki|i q|jac|uqe|ata| wa|hke|h r|tb | ne| je|raj|j c|awa|e n| o |nim| u |a n|ltz|alt| uk|b i|hom|i w|a m|ali|l t|rum|je |lik|chu|xa |ama|oma|atb|isa|kay|j j|i j| na|sax| ra|lew|ule| ti|ima|sle|asl| as|kar|ax |ruk|jaw|lem|ema|aja|jis|uti|n k|na |tz |e c|a c|l p|ew |k p|kat|j t|wax|eta|aya| il|kaj|n w| tz|hul|n r|i n|awi|q t|kub|j w|aqa|chw|apa|riq|n c| ub|hik|a u|m r|uj |le |eri|hak|e j|i e|kac|oq |j u| am| qa|a i| aj| ik|hwa|kec| a |q j|e m|ich|e a|tob|m k|ela|ari| ko| uq|jas|uto|kib| re|saj|m u|e w|k j|q w|b r|n t|tzu|kon|a a|o j|jer|ma |k c|kic|kuk|i y|j x| ap|i m|ita|ano| ib|kaq|e p|ato| b |uku|kum| ol| oj|om |sam|ha |toj| ab|paw|uya",
                        isl: "um |og | og| aÃ°|ver|aÃ° |ann|er | sk|ar |Ã©tt|rÃ©t| ma|ur | Ã¾e|til|Ã°a |ir | ti|ing|nn |il | Ã­ | er| ve|ra | vi| hv|ta | me|r s| fr|inn|man|enn|na | rÃ©|ska|hve|eÃ°a| ha| ei| eÃ°|r m|tti|nda| se|nna|a s|sem|iÃ° |em |sin| Ã¡ |ein|ind|Ã¾jÃ³|al |men|tin|jÃ³Ã°|kal|num|jÃ¡l|ndi|a o| Ã¾j|leg| he|i s|di |ngu|lag|ga |nar|eim|gu |is |sam|an |Ã¾ei|Ã°ur|ess|Ã¾es|a e|a a|Ã°i |a h| sa|nga|gi |tt |viÃ°|da |and|a v|Ã° e|m o|eig|rjÃ¡|Ã©la|frj|ags|nnu| be|lu | al|fÃ©l|n s|ber|Ã¡ls|ns |gum| ge|rir| st|nni|ern|l Ã¾| en|meÃ°|han|r e|aÃ°u|lan|ni |nin| Ã¾a|era|fyr|afn| um|u Ã¾|rÃ­k|all|ski|und|i m| fy|yri|m s|a m|rÃ°i|i h| mÃ¡|ka |ss |tta|r Ã¾| tr|m h|tak| la|r a|r h|erj|ins|im |a Ã­|m e|lli|s a|tur|st |sku|haf|i e|sta|rju|lÃ¶g|i v|kul|u f| rÃ­|maÃ°| ef|s o|mÃ¡ | gr|t a|vir|m m|jum|rra|ri |nrÃ©|Ã³Ã°a|Ã° s|Ã¦Ã°i|i Ã¾|a t|jaf|rnd|gar| lÃ¶| ja|r o|riÃ°|Ã¡tt|l h|ulu|r t|s e|inu|n e|rt | at|yfi|fir|Ã­ki|rum|ki |m a|hei|li |g f|rin|la |erÃ°| va|eÃ° |n m|a Ã¾|Ã° l| si|egn|n h| mi|arr| yf|a r|irÃ°|dar|Ã³ta|jÃ³t| Ã¾Ã¡| sÃ©|iga|r b|vin|m v|ti | fÃ©|nnr|nu |fa | ta|dum|ndu|Ã¶gu|els|lsi|i o|Ã¾vÃ­|eng|lÃ½s|kil|vÃ­ |Ã°an|afa|in |Ã° a|njÃ³|ldu|Ã° Ã¾|trÃº|val|eru|ru |g s|a f|mil| af| Ã¾v| sÃ­|fre|un |g r|Ã°um|gan|Ã° f|t s|var| ko|fni|ja |efn|g h|eir|irr|Ã©r |sÃ­n|ygg|ryg| nj|eg |bor|sky|Ã³Ã°f|fna",
                        kqn: "a k|wa |la |a m| ku|a b| mu| na|na | ba|ji |a n|lo |ne |amb|ila|nse|se |tu |kya| kw| by|kal| ky|ntu|o k|ya | wa|fwa| ye|wai|ika|ala| ka|ang|afw|bo |kwi| ne| ya|lwa|kwa|e k|ens|nan|yen|e b|bya|i n|alo|ain|nwa|inw|iji|ba |wik|aka| pa| ki|o b|wak|ula|ulu|o m|ngw|nji|ka |uka|ons|gwa|mbu|ha |mun|ana|ban|o n|a l|yal|sha|ako| ns|bak| mi|abo|mba|o y|nsa|unt|ilo|sam|bu |anj|muk|u y|hi |chi|bul|mo |yan|i b| lw|mbi| bu|izh| lu|aku| bw|a y|u b|kub|ko |u k|bil|i k|ngi|abi|ing|no |waf| mb|bij|uji| ma|ish|win|luk|e m|ma |a p|ho | bi|mu |kul|e w| uj|kab|ant| mw|e n|u m|wab|akw|ye |amo|ata|kam|nde|e u|usa|ama|mwa|wan|zha|kaf|ngo|pam|eka|kij|byo|kas|a u|any|o l|zhi|ubu|bwa|bwi|uko| ke|hil|kan|ta |nem|zho|ong|ilw|biz|lum|kuk| in| bo|sem|ine|mbo|sak|kus|sa |e y|imb|a w|end|kum|shi|nsh|kec|a a|ech|vim|mam|gil|i w|o a|lan|ail|ela|pak|ane|kut|kil|uba|jis|yak|tam|ale|ikw|le |bon|asa|i m|o p|eke|abu|wam|nda| un|da |je |ije|lon|mi |kis|ano|ise|nyi|aji|uki|uno|sul|ngu|gul|let|umu|eta|fun|ufu|und|ino|asu|wil|nga|ulo|esh|mvw|lam|uzh|miz|tan|u n|kup|kik|gol|lak|olo|kok|avi|umv|ena|vwa|e p|mwi|kon| nt|uky|ule|yo |mut|emi|sho|me |ite|bun|jil|mik|de | a |ume|esa|aki|aye|pil|ful|yaf|kek| po|uta|umo|gij|ubi|yik|kak",
                        pap: " di|di | de|ion| y |an |nan|cio|ona|on | na| cu|n d|der|o d|rec|ere| e |cho|ent|ech| co|na |aci|al | pa|ad |ta | pe|ho |tur|to |cu |in |per|a t|ers| tu|men|ur |e d| ta| pr|tin|nte|son|en | ti|pa |rso|den|a d|un |con|no | li|dad|cia|rib|pro|ba |io |r p|n c|ia |iba|tad| ri|a c|ber| in|te | un|ibe|lib|ida|i n|a p|nci|n p|a n| re|nac|ual|o t|lo |o r|sa | of|i e|rta|nal|o c|ter| me|of |i c| lo| hu|do |ert|o p|tra|o y|i d|co |a e|enc|ra | ni|n y|com|ico| ca|res|n t|er |o n|or | so| en|y d|era|e p|nto|a s| su|d d|man|l d|cua|a m|i p|ant|i s| no|ame|n a|nta|so |ens|ran|end|a l| a |cla|edi|su | ma|oci| po|ons|ano|uma|hum|o e|gun|hon|est|a y|o o|ro |ngu|e e| se|soc|l y|ing|nin|ali|rio|u t|med|ito|eme|el |uni|ten|omo|nsa|nse|ntr|dic|nde|gua| pu|igu| ig|n e|dio|ara|da |y c|sta|ndo|ial|sti|ist|ide|ici|i t|rac|r d|cas|n n|aso|onn|cci|e l|nti|a a|ndi|ans|y l| ac|ind|n s|lke|ki |alk|nna|u e|aki|por|eri|isa| ak|ke |eli| he|tic|hen| tr|dna|de |dis|o l|a i|lid|adn|e t|lig|int| es|i r|ome|n h|n f|o m|ari|n m|bli|e a| fu|seÃ±|ser| te|nsi|act|e c|sid|nda|tal|ien|Ã±an|inc|ni | ba|rot|ote|nid|ont|y e|pre|bel|eÃ±a|nio|mpl|o a|lit| or| mo|ste|und|a r|n u|sio|mo |i a|ene|o i|ami|tro|ma | ot|n o|a u|pen| fa|esa",
                        gle: "ach| ag| ch|an | a | an|agu|us |gus|ar |ch |ear|na |le |ne |ine|art|n a|ta |chu|e a|ile|cht|hun|uin|n c|a a|rt |ith|dh |un | dh| ga|in |h a|cea|e d| le|is |aoi|r a|as |aon|uil|a c| bh|omh|air| ce|on | na|nta| ar|s a| ui|ir |hai| do| sa|tÃ¡ |a n|hui|gac| go|eac|go | i |ag | nÃ¡|hea|sao|dhu|t a|Ã¡ a|h u|cha|il | ao|n d|tha|hta| tÃ¡|n t|cho|oir| de|isi|the|g g|t c|adh|och|ann|a b|do |ion|ha |mha|dea|irs|tea|ht |amh| in|a t|a d| gc| is|th |idh|siÃº|s c| ai|nÃ¡i| nÃ³| co|nÃ³ |ean|nn |Ã¡is|s d|mh | du|Ã­oc|s i| th|s g| nÃ­|se |oin|eid|n s|iÃºn|rta|nÃ­ |h n| sh|a s|he | ma|nna|e c|ain|tac|lac|dui|hao|far|h d|nea|che|rth|i g|r d| dl|Ãºnt|rse|dlÃ­|Ã­ d|inn|ais|l a|nÃ¡ |ide|hÃ¡i|lea|int|irt|Ã©an| ph| d |iri|ana|hoi|bha|hom|com|sa |ona|aid|Ã¡ir|rea|h g|eam|s n|n n|hio|h c|idi|lÃ­ |n i|abh|eag|eal|hla|eit|Ã¡il|e n|sin|a i|Ã­ a|ait|lei|ant|de | bi|rÃ­ | si| gh|hÃ©a|r c|onn|eas|ead|aig| io|e t|coi|dir| at|s s| ea|d a|im |aÃ­o|a l| rÃ©|nt | oi|hei|rÃ­o|h i| te| mh|sÃ­ |r b|ire|n p|ora|h t|ina|a g|eil|e g|gco|nac|t d| da|lta|h s|ath|Ã³ir|ge |ige|ont|gan|gha|arb| se|mar|seo| ei| bu|bit| ne| fÃ©|hch|bai|o s| fa|nÃ­o|nfa| fh|Ã³ a| tr|r l|mai|la |ada|rÃ©i| ac|e s|e b|al |eo |nas|iÃº |n g|thi|o c|nai|uai|nan|hin|r n|ite|pho|igh|agh|aÃ­ ",
                        dyo: "an |di | di| an|ool|ati|ti | ka| ma|baj|en |uwa| ku|noo|ak |aba|ana|waa|san|mi |aj |ano|i k|kaa|man|oos| si|ay |osa|aay|uka|aan|ruw| na| ba|dru|i m|i a|ole|n a|Å‹oo| bu|as | wa|la |ut |af |n m|i s|kan|mba|aas| mo|ola|aju|k k|ba |am | mb|len|n n|umi|oor|bab|aaf| mu|aka|aam|ol |s s|nen|uum| sa|poo| bÃº|mat|n k|i d|nak|ni |oo |juu|om |aat| fa|m m|awa|buk| dr| fu|moo|wa |war|eba|um |n u|nab|rom|uba|ne | ya|y y| eb|koo|yoo|sid|Ãºro|idr|bÃºr|i b|j d|ar | nu|ban|aja|lak|nau|kay|au | kÃ¡|e e|ara|kat|jaa|sen| ja|uÅ‹o|luw|mof|eni|a e|jut|naa| yo|ank|ila|ene|j k|i f|raa|uma|i e|waw|aÅ‹a|re |ani|k b|o k|sat|f f|n s|ooy|a k|rok|n b|at |or |uju|je |n d|een|ey |kar|a m|soo|ab |suk| ko|ko |num|t a| ak|aak|ama| so|fat|e a|muk| sÃ­|ako|laa|r k|n l| le|uro|o d|e d|ken|yat| lu|foo|iya|jak|aw |l m|m b|f m|of |o b|ula|a n|bur|iiy|ere|ya |nia|o a|eno|let|nan|anu|i w|oop|kur|leÅ‹|imi|era|i j|iil| be|eÅ‹o|aje|to |e b| yÃ­|kak|m d|k a|yab|kul|ake|dÃºn|Ã­ne|ane|afa|kuw|yÃ­n| dÃº|omi| ta|maj| fo|ok |raÅ‹|aÅ‹ | ek|kin|u d|aal|yii|ul |jaw|bee|y e| po|nku|faÅ‹|amp|Å‹ar|Å‹aa|iaa|aÅ‹o|Ãºni|op |m k|uto|caa|a a|mii|a d|sof|t m|amb| ne| kÃº|baa|aki|o m|uja|mak|ise|nub|ulo|e k|amm|kas|kaj|aaÃ±|sil|tak|Ã±ii|mmi|Ãºum|ee |sÃºu|y m| sÃº|boo|Ã­su|sÃ­s",
                        hns: "ke | ke| ha|ai | sa|hai|e k| dj|dja|i k| au|aur| ka|ur |ar |cha|kar|ab |e h| ko|haa|aun|an |sab|jau|hak|ak |en | pa|un | aa|hi |e s|e a| ch|i a|oi |r k|are|mÃª | mÃª| ba|i d| ma|koi|he |i s|at |aan|e d|adj|aad|we |aah|kha|b k|ki | se|se |r d|n k| ki|aar|oen| kh|k h| ra|tch|re |sam|maa|ha |ati|bar|tie| oh|aaw|n d|ien|r a|na |awe|ama|r s| na|ne | bi|ohi|n s|e b|hat|apa|kou|oun| dÃ¨|pan|dÃ¨s|saa|Ã¨s |dj |aai| ok|ren|am |rat|hoe|doe|uno|no |i h|i o| do|ttc|sar|e m|n b|r b|a k|ego| eg|i e|waa|s k|le |go |a s|i b|jaa|di |ara|e c|e o| eh|al |har| bh|ehi|ahe|iya|aat|n m|aap|ge |n a| bo|pai| de|e r|jab|oes|att|hal|e n|kaa|esa|aam|rak|e p|i m|ich|jÃ¡d|j k|m k|cho| ap|Ã¡di|ch | so|djÃ¡|paa|aka|iet|bic|man| re|aba|ang|ala|kan| le|ann|ikh|reh|o k|ri |oer|yaa|bha|noe|s h|roe|bol|l h|ahÃ­|ari|a m|n h|t s|ano|eni|dha|par|ark|a p|oe |i p|o s| si|is |ka |ti |k a|mad|rka|h k| li| ho|lik|ahi| me|nsa| dh|mat| ni|aha|oka|aro|san|b d|hie|sak|r p|ddj|jat|gar|ies|soe|era|arh|ena|jar|i c|dji| la|b l|mi | sÃ¨|gi |kam|khe|idd| id|aal|oke|ehe|jan|ake|r h|a b|niy|aid|mma| be|ath| oe|ans|ole|r o|hna|baa| bÃ¨|ah | ek|Ã¨n |Ã­n |naa|nat|hÃ­n|rab|o d|n r|es |tab|e e|a a|ett|i r| ta|a d|nda|ewe|bÃ¨g|biy|ail|Ã¨ga|l d|ban| sÃ²|dhi|a h",
                        gjn: "nÉ› | nÉ›|be | be| ka|e k| ku|so | ke|eÅ‹ |o n|a k| so|ash|a n|shi| mo| ek|É› k|to |É› e| e | to|aÅ‹ |kas|Å‹ n|teÅ‹|É” k|ko |hin|obe|mob|ama|ga |nte|int|a b|na |kam|ma | kÉ”|É› b|mo | na|li |kpa|eka| bu|kum| ba|e e|a s|sa | nk|o b| a | da|kÉ” |mu |pa |dag|ful| ma|o e|uli|aga|efu|ra | ef| wÉ”|aa |o k|la |a e|uÅ‹ |she| ki|e n|nko|heÅ‹|i k| n |umu| as|keb|baa|a m|e b|i n|bu |nya| la|a a|É› m|maÅ‹|e a|kÉ› |ikÉ›|kik|hi |É› n|shu|u s|i b|ana|ekp|tÉ” | ji|re |Å‹ t|o m|wÉ” |e m|ya |ku |a d|ken| sa|É› a| fo|umo|wÉ”t|eba|le |Å‹ e|Å‹ k|kus|asa|huÅ‹|ere|n n| ko|É”tÉ”|fo |e t| an| sh| er|esh|naÅ‹|a w|Å‹ d|Å‹ b| mb|Å‹É› |bee|o a|Å‹ m|É” e|i s|ili|ush|yil|aÅ‹É›|bra|ni |anÉ›|bar|a l|a t|yaÅ‹|edi|med|ii |ime|aas|mbr|ule|kuÅ‹|di |wul| di|dim| fa| nn|nna| ny|i a| eb| ti|u b|o s|i m|maa|Å‹ w|É› s|ta |eÅ‹i|ka |Å‹i |eni|oÅ‹w|koÅ‹|kan|É” n| ey|ebÉ”|kÉ”n|u k|kek|Å‹wu|kes| gb|eny|É” m|É› f|eko|ar |eeÅ‹| kp|o t|eyi|ji |i e|kak|iga|awu|jig|ala|baw| am|e s| yi|ebi|gbe| du|mal|awÉ”|naa|nkp|po |o d|fan|rÉ” |bÉ”r|ee |yÉ›l|kur| yÉ›|ba |ge |É”rÉ›|saÅ‹| es|al |bal|wÉ”r|uso|aba|in |É› d|nan|É” b|yÉ› |É›la|ri |É”rÉ”|chÉ›|a y| ta|bum| ns|shÉ›|any|rÉ› |bii|we |dur|ars|kil|il |hÉ›r|u j|ark|o j|ena|par|kap|kpr|laÅ‹| nt|u m|pra|lga|alg|u d| tu|ini|lik|ikp|e w|iÅ‹ |tiÅ‹|u t| ab|nÉ” |ura|a f|oÅ‹ |esa",
                        njo: "tsÃ¼|ng |tem|ung| te|sÃ¼ |ang|a a|ba |shi| me|er |ten|en | ka| as| ma|nun|ase|a t|ser|ete| aj|met|a m|aja|eme|ma | nu|ka |ji |ate|iba| ta|a k|ak |ali| pe|ong|nga|tet| sh|g a|jak|ema|Ã¼ng|its| al|la | ni|sun|nis|isu|ei |pei|ia |i a|Ã¼ a|zÃ¼k|ok |i t|kts|em | ki| li|sa | an|sÃ¼r| at|chi|Ã¼ts|hia|ite|ir |a n|ra |dak|dan|kÃ¼m|lok|r t|a s|mes|n k|okt|hi | kÃ¼| nÃ¼|r a|asa|sÃ¼t|Ã¼ra|akt| ib|ga |zÃ¼n|lit|esÃ¼|ech|uts|ar |n a| in|kar|a i|ngd|ako|kok| sa|kec|Ã¼ka| ke| ak|apa|jan|a l|lem|map|g s|i m|ti | lo|kti|i l|Ã¼ m|aka|lir|kas|ash|ala|Ã¼la|ama|a p|sÃ¼l|i n|r k|yak|iny|pa |nya|ayu|ing|sen|g n| ag|g m|man|mak|g k| it|r n|hir| ya|g t| th|Ã¼ t|aji|m a| ti|tas|gi |ngt|rte|the|ent|r i|azÃ¼|ozÃ¼|don|ngb|in |i k|kda|Ã¼ji|yut|mzÃ¼|mei|lim|yim|ati| oz| am|ai |m t| na|Ã¼ n|a y|ens|ed |ja |ted|ren|baj|nit|nÃ¼j|k a| ay|ima|k n|uni|ta |hin|ion|k k|tio|eim|nem|et | un|sÃ¼b|Ã¼ba|im |i s|ngi|nda|ele|kin|mch|imc|san|ons|sÃ¼n|mte|ngs|gda|d n|Ã¼mz|tep|nat|ns |ane|a o|k t| se|gba|ats|ben|he |lib|bon|etb|agi|tba|nok|gdo|ur |kib|ibo|i i|mer|g l|end|sat|agÃ¼|tel|bur|emt| da|nd | be|emb|den|ias|uba|akÃ¼|tim| ts| ri|tan|bal|cha|ter|ere|r p|or |mal|ngj| yi| to|mas|kba| je|mel|eta|Ã¼r |hit|jun|okd|emj|nte|and|ets|ha |teb|ket|ulu|lun|mji|len|ein",
                        hus: " an|al |an |in |tal|ab |laa| ch|l a|ka | ka|aab| in|ala|ani|ni |aba|at |bal|k a| ya| k |aja| ab|ik |tsi|chu| ki|sik| ej|xta|kin|ejt|ch |n k| xi| al|n t|l k|n i|jat| aj| ti|nik|hu |h k| ju|k i|ech| wa|jta|n c|ini|dh | bi|yaj|t k| kw|n b|its|ikt|w a|tso|i k|bit|t a|xi | t |ti |cha|b a|n e|kts|e e|yab|b x| ne| ta|a k|axt|sow| ja|n a| ts|kw |k n| ul|i a| ec| ij|a a|wa |a t|ne |n j|jun|ij |a c|tsu|sub|tin|bax|u c|unk|i t|uba|u u|nku|aal|wal|xin|ulu|udh|aa | ux| i |h a|un |m a| xa|uum|adh|ow |am |jto|l i|naa|ee |lud|a j|o k|to |o o| ko|uun| to|iil|jay|huu|lom|uxt|juu|j a| ba|ta |dha| ni|il |awa| na|ach|wts|ax |owt| ex|lwa| je|a i|i j|n u|l t|tam|idh|aaj|ban|aj |ilt|om |ixt|ak |kun| ma|l x| ol|jee|ol |t o|i c|alk|a y|tsa|max|i y|umt|kwe| oj|aam|l y| ak|ko |kul|b y|ek |alw|te |e a|chi|hal|nts|jal|nal|ita|exo|nti|tee|t t|xit| u |wet|ja |haa|hin|ant|nta| pi|alb|na |l w|waa|waw| be|bel| ku|lbi|u t|ay |ete|l j|mta|b k|k y|mte|jba|um |aac|unt|xob|eem|bla|ata|yee|ulo|wat|jaa|aye|obl|lmi|olm|ich|tol|chk|ojl|jla|hk |n w|ajb|l e| oo|a w|i u|lts|uw |ap | te|baa|aka|k u|em |nee|a e|eec|n y|alp|awi|che|yat|tom|hab| ee|hee|a p| pu|lpa|a n|uts|a u|omt|tec| la|ba |lka|i w|nin|b i|elo|xaw|iya|b u|taa|lk ",
                        xsm: " o | ba| na|na |ne |ba |e o| de| se|aa | wo|a n| ma|se |ge |a w|de |Å‹a |e n|ma | ye| ko|e b|É”É”n|o n|aam|maa| nÉ”|ama|a t| wa|nÉ”É”|no |o m| to|ane| te| ta|o t| ch|e t|É”no|a k|ko |to |o b|e k|ye |ra |oÅ‹a|a b|o d|a s|e w|lo | je|o w|taa|aan|e s|ege|a l|a y| ne|a j|a d|o k|woÅ‹|e d| Å‹w| la|naa|jeg|wol|em |eo |o y|ae |i o|we |ri |ni | ke|wo | ka|aÅ‹a|iin|o s|won| mo|mo |ei |olo|wad|re |a m| da|dÉ› | we|É”ge|tei| pa|daa|wae|ora|a c|a o|chw|ga |i t|hwo|log| lo|li |te | ti|teo|ina|o o|im |age|nab|ke |oÅ‹ |o j|Å‹we|eir|adÉ›|bii|abi|am |toÅ‹|i n|go |ogo| ni| fe|oli|baa|waa|iri| tÉ”| bo|aar|baÅ‹|e y|wor|ta |oto|tot|boÅ‹| ya|onn|e c|Å‹wa|are|ee | ja|pa |lag|i d|É› s|o c|uri|ein|maÅ‹| dw|che|fee| ku|ura|wan| si|o p|wea|m d|ea |era|a Å‹|obo|wi |hÉ”g|pwo|dwo|chÉ”|kur| sÉ›|bob|e m|tÉ”g|o Å‹|sem|ini|yer|iku|ia |zur|e l|ezu|yez|m t| be| vo|ran|dem|a p|m n|wop| zo|dwi|opw|one|om |sik|kuu|heg|ega|uul|tig|elo|sÉ› |o v|ene|m w|ja |i s| di|Å‹e |yaa|ka |o z|É› w|sei|ete|tet|igi|kol|a z|i w|een|e p|aÅ‹e|oo | ze|e f|lan| sa|oor| kÉ”|la |kei|uli|ent|gis|isi|sim| kw|nto|ywo|nno|aÅ‹ | po|tii|ded|ore|del|m Å‹|nna|vo |o l|a f|ada| yw| wÉ›|edw|Å‹ o|i b|bia|i l|i m|nte|men|É”me|gÉ”m| gÉ”|É”na|jei|ere|tÉ”n|tee|i k|di | ve| jw|jwo|ana|Å‹ d|lim|zoo|kom",
                        ote: "nu | nu|da | da|ni |a n|ro |i n| ro| i |ti |u r| ku|tho|ja |ho | ni|kja|i d|o n|i k|oth| kj|cht|a k|uch|kuc|hti|u k| ka|ka | go|got| ra|i i|yu |o k| yu|te |ra |i g| ji|a m| zo| mu|e n|oo |zoo|di |ini|o d|a z|o m|tsi|a r|Ì±i | a |a d| ko| ma|a j| pa|si |pa |i r|Ã±in| yo| te|jin|a g|muÌ±| xi|i j|yo | xo|e d|a t|u a| jÃ±|ne |u y|i p| ne|jÃ±i| fÃ¶|ki |xo |i y|uÌ±i|o y|u n| ju|jte|maa|aa |nda|i t|gi |ing|fi |kua|i a|ua |o j|nth|o t|a x|u j| bi|de |a b|ju |a i|jmo| de|moj|ojo|u x| nd| tz|i x|ijm|i b|xij|oÌ±i| ge|a y|joÌ±|i m| bu|a f|kot|ko | o | nz|Ã¶di|a p| mi|bi | aj|u i|ajt| me|ngu|ngi|a Ã±|na |o r|iki|ent|ind|nts|ati|ui |mi |u t|e i|o i|xik|ya |ma |e j| tu|o b|nde| nt|eÌ± |teÌ±|ji |bu | na|u m|o p|eÌ±f| Ã±i|tu | ts|e k|u d| nk| an|bin|Ì±fi|gen|jie|ujt|ri |Ã±a |jti|nkj| ga|nzo| uj|deÌ±|o g|Ã¶ts|fÃ¶t|o u|hat|eÌ±j|Ì±jt|zoy|oya|tha|tzu|fÃ¶d|pi | ja|mu |ank| ng|o f|min|nka|i o|ege| be| pe| kÃ±|kÃ±i| to|ngÃº|geg|uÌ± |gÃº | ri|ge |e g|Ã¤di|hte|u b|tze|ee |e m|ku |ete|fÃ¶c|u g|zuÌ±| je|Ã¶ch|ze | pÃ¤|pÃ¤d|gu |o a|beÌ±|ifi| bÃ¤|uÌ±n|Ì±nt|iet| fi| Ã±a|me |Ì± n|a a|to |api|Ã¡ki|uti|gua|Ã±i |e p|mui|tee|oni|a o|udi| nf|Ì±ku|uÌ±k|nan|ana|tzo|zo | gi|o Ã±|se |nzÃ¡|eÌ±t|e f|jua|fin|meÌ±|Ã¤ts|bÃ¤t|i f| Ã±o|uni|ga |e r|ina|je |zÃ¡k|e y| ki|ke |nja|Ã±o ",
                        qxn: "una| ka|an |kun|man|ana| ru|is |apa|run|pis| ma|aku|paq|na |nan|npa|kan|nma|aq |ta |aw |qan|anp|nin|yan|cha|nap|anm| y |nqa| di|a k|yun|nak|haw|mi |kay|syu|qa |aya|n r|api|dir|pa |ant|ich|asy|nku|naw|n k|iri|ric|chu|lla| na|tsa|ima|nas|may|a m|rni|anq|hun|pan|ay |ata|in | im| ts|say| hu|yqa|ayq| ll|nts|nch|lap|tin|huk| ni|nmi|a r|pti|nat|tsu|unk| pa|ura|nta|apt|i k|npi|am |w k|rur|inq|un |su |nam|ach| wa|pap|q y|kuy|n y|arn|kap|a p|inp|n m|ayn|ita|unm|ni | mu|inm|yna| ya|a i| li|ran|a d|pit|y t|a n|ayk|s d|irn|tsi|iku|u k|all|sik|unc|liy|uku| ku|uk |uri|awp|kas|uya|ada|uq |ras|sya|a a|a y|qpi|ink|da |q r|i p|awa| ri|wan|q k| pi|s m|aqp| u | al|uni|yku|yka|hqa|asa|y m|ida|kaq|yuq|shq|ash|wpi|y d|s u|qmi|aqa|a l|s i|s k|as |a h|kar|unp|kad|aqm| ar|mun|s y|aru|ara|iya|kla|tap| iw|urn|iyi|wal|y r|kin|iwa|a u| si|yta|n n|kur|u m|sak|lli|riy|dik|ika|yar|yap|rnu|yir|unt|iki|tan|n i|m k|nni|yin|war|unn|ma |i r|ris|n a|shu|kri|ats| kr|nac|yac|byi|uby|gub| gu|kaw| is| pu|nna|ann|nis|ish|usy|pip| ra|pay|ank|sti|iyk|k r|rmi| ul|siy|kik|ipi|ama|ili| sh|igu|uta|isp|s r|q m|i l|mus|ray|int|ahi|ikl|a t|lar|stu|w n|w r|naq|y i|arm|lig|dan| ch|s l|awm|adu|ruy|y k|ayt|way|rik| ki|ist|asu|pas|hin|spi",
                        gag: " he|hem|em |lar|bir|an | ha|Ä±n |arÄ±|erb|hak|akÄ±| ya|n h|in | in|ar |ir |san|kla|nsa|da |ins|sÄ±n|asÄ±|rÄ±n| ka| bi|ara|na |aa | ol|Ä±m | va|lan|her|maa|anÄ±|eri|nÄ±n|kÄ± |akl| se|var|un |rbi|lma|ler|nna|a h|r i|r h|est|bes|ser|rbe|lik|nda| ba|n k|ala|stl|tli|n v|Ä±na|ada|n b|ak |let|nÃ¤ |rin|nan| de|Ä±nÄ±|zÄ±m| bu|mas|alÄ±|inÃ¤|nma| sa| lÃ¤|a b| on| an|ama|al |oru|lÃ¤Ã¤|Ã¤Ã¤z|Ä± h|Ã¤zÄ±| ku|Ã¤ h|lÃ¤ |sin|nar|ard|nÄ± |Ã¤n |Ä±nd|etl|m h| ko|Ã¤r |lÃ¤r|esi| di| ay|olm|n y|sÄ± |a a|bu | ki|irl|evl| al|lÄ± |rÄ± |ka |ndi|ya |yar|kÄ±m|ayÄ±|yad|end|ulu|m o|a g|kor|kle|kar|iÃ§i|si |vle| iÃ§|Ã¤Ã¤ | ke|ken|n s|rle|ekl|ni |Ä± o|Ä±la|rak|Ã§in| cÃ¼|r s|di |irt|rla|rdÄ±| da|aba|ann|baÅŸ|r k|Ä±k |ik |ana|Ä±rÄ±|Ä± k|iÅŸ |rta|n o|onu|i i|uru|aya|m k|m d| ta|mÃ¤Ã¤|ili|er |dÄ±m|a o|ola|ini|a y|tin|kab|a s|nun|ona| do|a d| sÄ±|tak|kan|bil|mal|Ã¤ k| na|eti|k h| gi|m a|baa|a k|anm|Ä±sÄ±|eme|m s|lÄ±k|ikl|lun|rÄ±l|and|r a|dev|leÅŸ|Ã¤ b| Ã¼Ã¼|Ã¶lÃ¤| yo|ver|kur|rul|sun|run|mÃ¤k|cÃ¼m| ge|li |ril|Ã¼ml|Ä± i|ile|n t|dek|mak|Ä±nn|yÄ±r|nmÃ¤|aat| mi|i b|m e|Ä± b|tlÃ¤|aal|alk|rma|Ã¤k |n e|dan|enm|ntÄ±|iya|ren|lii|m b|mes|yap|i h|a i|r b|aÅ£i|aÅŸa|yaÅŸ|dÃ¤ |nin|ano|Ã¤ d|Ã¼re|Ã¼Ã¼r|k a|ek |lÄ±Ä±|hal|n a|lsÄ±|aÅŸk|ÅŸka|rli|tan| te|iÅŸi|lem|ani|sÄ±l| so|Ä±l |non|n i| gÃ¶|say|Ä±Ä± |ndÃ¤|ind| es|u h|Ä± d|aÅŸl|din|miÅŸ",
                        shk: " ki|ki | bÃ«|hÃ¸ | a |i k| ge|Ã¸ k|en | dh|dha|nhÃ¸|han|anh|i b| yi|bÃ«n|yi |i g| me|ng |bÃ«Ã«|gen|Ã«Ã«d| mÃ¸|ri |ni |e k|mi |i d|ne |i p|Ã¸ b|Ã¸g |e d|Ã¸ m|gÃ¸ |ge |Ã«ne| wa|Ã¶dh|a d| pÃ¶|pÃ¶d|ny |la |ala|wal| ny| yÃ¯|i j| ke|mÃ¸g|dyÃ«|ji |dÃ¸ | dy|n k|g a| kÃ¶|me |yÃ«r|i y|gi |e b|di |dhÃ¸| bo| ko|bon| dw|rÃ¸ |ong|ipe|kip| ji| e |nyi|hi |da |kÃ¶m|dwa| da| gÃ¯|a k|n a| o |i m|pe |Ã¶mi|bur| bu|men|nni| gw|inn|kin|dhi| ka|gg |i c|g k|yÃ¯e|Ã«r |Ã¯e |i w|e y|a n|kor|ii |ani| ci|y k|Ã«nn|Ã«dÃ¸|Ã¸ d|i t| kÃ¬|nyw|a m|nn |ka | bÃ¤|wad|iny|g g|kÃ¬ |Ã«rÃ¸|eny|a b|pin|i r|Ã¸ y|Ã¤Ã¤n|Ã«d |add| pi|yij|Ã¤ng|e g|uri|igg|r k|gÃ¯n|cig|a c|Ã¶Ã¶g|n d| mÃ¯|i n|Ã¯n |rum|mÃ¸ | Ã¡ |cÃ¯b| ce|Ã¯b |dhh|ij |g d|a g|kel| kw|li |yÃ¯Ã«|e o| ng|per|gan| te|wÃ¸b|Ã¯dh|cug|eki|gek|gwÃ¸|ko | en|ngi| gÃ¶|o g|e p|mÃ¯d|n g|g m|th | kÃ­|wÃ¸g|kÃ­ | cu|Ã¸ w|ggi| ba|a Ã¡|kwÃ¸|Ã¸gÃ¸|y a|de | ja|ddi|ugg|ywÃ¸|gÃ¶Ã¶|ang|g b|elÃ¸| ru| ty| gÃ¸| di|e m|lÃ¸g|Ã¬ k|a a|e w|Ã¸ g|kye|lÃ¸ |Ã¸ e| kÃ¸|bi |i l|ngÃ¸|re |bÃ¸ |ga | kÃ¤| Ã¡c|e c|Ã¡cÃ¯|l k|Ã¶gg|yÃ¸ |le |ken|h k|eth|ggÃ¸|cet|r m| mi|yii| wÃ¸|Ã¤r |Ã¯Ã«y|wat|ori|b k|i e| ri|egÃ¸|bÃ¤n|Ã¤n |kÃ  |Ã¸Ã¸g| kÃ |n c|bÃ¤Ã¤|wÃ¸r|eg |tyÃ«| mÃ¤| pÃ¤|yÃ«n|Ã«de|gwe|an |gÃ¯g|Ã¸bb|bbi|g n|a y|tee|ing| ga|wed| cÃ¯|hhi| wÃ¤|Ã«ny|e r|Ã«ng|er |iri|kir|h a|dÃ¯d| dÃ¯|jam|Ã«di|lli|wÃ¸l|yÃ¯ | mÃ«|ban|ed |m y|Ã«y |d a|wÃ¶m",
                        nba: " ku|a k|a v|na | vu| na|wa | mu|a m| vw|vwa|mu |u v|nga|ku |ya | ka|ka |la |ga |oxe|e v|o v|xe |co |kul|a c|a n|ang|vul| co|o n|ndi|uli| va| li|ti | vi| vy|di | ci|sa |ung|emu| ca|kwa|mo |lem|ing|nu |pan|ule|ca |and|mbu|lin|u m|i k|e k|umo|o c| kw|i n|a l|vya| ya|end|i v|lo |nde|o k| wa|uti|li |mun|fut|uka|aka|esa|unu|vuk|ali|ko |ngi|je |u k|wox|muk|u c|we |van|ma | ma|kut|nda|e c|ane|ind|ngo|kum|kus|ika|lik|kat|nge|kal|ula|ela|amb|de | ly|man|ong|uje|vun|le |zan|ama|anu|ngu|lya|apa|i c| wo| in|go | al|pwa|aku| mb| vo|lif|ipa|gul|ala|u w|u l|lim|vox| ng|ulu|ati|wan|ifu|o m|so |nen|umu|vo |ita|ulo|kam|i a|utw|imb|iko|bun|ana|o w|ngw|upw|ilo|isa|bu |ima|kuk|ene|kup|wen| mw|eso|eka|nap|gi |ili|e a|apw|yen|vip|e m|u n|yox|ukw|a i|gwe|gan|kuv|ond|a y|sin|vak|und|vyo|uku|sim| ak|maf|wam|vum|afu|ayi|e n|avo|any|lon|yi |kan|mes|ena|ame|o l|a w|asi|imo|uxo|nyo|ele|ne |twa|si |nek|ges|elo|mwa|kun|eke|uta|ton|tan|use|lul|uki|amo|wak|da |una| um|yak|wal|wav|yo |ale|lil|sem|mum|wet|iza|ike|key|vuv|a u|vus|vux|i m|wis|bul|tu |i l|vwo|wo |o y|i i|tav|vwe|o a|pwi|utu|was|wat|ina|asa|ije|pwe|uvw|a a|ato|usi|kil|eye|dam|i y|mol|oli|kay|vut|ciz|ye |awa|ola|eng|va |vuj|mwo|ivu|upa|xok|oko|uvi|lye|uma",
                        miq: " ba|ia |ka |a b|ra | ka|aia|kai|ani|a k|ara|ni |la |a a|ba |a s| na| ai|kan|sa |aka|nan|a n| si|an |in | ku|ika| up|upl| la|pla|i b|n k|sin|a l|a u| ta|tka|bri|ira| br|nka|a p|ait| wa|bak|lak|aik|bar|isa|ban|rai| ma|ank|aku|ku | sa|itk|kul|a d|ulk|lka|a w|a t|ris|air| pa|a m|kab|ki |kum|aba|uki| ap|bia| su| di|wal|sut|na |kar|abi|dia|api|ri |pia|ala|i s|uka|ut | pr|tak|ias|bai|ain| ra|asa|mai|ais|rik|duk|kak| lu|i k|i a|aha|pri|as |ya |luk|ha |asb|kra|sba|n s|tas| bu|kia|wai|iba| du|sip|apa|n a|ras| iw|bui|wan|ui |at |ska|um |i l|n b|ila|t b|iku|aya|lkr|kat|i n|aur|bam|nah| ya|ant|ntr|ip | da|i t|u s|i p| ga|awa|a y|ink| an|umi|u m|sau|mun|atk|lik|pan|a r|a i| mu|nir|alk|ana| as|asl|iar|tri|i m|sla|auk|yar|nat|lar|ai |ak | bi| wi|war|dau|iwa|bil|nib|isk|ark|rin|mi |ura|kuk|n u|ari|rka|ta |una|k k|i r|pli| ti|ata|ame| py|men|man|nt |pai|isi|pa |n n|lah|kir|m b|ent|sap|p k|t k| mi|iwi|ma | ri|hma|ahm|gab| al|pyu|pya|ilk|t l|nra|til|iki|u k|tab|aki| ki|bah|amn|mar|li |ita|n p|yua|utb|tba|mik|iti|san|a g|pas|yab|bay|urk| pl|al |paw|u a|nsa|ans|sik|bap|i w|anr|ik |is |mna|maw|yak|lba|apu|lki|rk |ina| sm|sma|mal|tai|pra|aib|upy|tan|ima|kni|n l|aid|may|n w|uya|n t|t t| ni|s k|ria|tik|tar",
                        mam: " tu| ky|b i|il |n t| n |al |l t|u n| il|tu |aal| b |tuj|uj |jaa|ti |iil| ti|xja| xj|j t|an | ix|kya| j |i j|ix | ju|qii|yaq|x t|aqi|een|l k|b a|en |j k|aj |tza|un |lee| mi|n k| tz|tz |ib |jun|nam|l x|a t|am |ok |tna| te| aj|l b|aq |at |okl|qa |kle|ax |eet| tn|l a|n x|tee|a n| to| at|t t|uun| ma|kyo|aan| tw|q i|qe | ta| an|ool|twi| ii|yok|zan|juu| tk| qa|x k| aa|chi|ma |laa|kyx|ol | ch|ab |anq| ya|tii|nq |itz|tok| tx|taa| ee|kye|et |q t|iin|naq|mit|iti|n b|k t|e x| ja|ana|wit| ib|j j|tb |ala|ob | tb|l j|nx |kyt|noq| no|m t|wi |kub|ook|oq |l q| ni|ub |kyi|t k|yoo|q u|e t|j a|l m|x m|nb |mal| ko|i y|iky| ok|anm| q |i t|ik |k u|te |aay|yee|xii|j x|nma|u j|ila|o n|kyj| tj|txi| a |xi |iib|n a|tx | wi| xi|m k|ina|yax|ja |iya|tja|k b|aaw|lqe|n m|l n| oo|etz|jb |unx|yja|yii|za | xa|i x|tl |ntl| t |el | u |yxo|xoo|b e|imo|tku|mil|ixq|ee |him|t x|a b|too|tan|ilq|naa|unt|nan|lab|ky |u m| ik|pan|ipa|ama|n j|maa|z t|b t|a k|ex |sla|xqa|a j| qe|pib|e k|ay | al|yan|inb|una|z a|aax|nin| ka|aaj|ntz|xan|kop|opi|yal|yta|ant|tko|j m|y t| nt|int|ntn| un| nx|q a|xna|eex|n n|uma|miy|ya |ye | yo|mob| xn|z o|kyc|ych| xt|l i|a a|ajb|e w|win|i n|kyu|l o|x i|xax|oks|cha|hik|kol|tum|ksl|yaa|x a|aw |x o|yb |oon",
                        tah: "a a| te| a |te |ra | i |i t|e t|i a|a i|a t| e | at|ta |to | ma|ti |o t|au | ti|ara|fa | fa|a e| ta| am|e m|mau|na |ia |ata|ana|e h| o |e f|man|a o|ama| to|o a|re | na|i i|ira| ai|a n|nar|hia| ar|e i| ha| ra|u t|ai |ha |e a|ato| no|ore| ro|no | or| tu|a m|o i|atu| Ä“ |ora|o n| hÅ|Å Ä“|hÅ |e r|tur| ao|oto| ia|ahi|apa|rot|e p|aor|u i|pa |amÄ|a r|ura| ap|tu |tei|i r|ma | pa|va |ro |par| va|mÄ |ito|ua |e o|ait|ie |eie|uru|o o|u f| ir|o e|u a|ohi|e e| ei| ih|oa | it|hi | hi| av|ri |ita|rur|aha|afa|fai|a h|u e| ah|aif|era|ifa|i e|a f|tah|Ära| oh|iho| au|hip|ipa|rar|Ä Ä| fe|e n|fau|ei |tau|iti|ure| Ät|ni |auf|ufa|utu| tÄ|mÄr|u m|hau|rir| pÄ|upu|iri|tir|ari|rav| af|pu |ave|vir|i m|Äto|pÅ« |are|uhi|roa|mai|ere| ni|ru |u o| an|pap|avi|aro|u v|api|tÄ |tup|nua|enu|a p|pi |ho |fen|ui |i f| mÄ|Ä i|ehi|iah|eia|aho|mui|amu|e v|ae |rer|u h|ve |mu |o r|umu|tum|hin|ou |nah|oro|i o|reh|ava|tat|ihi|a u|ati|Å« i|aut|rau|por|hor|ruh| hu|oia| oi|ÄpÅ«|ate|pÄp|Ä o|aur|ter|aru|tua|e u| ut|hap|ipo|pe |rat|i n|u n|ina|una| me|u p|Ä“ h|pÄr|Äru|po |tam|pae|tor|tou|i p|far| po|oti|Ä e|Ä“ t|Ä“ m|top| nu|ero|mer| er| ho|mua|opÅ«| mu|tit|rah|noa|ota|imi|u r|hui|uir| im| rÄ|ino|ne |rit|rÄ |tae|uit|ea |mar|uri|ite|Ä“ a|aup|uaf",
                        nav: "doo|go |Ã­Ã­ |ee | be|bee|tÊ¼Ã¡| tÊ¼|Ê¼Ã¡Ã¡|Ã­gÃ­|gÃ­Ã­|Ã³Ã³ | bi|dÃ³Ã³| do|oo |Ã¡Ã¡ | ha|ah |e h|o b| dÃ³|haz|Ã­ b|Ã¡ a|Ã­ d| hÃ¡|nÃ­g|Å‚ts|dah|tso|ii |ool|hgo|Ä¯ÌÄ¯|o d| Ã©Ã­|Ã©Ã­ |nii|iÊ¼ |tÊ¼Ã©|azÊ¼| da|aÊ¼ | ah| ni| na|ood|Ê¼ a|hoo|ÌÄ¯Ì|oh |Ê¼Ä…Ì|bin|Ä…ÌÄ…|da |soh|h d|h b|Ê¼Ã© |Ã¡Ã¡d|laÊ¼|aji|ani| Ã¡Ã¡|yah|o t|Ã¡dÃ³|Ã¡ h|Ã­nÃ­|aa |eeÅ‚|din| aj| aÅ‚|naa|Ã©ya|kÃ©y| ba|iin|dzi|Ê¼Ã­g|Ä…Ì |jiÅ‚|yee| ye|Ä¯Ì | di|ego|oot|o Ã¡| dÃ­|Ã¡ Ã¡|o h|iÅ‚t|Ã­ t| ho|Ê¼ii|nah| kÃ©|kÊ¼e|hÃ¡ |Ã© b|ina|zin|ini|otÊ¼|Ê¼ b|tÊ¼i|dÃ­Ã­|Ê¼Ä¯Ì|lÄ¯Ì|Ã³ b|zÊ¼Ä…|ahÃ³|Ê¼ d|Ê¼aa|Ã©eg|inÃ­|Ê¼iÊ¼|Ê¼eh|ahj| Ã¡Å‚|Ã¡nÃ­|aah|inÃ©|baa|aan|ado|i b|ido|ash|Ê¼Ã©e|Ê¼ah|eeh| hÃ³|e b|Ê¼Ã¡a|Ã³ n|Ê¼ Ã¡|ish|hÃ­g|Ã³tÊ¼| bÃ¡|aha|zhd|ees|jÄ¯Ì|nis| bÃ­|hjÄ¯|Ã¡tÊ¼| ad|h n|ehg|Ã³ d|chÊ¼|Ã¡jÃ­|aÊ¼i|e a|dla|shd|hee|oda|ooÊ¼|Ê¼ h|haa|nÃ© |aho|ÌÊ¼ |inÃ¡|ole| as|nÃ­ |tah| Ã¡j|ahe|Ì t|nÃ­Ã­|hdo|Ä¯Ê¼ |Ã³ h|lee|Ä¯Ìg|Ã¡ha|Ã¡Ã¡n|Å‚go|o a|hdl|Ã­ y|tÊ¼Ä¯|iiÊ¼|eÊ¼Ã©|Ìgo|hwi|Ã¡ad|bÃ¡ |azÄ…|Ä¯ÌÊ¼|izh|hak|haÊ¼|ÌÄ…Ì|zÄ…Ì|aÊ¼a|iÅ‚ |iid|ikÊ¼|azh|kee|ada|h t|hod|Ã­ h|bik|itÊ¼|biÅ‚|o n|Ã­Ê¼ |Ã¡ b|chÄ¯|Ã¡an|sdz|wii| yÃ¡|odz|eÅ‚ | Ã¡t|aÅ‚t|Å‚ d|hÃ¡h|Å‚tÊ¼|in |n d|ind|ing|Ì d|tsÃ­|aaÊ¼| nÃ­|h a|sh |Ê¼oo|its|ngo|neÊ¼|nih|a d|Ã­la| hw|Ã³ t|eha|Ã³ch| az|hÃ³c|Ã­da|bÃ­l| ts|Ã¡Ê¼a|Ã­tÊ¼|zÃ­n|zih|Ã¡ n|e n|did|h h|jÄ¯Ê¼| Å‚a|eÅ‚t|has|Å‚aÊ¼|ooÅ‚| nÃ¡|Å‚ch| ii|a t|nÃ¡Ã¡|nit|h Ã©|naÊ¼|tÊ¼a|onÃ­|Å‚da|oon|daÊ¼|tÊ¼e|hÃ³Ã³|dai|Ã­ Ã©|Ê¼di|hÄ¯Ê¼|niÊ¼|kÃ³t|daa|had|Ã¡Ã¡s|ida|Ã³Ã³t|Ê¼ t|hin",
                        lot: "o a| ik|iko|de |ng |hod|ode|ko |to | ho| to|i a|ang|ti |o e|ri |i i|o i|e h| on| ob|re |e i|nyi| ah|ati|aat|i o|ni |ana|aho|ani|yo |ere|ier|bo | hu|won|wo |any| ab|man|na | aa|dan| da|ya |owo|jyo|ngi|n o| el|yi | bw| an| ow|lo |bwo|ve | ve|isi|no | jy|eng|oni|ben|o o|hun|i d|yya| ne|obe|ari|o n|o v|i h|tul|ung|obo|ulu|nya| am|un |si |e a|han| ih|a a|nie|ono|ulo|g o|ita|lul|on |lun| it|awa|a i|mij|iji|ong|osi|ara|ony|ama|abo|an | ar|io | aw| at|a o|au |hos|hon|ji |aba|i t|hi |iti|ami|emi|ik |elu|g a|a b|e e| or| ad|atu|fau|ihi|gi |ori| et|iny|rri|ian|gan|e o| in|g i|iyy|kuy|mis|sih|nga| ku|elo|i e|wan|bab|ta |o t| is|adi|a e| mi|ra |ngo|uyy| wa|ma | em|waa|yit|di |uk |a t|iha|aha| fa|iam| ir|a h|yan|ida|k a|yyi|i b|ak |eti|uma|k h|k i|gia|it |oi |uni| ek|ner|ie |iho|iri|abi|rem|wah|ema|bia|ing|ore|ek |uto|igi|gid|eyy|hut|uno|rij|aga|i j|orr|o j|rum|mir| ha| im|tek|n a|kaf| al| ma|kia|iru|otu|o h|ahi|rre|n i|wa |egi|bis| na|jan|ija|da |e t|ia | om|olo|mik| eh|nit|imi|ihw|jor|umi|oji|koi| eg|oti|wat|err|tik|o f|i l| er| lo|ijo|uri|tan| iy|kum|ata|eki|gem|ruk|obi|aka|u d|yiy|lot|ria|eko|afi| ey|g m|a j| ok|dur|k t|jin|ai |um |nar|uba|nob|bwa|o b|sie|nun|anu|ban|bot|eru|eha|oro|ro |kik",
                        cak: " ri|ri | ru| ch|a r| ju|jun| ta|chi| wi|i r|an |un |ch |chu|n r|win|el |l r|qa |ik |huq|b a| ni|hi |uqa| ki|k a|ruw|Ã¤q |nÃ¤q| k |b Ã¤|j r|en |inÃ¤|ta |tzi|ij |taq| xa|i k|n j|in |ach| pa| al| re|len| ma|aq |xa |pa |Ã¤l |man|q a|al |noj| xt|ib |i n| a |jel| Ã¤l|oje|uk |Ã¯k | oj| ul|ono|ule|a c|uch|re |n w|i w|h u|aj |uwa| ro|a x| nu|ina|ew |a k|wac|lew|aji|wi |q r| at|ruk|Ã¤j |k r|aqi| as|uq | an|n k|ama|zij|naq|n c|oji|ich|xti|k o|l c| ko| ti|i t|sle|asl|ab |iki|ub |tz |Ã¤ch|a t|sam|il |l t|qi |wÃ¤c|maj|ala|itz|i c|n t|ruc|tik|utz|ob | aj|nim|ima|i x|h o| tz|e r|nik|j c|lÃ¤j|ron|k i|h r|kik|l w|rik|Ã¤n |i m|k u| q |hin| in|rut|Ã¼tz| Ã¼t|ma |j t|uwÃ¤|laj|kon|l k|ya |l n|ruq|q i|nel| Ã¤n|iq |una|jib|xik|j k| o |Ã¯l | sa|nÃ¯k| ij|isa|kit|jin| b |zil|oj | ut| ra|ijo|qal|oma|ajo|cha|iri|l j|chÃ¯|hÃ¯k|ke |pan|n x|ejq|jqa|h a|ric|nan|ale|a j|raj|q c|uwi|q k| ka|i a|rej|ira|nir|uj |k c|rom|olo|ilÃ¤|i q|ine|ris|mal|o c|alÃ¤|haj|j p|b e| ja|xtu|onÃ¯| x |u x| u |to |nib|a o|n n|tb |aqa|hik|kir|ike|atb|ja |kic|z n|zin|atz|i j|tzo|tij|kan|lan| na|k w| wu|upa|w r|rub| ac|zob|ixi|hup|n p|jir|Ã¤x |k n|ki |q t|na |wuj|jle|tiq|ojl| ey|axi|nub|iya|jij|j j|jon|ota|ajÃ¯|a m|rij|cho|ani|uto|usa|ak |jo |on | et|e c|zel| wa|lot",
                        tzh: "ik |tik| ya| te|te |ya |ta |k t| ta|a s|ike|l t|eti|il |ich|a j|chÂ´|me |el |uk |nik|al |k y|a y| ma|Â´un|e b|uÂ´u| ay| ja|e y|ke |e s|luk|un | so|ini| me|sok|ok |k s|cho| sp|kÂ´a| sk| be|an |ay |oti|Â´an|a x|isi|ere|rec|ech| wi|elu|sil|win|rer|bel|lum|pis| yu|nti|skÂ´|e m|ant|yuÂ´|ket|k a|jaÂ´|e t|ch | ji|jic|e j|spi|k j| jk|l y|lti|aÂ´ |n t|e a| kÂ´|kÂ´o|akÂ´|ho |ali| st|a t| o | yi|l w|a m|jun|nal|mal|lal|yic|lil|cha|sre|Â´op|nta|ma | sr|y s|ul |o y| tu|l s| ba| le| lu| ju|Â´in|Â´el|tÂ´e|pas|n j|atÂ´|jkÂ´|kÂ´i|n y|tul|sta|kux|a k|lik| re| pa|uma|ati|lek|yal|ix |alt|wen|ent|yan| sl|xch| bi|ume|ile|jal| x |ach|hap|let| ni|met|ina|yak|jch| ch| jp|bil|lan| xc|lel|nop|swe|h y|hÂ´ | sw|une|o t|Â´il|ale|k o|le |muk|aja| mu|paj|ani|wal|ajw| xu|xuÂ´|nix|jwa|ika|kÂ´u|k x|itÂ´|k l| aj|bot| xk|ukÂ´|tÂ´i|l j|a b|bit|hÂ´a| ts|ala|k m|ka | yo|spa|la |sti|ban|n s|tak|l k|bal|e l|ti |ula|slu|l a|ne |hÂ´u| ko|jel|yuk|ayu|Â´a | sn| su|ame|unt|xku|Â´ y|ek | la|uÂ´ | al|tay|yot| at|ilt|l l|pla|opl|otÂ´| jc|oik|Â´ n|aye|bat|yel|mac|x j| ku|ot |iba|x y|ast|op |may|una|nel|tÂ´a|Â´ul|chu|hoi|xin|int|ax |yik| sm|toj|kol|sun|jol| xa|jpa|tem|ele|ane|ol | jl|olt|tes|x a|eme|lot|eli|jik|jpi|jki|tso|e x|y r| jt|sno|os |a l|ojo|o m| to|Â´ m|kÂ´ ",
                        tzo: "ta | ta|el |ik | sk| i |a s| st|tik|ech|l t|e s|un | mu|uk |kâ€™u| kâ€™| oy|ol |uâ€™u| sp|sta|al |eti|ent|â€™un|il |der|i s|cho|ere|rec|oy |ane|te |â€™kâ€™| ya|ke |yuâ€™| ju| o | yu|skâ€™|spa|sko|k s|l s|pas|â€™ch|as |nel|oto|kot|tol|le |jel|muâ€™|kâ€™a|aâ€™k|jun|ho |l i| le|ch |â€™ux|o s| ke|k t| si|â€™an| va|e o|nik|sde|n s|iâ€™c| sd|a j| de| te| xa|â€™el|yan|â€™u |châ€™|in |nte| ch|gen|l y|ele|kâ€™e|ale| ge|e m| je| ja|k o|an |lum| vi|lek|nta|bil|lel|l k|a y|a k|vin|hâ€™u|ven|jec|cha|ini|sch|u s|l g| bu|s s|bal|k y|a m|va | sc|ela|l o|chu|xa |k m|uxi|siâ€™|k i|y s| sl|une|uâ€™k|a t|net| ko|kâ€™i|aci|i t| sv|ike| aâ€™|chi| sb|kâ€™o|kux|n k|sba|ne |sve|â€™uk|a o|muk| s |tal|me |amt| me|mil|kol|l v|tae|lal|tel|mte|lan|lik|â€™in|aje|oje|s o|stu|uni|ion|alu|ile|o t| se|toj|umi|jol|oj |sto| sn|tun|tsa|tad|y t|akâ€™| el|s t| sm|xaâ€™|cio|y y|l l|k k|ojo|tak| na|yuk| ts|kil|aik|one|o k|e t|i k|eki|es |ij |e j|ant|aâ€™b|uâ€™c|ael|xch|jaâ€™|hi |lta|sin|h a| li|e i|bee|eel|eje| ba|mal|l b|kâ€™ |lib|e l|a v|ano|noj|ux |ine|uxc|l j|a b|ju |bu |ail|ek |tso|huâ€™|vaâ€™|ila|o y|ibe|nac|oet|a a|lej|rta|a l|n t|han|j s| al|xij|j i| no|seg|Ã¡s | ku|lti|huk| sj|baj|bai|olt|iti|n j|ert|l n|hoe|ban|oyu|tai|x e|ba |ikx|a i|kxa|ja |mÃ¡s| mÃ¡|let|a x|uma|k l|ber| lu|s a|ts ",
                        lns: "dzÉ™| dz| vi| ki| wÃ¹| a |zÉ™Ì€| fÃ³| e | gh|Ã¹n |Ã¬r |wÃ¹n|wÃ¬r|Ì€m |ay | wÃ¬|É™Ì€m| Ã  |n Ã |gha| kÃ©|kÃ©r|Ã©r | ke|fÃ³ |hay|e k|r d| fo|o w|fo |Ã¬n | ns| ve| Ã¡ |n w|É™Ì€ |wun|m k|É™Ì€n|vÃ­ |rÃ©Å‹|vit| ye| sh|r g|Ã³o |un | kÃ¬|fÃ³o| wu|Ã²Å‹ |kin|Ã³ a| mo|e w| wo|a d|n k|Ì€n |ke |zÉ™É™|a k|mo |É™Ì |y f|wÃ­r| wÃ­| kf|kfÉ™|Ã­ v| ji|wÃ¹ | rÉ™|kÃ¬n|ji |ve | Ã© |Ã©Å‹ |Ã­r |Å‹ w|ita|itu|zÉ™ |ee |kit|in |eÃ© |y w| wÃ²|wÃ²Å‹|Ã­n |iny|o k|nsÉ™|É™É™Ì€|ne |r f|nsa|sÉ™r|Ã­ w|Ã  v| se|m w|tÃ¬ |É™r |er |n s|taÃ¡|aÃ¡v|Ã¡vÃ­|r w| wi| ny| wÃ¡|se | rÃ©| yi|tat|n f|aâ€™ |i w|r v|n a|e v|yÃ²â€™|Ã¡a |e n|wÃ¡a| lÃ |Å‹rÃ©|Ã©Å‹r|tu |Ã¬ k|Ã¨n |Ã© w|ker| yÃ²| vÃ­|m v|Ã²â€™ | li|lÃ  |Ã© k|sÃ­ |an |â€™ k|nta|r k|e d|iÃ¬ |wo |vin|Ã¡ w|tÃ­ |u k|i k| sÃ­|ye | kÃ­|nyo| kÃ¹|int|saâ€™|yo |n v|yiÃ¬|o s|iÃ­ |r m|atÃ¬| ta|say|e s|oâ€™ |Å‹ f|mÃ© |e m|a y|itÃº|yee|Ã¹m |sÃ²Å‹|vÉ™Ì|shi| sÃ¡|m y|Ã­y | vÉ™|Ã©y |n Ã©|r y|m s|n e|Ã­ri|ri | lÃ¬|iy | bÃ³|rÉ™Ì|fÉ™Ì€| ms|Ã  k|msÃ²|sÃ¡â€™| bi|Ã¨r |han|im |iÃ­y|kÃ­ | sa|Å‹ k|sho|vi |oo | si|Ã¡â€™ |Ã¹ k|Ã  f|É™É™ |n n|rÉ™Ì€|en |Ã  n|tÃºm|Ãºm | ko|â€™ a|â€™É™Ì€| Å‹g|veÃ©|e g|y k|nya|bÃ³ |y e|y a|e l| fÃ¨|hiÃ­|fÉ™Ì|o y|o d|kÃ¹m|n Ã¡|Ã­ f| mv|Å‹ v|lim|a l|lÃ¬m|juÅ‹|É™Ì€â€™|uÅ‹ | yÃ¬|e y|si |m r|mÃ³â€™| vÃ©|e f|Ã¨m |â€™Ã©y|r s|Ã¬m |e Ã¡|vij|Ã© v|a s|wiy| wÃ |É™ e| sÃ©|â€™ w|n d|Ã¡ k|y s|â€™ f|o n|um |yin|kiÅ‹|â€™ y|kil|yeÃ©|Ã³ w|Ì€ Ã¡|Ã¡Å‹ |ÌÉ™ |É™ÌÉ™|Ã­ k|yÃ­ |ghv| yÃ©|o v|ki |Å‹gÃ¨| tÃ ",
                        ton: "nga| e |aka| fa| â€˜a|fak| â€˜o|a â€˜|â€˜a |i â€˜|e t| pe|ha |a e| to|i h|e n|oto| ta| â€˜i|o e|ata| ng|ai | ke|ga |u â€˜| ko|ke | mo|a k|e f|ang|onu|hi |â€˜ok|ku |â€˜i |oku|e k|aha|pe |mo |kot|ki |ahi| ha|e â€˜|a p|he |gaa|ton|tot|â€˜o |ne |nu |au |a f| he|aah|â€™i | ma| â€˜e|ko |tah|i k|tau|a m| ai|ea |oa |pea|oko|i f|ung|e m|ua |tok|o â€˜|eâ€™a|toa|i t|u k|a t|aâ€™a|no |ama|i a|i p|ia | ka|uâ€™a|a n| ki|na |mal| fo|aki|kai|o f|ina|i m| ne| ho|auâ€™|pul|u t|kal|tai|â€™an|ota|â€™at|ni |e p|ain|ule|ono| tu|gat|hon|kau|â€˜e |aue|gau|aâ€™e|e l|leâ€™|o h|ika|aâ€™u|u m| pu|ala|ili| me|â€™a |taâ€™|kat|â€˜en|u f|tan|aâ€™i|ei |o t|fon|tuâ€™|kak| la|uâ€™u|â€™u |â€˜ik|ako|nau|ue | fe|nua|ui |li |ene|ta |atu|kaâ€™|kam|ali| na|alu|ao |o k|ing| ku|ehe|uâ€™i|e h|â€™un|maâ€™|le |tui|tat| ia|kaf| ni|ana|hin|kah|man|uhi| fi|ngo|fil|sia|ong|fua|efi|ale|lao|apa|fai|vah|u p|naâ€™|kuo|fou|haâ€™|olo|oun|faâ€™|oni|â€™ap|ulu|ofu|â€™ak|ele|uo |a h|e a|uku|alo|mei|mam|ino|lot|keh|o m|eâ€™u|moâ€™|oâ€™i|tu |â€™uh| ak|sos|si | â€˜u|luâ€™|ohi|â€˜ul|gof|lun|la |aan|a a|ani|otu| te|ie |aut|u n|iâ€™i|eâ€™i|kas|afa|ava|lak|ka |tam|mai|u a|kan|oâ€™u|lau|lie|lel|o n|kon|vei|aum|meâ€™|o p| va|tak|itu|nge|ofo| le|nis|koe|oeâ€™|â€˜ak|â€™ui|han|to |aau|osi|â€™e |kap|lo |lei|loa|mak|ito|ngi| hi|afo|eni|tuk|fan|ena|upu|ti |kin|ueâ€™",
                        tbz: "kÉ› | kÉ›|ti |É› É–|É› k|nkÉ›|aa | a |mÉ› |o n|É–o | É–i| ti|i É–|iti| É–o| nk|i k|nÉ› |É› n|É› t|yi |tÉ› |nit| ba|É› b| yi| mÉ›| bo|oni|ri |mu |i b| on|ba |bo |a k|bÉ› |u k|É› m| we| É–É›| nÉ–|ku |o k| bÉ›| na|É›É› |É› y|É”Å© |É› o|mÉ”Å©|a É–|yÉ›É›|i t|i m|a w|we |nnÉ›| ku|É”u |a b|a n| ka|É› a|oo | mu|ni | o |yÉ›Ìƒ| É–a| yÉ›|nni|kaa|omÉ”| ny|É–É› |É›Ìƒ |mmÉ›|u o| nÉ›|i o|tÃº | É–É”| om|ii |i n| tÃº|mmu|nku|kÃ³ |nti|naa|É”kÉ›|oti|a y|kÉ›n| kp| ko|na |É›i |É”bÉ›|tin|É›Ìƒn|u n| kÃ³|o É–|i y|u y|tÉ”u|É–aa|imÉ”|nyÉ›|rÉ› |É–i | Å‹a|e a| kÉ”|wÉ›Ìƒ|i a| yo|otÉ”|ari|ati|nyi| ot| mb|e k|Å© y|bot|É–É›É›|É›kÉ›|É›É›Ìƒ|enk|ntÉ›|ten|É› i|ee |É”Ìƒ |a m|u m|kÉ”É”| ma|hÉ›i|kÉ›y|yoo|É–É” |myÉ›|maa|É” k|kpe| mÉ”|É› Å‹| nt|kÉ›p|É”Ìƒm| cÉ›|tri| ya| nn|aat|ko | tÉ›|amu|enn|É›yÉ›|ute|a t|omm|É›ny|kut|itÉ›|É–ii|É›mm|É–a |ent|tÉ”b|yÉ›m|o m|baa|tÉ”Ìƒ|kpÉ›|É› c|Å‹a |eti|É”ri| sÉ”|pat|wee|É›É›k|koo| Å‹o|a o|wuÉ”| my|É–it|o b|rim|Ìƒmm|nÉ–a|cÉ›Ìƒ|o o|ant|uÉ” |mÉ”u|É–ak|É–ik|mut|utÉ”|a a| Å‹m|Ãº o|Ìƒnt|e n|tim| it|Ìƒ k|Ä©nk|nÉ–É”|É›Ìƒt|ÌƒkÉ›|É”É”r|É›Ìƒk|tib|u É–|bÉ›É›|kÉ›t|Ìƒnk|yÄ©n|oku|inn|É” n|É”Ìƒn|mbÉ›| yÄ©|kÉ›k|aan|ÌƒtÉ›|i c|uu |ua |o y|kÉ›w|kot|É› f|kpa|Ã³ É–|iit|pÄ© |byÉ›|atr|uku|ihÉ›|cyÉ›|nÉ–É›|ipa|a c|pÉ›i|É–ip|É”nn| tu|yie|É› w|ou |etÉ›| by|u b|o t|a Å‹|imÉ›|kÉ›m|Ã³ m| tÉ”|tik|kÉ›b| ni|nte|ann|pok|anÉ–| nf|É›pa|tip|aku|nÉ–o|yan|yet|u t|mÉ”k| mm|kÉ”b|bÉ”k|tye|ye |bi |e o|o a|pÉ›t|É›tÉ›|mÉ›s",
                        lad: " de|de |os | la|ion|sio| i |on |la |asi|el |es |en | ko|der|ere|ent|ien|o d|ech| el|as |cho|rec|ra |e l| en|a l| a |a p|kon|s d| ka|al |na |ona|do |ene| es|ad |e d|da |ho |to |tie|ers|per| su|s i|los|e e| pe| ti|nte| un|n d| lo|ada| pr| se|o a|ida|est| li|tad|rso|era| re|son| pa|a d|ke |e s|dad| ke|sia|ado|a t|a k|kad|ar |n k|a e|nsi|te |par| po|ara|nas|s k|no |men|ne |sta|n e|pro| o |a s|lib|o e| di|res|nto|les|dos|rta|s p|su | in| to|s e|l d|mie|kom|ens|ser|ual|er | so|o k|nal|nes|ale|por|ber|a a|ibe|las| na|ert|o i|hos|n l|ras|or |osi|ia |imi|un |ran|i l|ter|l k|man|ami|tod|n p|tra|sen|gun|e a|a u|del|e k|a i|one|sos|din|ika|s n|isi|una|ons|i d|kla|o p|o s|des|kas|igu| ku|uni|d d|s l|uno|ngu|ing|ido|nos|ta |ame|ali|bre|gua| no|re |ial| ak|das|io | as|sid|n i|an |art|se |ade|l i|s o|e r| ig|ndo|ura| ma|i a| dj|and|nta|ntr|ksi|uma|dju|ide|s u| fa| le|odo|avo|a o|e p|ome|dra|tos|i e|vor|s f|lid|tar|mbr|nid|ant| si|s t|ten|ndi| me|zar|esp|kua| um|pre|lav|rot|us |ote|eks|l e|sus|kav|kto|r e|s s|i k|e i|int|end|s a| ot|dis|ono|n o|lar|mo |akt|ria|ont| fu|avz|o l|o t|rse|ars|tan| al|ver|ekt|u p|ka | ni|ori|iza|n s|mas|mun|ste|tis|pod|r l|odr|esi|ias|ey | mo|nda|r a|aza|rar|dek|d i|vid",
                        mto: " ja|ats|eâ€™e|jat|ts |â€™e |yak|Ã¼t | ya| ts|jay|at |pÃ«n|di |ayu| di|Ã¼n |veâ€™| ve| jÃ¤|yu | pÃ«|aâ€™a|jÃ¤ |vin| vi|Ã«n |t j|tsy|tse|seâ€™|e j|tuk|a j| ka| jy|ida| ty|n j| tu|Ã«jk|nts|uki|kid|tso|akj|uk | ky|nÃ¼t|ava|vaâ€™|int| jÃ¶|Ã¶nÃ¼| uk|kaâ€™|s j|a t|n t|t p|aak|n v| ny|kin|â€™a |akt|inm|jÃ¶m|Ã¶Ã¶j|t v|ma |yÃ¶Ã¶|jya|daa| pa|Ã¶ma|Ã¶jt| tÃ¶|t t|jty|uâ€™ |jÃ¼t|uuâ€™|in |juu| ju|utÃ¶|oy | pu|â€™em|k p|tyk|yaa|â€™oy|nma|u j|oâ€™o|yuk|tyu| ti|Ã«â€™Ã«|nya|e t|kat| oy| na|p t|tÃ¶n|nÃ¼n|â€™nÃ¼|jÃ¼ |kjÃ¼|pav| ax|ax | mÃ«|Ã«Ã«t|so |y j|i v|jyÃ¶|Ã¼p |yoâ€™|pÃ¼n|Ã¶â€™n|a v|s y|kut|aâ€™n|t n|kÃ¼n|Ã«t |yjÃ¼|k j|Ã«na|s d|â€™ak|syj|vii|x j|â€™n |yÃ« |pu |u d|ip | ni|yat|yka|jts|mat| yâ€™|t k| py| ku|s k|jÃ¼p|i y|i t|jup|jÃ¶â€™|tyÃ¶|kya|na |utÃ«|mÃ«Ã«| yÃ«|peâ€™|aky|â€™an|any|tÃ¶â€™|tÃ¶Ã¶|Ã¶jk|dÃ« |nÃ¼ | dÃ«|em |Ã¶â€™k|tÃ¶j|it |e y|â€™ix|up | vy|ji |p j|yin|tÃ«j|Ã¼ j|vyi|ajp|ja |nk |akp|va |yay|dat|kÃ¼t|ii |tii|jki|n p|Ã¤ p|ktu|daâ€™|yÃ«Ã«|nax|kku|dÃ¼ |u y|n d| dÃ¼|y t| ix|ijn|akÃ¤|jk |iij|xa |tsj|Ã¤ j|aan|nyi|kju|put|akk|kja|aty|ixp|ayo|xÃ¼t|n k| my|â€™yi|Ã¤ v|jkÃ¼|n y|akv|jpÃ¼|tsÃ«|Ã¤â€™Ã¤|kÃ¤Ã¤|Ã¤ t|â€™Ã¤ |yip|akâ€™|p p|oâ€™y|kÃ«â€™|yâ€™i|â€™Ã«y|Ã«yj|kaj|kmu|i j|Ã«ka|tÃ«k|i p|yÃ«j|â€™ t| tÃ«|tsÃ¶|kyu|mp |o j|tsÃ¼|yÃ¼t|Ã¶Ã¶n|Ã¶nk|xpÃ«|s p|um |m a|oki|i a|akm|yji|yoo|myu|Ã¶j |nat|Ã¼ y|Ã¼ v|e d|mut|ap |t u| oâ€™|Ã«jx|pay|vÃ¤â€™|kÃ«j|kpa|da |yam|tok|Ã¼ k|Ã«nÃ¼|pÃ«j|ink",
                        ast: " de|es |os |de | y |la | la| a |e l|rec|ien|ech|ent|en |na |a l|dre| dr| so|Ã³n |n d|les| co|a p|aci| pe|al |los| qu|ona|que|iÃ³n|s d| ll| es| to|hu |chu|u a|per|a d|nte|el |ue |ciÃ³| na| lo|se |ers|tie| d |u d| en|ion| se|con| ti| pr|cio|a s|rso|res|son|er |s y|cia|a t|tu |nes|lli|te |men|ar | o |lib|pro| in| re|oa |dÃ¡ |toa|nci| un|ale|so |ia |nac|un |est|e y|one|ici|s n|tra|ra |ber|mie| el|enc|ual|del|a e|s a|y a| ne|s p|ert|ibe|nal|a a|e s| po|hos|e c|a c|cho|man|com| pa|iu |ase|ami|s e|s t|Ã¡ d| le|idÃ¡|una|rÃ¡ |e n| di| nu|ome|ter|a y|e p| xu|esc|nun| ca|end|ame|ntr|ere| al|dic|ese| vi| fa|aes|tÃ¡ |y d|n c|ica|l d|da |ndi|col|r d|ntu|n e|e d|y l|ial|cie|era|soc|n s|oci|u y|des|nta|s s|a n|esp| me| cu|y e|l y|sco|tiv| ac|u n|nde|cla|ene|n p|ali|ide|a q|a u|y p| as| ma|hum|uma|ist|d a|n t|ier|a m|s c|ont|vid|ten|qui|s o|sta|tos|ens|ies|s l|rtÃ¡|nos| hu|s q|in |ser|e t|gua|bre| l |r e|rta|n l|su |ond|sto| ig|ta |eme|tol|igu|sos|pre|esq|olo|ant|sen|mes|nda|squ|omu|rac|u t|l e| ye|s i|nen|e a|u e|n a|tae|efe|nel|ive|ca |or |ver|s f|ibr|int|tor|eli|Ã¡u |imi|rem|xun|tar|re |ind|egu|s m|o q|drÃ¡| fu|lle|ndo|ru |und|tal|r l|l p|dis|pen|u o|bli|rot|lid|r a|ote|a v|uie|tic| am|tam|o r|ada|l s|cua",
                        tsz: "kua|ni |ka |ua |arh|rhi| ja|a j|ani|uar|eku| ka| ju|aku|ech|cha|a k|aka|i j|urh|imb|mbe|a i|iku|jur|i k| k |ri |eri|ti |sÃ¯ |k u| ui| ia|era|iri|him|ats|iam|ini|i i| ma|uir|i e|rip|uec|u j|ngu|ipu|tsi| ji| ua| es|jat|sti|esk|rhe|bek|amb|kue| am|u k|nga|men|eng|end| ir|ndu|ang|che|ksÃ¯|rhu| ku|ha |ame| en|ire|du |gua|and|aak|ki |ati|rak|per|ma |uan| im|aÅ‹a|ist|mbo|a u|a e|amu|no |i m|pue|ku |ata|jim|ga | no|par|be |han|uak|jku|i u|hik|her|i n|esi|hu |ski|kun| is|ses|eni| se|jpe|a n|nda|sis|ajk|sku|i a|pu |a m|ajp| o | an|jan|hek|ari|uku|u i|si |nch|iti|uni|rin|jas|uer| er|ura| na|man|aua|a t|iks|sik|ima| ue|uaj|ime|Å‹an|Å‹aa|aks|ret|hak|ndi|tu |o i|a a|isÃ¯|bo |kak|uat|rha|nts|asÃ¯|tak|a s|ta | ts|mer|i o|eka|kur| mi| ni|ant|ter|tik|hin|ana|tan|ru |eta|ran| in|mbi|maj|mu |ama|apu|so |kat|tsk|iÅ‹a|ska|ing|jup|nta|rat|aec|upi|ete|anc|ast|mit|ram|u e|eÅ‹a|tin|o n|muk|u a|eru|bik|uae|jin|nap|tse|Ã¯ j|ung|hit|ind|ate|apa|tar|na |mar| pa|aat|nia|o j|ara|jtu|taa|oni|nde|jau|sÃ¯n|pek|est|int|a o|Å‹as| te|uek|iat|gon|pen|o a|i t|ngo|tsÃ¯|oka|ipa| ne|rek|Ã¯ u|sta|i p|e j| ar|sek|eia|pik|uch|emb|gak| i |oÅ‹a|u u|i s| ch|ngi|Ã¯ i|iak|jaÅ‹|ajt|Å‹aÅ‹|hes|nem|ema|Å‹ar|kso|raa|tec|hen|ets|kpe| un|dan|jar|isk|meÅ‹|eua",
                        swb: "na | ya|wa |a m| ha| wa|a u| na|ya | mu|a h|ha |ana|shi|ki | zi|hak|i y|a y|a z|la |aki|a w|si |a n|i m|a s| ma| sh|utr|mwa| mw|tru|har|ula|mut| za|hi |u a|wan|ari|ri |ru |a i|ao |ama|io |a k|tso|ndr|za |au |ma |he | ku|mu |ni | au|tsi|afa|i n|i z|ahe|ili|kul|iha|asi|i u|o w|nu |azi|ada| un|end|awa|i w|ish| ka|i a|ngi|naf|its| am|li |zi |fas|kao|eng|e n|aka|sha|ika|ina| an|ka |iki|o y|amu| ud|u h| ut|ra |lio|aha|dam|ia |ba |mba|ren|zin|usi| ul|mus|amb|ats| uk|a t|dzi|yah|o a|ali| it|nad|a a|ani|udj|imu|dja|uka|ara|o n|dre|ele|zih|eo | ts|una|i i|kin|ing|hus|sa |jam|ots|iwa|i h|ila|u w|ala|u n|vhu| at|o u|o h|e m| É“i|ang|re |inu|fik|usu|ngu|ndz|ifa| uw|we |wo |É“il|zit|saw|nga|sok|e h|wi |ini|wah|zim| uv|u u|any|muh|oka|eli|a d|aru|par|mat|É—e |e w|adh|e u|me |u i|dji|uÉ“a|rum|dza|u m|o m|fan|dhw|tre|kan|ata| pi|uts|ahi|iya| in|yo |ume|mbe|di |laz|omo| nd|ung| us| É—e|awo|som|uwa|piy|kaÉ“|sin|uku| ur|itr|avh| yo|him|muk|uru|o k|yot|ita|uma| sa|eke|É“al|u y| ki|upa|ria|udi| mb|uvh|i k|iri|mo |tsa|yum|gi |kav|nyu|tri|no |leo|ja |ian|apa|ash|hik|lwa|men|afi|law|ahu| uÉ“|iny|and|are|o z|u z|tse|e a|bel|hwi| tr|mah|ira|ti |wat|lez|ush| mi|nya|waw|uhi|han|sen|rel|ua |hih|aÉ“a| vh|kir|zia|way|mas",
                        cab: "un | lu|n l|an |i l| la|ai |ti | ha|ia |gia|igi|lun|a l| li|dan|agu|Ã¼ri|ni | le|gÃ¼r|bai|rig|u l|uti|uba| gÃ¼| yu|aun|lan|le |ida| su|gua|gu |n g|ara|ri | ka|yut|hau| fu|sun|e l|aba|n a|lua|ien|n s|uru|i h|Ã¼gÃ¼|han|ati| me|n h|fur|gun|run|ra |a g| gi|i g|lid|ari|en |iÃ±e|ani|ada|uag|lig|ira| lÃº|in |ei |air|du |uri| da|gie| ub|n f|ban|bau|hab|uni|au |me |egu|lub|rÃ¼g|aga|Ã±e | ti| ga|igu|lag|iÃ±a|arÃ¼|aÃ¼ |uar|uma|ka |a y|udu|Ãºru| ab|a m|siÃ±|rag| an|aha|rud|abu|hin|gar|i a|bu |umi|gai|tu |mie|Ãºn |iha| si|gÃ¼ |kai|lÃºr|iru|las|ua |awa|rum|i s|i t|n m|nda|n k|amu|n u| tu|tid|Ã±ei|giÃ±| ta|uai|agÃ¼|da |adÃ¡|ha | Ã±e| ma|ieg|a t|Ã¡ga| ad|u t|ibi|bih|i y|nig|lib|ubÃ¡|u s|bÃºs|dun|n t|und|uwa|Ã¼ni|e a|lab|Ã¼ l|u h|ihi|ma |u u|mur|nba|sub|gÃ¼d|Ã±a |a a|di |a h|adÃ¼|lum|cha|yub| Ãºa|ain|sie|ewa|rÃºn| lÃ¡| lÃ­|ful|lau|u a|rad|dei|asu|ina|i m|ham|hig|su |ugi|dag|bÃ¡ |bÃ¡g|to | to|atu|iwa|dÃ¼g|and|nha|lad|e y|chi|u g| au|e t|n i|min|nde|dau|ugu|had|u i|ini|rid|wa |mai|ama|agi|Ã¡ g|wat|gum| ar|ran| sa| am|gir|riÃ±|n d|gim|ru | ba|Ã¡mu|Ãºse| gu|eha|adi|wan|mu |Ãºar|irÃº|dar|gÃ¼n|dÃ¡m|ngu|nÃ­ |anh| id|ima|mut| ua|n Ãº| gÃ¡|hag|man|anu|wad|iba|i f| bu|i b|a k|ung|lar|i d|eri|ngi|ang|ibÃ¡|ami|gaw|wai|abÃº|i u|aru|a s|u y|has|idu|Ã­ch|Ã¡ra|end",
                        krl: "en |da | da|ize|ien|ist|evu|oig|kan|gev|ige| oi|anz|on | ku|sti|n o| ri|an |gah| ka|el |eh |nza|lli|ris|liz|ika|tik|vÃ¤l|uks| vÃ¤|us |al |hiz|ua |ttu| on|zal| jo|sie|vus|ahi|zel|oga|l o|n p|ksi|stu|itt|all|jog|n k|tsi|n d| ol|lla|zen|in | va|l r|kse|ah |vuk|per|miz|Ã¤ll|izi|zie| pe| li|tu |oin|es | yh|n v|a k|loi|yht| pi| ta|oll|tta|val| su|ii |ami|lib|zeh|bo |teh|ih |idÃ¤|ibo|n t|as |lly|hte|kud| hÃ¤|pid| tÃ¤|h k| om|Ã¤ne|a v|oli| mu| mi|ine|kun| to|uad|s o|dua|nen|ust| ni|unn|h d|ivo| si|hÃ¤n|ehe|ne |h o|oi |tua|ott|voi|rua|uol|ett|tun|udu|ei |kon|i s|olo|sua|oiz|il |ai |tah|arv|ell|und|toi|ehi|aht|et | ei|ats|a o| ra|is |ald|ytt|Ã¤y |tti|iel|a h|n m|eru|sta|tam|ti |se |nda|tet|omi|nan|utt|mat|dÃ¤y|la |sen|n s|i k|rus|vel|oma|ast|ttÃ¤|zes|le | ki|s d|kai|oh |ku |i t|avo|yzi| hu|huo| tu|hto|lis|a a|mie|iÃ¤ |n l|puo| ru|tÃ¤m| lu| al| ju|to |aze|Ã¤h | us|aik|end|ty | ot| se| pa|a p|est| pu|rvo|s j|du |i o|nna|a t|dÃ¤ | ar|usk|mis|aha|os |nzu|ta |uo |taj| so|nnu|ual|oit|Ã¤yt|aut|s s|hel|hva|i v|oih|n a|ste|pas|izu|s t|ali|lal|h s|sii|opa|uga|mug|zoi|nzo|tty|n r|aza|uat| el|rah|att|ahv|joi|mua|ulo|l k|u k|tul|uma|irj|ala|n y|lin| mo|zet|eks| op|kir|s k|ako|y o|s r| sa|n e| ko|nik|die|ara|moi|man|isk",
                        zam: "uan| ku|kua|an |n n| xa|xa |en | nd|ndo|ob | na|dob|ti |a n| ye|ak | mb| ch|las| pa|as | di|ar |par|men| me|cho|iti|ts |dit|ho |nla| nl|es |ien|gak|mie|na |ets|yet|mbe|b k|kie| mi| gu|i m| nt| ga|ie |bes|n g|nak|s x|n k|lu |o k| nk|iet| o |a m| ri|rie|ab |gui|n m|nki|ta |s n| lu|dib|o c|n l|nta|n x|ba |et | ti|ol |a k| ng|yen|ui |s k|in |i n|a y|ent| ki|xga|b y| xg| ka|s p|r n|gab|ib |a g|idi|i k|t m|tid| ta|rti|s y| yu|k x|ort|xen|bxe| bx| or|k k|che|mbo| li|b x|ndi|kap|ap | ba|a d|yes|bol|its|jui|kin|u n| ju| la|a x|uin|is |e k|s o|k p|s c| ro|e x|b m|i x|ed |nti|iba|r d|nar|nt |tsi|o n|b n|uit|i y|lis|n y|a j|dix| nx|ino|no |xi |ixi|r k|s t|mbi|nga|o m|i c|eti|a p|uy |yuy|k d|t k|enl|s m|nto|s r|hen|ngu|ted|n o|b p|nte| ts|k n|nda|rÃ³ |a b|iki|bik|arÃ³|a l|n b|n t|u x|l k|la |a o|e n|nlu|ana|r m|tim|b d|n d|e t|gua|ad |b c|a r|s b|i t|l x|yuÊ¼|uÊ¼ |e y|y c|ngo|rue|ue |gol|b t|u g|gux|kab|lin|s g|op |k c|e m|k m|lad|Ã³ k|sin|ey |d n|cru|da |s l|aÊ¼ |i o|he |imi|s d|taÊ¼|cua| cu|ual| cr|b l|nxa|xab|i r|i b|ux |o r|d x|nag|k t|r x|uÊ¼n|nÃ³ |inÃ³|k y|tl |utl|xut| xu|t x|ai |b o| Ã±u|u r|l y|b g|n r|k r|rop|rol|ek |y p|yi |us |d k|x k|mby|tab|o g|mÃ­ |r g|ala|p k|o y|pa |ied|mi |iit|die|bki|mbk",
                        top: "an |lak|akg|ata|ama|aka| na|ala|kan| ka| ix|ini| la|a t|ni | ta|mak|tam|n n|kat|ch |tla|chu|in | ch|la |kga|ta |lan|lat| ak|h i|ixk| ni| tl|kam|a n|nin|tal|xla|ma |xku|wak|ka | xl|win| wa|awa|uwi|ak |kg |hu |kuw|akc|kch|min|alh|nak|ika|ach|na |n t|tum|ami|wan|tu | tu|n k|ani|nac|ali|nit|pul|man|nka|ask|nat|n l| li| ma|pal|it |i k|ank|una|k i|k a|hun| pu| pa|n c|i n| at|ema|ula|tak| ne|nem|um |ilh|ti |kak|a a|nan|akx|i t|ila|i l|lh |a l|a k|g l|kal|h a|kgs|n x|u n|apa|sin| ti|u k|ana|tat|tap|p a|ap | am|nal|atu|gsi|xta|nil|atl|tun|ina|u t|ats|aya|mat|a p|nik|gal|ku |tsi|uwa|n w|a w|lht|ima| xa|a c|ixt|wa | al|kgt|map| in|hta|at |apu|lim|u l|tay|xtu|law|a m|a x|kas|lit|okg|nu |lhk|hka|taw| an|utu|sk |ixl|lhi|gta| un| k |aku|wal|hi |kil|puw|kgc|lik|xni|unu|p u|gch|n a|i i|t a|chi|uni|kxn|kxt|un |kuj|sku|t n|umi|kgl|glh|si |akl|g a|iti|lip|mal|akn|n i|kgo|sta|kla|ga |axt|pas|ixp| ut|i p|n p|u x|ast|xli|nam|kgk|i a|itu|u p|kap|paw|mas|xpu|gap|aks|gan|tas|i x|t t|put|tan|li |liw|t x|aki|uka|i c|k p|ekg|a i|ita|lha|tka|cha|yak|n m|tik|kni|tac|iwa|lin|gxt|kgx|lam|atk|wek|yaw|lal|iku|u c|gax|xal|gat|ati|k k|ipa|ion|one|nes|es |nid|ida| je|ha |t w|das|cio|huw|lhu|aci|u a|ink|tok|max| ap|s u",
                        cha: "na |an | i | na| ma| ya|yan| pa|on | de|ion|ha | si|sio|ra |iha|ina|par|o n|cho|man|ho |ara|n i| gi|asi|rec|a i|ere|der|sih|ech|gi |do |i d|ai |a u|al |ao |o p|ent|odo|ad | ni| to|tao|tod| ta|gai|n g| li| in| co|a n|ona|o m|i p|nas|men|a p|a y|a m| ga|a t|i m|nal|ibe|dad|a g|o s|i t|rta|ni | es|lib|at |ert|est|ber|pat|o y|a s|o i|uma|ana|nte| un|te |ida| gu|tad|n p|com|a d| ka|i c|o g|sin|ame|nta| um|n n|n s|as |l n| re| nu|ui |ot |cia|ine| po| pr|tan|mas|a a|i l|omo|ia |to |o t|en |e n|pro|sta|mo |ya | as|n m| ti|i u|ano|i i|ota|nen|pot|no |nui| so|be |lo |so |res|a e|sa | ha|oci|ase|un |are|ebe|soc|i f|aot|deb|ala|ter|ant|i k|per|gin|ta |gui|go | fa|tra|i s|ade|con|ang|de | di|io |et |nih|ksi|asa|ers|nto|tin|afa|nda|min|n e|i a|rio|n c| pe|ste|ras|n t|gua|a l|ini|e y|isa|ten|ntr| la|nid|ari|a k|sti|ro |n l|i e|nan|e u|ma |ti |ale|e g|tal|s n|n y|n d|e d|fan|a h|gur|nga|ali|aya|tay|i h|agu|ena|reh|nam| se| uf|i g|eho|nsi|son|uet|uni|co |ont|ati|lai|bli|era|aba|bal| fu|n k|d y|ela|lan|rso|ico|ago|usa|duc|alo| ch|emp|nat|nci|nde|ura|ufa|maa|ial|int|t i|tek| ku|ote|uat|rot|tro|tku|cla|kue|ral|kas|uca|cas|fa |lin|da |hon|d s|a r|otr|t p|fam|l y| ot|haf|esp|und|eks|fun|ge |ado|del|es ",
                        crs: "an |ann|on |ou |en |yon|syo|nn | la| an|te |n d|n l|wa | ko|n p| po|asy|rwa| ba| dr|drw| ga| en|gan|kon|ban|pou|nny|son| di|ny | so|n k| ki|tou| to|n a|man|nna|dan| le| e |n s| sa| de|yen|er | da|ki | ek|ek |un |nan|oun|dim|mou|imo|ot |bye|n e|al | pe| ob| pa|et | li|oby|ite|u d| pr|ans| re|onn|zot| lo|lib|dev| zo|ali|n o|anm|si |nas| i |e d|pa |enn|i p|san|men|rte|e l| ma|n b|sa |ns | na|per|e e|lit|e p|ert|ret|ras|osi|n g|a d|e k|pro|ant| os|ter|ibe|ber|lal|a e|re |e s| no|fan|ik |nou|az | ok|ksy|i a|ler|ken|nm |vre|nte|ime|k l| ka|el | in|i e|par|n n|ave|n t|nal|evr|oke|ni |tra|ar | tr|rav|e a|ers|kas|ran|ons|onm| im|osy|sos|ote|e o|ika|n z|sya|ir |nma|in |ava|ona|era|ont|res| me| fa|edi|dik|lar|t l|ei |ab |r l|pei|nda|i k| se|ver|fer|n i|y p|n f| ne|lav|ond| fo|y a|lwa|ara|ezo|met|li |rso|rit|n m|l e|ete|eks|kot|u b|pre|led|ent|t g|lan|nne|i d|alw|i g|kla|ese|ide|nt |ini|nsi| av|der|a s|a i|ak |i l|ti |i t|n r|is |apa|i s|las|are|l k|a p|ern|ay |u t|vay|a k|s e|se | fe|sak|rot|rel|bli|a g|pli|nes|r k|azi|ser|ib |lop|yal|van|mar|avi|ort|r e|gal|a t|vek|ega|asi|tan|lik|sid|t d|sye|zir|imi|i b|k b|zon|k p|k s|de |lap|nmi| si|u a|a l|sir|ze |r d|Ã­n |iÃ­n|eko|esa|r i|aso|y e|zan|esp",
                        ddn: "na |ma |nna| ka| a |a n|ka |a b| nn|ama| ba|a k|om |ni |a a|yom| ma| bÉ”| n | da|a d|i k| ku|daa|aam| go|nÉ› |a m|iya|a s|rÉ” |É”rÉ”|i n|gon|ya | hi|bÉ”r| ga|ani| za|iyo|a g|ri |aa |a h|inÉ›|É›i | sa|mÉ›i|fÉ” |ara|kul|yo |ayo|ini| si|ra | bi|ari|É”Å‹É”|lu |bÉ”Å‹|ulu|onn|una|ga |ei |niy| di| ci| fÉ”|hin|kun|nÉ” | du| kw|a z|Å‹É” |a t|waa|bam| na| nÉ”|ii |wei|i g|a c|amÉ›|bin|i b|É” n|ba |riy|sÉ› |si |É› b|aar| sÉ›|É› a|iri| ta|maa|É›rÉ›|uri|kwa|É” k|zam|ima|m d|tÉ› | mÉ›| ya|i s|n m|uur|a f|É” b|sar|É”u | Å‹w|u k|rÉ› |ono|gwe| de|u n|man|i d| be|duu|u g|sii| gw|u b|É› n|i t| tÉ›|gan|asi| su|m n|bar| Ã£d|É” f|É” s| cÉ›|di |ci | hÉ›|su |Å‹a |i h|ali|no |uni|dun|bu |uyo|ko | ti|eiy|É›nÉ›|É” g| ko|ann| mÉ”|n b|li |him|Ã£du|n s|o b|É” m|baa|taa|hÉ›i|cin|É›iy|eer|wÉ›n|ila|til|É› d|aan|É” d|abu|aal|bei|eri|Å‹wÉ›|nni|o z|cÉ›r|las|am |É› g|yan|mma| ji|aab|i a|cou| co|o k|oo |o d| wÉ”|wÉ” | fi|aÅ‹a|isÉ”|fis|sÉ”u|a y| la|i c|a Å‹|É›É› |u a|m k|zaa|imm|É› k| É”u|sim| ha|imi|mi |dam|É›tÉ›|o g|m b|i m|tÉ›r|Å‹u |laa|aka|saa|dee|ee |asa| se|zaÅ‹|yaa|a w|i f|É› h|mar|n g|dei|e b|Å‹wa|nan|a j|É›ru|mÉ›É›|rum|u s|u h|ana|dim| bÉ›|uma|wa |sen|enn|jir|je |du |ala|É”É”r|mÉ”É”|u c| ce|i y|kar|rig|la |itÉ›|a l|É› f|gu |yay| gu| al|u m|cee|eej| an|eji|É”É” |inn|nay|aas|ici|ric|i z|aay|bÉ›r|É› y",
                        loz: "a k| ku|ku |na |wa | ka|a m|ni | ba| ni|a n|ya | mu| ya|lo |la |o y|swa|ba |i k|a b|li |wan|elo| li|tu | na|ane| ha|u k|a l|nel|ka |ela| sw|utu|ona|mut|i s|u n| si|ha |i m|a s|za | ko|aha|a y|mwa| mw| tu|ana| ye| i |ng |nah| u | ma| mi|a h|pa |kul|lel|ele|apa|fel|ili|kwa|kon|kap|u b|kau|auf|sa |ufe|a t|ye |pil|a u|mi |ula|ta |isw| za|i b|o k|e k|mul|mel|ang|man| bu|u s|o z|ina|to |a z| kw|ze |lis|uli|ala| a |ae | ze|ume|atu|hae|zo | sa|o m| wa|eza|g i|lik|i n|lat|ata|u f|ali|sin|e m|i y|ki |i l|ila|ile|wi |a f|bal|sil| yo|uto|eng| ki|ulu|bat| fa|lez|ban|tum|o n|nya|una| zw|i i| il|o w|fa |le |uta|iwa|lao|ao |lwa|si |ezo|lin| la|i t|kun|a p|a i|kut|no |uku|i h| pi|but|aba|ebe| fi|u m|wal|ate|e i|u l|seb| wi|u z|u y|ise|ket|u i|mus|ho | wo|e l|g w|zi | lu|ale|ika|bez|isa| ke|tok| bo|ani|alo|kat| ta|zwi|fum|ike|ano|i u|iba|ezi|o b|u p|api|ngo|luh|zwa| it|bon|e s|tut|a a|yon|han|wo |ten|ape|wis|cwa|lan|bo |yal|aza| ny|okw|osi|hal|eli|e n| cw|iny|uma|ena|go |e b|ko |e h|muh|fiw|tal| ez|zwe|uba|bas|kan|mun|tuk|o i|uho|usa| fu|u t|yen|itu|yan|o h|hap|sez|hai|sal| pa|tis|and|ezw|pe |emb|tus|yo |ati|ken|zap|isi|asi| in|lib|nis|u w|e t|u e|asa| ng|uha|bwa|nga| bw|mai|so |u a|siz|ham|ga |ako",
                        mri: "nga| te|ga |te |i t| i | wh|ang|na |a k| ki|ia |wha|ki |a t|hi |ahi|tan|e t|a i| ta| ng|ata|ana|o t|aka|ei |hak|a m|a a| e | me| o | ma|a w|e w| ti|nei| ka|tah|ai |gat|ta |a e|i n|e m|i i|i a| ra|me |eta|ika|tik| an|ran| ko|kia|o i|ua |ka |a r|i k| a |a h| ia|e a|ko |e k|a o|i r|tet| tu|re |rit|ea | mo|no |ite|ona| wa|oa |e n|o n|ra |ane|tu |i o|atu|whi| at|i m| ho|kau|i w|a n| ro|oki|ara|aro| no|ten| he|kat|hok|wi |iwi| iw|tia| to|man|ato|hai|ung|i e|u k|tur|ro |ing|kah|e i|e h|ke |mo |mah|ora| ah|to |i h|eng|hua|aki|oto| ri|aha|ene| ai| ha|kap|toa|tau|rot|ina|han|apa|ati|hei|o k|e o| ru|run|aua|e r|ui |he |au |mea|utu|wa | ne|ere|nui|uru|ake|ton|uri|o r|pu |whe|ru | hu|u a|tut| ak|kan|ein|mei| on|ira| or|a p| na|e p|ao | ao|kar|iwh| ke|hiw|ure|ari|hae|tea|kaa|ako|ore|ahu|awa|anu|aur|hin|ono|pa |aer|pon|hen|ita|nua|kaw|oho|wat|enu|apu|ri |kor|har|o m|rat|o a|iti| pu|ho |noh|pap|opu|wah| pa|tin|rar|mat|aar|upu|ine|ate|aup|upa|u m|noa|mai|pai|tir|ota|oti|tak|kin|kua| ku|kot|ne |rah|uar|kit| po|uta|aho|u i|mar|hia|e e|uat| ar|kei|awh|ano|rop|ter|ino|mau|u o| et|ti |u t|tuk|u w|o o|ahe| pe|o h|nat|apo|hap| en|hor|ae |pua|uak|ong|pur|gar|iak|ma |mon|nau| hi|ura| in|ain|hit|pup|nan|oat",
                        hsb: "je |nje| a |pra| sw|raw| pr| wo|swo| na| pÅ‚|wo |jen| za|wob|a s| po|a p|awo| je|na | ma|ch |ne | so|owa|anj|wje|ja |enj|e p|o n|ow |a w|dy |kÃ³Å¾|Ã³Å¾d| nj| kÃ³| wu|obo|sta|so |bod|pÅ‚i|e w|ju |abo|pÅ‚e| w |Å¾dy|ma |e a| ab|bo |osÄ‡|stw|e s|woj| do|nja|y m|ich|ym | st|dÅºe|Ä‡e |iÄ‡ |nym|o s|o w|dÅºÄ›|aÄ‡ |nos|ost|a z|jed|jes|eho|Ä‡ k|wan|odn|ho |ny |ej | dÅº|mi |jez|aro|o z|owj|dow|edn|e z|eje|zak| ko|ych|rod|nyc|waÄ‡|nju|a a|zje|wa |nar|am |otr|e d|kot|ske|u w|o p|Å‚ow|mje|jew|a n|awa| tu|u a| zj|two|Ä‡ a|sÄ‡e|ÄÅ‚o|a d|wot|dny|awn|tut|aja| ÄÅ‚|za |oje|smÄ›|u s| wÅ¡|dno|ez |adn|ist|eÅ¾ |kow|u p|a k|raj|eny|a j|pow|o j|jeh|h p|Å¾iw|ako|isk|Å‚is|i s|o d| by|esm|y p|wow|odo|m a|wos|m w| sp|mÄ›r|ena|tat| to|man| su|kej|twa| mÄ›|tre|Å‚eÄ‡|Ä‡en| dr|ke |ÅºÄ›Å‚|taj|i w|adÅº|rje|su |mu |a m| Å¡k|ski|mÄ› |Ä› s|dne|ki |e Ä|li |dru|emu|o t|i p|a t|iwa|kit|du |dÅºi|hro|jej|wÅ¡i|Å¡it|swÃ³|Å‚ez|kra| zh|wÃ³j|wÄ›d|tow|i a|wÃ³l|wÅ¡Ä›|Ä‡i |sÄ‡i|sto|sÅ‚u|bje|zhr|by |els|jic|odu|ran|rom| re|jem|u z|sob|wne|own|and| te|atn|Å‚ad|kÅ‚a|oma|m p|reÅ¾|akÅ‚|im |run|opr|wop|Å¡ki|Åºe |mad|cho| mj|stu|low|nic|tej|ach|pod|nan|w a|Å¾ j|aln|zna| z |e m|nak|om |imi|aÄ‡e|soc|la |oci|cia|ial|ko | ja| ta|eÄ‡ |ori|i z|dok|ce |oke|ÅºÄ›l|kel|tup|jo |elÅ¾|Å¾ s|ojo|mÄ›n|lÅ¾ |oda|ami|woz|ozj",
                        cri: " di|di | cu|du |tud| tu|udu|uÃª |cu |ngu| ng|tu |Ã³n |guÃª|Ãªtu|u d| ca| ni|ni |u n|rÃªt|irÃª|dir| e |Ã§Ã³n|tÃª |Ãª t| tÃª|Ãª d|ca | na|a n|u c|la |a c|de |a p|i t|a d| pÃ´|ade|na |sÃ¡ | fa|dad|pÃ´ |a t|dÃª |i d| li| pl| sÃ¡|aÃ§Ã³|e d| dÃª| co|sÃ© | sÃ©| Ãª | ua|i p|Ãª c|fa |ua |do | pa|ent|lÃ¡ |al |xi |sÃª |Ã¡ c|plo|da | ma|Ãª f|i c|con| Ã´ | de|uÃ© |n d|ual|lib| tÃ©|Ãª m|a s|ida|Ã¡ n| fÃ©|uÃ¡ |i l|ibe|ber|tÃ©l|Ã©la|ado|rda|cuÃ¡|erd|pa |und|tla|fÃ© |Ãª s|to |men|mÃ© |sti| se|u s| qu|o d|Ã¡ p|Ã¡ d|ia |i s| sÃª|Ã§a |i n|quÃ©| a |lig|u e|Ãª n| xi|cla|Ã© c|Ãª p|ont| es|o s|elÃ¡|Ã³mÃ©| mÃª|qua| hÃ³|lqu| re|cÃ¡ |alq|Ã© n|u p|hÃ³m| ne|en |nen|soc|est|oci| pu| mu|n c|Ã© d|Ã© t|cum|nda|adu|axi|tad|cia|o n|ntl|i Ãª| le|li |sel| so|ico|u m|nto|tÃ¡ |nal|u t|ji |i m|a m|pun|Ã© s|i e|co |ti |lo |nte| ba|sta| tl|ali|n s|Ã© p| ju|u l| in|lei|ote| mo|ens| pÃª|aci|pÃª |ime|Ã´tl|i h|Ã¡ e|iÃ³n|lot| mi|e e| pe|bli|a f|Ãª u|a e|Ã¡ s|ist|uma|tan| Ã´t|cas|ant|Ãªss|pli|uni|nid|raÃ§|zÃ¡ | vi|e c|nÃª | nÃª|vÃª |dÃ¡ |igi|ona|vol|imp|and|ion|Ã¡ t|cuÃª|pen| lu|o t| im|ssÃª|ter|mÃªs| sa|a Ãª|ass|e s|mpl|ma | me|i f|ndu|Ã© m|lÃª |txi|Ã´ d|ort|naÃ§|o c|Ã¡ f|sa |por|n u|u a|ami| un|e a|Ãª e|mpo|obl| ob|Ã´ c|ecl|mil|ina|lia|ura|ili|max|tlo|cio|nac|teÃ§|eÃ§Ã³|ei |itu|ial|rta|dis|dec| to|tic|n t|min|nvo|guÃ©",
                        pbb: "a k|we |pa | na|sa | s |na |a n| i |n i| we|te | hi| a |i p|a h|hi |asa|wa |yuu|nas|a w|c a| yu| ma|ya |e s| ki|ma |a s| k |a m| ha|aa | ya| pa| wa|kwe|apa|a e|a y|e w|uu |maa|ec |c h| te|ena| ka| sa|a t|k a| c |kyu|ala|wal|ha | ky|iwe|kiw|la |u h|f i| ne| hu|a p|ewe|yuh|e h|ete| f |sap|en |yu |hab|e n| it|me |wen| Ã¼s| ew|una|ewa| u | pt|ab |hu |b w|wet| ze|i z|a Ã¼|uwe| ee|een|s y|nwe| pe|wew|u n|akh|u k| t |i s| pu| ik|a d|k t|ewu| n |naa| ku|isa| Ã¼u|a i|uwa|hpa|t h| nw|Ã¼us| hw|ta |kah|a c|s k| kw|iya|e p|un |uhp| ip|v i|ite|ime|khe|s p|uun| wÃ«|tey|e k| v |hwe|ekw|ka |yuw|i n|ika| is|pee|e u|wek|uc |nap|ama|t i|weh|ki |hak|e y|kha|hsa| th|tew| pk|kim|d i| h |epa|pta|wes|men|i k| ec| pi|u p|pkh|u y|s a| p |new|sam|wey| im|imy|esa|myu|akw|ate|ac |wec|piy| d |ume| iy|tep|ayu|eec|eh | mh|mhi|ek |thÃ«|a f|e m|yc |uuw| uk|uka|tee|e i|huw|yte|ey |uuc|s h|h u|eyu|su |hn |hk |i y| me|e f|wun| da| ay|eya|c n|e Ã¼|ema|s t|it |a u|eek|ana|huu|k k|wÃ«t|iyu|cte|an |Ã«c |wÃ«c|wep|ehu|swa|uk |u s|pwe|hÃ« |uya|ne |uht|ahn|yaa|a v|kay|awe|san|the|wum|ste|Ã¼st|zew|he |i h|hna|k w|s i|e e|yak|hit|uuy|hwa|kuh|aak|ehk|eyc|s m| kh|kac|a a| Ã¤h|nee|ase|se |ze | ah|ees|tte|ipa|ame|met|i w|k n|at |hme|hte|ew | hÃ¯",
                        qva: "una|man| ka|ana|an | ma| ru|nan|ta |na |aq |kun|nqa|anp|ach|ch |npa|kan|paq|cha|run|apa|a k| ch|qa |aku|hay|pis|qan|ima|is |anq|a r|ura|pan| im|rur|lap| la|si |a m|ita|h u|nuy|am |sha|n r|uy | u | ya|kay|pit|nch|in |chu|ayn| ju|ash|nam|nta|ha | al|nak|nas| na|hu |chi|ay |syu| ni|asi|ali|yun| pi|nma|asy|npi|mi |nin| wa|i k|ant| mu|ayk|ata|a j|ynu|anc|ama|tin|rak|nap|a a|juk|ur |anm| ja|res| re|api|kin|esp|n m|kur|spe|aru|pet|yta|pti|apÃ¤|wan|mun|awa|iku|yar| y |uk |hik|q k|i r|onq|kaq|ipi|kuy|li |pa |eta|pip|y m|arp|yku|a l|pÃ¤k|nku|h a|mas|n y|u k|n k|apt|ni |a p|kas|may|q r|enq|ran|i m|un |ych|ina|tas|y r|yan|a i| ri|Ã¤ku| ar|a y|kon|a c|inp|Ã¤na|jar|rup| ki|n c|nat|kar|q m|ayt|aqa|aki|ika|wak|anu|yni|a n|ras|tac|kaw|ayc|m p|yac|uch|i i|yka|s a|aka|rik|pas|wal| li|rqa| o |ar |h Ã¼|i y|unp|ako| ak|kik|arq|ank|tuk|raq|tap|kap|and|inc|pÃ¤n|iki|mat|n n|akÃ¤|mac|ark|iwa|kac|mar| qo|naq|ayp|ma | ra|al |upÃ¤|n l|ish|a q|kÃ¤r|rap|q c|ush|uka|qot| ay|otu|ndu|hka|y l|ka |han|Ã¤ch| ku|rin|uku|q a|ibr|rpa|nsi|lib|hun|a w|unk|n j|bri|nni|maq|aro|n i|u m| am|int|ten|unn|rka|nir|u c|y k|ypa|Ã¤ri| iw|upt| Ã¼s|Ã¼si|i a|ri |pte|rmi| pa|lla|ill| yÃ¤|u n|rpi|shu|aqp|ast|q l|Ã¤ra|yÃ¤r|kus| ac|sun|asu|tan|m k|q y|qta",
                        mxv: " ku|a a| Ã±a| a | i |ka |ja |a k|nu | ja|ayi| tn|Ã±ay|na |yi |a t|u k|tu |a Ã±|ku |ni |ma | ka|Ã±u | ma|u u|i i|a i|chi|tna|va |aka|i k|a n| u | nu|sa |nde|i t|te | ta|tak|i Ã±| te| Ã±u| na| nd|i n| su| sa|iyo|yo |hi |u n|u i| iy| ch|i j|u j|ini|tnu| ji|Ã­n |iÃ±u| iÃ­|kui| tu|uni|iÃ­n|kuk| Ã­ |atu|sun|niÃ±|u t|i s|Ã±at|e s|a m|utu|o j|eva|ind|dev|u Ã±| in|Ã±a |tni|a s|u m|Ã­ t| an|atn|e k| va|e e|kue|nda|kun|ech|i m|hin|u s|und|nga|kus|a v|kua|a j| ve|uin| o |uec|ve |n Ã±|vi |tut| ni|ya |jin| e |ji |usa|o t|in | ng|uka| ya|a c|uku|xi |u Ã­|Ãº k|a Ã­|Ã­ n|aku|sik|kak|ua |o i|e t|kaj| Ã±Ãº|de |aÃ­ |aji|ava|yiv|iku|and|aja| si| xi|i Ã­|Ãº t|ani|uch|Ã±Ãº |ndu|kan|uÌ± |ivi| at|a o|e n|uko|n t|Ã­ Ã±|e i|n i|u c|Ì± k|nav|nÃº |ika|e Ã±|an |kot|si |ko |anu|ui |Ã­ j| ko|jik|tÃ© |kaa| Ã­n|inu| aÃ­| tÃ©| kÃº| Ã±Ã¡|kas|kut|dut| ki|to |oto|o v|ga |mi |i y| nÃº|nÃ­ |kÃº |da |o o|ndi|u y|nuÌ±|asi|i c|det|Ã­nu|tat|kuc|saj|nun|tÃº |tÃºt|aaÌ±|Ãºtu|ai |ndo|a x|do |i x|aÌ± |n k|o n|jiy|eÃ±a|i v|axi|atÃº|uÃ­ |Ãº n|iya|sum|dak|deÃ±|Ã­ i|Ì± t|n j|su |nan|uat|asa|o k|gan|oÌ± |uxi| vi|o Ã±|Ì± n|uiy|Ã¡ji|ata|nin|Ã±Ã¡t|ang|Ã¡tu|n n| tÃº|aa |suc|eÃ­ |ama| yu| kÃ¡|yu |nka|dat|kat|uva| un| uv|umi| ii|vÃ­ |iaj|dia|sam|iÃ±i|una|isa|xis|ivÃ­|ate|oo |koo|n v|n s|Ã±i |Ãº i|aÃ±a|iin|nui|kÃ¡j",
                        gla: "ach|an | a |h a|ch | ai|ir |air|dh | an|n a|eac|tha|hea| th| ch|ean|r a| bh|adh|a c|ha |cha| ag|ann|gus| ne|us |idh|agu|ith|th |hai|a a|Ã²ir|nn | na|a b| dh| ga|nea| sa|il |s a|chd|ich| cÃ²|na |a t|aig|gac|h n|eo |bhi|cÃ²i|am |aid|che|had| gu|sea|n d|ail|hit|h s|n c|hd |han|ar | fh|ead|on |gha|in | bi|agh|aor|a d|as |m b|ta |is |sao|nan|ig |rsa|nta|h c|iri|le |neo|eil|ise|nna|lea|ile|e a| co| se|ant|hao|n s|bit|a s| ri|n t| do|aic|bha|cho|inn|hla|a g|hei|gu |dhe|ors|gh |Ã¹th|dar|do |rea|dha|uil|eal| le|d a|ric|h t|n n|tea|hoi|te | fo|onn|s s|h g|eas|g g|ana|ear|l a|sa |ain| tr|hÃ²i|nai|mh | dÃ¹|rac|aon|nns| e |ire|bhe|chu|ill|h d|ghl|h f|e c|ad |igh|ne | am| ma|rra|dÃ¹t| de|sai|o a|lta|n f|ion|dea|ri |mai|arr| ao|alt| dÃ¬|eag|h b|ll |r n|s n|omh|rso| nÃ |nac|rai|chÃ²|amh|fha|hch|thc|son|irs| ea|seo|gai|rt |hda|ona|ogh|sam|aod|r d| is|hui| s | ui|lac|irt| la|n l|nam|dÃ¬o| gh| si|co |s c|sin| st|ns | ph|r s|Ã is|nÃ i|mha| sh|oil|mar|irm|oir|o c|bh |s g| cu|fhe|ho |s t|Ã¬on|all| ei|tro|ara|lai|hte|hac|ada|bhr|nne|san|h e|e d|Ã¨an| io|hid|oda|r t|ro |the|rm |cea|ine|ur |uma|m s|hal|asa|uin| bu|obh|ath| mh|oit|a f|itc|har|art| sl|thi|ein|tch|n g|hÃ¨a| te|tac|ghe|n b|un |dhÃ¨|rid|t s|cht|rÃ¬g|o t|Ã¬gh|r b",
                        qvm: "una|kun|nts|tsi| ka|ant|pis|is |an |man|apa|paq|aq |ana|kan|shq|hqa|nap|na |nan| ma|iku|a k|sik|ash|ta |qa |tsa|mi | de|noq|chu|api|lap|sip|der|hun|erÃ«|aku|Ã«ch|rÃ«c|qan|say|ipa| ru|pan| ts| la|anp|si |i k|pa |nku|int|ami|ima|nma|unt|nas|ita|ayn|npa|run|wan|ata|anm|qpi| na|a m| ju|pit| im|ish|nin|yno|oq |nak|asy|kay|yun|kas| y |ay | ni|oqp|awa| ya|ho |cho|a r|nat|syu|n k|q k|ach|ayk|ala|pti|apt|pam|tin|nam|un |n n| al| mu|tsu|i d|juk|ipi|su |may|ank|a a|npi|unk|ali| wa|s m|aqp|mun|ura|in |tap|qku| pi|kin|rur|Ã¤ku|kap|kaq|a y|s k|hwa|shw|a d|n r|ush|li |ama|naw|q y|a t|nis|yan|ats|n i| ku|apÃ¤|pÃ¤k| re|a i|cha|a p|aqa|q t|aka|a n|kaw|kuy|kik|q l|pip|nta|aqk|iki|uri|ma |res|kri| ki|ano|a l|kus|q m|ink|i p|la |wal|yni| iw|Ã¤na|yku|qpa|nmi|ark|unn|yka|ran| ar|n m|mas|iwa|ras|i r| es|esk| aw|a j|yin|rka|mar|lla|chÃ¶|nqa|q i|uk |n a|n j|nni|esp|s l|asa|ypa|aru|lay|ayi|n l|n y|pap|y d| pa|mal|ten|ina|ara|s t|unm|nch|all|kar|idÃ¤|yar|s a|y k|rid|awt|s d|wtu|tur|tan|yla|aki|wak|ann|rak|skr|yac|rib|ibi|lak|arp| sh|das|hÃ¶p|shi|Ã¶pi|san|o k|sar|inm|s r|q a|spi|ayp|s n|sya|as |n t|y t|nno|ika|rin|ayl|shp|ych|nac|y m|yta|hpa| ta|q n| o | qa|inp|pÃ¤s|i a|ila|q r|s y|kur|i n|lat|tak|i y|pas|s i|ast|s u| un",
                        fao: "um | og|og |Ã¦tt|rÃ¦t| at|at |ur |til| rÃ¦| ha| ti|ver| fr| ve| Ã­ |il |tt |ing| vi| sk|ri |ndi|erÃ°|iÃ° | ei|nna|ska|ann|va |ar |t t|sam|hav|ava|lig|ein|sum| sa|a s|in |Ã¸ll|ll |yri|fyr| he| fy| Ã¸l|lla|ind|ng |an |di |Ã°a |viÃ°|rÃ°a|la | su|lag|and|l h| el|si |ra |a r|ell|num| er| al|rÃ¦l|tti| av|al |iga|nar|men|av |a f|kal|tin|r s|ir |i s|g h|Ã¦ls|frÃ¦|na | tr|i o|enn|aÃ° | um|tta|m o|g f|g a| va|t v|sin|ga |ela|fel|und| te|m s|t a|lsi|vÃ¸r|hvÃ¸| mi|lan| st|m e|a v|vir|ja |tan|r f|ndu|man|ru |lum| hv|er |l v|a t|a a|var|i h|tar|gin|i a|ni |Ã°in|ngi|ag |Ã°ur|nn | me| ta|eru|rÃ°i|ski| ma|alm|g t|r t|ari|g s|dur|i e|fra|l s|rli|i v|ram| la|inn|tjÃ¦| tj|arl|igu|r a|l a|vÃ­s|gum|a o|nda|r o|era|ger|ta |nd |n o|m h|n h|hes|i t|lme|a h|Ã°i |ins|t e|g v|stÃ¸|ti |eiÃ°|mÃ¡l|m v|n t|vur|mun|t f|dir|ki |gar|nnu| sÃ­|bei|Ã­ h|r h|kan|vin|rÃ° |evu|hev|r e|n s|jÃ¦Ã°|mfe|amf|sta|ka |naÃ°|t s|nni| un|try|arÃ°|arÃ¦|ags|aka|tÃ¸Ã°|u t|trÃº|lÃ¦g|ns |har|Ã°ir| iÃ°|esi|r r|llu|ini|han|iÃ°i|tur|dum|rt | se|sku|sÃ­n|eig|ald|ara|Ã° s|m a|frÃ­|ryg|Ã¸Ã°u| Ã¡ |Ã° e|ama|da | so|Ã­ f|i Ã¸|ill|Ã° f|ldu| li|mil|irÃ°|mei|ggj|l f|u o|t Ã­|mis|ast|isk|i r|a m|m f|nan|rin|a e|g e|utt|g u| fe| Ãºt|kap|n m| ut|eim|tei|rum|Ã° t|Ã°an|ldi|m Ã­| ar|arb|vil| pe|per| an|ers|gd ",
                        kal: "ut |inn|ssa|naa|it |iss|eqa|unn|taa|ati|nni|qar|ik |alu|sin|nna| pi|iit|aat|nng|arn|ner|neq|igi|aan|lu |llu|uun|tit| na|ann|ita|tig|ass|nii|luu|ill| in|t a|mik|nis|umi|rsi|t p|t i|isi|aas|ers|pis|ngi|sum|rni|amm|saa|art| ki|ani|nut|ffi| aa|ssu|rne|inu|ni |its|gii|sam|nal|nik|sut|ine|git|mal|aqa|rtu|mut|aff|aam|mma|ars| il|aaf|gaa|aal|tsi|ler|isa|uti|ina|qat| ta|all|amu|t n|mmi|asu|ima|tut|t t|mi | at|kku|atu|nga|tun|ssi|uss|ama|nne|erm|ala|tsu|uni|rmi|at |rsu| su|aar|ini|ikk|t k|iin|ull|sus|kin|min|tam|isu|ata|oq |ile|sim|sis|t s|k a|nnu|ili|lli|igu|ane| tu|lug|uga|mat|gut|aq |gin|u i|uar|mas|ila|sit|una|san|orn|kut|nia|lla|lun|iaq|gis|aav|sor|imm|tum|rti|eri|sar|aga|ior|saq|eq |iar|kil|nui|mil|k i|ami|u a|uma|voq| im|avo|aap|i a|uus|man|lil|ttu|akk|ris|rlu|utt|ort|k p|rta|i i|nar|app|ari|per|fii|ern|ors|aqq|sug|nun|eqq|lag|seq|sul|use|ert|aru|ugi|sun|qan|uia|ats| pe|q a|uli|nam|iff|ang|tta|teq|qqi|u n|suu| an| al|liu|asi| ak|iis|q i|laq|fig|tar|qas|peq|qqa|gal|u p|laa|oqa|erl|rsa|sig|k n|ali|sia|k t|avi|taq|pin|lua|sat|uts|fin|qut|iga|arl|put|pil|i t| is| nu|rso|ute|aaq|une|ilu|lio|eru|rut|gav|qaa|nil|uin|ppa|q p|i k| ma|anu|tin|gil|gas|ngu|ker| up|qin|ppe|q k|itt|upp|nan|uut|ria",
                        cni: "ri |tsa|sat|eet|ame|cam|nca|mee|ets|eit|i a|i i|jei|ati|ite|iri|ti |ari|ant|que|ee |eri|te |tsi|aje| te|ca |oca|e o|onc|ate|shi| ir|pee| on| oc|ro |ita|ter|tee|aro|inc|ica|a a|ats|isa|e a|tej| in|ash|aqu|i t|nta|i o| an|ric|tir|aca| ai|ji |eji|san|aar|ais|nte|iro|nqu|ape|int|ori|ni |ron|ero|qui|tea|its|tim|nti|aco| ma|ata|can|si |oni|maa|ipa|tac|rio| ca|hin|aye|nts|pin|ava| av|e i|taq|avi|caa|eer|coa|ane|e t|ear|ete| at| as| it|car|uer|o a| ac|eta|cat|ior|mpa|anc|sip|ine|ue |ira|pap|a i|aaj| am|ani|emp|nea|vin| ar|ime|tar|anq|ima| ei| pi|ipe|yet|oaj|iti|i c|imp|sar|rit|eje|a o|ina| pa| im|ish|ama|asa|oje|ej |ini|uen|ta |ent|ena|tan|hit|eir|ui | qu|j i|mpi|i m|nin|pat|ror|sha|ara|han|ra |nco| i |tat|a t|ea |inq|iqu| yo|e p|tav|ana|taj|nat|api|uem|mat|cap|i p|equ|era| ti| co|vac|me |i y|roa|ote|uea|yor|yee|ora|ran|tas|naj|ner|ota|pa |ait|man|pai|oaq|par|sir|amp|i e|tem|osh|mpe|uis|eti|mej|ene|rir|ino|e c|maj|ne |a p|tap| ts|non|sam|ris|hir|epe|o c|tay|i q|ije|net|cav|pit| ja|rip|sin|sa |uee|eac|coj|cha|ean|a m|saa|aoc|o i|imo|ano|vam|o t|eim|ato|een|coi|a c| os|nej|oit|tei|raa|saj|ont|esh|oye|aac|oas|roi|pas|ven|cov|o o|one|var|emi|mis|i s|jao| is|imi|aj |aji|j e|coy|rat|cot|nan|oti",
                        chk: "an | an|on |n a|we |n e| me|pwe|en |epw|un |mon| ar|emo| em| ep|in |n m| wo|or |eni|wor|ni |me | no|nge|non|gen|sin|ei | ra|mei|it |ait| fo|ini|rai|e e|kun|ama| pu| pw|ch |pun| re|ang|n n|r a|n r|och|are|n f|ara| es|ram|as | fa|mas|re |e p| mi|nam|fan|nis|uku|e n|e f|e a|i w|sen|isi| po|ap |wan| ch|t a|fon|n t|n p|onu| to| na|mi |kku|ein|ng |pwa|unu|i p|ese|i a| tu|nap|esa|kin|ung|ren|cho|ten|sap|i e|nu | ng|ich| ne|ar |ana|oun|ong|is |for|ite|fin|ewe|nga|e w|ri | fi|fen| o |n s|nin|gan|pus|rep|nen|r e|i m| ek|ans|ori|n i|e m|sou|che|i n|ina|s m|usi| mu|ton|nso|okk|n u|mu | so|sok|ine| ki|umu|eu | un| a |n c| su|u m|eng|eki|man|ata|n k|p w| ew|mwe| eu|efi|akk|e t|hok|fic|mun|ufi| se|tuf|amw|ngu|ok |ta |iti|er | oc| ni|e s|n o| ka|wes|gun|u n|tum|nuk|tip|suk|se |apa|ifi|o e|pen|r r|ffo|pis|u a|pop|opu|ann|n w| ti|kit|amo| ma|ora|nat|i f|e u|e k|a e|nno|nif|hen|ekk| fe|ti |hch|s r|ape|s e|chc| we|oki|kuk|r m| ei|t m|ka |ika| ik|onn|no |uni|ani|use|chi|pok|wen| mw|u f|fis|ir |nnu|nom|won|a a|r t|ion|e r|i r|win|a f|hon| sa|ien|uk | mo|men|e c|pan|h n| as|nei|a m|sun|mwa| au|k n|iwi|s p|ufe|koc|kap|ati|off|fof|s a|tor|nus|o m|ofe|min|r n|s n| at|aw | pi|ipi| us|nuf|ett|am |mot|usu|uan",
                        mah: "en |in |on |an | im|n k|im | ko| an|ok | eo|o a|n i|ko |n e|lok|eo |ij | ka| je|ej | ma| in|aro|ilo| il| ej|lo |n a|mij|n m| ki| en|ron|arm| ar|rmi|n j|k i|mar|non|e e|ak |o e|ot | no|or |ir |bwe| bw|we |kaj| lo|n b|j e|kin|mon| re|ien|r i|ke | ak|m b|lol| ju|o i|k k|jen|ol |wot|ar |jo |elo|jel| wa|o j|r a|n l|ojo|joj|eor|bar|ajo|j i| ai|ane|e i| be|win|jer|air|j k|eje|men|bal| ke| na|awi|waw|kwo| me| wo|ake|nan|nem|al | em|l k|erb|kot| le|uon|ein|mak|ne |juk|ber|juo|er |o r|emk|rba|jej|e k| bo|woj| ba|alo|m k|ro |kie|m e|oj |mkw|ele| dr| jo|r e| mo|n w|k j|mje|l e|lem| ro|ur |k e| ek|bok|ona|rej|ela| ot|kom| e |ote|mou|wij|nok|our|jab|o k|e j|mwi| ji|man|tem| kw|emj|r k| ja|kar|rok|et | to| bu|omo|n n|jok| ie|le |kij|jet|j b|kok|uk |emw|n r|emn|tok|mno|j a|abr|ijo|m a|n d|nlo|dro|k a|l i|ewo|j m|wal|t j|na |e m|ren|rew|bre|ukj|aki|kju|inw|nwo|r b|k n| ik|kwa|t i|ta |oba|a i|ata|kak|iki|o l|ki |bel|kej|kab|j j|lal| el| ib|ae |uko|r j|oki|oma|ibe|kei|jba|kka|ekk|buk|ejb|emo|ije|ri |wor|lap|lel|jon|won|r n|re |ben|ali|r w|o m|j r|okl|kal|oko|kje|okj| ij|j o|iko|eir|aje|tat|k m| ir|eka|un |i i|m j|iji|t k|onl|jeb|k l|ena|t e|k w|ana|uti|o n|iej|t w|one| un|ul |tie|e r|jei|e n|klo|j l",
                        rar: " te|nga|ang|te |ga |a t|i t|ia |e t| ta| i | e |aka| ki|a a| ak|ata|ai |e a|a k|o t|aan|tai|au |ta |a i|e k|re |a e|tu |tet|eta|ki | ia|atu| au|gat| tu|tan| ra|kia| an|u t|tei| ti| ko|kor|ika|kaa|to |e i|ato|ore|tik|ana|na |i a|ama| to| me| ua|kat|a m|uat|man|eia|toa|ite|aki| ma|i r|ian|i u|ra |no | ka|ei |o i| o |oto|u i|u a| no|a o| ro|a n|a r|rot|tau|e r|ua |rav|ka |tur|ora|e m|ile|sil|asi|bas| ba|lei|oa |eit| or|ona|ava| pa|kak|i i|me |tam|ton|ura|e o|pu |a p|tak|e e|kit|api|ako|i e|tua|ma |raa|oat|o a|ira|ti |u k|apa|ke |ure|ou |iri|u e|rat|ati|nat|gaa|e p|iki|uru|ran|nam|ita|aru|i k|ko |aia|par|iti| at|aat|kam|ake|tup|nak|ave|e n|ing|rur|u b|ri |upu|aur| na| pu|pap|ano|va |kot|ari|ate| ai|ara|ro |tir|oan|ean| ng|mei|ait|oko|ru |utu|i m|uan|ere| ap|rak|tao|tou| a |u o|ea |rik|pin|pir|auk|aro| it| pi|ota|oki|mea|u m|kan|pua|rai|kai|noo|u p|noa|aok|ipo|ve |kin|kav|kap|umu|mar|oro|amo| ar|u r|ino|pii|tea| ok|mat|rua|iia|oo | va|uap|eng| pe| re|o r|rei|u n|e u|mu |eir| mu|kim|imi|ria|pak|tat|aor|i p| aa|i o|maa|i n|ne |o k|ina| ik|rea|opu|kua|ao |kar|a u|a b|pa |rin|apu|taa| ei| ir|uao|paa|kau| ri|ter|uko| ku|uka|roa|tum|rau|eu |top|aer|e b|poi|mi |ane|ram|aua|aap|tia|mua|o e|aâ€™a",
                        qvn: "man|una|kun|an |aku| ma| ka|si |ana|apa|nma| ru|ta |ata|nan|na |ach|chr|sha|as |aak|run|ima|paa| na|cha|anm|am |tan|paq|nas| ch|aq |anp| pi|may|tas|nak|ash|mi |npa|hru|a k|ay | im|nch|ant| wa|pan|qa |i m|unm|chu|ama|a r|ita|hay|kan|nta|ipa| ri|nsi|yun|nqa| ju|pit|nam|chi| ya|nat|a m|wan|kap|nuy| la|pa |lap| al|kur|ura|syu|ali|n r|asy|nin|n m| u |hu |ha |awa|ru | mu|ans|rur|naa|juk|qan|anc|i k|ina|mun|nap|aat|isk|nmi|rka|irb|rbi|nku|tin|ish|hra| is|i u|ski|kay|qsi|urk|anq|pti|a p|kas|a a|a i|rim|pis|n a|qku|a n| ni|yac|aqk|i r|daq|a w|pi |ika|yaq|kir|yan|ayn|yta|aya|ruu|n n|nda|asi|in |ran|rik|and|aqs|a j|uy |npi|uch|rqa|uta|un |ayq|hak|qta|lip|kaa|anu|was|kar|a q|u m|y r|iya|a c| ji|kaw|i a|ych|ara|yqa|yla|jin|a l|isi|iku|uyl|uus|usi| am|kin|uku| ta|q n|tuk|naq|inm|kaq|lut| lu|n c|kuy|n j|uk |ayc|qni|i i|tam|u k|aan|qmi|aka|rak|pac|uka|ayp|u i|ray|a y|li |m p|mam|rap| ay|ayt|ari| qu|ala|ank|nti|inq|unc|apt|qut|utu|kac|arq| ur|ink|s k|hin|ynu|ins|aqt|n i|aqm|rsi|aqn|aqa|ypa|hik|ysi|upa|map|bis|maq|ham| pa|i y|hun|ush|has|way|ury|u n|kuq|rac|naw|aki|aa |n l|mas|s a|ays|asa|ma |pas|s m|y k|n y|api|rya|u j|ras|adu|nir|wak|m k|ukl|yar|kla|y i|nni|unn|han|n k|raq|ich| ra|juc|i c|q l|n w",
                        wwa: " o | da| yi|da |ma |iri|ri |a y|yir|na |a o|ba | ta|i d|ro | nÌ€|ki |nÌ€ | i |ta | ya|a d|i o| ma| ba|sar|a t|o n|a n|aro| na|i y| ka|ris|a s|o t|isa|bÃ  | bÃ |ka |di |a m| ti| sa| di|aa | bo|a b|o b| nÉ›|an |maa|a i|i t|ti |ook| fÉ”|ari|sa | tÉ”|ku |ii |nÉ›k|a k|oki|i b|de | so|soo|mii| wa|É›ki|re |wan|i k| mi|o w|ya | de| yo|ori|o d|i s|ima|Ì€ y|o y|aar|daa| to|mma|yaa| ye|fÉ”É”|tin|tor|i n|i m|rim|É”É”k|yon|É”ku|aam|n o|ama|si |É”É”t|e d|tÉ”É”|imm|yi |nde|kpa|o i|paa|iro|ink|bo |É”É”b|oma|nkp|o k|a p| cÉ”| te|oti|a c|tir|on |uri|o f|É”ba|o o|aba|n d|u n|Ã  t|den| mÉ›|e n| nÉ”|u d|tÉ› |É”tÉ›|fÉ” |É”É”r|cÉ”É”|u y|É›É›n|aan|isi|yer|e y|u t| ku|oot|É› o|boo|te |eet|eri|i f|aÅ‹i|É›É› |É” d|e t|n n|É› m|aat|ire|sim|yee|pÉ›É›|rik| se|nÉ”É”|su |mÉ›É›|tan|Ì€ b|É”ri| kp|asi|nda|eti|bom|Ã  d|iba|ina| co|e m|Å‹is|yaÅ‹|sir|a w|yin| pÉ›|sab|bar|o p|are|É› y|en |ra |n t|kaa|tu |É›nd|onn|n b|rib| si|É›mb|e o| su|i c| pe|tet|kpÉ›|een|nne|ena|nsi|riy|iya|ond|o s| sÉ”|ne |wo |É› b|nni|ni |ann| wÉ›|wÉ›Ìƒ|É›ÌƒÉ›|and|yoÅ‹| do|É”re|ika|tÉ” | kÉ”|Å‹a |kÉ”É”| wo|ato|too|ara|dur| yÃ¬|yÃ¬ |bot| pa| yÉ›|e s|É›É›m|Ã  y|É› d| tu|dan| mu|kpi|u s|see| nu|nÉ› |a f|Ã£du|Ã  m|Ì€ t|i p|kar| pu|puk|uki|kir|yÉ›É›| Ã£d|do |tak|un |run|yau|dÉ›É›|n y|coo|oon|nna|sÉ”É”|Ã  k|É”ti|to |tim|uti|in |Å‹o |oÅ‹o|kut|bu ",
                        buc: "aÅ‹a|Å‹a | ni|a n|ni |nin|ka |in |i n|si |i a| an|ndr|dre| nd|a a|an |eka| ha|rek| fi|ki | mi|la | am|Å‹u |isi|iku|uÅ‹u| na|hul|ulu|ula| hu|luÅ‹|a m| ma|nâ€™n|u m|i h|â€™ni|aha|hak|inâ€™| ku|a h|ami|u n|aki|n f|min|zi |kul|i m|ani|sha|u a| fa|ana|a k|eu |mis|ala|ha |asi|azi|fik|afa|tsi|ama|a f| ts| ta| sh|iaÅ‹|dja|tan|ira|a t|mu |aka|uru|a i| dj|nyi| mu|naf|Å‹an|ia |reu|i f| re| au|a r|yi |n h|fas|raÅ‹|izi|au |i r|nik|li |i k|ma |naz|ata|ada| iz| ra| ki|ara|n t|naÅ‹|har|i i|fih|rah|and| it|ti | at|mbu|iny|ru |ngu|u h| ka|ali|ra |laÅ‹|kur|i t|u k|itÃ¬|tÃ¬ | mb|bu |ifa|ari|ri |vaÅ‹|bi |imu|ihi|n u|n n|jab|abi|aru|uaÅ‹|ang|fid|ria|aza|faÅ‹|wi |ian|i s| da|u d|na |ina|ro |ahi|dam|a s|itr|i u|his|mah|mba|mia|tu | la|fa | É“i|sis|a u|mus|amb|amu|ou |kut|n d|sa |gu |nga|shi|hwi|ish|n s|aÉ“u|u i|usu|lal| hi|ano|ba |u t|iki|i d|zim|dhw|iÉ“a|eng| ro|ahu|mik|adi|idi|usi|ini|ifi|nov|tru|utr|laz|nan|É“in|ati|m m|sia|É“aÉ“|rak|adh|siÉ“|fan| si|ova|nad|u f|tri|fad|han|kus|i l|ham|iti|sin|asa|era|maÃ£|n k|haÅ‹|iha|aul|ing|iri|ja |eti|rum|ret|umi|a d| ik|dza|idz|dau|uhu|a É“|tra|hus|ato|uvu|ava|amp|etu|ita|tou|fah|tas|swa|ele|da |zaÅ‹|faz|zah|hua|aÃ£ |hif|É“u | aÅ‹|hin|ais|mai|tsa|men|gi |haf|É“il|uhi|bar|aba|kab|kir|rua|ivu|uÉ“a|uni",
                        qvh: "una|kun|an | ka|nan|pis|is |aku|ana| ru|aq |na |man| ma|ash|anp|shq|Ã¤na|mi |apa|ta |npa|hqa|qa |paq|api|run|cha|nak|yÃ¤n|pan|kuy|lap| la|qan|naw|ita| y |nap|ima|pit|ata|kay| im|aw |ami|a k|n r|kaq|kan|ali| al| ya|a m|nku|kas| sa|say|nat|haw|a r|ura|pa |ayn|npi|i k|ayk|ach|tap|rur|nin| ju|nqa|nta|a y| ri|uyÃ¤|ayÃ¤|yna|q k| sh|may|shu|qku|nas|nam|awp|yan|ris| na|li |yas|juk|anq|spi|tas|aqk| wa|aru|a l|isp|ans|ink|ant|kin|syu|asy|a a|s m|yun|sh |a s|ypa|ank|su |ray|yni|uku|a i| pi|aqa|a j|awa|uya|s y|wan| o |tin|ayp|nsu|s r|yku| ni|uma|pti|ush|ish|n y|ark|inp|arp|wpa|yka|wak|yar|aki| ch|anm|h k|qpi|n k|i m|maq|ipi|hum|aqp|s a|yac| wi|pip|s s|ay |s k| ja|asi|aya|mar|apt|rka| mu|ila|kur|in |kus|ina|Ã¤ku|i y|ran|uyn|kak| ar|ni |pak|pay|lak|ur |ibr| pa|iku|nka|has|bri|nch|pÃ¤n|n m|ruk|q r|q a|wil|ras|nmi|uk |ask| li|hak|lib|apÃ¤|rak|ar |a w|n a|jar|pam|n s|i i| aw|rpa|asu|ara|kaw|n l|way|a p|i r|iya|kap|y r|q y| as|tuk|wpi|unp|mat|ruy|yqa|w k|ayq|iki|par|awm|y l| ra|taq|nac|mun|ika|rim|kar|imi|ma | qe| tu|ich|kik|nna| mi|wmi|aka|ann|unk|a n|i p|sar| ki|sun|and|yta|q s|yap|nda|nni|s l|nma|n n|sin|n j|san|w r|i a|s i|y a|usa|arq| ku|n i|rpi|ast|n w|y m|yay|naq|ala|ukn|wtu|tur|a o|urd|iwa|rdÃ¤|y i",
                        toj: " ja|ja |bâ€™a| bâ€™| oj|a j|ni |oj |â€™a |l j|i j|a s|k j|uk |bâ€™ |li | ch|nal|al | wa|kil|il |jas|ax | kâ€™|wax| ma|a l|i s|bâ€™o|â€™ob|obâ€™| ju|i o|sok| so|uâ€™u|ok | ya|an |as |ali|tik| sk|jaâ€™|a b|a o|ma |a t|a m|ana|cho| mi|tuk|kâ€™u|skâ€™|cha|â€™um|sbâ€™|â€™in|kâ€™i| lu|um |ha |lan|jni|jel|luâ€™| le|m k|ina|ani|abâ€™|tsa| ni|win|ila|uki|i m| sw| i |i b|swi|nki|â€™an|ki |ink|jun|â€™ s| sp|hon|iwa|lek|un |el |niw|sta|ik |ona|ula|ojn|â€™il| ta|nab|â€™ch|s w|yal|spe|kâ€™a|ta |j b| tu|a y|san| a |aâ€™c|xuk|ini|â€™aj|pet|j j|i c|ets|e j|yuj| tâ€™|â€™bâ€™|a a|tal|chn|hni| ay| yi|aje|ala| yu|luk|j s|â€™un|a n|aâ€™ |ukt|tâ€™i| st|juk|kol|uj | aâ€™|la |juâ€™| ts|k c|x s|min|bâ€™i|ktu|anu|yi |lal|ay |a k|maâ€™|iki|mas|i y|e i|j y|k s|lta|wan|â€™ul|lti|olt|wak|ast|xta|uma|ek |â€™ni|k a|eli|â€™ j|â€™al| sb|ak |x y|ti |a i|aâ€™n|ke | ko|yuk|sa |je |i w|tso| sc|ubâ€™|som|i t|j a| aj|ajy|jyu|sch| sl| ku|iti|le |xi | na| ti|axu|aâ€™t|j k|eki|sle|pan|l s|kâ€™e|aâ€™y|ch |nuk|k y|kul|â€™ k|aj |ji |jum|asa|tan|i i| it|aâ€™m|ane|n t|une|â€™ma|omj|l b|mje|mi |n j|n c| sn|a w|l o|n i|y s|nub|aju|jpa| la|iâ€™b|â€™ b|asb|a c|ijp|hol|sij|k m|lax|k o|naâ€™|l n|n o|l t|n s|ol |â€™i |tel|x k|i a|neâ€™| si|eâ€™b|yaâ€™| sj|na | ix|naj| je|och|ley|yiâ€™|uke|laj|yaj|ka |man|ne |ens|pen| oc|â€™uj|nil|j o|alu| sm|sko",
                        lue: "chi| ku|a k| ch| na|na |aku| mu|la |sa |a n|a m|ana| ka|wa |a c|tu |nga|cha|utu|a l|esa|mut|pwa| lw|lwa|uli|lus|ga |ka |uch|kul|ila|wak|hi |ang|nyi|alu|ses|use|we |kup|lo |ose|kan|sen|ena|uka| va|nak|nal|ach|upw|muk|shi|kut|kwe|i k|a v|ing|ma |e m|a a|e k|pwe|hak|o c|amu|ipw|aha|o k|kuh|yi | an|hip|yoy|kum|eka|eny|han| kw|imb| ja|mo |ko |ava|a j|u w|uta|wos| wo|a w|hiy|fuc|sek|aka|umu|o m|ese|yel|any| ha|ha |akw|kuk|oye|ama|lim|van|mul|ze |ham|iyo|asa|has|ela|aji|ala|apw|wes|isa|vo |wan|elo| ji|him|ngo|kal|kah|mwa|avi|eke|naw| ya|vat|ech|uku|nav| wa|wam|ali|and|ung|lif|avo|u k|che|ish| wu|uma|kes|muc|ifu|mbi|ona|utw|nac|jis|zan| ma| vy|jil|bi |tam|uha|nam| lu|hav|mba| mw|ili|hin|hik|amw|twa|ulu|amo|ush|hen|iha|uze|awa|olo|tan|vak|mwe|kun|a h|mu |ina|kuz|hon|uza|ula|i c|uho|yak|kak|wec|e n|jin|ngi|uwa|u v|tel|iji|i l|ulo|ita|gol|a y|yin|ata|atu|ta |uki|afu|ate|nge|kuv|ge |gan|ise|ako|awu|ivw|kuy|i n| ly|mbu|hil|una|o n|vwa|man|u a|ash|sem|was|kin|nji|kuw|jak|kwa|ne |yen| li|kav|imo|o v|ngu|wah|jij| ng|mil|o j|nda|amb|ya |kwi|iza|lil|sha|tav|iko|wuz|kay|gul|kus|lon|u n|ong|his|iki|wav|vya|no |wal|za |aza|i j|i m|vis|e c|o y| mi|ola|hal|ika|ye |naj|kuc|ndu|wuk|iku|lik|anj|dun|wom|yis",
                        qvc: "una|kun|ta |ana| ka|mba|na |lla|ay |apa|pa |chu| ma|nam|ash|man| ru|chi|ach|a a|cha|aq |nch| yu|amb|a m|lap|qa |umb|uq |ata| ch|all|pis|nda|run|yum|baq|bay|is |yuq|a k|shp|hpa|ich|aku|hay|hiq|a y|nap|nqa|hu |ina|nas|yta|tin|anc|an | di|api|aqa|ama|nan|and|am |paq|nat|dir|mi |gun|qta|iri|ric|ngu|in |kan|aqt|da | at|uyu|ayt| su| wa|shq|kas|nak|suq|hqa|ima|qku|huy| ya|ch |shu|ati|anq|syu|asy|a s|y r|h a|qan|hin|nin| pa|yun|iku| mu|a r| al|q k|lli|ura| na|ma | ni|a p| am|yan|a c|mun|iq |rur|shi|maq|mas|sin|uku|a d|pi | ak|laq|kay|yku| sh|qll|ing|uqk|wan|a t|hum|uma|a i|asi|ran|inc| im|pti|yac|a w|qal| ll|ita|u k|rmi|may|qpi| an|ush|naq|mbi|q a|war|i k|yas|iya|nll|arm|a n|apt| pi|ish|q r|ung|aql|kap|lit|adu| ti|kam|ays|tiy|ayu|y n|ayk|ysh|pac|tan|un |pay|nni|tra|q m|kin|ind|ley|ras|ayp| le|ray|la |unn|a l|ism|i y|n m|uya| ta|smi|hik|qac| pu|q c|qam|pip|q y|iqp|ipi|qpa|iqk|ara|awa|nma|nis|n k|mac|tap| ay|pan|akr|inl|qmi|kra|yis|m a|unq|yuy|mik| as|ila|rin| tr|y l|kuy|a u|baj| qe|tuk|yll|ayl|s y|aka|bis|isk|aba|du |rab|q s|uqm|hun|naw|a q|lin|ida| ku|i a|aqp|apu|aya|n c|n s|ami| tu|n l|q i|tim|kus|pap|ha |kuq|imb|y t|n a|m p| ba|ika|ask|ast|ull|iyt|y m|ypa| ju|kaw|und|lay|pul|dar|aws|s a",
                        jiv: "nia|ent|ini| ae|nts|aen|ar | tu|a a|tin|ai |iti|i a|chi|ait|ts |ti | nu|kia|iai|in |ia |ich|sar| ch|awa|am |wai|sh |tur|cha| ni|n a|nka|ain|i t| pu|ura|iki|ra |puj|ara|ma |tsu|iar|ash|mas|amu|ish|iaw|nun|tai|unk|an |Ã­ni| aÃ­|ana| ta| wa|aÃ­n|ha |ker|usa|nke|tak|asa| ya|kar|hic|sha|ham| pa|ach|ink|u a|ch |h a|ni |nki| ma|uju|aku|kan|tsa|a n|kam|kic|r a| as|ati|ram|at |jus|man|kui|ank|ama|er |unt| un|rin|suk|nam|s n|kma| ai|kÃ¡k|Ã©nk| an|i n|ntr|rti|pÃ©n|ka |a t| pÃ©|hik|art|uk |r p|uat|min|ajÃ¡|nai|ak |tus| ek|una|nui|a u|uit|aja|war|amt|uma|mu |m p|sam| na|aka|rat|yaj|mta|Ã¡ka|imi| ak|jai|rma|rar| at|kua|mia|ri |ke |tuk|r n| am|mik|nta|m a|tia| aÃ¡|atu| en|eku| ju|uin| kÃ¡|n n|na |ush| aj|iru| ir|pap|kti|aik|atn|its|s a|a p|tri|t t|k a|nma|h n|arm| au| ay|as |aki|mak|uke|eka|nek|api|umi|tek|nua|run|ats|mat| ar|kak| we|san|t a|rka| ne|yam|aÃ¡r|aya|n p|pac|uja| jÃº|ais|ani|ami|iat|tra|hit|k n|jÃ¡ |Ã¡ n|s t|tki|aru| aÃº| um|i u|jÃº |tka|n t|akÃ¡| su|i k|uch|um |uri|wak|ari|tum|hat|i c|unu|aim|ets|nan| et| sh|amr|chm|atk|tnu|yai|chÃ­|nen|ene|k p|hÃ­k|Ã­ki|niu|uis|r e|ust|uim|ame|sti|iam|i w|a w|shi|mÃ©t|i p|Ã¡n |ant|kus|tsÃ©| mÃ©|akm|i m|iak|nt |ji |num|ian|r t|ki | ka|sÃ©r|uar|ake|itk|hi |Ã©rk|a e|ata|rak| ts",
                        qud: "una|cun|na |lla|nga| ca|acu|cha|ta |man|a c|qui| ma| ch|ac |ucu|ga |chu|pi |pac|ari|um |ach|mi |nac|a m|cuy|ana| ru|tuc| qu|ata|shp|all| tu|hum|cta|tac| ll|ish|nam|ash|ami|a p|run|ang| pa|pa |ing| sh|uy |hay|i c|shu|lac|Ã¡n |hpa|hca|shc|ama|api|ca |uÃ¡n|huÃ¡|act|nap|ric|a s| cu|a t|icu|y r|pay|ich|hua| hu|ahu|hin|shi|c c| al|apa|ay |pes|ayc|es |yta|huc|ina|cac| ta|cay|ayt|a a|ycu|a r|la |an |har|ayp|usa|uya|chi| ri|ima|nat|can|aus|mas|cau| pi| mi|i t|a q| ni|lli|aca|rin| ya|n c|ita|uin|yac|nta|ura|a h|ant|and|tan|ipa|li |llu|uis|yuy| yu|nal|may|a l|ung|ape|nda|ypa|in |nis|hpi|iqu|dar|lat|yll|m t|ill|atu|hat| ha|ayl|cpi|uiq|say|i h|uc |tum|aya|uct|i m|uic|nah|uma|tar|ush| pu|a u|mac|aqu|a n|n t|hu | ay|sna|cam|rip| ti|m c|yas|tap|rim|asn|c m|nch|c a|yan|a y| su|i p|i s|c q|yay|rur|hic|ris|ipe|i a|has|ypi|ma |pur| im|acp|ri |luc|gac|ipi|gap|pit|i y|iÃ±a|ays|hac|n p|a i|pip|i l|cll|n a|n l|ysh|mil|aym|yma|tam| ja|ngu|ran|n r|cat|cuc|sum|hur|uas|lam|car|uip|uar|hui|rmi|pin|tin|mit|pic|ull|uri|cus|arm|lay|m y|ayu|yhu|uch|s c|s m|i n|jap|ic |anc|uiÃ±|ala|sac|tic|ra |n m|asi|llp|acl|y l|lpa| ap|u c|n q|ha |gal|c y|hus|yuc|mun|uah|arc|m m|y h|lan|tah|rca|yla|c l|y p|ihu|nin|i q|san|uac|min|a j",
                        lld: " de|es | po| y |da |la |na |a d|por| da|iun| le|un |de |ziu|ona|son|rso|dÃ«r| dÃ«|ors| ch| dl|azi|t d|ign|e d|le |che|a p|gni|he |rt | vi|ra |a c|tÃ© | Ã  |les|a s|Ã«rt| re|ni | la|i p|vig| so|ala|res| na|ter|y d|za |Ã  l| sÃ¼|ia | cu|Ã«nt|n d|nÃ¬ |gnÃ¬|ns |sci| gn| al|cun|a Ã |mÃ«n| co|a n| o |a m|i d|a t| in|nza|dla|a l|itÃ©|a a|e s| a | pr|nte|Ã«gn|ert|uns|s l|Ã¼a |al | li|nt |sÃ¼a| i |ta |amÃ«|ara|ne |rÄ‡ |nes|s p|tra|des|Ã«rÄ‡|er |chÃ«|one| di|naz|con| te|e l|pro|a y|ber|sc |e p|ada|te |Ã© d|zia|gn | ne|nal|s y|sta| sc|lib|Ã«nz|ibe|e c|s c|tes|izi|anz|esc|hÃ«s|s d| me|e n|di |nta|s n| ti| mo|e v| ma| pe| tl|or |dle|unt|uni|a g|ent|ita|ozi|soz| se| mÃ«|ant|ina| fo|ond|ede|n l|Ã¶na|dem|raz|ali|Ã«st|med|a v|e r|s a|ers|ai |egÃ¶|tla|per|a o|gÃ¶n|atr|n p| nâ€™| va|ora|a i|for|deg|uzi|nit|ma | st|ach|y l| n |int|ica|dl |ca | ar|tad|iam| tr|lia|at |tl |Ãªs | Ã© |tÃªs|â€™at|ver|e a|chi| pa|e m|se |dea|dan|Ä‡ y|rtÃª|nia|e i|ion|n s|ti |s s|ist|nda|Ã¼da|po |esp|dal|a f|ntr|a r|ste|dÃ¶t|str|eco|rec|tig|i c|ran|s v|cia|ss |Ã«ss|lar|deb|t a|val| dâ€™|eac|tri|rtÃ©| un|vÃ«g| vÃ«|i s|lit|ria|n c|taz|ich|Ã© y|bli|o g| es|vit|Ä‡ d| lâ€™|zio|min| ni|tÃ¨ |Ã«i |zit|mÃ«s| or|y i| ci|iaf|afÃ¨|fÃ¨ |ale|va |pri|nzi|pol|hir|ide|ial|t y|era|ami|etÃ©|tre|vÃ«i",
                        hlt: "ng |na |ah | th|ang| na|ai | kh|ham|eh |la | ha| ah| la|tha|lan|hla|eng|oei|ih |thl| ka|om |am |hai|i a| ma|kha|boe| ne| a |a t|el |h t|kah|a h| bo|ing| pa|oel|neh|moe|eih| ti|a n| ca|mai|i n|h k|hmo|ngt|amh|a k|ong|mhm| te|te |h a|oe |a a| ra|ung|h l|haw|hui|ek |aw |g t|loe|ram| lo| om|h n| sa|g k|en |m b|g a|uen|ina|ui |oen|ain| at|awn|i t|nga|h h|mah|tom|kho|oh |m t|khu|h p|ka |loh|a l| ni|at |h m| do|tun|amt|g n|aih|hin|h b| va|h r|ak |gto|hoe|aen|e a|don|paw|oek| tu| ng|a o|hat|l a| ta|gai|wn |k t|taw|aek|aeh|mue|a r| bi|ei |sae|sak|ueh|g h|pae|a c|e t|m m|he |ngh| ba|mtu|ni |olh|thu| ro|coe|ghi|g m|lam|kna|can| he|ata|i h|tih|n t|tlo|awt|ala|m k|w t| bu| hn|k n|a b| u |bi |ban|hno|ngp|a s|tho|un |tue|vae|hlo|osa|i k| co|lai|cal|e k|adi| da|ihl| up|i l|a d|roe| mu|g l|wh |awh|e n|hos| ol|m o|pad|i p|di |ca |ae |hue|a p| ya|gna|ngn|l n|no |dan|upa|ith| po|tae|a u| ko|ama|phu|m n|l t|n m| am|tan| ph|a m|ti |sai|wt |h y|o n|bue|tis|nda| me|hol|van|pa | ak|pin|t n|lh |isa|um |nen|lpo|gta|dah|wnd|nin|daw|ait|h u|han| hm|alp|yal|g p| im|g b|uek|h d|an |pui|g c|ol |poe|h c|ngl|baw|it |kun|e l| ku|anp|o a| un|h s|pit|ben| be|n n|npi|hae| tl|pon|ona| hi| as|tik|nah|eba|nya|roi|e b|the",
                        que: "una|cun|na |lla|nga| ca|acu|cha|ta |man|a c|qui| ma| ch|ac |ucu|ga |chu|pi |pac|ari|um |ach|mi |nac|a m|cuy|ana| ru|tuc| qu|ata|shp|all| tu|hum|cta|tac| ll|ish|nam|ash|ami|a p|run|ang| pa|pa |ing| sh|uy |hay|i c|shu|lac|Ã¡n |hpa|hca|shc|ama|api|ca |uÃ¡n|huÃ¡|act|nap|ric|a s| cu|a t|icu|y r|pay|ich|hua| hu|ahu|hin|shi|c c| al|apa|ay |pes|ayc|es |yta|huc|ina|cac| ta|cay|ayt|a a|ycu|a r|la |an |har|ayp|usa|uya|chi| ri|ima|nat|can|aus|mas|cau| pi| mi|i t|a q| ni|lli|aca|rin| ya|n c|ita|uin|yac|nta|ura|a h|ant|and|tan|ipa|li |llu|uis|yuy| yu|nal|may|a l|ung|ape|nda|ypa|in |nis|hpi|iqu|dar|lat|yll|m t|ill|atu|hat| ha|ayl|cpi|uiq|say|i h|uc |tum|aya|uct|i m|uic|nah|uma|tar|ush| pu|a u|mac|aqu|a n|n t|hu | ay|sna|cam|rip| ti|m c|yas|tap|rim|asn|c m|nch|c a|yan|a y| su|i p|i s|c q|yay|rur|hic|ris|ipe|i a|has|ypi|ma |pur| im|acp|ri |luc|gac|ipi|gap|pit|i y|iÃ±a|ays|hac|n p|a i|pip|i l|cll|n a|n l|ysh|mil|aym|yma|tam| ja|ngu|ran|n r|cat|cuc|sum|hur|uas|lam|car|uip|uar|hui|rmi|pin|tin|mit|pic|ull|uri|cus|arm|lay|m y|ayu|yhu|uch|s c|s m|i n|jap|ic |anc|uiÃ±|ala|sac|tic|ra |n m|asi|llp|acl|y l|lpa| ap|u c|n q|ha |gal|c y|hus|yuc|mun|uah|arc|m m|y h|lan|tah|rca|yla|c l|y p|ihu|nin|i q|san|uac|min|a j",
                        pon: "en | ka|hn |an |ahn| de|ki | me|de | oh| pa|ama|oh |ara|ng | pw| ar| en|il |me |n e|e p|kan| sa|n k|son|iki|man|n a|pah|as |rai|n p|ros|mas| so|kar|aro|ram|os |pwu| ko|da |pwe|pil|weh| ah|ail| we|ang| eh|n s| ma| pi|ale|e k|n d|ede|hu |n w|nik|n m|hni|nam|i d|sal|ek |s a|ong|i m|ana|in |h p|oso|s k|ung|e m|wun| mw|pai|soh| pe|ohn|kos| na|hda|nge|men|on |aik|doa|ada|led|aka|eme|ehn|ehu|sou|gen|hte|te |pen|ehd|pwi|eh |dek|ahk|san| ke|kak|i p|e s|wah|nan|asa|hng| to| wi|dah| li|ene|we |wei|wet|l p|et |ehk| se| ni|oht|was|e d|ira|ed |ou |mwa|hki|neh| po|l k| ir|ian|h k|ans|wih|oah|ahr|a k|aso|epw|poa|wel| uh| em|ei |ahu|hk | ia|pwa|l s|toh| re|ak |a m|wia|n o|lip|ein|ie |e a|h s|h m|la |mwe|e e|ehi|g k|el |i k| an|wuk|pa | ak|ur |mpa|amp|sam|ipi|n i| di|ehl|hla|mwo|our|mou| mo|oas| wa|u m|apw|l m|ele|g p|l a|i a|hr |g o|ih |ni | du|a d|nso|ihn|di |one|k p|uka|hre| mi|hi |n t| da| ep|wal|k k|epe|kei| ki|pwo|al | do|e i|ese|kat| in|nei|oad|i n|n u|awa|reh|ipw| la|uwe|lel|at |meh|air|s m|i e|ned|nne|onn|ine|med|hl |ion|a p|leh|sem|id |ala|wen|re |dip|hdi|ado|i s|iso|sa |deh| su|h d|uhd|ia |ida|eng|nin|ndi|k e|le |mpw|emp|ud |eu |r e|oan|e t|lok|pw |ili|seu|a a|ir | te|ond|eki|ewe|e n| al",
                        agr: "ain|ina|mai|ai |ent|ich|ash|sh |i a|nts| ai| ae|aen| nu|aka|tik|chi|wai|au |ida|dau|ts | as|gka|n a|ama|cha|aid|shi| wa|in | ta|tak|u a|tsu|nai| ti|ait|uja|amu|am |a a|kan|kam| pu|i t| tu|kic|ak |puj|hi |num|sa |k a|an |nun|uju|aja|tai|ui | an|iki|nma|ham|h a|unu|agk|ima| ch|kas|s a|hic|kat| ag|m a|ch |uk |ag |ush|ish|um |aya|ane| ni|uma|asa|ata|ja |as |aku|awa|i n| ju|nen|nii| ya|usa|mak|its|ugk|aju|nak|tus|nug|mun|ka |aki|shk|un |sui| aj|a n|jam|uni|mas| at|tin|jai|na |uti|jum|jui|aun|tuj|tka|ig |ii |ita|nja|ika|tsa|anm|h n| ap|sag|yam| pa|bau|ake| du|nia|ats|una|hka|itk|h t|kus|dut| um|umi|jas|eka|jun|amj|wak|ik |suk|g a|jut|ek | de|mta|a t|ta |dek|ti | ma|kes|nta|apu| di|ais|esh|aim|a j|ach|nka| sh| am|at |auj|mam|enj|ete|amt|tan|may|k t|jin|chu|uwa|iig|a d|jus|unm|n t|hii|ink|apa|ji |sam| au|a p|ya |kag|agt| em|nu |mka|n p|gke| ay|mju|ku |u n|kma|pu |u t|gta|nag|tek|hu | ak|tia|eja|ntu|tam| ji|tnu|atn| na|api|tas|i w|nuw| be|bet|m p|ati|dit|mu |hik|min|ant|nui|uwe|inu|kak|aga|h w|s p| et|aig| im|iaj|ju |aik|naw| yu|us |egk|gma|ets|kej|uim|juk|i u|kui|pap|juj|u d|a w|g t|hat|ikt|nam|i i|emt|anu|gba|i j|iju| ku|ma |n n|i y|aji|ikm|me |pic|paj|s n|yak|kin|wa |kti|man| iw| da|yup",
                        qxa: "lla|aj | ka|ta |man|una|nta|sqa|cha|na |ant|an |pis|ana|nan| ma|is |ach|paj|qa |asq|api|qan|ank|kun|anp|a m| ch|ata|nku|kuy|chu|ati| ll|nin|yni|yoj|ay |taj| at|hay|npa|ina|a k|ama|in |jta|ima| ru|lap|uku|spa|ajt|iyo|j k| tu|tuk|wan|aku|tiy|chi|a p|awa|ill|niy| wa|laj|yta|ari|kan| ji| pi|all|iyn|oj |jin|pi |hus|kay|run|iku|uy | im| uj|asp|lan|pa |a r|ku |mun|a a| qh|ayk| mu|mas|nma|isq|jll|sni|yku|n k| ti|tia|may|asi|tap|a c|nqa|ipi|a t| ya|us |apa|a l|a u|a j|kas| ri|ma |j m|nch|apu|pip|ayq|s k|s a|hu |kaw| pa|aws|anm|wsa|pil|ian|pun|k a|npi|ray|upa|uch|j l|kup|n t|qha|anq|tan|khu|ri |kac|uni|nas|ion|a q|j j|par|uma|hik|pay|aqa|ayn| as|i k|ara|tin|rim|int| ni|pat| ki|kus|ayt|ayr|ni |j p|ris|kik|uri|yll|iki|kam|qen|n j|hak|yri|nra|yqe|uj |n y|nap|was|rua|yac|rik|j c|taw|a w| de|n m|aci|tat|has| ju| pu|ita|anr|nk |j r| sa| su|y r|en |pur|yan|sta| yu|hun|kin|j t| ja|anc|jku|u k|uyt|kaj|sis|a y|qac|han|nay|un |mac|nwa|aya|u t|cio|ska|ka |y k|pac|s m|sak|ich|ayl|cia|ayo|tac|war|uya| qo| ta|n l| re|usk|n r| kh|qhe|jch| un|asn|waj| le|iyt|n p|rin|one|j q|yqa|say|lig|jni|isp|upi|jpi| ay|yka|nam|pal|nej|y a|nit|n c|ink|uyn|n a|isn|yma|lam|j w|his|hij|hap|nes|ojp| aj|s c|lat| al|a s|mar|lli",
                        quh: "lla|aj | ka|ta |man|una|nta|sqa|cha|na |ant|an |pis|ana|nan| ma|is |ach|paj|qa |asq|api|qan|ank|kun|anp|a m| ch|ata|nku|kuy|chu|ati| ll|nin|yni|yoj|ay |taj| at|hay|npa|ina|a k|ama|in |jta|ima| ru|lap|uku|spa|ajt|iyo|j k| tu|tuk|wan|aku|tiy|chi|a p|awa|ill|niy| wa|laj|yta|ari|kan| ji| pi|all|iyn|oj |jin|pi |hus|kay|run|iku|uy | im| uj|asp|lan|pa |a r|ku |mun|a a| qh|ayk| mu|mas|nma|isq|jll|sni|yku|n k| ti|tia|may|asi|tap|a c|nqa|ipi|a t| ya|us |apa|a l|a u|a j|kas| ri|ma |j m|nch|apu|pip|ayq|s k|s a|hu |kaw| pa|aws|anm|wsa|pil|ian|pun|k a|npi|ray|upa|uch|j l|kup|n t|qha|anq|tan|khu|ri |kac|uni|nas|ion|a q|j j|par|uma|hik|pay|aqa|ayn| as|i k|ara|tin|rim|int| ni|pat| ki|kus|ayt|ayr|ni |j p|ris|kik|uri|yll|iki|kam|qen|n j|hak|yri|nra|yqe|uj |n y|nap|was|rua|yac|rik|j c|taw|a w| de|n m|aci|tat|has| ju| pu|ita|anr|nk |j r| sa| su|y r|en |pur|yan|sta| yu|hun|kin|j t| ja|anc|jku|u k|uyt|kaj|sis|a y|qac|han|nay|un |mac|nwa|aya|u t|cio|ska|ka |y k|pac|s m|sak|ich|ayl|cia|ayo|tac|war|uya| qo| ta|n l| re|usk|n r| kh|qhe|jch| un|asn|waj| le|iyt|n p|rin|one|j q|yqa|say|lig|jni|isp|upi|jpi| ay|yka|nam|pal|nej|y a|nit|n c|ink|uyn|n a|isn|yma|lam|j w|his|hij|hap|nes|ojp| aj|s c|lat| al|a s|mar|lli",
                        tca: " na|xÃ¼Ìƒ|rÃ¼ | rÃ¼|Ã¼Ìƒ |Ã¼ n| i |ma |a n|na | ng| Ä© |ngáº½|Ã¼Ìƒx| ta|ÌƒxÃ¼|nam|uÃ¼Ìƒ|gÃ¼ | du|duÃ¼|nax|Ã¼xÃ¼|Ìƒ r|gu |a t|Ä© n|acÃ¼|Ìƒ Ä©|wÃ¼x|Ã¼xi| nÃ¼|Ã¼Ìƒg|xgu|ame|aÌ±x|i n|me |chi|uxÃ¼| wÃ¼|nÃ¼x|áº½ma|gáº½m|Ã¼ t|e n|wa |Ã¼ r|ixÄ©|cÃ¼ |ÌƒgÃ¼|axÃ¼|ana|tax|Ì±xg|ama|u i|xi |i d|axu|gáº½x|nac|gux|uma|i i|Ìƒ n| ni|xna|ach|nix|Ì±x |xÄ© |gum|exÃ¼| gu|eÌ±x|nan|a r|caÌ±|tan|áº½xg|Ã¼rÃ¼|Ã¼ i| ya|Ã£áº½Ì±|gac|xga| Ã£áº½|áº½Ì±x|u r|Ã£ n|Ã¼wa|cÃ¼r|aÃ£ |xuc|Ã¼ma|ucÃ¼|rÃ¼w| me|max|Ã¼ e|Ìƒma|a Ä©|Ä© d| eÌ±| no|Ì±xn|tex|tam|Ì±xe|maÃ£|Ã¼Ìƒc|Ã¼Ìƒm| to|Ã¼ÌƒÃ£|Ìƒca|xÃ© |orÃ¼|nor| te|exÃ©| ch|u n|arÃ¼|ata|gÃ¼x|Ã¼gÃ¼|a w|áº½xÃ¼|meÃ£|Ã£ne|nap|axÃ£|eÃ£ |hix|i w|uÌ±x|nat|yax|ang|Ã£xÃ¼|chu|xu |pur|rac|ura|Ì±xu|cha|xex|huÌ±|a Ã£|iÃ¼Ìƒ|hiÃ¼|hig|i t|mar|ga |x r|Ã¼ m|ta |aÃ¼Ìƒ|haÃ¼|Ã¼xn| ma|xwa|x i|nag|Ì±ac|tÌ±a|ÌƒÃ£n| tÌ±|xáº½áº½|a m|nge|ixe|a y|Ã¼ÌƒÌ|ÌƒÌ |ewa|atÃ¼|igÃ¼|Ä© g|waÌ±|Ã£cÃ¼|gÃ¼Ìƒ|xÄ©x|Ìƒgu|ich| yi|Ã¼ g|xma|xic|a i|Ä©nÃ¼|agu|xux|xÄ©n|axw|yix|anÃ¼|xch|cÃ¼m|axÄ©|Ã© t|tog|ogÃ¼|Ìƒ y|to |ra | pu|era|naw|xig|Ã¼ Ä©|ngÃ¼| po|Ã¼ c|o i|ngu|áº½áº½x|ope|x n|igu|a c|Ã¼ w|Ì n| eg|new|a e|gex|nÃ¼áº½|i Ã£|Ìƒxáº½|nÃ¼g|áº½xm|apu|pan|upa|xgÃ¼| Ã±a|ega|mex|axc| bu|ri | ix|awÃ¼| er|per|erÃ¼| Ã±u|Ã© n|nay|bux|Ã±aÃ£|Ã¼ d|e i|pop|Ä©xg|a d|uxg|apo|pox|xri|cua|e r|acu|Ã¼ÌƒÍŸ|ya |Ä© w|uaÌ±|rÃ¼Ã¼|Ã¼ p|nÃ¼ |aya|Ã£ma| tu|tup|mac|ÌƒÍŸÃ£|Ä© Ã±|ixu|cÃ¼g|ne |axÅ©|oxc|xcu|xÅ©x|axÃµ|Ìƒ i|xÃ£c|ixr|Ã±ux|xÃ£x|aux|awa|cÃ¼x|tÃ¼ |cu |xe ",
                        chj: " ds|sa |dsa| e |a j| ju|Ã­a |a e|la |u d| la| jm|uu |a d|i d| sÃ­|e j|a l|a s|ua | ki|a t| na|mo |ki |a k| a |ma |jmo|li | li|sÃ­a|jua|jÃ¤ | jÃ¤|nÃ­a|na |o d|a n|ju |i j| i | nÃ­|Ã¤ d| gu| Ã±i|Ã±i | o | de|e l|rec| ma|der|ere| jn|ho |ech|cho|ia | kÃ¶|Ã­Ã¤ |jÃ¯ | jÃ¯|kÃ¶ |o e|su | ku|o k|e s| tu|tu |a a|e d|dsu|i t| su|i l|ja |a m| tÃ¤|a i|a o|tÃ¤ |jma|u j|nia| ru| lu| h | ja|kuu|Ã¯ d| sa|Ã¤ e|a h|i k|Ã¤ k| fu|u n| ni|iÃ¤ |ta |tÃ¡ |u g| ti|lu |sÃ­Ã¤| tÃ¡|fuu|sÃ¡ |dso| ta|u t|nac|suu|ka | ka|juu|a r| Ã¯ | tÃ¯|tÃ¯ |a Ã±|o j|e n|i n|Ã¤ l|i e|e a|ti |ne | si| tÃ­|dsÃ¡|mu |ue |Ã¯ j|ru |e t|jne|jni|Ã¶ Ã±|Ã¤ j|jmu|u s|uÃº | ji|Ã¡ e|a g|u l|gua|u e| kÃ¤|kÃ¤ |o m|Ã¡ j|aci|Ã¶ j|siÃ¤| sÃ¯|ni |acÃ­|Ã¤ n|u k|Ã¡ l|o g|ba |dsi| Ã© |e k|Ã¡ d| ba|iÃ¶ |o t| as|eÃ© |u a|i g|si |i m|juÃº|h i| un|ie | mo| hu|asÃ­|tÃ­Ã¤|no |tÃ¶ |Ã¤ a|Ã¶ n|guu|rue|a Ã¯|oo |so | kÃ¯|kÃ¯ |o s|Ã­Ã¡ |huu| tÃ¶|ji |oÃ³ | vo|i s|mi |Ã¶ l|jnÃ­|ciÃ¶|Ã¶ s|Ã¡ k|ui |Ã¯ t|gui| jÃº| ie|sÃ­Ã¡|Ã¯ k|d h|u Ã±|e i| d |Ã­Ã¶ | le| ej| uu|uÃ¡ |Ã¯ e|uÃ­ |guÃ­|Ã¶ k| kÃ­|eli|o n|Ã¯ l|Ã­ d|tÃ­a| re|Ã¡ n|uo |a u| Ã­ |i o| ro|sia| lÃ­|co | go| ge|uÃ¯ |a f|guÃ¯|o Ã±|Ã© f|vo | no| je|o l|u o|cÃ­o|o i|Ã¯ n|one|mÃ¡ |nes|es |s u|uni|i i|nid|i Ã±| es|soÃ³|cÃ­Ã¶| jÃ­|juÃ¡| Ã³ |Ã³ d| j |ecl| jÃ¡|jÃ¡ |un |jue|ida| mÃ¡|jÃ­ |Ã¡ o|lÃ¡ |Ã­ l|e m| lÃ¡|Ãºu |Ã¯a | u |das|u u|as ",
                        kwi: "az |kaz|an | ka| wa|tpa|pa | m |nit| ni|ai |kas|wan|ama|nka|aka|awa|kit| an| ma|ne |it |ara|m j| su|itp| ku|mak|a a|cha|chi|as |ant|na |ntu|asa|maz|aru|tus|n k|paz|atp|sun|ura|aki|z k|a k|nta|mai|a m| pa| ch|rus|akp|a w|in |kpa| ja|kar|z a|pai|a p|uka|aza|sa |alk|ain|za |ra |ska|wat|pam|n n|kal|z m|war|wai|z p| p |t t|unk|lka| aw|ion|rak|tak|t n| pu| nk| sa|us |t m|a s|int|kam|mam|m n|usp|ran|n p|n m|cio|ach|spa|at |taw| t | pi|a n|z s|ika|usk|kun|ash|ane|z w|ruz|aci|tuz|un |pur|tar|jat|ish|iwa|uz | na|min| te|hiw|ana|jan|ta |kai|ent| tu|per|jma|a t|alt|kua|unt|i a|hat| n | jm| au|ltu|n a|tch|pak|al |hi |han|kui|era|sha|iun|sar|zna|s w|s k|onk| tp|uma|nte| mi|nti| re|wua|z u|par|tm |p n|ita|uzp|zpa|z n|i k|zka|miz|i w|n s| pr|uin|atm|ais|uru|ter|amp| in|ien|am |usa|man|izn|wa |kaw|e s|itm|tur|anm|mas|ar |r t|ual|ipe|nma|npa|s a|s m|m l|kan|amt| ki|ina|cia|pas|ici|tik|ial|ha |e m|pru|tuk| nt|au |i m|t p|sai|n w|itu|z i|siu| am|itc|nak|pit|hum|ist| hu|lta|ait|e a|nna|ram|amm|p p|hin|i n|aiz|iak| li|tpu|t k| as|was|sam|nac|kta|ank|ami|a i|cka|il |nci|apt|mpa|nk |ann|rai|raw|tra|z t|rta|akt|ciu|nal|a c| up|lki|n t|uzk|i p| un|h k|uil|i s|eka|ima|men|shi|hik|lne|sht|ian|pia|mtu|tui|asi",
                        rgn: "la |oun| e | la|un | di|iou|a l|na |da |zio|una| pr|a p|rÃ©t|Ã©t |dir| da|irÃ©|tÃ  |a d|azi|a s| in|Ã  d| ad|per| dl|ers| pe|ad |ta | Ã  |sa |ni |i p| un|nt |sou|rso| i | cu|gni| su|a c|Ã¨nt|ia |mÃ¨n|ogn| og| co|a Ã | m | st| ma|a a|li |Ã¨sa|za |i d|a e|dla| li|di |t d|pro|su | l | ch| ri|a t| o |umÃ¨|t m|e d|nza|a u|ma |i s|t e|stÃ¨|in | Ã¨s|ibe|itÃ |ra | u |lib|ber| al|ert|naz|i e|e l|rtÃ |e m|amÃ¨|cun|int|n c|u s| to|ii |d c| qu|ich|m l|rÃ¬ |e i| pu| at|con|ent|a i|prÃ¬|e a|sia|ter|n s|uni|cum|che|tot|our|Ã¨d |ita| ni|ri | si|he |al | re|si | el|tra|Ã¨l |el |ist| d |pre|unt|rop|Ã  e|n a|a n|ti |ot |n d|a o|raz|e p|sun|nd |l i|sci|a m| na| tl|at |nda|nta|Ã¨la|qua| de|n e|t i|n p| pa| te| Ã¨ |a Ã¨|ara|nit|chÃ©|i a|nis|ndi|t a|l d|izi|sta|nte|tÃ¨d|Ã¨ri|ali|dli|i o|dis| um| se|isu|ric|i n| fo|i l|rÃ  |ual| po| gi|sÃ¨n|ost|i c|ois|Ã¨da|opi|t t|i Ã |men|nÃ¨l|ch |ur |a g|a r|ran|a f|tÃ¨ |erÃ¨|Ã¨nz|vit|ris|Ã©s |i i|uzi| c |gio|is |and|res|pri| sc| s |tri|d r|t s|chi|ciÃ©|str|rim|sti| du|t u| so|eri|u r|m u|n u|ide|put|l o|idi|dic|nsi|bli|und|l e|op |Ã¨n |unÃ¨|n l|ind|ntr|hia| ar|n o|rel|isp|esi|ici|eli|iar|iun|sid|iÃ©l|lit|dam|d l|soc|foi|nti|tla|i m|utr|trÃ |cou|Ã  Ã¨|urÃ¨|zi |imi| j |ilt|dl |imÃ¨|lig|ntÃ¨|ond| ci|etÃ |der|tic|par",
                        oki: " ko| ag|ogo| ch|et |gol|chi|ey |tog|ol |age|man|get| im|ima|eto| ne|en |oti| en| ng|po |tin|ito|nda|to |ap |and|ik |hit|iny|l k|o a|ngo|nye|da |che|it |yey|kot|y i|got|uti|kom| ke|t n|epo| em|ei | to|in |tap|eta|t k|tut|ak |otu|k c|tik|ono|p k|t a| ak|nyi|nep|ony| go|eme|eny|opo|oma|nyo|i k|mag|a k|ote|osi|yol|gop|n k|ag |kos|yin|ago|isi|net| ka|y k|kon|ogi|on |ip |iik|no | is|agi|o n|n i|sip|ipe|rip| on|yet|iso|hi |gis|a n|gal|pet| ki|chu|o k| pi|tie|ich|och|met|tet| ga|k k|gei|ny |n a|pii|ret|t c|neg|omu| so|emo|cho|koy|nge|n e|erg|sin|o e|kog|op | ta|ani| ot|aap|eng|oso|omo|t t|olu|p n|kip|sit|y a|asi|gas| ti|ek | iy|kop|top|set| ri|ine|ale|gig|ger|ete|taa|ege|u k|lu |ut |ge |gey|som|t e|ane|hig| ny|yon|l c|egi|an |opu|pto|y n|nit|ore|i n|key|men|ig |ipk|tep|ept|mot|ali|k t|iet|ope|sop|mog|non|le |t i|ati|ji |iyo|n n|k a|o c|ch |ita|n t|sye|ini|tor|oto|y g|iag|i a|isy|hep|pko|y e|t o|ech|i t|o g|hon|tia|ok |kat|ait|gog|log| lo|ay |g k|igo|l n|ko |nik|won|nga| se|gon|esi|l g|oyo|omi|hey|kch|ere|goy|ong| te|iye|ser|ot |tic|put|gom|epi| ma|hut|k o|rga|not|p s|n c|k e|rge|hin|ngw|p i|pun|tes|ken|oya|n o|gip|gin|ing|oy |nam|sos|p e|igi|kol|ole|kei|gwo|ewe|i e|tai|any|o s|e t|ai | in",
                        tob: "da | da|axa| qa|ata| na| ca|taq|aq |ca |ac |shi| hu|na |a a|o o|a l|aua|chi|a q| ot|ta |uo |ayi|a n|huo|pi |tax|xac| en|qat|ec | ma|t d|yi |may|c n|ena|gue|qai| la|ota|aá»¹a|a h|it |hit|igu|ish|a i|gui| a |hig|nau| á»¹a|q d|ana|á»¹ax|a s| is|am |aqt|i o|cam|iá»¹a|ama|nat|a á»¹|i q|at |hiá»¹|xau|uac|a d| sh|i n| sa|qta| al|lec| o |aic|c d|hi |lat|a m|o c|eta|e e|ala|i i|a c|en |ua |ach|hua|agu|c c|i d|qan|xan| i |ui |ot |ai |eet| t |xat|hue|a t|uen|t c|c q|ale|api|qaá»¹| ch|a e|á»¹at|nax|uap|uet|á»¹a |tac| l |egu|i m| ne|tta|sat|ii |lhu|n d|t n|uii|ape| ll|ue |nac|ipi|asa|ic | ee|ane|ica|lli|i c|lá»¹a|i e|qoá»¹|ich|i h|cha|ues|oá»¹i|q e| lá»¹|sa |iue|c h|och|lla|to |cpi| iu|ne |ona|á»¹aá»¹| on|uax| á»¹o|ash|ott|alh|q n|pax|nam|i l|l a|max|qch|lic|t q|i s|á»¹in| de| nt|lal|yip|peg|mai|nta|acp|ete| ya|ita|eda|qal|á»¹am|lap|in |yaq|laq|de |qto|á»¹ot|anq|nqo|uas|uec|m l|aqa|tec| aq|ais|q q|nap|et | am|u a|alo|apa|q c|sai|ate|o n| ed|n a|ole|tag|oua|ilo|ga |em |esa|sou|c m|a y|oxo|q i|lax|tal|tee|xa |á»¹al|xag|m d|te |ha |ail|lpi|tau|l o|aqc|que|lo |soc| ay|eso|le | nq|uem|igo|laá»¹|aan| n | no|nqa|iit|n n|xai|alp|lam|q á»¹|ote|maq|eu |q s|c e|tap|tai|nan|cho|nec|i á»¹|hii|lot|ono|oon|t i| oo|ele|saq|nal| so|co |á»¹aa|á»¹oq|á»¹au| iv|ivi",
                        guu: " th|thÃ«|hÃ« |Ã« p| pÃ«|pÃ« |i t|wÃ« |Ã« t|ham|oti|a t|mi |ma |amo|hit| rÃ«|Ã« k|awÃ«|ihi|tha|ai | ku| ha|ima|ou |rÃ« | to|tim|hi |pra|mot|Ã« r|ami| no|iti|Ã« h|i h|tot|ni |tih|kÃ£i|ha | kÃ£|taw|Ã£i | Ã£ |ama|ita| hi|he | ri|iÃ£ |riÃ£| wÃ£| ta|i k|Ã« Ã£|omi|i p|i r| sh|mai|Ã« n|ei |no |Ã£ r|ohi|tit|iwÃ«|Ã«ni|ehe|raw|mou|iha| ma|u t|tiw|Ã«ri|rih|o t|noh|Ã« w| ih|Ã« i| pu| he|upr|puh| ai| ka|uhi|kup| pa|tao|peh|kam|pÃ«r|kui|Ã« s|ui |pi |Ã£ t|hÃ£ |aom| pe|i a|opÃ«|uri|Ã£ h|ao |hap| ur|Ã£hÃ£|pÃ«n|pou|apo|wei|o k|opr| hu|ayo|Ä©hÄ©|aih|e t|yÃ«k|hip| ko|top|ri |wÃ£r|piy|iyÃ«|eri|wÃ£h| pi|Ã« m| Ä©h|sho| wa|Ã£ n|oho|you|kua|hei|Ã«hÃ«|a p|hÃ«n|ith|Ä© t|hir|ata|uwÃ«| ya|rio|Ã«am|u p|aha|her|pat|Ã«ma| tÃ«|ipi|rao|kom|het|eti|rai|ipr|ari| ráº½|mop|tÃ«h|nah|ráº½ |par|áº½Ä© |ho |shi|tam|ono|ram|Ã£ k|hÄ© |Ã«ko|rÃ«a|hot|iwe|the|rou|ota|rip|uwe|kuo|i y|aai| oh|i w|io |ira|apr|ena|uku|ki |aiw|usu|pop|aro|nos|ouw|i s|hai|kou|a h| ay|sha|tae|uaa|a k| en|Ã£rÄ©|i n|e k|suk| kÃµ|u h|ii |opo|e h|imo|pro|Ã« u|Ã«yÃ«|Ã« a|ope|o w|ihÃ£|ti |aya|i m|ewÃ«|wÃ£ |u k|ihe| us|mak| mi|him|kuw|wáº½Ä©| wÃ«|wÃ«y|o p|weh|osi|oni|owáº½|now| a |Ã«i |Ã£no|a a| e |yai|hÃ£n|o r|Ã£ w|i Ä©| su|eo |aeo|mih|pon|a u|ano|i e|o m|pÃ«m|rew|uo |aki|har|Ã« o|áº½ t|e u|o Ã£|rii|uam|mam|owÃ«|rea|ro |hÄ©r|suw|ta |opi|way|iap|ore|i u",
                        qxu: "nch|chi|his| ka|anc|spa|pas|aq |as |una|ana|apa|man|lla|paq|is |nan|cha|kun|kan|na |a k|isp|ta | ma|ech|an | de|aku|ere|rec|cho|der| ll|ina|hon|pa |onc|sqa|wan|hin|mi |qa |nap|ach| ch|asp|ay |taq|chu|aqt|hay| ru|ipa| hi|inc|hu |pan|awa|nak|tin|asq|i d|qta|kaq|all|was|s k|pip|ata| ya|qan|lap|in |anm|kus|s m|ima|ama|anp|nta|q k| ni| pi|npa|a r|run|a m|nas|a a|pi |nmi|tap|k a|sta|lan|sku|isk|yta|ant|yan|n k| qa| hu|ayt|ari|yoq|may| wa|n h|aqm|uwa|ank|qti|q m|a l|sma|ism|laq| ha| im|qmi|nin|un |swa|sun|ma |nat|ita|ruw|q h|kay|ist|a c|s l|lli|nit|ati|ara|lin|la |ayn|kas|ion| al| sa|aci| es|asw|cio|mun|a h|s h|nk |a y|s q|oq |s a|usp| at|a q| mu| qe|est|isq|uya|y d|nku|i k|y l|aqa|has| ay|s y|a p|kuy|q a|sar|ku | pa|yac|api|ypi|yni|n l|nac| am|qpa|ayp| le|nma|a s|n p|qsi|ley|nis|u n|nqa| na|huk|qni|kaw|s w|usu|haw|iku|ayq|n r|naq|s i|kam| ta|asu|uch|iwa|aws|ich| re|asi|wsa|anq|a n|say|ayk|pal|unc|q d|s p|n m|tiy|ien|hat|q p|pak|n c| tu|s r|sin|yku|ayo|qaw|s n|dio|a d|npi|qll|aqp|uni| ku|ey |nay|iya|n d|tan| ju| ca|hap|ios|a i|yay|mar|rim|par|eqs|han|q l| as| yu|y h|asa|u c|yqe|ado|mac|per|qen| ri|qar|req|q c|awk|s e|u l|amp|war|s c|tad|arm|sis|n y|rmi|q w|uez| ap|jue|Ã±un|uÃ±u|huÃ±|qec|udi",
                        pau: " a |el | ra|ra | ch|ngi| ng| el| ma|cha|l m| l |l a|had|ad |ech|eng| me|ma |ii |gii|ir |lem| be|i a|kl |lle|che|ar | ll|nga|mel|mo |a l|l e|a b|eme|tir| kl|a n|a k|gar|l l| di|l r|a u|ul |rng|okl|a c|mal|d a|ng |ek |hel|l c|arn| mo|er | er|il |bel|mok|k l| ar|elt|men|al |nge|elu|lel|lti|bek|ele|mek|ak |lec|ch |eke|ome|chu|kle|k a|lt | om|ema| ti|dia|iak|r b|bec|r a|edm|ung|uch|d e|r r|o m|rre|uul|ale|l n|ebe|mer|i m|a i|alt|a m|l k|r e|lmo|r n|a o|a r| te|l d| en|dmo| se|i e|cho|a d|tel|ilm|ai | il|b e| lo| e |rek|ker|ang|ub | ul|k e| uc|hub|l t|r c|ruu|aik|eru|l o|ll |luu|r t| un|isi|uu |ngm|a t|ekl|ach|u a|len|osi|it |ei |del|hul|gil|r m|a s|l b|t e|irr| al|kel|h r|seb| am| ro|kng|era|ked|lac|lse| le|ged|sis|rar|dir| de|i r|d m| bu|dec|lou|gmo|ika|git|rir|ull|amo|u m|rel|kla|uld|d l|ode|r l|l u|tia|sel|ngu|t r|gul| bl|ou | re|e d| ur|dil|iil|ise|kir|d r|lek|chi|t m|iu |g m|muk|ube|uai|klo|oi |kli|ed | ea|lte|eli|ren|ike|gal|ngd|gdi|rog|ogu|gui|ui |t l|bua|siu|o s|els|i l|ire|reo|alk|lk |lul|leb|eri|hos|or |edu|dim|kal|mor|akl|u e|ais| ai|e m|urr|ol |ude| ki|l s|id |als|ell|ios|dio|o c|bai|lir|h e|sec|ole| ke|dme|olt|den| kn|bed|eor|ial|goi|lal|ego|u l| lu|ukl|lun|ekn|lde|ble|lew",
                        shp: " ja|qui|i j|hue|on |ui |iqu| iq|bi |ahu|que|jah|a j|n j|ra |i i|ti |hon|sho|ash|jat|ain|ues| hu|ati|ama|sca|an | jo|uet|nan|oni|esc|ato|in |bo |a i|nbi|jon|aqu|ino|uin|tsa|jai|ets|shi|sh |con|ja |ma |ana|bir| qu|ira|abi|ina|tia|equ|ian|noa|ima| sh|est|can|ueq|res|hin|onb| yo| ic|to |ora|ibi|sti|mab|nsh|iti|oas|ibo|aca|a a|jac|tim|aco|nti|n a|cam|n i|non|Ã©qu|huÃ©|uÃ©q|ai |uen|na |abo|aon|en | ac| ma|ish|bao|asc|rib|atÃ­|ton|i h|jas|o j|eti|h j|i a|n s| be|ant|sa |yoi|mai|ona|nin|nma|sab|nib| co|osh|mat| at|ica|ni | es|ene| on|ara| is|apo|tÃ­b|caa|es |ins| ap|o a|tio|a h|onm| in|nra|ior|ire|iri|Ã­bi|iai|rab| te|s h|o i| aq|car|cÃ¡ |are|cat|n y|pon|anc|i c|oia|mas|tir|icÃ¡|i s| ts|i q|yam|iba| it|ico|n h|ari|oa |nha|sen|era| se|sha|anr|man|ena|een|nen|aba|nca|tan|nqu| na|uee| no|maa|i n|ran|ca |n q|cos|n b|bor|cas|nco|a m|esÃ©|tso|jan|onr|aya|tÃ­ |i y|ata|eta|ait|bia|aas|enb|anb| ra|o b| ca|ben|ich|a s|h h| ar|n m|inc| me|cai|ano|a q| ba|tee|i t|cop|as |Ã­ j|mea|joi|ans|inb|hib|acÃ¡|ebo|nai| as|bet|iam|int|aat|n e|nat|scÃ¡| bi|nbo|baq|n c|son|hui|anq|uir|a b|sÃ© |oma|Ã­ i|enh|tas|a n|nri|n r|ya |oi | ia| am|uer|ema|i m|she|a t|ric| h |oqu|maq|ia |uis|opÃ­| ho|nya|par|nos|bÃ­ |ea |ten|rat|uib|inm|ue ",
                        gug: " ha|ha |ere|a o|pe |vo |ich|rek|ra |ko |cha|rÃ£ |aÊ¼e| de|ech|va |eko|cho|der|ogu|ho |rec|gua| og|gue| ma|uer|e h|agu|a h|may|e o|ete|o d|aym| oi| pe| he| te|o h|o o|te |yma| oÃ±| oj|uÃ©r|hag|ma |erÃ£|e m|Ã©ra|ua |oje|mba|oÃ±e| re|ve |i o|kuÃ©|etÃ£|a i| av|upe|Ê¼er|vaÊ¼|oik|por|Ã³ra| yv| va|baÊ¼| ku|gui|a y|re |a t|pet|nte|iÃ³n|pÃ³r|ave|yvy|a m|ypÃ³| nd|Ã±em|iko|kat| om|vyp|ad |e i|vei| je|hup|emb|ava|a r|ekÃ³|jep| mb| ic|mbi|upi|Ã³vo|ui |apo|ika|a a|end|Ã©pe|chu|haÊ¼|ehe|kÃ³v| tÃ©|o p|ipo|tÃ©r|Ã¡ic|Ã©rÃ£|nda|a k|omb|ei |tet|o i| ko|Ã±an|ciÃ³|ter|Ã³n |aci|ta |Ã¡vo|e p|are| op|rup|Ã£ o|het|ive|egu|mbo|vav|Ã¡va| up|pa |hes|gar|dad|a j|ora|Ê¼e |ese|amb|ang|teÄ©|jeh|api|nde|bia|po |tÃ£ |yre|a l|emo|ara|se |nga|iap|e n|hÃ¡i|apy|kua|e a|ite|tel|ngu|e t|and|atÃº|pyr|pic|aik|rav| Ã±e|de |ndo|cie|oci|atu|orÃ£|Ã£ h| ta|Ê¼yr|opy|avo|soc|ond| ru|ndi| oh|Ã©i |o a|ait|ert| ik| so|epo|i h|pi |i t|tem|epe|tap|eve|avÃ©|apÃ³|tad|ue |lÃ©i| lÃ©|a n|o k|eic|uaa|Ã³va| hÃ¡|guÃ¡| iÃ±| ja|ape|div|men|o t|a p|ied|eda| ip| um|umi|mi |o v| li|pyt|dai|guÃ©|epy|lib|ibe|e v|ber|rta|ida|kov|tu |ers|eli|Ã©vo|lig|e j|al |eÊ¼áº½|Ä©ch|py |Ã£ t|u h|ide| oÄ©| id|imb|nid|aÊ¼Ã©|cla|oÊ¼Ã£|Ê¼ev|ime|eÃ±a|Ã±eÃ±|e k|tÃºi|Ã©va| im|Ãºi |opa|o m|vai| na|ant|koÊ¼|i a|a u| po|a e|ia |ndu|jap|pÃ³v|eÄ© ",
                        mzi: " ng|nga|a n|tse|jin|ga |a k| ts|ngo|se | ko|xi |n n| ku|kui|in | xi|en |ndi| xu|e n|tji|jo |jua|o n|uta|kju|xut|a t|nda| kj|ta |i n| ta|ind|ojo| tj|a x| nd|i k|n k|ots|ie |e x|ko |e k|i t|goj|n t|ama|n x|â€™a |on |i x|ua |sie|ui |ni |o t|jen| ka|e t| na|ee |kji|ma |tsi|yij|kot|ije| xk|chj|een|sen|je |ats|die|ya |xki|and|ngi|da |ini|a s|ixi|nkj|iee|ink|ian|ang|iya|din|o x|go | ni|kam|ani|see|uin|nix|gan|an |xko| ch|axk|gay|tâ€™a|aji| ma|ayi|jot|kiy|o k|kon|ia |eng|gat|eje|tsa|na |iko|yâ€™a| se|nia|nan|kue|sia| sk|jmi|nax|ndo| ki|dse|min|ayâ€™| yi|nds|tax|cha|un | si|do |xin|itj|axi|jni|koj|atj|ien| ba| jm|tan|ii | en|hje|xti|tay| ti|a c|ach|aki|jun|aa |gi |gon|kja| mi|maj|end|i m|ki |ti |mat|ikj|kat|a m|jii|its|jon|ond|xuj|sko|akj|osi|kos|ich|a j|ijo|o j|Ã¡nd|ima|ntâ€™|kit| nt|uju|Ã¡a |inÃ¡|tik|son|daj|e s|kok|i s|ijn|nÃ¡n|uak|jit|iti|xch|enx|iji|jia|sku|hji|taj|han|i e|dik|sob|kie|bat|ona| xt|tin|tja|sej|nri|ue |itâ€™|iÃ¡ |jan| ji|oji|be |oko|ri |okj|int|sik|xo |tas|nji|anj|xit|mac|tjo|nxi|eji|niÃ¡|mej|ata|eni|n j|jee|inr|isi|ajo|xim|chi| ja|nch|Ã­n |tok|n s|jam|ask|i b|ati|njo| je|aÃ±o|ton|dak|ena|gin|uee|n y|Ã¡ k|mi |inx|oni|obÃ¡|aâ€™a|jaa| xc|i i| ij|bÃ¡a|e m|cho|i j|a b|hjÃ­|Ã³o |abe|tso|gas| me|sex|inc",
                        mic: "taâ€™| we| ta|aâ€™n|it |â€™n | ki| te|kis|n t|aqq|qq | aq|tel|aqa|en |sit|â€™ta|qan|taq|wen|koq|oâ€™t|n w|na |ik |msi| ko|asi|mit|waj|oqw|t w|qwa|isn| ms|sna|joâ€™|ajo|teâ€™| ma|isi|an |wej|n k|sik|eli|eke|ejk|jku|ij |in |k k|aâ€™t| ke|li |si |jit|t k|â€™aq|n a|sut|q t|sin|tij|tas|aqm|lsu|eâ€™w|n m|ite|tek|â€™k |qmi| wj|wji|k m| al|ksi| mi|keâ€™|eâ€™t|a k| el|i a|k t|luk|k w|nik|maw|als|k a|ew |laâ€™|ele|new|maj|q w|waâ€™|iji|ika|nn |ey |uks|ult|lam| ne|â€™ti|inu|â€™wa| na|oqo|uk |kul|â€™l |t t|ann|lek| wi|ita|kl |mim|ima|wla| tl|aju|ukw|naâ€™|tuk|j k|lti|uâ€™k|uti|â€™te|uta|asu|aâ€™k|muk|eâ€™k|nuâ€™|j a|ulâ€™|t m|tl |iâ€™l|j t|tla|la |aâ€™s|sij|ikt|â€™ki|kwa|lâ€™a|tet|kuâ€™|oâ€™m|ami|l w|tmu|tew|i k|n p|ela|q k|kwe|jik|aq |â€™mi|kin|q a|qam|mk |kiâ€™|ket|ett|ewt|ank|wik|awi|amu|iâ€™k|l m| ap|mi |tli|ama|ewe|min|l k|ek |â€™tm|â€™si|k n| wl|iâ€™t|a m|qoe|ala|ktu|mu |a t|i t|jiw|â€™tu|eâ€™l|ikn|kas|tt |q m|uku|uâ€™a|n n|uj |i e|etl|wte|â€™ka| pa|pas|iw |ej |tiâ€™|maâ€™|miâ€™|usu|ina| mu|loâ€™|l a|a w|nuk|sum|man|kew|aâ€™m| ik|j m|wij|imk|puk|tik|lnu|kat|oey|wes|utm|sul|kej|u k|t e|eâ€™s|pla|j w|ioâ€™|ati|lte|sus|l t|ani|ikl| kw|mas|nut|uiâ€™|wio|kut|aâ€™ | wu|esk| et|aâ€™l|muj|w t|a n|lit|uaq|weâ€™|tma|q n|tuâ€™|kwi|nmu| sa|etu|i m|kun|lap|itk|aj |aâ€™q|t a|poq|â€™lm|las|ula|mut|mal| nu|apo",
                        haw: "ka | ka|na | i |e k|ana|ke |a i|a m|i k|a h|o k|nÄ | ho| nÄ| ke| a |hoâ€™|a a| â€˜a| ma| o |ia |a k|a â€˜| me|oâ€™o|a n|aka| â€˜i|le | no|nak|me |no |ua | e |au | kÄ|â€˜an|a o|â€˜ia|kÄn| â€˜o|ai |ma |i n|e â€˜|ono|apa|oa |Äna| po|Ä k|ole| ua|a p|pau|pon|e a| ap|i â€˜|â€™i |aup|ona|la |ike|uni|e n|ni |noa|han| au|upu|pun| kÅ«|kan|u k|a l|o â€˜|â€™ok| ko|ale| pa|i h|â€˜ol| ha|â€™a |oho|aâ€™a|oâ€™i|noh|o n|o a|a u|i a|a e|e h|wai|ho |Ä p|a w|ui |ila| ku|kau| wa| he| kÄ«|kÄ«v|aâ€™o|ahi|e m|aha|vil|Ä«vi|pal|lik|Ä a|i m|kah| lo|â€™ol|kon|lu |naâ€™|hi |lo |oko|ha | ai| kÄ“| hÅ|hÅâ€™|oha|mal|ina|ao |i i|ala|aâ€™e|hui|i e|u â€˜|â€™e |u l| lÄ|umu|ano|man|paâ€™|â€™ik|Åâ€™i|ea |â€˜aâ€™|koâ€™|i o| lu|â€™o |e i|u a|Ä“ia| li|mea|kÄ“i|oâ€™a|eka|e e|una|i u|i p|Äwa|oka| hu|he |loa|â€™om|kum|aâ€™i|kÅ«â€™|e p|â€™on|mu |leh|ehu|â€™op|lÄ |nÄw|ÄnÄ| la|â€™au|oma|kÅ«l|ku |lel|ule|mak|alu|ae |aku|lun|Ä m|ena|ulu|aua|opo|Äin| aâ€™|ili|li |o m| mÄ|kua|o i|Å«â€™o|ele|olo|lek|iâ€™i|Ä l| le|â€˜o |oia|uhi|wal|ola|hon|lan| â€˜Ä“|â€˜Ä“ |wÄ |law| wÄ|uao|kai|wa |o l|Ä“ a|ne |iki|kul|ika|u o|u i| ak| pi|alo|mai|Ä h|â€™oh|o o|Äko|ino|iÄu|opa|kÅ |hol|Åle| an|elo|ewa|awe|u m| â€˜Å|Å«la|aiÄ|Äul|kaâ€™| al|kal|ki |Å« â€˜|e u| â€˜Ä|hik|iai|pÅ« |nui|â€˜oh|ama| pÅ«| ne|â€˜oi|ela|ahu|wah|pil|i l|mau| mu|â€˜Ål|e o|mua|hu |kae|luh|hal|lai|Ä i|ko ",
                        yap: " ng| ni| ma|ni |nge|n n|ge |en | e |ne |nga|ii |e g| fa| ko|idi|gid| gi|dii|ko |bin|in |ay |att|ttÊ¼|mat| ro| ba|tÊ¼a|Ê¼aw|och|an |awe|wen|gub| na|ubi|e m|ara| gu|am |i n|ra |ine|i m|n e|cha|y m|g n|el |bay|aa | ta|ng |kÊ¼ |aba|mab|boc|ngi|on |okÊ¼|rok| ar|e n| mo|ang|e t|chi| ga|nam| u |eg |ogo|ane|y n|i g|i b| ya|uf |rog| da|e p|iye|l n|gin|fan|iy |lan|gon|ag |a n|n b|d n|puf|re |reb|mot|oto|e b|n k| pi|e k| be|bee|w n|aw | ch|toc|han| la|are| bo|ga |ee |nib|uw |l k|o n|ach|che|m n|yan|il | bi|ab |n m|ey |ch |Ê¼ n|apa| pu|hiy|mar|ad | re|e a| ti| ka|gak|yel|gaa|i k|tin|len|ban|baa|dab|wel|ba | i |obo|un | ku|lob|rwe|ayu| zi|haa|arw|kan|ina|age|riy|mak|ed |olo|far|i y|gar|n g|b n|zil|owa|akÊ¼|tay| ol|o f|f r|yal|yuw|liy| ay|iti|lÊ¼ |ing| mi|ma |aku|ney| ne|m r|ali|a m|now|u l|a b|ung|ig |paa|aen|a f|nag|fac| ke|ada|kub|ita| ri|e r| pa|ar |a i|gan|gen|e f|ano|man| me|ir |ebo|bo |ani|Ê¼e |e c|aar|pin|i d|a g|a p| yo|ite|fel|nit|ow | ra|e y|tir|Ê¼ g|l m|anÊ¼|y e|fa |abi|iya|kÊ¼e|i o|g m|ere|r n| un|taa|ama|eng|aga|ile| fi|naw|ail|fai|a t|wae|tal|ted|eb |ili|lun|ram|mad|taf| ge|mod| yu|ul |gi |bap|nin|gay|ulu|hig|elÊ¼|ati|iba| am|n f|g f|kul|a e| er|nÊ¼e|o g|uni|i t|mit|al |w m|heg|ke |g k|a r|ene",
                        cbt: "ya |huÃ«|hua|a n| hu| ya|a h|ina|na |so | ni|chi|uÃ«r| no|hin|pi |uÃ« | co|aso|quÃ«|rin| na|a i|aca|Ã«ri|ach|api|ua |o y| in|in |cas|poa| sa|ahu|opi|ohu|co |npo|noy|oya|Ã«hu|a c|ipi|a y|an | pi|nan|a a|inp| ma| pa|sha|ta | a |ana|nap|ha |no | ip|a p|uac| an|nhu|arÃ«|nin|inh|o n| qu|oa |mar|iya|yap|pin|Ã« n|tÃ«r|Ã«ra|piy|uÃ«n|n n| tÃ«|pir|i p|iso|nto|o m|n a|nta|cat|toh|ant|sa |o s|nis|ran|tac|ata|ita|ish|rÃ« |ma |Ã«rÃ«|ais|i n|Ã« c|pit|top|aqu|a s|ton|cai|rno|irn|o t|yon|cop|tÃ«h|oro|ito|atÃ«|Ã«n |rÃ«h|nÃ«n|Ã« a|uan|ont| to|sac|hui| ca|nac|a t|ani|nit|ro |ins|n q|i s|nqu|ato|apo|pac|on |ni | sh|ino|pah|i c|int|oas|iri|qui|n c|tah|ini|par|n i|ica|nch|ona|ihu|Ã«nt|Ã«qu|noh|a q|n p|coi|nip| ch|Ã«ca|anÃ«|Ã«np|Ã«nÃ«|o p|ri |ama|tÃ«q| am|inc|ari|i t|itÃ«|a m|naq|Ã« p|oso|oin|shi|i y|ian|Ã« y|hi |uat|iyo|san|ra |soh|niy|n y|uir|onq|npa|pia|ntÃ«|onp|cha| ta|nor|tin|o a|ain|nso|uÃ«c| yo|nat|npi|i a|sor|nos|i i|cac|hac|oca|o i|pa | ac|nÃ«h|pat|nti| pÃ«|ima|apa|non|tot|hit|map|o c|uÃ«m|tÃ«n|ota|nsh|Ã«ma|art|rÃ«c|rti|ti |ano|son|och| po|ara|aco|n h|o h|pop|ash| es|esc|scu|uar|aro|cue|uel|iin|uÃ«t|anp|poc|uah|roc|ori|pih|ira|i h|pÃ«n|ela|uÃ«a|iqu| im|Ã«a |a e|Ã«in|asa|Ã«tÃ«|uÃ«i|uai|uic|uas|rÃ«s|nah|ayo|n s|ca |uay|nas|Ã«ch|Ã« t|nic|isÃ«|ois|ipa",
                        ame: " Ã±e|et |ene|a a|Ã±eÃ±|eÃ±t|ch |net|all|en | ye| am|uen|t Ìƒ|ech| po|hue|pa |ama| at|ohu| al|err|a t|e Ã±|che|ha |ma |Ã±t | Ã±a|Ìƒa |ach|yen|amÌƒ|ra |rra|Ã±am| ch| Ìƒ |po |a y|ena| pa|mÌƒa|llo| e |a Ã±| co|a e|t Ã±|ere|Ã±e |esh|att|ttÌƒ| de|na |rec|t a|cho|heÃ±|der|ret|n a|eÃ±e| t |Ã±tÌƒ|tÌƒe|sha|cha|cÌˆh|arr| o |loh| ac|tet|are|ate|Ã±er|o c|nes|och|ets|a m|Ìƒ a|coh|etÌƒ|tÌƒo|t e|ten| aÃ±|ats|o a|tse|aÃ± |o Ã±|Ã±et|o p|a p| m |tar| ts| er|ro |pat| ec| es|hen|ane|mue|rr |h e|oct|eÃ± |sa |t p|ho |h a|os |Ìƒoc|tÌƒ |Ã±en|poc|s Ã±|ent|a c| ar|e a| ta|epa|e p|mac|hos|r p|ese|apa|ata|s a|ota|tsr|sro|sen|tat| eÃ±|rro|lle|tye|Ìƒch|te |pue|tsa|o o|ey |nen|tan|cte|tÌƒa|cma|h c|e c|eÃ±o| na|Ìƒpa|yes|Ã±ec|eÃ±a| yo|o t|o m|Ã± Ã±|es |er |otÌƒ|tÌƒp| or|a n|to |orr|e t|n y|hye|chy|yec|pon|set|no |t d|ame|Ã±ot|h y|lpo|mpo|ocÌˆ|eto| an|she|ye |ts |tÌƒc|nac|teÃ±|tÌƒt|Ã±a |llp|Ã±al|par| mu|Ìˆha|ete|ote|ana| ma|cop|Ã± a|ahu| en|uel|op |Ìƒec|ell|y a|nta|ora|aÃ±e|Ìƒte|mar|Ã± d|hua|aru|rua|on |uas|as |n Ã±|uer|ne | pe|taÃ±|rrt|tso|e o| ya|nte|ecm|n p|ecÌˆ|emp|Ìƒe |Ìƒar|pot|uet|m e|ant| pu|rta|nan|Ìƒ p| Ã±o|Ã± p|rre|ar |yeÃ±|que|ann|tpa|Ìƒey|ta |n d|asa| tÌƒ| te|pen|n e|eno|pÌƒa|het|yey|an |r e|cot|ida|le | ne|o e|Ã±ap|loc|Ã±oc|ney|r Ã±|Ìƒo |ay |one|a o|ses|Ìƒ c|aye| Ìƒa|ll |yep|tep",
                        gyr: "ra |atu| av|kat|ko |eko|tu |rek|kwa|ava|ae |mbo|ei |se |va |a o| va| oi|ave| mb|ar |aka| op|e o| nd|opa|vei|pak|ira| ya|oik| gw|u a|a a|amb|pe |iya|ekw|ua |vae|gwa| re|wa |chi|emb|bae|bua|mba| am|vir|a p|mbu| vi|i o|ika| te|ire|ese| ko| se|yai| pi|e a|sa |ri |e i|e y|a v|nga|i a|ve |ta |nda|pri|yur|a i| oy|gar| yu|ure|aÃ«r|Ã«i |vaÃ«|ung|tek|nun|ndi|ai |Ã«ra|boe|a y|nde|i v|bor|ora|oya|ete|and|a m|o o|koi|ota|a t|ere|ipe|inu| in|yan|te |e m|e r| ye|imb|o y|yem|pip|oro|diy| ru|era|a n| ch|res|mbi|gwe|yav|end|ara| Ã±e|e n|a g|rer| iy|wai|oi |e v|epi|tei|pi | o |i i|i n|ipo|o v|ite|upi|i k|e s|oye|ich|pot|upe|avi|de |was|okw|asu|o i| po|hir|oÃ±e|ke |ach|rup|oet| im|aik|ase|sek|i s|ndo|tup|upr|hia|ikw|i y|a r|isa|apo|oim|po |ise| su|chu|eir|tÃ«i|ia |o a|a s| ei| ip|pia|hup|ime|Ã±ep|eta|e k| om|su |eis|war|emo|sui|tas|aer| ik|a k|er |iko|ita| os|ait|u o|rok|asa|o m|i t| ae|ose|rai|r a|e t|ore|por|kor|u v|pis|yap|wac|iro|par|mo |pÃ«i| ke|ui |kua|a Ã±|ipi|moÃ±| tÃ«|bim| Ã±o|r r|no |Ã±o |iap|omb|aei| ve|pir|ndu|rav|i p|aya|mon|o r|isi|epÃ«|tui|oip|o k|u p|ya |apr|igw| ra|dae|Ã±et|sar|pit|uve|bot|tar|rop|r o|omo|eku|iki|roy|ako| ak|rep|are|i r|oit| ai|esa|umo|ipa|rum|vik|iet|sir|osa| oÃ±|yep|sep|ike|epe|opi",
                        vep: "en | i |den|iÅ¾e|ehe| va|ikt|ide|oik|an |ktu| oi| me|el | om|nda|tuz|da |he |om |use| ka|hiÅ¾|meh|zâ€™ |uzâ€™|val|end|l o| uÌˆ|le |aha| jo|tus|es |ele|iÅ¾i|Å¾el| te|ald|dan|Ìˆht|uÌˆh|e m|ahi|ude|kai|id |und| ra|m o|ali|gah|oid|as |jog|oga|ahv|oma| ku| mu|n k| ta|hel|ha | mi|kun|l m|hva|rah|vai|uda|toi|ed |ndu|liÅ¾|ai |n t|ta |kon|lda|tud|tad| ko| ol|iÄe|itu|dus|ada|vah|Ã¤ne|iÅ¡ |hth|aik|ei |iÅ¡t|d i|hÃ¤n| hÃ¤|n a|nen|thi| ei|ud | ni|n p| sa|sta|il |teg|n v|ita|n i|ija|mug|n o|a m|i s|ad |e t|Å¾id|sel|n m|miÅ¡|a i|iÅ¡e|oiÅ¾| to|pid|i v|uzi|al |i k|d o|tar|oit|e o|e i|Å¡e |voi|i o| ma|i t|d k|dam|nd |e k|tte|Äen|arv| ho|a k|kes|seh| ke| pi|ze | el|amb|rvo| ne|Å¾eh|mel|hte|jan|rad|mat|nik|a t|sen|i p| iÄ|idÃ¤|oli|len|ona|esk|zid|kud|ego|ÄÄe|ust|i m|iÅ¾ |pÃ¤i|iÄÄ|uga|Å¾en| si|old|usi|ope|ba |gen|d m| tÃ¤|arb|tes|ma |nec|Ã¤i |pen| su|eze|s i|des|and|dah|n u|ehi| ar|ne | us|miÅ¾|Äez|tom|ami|iki|tam|ond|jas|cij|doi|gaÅ¾|aÅ¾o|on |Å¾o |in |sid|elo|ihe|sa |eht|ahu|mai|biÅ¾|ugo|rbi|ine|elâ€™|das|ldk|uta|abu|iba| ab|a u|hud|teh|ado|nan|mba|sko|ike| po| so|dku|n s|lit|aiÄ|aht|goi|kan|ait|dud|s h|ara|aci|zoi|s t| pa|a e|a v|ske|Å¡to|ial|man|i h|itt|n j|aiÅ¾|a s|tah|eda|ho |oho| pÃ¤|ast|ile|ut | vo|e h|usk|n r|jou|dal|hen|i u|mus| op",
                        cpu: "ri |tzi|ant|iri|ari|aye|tsi|ica|nta| ir|i i|atz|tya|yet|ca |zir|i o|ni |i a|aar|iro|a i|aca|ro |yaa|shi|ita|ait|can|yee|eta|car|tha|eri|aro|ero|zi |ric|ter|ash|oca|tai|eni| at|que|ya |nca|een| oc|i t|ats|te |ine|pay|pit|qui|mpi|eet|ira| te| ee|e i| in|ipa|aan|tac|amp| on|Ã±aa|cov|caa|si |inc|a o|ava|ara|apa|aqu|zim|tay| ca|ota|sic|ima|ova|tar|hin| ts|ori|ror|i j|a a|nty|ame|ntz|rir|ity|nam|vai|ata|tat|onc|cam|ite| ar|ron|nqu|aty|o i|eth|ne |mee|ta |ran|etz|hat| pa|eer|iya|i c|eva| ic|oni|taq|rat|ete|cat|ina| na|o o| ap|aac|jev|i e|tan|e o|its|rip|a t|aiy|pai| o |i n|i p|eej|air| ja|tav| im|par|mat|per|jat|e a|pas|ent|anq|nco|nte| iÃ±|aay|int|san|omp|nts|iÃ±a|eja|oÃ±a|ove|api|sir|ana|uer|ont|aco|aap|vac| je|ue |ety|har|ui |raa| an| os|uem|ith| om|tye|ema|yot|ma |ra |pin|ath|o t|hir|rin|ate|taa|hit|eca|vat|imo|tec|mpa|net|iyo|cha|maa|iqu|tem|ape|itz|pat|uin|ye |rot|ven|riy|imp|opa|osa| ma|emi|aav| is|a j|mit|var|inq|roc|uit|mpe|nat|era|a p|jan| ip|vay|vas|sip|poÃ±|o a| tz|ai |a e|roo|aas|aat|oco|ire|oye| op|osh|sin|aÃ±a|rov|rom|iye|equ|ha |ach|cai|aga|ave|hay|ani|ico|e e|ije|imi|cot|iry|gai|ish|tas| pi|oqu|o j| jo|mon|otz|ner|j a|a c|man|i m|e t|roÃ±|ote| aa|ini|sit|ain|iva|ane|ve | ij|ren",
                        acu: "ain| ai| tu|ai |ina|tai| nu|nui|i t|ngk|sar|uit|ita|int|ash|nau|tur|ha |ar |inu|ura|tin|chi|sha|art|nts|a n|rti| ni|i a|iki|usa|u a|rin|gka|tsu|ka |a a|ker|ich| ma|ts |cha|au | pu|puj|sh |nun|mas|ang| wa|uju|tus|ras|awa|kia|suk| ch|uk |ra |eng|gke| pa|asa|nin|kan|in |kic|ni |pen| pe|ach|nu |jus|amt|hik|aya|tnu|atn|a t|ia |ch |aka|n p|r n|u n|h n|i n|ung|er |aun|uka|ti |iar|un |wak|kar|mta|ake|ish|r p| as|an |pac|wai|ji |a p| an|nti|h a|una| na| ta|s a|ari|nch|uri|eka|its|ara|ri |rar|tim|ram|kam|uwa|kat| ap|nam|nak| ne|nuw|nma|apu|war|aki|nek|anm|ern| ak| aa|aar|ata|k a|ya |may| me|k p|n a| aw|tak|tra|met|ete|tek|a m|pu |a c|arm|aji|run|nan|am |bie|ier|iru|rno|uni| go|ing|gob|mia|obi|r a|ush|era|isa|ek |sri|unt|aus| ir|ng |as |jai|ntr|i m|hit|ana|hti| yu|tan|s m|aik|auk|ust|uin|iin|no |uch|ami|mau|rka|ak |u t|sht|uja|hic|ais|kas|ait|umi| um|k n|rma| ya|ink|ama|tas|nia| ti|hat|tu |r m|tun|inc|na |r t|jui| ju|nuk|naw|nka| uc|iis| in|maa|a s|yai|wat|a i|wa |ats|waj|a j|eri|imi|s w|aan|sta|mat|uma|aja| su|amu|i w|pas|itj|ati|gki|k t|sun|n n|iri|ase|tka|ini|nay|yat|ham|a w|ju |tji|his|mi |e a|sa |akk|h m|i y|unc|atk|ant|kka| ji|mir|tsa|atr|ani|r w|se |mts|kii|u w|msa|i j| ts|mik|yum|nur",
                        not: "que| ca|ra |gue|ati|nga|ani|ti |a i|igu| ir|isa|nin|ue |ina|sat|can|uen|nta|ais|ro |eng|ant|ca |tsi|te |nat|ing|ira|aca|aqu|iro|aig|i i| in|ora|iri|ara|ats|aro| ai|ata|car| or| pi|int|uer|aga|ri |sig|e c|mat|ga |gai|a p|i o|gan|tag| ma|taq|gom|ite|gui|ngo|asi|ta | te|a c|ong|i c| on|e o|guÃ«|agu|ero|e a|ngu|a o| an| pa|e i|mi |i a|i p|oma|tai|ini|tim|ita|ni | qu|uÃ« |ome|iqu|ima|oca|iti|nqu|nti|ui |a a|nar|anq|i m|sin|ten|ari|ica|emi|rir|eit|omi|mei|san|a t|o a|pai|sit|mit|rac|air|oba|bir|pin|imi|iga|qui| om|nia|ang|ota|gac|gar|o i|nts|tir|tin|uem| ar|oti|mag|obi|eri|egu|quÃ«|eni| ba| it|ito|bas|rin|ran|iat|ate|o o|man|ma |rog|i t|isi| ic|pij|tis|roc|e p|tar|oco|ena|iba|a q| po|iji|pag|toc|cot|tac|equ|asa|nas|si |uir| oc|gas|rot| ob|roo|iac|pit|a b|ipa|o m|Ã«ma| ig|ntÃ«| sa| aq|ori|oot|rob|ane|bin|uÃ«m|rom|Ã«ri|anÃ«|uit|Ã¡gu|Ã« a|pic|got|ogo|tan|mar|e q|o p|ico| je|jem|gob|bac|caa|ne |nib|re |mis|ain|rai|Ã«go|cag| im|Ã¡bi|oro|a s|i j|uim|cat|a j|bat|ngÃ¡|com|uÃ«r|gÃ¡b|oqu|bai|jeg|nÃ« |Ã« c|tÃ«g|ria|cha|ogÃ³|ai |Ã« i| co|agÃ¡|oto|ibo|era|ha |bag|mai|ija|are| ij|jan|tas|ror|ino|mip|ont|rit|a m|aat|Ã«qu|uÃ«q|Ã«mi|rag|ote|uib|o c|Ã« o|oje|roj|jit| pÃ¡|pÃ¡g|sai|ach|tsa|oga|a n|opa|igo|eta|ato|uet|es | ib|ueb|ait",
                        sme: "vuo|ja |uoh| da| ja|aÅ¡ | vu|at |laÅ¡|lea| le|id |uoÄ‘|hta|uoi|oig|iga|tvu|gat|ta |atv|a v|oÄ‘a|as |oht|ala|aid|ii | ju|ea | dÃ¡|uvv|a d|vvo|dah|in |ohk|dja|idd|lmm|juo|ddj|a o|hke|usa|ga |it |ot |je | ol|ÄÄa|ahj|sa |hje|s l| ov| ma|okt|aÄÄ|rid|te | oa|a s|fri|ear|iid|ovd| ga|a b|t d| fr|vnn|nna|aht|Ä‘ai|us |a j|ola|i d|eat|htt|gal|alg|e g|ge |an |mmo|hus|avu| al| su|aga| bu|vtt|de |vot|eal|i j| go|keh|eha|Ã¡ht|lbm|olm|buo|oju|on |Äas|tta|Ä‘a | bo|dag|dan|gga|s j|t s|go |all|vdd|et |t o|is |lgg|ahu|sii| si| mi|t j|haÄ| ea|arr|von|jav|t v|juv|Ã¡la|mii|uvn|stÃ¡|n d|e o|dda|e d| se|moÅ¡|saÅ¡| vÃ¡|ahk|Å¡tu|stu|Å¡uv|vÃ¡l|lÃ¡g| do|n j|ost|Å¡vu|Å¡ d|i o|bmo|tus| ve|svu|kte| ii|a m|hte|Ã¡sa|Ã¡i |kta|ssÃ¡|ovt|lla| nÃ¡|Å¡Å¡u|ast|tas|oah| gu| ri|alm| du|tto|nal|bok|mea|mi |aÅ¾Å¾|bea|t l|arg|oÄ‘Ä‘|ide|tii|osi|gÃ¡ |tÃ¡ |eah| rÃ¡|lgÃ¡|hka|ut |Ã¡n | na|ass|Ã¡ga|tag| be|gas|ttu|mmÃ¡|d j|dat|oda|Å¾Å¾u| mÃ¡|Å¡ v|sis|das|alu| so|uid| lÃ¡|rii|naÅ¡|s d|mat|kkÃ¡|a f|eam| ba|dit|vea|Å¾ut|laÄ|doa|uol|ami| ok|t m|Å¡ o|ain|uot|hkk|olb|skk|uos|mie|oaÅ¾|dÃ¡s|lli| ie| st|Ã¡ss|iel|n v|aÅ¡Å¡|tuv|rra| di|Ã¡ld|iin|a g|ssi|suo|bar|uod|kko|ddi|age|lus|t g|n l|dus|gea|uht|sÃ¡s|ikk|duo|odj|Äat|sea|a n|Å¡ s|tti|aÅ¡v|ann|ahp|Ã¡ m|mÃ¡ |rvo|agu| Ã¡l|hti|ama|dea|lah|dÃ¡n|jal|d b",
                        yad: "iy |tya|rva|ada|irv| ra| ri|vay|ay |arv|ra |cha|da |a j| sa|ara|yan|ya |ich|y r| ji|rir|amu|vat|a r|rvi| va|ijy|rya| ni| da|va |ati|uty|nij|a n|ari| ti|iry|y j|yad|var|ava|u n|tiy|aty|nva|rar|anv|jya|ata|a t|vic| ja|sar|ye |tit|ach|dye|ity|asa|aju|idy|dar|ami|ju |ant|nty|yu |ta |y v|tid|ary|a s|yat|a v|sam| mu|mu | vi| ne|jir|chi|anu|chu|u r|siy| ta|mus|a m|ram|usi|taj|nut|adi|ita|dat|tyu|mir|ani|ne |van|riy|u v|imy|nu |iva|vij|y n|uy | nu|ryi|uch|cad|a d|au |y s|uca| vu|ech|mut|had|ivy|yar|muy|y t|jar|nti|jau|era|jaa|tar|u j|hip|jmu|uma|y d|ma |myu|miy|uva|ipi|piy|i r|rve|jyu|has|e j|iqu|dam|viv|que|yi |ha |aya|e t|ti |oda| jn|e v|tja|yam|muc| j |mur|Ã±um|tav|e r|vad| ca|u d|daj|u t|ivi|imu|yuc|i j|vac|hu |jnu|asi|cho|niq|j i|ate|ura|tye|yiv|tyi|yas|i t|niy|u s|riv|yja| ju|ric|ran|umi|vur|yic|umu|mya|adu|aad|daÃ±| nr|sat|unu|yav|ter|di |tad|ijm|jad| yi|urv| jm|vut|har|rim|vyi|rat|vja|mun|dod|iya|aÃ±u|uya|e s|iyj|vam|omu|ije|i n|jas|nrv|int|uti|jva|dim|uej|enu|che| tu|uri|eta|eja|hir|ija|cat|rvj|jec|sav|a y|isi|yuv|aja|jav|vya|itj|eva|vec|yom|jiv|tim|yum| jv|eda| de|num|ude|jac|amy|tan|jub|sac|jit|div|riÃ±|hav|jam|jan|rye|ado|uba|yij|ni |upa|ida|vi |ade|ho |der|hod| mi|yev|uta|iÃ±u|hut",
                        ura: "in |cha|ha |uru| ne|ne |ain| ca| ra|aur|a c|ru | co|ach|iha|n n|a n|aai|ana| ni|aau|cac|aca|e c|ein|uhi|n c|ai | ch|nih|ina|haa|naa|na |eei| na|ich|ruh|coa|ane|rai|ojo|uha|caa|rau|nac|auh|ere|u n|iji|aa |joa|han|chu|ine|oha|e n|iin|nee|a r|i n|u c|hi |i c|oai|aen|aoj|hin|u r|cur|oco|i r| it|coc|te |uri|cai|eur|eeu|hae|coi|n i|a j|ata|hur|en |nan|nii| ja|aih| qu| ac| sa|hu |e a|aan|ena|ita| je|e r| cu| ic|ela|jer|a a|raa|ue |que| ai|ree|re |oin|oaa|ii |e j|cuh|nai|ito|tii|toh|ihu|ta | te|jia|ati|nen|hac|ucu|aoh|ara|cao|aun|cor|rij|eje|eri|taa|acu|joe|lan|aao|ato|era|hat|ric|nao| le|ecu|nu |ei |eca|lau|tan|can|oat|ner|nej|ri | er|rih|sat|jan|ero| ba|jie|a s|n r| ri|oro| la|u a|toj|oar|ier|rer|jau|ait|e s|ene|oto|tol|a t|ole|ler| ji|iri|ihe| es|hei|jaa|aon|rao|ate| at|aja|oee|i i|ra |hau|la |ini|aot|tee|jij|iei|n j|roa|jee|oec| go|gob| jo|a i|obi|bie|ern|i j|mii|n a|ona|hao|jel|qui|iic|rno|n t| be|taj|an |oae|lee|enr|nre|ami| am|aal|cau|saa|e l|ban|e e| en|ton|n e|ca | nu|oau|un |ala| re|ruc|i a| ru|e i|no |nat|ore|ren|eta| to|n q|nec|au |e t|i q|mih|nri|net|uuj| in|i b|i e|eni|rii|jii|una|tuc|n l|hun|oac|uju|oit|nij|och|itu|ete|anu|onr|i t|o n|aba|roe|nab|iao|ure|aje|u j|u i| ta|a e",
                        cbu: "chi|pa |ari|a t|ots| va|pot| tp|tpo|ach|ina| ta|ni |ats|tar|ama|iya|tsi|van|ani|ri |ts |ich|ha |spa|ia | at|ya |a a|am |ara|tam|tsa|sta|nts|tsp|int|apa|ash|ana| ma|ini|tin|ati|ro |shi|a m|nar|ta |i a|i t|a v|hpa|chp|sha|aro|tst|rin|ita|sia|oro|a k|mam|ron| ka|ata| go|aya| ki|a i|hin|asi|sa |ch |tac|sin| pa|agt|tap|ano|gob|gts|nas| an| ch| as|hig|on | to|ago|cha|ish| na|obi|bie| za|sir|lli|ko | ya|niy|noa|igo|ria|ier| ic|ota|hiy|npa|pi |gor|vat|oa | is|och|iri|ato|pay|ayo|sh |rit|kin|nat|hir|ero|a g|pat|pch|s t|mag| ko|hid|o v|may| it|iat|tak|sar|rag|a n|ova|in |zad|ist|api|xar| yo| ts|nag|hia|inp|hil|ava| mi|oni|o t|tat|a p|ros|osh|a y|ir |pan|kor|mac|o a|adk|to |i k|ona| sh|r t|ako|na |kiy|is | tÃ¡|sho| pc|sht|i v|yan|rak|i p|tox|oxa|kam|asa|osi|ill|yot|azi| iy|nia|ora|iar|idi|a c|lin|s v|din|m z|aha|tay|i i|yam|azt|siy|zta| ap|hta|Â¿ta|hic|vaz|o i|kis|ad |yas| Â¿t|got|rav|s i|iro|a s|nap|aka|yog|psh|dko|yÃ¡ |yat|ima|iyÃ¡|yac|vap|rar|hto|maz|zin| vi|os | ku|kuk|iyo|vas|mis|kan|og |yar|aki|agi|cht|nic|ap |ayr|kas| da|yri|h a|nad|s k|anp|Ã¡ k|pag|amo|opi|hon|tpa|tov|nta|pac|sam|riy| ar|m v|cho|all|da |go |nak|mon|m t|h t|ias|az |nay|kiz|va |man|asp|yop|yoc|rap| ll|kar|m p|n i|si |tÃ¡r| iz",
                        huu: "na |ena| na| ra|a n|ie |com|ill|mÉ¨e|ana|a b|É¨e |nai|mo |Ã±en| bu|a i| ie|mÉ¨n|omÉ¨|É¨nÉ¨| co|iÃ±e|lla|uiÃ±|aim|rai|ia |a j|e r|bie|fue|a r|e i|afu|raf|imÉ¨|rui|aca|nÉ¨ |a c|aÉ¨ |ga |air|iru| il| bi|no |lle|can| ja|ona|nia| ji|len|e n|nag|de |caÉ¨|aga| ll|llo|nan|É¨ n|naÉ¨| du|uen|acÉ¨| is|soi|una|jÉ¨a|bun|iso|e c|ue |bu |É¨na|ide|o n|ien|emo|ita|aÉ¨r|É¨en|É¨ra|É¨no|raÉ¨|ua | ca|o i|É¨aÉ¨|É¨ca|a u|ail|amo|aÉ¨c|ani|tai|mac|laÉ¨|É¨co| jÉ¨|lan|ano|re |a d|se | dÉ¨|iac|aÉ¨m|ier|ern|oid|jai|É¨mo|obi|gob|jit|cÉ¨ |rno| go|mon|iÃ±o| da|a f|o b|ima| ma| se| nÉ¨|cai|e f|e j|aia|aÉ¨e|nÉ¨e|oll|nua|o j|omo| fe|dui|la |e s|aÉ¨j| ur|edÉ¨|É¨mÉ¨|É¨jÉ¨|fÉ¨n|ere|nÉ¨n| fÉ¨|e d|o d|ome|Ã±o |ama|É¨ c|É¨ma|maÉ¨|fui|ra | ui| fa|i i|uer|due|dÉ¨ |idÉ¨|a l|oia|jir|ira|dÉ¨m|É¨ b|cÉ¨n|ai |É¨ j|aiÃ±|eiÃ±|fac|gam|amÉ¨|dÉ¨c|a g|aid|tÉ¨c|iad|fei|nam|ain| ia|otÉ¨|nom|uid|Ã±ed|aÃ±e|ina| ua| it|jac|log|daj|ise|É¨ d|uil|ri |lot|iÃ±u|Ã±ua|sef|efu|oÃ±e|ais|oga|É¨em|a É¨|anu|uri|oi |taÃ±|ese| rÉ¨|o l|non|itÉ¨|É¨ r| si|uai|É¨ u|É¨ i|eni|ino|aÉ¨n|mai|É¨ga|e a|ata| ju|É¨Ã±o|sia|aje|e b|É¨ru|aie|ado|a s|u j| an|dÉ¨g|rÉ¨Ã±|a o|mui|ca |bue|a m|ecÉ¨| jo|jam|lam|e g|aja|uem|rue|je |dÉ¨e|dan|do |É¨es|ui |É¨nu|nin|nÉ¨r|e u|uia|aac|e É¨| É¨b|É¨ba|uan|ega|cue|mec|dol|dÉ¨n|bum|É¨ne|eda|nÉ¨m|sed|umo|ban|uru|tÉ¨m|oni|bai|i d|É¨a ",
                        cof: "sa |chi|hi |la |man|i t|a t| ma| to|ant|an |ka |nan|nta| ch|ti |to |no | ts|tsa|shi|ila| i | pa|oe |a c|jun|ala| ju|e t|ta |nsh| in| ya| ti| jo| sa|a m|nka|joe|ano|a i| se|hil| ta|e i|a k|a s|a j|e j|ke |le | ke|yan|nun|ena|era|ra |ira|uns| ki|aka|ino|i j|i m|ri |pan|ten|o p|iya|n j|e p|ya |jer|in | je|unk|ken|i p| te|ana|min|san|ae | mi|ari|n m|ach| pi|i s|o m|un |ral|jon|e s|ona|kir|chu|ank|ara|ans|se | mo|ola|a p|o s|de | la|nla|ran|n t|iti|e k|lar|i n| ka|hun|ode|pod| po|anl|n i|ile|piy|nle|laj|tan| na|e m|o t|lak|toe|bi |ajo|ele|are|ayi|pay|nke|ojo|noj|o k|i k| ne|rat|tar|ina|n p|nti|onu|o j|nol|na | so|lac|i y|ela| tu|pe |i i|sel|lae|son|anu|lon|e y|kan|en |on |ton|n k|eti|n s| bo|tit|ika|olo|mi |yal|til|bol|ato|a y| ku|nen|inl|ono|be |ake|kar|lab|re |enk|nal|mir|hik|jo |ech| sh|o n|ati|tak|o i| ja|niy|ent| ni| pe|nch|pa |nue|ue |a l|nte|abe|una|yil|unt|ike|ami|let|mo |ibi|yak|te |umi|tal|obi|nec| we|n n|n y|aya| il|wen|eno|eya|pil|uwa|sen|nto|i e|ura|uni|yar|tob|shu|ape|yap|mok|tae|o y|nar|inu|i b|a n|oka|nbi|ere|huw|abi|mun| me|mer|e l|ama| am|lel|kuw|atu| ko| do|iri|mon|bin|e a|o w|jan| a |lay|i c|tin|kac|wa |ine|omi|jom|uwe| wa|onl|lo |nat| o |i a|esa|ko |u t| er|yib|enc",
                        boa: " ts| me|ne |jcy|e m| mÃ©|Ã­jc|e t|tsÃ¡|Ã© m|cyÃ¡|nÃ© |meÃ­|tsa| mÃº|re | pÃ¡|Ã­ty|ke |Ã³ne|tsÃ­|sÃ¡ |jts| mu|Ã¡ m|hdu|eke|cya|mÃºn|eÃ­j|Ã¡me|mek|yur|yÃ³n|tyu|Ã© t|urÃ³|hdÃº|vyÃ©|rÃ³n|iyÃ³|iyÃ¡|mee|a m|Ã¡nÃ©|aat|ity|llÃ©|Ã© i|rÃ© |Ã¡Ã¡b|jÉ¨Ì| tÃ©|eer|ere|pÃ¡m| pa| Ã­j|Ã©hd|ÃºjÉ¨|Ã±Ãºj|saa|Ã¡ t|yÃ¡ |yÃ©t|iÃ±Ãº|mÃ©p| im|pii|e p|e i|tÃ© |ivy|ane|dÃº | nÃ©|iiv| te|Ã©tÃ©|wÃ¡Ã¡|imÃ­|me |Ã³nÃ©|ri | aa|u m|ats|ma |Ã­ m|hjÉ¨|mÃ­ |urÃ¡|e Ã­| Ã¡ | É¨Ì|jca|Ã±e |ki |yÃ© |uhd|É¨Ì |Ã©pi|muh|i m|rÃ¡ |É¨ÌÉ¨|nÃ¡a|tsÃ³|dur|cat|ÌÉ¨Ì|muu|Ã¡iy|ÃºnÃ¡|ye | tÃº|i t|Ãº m|Ã©Ã©n|Ã­mÃ­|ene|mÉ¨Ì|tÃ©h|Ã¡ p|Ãºha|mÃºh|Ã© p|yÃ¡i|mÃ©Ã©|Ãºna|a t|te |jÉ¨ |du |Ã©jt|ame|aa |Ã±Ã© |uur|naa|vÃ©j|evÃ©|ure|tyÃº| di|tye|iiÃ±|tÃºk|vÃº |atÃ©|Ã­Ã±e|Ã©me|Ã©ne|Ã©nÃº|mÃ© |Ãº t|paÃ±|aam|Ãºne|mÃ©i|mem|tsÃº|myÃ©|kev|ÃºrÃ©|nÃ©h|Ã¡bÃ³|Ã©Ã©v| Ã­m|vye|hi |wÃ¡k|ahd|ijc|ha |yÃ¡h|É¨Ìj|pÉ¨Ì|jÃ¡c|aan|Ãºke|tso|jch|e Ã¡|Ã­Ã±Ã©|Ã¡ne|sÉ¨Ì|een|yÃ¡n|Ã©kÃ©| mÉ¨|É¨Ìa|tsÉ¨|u t|tyÃ©|mep|Ãºiy|amÃº|soj|É¨ÌÃ¡|imy|ÃºnÃ©|dit|Ìam| iÃ±|yu |Ã¡a |ca |Ã©vÃ©|ÌÃ¡Ã¡|aki|yak|Ã¡ Ã¡|e n|eri|Ã¡vy|Ã©hj|jÃºÃº|Ã³me|Ã¡hi|ate|a i|nÃ©Ã©|vu |Ã¡Ã¡v|ehd|Ã©iy|Ã³Ã­t|Ã©tÃº|kim|Ã³jc|pÃ¡n|Ã¡ki|ten|yÃ©i|tu |Ã­iy|Ìjt| wÃ¡|ewÃ¡|mew|Ã¡jc|amÃ©|jyu|Ã¡ll|Ãºme|e a| ii|yam|kÃ© |Ã³iy|meÉ¨|Ã­ll|Ãº p|jty|Ã­mi| Ã¡n|ju |Ã¡Ã¡j|dÃºr|Ìne|sÃ­Ã±|rÃ³m|Ã¡ts|sah|pÃ­Ã­|Ã© w|Ãºhb|Ã©Ã­t|tÃº | iÃ­|É¨Ìn|ner|ÃºÃºn|Ã¡vÃ¡|a Ã­|ÃºvÃº| pi|yan|ehj|Ã¡cÃº|Ã¡rÃ©|vÃ©n|Ã­Ã­Ã±| ij|emÃ©|i Ã¡|Ã©Ã©m| pÃ­|yÃ¡t|tyÃ¡|mÃ©w|chÃ­| wa|unÃº|aÃ±e|Ã¡ i|Ã¡jÃ¡|tÃ©k|Ã©rÃ©",
                        ztu: "ny |a a| a |u u| un| bu|bu |nny|unn|ra | ra| ch|e e|ih | e |a p| pa| na|hr |e c| de|ahr|pah|y r|a b|ee |na |y n|te | te| i |ta |a t| ga|e i|ere| ta|ree|der|ch | ni|i i| p |ga |h r|nn |r g|chi| x |rih|ty | gu|a c|nih|que|h c| ty| ih|i t|ei |aa |x t|y b|ni |hnn|by | qu|uny|p d|oon|yoo|ony|cÃ«h|h n|i c| ny| cy|cy |uei|Ã«hn| cÃ«|e r| c |h p|y c|guu|syo|uun|zi | la|ihb|hby| o | zi| re|ru |ye |ihz|i n|a r|y g|asy|hih|re |a n| pr|iru|zy |hir|e b|taa|e n|n n|zh |a l| li|xi | xi|a s|hzy|y z| ri|ah |y x|lah|hzh| n |y l|h g|le |nye|rta|ar |aar|n r|i d|y q|loh|eh |y t|ida|pro|er |ca |y p|r r|ann| co|a d|r c|ert|h b|hu |a x|ber|ibe|lib|cla|ahz| u |chu|h x|y d|uh | ca|eer| rn|r y|za |daa|nni| s |nah| gy| ll|oh | ru|rnn|a z|la |yee|be | bl|nna|u r| di|aht| eh|yuh|lyu|dec| wb|wby|gax|ecl|gah|lar|bye| lo| sa|hah|ara| ze|ze |c t|ras| in|iny|i l|p b|rca|di |maa|dig|co | rc|lle|jee|o c|blo|y o|h y|yih|ly |i r|ii |hii| mn|ll | rr|i u|hi | st|h q|eje|z b|tej| an|ote|nas|hny|y s|cas|deh|o o|pri|h t|rot|aha|u g|iga| nn|nid|sa | z |tih| yn|r l|ohi|ruh|uhn| le|a i|ng |u n|rel| yb|aly|uni|eli|n s|gui| cr|rre|el |wee|cwe|hty| sc|as |aan| aa|i e| za|ica|a m|gaa|can|r d|aal|n d|mnn|lly|nnr|cri|se | al|tee|yon|ona",
                        piu: "ku |tju|tja|ngk|aku| tj|ang|jak| ng|gku|a n|a t|ytj|any|nan|nga|pa | ku|arr|ana|ya |ngu|ra |nyt|gka| wa|uta|nyi|urr| pa|u k|kul|ka |utj|jut|rra|kut|wan|u n|ing|yan|ntj|ant|a p|ara| ya|aly|upa| ny|a w|a k|rri|u t|yi |pal|ran|jup|gar| ma|u w|uny|yin|gur|u y|ung|ta |iya|nya|a y|tji|ina|wiy|kun|int|rin|la |ula|u p| wi|yun|jun|ru |nta|kar|man| ka|unt|a m|tan|lya|aru|apa|uwa| yu|na |pan|rrk|u m|lyt|jan|juk|nyu|npa|gan|aan|ayi|uru|ntu|gaa|uli|mar|wal|tu | pu|ura|iny|ult|ja |rur|lku|waa|ltj|uka|rka|tin|rru|pay|irr|kur|guw|anp|gu |alu|jin|ira| ra|ama|nku|tak|atj|una|kan|aar|ala|i t|rar|uku|yal|rap|ank| mi|tar|i p|alk|i r|itj|pun|nti|mpa|ri |jur|kap|rrp|jar|nin|rpa|ju |yar|lin|i n|run|pam| pi|iku|api| ni|utu|amp|ni |aya|ata|lir|i y| ti|i w|kit| yi|rtj|rrt|jap|tup|par|ani|kuu|lun|min|pir|aal|pak|ji |ulk|tir|tay|yur|pur|jul|lat|yut|lki|luw|iit|kuy| lu|rku|uya|kin|uut|pin|i k|ati|ayu|atu|awa|may|ini|lpa|ipa|gal|ink|awi|mii|uwu|rak|kaa|lam|iip|nka|jaw|ruk|ipi|iin|kat|inp|ari|yaa|kam|a l|ila|unk|tur|pii|ali|wat|i m|yuw|pip|u l|ita|nak|upu|taw|put|iti|rik|yir|lan|kal|uwi|lur|nki|kuk|aat|uly|yat|ilk|win|uni|pul|kak|wu |tal|alp|pi |nyp|nam|ump|jii|tun| un|lum|ypa|aki|lpi|yil|jil|kik|uul|tat|pik|ulp",
                        cbr: " ca|icÃ«|in | un| ic|uni|Ã«n |qui|ca |cÃ«n|ma |a a|uin|ama|cÃ« |bi |n a| ai|n c|nan|ti |cam|ain|i i|un |n u|ni |a u|i u|i c|tsi|a i|sin|an |nu |iti|ana|Ã±u |sa |a c|bÃ«t|ima| bÃ«| Ã±u|tim|nun| it|abi|xun|tan|Ã«ts| si|ina|anu|u i|nti| cu|ra |oqu|si |inu|isa|Ã­ i|i a|Ã« u| an|ica|car|ara|ati| at| qu|tÃ­ |ia |ban|ncÃ«| ui|ant|ani|a t| ta|n b| ba|nin| oq|rib|n s|a b| a | us|nic|ais|ibi|man|acÃ«|mab|usa|Ã«sa|ern|rno|ier|nÃ«n| go|gob|obi|bie| ra|aqu|Ã«ma|cÃ«s| mÃ«|nia|i b| up|ixu|ocÃ«|anc|una|u c|nqu|u a|iri|cÃ«m|mai|uix|anq| ac|cuÃ«|Ã«nÃ«| nÃ«|upÃ­|Ã«tÃ«|nÃ«t|bÃ« |ish|itÃ­|n Ã±|i o|nbi|pÃ­ |na |Ã« a| aq|i r| im|Ã« i|tÃ«n|non| ap|ari|apu|int|ai |uÃ«Ã«|Ã«Ã«n|ins|onÃ«|Ã«nu|Ã«ni|cua|mÃ«n|air|u m|ibÃ«|anm|sai|a o|ce |cÃ«x|uis|i n|Ã« b|n i|bit|a Ã±|max|sh |its|pit|nmi|Ã« q|rab|upi| is|x c| ax|ami|ian| me|imo|ax |axu| bu|n m| ti| ub|mi |nÃ« |nio| bi|unb|sab|a g| pa|n x| am|xan| xa|rai|n Ã«|buc|Ã«x |uan|pun|n n| in|Ã« c|aca|a m|Ã­ o|i m|a q|sar|hi |Ã«nc|n p|Ã«ta|sam|ucu|shi|can|nix|a s|uia| ma|nac|i Ã±|mÃ«Ã«|uir|mit|nma| Ã«n|ric| nu|ui |n g|ucÃ«|ice|xa |i s|aÃ±u|cup| sÃ«|u Ã±| aÃ±|nib|unu|sÃ«n|oi |cun|ix | ia|n t|rin|tis|oca|nÃ¡n|axa|a e|n r|Ã«cÃ«|n q|Ã« t|saq|nri|unÃ­|ntÃ­|mar|chi|cue|ubÃ­| xu|ioc| en|xbi|mic| ch|cac|uic|iqu|sib|noc| oi|Ã­oc| as| di|dio|ios|imÃ«|h c",
                        mcf: "qui| ch|mbo|id | ic|sh |tsi|uid|ash|amb|bo |o i|Ã«da|que|aid|bÃ«d|ac | bÃ«|ias|dam|ict|sia|bi |cts| ca|in |n c|on |ho | qu|uin|chu|hui|ec |c b|cho| ni|ida|chi|iqu|cac|o c|uts|sho| ut|ido| da|i c|nid|esh|cqu| ta|dai|abi|nqu|equ|ics|ues| ma|Ã«n |csa|ats|boe|tse|ted| ab|mbi|edi|ses|mat|n n|ueq|h c|bit|n m|en |sam|ton|das|ite|di |dÃ«n|ada| ad| na|c i|dnu| cu|idÃ«|iac|a c|es |bad|d a|tab|aba|pan| ai|h n|d d|tia|uiq|shu| pa|oqu|pad|dqu|o a|n a|nÃ«d|un |anÃ«|don|d n|apa|imb| at|h q|da |uen|hoq| mi|ibi|nu |sib|ato|ino|noÃ«|ta |uio|hia|oÃ«s|na |Ã«sh|una|din|ipa|tan|sin| iq|ono|oec|emb|ibo| is|uip|adn| ua|adq|idi|i n|dad|cue|ai |nun|dap|ant|do |c t|ade| nÃ«|a u|bon|u q|hun|nac|nec|n t|iai|no |enq|abo|c c|anu|cai|nue|bid|i a|nti|ic |nia|uec|n p|h a|men|c a| be|ado|nen| co|i m|i b|con|d u|d c|tsÃ«|cui|dac|n i|io | sh|d i|pab| ne|shÃ«|nÃ«i|Ã«id|hit|ito|oen|ebi|sun|h p|mib| pi|aqu|o b|iuc|sÃ«c|ocq|Ã«qu|hie|ucq|ish|n b| am|ies|n u|uai| nu|uqu|piu|inq|i q|iec|nan|nuq|enu|bed|d m| me|api|pim|iap|ui |cuÃ«|te |acn|c m|cbi|h u|uia|s u|hÃ«n|Ã«cq|nai|adt|o n|ueb|hon|dot|uie|den|csh|d b|hid|ene|idt|n d| em|ane|uet|s a|ioc|ets| mÃ«|dec|i u|noa|esu|o y|acb|dob|pen|i t|iad|an |ecq|uib|dan|anq|c q|ota|nda|hub|ubu|osh|pi |icq|ed ",
                        bis: "ng |ong|lon|em |an |blo| bl| ol|man|mo | mo| i |ol | lo|wan| he|hem| we| ma|n i|et |aet|en | wo|rae| ra|we |at | ga|gat|o w|oma| o |wom|i g| wa|n o|sem| ka|t b| ev|vri|evr|n m| fr|emi|sen| no|li |t r|m o|ing|mi | se|ri |kem|eke|m s|oli|g h|mba|i m|tin|e i| me|om |n b|amb| sa|tem|g m|m w| st|g s|ae |eis| ba|mek|ise| fa|iwa|g w|ala|i n|ia |la |riw| pr|bam|fal|g o| na|in |ave|bae|sav|i b|ve |no |fri|lem|asi|se |sta|fas|m b|e h|ti |i s|o f|sin|pro|ap |dom|ido|rid| ia|ed |a m|m m| ta|e o|m e| fo| in|o b|t l| pi|tek|afa|ote|o s|g k|aem|rom|n l|ta | ti|ipo|l r|e m|sae|ens|iti|i k|pol|a b|n w|tae|ara|ole|nar|raf|t m|tri| so|im |nte|i w|g t|aon|res|lse|ols|eta|m h|fol|l b|ntr|ni |sos| tr|ok |kao|gti|ngt|g f|l m|tap|ase|is |ili|wok|ont|ot | re|m f|um |eni|son|aot|a l| en|aso|g l|ete|fro|oa | de|kas| di|i p|nas|usu|gen|ere| pa|spe|pip|get|aed| te|a w|es | lu|o t|m n| la|age|ini| tu|sum|g n| ag|nse|ret|n p|ek |a i|wet|eve|esp|lae|ama|l s|g p|gud|m p|t w|g d|m t|i l|g b|jen|rei|m l|loa|m r|sol|o o|luk|kte|men|ef |aen|aef|pek|m i|are|ekt|n f|i t|o m| ri|ema|nei|int|rot|os |kae|ea |o i|lev|lit|d b|ten|kse|it |sip|oso|s b|o l|rit|eri| ko|lge|ik |i o|as |olg|nom|wol|ren|vel|n t|n s|n r|d l|ono|nol",
                        cic: "at |ann|aka| ka|nna|ya |kat| na|kma|kan|chi|tta|att|nan| ch|t i|tak|a n| ha|hat|oÌ± |aÌ± |ish| is|mak|hoo|ook|ha |i k|aho|hi |ani| ni|nak|a c|ka |mat|alh|itt|akm|a a|ni |sa |ban|nah|sha|a i|cha|oot|yya|Ì± i|okm|iba|a k|i b| it|Ì±ma|na |t n| mÃ³|kaÌ±|mÃ³Ì±|ika|Ã³Ì±m| bÃ­|Ã­yy|bÃ­y|yi |ot |hoÌ±|yyi|haa|ana|isa|ak | yo|hpi|a o| sh|i y|a s|ano|niy|ki |ach|lhp|Ã¡yy|tok|oka| ik|a h|t a|iya|aat| ya|kya|naa|tti| ki|pis| ba|iho|oky| Ã¡y|hmi| im|baa|t h|api|hib|maÌ±|koo|shi|ta |aal|lla|yok|Ì± a|ima|yo | aa|hok|i h| al|cho|ako| ay| oÌ±|a b|oli|aap|nih|t Ã¡| ho|hol|hak| hi|Ì± k|nok|sht|Ì± n|ill|ihm|nik| at|ahm|li |aya|i n|iha|oko|sso|Ì± h|lli|la |tto|yah|aak|okh|kha|ikb|ila|aff|ffa|mal|too|mi |pi |iss| an|moh|lis|k m|hik|pa | sa|ala|i s|hto|imm|oho|a m|t y|i c|law|t m|hih|haf|tih|ali|fil|okf|kfi|aha|t k|iyy|o i|ich|ppa|koÌ±|mmo|tib|aac|amm|Ã¡nt|i i|nta|lik|ikc|so |aww|wwi|och|kch|aaf|yaa|kni|nch|aa |all|nal|sal|ksa|oks|him|kbi|Ì± y|ayo|o h|o n|akn|hiy|mma|k y|pii|ksh|iis|nom|lhi|omp|Ã­ll|tÃ­l|ttÃ­|ato|ma |pil| iÌ±|ayy|no |Ì±na|Ì± c|ikm|opp|oba|hÃ­n|yam|lal|yop|o k| ib| oo|mmi|yyo|wi |mpa|fok|kmo|sho|fa |iks|lak|mik|kak|afo|mah|tim|hma|ota|hÃ¡n|man| ma|pac| ih| aÌ±|ith|oto|lht|imi| ap|ohm| ta|hch|bit|iÌ±l|hip|hÃ¡Ì±|t t|kay|han| os",
                        csa: " ts| le|â€ ÌŽ |ia | ki|jmo|kio|lej| ne|os |ou |ne | li|ejâ€ |sou|oo |tso|sia|tsa|jâ€ ÌŽ|io | ju|e k| ta|ÌŽ t|le |a l|uu | jm|sa |kÃ¶ |ii |tâ€ ÌŽ| kÃ¶| tâ€ | ni|mos| ku|o t| mu|u t|joo|ojo| ma|moj|asi|â€ Ì | mo|o l|mo |tas|ni |a t| e |ijm| si|i j|aka|mak|ios|oÌ± |e t|kal|s t|muk|uku|kuu|i k|a m|u l|a n|o j|a k|juu|xii|lij|e j| ka|o n| ti|a j|ta |u k|s l|i l|alo|Ã¶ m|ua |e l| mi|nia|s k|li |s n|loo|a s|e m| re|ixi|re |lii|o s| jn|mix|na | so|soÌ±|sam|u n|i t|i m|chi| ch|aÌ± |s m|Ã¶ n|o k| sa|Ã¤s | s |ÌŽ j|nio| ij|ÌŽ l|kua| i |au |jni|u e|aa |ito| la| Ã­ | ja|hit|jus|jmÃ¤|soo|e e|gÃ¯ |ama|s i|Ì t| na|too|e s|a r| rÃ¼|ti |ÌŽ k|jua|Ì± t|jâ€ Ì|e i|nÃ­ | ej|ejm|ÌŽ i|o m|ija|s j|isi|jÃ¯ |lis|jau|Ã¶ j|Ã¯ k|Ã¯ j|Ì± n|guâ€ |uâ€ Ì|Ì± k| gÃ¯| in| ji|Ì± l|uso|kaj|ooÌ±|kur|u s|ÌŽ n| nÃ¼|mug| il| is|jna|mÃ¤ |u i|nÃ¼ |ugu|Ã­ t|a i|aâ€ Ì|nei| jÃ¯|s Ã­|ini|u m|jij|ue |i s|laâ€ |kuo| xi|aÃ¤s|tin| sâ€ |e n| ek|Ì± j|u j|s e|i n|Ã¶s |ma |jaa|ale|inÃ­|kue|kia|jup|upi|Ã¼s | ik|ajm|mâ€ ÌŽ|ala|la |a e|lit|itâ€ | Ã¯ |o e|as |s r|rÃ¼ |Ì l|sÃ³ |o r|iÃ­ |Ã­ n|o i|kÃ¯ |eki|Ã¼ l|ila|es |piÃ­|moo|uo |Ã­ l|urÃ©|jue|iso|ka | kÃ¯|lak|ei |Ã¼ n|Ì s|sâ€ Ì|iÃ³ | jo|sâ€ ÌŽ|oÌ±o|Ì±o |i g|ioÌ±|Ì j|Ã©e |rÃ©e| el|ika|a Ã±| Ã±i|ima|Ã¯ t|aaÌ±|ÌŽ e|maj|â€ Ìs|Ìs |meÃ¯|Ã¯ l|usÃ³|amâ€ |Ã¤Ì± |Ã±Ã¼ |taÌ±|Ã±aa|laj|kaÃ¤|Ã¼ e|oÃ¶s|lig|ajâ€ |Ã¼ s|Ì± i|ts ",
                        mcd: "in |an |fin|tir|iro|nan|qui|n n| yo|n a|on |uin|hua|fo |ara| na|ifo|ahu|ofo|ifi|ati|non|n y|cai|sha| fu|har|ato|ant| no|ain|ran|oqu|ai |nti|sca|tsa| sh|aif|huu|fut|n i|oan|sho|uts|to |ash|can|rof|ora|oma| at| ma|ma |hon| cu|n c|oin|inf|shu|tif| ah| ra|nfi|n m|aca|pai| is| hu| ni|yor| ic|ra |ono|nfo|iai|foq|foa|un |rom|yoi| ca|ish|yon|fof|uat|cus|rat| as|nia| ts|mai|o n|asc|afi|nca|fai|n f|rif|ica|ton|ano|iti|onf|cas|ama|roq|noc|ush|coi|ana|uun|san|cha|man|hu |unu|o i|o a|cah|n s|oti|o y|afo|n t|iqu|a f|tso|ari|anc|oco|nhu|i a|ina|a n|tan|anh|nif|ori|soa|ri |ani|usc|isi|no |cun|anf|apa|aqu|mat|i i|ino|maf|ian|ima|n r|inr|nra|raf|fot|ico|i y|ro |i n| ta|ito|si |o f|cat|o c|uua|a c|anr|uar|hin|ait| fi|n h| an|nri| ch|ata|fia| in|ui |afa|nqu|shi|ich|nfa|ti |api|o r|inq|i f|hac|i c|co | oi|uu |a i|tap|ofu| mi|iya|a s|ipa|sa |oia|a h|fun|acu|pim|han|hum|raq|uta|ans|rin|uaf|uan| ar|ua |yam|rac|cof|nta|ca |oit|n o|for|i t|aic| ai|o m|ami|yaf|ras|iri|uap|u a|u s|uas|a r|mis|i s|umu|nus| ya|anu|o t|nsh|nma|noa|aiy|a y| pa|sma|aiq|ia |ann|nor|ura|asm|asi|its|mit|uma|uti|nno|isc|ufo|u f|chi|a a|o s|a t|o p| iq| it|uai|ofi|mur| mu|not|min|ram|npa|nuf|uca|fom|uhu|sin|sac| un|tor| ac|inc|nun|nu ",
                        amc: " ja|qui|n j|mun|jat|in |ato|uin|hqu|imu|tim|ui |can|on |to |un |unh|ati|nan|aha|o j|i j| cu|ama|jau|an |hin| yo|nhq|aqu|a j|vo |au |yam|nqu|anq|cuz|ina|uza|ova| qu|xon| sh|jah| hi|ton|hca|u c| jo|hnu|uih|uca|ohi|oni|yoh|tza|anp| ha|utu|pu |n n|nuc|npu|anh|jon|ica|cun|ja |nut|n h| nu|ano|nhc|shi|mah|hax|hai|aya| na|utz|xan|ovi| vu|non| tz|ihq|ahi|n c|ivo|amu|ara|vi |mat|vin|har|ax |n y|iyo|tzo|ovo|nhn|iri|niv|nov|u j|zov|yoo|uiy|iqu|o h|uni|n v|hi |unu|azi|raz|ono|riv|ivi|hir|hon|ha |acu| ho|uir|ona|haq|cat|o c|axo|zan|ani|sha|nuu|vut|jam|i n| co|uun|ric|chi|raa|aun|n q|noo|yov|zi |ira|tun|hap|ti | ra|nti|oha|a h|apo|han|n t|i v|i y|ann|vau|yon|nha|nin|nxo|i q|tzi| va|ihn|iha|inh|nya|va |naa|oxa|ixo|ni |aay|vac| vi|oma|oon|ana|aat|n s|oo | ca|vaa|tut|ait| ch|iro|ito|i h|i c|ohq|hit| ni|zat|van|rom| no|ima|tan|mam|nah|nic|avi|man|maq|ya |zti|za |nna|cov|oov|n d|nix|zah|onv|jaq|i t|oya|hox|oco|apa|coo|izt|atz|zin|aho|ant|u h|o y|iti|ca |o s|ini|ra |vih|ino|nvo|a n|cav|ori|hiq|pan|a c|rah|ich|uma|iya|caa|aah|oca|nno|viz|nmu| ju| mu|voh|a v|o v|o n|onh|ava| de|ham|i s|cho|ech|hih|nma|x n|ora|uya|os |itu|uno|hic|zqu|hav|axa|zax|noh|tiv|nih|sht|ish|tir|rec|ere|der|nri| j |jaa|ahq|u n|una",
                        amr: "hua|dik|ik | hu| oÌ±|oÌ± |da | di|a d| ne| no|ka |k o|Ì± n| ke|ne |ken|nog|eÌ± | ka| da|po |hue| eÌ±|a t|ti | ti|oeÌ±|Ì± e|pa |dak|npa|yo |ya |enp|e k|ue |taj|aj |ayo| on|e d|pi |a n|poe|ere|ada|o h|a h|a k|iri|uai|air| ay|pak|nop|aya|opo|uad| o |a o|ara|but|ahu| po|oÌ±n|atb|rat|tbu|nig| ar|gda|o k|ogd|ak |i k|ri |on | ek| pa|o n|Ì± d|i o| ma|o o|khu|a a|ate|eka|gob|end|e n|obi|rno|ern|ier| go| e |bie|nda|no | ko|e a|kat|koÌ±|Ì±ni|akh|bay|nay| ta| ba|ut |mad|k k|e o| iÌ±|kdi|a p|epi|toe|ker| i |tep|ro | ja|a e|re |i p|iÌ± |i n|k e|i e|oro|o e| to|uab|eÌ±p|eÌ±y|eeÌ±|Ì±y |k i|en | na|e e|kno| ku|uap|na |ea |apo|abo|Ì±ne|Ì± k|nen|man| or|bok|i h|rek|te |nma|oke|e h|ado|og |doy|gti|oya|uea|e p|anm|pee|okd|mey|Ì±po|a i| ok|ihu| be|si |ig |pok|ika|okn|ta |o t|tih|akd|uak|t k|ont|api|uas|gba|a b|akp|ogb|aÌ± |ogo|ke |o m|adi|eÌ±n|igt|nta|kud|ana|kpo|toÌ±|g a|nok|asi| mo|epo|y k| ap|kan|kah|baa|k m|jah|aka|nep|ati|ok |ba |Ì±me|ua |o a|dar|aa |uat|ent|ari|oÌ±m|ia |oka|e b|goÌ±|jak|ria|ena|kup|Ì± o|i t|Ì± h|ey | er|n k|ek |mo |uah|me | pe|akn|pop|aba|a m|n t| ea|n b|utt|tto|uda|ota|kik|kna| ni|ett| et|be |ay |ike|ato|eno|o p|Ì±pa|i a| ya|e g|i g|daÌ±|nba|eta|apa|akk|j p| ed|n p|nhu|onh|j d|opa|j t|tta|ehu|o d|gka|upo|rit",
                        cot: "que|aqu|tsa|aji|aca|ca |oca|tsi|nca|ame|ets|cam|eet|mee| ir|nta|ue |i i|gue|sat|jia|a a|uet|int|qui|ica|iro| an|i a|e a|mpa|nqu|ji |ant|caj|onc|ata|iaq|taq|j i|e o|ari|ats| in|uer|ate|ri | oc|ti |pae| ca| te| on|emp|eti|uem|tee|ae |shi|aj |a i|its|san|te |ee |agu|ro |eji|can|ani|taj|sa |e i| ma|tej|nts|tac|cat|eta|isa|anq|iri|ita|ati|ero|caa|iqu| ai| aa|sip|aas|iac|pa |eri|ipa|ais|apa|eca|nte|maj|hoo|caq|cho|ooc|inc|o a|anc|asa|no | it|igu|a o|ash|aat|ira|maa|ano|aco|ama|nin|par|aja|tan| ia|ato|uin|uea|i o|ui |gui|a c|i t|sic|equ| ar|ava|si |epa|jir|a t| qu|ogu|tim|ent|uej| am|pap|ron|ota|uec|cac|tat|nch|uit|ima|aro|avi|uen|ite|o c| ag|e t|e c|inq|ont|imp|jit|iji|opa|ine|i c|aaj|vac| i |saj|ane|ion|nti|a m|to |eje|iat|cag|roc|ric|tic|rog|tio| ac|hin|eat|cot|paj|ej |tep|ara|tas|gar|api|egu|jaj|jig|iga|ana|i m|jet|rig|ish|ram|ija|eja|jan|nij|ea |aac|hit| co|tar| ch|tap| at|niq|oqu|vin|aav|cav|ini|man|nea|siq|oro| ic|amp|tag|ove| ta|o i|mat|nor|gon|nej|ono|coj|jaq|men|o o|taa|rop|sim|rot|tav|oji|j a|ran|pat|coa|uep|enq|ueq|iti|oni| pi|ago|are|ria|ime|ote|ave|i q|saq|uis|nec|ueg|jai| as| ya|ten|pit|naj|pan|veg| sh|ra |o t|ij |nco|ega|rov|sam|car|rim|mpe| ti|ots|a q|hij| ot|nit|e m|tem",
                        ajg: "wo | a |yi |o a|mÉ› |gbe|amÉ›| yi| wo|le | É–o| le|É–o | nÉ”|nÉ” |o e| ko| am|É–e | É–e|be | ci|É” a|e e| sÉ”|É” e|do | gb|e a|É–ek|okp|wi |tÉ” | en| ej|kpÉ”|eju| eg|i a|É› a| kp|kpo| ny|egb|a n|É” w|eyi|o É–| ey|agb|sÉ” |nyi|a s|pwi|É”wo|kpw|e É–| al|enu| É” |pok|ekp|cÉ› | ag|nu |etÉ”|bet|ko |acÉ›| ac|lo |an |o n|ci | vo|É” n|i É–|i y|nyÉ”|u a|i w|odo| es| wa|ji |alo|i n|wa |pÉ” |i e|kod|É”n | do|ese|to |iwo|É›É–e|mÉ›É–|se |ciw|yÉ” | mÉ›|nya|ju |i l|É› k| Å‹u|o k|a g|sÉ›n|e n|Å‹u | lÉ”| ji|awa|o y|e k|É› n|tÉ”w|lÉ” | e |na |a k|umÉ›|n a|vo |eÅ‹u|a É–|de | de|kpl|ukÉ”|É” c|ple|ovo|uwo|i d|vov|omÉ›| ed|É› e|É” É–|edÉ”| nÉ›|eka|waw|nÉ›n|É›nÉ›|É” l|i k|É”nÉ”|nÉ”n|É”kp|É› y|o v|kpa|É› l|a y|ya |n e|É” d|sÉ”s| ka|dÉ”n| nu|o l| sÉ›| na|É›n |Å‹uk|shi|o w|gbÉ”|É” g|o j|u l|a w|eny|eÉ–e|hwe|lan|i s|gan| to| be|É”wa|wÉ› |e s|É”mÉ›|wan|a v|a e|gbÉ›| su|o g|e l|É”nw| je|gba|o s|a l|É” k| dr|ni |kÉ”n|vi | ni| go|e w| hw|pÉ”k|a d|vok|É› c|nwo|alÉ”|we |o d|u É–|a t|nsÉ›|in |É›wo|bu |i c| cÉ›|uÉ–e|É› É”|iyi|iny|o p|ana|gom|bes|e h|swÉ›|a a|yÉ”n|e g|jum|uku|u c|any|ka |É–eÉ–|u n|fan| ak|nuw|É›bu|juk|a x| xo|pla|xwe|É”É–e|kan|i j|e c|mÉ›b|hi |É”nu|uny|e d|je |ubu|É”bÉ”|wen|bÉ”b|awo|o É”|mÉ›n|n c| xÉ”|dÉ”w|i t|atÉ”|e y| dÉ”|n k|so |akp|esw|dÉ” |leÅ‹| pl|yin|ega|usu|owo|É” y|lÉ”w|iÉ–e|bÉ” | et|ann|sÃ³ |nmÉ›|É” t|É”sÃ³",
                        arl: " na|a n|iya|ani|ini|a p|na |aja|pue|ia |a m|ra |ya | ma|naa| pu|qui|ish|aa | pa|ara|aar|cua|nu |uey|shi|eya|ari|a s| ta|a c|ano|nia|a t|a j| ji|no |yan|ana| qu|ja | ni|aca|ria|iis|jiy|nii|niu|aji| ca|sha|hiy| se|ta |ata| cu|ri |onu|iti|aaj|a q|maj|nin|u p|jaa|uet|san|pa |tam|iji|uaa| mi|jan|ni |hua|que|unu|mii|man|niy|pan|car|ua |jin|uaj|etu|tun|aat|i p|yaj|uhu|esa|ojo|iri|equ|tia|can|uin|ocu|seq|mon|amo|i n|saa|juh|tio|mar|asa|o n|nis| ja|iur|ioj|han|uri|osa|iqu|a r| sa|aqu|uan|hac|ura|jio|ian|jua|anu|te |yat|u n|nio|iu |uia|iaa|io |jia|ama|iit| so| po|oon|ios|taa|oju|nur|u j|riy|iij|ant|i m|ses|nte|ji |sa |enu|ucu|ca |iaj|soc|i c|o m|o p|noj|aju|uiy|jii|poo|iir| ju|niq|iar|oor|hit|ues|tas|nij|o j|uis|ori|ere|paa| to| no|uir|u t|art|acu|osh|tes|jon|nti|ati|yac|jos|ora|naj|ash|oji|mas|sac|maa|ami|tar|tij|ree|toj|cam|ate|uer| ru|apu|oni|yar|ota|rac|aan|jiu|yoc|i s|rio|jor|iin|ont|i t|tan|aj |o q|ias|are|uju|era|joo|rin|ase|u m|ohu|ejo|e n|uit|cas|uac|riq|too|e s|eyo|tap|eto|e t| sh|his|rer|iuj|cun|yaq|esh|yas|nuj| re|uji|rup| ti|rta|aso|nar|rej|uuc|u c|ete|uta|nuu|uen|rte|uar|ion|hin|coj|sen|paj| nu|o c|uii|tis|uqu|oot|mue|j i|ii |i j|asu|ioo|ee |caj|raj|aru|o s|sam|saq|rii|aje|haa",
                        ppl: "an | ta|al | te|pal| gi|chi| ti|at | mu|it | ne|t t| pa| ga|tay|ay |eli|wel|ne |wan| wa|ga |e t|i t| we|et |hiw|a t|uch|tiw|li |muc|a g|hi |su |met|tik|ina|t g|iwa|n t|lit|gan|git|teh|eme|iat|hem|ehe|ipa| ya|ech| in|gic|ich|egi|ia |esu|tia|tec|tes|ati| ma| ip|wit|a m|wat|t w|i g|ha |l t|yah|l n| se|aga|aha| tu|uk |ti |neg|u t|iwi|gen|a w|cha|pia| ge|n g|nem|emi|k t|t m|na |han|aht|hti| ye|l m|nat| u |a n|xti|te |ine|n w|wa |se |y t|ek |tuk|yek|tah|iwe|en |gip|a i|ita|y g|i m|ixt|t p|upa|n m|mat|ama|ik |gi |ya |ma |tag|mun|t n|agi|ipi|tam|y y|a p|n p|mag|i n|gin|gix|uma|mi |tal| su|l g|e g|l w|hta|awi|tup|tim|n i|imu|une|k s|wia|ta |cht|u g|i w|ach|i i|iwt|n n|ka |ni |atk|ak |t i|mum|mac|tka|i p|t u|ikc|mui|htu|ikn|y i| ag|kch|tig|uli|eng|pat| uk|ima|gim|tat|mit|kti|age|teg|nga| qa|dat|puz| da|tan|kne|i y|eza|u y|a y|gez|uzu|u w|tin|aya|wtu|iga|qak|lwi|ilw|iht|y m|k n|gat|uin|za |tul|ikp|may|awa|uwa|e p|l i|n y|ini|iti|ewi|wi | ix|e a|ami|tit|ukt|n s| ch|mup|lew|taw|ah |ite|u p|kpi|a s|net|e s|ale|wag| nu|gah|iw |igi|ani|u a|e m|tu |k g|gam| na|una|gal|ikt|muw|yaw|zua|uat|a u|k m|e n|lia|use|wti|nan|ame|k p|u m|alm|pa |l y|nex|iaw|t s|k u|san|mut|lme|l p|mu |ezi|epa|me | pu|axt|yuk",
                        nku: "Ê‹n | lÉ›|É›É› | bÉ”|lÉ› |Ê‹Ê‹n|bÉ” |É› h|an | yÊ‹| hÊ‹| ma|hÊ‹n|yÊ‹Ê‹| ya| hÉ›| pÉ›|pÉ›É›|rÉ› |aa | hÉ”|hÉ” |É” y|É©n |aan|ya |É›rÉ›|maa|É› y|a b|n p|É› b|n y|n l|ara| sa|wÉ›É›|ra |a y|n b| wÉ›|n w|n m|mar|É› l|n h|nÉ©n|hÉ›r|gÉ” |nnÉ©|É©nn| gb|a h|É” g|kÉ” |É› m|n d|â€™n |É” l|hÉ› |É©É©n|É© h|Å‹É” |É” b|É” h|rÉ© |ri | ha| yÉ©|gbÉ›|bÉ›É›|haa| wÉ©|wÉ©n| ko|saa|yÉ©n|a l|É” s|n k| dÉ©| ji|nÅ‹É”|ori| mÊ‹|dÉ© |aak|i l|a m|É” m|É” n|kor| ba|mÊ‹n|É›gÉ›| rÉ©|sa |i h|a w|akÉ”|Ê‹nÅ‹|bÉ”É”|nan|n s| rÉ›|É”gÉ”|Ê‹nm|É› j|nm |aba|É› s| a |É” r| ti| da|É› p|yaa|É” d|nÉ©É©|É› t|É›É›É©|ji |goo|ooy|oo |nÊ‹Ê‹| nÊ‹|oyo|É›É©n|n g|lÉ›É›|hÉ›É›|É” k| nÉ©| bÉ›| gu| bÉ©|yÊ‹g| ka| gÊ‹|yoo|É©go|ka | É©g|n t|Ê‹nn|gÊ‹Ê‹|taa|É©nÉ²|gu |o b|a t|nâ€™n|É© b|aÉ© |Ê‹nâ€™|bÉ›r|É› k|laa| ta|i b|yan|sÉ”g|É²É” | tÉ”|nkÉ”|É› d|nÉ²É”|ba |É” p|a r| la|m h|hÊ‹Ê‹|ogo| tÉ©|nÊ‹n|É›Ê‹n|tÉ©É©|dÊ‹ |É© y| dÊ‹| ab| dÉ›|dÉ› |gÉ› | kp|É” t|É”É” | mÉ©|go |mÉ” |É©la|bÉ©l|ti |a g|ank|É› g|É” z|a s|nnÊ‹|É› n|É©nÅ‹|sÉ›g|a a|É›É›Ê‹|n j|É© l|daa|bii|i d|iin|in |É› É©|É©nk|nka| tÉ›|tÉ›t| ja|jab| le| bi| du| na| si|si | zÊ‹|É›tÉ›|tÉ›g|zÊ‹n|É²an|nÅ‹m|ii |É”É”Å‹|É©É© |u t|yo |ugo|bug| bu|Å‹mÉ”|É”Å‹É”|Ê‹gÊ‹|baa|Ê‹gÉ”|jin|gbe|n Ê‹|ga |ina| jÉ©|jÉ©g|É©ga|gaÉ©|a d|oi |lag| go|i a|dan|tii|mÉ©É©|É” w|kaÉ©|a n|gÊ‹ |É” j|tir|iri|beg|ege| zi|zik|ika|par| su|ko |o h|n n|o w|É”É© |n É©|akâ€™|â€™rÉ›|i y|É” a|ban|oni|aga|Ê‹ m|É›â€™n|gÉ›â€™| wÉ”|wÉ”É”|o l|É”rÉ©|gus| yi| yo|yog",
                        cbi: "tsa| ju|in | de| ba| ts|ain|bai|nu |aa |naa| na|a t| ti|ya |chi|ve |u d|la |u j|nts|chu| ch|a b|e t|u t|hu |san|dee|ba | ne|u b|ne |jun|n t|nge|sa |a n|hi | mu|ang|uu | ke|tyu|unt|enu|ech|anu|a k|a m|ach|ti |eec|cha|ala|yu |Ã±u |lla|uba|tya|a j|hac|ju | ya|en |tu |ave|nuu|eta|gen|uty|e n|jut|n n| mi|saa| ma|uve|inu|det|a d|ren|aju|u k|unu|ill|u n|juu|tal| ty|ke |ken| ta|aaj|aat|shu|hil|are|i m| pa|tav| ka|a c|ra | tu|sha|u c|mub| ki|tin|tse|uÃ±u|sen|ata|enm|min|ha |ush|ity|i t| ve|i k|mu |eju|ura|ika|nmi|n m|u p|aan|ude| ku|esh|dej|i d|ash|muj|di | bu| en|and| ur|ka |n j|ake|ee |kee|ent|e m|taa|ge |aÃ±u|i n|bul|vee|era|nch|u m|a p|hun|i b|juv|aak|juÃ±|i j| nu|ike|nde|aka|aya|mit|paa| i |a u|ale|kut|ndy|ind|umu|awa|dek|bal|eng|n k|een|kaa|den|tad|ehi|e y|mij|kar|sat|a i|ngi|ai |ma |was|ull|e d|itu|uin|lu |ara|end|e j|jtu| su|ija|iik|uwa|sar|e k|ela| la|dya|eke|iÃ±u|a y|eet|shi|kik|ate| pu|uud|lan|n d|kui|uka|tye|dep|a v|n y|iba|yee|laa|de |ndi|ees|kay|tit|Ã±ub| uu|e e|man|adi|ure|eÃ±u|e v|ats|ety|epa|sai|yuv|tus| pe|aty|nda|ire|uta|ula|a a|le |aaw|yan|jch|mat|nuk|ujc|u s|uti|e c|yai|kii|emu|uus|und|jud|udi|iya|eve|uku|ayu|ati| lu|i c|iku|buu|pa |jeh|tun|u u|anc|ulu|uje|re |ade|maa|utu|i p",
                        mxi: " de|e l|es | la|e d|ne |ion|de |la |os |ent|to |tio|one|te | in|tat| pe|per|le | co|a p|a l|les|ale|ret|as | a |eto|ate|dre|ati|o a| dr|re | e |nti|tos|e e|na |ia |ta |ona|tia|el |s d| le|nte|ant|men|e a|in |ene|que|con| to|a s|tot|ien| pr|ers| et|et | ti| li|res|ita|s e|e p|rso| qu|tie| el|a t|son|ota| re|ber|ess|e c| au|er |e s| lâ€™|sse|o d|pro|nat|a c| su|ue |ame|cti|s a|lib|se |a d|omm|nt |e i|ere|s s|sua|e t|ato|tra| se|nes|era|nal|bbe|a e|com|ual| ad|ua |ter|rta|sta|nen|ica|rÃ  | al|s p|t a|del|ele|nta|ibb| un| dâ€™|ert|ser|nto|ect|las| na|tes|a a|ond| pa|iss|ra |are| si|s i| so|so |o e|est| ne|erÃ |ad |ssa|io |una|o i|aqu|au | ci|ote|int|ass|s t|s n|sso| aq|ntr|pre| di|ssi|ias|man|aut|e q|mo |s l|ali|nos|ran|ial|rat|no |cun|gua|ont|n l|oci|mat| st| fo|tan|cia|o s|ons|ten|lit|ndi|vit|iti|soc|s c|ciu|den|sec|e n| ma|ria|oll|lle|uma|hum|cla|egu| es|t i|tiv|ata|oto|t d|o p| po|fon| mo|on |tas|ver|ind|cas| ac|a r|ndo|par|tal|o t|t e|ore|ura|ca |n c|nda|dic| tr| me|alt|a n| hu|a f|e r|rec|n e| as|ieu|sie|act|o l|uno|ori|mmo|ena|tor|sti|nsi|cto|ecu|iva|sce|unt|r l| ca|ide|tri|do |nio|lo | eg|eco|ime|l s|a i|ues|lâ€™a|eta|rse|un |nit|nde|cat|s f|rot|ari|ist|qua|a v| fa|rar|als|sat|lse|val",
                        duu: "ngx|ix |gx |ing|ax |ang| ni|nin| av|ngf|anv|gf |x n|ev |uan|x a|yv |anx|nx |lix|lf |alf| le|lev|zan|x s|vli| al|jua|x j|ong|x l| ju|nvl|avz|vza|x z|ngv|f a|ux |v a|yan|uiv|sax|x m| gu| sa|gui|xin|f j|x g| ma| ji|zyx| zy|nv |iv |x c| to|if |uix|yxy|xyy|yyv|eng|vji|ox | xi|v g|ov |ivj|ef |f s|x t|ren| se|yox|f m|px |opx|syv|v n| sy|nf |top|env|jia|myv|hui|v l| ef|aix|sex|f g|v z| my|cax| cc| go|inx|six|cca|xhu|yx |max|hov| zu|vna|yvn|v m|iax|nxy|ian|v t|x b|jix| fa|man|enx| mi| ny|jin|v c|jyo|x x|gon|zon|gv | re|xxi|f n|nyv|f c|unx|xji| si|nax| zo|exh|mix|xya|yix| bo|x e|f l|v b|jiv|xyu|v j|xia|v s|ex |sen|x d|dov|ixy|lan|x p| ta|bix|gxz|xyi| jy|pin|av |zun| ga|faf| bi|bof|oxy|jie|enf| ca|zix|vxi|anf|yua|eiv|zux|x h|x r|tai|wei|zzu|xzi| ce|avn|uf |cen|can|x y|v x|x f|vsi|f t|yux|aif|avl|f z|zen|af | zz|v f|f x|bya|lya| cu|nxz|hux|xzo| cy|vla| ho|f p| da|iex| ly| gy|cux| we|gxj|oxx|vny|xjy|nvh| yi|nyx|den|fby|nxj|cym|ymf|ixb| an|fli|ton|gyx|lun| lu|gvd| pu|puf| hu|vde|uxz| co|vre|siv|uvl|yf |avd|afl|inf|gvs|f f| la|vho|ung| pi| py|ofh|fhu|ivx|mfd|mf |dyf| xu|f b|min|wux|ofz|wan|vma|pyv|xse|dan|x w|cuf|uxj|ufb| fu| do|xua| ze|v e|v r| by| ko|xka|xdi|zui|xza|jji| jj|din|x k|byo|tx |gai",
                        cfm: "ak |ah |nak| na| th|an |ng | si| mi|in | ah|ei | in|eh |seh| pa|h s|the|ise|ang|sis|hei|n n| le|si |i n|am |ih |kha|ii | ii|awl|ram| a |le |i t|paw|ing|h m|k a| ka|ung|din|um |wl |n t|mi |en | kh|nei|thu|at | ne|h t|kan| as|g a| ma|i a| cu|uah|tha|i m| ra|asi| di| um|un |nun|h h|lun| ih|al |ai |nga| da|n a|h n|hu | za|hat|gah|n s| hl|a s|t i|p i|mai|et | hm|lo |n m|m n|kip| lo|k n| hr|n z|len|ip |uan|k i| tu|mik| ti|k t| su|iki|zal|h a|i c|vo |hmu| co|k l|ale|dan| an|zet|awn|ovo|haw|cov|pak|i h|aan|min| hn|tua|hra|ar | ze|cu | tl|inu|k k| nu| te|i i| ru|rua|phu|hla|g p|akh|n k| aw|im |uh |tlu|m t|m h| ci|mua|i p|sin|l a|lei|n h| ba|ui |l k| la|han|ban|g t|awk|wn |wk |n p|h d|sun|daa|eih|l t|mip|cui|l n|n l|h c|sua|ha | ng|hua|k d| sa|h r| ph|h z|pi |om |k p|hal| hi| ca|h u|k c|hi | zi|ian|hle|i l|u a|maw|m p|il |n d|ual|h i|ngr|rep|i z|m l|law|hun|i s|n c|o k|gre|h p|ep |thi| ki|ek |duh|kom|ipa|a t|zir|n i|k u|h k|lah|i r|l i|o i|o t| se| ta|a h|el | bi|rh |m a|g i|inn|m m|u r| fi|sim| du|i d|awi|r i|ir |par|ran|u t|t n|l h|n b|a u|san|ti |aw |iou|h b|ida|iar|thl|hna| hu|h l|cio|no |tia|pa |a k|g d|hri|ik |awh|wh |i k|e a|tel|ten| ha| zo|hlu|uk | un|u h|uno|e m|hne|fim|k m|wi |pum",
                        fat: "a n| wÉ”| no|no | dÉ›|dÉ› |na |dzi|mu | a |nyi|ra |a É”|wÉ” |ara|a a| ny|yÉ› | mu| na|bia|iar|a w|an |ndz|ma | bi|ho |dze|e n| ho| nd|oa |noa|man|ino|zi | ob|yi |zin|obi| ne|ne |a d|u n|a m|yim|ana|ama|tse|n n|o n|ze | an|É” n| mb| am| hÉ”|É› É”|É”n | É”y|É”yÉ›|É› o|n a|aa |nya|É”ma|yin|bi | as| n |hÉ”n|naa|É› n|a o|É› w|ye |o a|mpa|i n|o m| on|do |ina|imp|bÉ” | ma|É› a| do|e a|tsi|pa |nny|se |a h| É”m|i a|ua |i m|É”wÉ”|aho|o b|ase|n e|i d|É” d|nye| ba|edz|eny|o d|u a| wo|uw |kuw| ad|É›m |kwa|wan|abÉ”|É”dz|ets| É”w|m n|mba|uma| nk| ed|ya |sen|nam|odz|mbr|o h| fa|adz| kw|o k| yi|a b|am | en|dwu|wum| É”n|É› m|o w|gye|asa| ts|É› d|ba |nko|ia |hyÉ›|w n| dz|ena|som|onn| so| da|kor| nh|fo |amb|w a|so |É”ts|bra|sua|i h|hod|É” a| ab|fa |o e|sa |m a|wÉ”m|set| ku|om |fah|ban|wÉ”a|a k|sia|yam|ee |er |any|e m|a e|ayÉ›| gy|ow |o o|É›É› | bÉ”|fi | nw|nhy|r n|sÉ›m|ony|ada| ns|nwo|oma|É› b| pÉ›| nt| aw| yÉ›|wom|en |ber| be| nn|yÉ›É›|rÉ› |mam|dÉ›m|n b|u k|É” h|e b|n m|das|a f|n d|u b|e d|or |pÉ› |i w|u o|É”na|hwe| ah|m d|aso|a y|ea | mp|hwÉ›| É”d|wur|hye|yeh|adÉ›|nts|aad|ehy|É”fa|gyi|iyi|kÃ£ |amu|dwe| É”t|otu| ak|i b|mbo|r a|edw|pÉ›r|e f|asu|mas|ar | É”s|wÉ”w|awu|daw| fi|bu |wÉ”d|ata|É› h|yer|asÉ›|É” m|tum|in |nsa| É”f| ky|da |gua|row|eyi|yie|oro|rbÉ”|imn|urb|mny",
                        ido: "la | la| di|o e|so |ta | e | yu|ro |al |yur|ar |eso|di |o d| ko|a y|as | pr| es|o o|a p| om|omn| re|uro| li|res|ri |a l|i e| ed|ion|per| pe|nte|s l|to | o | po|ava|ant|ber|lib|o p|ibe|cio| in|ere|ua |er |ita|uri|vas|ed |nu |mnu|e l|pro| su| de|kon|a e|ez | ha|do |hav|r l| se|ter|a d|e p|a s|en |ata|ese| en|aci|kom|u h|nta|sez|pri|nac|i l|io |o k|era|te | na| ne|ekt|a k|na |a n|int|rga|lu |go |i d|nal|ra | ho|no |a a|irg|ona|uni|ika|o i|ent|por| so|oni|ni | ir|l e| da|es |ala|oci|ers|hom|sta| lu|ga |soc|e k|ke |nci|o a| a |ial|esi|or |esa|ran|tat|r e|ca |ece| ma| nu|ega|kto|o s|re |ons|nes|gal|i p| eg|a f|r s|nda|e d|l a|dar|ne |and|sua| qu| un|da | al|sti|ado|i s|a r|u e|kla|si |r p|ale|eri|co |ing| ke|i n|i o|o n|e e| fa|mna|lig|ti |d a|tek|ndo|sar|oma|var|eva| vi|un |e s|o r|a o|nul|ono|alt|il |ont|tre|pre|ena|mal|pos|gar|ver| pu|ide|lua| pl| ex|ltr|nio|men|lo |ami| ag|ria|ote|rot|cev|rec|vo | ad|art| ku|iga|dil| me|iva|eku|riz|a m|e o|i k|tra|aca|le |om |rel|ulu|a h|izi|anc|ati|qua|tin|nti|ten|d e|s e|ern|igi| pa|n l|ive|tal|sen|ntr|o l|zit|rna|par|s y|ngo|kta|mpl|aro|i a|lik|d o|rso|duk|r o|son|l y|oza|li |est|kal|les|dis|ame| ar|l o|emb|mar|ili|tit| ca|omi|ral|e f|cia|sa |sek",
                        ina: " de|te |le | le|e d|de |ion|al |tio| e |ate|on | in|ere|ect|to |tat|ent|e p|der|cto|rec|es |e l|ati|nte|ote|e a|del|e e|per| co|el | pe|os |er |e i| al|in |ess| pr|ita|o d| es|ona| ha| to|tot| qu|pro|men|a l| su|ha |sse|ers| a | un|ter|e s|s e| re|e c|con|o a|ia |rso| li|n d|un |era|res|ue |ser|ant|nti|son|ber|cti|su |que|ite|tos|tia|qua|na |ibe|n l|lib|nat|a h|ual|nes|ali|ar | o |l p|e t|nto|r l| di|ra |ic |tra|s d|ame| na|e r|n e|nal|cun|one|ert|rta|ecu|ari|l d|e q|a e|com|e o|nit|ste|ist|l e|rat| po|man|lit|tes| il|rit|io | so|n c|a d|dis|o e|e n|ssi|n a|lic|o l| se| me|soc|l l|ran|a s|equ|int| eq|ro |cla|uma|hum| pa|e h|sta|re | as|an |und|l i|e m|oci|uni| hu|act|l s|ial|cia|ons|e f|n t|n p|so | ac|o s|o i|se |min|s h|eli| ne|or |e u|lig| fu|fun|as | ma| is| ca|mit|bli|lte|nta|alt|sec|nec|iti|ill|omo|ass|nde|a p|ge |ura|pre|ta |e v|bil|ndi|cat| tr|ene|ive|n s|s p|ara|o p|ide|lar|cie|ine|ver| pl|eta|lo |ime|a u|omi|tit|tor|ont|rti|l r|eme| lo|cur|rar|pos|vit|igi| fa|lle|sat|nda|l m|r a|s i|est|ica|n i|ios|sit|rim|abi|pri|a i|dic|rot|par| te|l t|isa|tec| vi|pot|mo |ile|ebe|edi|ili|mun|sti|a a|a c|ato|tic|ral|ori|r s| st|rio|ri |val|ntr|r d|imi|ult| ex|sen|dec|lio|lor|mat|ecl|lia",
                        ktu: " ya|na |ya |a k| na|a y|a m| ku|a n|a b|u y| ba|and|ka | mu|yin|wan|tu | lu|aka| mp|ve | yi|la | ki|ntu|mpe|a l|pe |nda|si |yan|ana|so |e n| ke|ons|nso|di |da |ndi|i y|u n|lu |mun|alu|e y|unt|ina|luv|nza|uve|u m|ala| ma|za |ke |o m|sal|ayi|ban|ndu|isa|ta |kan|ulu|i m|amb|fwa|ma | ny|kim|u k|yon|to |ang|nyo|ins|du |ama|o y|ti |anz|kus|nsi| me|i n|usa|uta|kon| ko|uka|end| mo|sa |i k| bi|a d|wa |mos|mbu| ve|mu |a v|ika|uti|osi|kuz| to|imp|ila|und|e k|e m|ind| fw|mpw|pwa|sik|bal|ngu| sa|tin|mab|ba |len|adi|vwa|mba|kuk|sam|yi | di|a t|yay|mut|ant| le| ka|isi|olo|kis|ata|ula|lo |kut|ngi| bu|su | at|bu |usu|dya|amu|o n|ni |awu|inz|dil|abu|wu | nt|but| nz|kul|e b|nga|bak| dy|e l| ti|gu |imv|lus|bay|lak|bun|ngo|kat|i b|iku|o k|tal|kak|utu|kin|uza|baw|esa|mvu|nak|uzi|bim| ng|dik|ken|vuk|dis|yak|mpa|luk|u f|tan|umu|ati|nu |luz|nta|sad|ong|nka|i l|ank|mak|ani|ku | mb|ing|idi|aba|ga |lwa|kuv|bis|zwa|uya|luy|zit|yal|uku|u t|kub|mus|mef|ela| nk|ufu|ibu|nsa|uvw|aku|fun|usi|iti|lam|uzw| ni|swa|a s|met|eta|fum|a a|don|i t|kun|twa|iki|bam|i a|uko|atu|tuk|kol|eng|ndo| ns|nzo|i s|oko|kam| nd|pam|mbi|gi | mf|mfu|nzi|itu|ilw|uso|ola|dus|mvw|sul|anu|bum|u b|luf|tis|te |uke|zo |yam|gid|umb|dib|efw|lan|ne ",
                        lat: "is |et |us |um | et|ae |tat|ati| co|que|ue |ion| qu|em |ent|oni|est| iu| su| po| in|tio|tis|tes|ate|bus|ibu|ita|e i|ium|ius|eri|qui|es |nti|end|s e|s p|con|per|pot|ote|nis| ha| pr|abe|s i|am |uis|bet|m h|tem|hab|uae|ndi| ho| de|sta|sua|isq|squ|ter|ici|iur|min|one| re|hom|omn| di| om|rum|t c|lib|m e|s a|rat|ibe|ert|gen| li| pe|ber|nem|ri |nte|ine| ip|dis|e q| ad|tia|di |ips| ve|e c|nes|e s|m p|s c|e p|i p|atu|tur| pa|ili| ge|omi|nt |a e|rit| cu|vit|ne |psi|in |ra |rta|ari|ia | si|s h|ut |mo |m c|siu|to |t p|qua|ini|e e|int|ivi|mni|iae|ers| ne|st | es|s s| nu|cie|pro| ex|t a|and|re |it |nda|t s|nib| ci|civ|ni | at|ur |tri|ta |ris|uri|ere|tiu|nit|ess|dem|ad |lic|i i| ut|rim| op| so|s v| vi| fa|rae|par| pu|atq|te |el |ien|com|e a|ria|se | se|o e|ons| mo|niu|tqu|leg|vel|unt|t e|quo|ali|cip|equ|iis|s d|t i| ma|ura|oci|gni|eta|a p|men|a s|s n|ua |omm| te|t d|tut|pra|ect| do|isc|tum|ina|oru|sin|ant|mun|soc|sti|iam|i e|ito|dic|ori| au|i c|aru|lar|cia|pub|ubl|bli|i s|t h| ae|ull|io |e d|fic|imi|s l|t o|ver|da |ui |era|ntu|e o|sse|m s|er |m r| ra| le|gio|omo|cog|nul| fi|cto|aeq|mqu|ea | ea|tus|itu|ten|mod|a c|ffi|ssi|egi|rel|m a|m q|s f|a d|dec| ca|t l|de |nae|riu|ene|iet|t q|emo|cla|sci|cri",
                        pcm: " de| we|di | di|dem|em |ay | sa|or |say|ke |e d|ey | an| go| e | to| ma|wey|for|nd |to | be| fo|ake|im | pe|y d|ll |go |e s|de |on |igh|ght|get| ri|rig|et | ge|mak| na|t t|and| no|tin|ing|ri |eve| im|e w| am|be |am | or| ev| ta|ht |e f|ng |ver| li|eri|ers|all|le |ntr|r d|y e|ont| do|tri| ti|an |per|kon| ko|son|rso|no |ome|is |ne |do |one|m g|ion|i w|o d|e g|i k|odi|bod| al|t r| wo|st | so|nai|e n| of|aim|m d| co|t a|of |dis|me |o g| wa|e e|e t|lik|e l|ike|wor|e a|eop|ple|re |peo|ell|tal|alk|i p|opl|lk |o m|any|f d|n d|we |the|m w|in | mu|y w|na |wel|e o|ust|mus|her|nt |o t|wan|at | fi|o a|e b|o s|it |so |com|m b|l d|fit|da |er |ce |t d| fr|man|ind|y a| on|t s| if|kin|if |ent| se|y n|m n|y m|ve | re|k a|ee |m s|men|m t|ta | ki|eti|e c|o b|ow |ld |rio|n b|ree|i o|k s|dey|l w|ibo|d t|n g| hu|ive|en |s w|ts | su|r s|m a|ny |oth|hts|o f|r a|oda|ut |e m| wh|n w|ork|se | as|n e|gom|hum|m m|as |uma| ot|s d|ano|om |rk | ba|r i|nod|ure|m o|ad |own|wn | fa| th|r w|eac|out|rld|orl|rib|nob| si|m k|d d|ch |obo|g w|nce|gs |bad| ow|s a|ngs|y o|a d|fre|sur|y t|i s| ab|ry |abo|hol|n o|i m|tay|y i|e p|m f|ach|i r|bou|t o|wet|d m|rea|dat| un|l a|n a|now|y g| da|tio|our|liv|ty |d p|i t|ati|uni|d f|i g",
                        sey: " pa|ye |e p|a i| ku|pa |pai|e k|kua| ye| ka|iye| ne| si|je |ai |ji |i k|aye|i n|re | iy| ja|i p|i a|a y|kui|si |ne |a p|ua |se |ui |jÃ« |yÃ« |oye|pay|iji|e s|ja | Ã±a|e o|ayÃ«|uas| ij|Ã« k|pi | ma|Ã±e |a k|epa|to |e Ã±|ia |aij|aiy|kat| i |ajÃ«| a |rep|e j|sia|e e|e i|aje|wa |de |Ã±a |peo| de|mai|asa|ato|tut| pe|we |utu| tu| Ã±e|e y|na | oy|i t| e |kÃ« |a Ã±|e t|ere| ko|ni | ts|jaj|eje|iwa|i s| Ã« | kÃ«|a a|tu |ire|Ã« p|eoj|a Ã«|oji| it|yek|ti |kay|Ã« t|epi|ija| sa|ije|yep|ina|kaj|asi|i i|yer| ai|ani|are|aÃ±e| we|mak|eja|aka|a w|i j|Ã« s|yej|e n| iw| ay|iti|ka |wes|i d|ese|kok|i y|a m|oka|ase| to|ise|say|Ã« y|jai|kai|e m|oya|toy|akÃ«|owa|a s| re|eÃ±e|sik|ipÃ«|apÃ«|ekÃ«|neÃ±|e d|iÌ± |a j|ta |pÃ«a|saj| in|i m|aja|awe|eso|aiÌ±|eoy|ama| te|ea | o |iwe|uaÃ±|dar|oni|iku|ari|o p|rip|o i|air|ore|Ã« j|nej|aÃ±a| yÃ«|kaw|u p|Ã±es|pan|te |tsi|iko|a o|pÃ« |Ã±ej|a t| ir|Ã« m|Ã« i|Ã« d|Ã«a |o s|yaj|ose|o y|aiw| me|sai|aip|kas|Ã±aj|nij|u k| ak|e r|sos| is| se|oja|jam|waj|Ã«ka|ais|ma |ain|kon|apa|aku|e a|kor|eke|wÃ« |oe |soe|tso|api|sao| ap|ned| ik| je|eye|tsÃ«|siw| da| ca| ow|o k|sa |par|do | ti| iÌ±| wa|ipi|jar| ju|ito|osi|aid|Ã±as|ida|tse|Ã« r|kÃ«p|sew|jay| ro|o o|ojÃ«|Ã«re|iÌ±t|o j| oi|u i|aoy|kap|aÃ±u|Ã« Ã«|me | do|ewo|kak|ko |ikÃ«|sÃ«k|awÃ«|kÃ«m|nes",
                        tdt: "an | ha|ma | em|ema|tu |ia |ak | ho|nia| ni| ih|ha |iha| be| se|un | id|da |ida|ara|a h| la| tu|in |a i|bel|ele|le | mo|a n| na|tan|neâ€™|eâ€™e|â€™e | ne| di|la |atu|ran|uk |a s| at|u h|a b|ori|n e|a d| ta|aun|mak| to|ir |asa|hal|sau|tui|uir|n t|is |tom|n n|oma|a t| he|mor|ris|sei|ei |e b|eta|rei|eit|ire|alo|itu|dir|e h|n i|het|k h|a l| ra|i h|sel|elu|lar|luk|han| ba|be | li|n h|n s|ho |k n|nas|rai|ba | fo|ai | e |hod|odi|di |hak|n l|ira|san|a m| ma|ane|esa| ka|lo |k i|a r|hot|s h|otu|nar|e n| da|nes|os |lun|ulu|tul|ain|rak|ar |ate|ra |k e|u e|uai|aka|e m|u b|lib|kar|hir|fo |a u|a e|r n|en |u a|ik |ten|ka |ala|tin| uk|ras| lo|u t|uku| ua| bu|kun|a f|uma|su |dad|k b|ser|a k| si|mos|i n|erb|isu|bis|rbi|n a|aih|ihi|u i|ene|lan|at |diâ€™|iâ€™a|â€™ak|hah|aha|erd|lok|ek |de |si |ibe|usa|osi|hos|ber|k s|kla| de|mat|n m|ade|ok | sa|n b|n u|e t|rda|i l|hat| su|oin|ur |lia|u m|a o|o t|e f|dal|lu |n d| fa| um|i s|sus|has|kol|u n|tak|ada|o l|ham|uka|sti|e k|sar|amu|i i|o n|sai|tuk|fat|ati|s t| fi|r t|ru |mut| es|e e|alu|k a|u s|ola|nek|dak|bur| hi|k f|utu|dek|k t|tad|aso|ekl|sor|buk|sik|r i|n k|r l|oru|ame|isa|sko|Ã¡n |n f| kl|n r|r e|e s|i t|lak|on |iar|fia|los|esk|kai|ata| nu|k l|o s|o d|foi|s e|e l|ano",
                        twi: "sÉ› |a a| sÉ›|ne |ra |a n| wÉ”| a |ara|an |eÉ› |no | ne| bi| no| as|iar|bia|yÉ› |mu |aa | an|É› s|e a|ma | ho|bi |man|deÉ›| mu|ho |É› a|na |a É›| ob|obi|e n|a b|n a|so |o n|pa |ama|É› o|o a|ipa|nip|É› n|naa| na|a w|ana| so| ad| nn|É› É”|É›de|asÉ›|kwa| on|oni|wan| am|a É”|sÉ›d|wÉ” | ah|É›yÉ›| ny|oÉ” | n |mma|i a| mm|nni| kw|ie |wÉ”n|É› w|de | É›y| ba|ase|É” n|o b|i m|É” a|uo |n n|a m|o s|iri| yi|ni |e s|nyi|di |u n|a o|aho| de|tum| É›n|É”n |nya|i n|É”ma|e m|adw| yÉ›|umi|die|mi |É› É›|o k| ab|É›m |a s| ma|nam| É”m| É›s|yin| at| bÉ”|o d|ina|pÉ› |sÉ›m|ua |n s|bÉ” |adi|ya |e h|aso|mar|ani|kuo|rÉ› |fa |a k|É”de|a h|ba |n b|re |uma|wum|om |É” h|m n|yi |u a| sa|se |dwu|É” b| nt|m a|erÉ›| kÉ”|a y|orÉ”| nk| bÉ›| É”d|ten|rÉ” |hyÉ›|saa|ka |É› b|e b|i s|ade|am |nka|kor|i É›|ene|ena| ns|ban|É›ns| ku|É›sÉ›|ane|nsÉ›|fof|É›É› | fi|gye|É”tu| di|ano|i k|o m| É”t| ko|yÉ›É›|bir| ak|im |kye| pÉ›|a d|yie|ko |nti|i b|ete|ofo|amm|ye |ri |foÉ”|kÉ” |bom|abo|É” s|É”ne| É›b|soÉ”|for|isÉ›|m k|asa|nod|É› m|fir|ti | da|e y|sua| be|nii|seÉ›|wa |ber| aw|dwe|n f| fo|o É›|i h|u b|É” m| mf|hÉ” |kab|wÉ› |to |rib|hwÉ›|ibi| dw|dis|nso|ans|tir|u É›| ti| hÉ”|sa |e o| tu|odi|É› y|ia |ofa| É”n|o w|É›bÉ›|aba| ka|ii |wen|É›si|m m|sia|ada|yer|ian|da |set| gy|dua|i d|som|mfa|É” w| af|i y|any|ora|rim|wÉ”d|dwa|nsi",
                        auc: "ani| ke|mo |pa | to|nan|tom|ni |te | wa|ay |mpa|oma| an|may|e a|imp|ye |ome|nte|emo|ewe|kew| in|nke|e k|omo|a t|ked|ke |mon|ink|eda|o w|eye|ama|ano|bey|dan| be|e w|ena|wen|mam|bay|a a|amo|me |no |eng|imo|y i| im|ana|ete|ado|ngi|ono|oba|man|o k|o a| na|ket|wao|a k| ad|mom| mo|aom|gim|ant|e t|ina| ma|i k|omp|nam|mem|men|kek|o i|wak|eka| ay|pon|ake|aye|egi|nom|tap|dob|ape|i b|i t|ame|nim|ka |ata|pe |e i|wat| po|omi|ipa|e b|weg|aa |ent|gi | ne|nip|eki|e p|i w|y k|e n|one|e m|nge|ge |min|god|i i| go|odo|nen|a w|Ã±en|a m|ki |dom|nga|i a|ing|o t|eem|yom|kem|e e|a n|eke|ate| we| at|kam|dam|gan|y w| wi|ont|kim|ank|ede|kee|maa|eÃ±e| eÃ±|y t|Ã±om| om| ek|nob|wa | ba|o m|oni|nka|o b| am|eyo|gin|i m|wab|waa|iwa|aki|ga |key|wiw|wad|e g| on|onk|enk|abe|iga|eme|bek|o n|amp| ye|i n|i e|y a|imi|ada|mim|de |y m|i g|nem| ge|nki|gam|ang|a e|oke|ong|keb|nit|eÃ±o|ne |o o|nee|e o|aka|y n|dok|o e|ene| ko|do |wem|ten|mi |yek|bak|a i|aak| ki|weÃ±|we |ee |y g| te|a o|eet|gey|ya |oyn|po |kin|a g| ga|di |int|owe|kow|ike|yen|ebe| pi|bee|iyo|eÃ±a|nig|iye| en|non|ton|ona|opo|kig|wo |eya| Ã±e|yng|kab|ted|awe| iy|tok|a p|toy|ebi|mke|omk|ote|ema|epo|a b|ibe|e Ã±|gon|dem|o g|i p|neg|nik|eba| aw|ini|wee|ite|abo|ego|eno|nta|iin",
                        zro: "cha|ka |ich|a k|ha |nu |uka|a n|nuk|anu| nu|a i|nia| ka|iki| ik| ta|kic|a t|ta |kua|ini| ku|na |aja|ja |ia |aka|iku|ani|iri|a a|ana|pan| ni| ki| ch|kin|ima|awi|han|ata|iti|jin|ria|uan|ian|aya|yap|a c|u k|kay|kaw|maj|wir| ri|shi|nic|u i|aji|rik|a p| ic| pa|iat|iaj|ua |ish|ama|ara|u t|tia|inu|u n|a r|nis|ku |ait|ti |ira|i i|tsa|api|ma |pi |aik| na|ati| ak| ji|ina|uju|u a|tai|unu|a j|jic| wi| ti|jan|kan|apu|rak|a m|ija|kir|wit|a w|upa|pui|its| ai|aki|kup|uki|nim| ar|uin| at|tam|jun|amu|ram|man|juk|mas|i k|him|ika|suj|i a|i n|asu|u p|ash|kas|hak| an|uji| it|kun|ats|taj|kuj|naj|kat|tin| ir|u r|rai|kim|ui |har|ki |jia|aku|uch| am| pu|kau|ura|kak|ami| mi|wij|muj|ran| ma|puc|una|hij|iju|raj|hik|nat|apa|taw| in|aur|sak|uku|Ã±a |kui|iÃ±a|miÃ±|uma|tik|mim|sa |iji|num|hir|iam|au |ra |u c|auk|nak|uta|tar|kam|saj|tim| pi|sha|iya|tau|tij|kij|sau|pia|uak|iak|mei|eir|ri |i r|tak|aru|ya |sat|aun|i t|iau|uya|kuy|ita|kut|jau|tuk|uir|mui|kai|uja|tan|a u|chi|san|hin|rap|tat|pak|asa| iy|utu|un | me|jak|ham|tsu|yaj|kit|u j|nji|inj|jit| ya| ra|a y| ut| ja|yak| ap|rij|hat|par|yan|ris|ari|uat|tiu|rua|ni |auj|min|i m|wik|haj|ach|kia|kuk|uik|riy|hit|jik|hau|imi|shu|i c|sua|ras|mir|ais|pam|hi |puk|nit| sh|iwa|i p"
                    },
                    Cyrillic: {
                        rus: " Ð¿Ñ€| Ð¸ |Ñ€Ð°Ð²|ÑÑ‚Ð²| Ð½Ð°|Ð¿Ñ€Ð°|Ð³Ð¾ |ÐµÐ½Ð¸|Ð¾Ð²Ðµ|Ð²Ð¾ | ÐºÐ°|Ð°Ð½Ð¸|Ñ‚ÑŒ | Ð² | Ð¿Ð¾| Ð¾Ð±|Ð¸Ñ |ÑÐ²Ð¾| ÑÐ²|Ð»Ð¾Ð²|Ð½Ð° | Ñ‡Ðµ|ÐµÐ»Ð¾|Ð¾ Ð½| ÑÐ¾|Ð¾ÑÑ‚|Ñ‡ÐµÐ»|Ð¸Ðµ |Ð¾Ð³Ð¾|ÐµÑ‚ |Ð½Ð¸Ñ|ÐµÑÑ‚|Ð°Ð²Ð¾|Ñ‹Ð¹ |Ð°Ð¶Ð´| Ð¸Ð¼|Ð½Ð¸Ðµ|Ð²ÐµÐº| Ð½Ðµ|Ð»ÑŒÐ½|Ð»Ð¸ |Ð¾Ð²Ð°|Ð¸Ð¼Ðµ|Ð°Ñ‚ÑŒ|Ð¿Ñ€Ð¸|Ñ‚ Ð¿|Ð¸ Ð¿|ÐºÐ°Ð¶|Ð¸Ð»Ð¸|Ð¾Ð±Ð¾| Ñ€Ð°|Ñ‹Ñ… |Ð¶Ð´Ñ‹| Ð´Ð¾|Ð´Ñ‹Ð¹|Ð²Ð¾Ð±|ÐµÐº |Ð±Ð¾Ð´|Ð²Ð° |Ð¹ Ñ‡|ÐµÐ³Ð¾|ÑÑ |Ð¸ Ñ|Ð¸Ð¸ |Ð°Ñ†Ð¸|ÐµÐµÑ‚|Ð½Ð¾ |Ð¼ÐµÐµ|Ð¸ Ð¸|Ð»ÐµÐ½|Ð¾Ð¹ |Ñ‚Ð²Ð°|Ð½Ñ‹Ñ…|Ñ‚Ð¾ | Ð¸Ð»|Ðº Ð¸|ÐµÐ½Ð½| Ð±Ñ‹|Ð¸ÑŽ | Ð·Ð°|Ð¼Ð¸ |Ñ‚Ð²Ð¾|Ð¸ Ð½|Ð¾ Ð¿|Ð²Ð°Ð½|Ð¾ Ñ|ÑÑ‚Ð¾|Ð°Ð»ÑŒ| Ð²Ñ|Ð¾Ð¼ |Ð¾ Ð²|ÑŒÐ½Ð¾|Ð¸Ñ… |Ð½Ð¾Ð³|Ð¸ Ð²|Ð½Ð¾Ð²|Ð°ÐºÐ¾|Ð¿Ñ€Ð¾|Ð¸Ð¹ |ÑÑ‚Ð¸|Ð¸ Ð¾|Ð¿Ð¾Ð»|Ð¾Ð»Ð¶|Ð´Ð¾Ð»|Ð¾Ðµ |Ð±Ñ€Ð°|Ñ Ð²| Ð¾Ñ|Ð½Ñ‹Ð¼|Ð¶ÐµÐ½|Ñ€Ð°Ð·|Ñ‚Ð¸ |Ð½Ð¾Ñ|Ñ Ð¸| Ð²Ð¾|Ñ‚Ð¾Ñ€|Ð²ÑÐµ| ÐµÐ³|ÐµÐ¹ |Ñ‚ÐµÐ»|Ð½Ðµ |Ð¸ Ñ€|Ñ€ÐµÐ´|ÐµÐ»ÑŒ|Ñ‚Ð²Ðµ|Ð¾Ð´Ð¸| ÐºÐ¾|Ð¾Ð±Ñ‰|Ð¾ Ð¸| Ð´Ðµ|Ð¸Ð¼Ð°|Ð° Ð¸|Ñ‡ÐµÑ|Ð½Ð¸Ð¼|ÑÐ½Ð¾|ÐºÐ°Ðº| Ð»Ð¸|Ñ‰ÐµÑ|Ð²Ð»Ðµ|ÑŒÑÑ|Ð½Ð½Ñ‹|Ð°ÑÑ‚|Ñ‚ÑŒÑ|Ð½Ð½Ð¾|Ð¾ÑÑƒ|Ðµ Ð´| Ð¾Ñ‚|Ð¿Ñ€Ðµ|ÑˆÐµÐ½|Ð° Ñ|Ð±Ñ‰Ðµ|Ð¾ÑÐ½|Ð¾Ð´Ð½|Ð±Ñ‹Ñ‚|ÑÐ¾Ð²|Ñ‹Ñ‚ÑŒ|Ð»Ð¶Ð½|Ñ€Ð°Ð½|Ð½Ð¸ÑŽ|Ð¸Ñ‡Ðµ|Ð°Ðº |Ñ‹Ð¼ |Ð²Ð°Ñ‚|Ñ‡Ñ‚Ð¾|ÑÑ‚Ñƒ|Ñ‡ÐµÐ½|Ðµ Ð²| ÑÑ‚|Ñ€ÐµÑ|Ð¾Ð»ÑŒ| Ð½Ð¸|Ð½Ð¾Ð¼|Ñ€Ð¾Ð´|Ð»Ñ |Ð½Ð°Ñ€|Ð²ÐµÐ½|Ð´Ñƒ |Ð¾Ð¶Ðµ|Ð½Ñ‹ |Ðµ Ð¸| Ñ‚Ð¾|Ð²ÐµÑ€|Ð° Ð¾|Ð·Ð¾Ð²|Ð¼ Ð¸|Ð½Ð°Ñ†|Ð´ÐµÐ½|Ñ€Ð¸Ð½|Ñ‚ÑƒÐ¿|ÐµÐ¶Ð´|ÑÑ‚Ñ€| Ñ‡Ñ‚|Ñ Ð¿|Ð¾Ð½Ð°|Ð´Ð¾Ñ|Ñ… Ð¸|Ð¹ Ð¸|Ñ‚Ð¾Ñ|ÐµÑÐ¿|Ð»Ð¸Ñ‡|Ð±ÐµÑ|Ð¾Ð±Ñ€|Ð¾Ñ‚Ð¾|Ð¾ Ð±|ÑŒÐ½Ñ‹|ÑŒ Ð²|Ð½Ð¸Ð¸|Ðµ Ð¼|ÑƒÑŽ | Ð¼Ð¾|ÐµÐ¼ | Ð¼Ðµ|Ð°Ñ€Ð¾| Ñ€Ðµ|Ð°Ð²Ð°|ÐºÐ¾Ñ‚|Ð°Ð² | Ð²Ñ‹|Ð°Ð¼ |Ð¶Ð½Ð¾|ÑÑ‚Ð°|Ð°Ñ |Ð¿Ð¾Ð´|Ð¸ Ðº|Ð½Ð¾Ðµ| Ðº | Ñ‚Ð°| Ð³Ð¾|Ð³Ð¾Ñ|ÑÑƒÐ´|ÐµÐ¾Ð±|Ñ Ð½|ÐµÐ½ |Ð¸ Ð´|Ð¼Ð¾Ð¶|ÐµÑÐº|ÐµÐ»Ð¸|Ð°Ð²Ð½|Ð²Ðµ |ÐµÑ‡Ðµ|ÑƒÑ‰Ðµ|Ð¿ÐµÑ‡|Ð´Ð½Ð¾|Ð¾ Ð´|Ñ…Ð¾Ð´|ÐºÐ° | Ð´Ð»|Ð´Ð»Ñ|Ð¾Ð²Ð¾|Ð°Ñ‚Ðµ|Ð»ÑŒÑ|ÑŽ Ð¸|Ð² Ðº|Ð½ÐµÐ½|Ñ†Ð¸Ð¸|Ð½Ð¾Ð¹|ÑƒÐ´Ð°|Ð²Ð¾Ð²| Ð±Ðµ|Ð¾Ñ€Ð¾|Ð½ÑÑ‚|Ð°Ð¼Ð¸|Ñ†Ð¸Ð°|ÐºÐ¾Ð½|ÑÐµÐ¼|Ðµ Ð¾|Ð²Ð½Ð¾| ÑÑ‚|Ð°Ð·Ð¾|Ñ… Ð¿|Ð½Ð¸ |Ð¶Ð´Ðµ|Ð¼ Ð¿|ÐºÐ¾Ð³|Ð¾Ñ‚ |Ð´ÑÑ‚|Ð²Ð½Ñ‹|ÑÑ‚ÑŒ|Ñ‹Ðµ |Ð¾ Ð¾|Ð¿Ð¾Ñ|ÑÑ€Ðµ|Ñ‚Ñ€Ð°|ÐµÐ¹Ñ|Ñ‚Ð°Ðº|Ð¸ Ð±|Ð´Ð¾Ð²|Ð¼Ñƒ |Ñ Ðº|Ð½Ð°Ð»|Ð´Ñ€Ñƒ| Ð´Ñ€|ÐºÐ¾Ð¹|Ñ‚ÐµÑ€|ÑŒ Ð¿|Ð°Ñ€Ñ|Ð¸Ð·Ð½|ÑÐ¾Ñ†|ÐµÐ´Ð¸|Ð¾Ð»Ð½",
                        ukr: "Ð½Ð° | Ð¿Ñ€| Ñ– |Ð¿Ñ€Ð°|Ñ€Ð°Ð²| Ð½Ð°|Ð½Ñ |Ð½Ð½Ñ| Ð·Ð°|Ð¾Ð³Ð¾| Ð¿Ð¾|Ñ‚Ð¸ |Ð³Ð¾ |Ð»ÑŽÐ´| Ð»ÑŽ|Ð²Ð¾ | ÐºÐ¾| Ð¼Ð°|Ð»ÑŒÐ½|ÑŽÐ´Ð¸|Ð¸Ñ… |Ð¾ Ð½| Ð½Ðµ|Ð°Ð²Ð¾|Ð°Ð½Ð½|Ð´Ð¸Ð½| ÑÐ²|ÑÐ²Ð¾|Ð¾Ð¶Ð½|ÐºÐ¾Ð¶|ÐµÐ½Ð½|Ð¿Ð¾Ð²|Ð¶Ð½Ð°| Ð´Ð¾|Ð°Ñ‚Ð¸|Ð¸Ð½Ð°|Ð°Ñ” |Ð° Ð»| Ð±Ñƒ|Ð°Ñ†Ñ–|Ð½Ðµ |ÑƒÐ²Ð°|Ð¾Ð±Ð¾| Ð¾Ñ| ÑÐº|Ð¼Ð°Ñ”| Ð²Ð¸|Ð½Ð¸Ñ…|Ð°Ð»ÑŒ|Ð°Ð±Ð¾|Ñ” Ð¿| Ñ‚Ð°|Ð½Ñ– |Ñ‚ÑŒ |Ð¾Ð²Ð¸|Ð±Ð¾ | Ð²Ñ–| Ð°Ð±|ÐµÑ€Ðµ|Ñ– Ð¿|Ð° Ð¼|Ð²Ð¸Ð½|Ð±ÐµÐ·|Ð¿Ñ€Ð¸|Ñ–Ð»ÑŒ|Ð½Ð¾Ð³|Ð¾ Ð¿|Ð¼Ð¸ |Ñ‚Ð° |Ð¾Ð¼ |Ð¾ÑŽ |Ð±Ð¾Ð´|ÑÑ‚Ð°|Ð²Ð¾Ð±| Ð±Ðµ|Ð´Ð¾ |Ð²Ð° |Ñ‚Ñ– | Ð¾Ð±|Ð¾ Ð²|Ð¾ÑÑ‚| Ð² | Ñ‰Ð¾|Ð¸Ð¹ |ÑÑ |Ñ– Ñ| ÑÐ¿|Ð¸Ð½Ð½|Ð²Ñ–Ð´|ÑÑ‚Ð²|Ð¸ Ð¿|Ð²Ð°Ð½|Ð½Ð¾Ð²|Ð½Ð°Ð½|ÐºÐ¾Ð½| Ñƒ |Ð²Ð°Ñ‚|Ð¾Ð½Ð°|Ñ–Ñ— |Ð½Ð¾ |Ð´Ð½Ð¾|Ñ–Ð¹ |ÐµÐ·Ð¿|Ð¿ÐµÑ€| Ð´Ðµ|ÑƒÑ‚Ð¸|ÑŒÐ½Ð¾|Ð¸ÑÑ‚|Ð¿Ñ–Ð´|ÑÑ‚Ñ–|Ð±ÑƒÑ‚| Ð¼Ð¾|Ð¸ Ñ–|Ñ–Ð´Ð½|Ð°ÐºÐ¾|Ð½Ð½Ñ–|Ñ–Ð´ |Ñ‚Ð¸Ñ|Ñ‰Ð¾ |Ñ€Ð¾Ð´|Ñ– Ð²|Ð° Ð·|Ð°Ð²Ð°| Ð¿Ðµ|Ð¼Ñƒ |Ñ– Ð½|Ð° Ð¿|ÑÐ¾Ð±|Ð¾Ñ— |Ð° Ð²|ÑÐ¿Ñ€|Ñ–Ð² |Ð½Ð¸Ð¹|ÑÐºÐ¾|Ð´Ñƒ |Ð²Ð½Ð¾|Ñ– Ð´|Ð½Ñƒ |Ð°Ñ€Ð¾|Ð¸ Ñ| Ñ–Ð½|Ð»Ñ |Ñ€Ñ–Ð²|Ñƒ Ð²| Ñ€Ñ–|Ð¸ Ð´|Ð½Ð°Ñ€|Ð½ÐµÐ½|Ð¾Ð²Ð°|Ð¾Ð¼Ñƒ|Ð»ÐµÐ½|Ð½Ð°Ñ†|Ð½Ð¸Ð¼|Ð¸ÑÑ|Ñ‡Ð¸ |Ð°Ð² |Ñ– Ñ€|Ð½Ð¾Ð¼| Ñ€Ð¾|Ð½Ð¾Ñ|Ð²Ñ– |Ð²Ð½Ð¸|Ð¾Ð²Ð½| Ñ—Ñ—|Ð¾Ð²Ñ–|Ð¼Ð¾Ð¶|Ð²Ñ–Ð»|Ñƒ Ð¿| Ð¿Ñ–| ÑÑƒ|Ñ—Ñ— |Ð¾Ð´Ð½| Ð²Ñ|Ð¾Ð²Ð¾|ÑŽÑ‚ÑŒ|Ñ–ÑÑ‚|ÑÑ‚ÑŒ|Ñ– Ð·| ÑÑ‚|Ð±ÑƒÐ´| Ñ€Ð°|Ñ‡ÐµÐ½|Ð¿Ñ€Ð¾|Ñ€Ð¾Ð·|Ñ–Ð²Ð½|Ð¾Ð´Ñƒ|Ð° Ð¾|ÑŒÐ½Ð¸|Ð½Ð¸ |Ð¾ Ñ|ÑÐ½Ð¾|Ð·Ð½Ð°|Ñ€Ð°Ñ†|Ð¸Ð¼ |Ð¾ Ð´|Ð¸Ð¼Ð¸|Ñ Ñ–|Ñ†Ñ–Ñ—|Ñ… Ð¿|Ð´ÐµÑ€|Ñ‡Ð¸Ð½| ÑÐ¾|Ð° Ñ|ÐµÑ€Ð¶|Ð¸ Ð·|Ð¸ Ð²|Ðµ Ð¿|Ð´Ð¸ |Ð·Ð°Ð±|Ð¾ÑÐ¾|Ñƒ Ñ|Ðµ Ð±|ÑÑ– |Ñ‚ÐµÑ€|Ð½Ñ–Ñ…|Ñ Ð½|Ñ– Ð±|ÐºÐ»Ð°|ÑÐ¿Ñ–|Ð² Ñ–| Ð½Ñ–|Ð¾ Ð·|Ñ€Ð¶Ð°|ÑÑ‚Ñƒ|Ñ—Ñ… |Ð° Ð½|Ð½Ð½Ð°|Ñ‚Ð°Ðº|Ñ Ð¿|Ð·Ð¿Ðµ| Ð¾Ð´|Ð°Ð±Ðµ|Ð´Ð»Ñ|Ñ‚Ñƒ |Ñ– Ð¼|Ð¿ÐµÑ‡| Ð´Ð»|Ð¶Ðµ |ÐºÐ¸ |Ð²Ñ–Ñ‚|Ð½Ñ–Ñ|Ð³Ð°Ð»|Ð°Ð³Ð°|Ðµ Ð¼|Ð°Ð¼Ð¸|Ð·Ð°Ñ…|Ñ€Ð¸Ð¼|Ñ— Ð¾|Ñ‚Ð°Ð½|ÐºÐ¾Ð³|Ñ€ÐµÑ|ÑƒÐ´ÑŒ| Ñ€Ðµ|Ñ‚Ð¾ |ÐºÐ¾Ð²|Ñ‚Ð¾Ñ€|Ð°Ñ€Ð°|ÑÐ²Ñ–|Ñ‚Ð²Ð°|Ð° Ð±|Ð¾Ð¶Ðµ|ÑÐ¾Ñ†|Ð¾Ñ†Ñ–|Ñ†Ñ–Ð°|Ð¾ÑÐ½|Ñ€Ð¾Ð±|Ð´ÑŒâ€|ÑŒâ€Ñ|â€ÑÐº|Ñ– Ñ–|Ð·Ð°Ð³|Ð°Ñ…Ð¸|Ñ…Ð¸Ñ|Ð¿Ñ–Ð»|Ñ†Ñ–Ð¹|Ñ… Ð²|Ð»Ð¸Ð²|Ð¾ÑÐ²|Ñ–Ð°Ð»|Ñ€ÑƒÑ‡|ÑŒ Ð¿|Ñ–Ð½Ñˆ|Ð² Ñ|Ð³Ð¸ |Ð°Ð³Ð¸| Ð´Ñ–|ÐºÐ¾Ð¼|Ð¸Ð½Ð¸|Ð° Ñ–|Ð¾Ð´Ð¸|Ð½Ð°Ð»|Ñ‚Ð²Ð¾|ÐºÐ¾Ñ—|Ð²ÑÑ–|Ñ Ð²|Ð½Ð¾ÑŽ|Ð¾Ð± |Ð¾ Ñƒ|Ð¾ Ð¾|Ñ– Ð¾",
                        bos: " Ð¿Ñ€| Ð¸ |Ñ€Ð°Ð²| Ð½Ð°|Ð¿Ñ€Ð°|Ð½Ð° |Ð´Ð° |Ð¼Ð° |Ð¸Ð¼Ð°| ÑÐ²|Ð° Ñ|Ð° Ð¿| Ð´Ð°|Ð° Ð¸| Ð¿Ð¾|Ñ˜Ðµ |Ð²Ð¾ |ÐºÐ¾ |Ð²Ð° | Ñƒ |Ð°ÐºÐ¾|Ð½Ð¾ |Ð¾ Ð¸|Ðµ Ñ| Ð·Ð°| Ð¸Ð¼|Ð°Ð²Ð¾|Ñ‚Ð¸ |Ð°Ð²Ð°|ÑÐ²Ð°|Ð¸ Ð¿|Ð»Ð¸ |Ð¾ Ð½|Ð¸Ð»Ð¸|Ð¸ Ñ|Ð¸Ñ… |Ð²Ð°Ðº| ÐºÐ¾|Ð¾ÑÑ‚|Ð° Ñƒ| ÑÐ»|Ð½Ðµ |Ð²Ð°Ñš| Ð´Ñ€|ÑšÐµ | Ð½Ðµ|ÐºÐ¾Ñ˜|ÑšÐ° | Ð±Ð¸|Ð¸Ñ˜Ðµ|Ð¸ Ð´|Ð¸Ð¼ |ÑÑ‚Ð²|Ñƒ Ñ|Ñ˜ÐµÐ´|Ð±Ð¾Ð´|ÑÐ»Ð¾|Ð»Ð¾Ð±|Ð¾Ð±Ð¾| Ð¸Ð»|Ð¿Ñ€Ð¸| Ñ˜Ðµ|Ð°ÑšÐµ| Ñ€Ð°|Ð° Ð´| Ð¾Ð±| ÑÑƒ|Ðµ Ð¸|Ð²Ñ˜Ðµ|ÑÐµ |Ð¾Ð¼ |Ð¸ Ð¸|ÑÑ‚Ð¸| ÑÐµ|Ñ˜Ñƒ |Ð´Ñ€Ñƒ|Ð° Ð±| Ð¾Ñ|Ñ†Ð¸Ñ˜|Ð²Ð¾Ñ˜|Ðµ Ð¿|Ð° Ð½|Ñ€Ð°Ð·|ÑÑƒ |Ñƒ Ð¿|Ð°ÑšÐ°|Ð¾ Ð´|ÑƒÑ˜Ðµ|Ð° Ð¾|Ñƒ Ð¸| Ð¾Ð´|Ð¸ Ñƒ|Ð»Ð¾ |Ð¾Ð²Ð°|Ð´Ñ˜Ðµ|Ð¶Ð°Ð²|Ð¾Ñ˜Ðµ|Ð° Ðº|Ð½Ð¸ |Ð¾Ð²Ð¾|ÐµÐ´Ð½|Ð¸Ñ‚Ð¸|Ð°Ñ†Ð¸|Ñƒ Ð¾|Ð¾ Ð¿|Ð½Ð¾Ñ|Ð¸ Ð¾|Ð±Ñ€Ð°| ÐºÐ°|ÑˆÑ‚Ð¸|Ð° Ñ˜|Ð½Ð¸Ñ…|Ðµ Ð¾|Ð¿Ñ€Ðµ|Ð¿Ñ€Ð¾|Ñ€Ð¶Ð°| Ð±Ñƒ|Ð±ÑƒÐ´|Ñ‚Ñ€Ðµ| Ñ‚Ñ€|Ð¾Ð³ |Ð´Ñ€Ð¶|Ð±Ð¸Ñ‚|Ðµ Ð´|Ñƒ Ð·|Ñ˜Ð° |ÑÑ‚Ð°|Ð°Ð²Ð½|Ð¸Ñ˜Ð°|Ðµ Ð±|Ð¼Ð¸Ñ˜|Ð¸ Ð½|Ñ€ÐµÐ±|ÑÐ²Ð¾|Ñ’Ð¸ |Ð° Ð·|Ð²Ðµ |Ð±Ð¸Ð»|Ñ€ÐµÐ´|Ñ€Ð¾Ð´|Ð°Ñ€Ð¾|Ð¸Ð»Ð¾|Ð¸Ð²Ð°|Ñ‚Ñƒ |Ð¿Ð¾Ñ| ÑšÐµ| Ð¸Ð·|Ðµ Ñƒ|Ð°Ñ˜Ñƒ|Ð±Ð° |ÐºÐ° |ÐµÐ¼ |ÐµÐ½Ð¸|Ð´Ðµ |Ñ˜ÐµÑ€|Ñƒ Ð´|Ð¾Ð´Ð½|ÑšÐµÐ³|Ð´Ñƒ |Ð³Ð¾Ð²|Ð²Ð¸Ð¼|Ñ˜ÐµÐ»|Ñ‚Ð²Ð°|Ð·Ð° | Ð´Ð¾|ÐµÑ’Ñƒ|Ð½Ð¸Ð¼| ÑÐ°|Ð½Ð°Ñ€|Ð° Ñ‚| Ð½Ð¸|Ð¾ Ðº|Ð¾Ñ˜Ð¸|Ð¼ Ð¸| ÑÐ¼| ÑÑ‚|ÐµÐ±Ð°|Ð¾Ð´Ð°|Ñ€Ð°Ð½|Ñƒ Ð½|Ð´Ð½Ð°|Ð¸Ñ‡Ð½|ÑƒÑ’Ð¸|Ð¸ÑÑ‚|Ð²Ð½Ð¾|Ð°Ð»Ð½|Ð¸ Ð¼| Ð´Ñ˜|Ð½Ð°Ðº|Ð½Ð°Ñ†|ÑÐ½Ð¾|Ð½ÑÑ‚|Ñ‚Ð¸Ð²|Ð°Ð½Ð¸|ÐµÐ½Ð¾|Ðµ Ðº|Ðµ Ð½|Ð°Ð²Ðµ|Ð°Ð½ |Ñ‡Ð½Ð¾|Ð¸ Ð±|Ð½Ð¾Ð¼|ÑÑ‚Ñƒ|Ð½Ð¾Ð²|Ð¾Ð²Ð¸|Ñ‡Ð¾Ð²|Ð½Ð°Ð¿|Ð½Ð¾Ð³|Ð¼ Ñ|Ð¾Ñ˜ |Ð½Ñƒ |Ð° Ñ€|ÐµÐ´Ð¸|Ð¾Ð²Ñ˜|Ð¾Ñ˜Ð°|ÑÐ¼Ð¸|Ð¾ÑÐ½|Ð°Ð½Ñ|Ð°Ñ€Ð°|Ð´Ð½Ð¾|Ñ… Ð¿|Ð¿Ð¾Ð´|ÑÐ°Ð¼|Ð¾Ð±Ñ€|Ð¾ Ð¾|Ñ€ÑƒÐ³|Ñ‚Ð²Ð¾|Ñ˜Ð¸ | Ð¼Ð¾|ÐµÐ³Ð¾|Ñ‚Ð¸Ñ‚|Ð°ÑˆÑ‚|Ð·Ð°Ñˆ| ÐºÑ€|Ñ‚ÐµÑ™|Ð¸ÐºÐ¾|ÑƒÐ½Ð°|Ð½Ð¸Ðº|Ñ€Ð°Ð´|Ð¾Ð´Ñƒ|Ñ‚ÑƒÐ¿|Ð¶Ð¸Ð²| Ð¼Ð¸|Ñ˜ÐµÐº|ÐºÑ€Ð¸| Ð¾Ð²| Ð²Ñ˜| Ñ‡Ð¾|Ð²Ñƒ |Ð³ Ð¿| Ð¾Ð¿|Ð¼ÐµÑ’|ÑšÑƒ |Ñ€Ð¸Ð²|Ð½Ð¸Ñ‡|Ð¸Ð½Ð°|Ð¾Ð´Ñ€|Ðµ Ñ‚|ÑƒÐ´Ñƒ| Ñ‚Ðµ|Ð¼Ñ˜Ðµ|ÐµÑšÐµ|ÑÐ²Ð¸|Ð° Ñ‡|Ñƒ Ñƒ|Ð½Ð¸Ñ†|Ð´Ð½Ð¸| Ñ‚Ð°|Ð¸ Ñ‚|Ñ‚Ð½Ð¾|Ð¸Ñ‚Ðµ|Ð¸ Ð²|Ð´ÑÑ‚|Ð°ÐºÐ²|Ñ‚Ðµ |Ð°Ð¾ | Ð²Ñ€|Ñ€Ð° |Ð²Ð¾Ñ™|Ñ€Ð¸Ð¼|Ð°Ðº |Ð¸Ñ‚Ñƒ|Ð°Ð²Ð¸|ÐºÐ»Ð°|Ð²Ð½Ð¸|Ð°Ð¼Ð¾| Ð¾Ð½|Ð°Ð´Ð°|ÐµÑ€Ðµ|ÐµÐ½Ð°|ÑÑ‚Ð¾|ÐºÐ¾Ð½|ÑÑ‚ |Ð¾Ð½Ð°|Ð¸Ð²Ð¾|Ð¾Ð±Ð¸|Ð¾Ð±Ð°|ÐµÐ´Ñ|ÐºÐ°Ðº|Ñ™Ñƒ ",
                        srp: " Ð¿Ñ€| Ð¸ |Ñ€Ð°Ð²|Ð¿Ñ€Ð°| Ð½Ð°|Ð½Ð° | Ð¿Ð¾|Ð¼Ð° | ÑÐ²|Ð´Ð° |Ð¸Ð¼Ð°|Ð° Ð¿|Ð° Ð¸|Ð²Ð¾ |ÐºÐ¾ |Ð²Ð° |Ñ‚Ð¸ |Ð¸ Ð¿| Ñƒ |Ð°ÐºÐ¾| Ð´Ð°|Ð° Ñ|Ð°Ð²Ð¾|Ð¸ Ñ|Ð¾ÑÑ‚| Ð·Ð°|Ð¾ Ð¸|ÑÐ²Ð°| Ð¸Ð¼|Ð²Ð°Ðº|Ð°Ð²Ð°|Ñ˜Ðµ |Ðµ Ñ| ÑÐ»| ÐºÐ¾|Ð¾ Ð½|ÑšÐ° |Ð½Ð¾ |Ð½Ðµ | Ð½Ðµ|Ð¾Ð¼ |Ð»Ð¸ | Ð´Ñ€|Ð¸Ð»Ð¸|Ñƒ Ñ|ÑÐ»Ð¾|Ð¾Ð±Ð¾|ÐºÐ¾Ñ˜|Ð¸Ñ… |Ð»Ð¾Ð±|Ð±Ð¾Ð´|Ð¸Ð¼ |Ð° Ð½|Ñ˜Ñƒ | Ð¸Ð»|ÑÑ‚Ð²| Ð±Ð¸|ÑÑ‚Ð¸|Ð° Ð¾|Ð¿Ñ€Ð¸|Ð° Ñƒ| Ñ€Ð°|Ñ˜ÐµÐ´|Ð¾Ð³ | Ñ˜Ðµ|Ðµ Ð¿|ÑšÐµ |Ð½Ð¸ |Ñƒ Ð¿|Ð° Ð´|ÐµÐ´Ð½|Ð¸Ñ‚Ð¸|Ð° Ðº|Ð½Ð¾Ñ|Ð¸ Ñƒ|Ð¾ Ð´|Ð¿Ñ€Ð¾| ÑÑƒ|Ð°ÑšÐµ|Ð¾Ð²Ð°|Ðµ Ð¸|Ð²Ð°Ñš|Ð¸ Ð¸|Ñ†Ð¸Ñ˜| Ð¾Ñ|ÑÐµ |Ð´Ñ€Ñƒ|ÑÑ‚Ð°|Ð°Ñ˜Ñƒ|Ð°ÑšÐ°|Ð¸ Ð¾| Ð¾Ð±|Ñ€Ð¾Ð´|Ð¾Ð²Ðµ| ÐºÐ°| Ð´Ðµ|Ðµ Ð¾|Ð°Ñ†Ð¸|Ñ˜Ð° |Ð¾Ð²Ð¾| Ð½Ð¸| Ð¾Ð´|Ð¸ Ð´| ÑÐµ|Ð²Ðµ |ÑƒÑ˜Ðµ|ÐµÐ½Ð¸|Ð¸Ñ˜Ð°|Ð°Ð²Ð½|Ð¶Ð°Ð²| ÑÑ‚|Ñƒ Ð¸|Ð¼ Ð¸|Ð´Ð½Ð°|ÑÑƒ |Ñ€ÐµÐ´|Ð¸ Ð½|Ð¾Ñ˜Ð°|Ðµ Ð±|Ð°Ñ€Ð°|ÑˆÑ‚Ð¾|Ð½Ð¾Ð²|Ñ€Ð¶Ð°|Ð²Ð¾Ñ˜|Ð´Ñ€Ð¶|Ñ‚Ð²Ð°|Ð¾Ð´Ð¸|Ñƒ Ð¾|Ð° Ð±|Ð¾Ð´Ð½|Ð¿Ð¾Ñˆ|Ð¾ÑˆÑ‚|Ð½Ð¸Ð¼|Ð° Ñ˜|ÐºÐ° |Ñ€Ð°Ð½|Ñƒ Ñƒ| Ð¾Ð²|Ð°Ñ€Ð¾|Ðµ Ð´|ÑÐ½Ð¾|ÐµÑšÐ°|Ñƒ Ð·|Ñ€Ð°Ð·| Ð¸Ð·|Ð¾ÑÐ½|Ð° Ð·|Ð¾ Ð¿|Ð°Ð²Ðµ|Ð¿Ñ€Ðµ|Ð´Ðµ |Ð±Ð¸Ñ‚|Ð½Ð¸Ñ…|ÑˆÑ‚Ð¸|Ð²Ñƒ |Ñƒ Ð´|Ð´Ñƒ |Ñ‚Ñƒ | Ñ‚Ñ€|Ð½Ð°Ñ€| ÑÐ°|Ð³Ð¾Ð²|Ð·Ð° |Ð±ÐµÐ·|Ð¾Ñ˜Ð¸|Ñƒ Ð½|Ð²Ð½Ð¾|Ð¸Ñ‡Ð½|ÐµÑ’Ñƒ|Ð»Ð¾ |Ð°Ð½ |Ñ‡Ð½Ð¾|Ñ˜Ð¸ |Ð½Ð°Ðº|Ð¾Ð´Ð°| Ð¼Ðµ|Ð²Ð¸Ð¼|Ñ‚Ð¾ |ÑÐ²Ð¾|Ð°Ð½Ð¸|Ð½Ð°Ñ†| ÑšÐµ|Ð½Ð¸Ðº|ÑšÐµÐ³|Ñ‚Ð¸Ñ‚|Ð¾Ñ˜ |Ð¼Ðµ |Ð½Ð¾Ð¼|Ð¼ Ñ|Ðµ Ñƒ|Ð¾ Ðº|ÐºÑƒ | Ð´Ð¾|Ð¸ÐºÐ°|Ð¸ÐºÐ¾|Ðµ Ðº|Ð¿Ð¾Ñ|Ð°ÑˆÑ‚|Ñ‚Ñ€Ðµ|Ð°Ð»Ð½|Ð½Ð¾Ð³| Ð²Ñ€|Ñ€ÐµÐ±|Ð½ÑÑ‚| ÐºÑ€|ÑÑ‚Ñƒ|Ð´Ð½Ð¾|ÐµÐ¼ |Ð²Ð°Ñ€|Ðµ Ð½|Ñ€Ð¸Ð²|Ñ‚ÑƒÐ¿|Ð¶Ð¸Ð²|Ñ‚Ðµ |Ñ‡Ð¾Ð²|ÑÑ‚ |Ð¾Ð²Ð¸|Ð´Ð½Ð¸|Ð°Ð¾ |ÑÐ¼Ðµ|Ð±Ñ€Ð°|Ð°Ð²Ð¸| Ð»Ð¸|ÐºÐ°Ð¾|Ð²Ð¾Ñ™|Ð¸Ð»Ð¾|Ð¾ Ñ|ÑˆÑ‚Ð²|Ð¸ Ð¼|Ð·Ð°Ñˆ|ÑšÑƒ |Ñ€ÑƒÐ³|Ñ‚Ð°Ð²|Ð°Ð½Ñ|ÐµÐ½Ð¾|Ð¿Ð¾Ñ€|ÐºÑ€Ð¸|Ð¸ Ð±|Ð¾Ð´Ñƒ|Ð° Ñ€|Ð»Ð° | Ñ‡Ð¾|Ð° Ñ‚|Ñ€ÑƒÑˆ|ÑƒÑˆÑ‚| Ð±Ñƒ|Ð±ÑƒÐ´|Ð°Ð²Ñ™|ÑƒÐ³Ð¸|Ð¼ Ð¿|ÐºÐ¾Ð¼|Ð¾Ñ˜Ðµ|Ð²ÐµÑ€| Ð²Ðµ|Ð¿Ð¾Ð´|Ð¸ Ð²|Ð¼ÐµÑ’|ÐµÐ³Ð¾|Ð²Ñ€Ðµ|Ð°ÐºÐ²|ÐµÐ´Ð¸|Ñ‚Ð²Ð¾| ÑÐ¼|Ð¾Ð´ |Ð´ÐµÐ»|ÐµÐ½Ð°|Ñ€Ð°Ð´|Ð±Ð° | Ð¼Ð¾|Ð½Ñƒ |Ð¾ Ñ˜|Ð´ÑÑ‚|ÐºÐ»Ð°| Ð¾Ð¿|ÐºÐ°Ðº|ÑÐ°Ð¼|ÐµÑ€Ðµ|Ñ€Ð¸Ð¼|Ð²Ð¸Ñ‡|Ð¸Ð²Ð°|Ð¾ Ð¾| Ð¾Ð½|Ð²Ð½Ð¸|Ñ‚ÐµÑ€|Ð·Ð±Ðµ|Ñ… Ð¿|Ð½Ð¸Ñ†|ÐµÐ±Ð°|Ðµ Ñ€|Ñƒ Ð²|Ð¸ÑÑ‚|Ð²ÐµÐº|Ñ€ÐµÐ¼|ÑÐ²Ð¸|Ð±Ð¸Ð»|ÑˆÑ‚Ðµ|ÐµÐ·Ð±|Ñ˜ÑƒÑ›|ÑšÐµÐ½|Ð³Ð»Ð°",
                        uzn: "Ð»Ð°Ñ€|Ð°Ð½ |Ð³Ð° |Ð°Ñ€ | Ð²Ð°| Ð±Ð¸|Ð´Ð° |Ð²Ð° |Ð¸Ñ€ | Ò³Ñƒ|Ð¸Ð³Ð°|ÑƒÒ›Ñƒ|Ð±Ð¸Ñ€|Ò³ÑƒÒ›|Ò›ÑƒÒ›|Ð³Ð°Ð½| Ò³Ð°|Ð¸Ð½Ð¸|Ð½Ð³ |Ñ€ Ð±|Ð¸Ñˆ | Ñ‚Ð°|Ð½Ð¸ |Ð¸Ð½Ð³|Ð»Ð¸Ðº|Ð° Ñ|Ð¸Ð´Ð°|Ð¸Ð»Ð¸|Ð»Ð¸Ñˆ|Ð½Ð¸Ð½|Ð°Ñ€Ð¸|Ð¸ÑˆÐ¸| Ð¸Ð½|Ð°Ð´Ð¸|Ð¾Ð½ |Ð¸Ð½Ñ|Ð½ÑÐ¾|ÑÐ¾Ð½|Ð¸Ð¹ |Ð»Ð°Ð½|Ð´Ð¸Ñ€| Ð¼Ð°|ÐºÐ¸Ð½|Ð¸ Ð±|ÑˆÐ¸ |Ò³Ð°Ñ€| Ð±Ñž|Ð±ÑžÐ»| Ð¼Ñƒ|Ð´Ð°Ð½|ÑƒÒ›Ð¸|Ð¸Ð»Ð°|Ò›Ð»Ð°|Ñ€ Ð¸|Ò›Ð¸Ð³|ÑÐ³Ð°| ÑÐ³| ÑžÐ·|ÐºÐ¸ |ÑÑ€Ðº|Ò›Ð¸Ð»|Ð° Ð±|Ð¾Ð»Ð¸|ÐºÐ»Ð°| ÑÑ€|Ð³Ð°Ð´|Ð»Ð³Ð°|Ð½Ð»Ð¸| Ð¾Ð»|Ñ€ÐºÐ¸|Ð¸ Ò³| Ñ‘Ðº|Ñ‘ÐºÐ¸| Ò›Ð°|Ð¸Ð± |Ð¸Ð³Ð¸|Ð»Ð¸Ð³|Ð½ Ð±|Ð½ Ð¼| Ò›Ð¸| Ð±Ð°|Ð°Ñ€Ð°|Ð°Ñ‚Ð»|Ñ€Ð¸ | Ð±Ð¾|Ð»Ð°Ñ‚|Ð±Ð¸Ð»|Ð¸Ð½ |Ò³Ð°Ð¼|Ð° Ñ‚|Ð»Ð°Ñˆ|Ñ€ Ò³|Ð°Ð»Ð°| ÑÑ‚|Ð¸Ð½Ð»|Ð¸Ðº |Ð±Ð¾Ñˆ|Ð½Ð¸Ñˆ|Ñˆ Ò³|Ð¼Ð°Ñ|Ð¸ Ð²|ÑÑ‚Ð¸|Ñ‚Ð¸Ð»|Ñ‚Ð»Ð°|Ð° Ò³|Ð¸ Ð¼|Ð° Ò›|ÑƒÒ›Ð»|Ò›Ð°Ñ€|Ð°Ð½Ð¸|Ð°Ñ€Ð½|Ñ€Ð½Ð¸|Ð¸Ð¼ |Ð°Ñ‚ |Ð¾ÑÐ¸|ÑžÐ»Ð¸|Ð³Ð¸ | Ð´Ð°|Ð° Ð¸|Ð½ Ò³|Ñ€Ð¸Ñˆ|Ð¸ Ñ‚|Ð¼Ð»Ð°|Ð»Ð¸ | Ñ…Ð°|Ð° Ð¼|Ð¸ÑÑ‚| Ð±Ñƒ|Ñ€Ð»Ð°|Ð° Ð°|Ñ€Ñ‡Ð°|Ð±Ð°Ñ€|Ð°ÑÐ¸|ÑžÐ· |Ð°Ñ€Ñ‡|Ð°Ñ‚Ð¸|Ð»Ð¸Ð½|Ñ‡Ð° |Ð»Ð¸Ð±|Ð¼ÑƒÐ¼| Ð°Ñ|Ð°Ñ€Ð¾|Ð° Ð¾|ÑƒÐ½ |Ñ‚Ð°ÑŠ| Ð±Ðµ| Ñ‚Ñƒ|Ð¸ÐºÐ»|Ñ€ Ð²|Ñ‚Ð³Ð°|Ñ‚Ð¸Ð±| ÐºÐµ|Ð½ Ñ|Ñˆ Ð²|Ð¼Ð´Ð°|Ð°Ð¼Ð´|Ð°Ð»Ð¸|Ð½ Ò›|Ð¼Ð°Ñ‚|ÑˆÐ³Ð°| Ñ‚Ðµ|ÑÐ¸Ð´|Ð»Ð»Ð°|Ð¸Ñ€Ð¾| ÑˆÑƒ| Ò›Ð¾|Ð´Ð°Ð¼|Ð° Ñˆ|Ð¸Ñ€Ð»|Ð¸Ð»Ð»|Ñ…Ð°Ð»|Ñ€Ð³Ð°| Ð´Ðµ|Ð¸Ñ€Ð¸|Ñ‚Ð¸Ñˆ|ÑƒÐ¼Ðº|Ð¾Ð»Ð°|Ð°Ð¼Ð»|Ð¼ÐºÐ¸|Ñ‚ÐµÐ½|Ð³Ð¸Ð½|ÑƒÑ€ |Ð° Ñž|Ñ€Ð°Ðº|Ð° Ñ‘|Ð¸Ð¼Ð¾| ÑÑŠ|Ð°Ð»Ò›| ÑÐ°|ÐµÐ½Ð³|Ñ‚Ð°Ñ€|Ñ€Ð´Ð°|Ð¾Ð´Ð°| ÑˆÐ°|ÑˆÒ›Ð°|ÑžÐ»Ð³|ÐºÐ°Ñ‚|ÑÐ¸Ð¹|Ð°Ðº |Ð½ Ð¾|Ð·Ð°Ñ€|Ð¸ Ò›|Ð¾Ñ€ | Ð¼Ð¸|Ð½Ð´Ð°|Ð½ Ð²| ÑÐ¸|Ð°Ð·Ð°|ÐµÑ€Ð°|Ð° Ðº|Ñ‚Ð½Ð¸|Ñ€ Ñ‚|Ð¼Ð¸Ð»| ÐºÐ¸|Ðº Ð±|Ð°Ð½Ð°|Ð°Ð¼ |Ð¾ÑˆÒ›|Ñ€Ð¸Ð½|ÑÐ¾Ñ|Ð°Ñ | ÑÐ¾|ÑÐ¸Ð·|Ð°ÑÐ¾|Ð½Ð¸Ð´|Ð°ÑÐ»|Ð½ Ñž|Ð½ Ñ‚|Ð¸Ð»Ð³|Ð±Ñƒ |Ð¹ Ñ‚|Ñ‚Ð¸ |ÑÐ¸Ð½|Ð´Ð°Ð²|ÑˆÐ»Ð°|Ð½Ð° |Ð»Ð¸Ð¼|Ò›Ð¾Ð½|Ð¸ Ð°|Ð»Ð°Ðº|ÑÐ¼Ð°|Ð¼ÑƒÒ³|ÑŠÑ‚Ð¸|ÑÐ¸ |Ð±Ð¾Ñ€|Ð°Ñˆ |Ð¸ Ñ|Ð°ÐºÐ°|Ð½Ð³Ð°|Ð° Ð²|Ð´ÐµÐº|ÑƒÐ½Ð¸|ÐµÐºÐ»|Ð¸Ð½Ð¾|Ð°Ð¼Ð¸| Ð¶Ð°|Ñ€Ð¸Ð³|Ð° Ð´| ÑÐ¼|Ð²Ð»Ð°|Ð»Ð¼Ð°|ÐºÐµÑ€| Ñ‚Ð¾|Ð»Ð»Ð¸|Ð°Ð²Ð»| ÐºÐ°|ÑÑ‚ |Ð½ Ð¸|Ð°ÑŠÐ»|Ñ‡ÑƒÐ½|Ð°Ð½Ð»|ÑƒÑ‡Ñƒ| ÑƒÑ‡|Ð¸ Ñ|Ð°Ñ‘Ñ‚| Ð¸Ñˆ|Ð° Ñƒ|Ñ‚Ð´Ð°|Ð¼Ð¸Ñ|Ð° Ñ|Ñ€Ð° |ÑžÐ·Ð¸|Ð¾Ð¸Ð¹|Ð°Ð¹ |Ð´Ð¸Ð³|ÑÑŠÑ‚|ÑÐ»Ð°|Ð°Ð³Ð°|Ð½Ð¸Ðº|Ñ€ Ð´|Ñ†Ð¸Ñ| Ð½Ð¸|Ð¸ Ñž|Ð°Ð´Ð°|Ñ€Ð¾Ñ€|Ð»Ð°Ð´|ÑÐ¸Ñ‚|ÐºÐ´Ð°|Ð¸ÐºÐ´|ÐºÐ¸Ð¼",
                        azj: " Ð²Ó™|Ð²Ó™ |Ó™Ñ€ |Ð»Ð°Ñ€| Ò»Ó™|Ð¸Ð½ |Ð¸Ñ€ | Ð¾Ð»| Ò»Ò¯| Ð±Ð¸|Ò»Ò¯Ð³|Ò¯Ð³Ñƒ|Ð³ÑƒÐ³|Ð½Ð° |Ð»Ó™Ñ€|Ð´Ó™ |Ò»Ó™Ñ€| ÑˆÓ™|Ð±Ð¸Ñ€|Ð°Ð½ | Ñ‚Ó™|Ð»Ð¸Ðº|Ñ€ Ð±|Ð¼Ð°Ð»|Ð»Ð¼Ð°|Ð°ÑÑ‹|Ð¸Ð½Ð¸|Ñ€ Ò»|ÑˆÓ™Ñ…|Ó™Ð½ |Ó™Ñ…Ñ|Ð°Ñ€Ñ‹|Ð³Ð»Ð°|Ð´Ð¸Ñ€|Ð° Ð¼|Ð°Ð»Ð¸|ÑƒÐ³Ñƒ|Ð°Ð³ | Ð¼Ð°|Ñ‹Ð½ |Ð¸Ð»Ó™|ÑƒÐ½Ð°|Ñ˜Ó™Ñ‚| Ñ˜Ð°|Ð¸ÐºÐ´|Ð°Ñ€Ð°|Ð°Ñ€ |Ó™Ñ€Ð¸|Ó™ÑÐ¸|Ñ€Ð¸Ð½|Ó™Ñ‚Ð¸|Ñ€ Ñˆ|Ð½Ð¸Ð½|Ð´Ó™Ð½|Ñ˜Ñ˜Ó™|Ð½ Ò»| Ð°Ð·|Ð½Ð¸ |Ó™Ñ€Ó™| Ð¼Ó™|Ð·Ð°Ð´|Ð¼Ó™Ðº|Ð¸Ñ˜Ñ˜| Ð¼Ò¯|ÑÐ¸Ð½|Ñ‚Ð¸Ð½|Ò¯Ð½ |Ð¾Ð»Ñƒ|Ð¸ Ð²|Ð½Ð´Ó™|Ð³ÑƒÐ½|Ñ€Ñ‹Ð½|Ð°Ð·Ð°|Ð½Ð´Ð°|Ó™ Ð°|Ó™Ñ‚ |Ñ‹Ð½Ñ‹|Ð½Ñ‹Ð½|Ð»Ñ‹Ð³|Ð¸Ð»Ð¼| Ð³Ð°| ÐµÑ‚|Ó™ Ñ˜|ÐºÐ´Ð¸|Ó™Ðº |Ð»Ó™ |Ð»Ð¼Ó™|Ð¾Ð»Ð¼|Ñ‹Ð½Ð°|Ð¸Ð½Ð´|Ð»ÑƒÐ½| Ð¸Ð½|Ð¼Ð°Ñ|Ñ…Ñ |ÑÑ‹Ð½|Ó™ Ð±|Ð³ Ð²|Ð½ Ð¼|Ð°Ð´Ð»|Ñ˜Ð° |Ñ‚Ð¼Ó™|Ð½ Ñ‚|Ó™Ð¼Ð¸|Ð½Ó™ |Ð´Ð»Ñ‹|Ð´Ð° | Ð±Ó™|Ð½ÑƒÐ½|Ð±Ó™Ñ€|ÑÑ‹ | Ð¾Ð½|Ó™Ñ˜Ð°|Ó™ Ò»|Ð¼Ð°Ð³|Ð´Ð°Ð½|ÑƒÐ½ |ÐµÑ‚Ð¼|Ð¸Ð½Ó™|Ð½ Ð°|Ñ€Ð»Ó™|ÑÐ¸ | Ð²Ð°|Ó™ Ð²|Ñ€Ð°Ð³|Ð½ Ð±|Ó™ Ð¼|Ð°Ð¼Ð°|Ñ€Ñ‹ |Ð½ Ð¸|Ó™Ñ€Ð°|Ð½Ð¼Ð°|Ñ‹Ð½Ð´|Ð¸Ð½Ñ| Ó©Ð·|Ð°Ð½Ñ‹|Ð°Ð»Ð°| Ð°Ð»|Ð¸Ðº |Ó™ Ð´|Ð»Ó™Ñ‚|Ð¸Ñ€Ð»|Ð¸Ð» | Ð´Ð¸|Ð±Ð¸Ð»|Ñ‹Ò“Ñ‹|Ð»Ð¸ |Ð° Ð±|Ó™Ð»Ó™|Ð´Ð¸Ð»|Ó™ Ðµ|ÑƒÐ½Ð¼|Ð°Ð»Ñ‹|Ð¼Ò¯Ð´| ÑÓ™|Ð½Ñ‹ |Ó™ Ð¸|Ð½ Ð²|Ñ‹Ð³ |Ð½Ð»Ð°|Ò¯Ð´Ð°|Ð°ÑÐ¸|Ð¸Ð»Ð¸| Ð´Ó™|Ð½ÑÐ°|ÑÐ°Ð½|ÑƒÐ³Ð»|ÑƒÐ³ |Ó™Ñ‚Ð»|Ó™ Ð¾|Ñ…ÑÐ¸| Ò»Ðµ|Ð¾Ð»Ð°|ÐºÐ¸Ð»|ÐµÑ˜Ð½|Ñ‚Ó™Ñ€|Ñ˜Ð¸Ð½| Ð±Ñƒ|Ð¼Ð¸ |Ð¼Ó™Ñ|Ð´Ñ‹Ñ€|Ò»Ó™Ð¼| Ð´Ð°|Ð¼Ð¸Ð½|Ð¸Ñˆ | Ò»Ð°| ÐºÐ¸|Ñƒ Ð²|Ð»Ð°Ð½|Ó™Ð½Ð¸| Ð°Ñ|Ñ…Ð°Ð»|Ð±Ñƒ |Ð»Ñ‹Ò“|Ñ€ Ð²| ÐµÐ´|Ñ˜Ð°Ð½|Ñ€Ó™ |Ò»ÐµÑ‡|Ð°Ð»Ð³| Ñ‚Ð°|ÐµÑ‡ |Ð¸ Ñ|Ñ‹ Ò»|ÑÐ¸Ð°|Ð¾ÑÐ¸|ÑÐ¾Ñ|Ñ„Ð¸Ó™|Ð³ Ò»|Ð°Ñ„Ð¸|ÐºÐ¸Ð¼|Ð´Ð°Ñ„| Ó™Ñ|Ó™ Ð³| Ð¸Ñˆ|Ð½ Ó™|Ð¸Ñ˜Ð¸|Ñ‹Ð³Ð»|Ó™Ð¼Ó™|Ñ‹ Ð¾|Ó™Ð´Ó™|Ó™ÑÐ°| ÑÐ¾|Ð° Ð³|Ð»Ñ‹Ð´|Ð¸Ð»Ð»|Ð¼Ð¸Ð»|Ð° Ò»|Ñ‹Ð´Ñ‹|ÑÐ°Ñ|Ð»Ñ‹ |Ð¸ÑÑ‚| Ð¸Ñ|Ð¸Ñ„Ð°|Ð¼Ó™Ð·|Ñ‹Ñ€ |Ñ˜Ð°Ñ€|Ñ‚Ð»Ó™|Ð»Ð¸Ñ˜|Ñ‚Ò¯Ð½|Ð¸Ð½Ð°|Ó™ Ñ‚|ÑÐ¸Ñ˜|Ð°Ð» |Ñ€Ð¸Ð»| Ð±Ò¯|Ð¸Ó™ |Ð±Ò¯Ñ‚| Ò¯Ñ‡|Ò¯Ñ‚Ò¯|Ó©Ð· |Ð¾Ð½Ñƒ| Ð¼Ð¸|Ð¸Ñ˜Ð°| Ð½Ó™|Ð°Ð´Ó™|Ð¼Ð°Ð½|Ò¯Ñ‡Ò¯|Ñ‡Ò¯Ð½|ÑÐµÑ‡|Ñ‹Ð»Ñ‹|Ñ‚ Ð²| ÑÐµ|Ð¸Ð°Ð»|Ð´Ð°Ñ…|ÑÐ¸Ð»|ÐµÐ´Ð¸|Ð½ Ðµ|Ó™Ñ˜Ð¸|Ð°Ñ…Ð¸|Ñ…Ð¸Ð»| Ò¹Ó™|Ð¼Ð¸Ñ˜|Ð¼Ó™Ð½|Ñ€ Ð°|Ó™Ð· |Ð° Ð²|Ð¸Ð»Ð´|Ð¸ Ò»|Ñ‚Ó™Ò»|Ó™Ò»Ñ|Ñ‹ Ð²|Ò»ÑÐ¸|Ð²Ð°Ñ€|ÑˆÓ™Ñ€|Ð°Ð±Ó™|Ð³Ñƒ |Ñ€Ð°Ð±|Ð°Ñ˜Ð°|Ð· Ò»|Ð°Ð¼Ó™|Ñ‚Ð°Ð¼|Ò“Ñ‹Ð½|Ð°Ð´ |ÑƒÒ“Ñƒ|Ð½ Ð´|Ð¼Ó™Ò»|Ñ‚Ó™Ð¼| Ð½Ð¸|Ð¸ Ñ‚| Ñ…Ð°",
                        koi: "Ð½Ñ‹ |Ó§Ð½ | Ð±Ñ‹|Ð´Ð° | Ð¿Ñ€|Ð¿Ñ€Ð°|Ñ€Ð°Ð²| Ð¼Ð¾|Ð»Ó§Ð½| Ð´Ð°|Ð±Ñ‹Ð´|Ð»Ó§ |Ð¾Ñ€Ñ‚|Ð¼Ð¾Ñ€|Ó§Ð¼ |Ð°Ð²Ð¾|Ó§Ð¹ | Ð²Ðµ|Ñ‹Ð´ | Ð½Ðµ|Ð½Ó§Ð¹|Ñ‹Ñ |Ñ‹Ð½ |ÑÓ§ |Ñ‚Ó§Ð¼|ÑÑŒ |Ð²Ð¾ |ÑÐ· |Ð»ÑŒÐ½|ÑŒÐ½Ó§|Ñ‚Ð½Ñ‹|Ð´ Ð¼| Ð°Ñ|Ñ‹Ð½Ñ‹|Ð¼ Ð¿| Ð¿Ð¾|ÑÑŒÓ§| Ð¸ |Ñ‚Ð¾ |Ð±Ñ‹ | Ó§Ñ‚| ÑÐ¼| ÐºÑ‹|Ð°Ð»ÑŒ|Ñ‚Ð»Ó§|Ð½ Ñ| Ð¾Ñ‚|Ð²ÐµÑ€|ÑÐ¼ | ÐºÓ§|Ñ€Ñ‚Ð»|Ó§ Ð²| ÐºÐ¾|Ð²Ð¾Ñ|ÑÑ‚Ð²|ÐµÑ€Ð¼|Ñ‚ÑˆÓ§| Ð´Ð¾|Ð¾Ð»Ð°|Ñ‹Ð»Ó§|Ð²Ð¾Ð»|Ð°Ñ |Ó§Ð´Ð½|ÐºÑ‹Ñ‚|Ñ–ÑÑŒ|ÐµÑ‚Ð¾|Ð½ÐµÑ‚|Ñ‚Ð²Ð¾|Ð»Ñ–Ñ|ÐºÓ§Ñ€|Ó§Ñ | ÑÐµ|Ñ‹ Ñ|ÑˆÓ§Ð¼|Ð° Ñ|Ñ‚Ð° |Ð·Ð»Ó§| Ð¼Ðµ| Ð¾Ð»|Ð°Ñ†Ð¸|Ó§ Ðº|Ó§ Ð´|Ð¼ÐµÐ´| Ð²Ñ‹|Ð²Ð½Ñ‹|Ð° Ð²|Ð½Ð° |Ð· Ð²| Ð½Ð°|Ó§ Ð±|Ð»Ð°Ñ|Ó§Ñ€Ñ‚| Ð²Ð¾| Ð²Ó§| ÑÑ–|Ð»Ð°Ð½|Ñ€Ð¼Ó§|Ð´Ð±Ñ‹|ÐµÐ´Ð±|Ñ‹Ð´Ó§|Ð¾Ð· |Ð°ÑÑŒ| Ð¾Ð·| ÑÑ‹|Ñ‹Ñ‚Ñˆ|Ð¾Ð»Ó§|Ð¾ÑÐ·|Ñ‚Ð¸Ñ€|Ñ Ð¾| Ñ‡Ñƒ|Ñ‹ Ð°|Ð¾Ñ‚Ð¸|Ñ†Ð¸Ñ|Ð¸ÑÑŒ|Ó§Ñ‚Ð»| ÑÑ‚|Ñ€Ñ‚Ñ‹| Ð³Ð¾|Ñ‹ Ð¿|Ñ‹ Ð±|ÐºÐ¾Ð»|Ñ‚Ñ‹Ñ|ÑÐµÑ‚| ÑÑŒ|Ñ€Ñ‚Ñ–|ÐºÓ§Ñ‚|Ð¾ Ñ|Ð½ Ð±|Ð´Ð· |Ð½ Ð½| Ð¼Ñ‹| ÐºÐµ|ÐºÐµÑ€|Ñ‚Ó§Ð½|Ñ‚Ó§Ð³|Ó§Ñ‚Ð½|Ð¸Ñ |Ð° Ð´|Ð¼Ó§ |Ð¾ÑÑ‚|Ó§ Ð¼| ÑÐ¾|Ð¾Ð½Ð´|Ð½Ð°Ñ†|Ð´Ó§Ñ|Ð¸Ñ‚Ó§|ÐµÑÑ‚|Ð²Ñ‹Ð»| Ð²Ð¸|ÑÐ¸Ñ|ÑÑ‚Ð°| ÑƒÐ´|ÑÑƒÐ´|Ð½Ó§ |ÑƒÐ´Ð¶|Ó§Ð³ |Ð¿Ð¾Ð½|Ñ‹ Ð½|Ð½ Ð¿|Ð¼Ó§Ð´|Ð° Ð¿|Ð¾Ñ€Ð¹|Ó§Ð½Ñ‹|Ó§Ð¼Ó§|Ð½ Ð¼|Ñ‚ÑŒ |ÑÑ‹Ð»|Ð°Ð½Ð°|Ñ‚Ñ– |Ð½Ð´Ð°|Ñ€Ð½Ñ‹|ÑÑÐ¸|Ñ€Ñ€Ðµ|ÑƒÐºÓ§|Ð· Ðº|Ñ‡ÑƒÐº|Ð¹Ñ‹Ð½|Ñ€ÐµÐ·| ÑÐ·|Ñ‹ÑÐ»|Ó§Ñ€ |ÑŒÓ§Ñ€|Ñ Ñ|Ñ Ð´|Ñ€Ñ‚ |Ñ Ð²|ÐµÐ·Ð»|ÐºÐ¸Ð½|Ð¾ÑÑƒ|ÑÐ·Ð»|Ð¹ Ð¾|Ð¾Ñ‚Ñ| Ñ‚Ó§|Ñ‹ Ð´| Ð»Ð¾| Ð¾Ð±|Ð¾Ð²Ð½|Ð»Ó§Ñ‚|Ð°ÑÑ|ÐºÓ§Ð´|Ñ Ð¼|Ó§ Ð¾|Ð½Ð°Ð»|Ð±Ñ‹Ñ‚|Ð¾Ð½Ð°|Ó§Ñ‚ |ÑÐ»Ó§|ÑÐºÓ§|ÐºÐ¾Ð½|Ñ‚Ó§Ð´|Ñ‹Ñ‚Ó§|Ð´Ð½Ñ‹|Ð° Ð¼|Ñ‹ Ð¼|Ð½ÐµÐº|Ñ‹ Ðº|Ó§ Ð½|Ð°ÑÐ»|Ð´Ð¾Ñ€|Ó§ Ð¿| Ð´Ðµ| Ð·Ð°|Ð° Ð¾| Ð¾Ð²|ÑÑ‚ÑŒ|Ñ‚Ñ€Ð°| Ð´Ð·|ÑŒ Ðº|Ó§Ñ‚Ñ‡|Ð½ Ðº| ÑÑ‚|Ð°ÑÐ°|ÐµÑ‚Ó§|ÑŒÐ½Ñ‹|Ð¼Ó§Ð»|ÑƒÐ¼Ó§|ÑÑŒÐ½| ÑƒÐ¼|ÐµÑ€Ð½|ÐºÐ¾Ð´| Ð¿Ñ‹|Ñ‚Ð»Ð°|Ð¾Ð»ÑŒ|Ð¸Ð°Ð»|Ð° Ðº|Ð½ Ð¾| ÑÑ|Ð° Ð½|ÑŒ Ð¼|ÐºÑ‹Ð´|Ñ†Ð¸Ð°|ÑÐ° | Ð»Ð¸|Ð° Ð±|ÐµÐ·Ó§|Ð¹ Ð´| Ñ‡Ñ‚|ÑÑŒÐº|ÑÑÓ§|Ð¸Ð¾Ð½|ÐµÑÐº|Ó§ Ñ|Ð¾Ñ†Ð¸|Ñ‡Ñ‚Ð¾|Ð°Ð½ |ÑÐ¾Ñ†|Ð¹Ó§ |Ð¼Ó§Ñ|Ñ‚ÐºÐ¾|Ð·Ñ‹Ð½|Ð½Ó§Ñ|Ð²ÐµÑ|ÐµÐ½Ð½| Ð¼Ó§|Ó§Ñ‚Ðº|Ó§ÑÑŒ|Ñ‚Ó§ |Ñ€Ð»Ó§|Ó§Ñ |Ð¾Ð»Ñ|Ñ€Ð¹Ó§|Ó§Ð¼Ñ‹|Ð³Ð¾Ñ|Ñ‚ÑÓ§|Ð·Ð°Ðº|Ñ€ÑÑ‚|Ð· Ð´|Ð´ÐµÐº|Ð½Ð½Ñ‘|ÑƒÐ´Ð°|Ð¿Ñ‹Ñ€|ÐµÐºÐ¸|Ð°ÐºÐ¾|Ð¾Ð·ÑŒ| Ð° |Ð¸ÑÓ§|Ð¿Ð¾Ð·|Ð´Ð°Ñ€|Ð°Ñ€Ñ|Ñ‹ Ñ‡",
                        bel: " Ñ– | Ð¿Ñ€|Ð¿Ñ€Ð°|Ð°Ð²Ð°| Ð½Ð°|Ð½Ð° | Ð¿Ð°|Ñ€Ð°Ð²|Ð½Ñ‹ |Ñ†ÑŒ |Ð°Ð±Ð¾| Ð°Ð±|Ð²Ð° |Ð°Ñ†Ñ‹|Ð°Ð²Ðµ|Ð°Ðµ | Ñ‡Ð°|Ð½Ð½Ñ|Ð°Ð½Ð½|Ð»ÑŒÐ½| Ð¼Ð°| ÑÐ²|ÑÐ²Ð°|Ð°Ð»Ð°|Ð½Ðµ |Ñ‡Ð°Ð»|Ð»Ð°Ð²|Ð½Ñ |Ð°Ð¹ |Ñ‹Ñ… | ÑÐº|Ð³Ð° |Ð²ÐµÐº|Ðµ Ð¿| Ð°Ð´|Ð° Ð½| Ð½Ðµ|Ð¿Ñ€Ñ‹|Ð°Ð³Ð°| ÐºÐ¾|Ð° Ð¿| Ð·Ð°|ÐºÐ¾Ð¶|Ð¾Ð¶Ð½|Ñ‹ Ñ‡|Ð±Ð¾Ð´|Ð´Ð½Ð°|Ð¶Ð½Ñ‹|Ð²Ð°Ð±|Ñ†Ñ†Ð°|Ñ†Ð° | Ñž |Ð° Ð°|ÐµÐº |Ð¼Ð°Ðµ|Ñ– Ð¿|Ð½Ð½Ðµ|Ð½Ñ‹Ñ…|Ð°ÑÑ†|Ð° Ñ|Ð¿Ð°Ð²|Ð±Ð¾ |Ð°Ð¼ |ÑÑ‚Ð°| ÑÐ°| Ð²Ñ‹|Ð²Ð°Ð½|ÑŒÐ½Ð°| Ð´Ð°|Ð°Ñ€Ð°|Ð´Ð·Ðµ|Ð¾Ð´Ð½|Ð³Ð¾ |Ð½Ð°Ð³|Ð²Ñ–Ð½|Ð°Ñ†ÑŒ|Ð¾ÑžÐ½|Ñ†Ñ‹Ñ|Ð¼Ñ– |Ñ‚Ð¾ | Ñ€Ð°|Ñ– Ð°|Ñ‚Ð²Ð°| Ð°Ñ|ÑÑ‚Ð²|Ð»ÐµÐ½|Ð°Ð²Ñ–|Ð°Ð´ |Ñ– Ñ|ÐµÐ½Ð½|Ñ– Ð½|Ð°Ð»ÑŒ|Ð½Ð°Ð¹|Ð°Ð²Ð¾|Ñ€Ð°Ñ†|Ð°Ñ€Ð¾|Ñ†Ñ– |ÑÑ†Ñ–|Ð¿Ð°Ð´|Ð°Ð¼Ð°| Ð±Ñ‹| ÑÐ³|ÑÐ³Ð¾|Ðº Ð¼|Ñ–Ñ… |Ñ€Ñ‹Ð¼|Ñ‹Ð¼ |ÑÐ½Ð½|ÑˆÑ‚Ð¾|Ñ– Ñ–|Ñ€Ð¾Ð´| Ñ‚Ð°|Ð½Ð°Ð½| Ð´Ð·|Ð½Ñ– |Ñ Ð°|Ð³ÑÑ‚|Ð½Ð°Ñ|Ð°Ð½Ð°| Ð³Ñ|Ñ–Ð½Ð½|Ð° Ð±|Ñ‹Ñ†ÑŒ|Ð´Ð° |Ñ‹Ñ– |Ð¾Ñž |Ñ‡Ñ‹Ð½| ÑˆÑ‚|Ð° Ñž|Ñ†Ñ‹Ñ–|ÑÐºÑ–|Ð´Ð·Ñ|Ð° Ñ–|Ð°Ð³Ñƒ|Ñ Ð¿|Ð½Ñ‹Ð¼|Ð½Ð°Ñ†| Ñƒ | ÑžÑ|Ñ‹Ñ |ÑŒÐ½Ñ‹|Ð¾Ð»ÑŒ|Ð½Ð°Ñ€|ÑžÐ½Ð°|Ñ… Ð¿|Ñ– Ð´|Ñž Ñ–| Ð³Ñ€|Ð°Ð¼Ñ–|Ñ‹Ð¼Ñ–|Ð°Ñ… | ÑƒÑ|Ð°Ð´Ð·| Ð½Ñ–|ÑÑ‚Ð°|Ð»Ñ |Ð²Ð¾Ñž|Ñ‹Ð¼Ð°|Ñ€Ð°Ð´|Ñ‹ Ð¿|Ð·Ð½Ð°|Ñ‡ÑÐ½|Ð½ÐµÐ½|Ð°Ð±Ð°| ÐºÐ°|ÑžÐ»Ðµ|Ñ–Ð½Ð°|Ð±Ñ‹Ñ†|Ñ…Ð¾Ð´| Ñ–Ð½|Ð¾ Ð¿| ÑÑ‚|ÐµÑ€Ð°|ÑƒÐ»ÑŒ|Ð°Ñž |Ð°ÑÐ½|ÑÐ°Ð¼|Ñ€Ð°Ð¼|Ñ€Ñ‹ | ÑÑƒ|Ð½Ð°Ð»|Ð´Ñƒ |ÑŒ Ñ|Ñ‡Ñ‹ |ÐºÐ»Ð°|Ð°Ð½Ñ‹|Ð¶Ð½Ð°|Ñ– Ñ€|Ð¿ÐµÑ€|Ñ– Ð·|ÑŒ Ñƒ|Ð¼Ð°ÑŽ|Ð°ÐºÐ¾|Ñ‹Ñ†Ñ†|ÑÐºÐ¾|Ð´Ð»Ñ|ÑƒÑŽ |Ð³Ñ€Ð°|ÑƒÐºÐ°|Ðµ Ñ–|Ð½Ð°Ðµ|Ð°Ð´Ñ|Ñ– Ñž|ÐºÐ°Ñ†|ÑžÐ½Ñ‹|Ð° Ð·| Ð´Ð»|ÑÑžÐ»|Ð° Ñ€|Ð°ÑŽÑ‡|ÑŽÑ‡Ñ‹|Ð¾Ð´Ñƒ| Ð¿Ðµ| Ñ€Ð¾|Ñ‹ Ñ–|Ð²Ñ‹ |Ñ– Ð¼|Ð°ÑÐ°|Ðµ Ð¼|Ð°Ð´Ñƒ|Ñ… Ð½|Ð¾Ð´Ð°|Ð°Ð´Ð½|Ð½Ð½Ñ–|ÐºÑ– | ÑˆÐ»|Ð°Ð»Ðµ|Ñ€Ð°Ð·|Ð°Ð´Ð°|Ñ… Ñ–|Ð°Ð²Ñ|Ð½Ð°Ð²|Ð°Ð»Ñ–|Ñ€Ð°Ð±|Ñ‹ Ñž|Ð½Ð½Ð°|Ð¼Ð°Ð´|Ñ€Ð¾Ñž|ÐºÐ°Ð½|Ð·Ðµ |Ð´ÑÑ‚|Ð¶Ñ‹Ñ†|Ð°Ð½Ñ–|Ð½ÑÑ‚|Ð·ÑÑ€|Ñ€Ð¶Ð°|Ð·Ð°Ðº|Ð´Ð·Ñ–|Ð»ÑŽÐ±|Ð°ÑŽÑ†|Ð±Ð°Ñ€|Ñ–Ð¼ |ÐµÐ½Ñ‹|Ð±ÐµÑ|Ñ‚Ð°Ð½|Ð¼ Ð¿|Ð´ÑƒÐº|Ðµ Ð°|Ð³ÑƒÐ»|Ñ Ñž| Ð´Ñ|Ð²Ðµ |Ð¶Ð°Ð²|Ð°Ñ†Ñ†|Ð°Ñ…Ð¾|Ð·Ð°Ð±|Ð° Ð²|Ð°Ð²Ñ‹|Ð³Ð°Ð½|Ð¾ Ð½|Ð²Ð°Ð³|Ñ Ñ–|Ñ‡Ð½Ð°|Ñ Ñ|ÑÐ°Ñ†|Ñ‚Ð°Ðº|Ð¾Ð´ |ÑÑ€Ð¶|ÑÐ¾Ð±|Ð¼ Ð½|ÑÐµ |Ñ‡Ð°Ñ†|Ð½Ñ–Ñ‡|Ñ‹ÑÐ»|ÑÐ»ÑŒ|Ñ†Ñ†Ñ|ÑŒ Ð¿|Ð¾ Ñ|Ð²Ð¾Ð»|Ð´ÑÐº| Ð±Ðµ|Ð½Ñƒ |Ð¾Ð³Ð°| Ñ€Ñ|Ñ€Ð°Ñ|Ð±ÑƒÐ´|Ð° Ñ‚|Ð°ÑÐ¾|ÑÐ½Ð¾|ÐµÐ¹Ð½",
                        bul: " Ð½Ð°|Ð½Ð° | Ð¿Ñ€|Ñ‚Ð¾ | Ð¸ |Ñ€Ð°Ð²|Ð´Ð° |Ð¿Ñ€Ð°| Ð´Ð°|Ð° Ñ|ÑÑ‚Ð²|Ð²Ð° |Ñ‚Ð° |Ð° Ð¿|Ð¸Ñ‚Ðµ|Ð½Ð¾ |Ð²Ð¾ |ÐµÐ½Ð¸|Ð° Ð½|Ðµ Ð½| Ð·Ð°|Ð¾ Ð¸|Ð¾Ñ‚Ð¾|Ð²Ð°Ð½|Ð½Ðµ | Ð²Ñ|Ñ‚Ðµ |ÐºÐ¸ | Ð½Ðµ|Ð¾ Ð½|Ð¾Ð²Ðµ| Ð¿Ð¾|Ð° Ð¸|Ð°Ð²Ð°|Ñ‡Ð¾Ð²|Ð½Ð¸ |Ð°Ð½Ðµ|Ð¸Ñ | Ñ‡Ð¾|Ð°Ð²Ð¾|Ð¸Ðµ | ÑÐ²|Ðµ Ð¿|Ð° Ð´| Ð¾Ð±|Ð²ÐµÐº|ÐµÑÑ‚|ÑÐ²Ð¾| Ð¸Ð¼|Ð¸Ð¼Ð°|Ð¾ÑÑ‚|Ð¸ Ð´|Ð¸ Ñ‡|Ð°Ð½Ð¸|Ð¸Ð»Ð¸|Ð²ÑÐµ|Ð»Ð¸ |Ñ‚Ð²Ð¾|Ð¸ Ñ|Ð½Ð¸Ðµ|Ð²Ð¾Ñ‚|Ð° Ð²|Ð²Ð°Ñ‚|Ð¼Ð° | Ñ€Ð°|Ð¸ Ð¿|Ð¸ Ð½| Ð² |ÐµÐº |ÑÐµÐº|ÐµÐºÐ¸|Ð° Ð¾| Ð¸Ð»|Ðµ Ð¸|Ð¿Ñ€Ð¸| ÑÐµ|Ð¾Ð²Ð°|ÐµÑ‚Ð¾|Ð°Ñ‚Ð°|Ð²Ð¾Ð±|Ð¾Ð±Ð¾|Ð±Ð¾Ð´|Ð°Ñ†Ð¸|Ð°Ñ‚ |Ð¿Ñ€Ðµ|Ð¾Ð´Ð¸|Ðº Ð¸| Ð±ÑŠ| ÑÑŠ|Ñ€Ð°Ð·| Ð¾Ñ|Ñ€ÐµÐ´| ÐºÐ°|Ð° Ð±|Ð¾ Ð´|ÑÐµ | ÐºÐ¾|Ð±ÑŠÐ´|Ð»Ð½Ð¾|Ð½Ð¸Ñ|Ð¾ Ð¿| Ð¾Ñ‚|ÑŠÐ´Ðµ|Ð¾ Ð²|Ð·Ð° |ÑÑ‚Ð°| Ðµ | Ñ‚Ñ€|Ð¸ Ð¸|Ð¾ Ñ|Ñ‚ÐµÐ»|Ð¸ Ð²|Ð½Ð¸Ñ‚|Ðµ Ñ|Ñ€Ð°Ð½| Ð´Ðµ|Ð¾Ñ‚ |Ð¾Ð±Ñ‰|Ð´Ðµ |ÐºÐ° |Ð±Ñ€Ð°|ÐµÐ½ |ÑÐ²Ð°|Ñ†Ð¸Ñ|Ð¿Ñ€Ð¾|Ð°Ð»Ð½|Ð¸ Ð¾|Ð¸ÑÑ‚|ÑÑ‚ |Ð½Ð¾Ð²| Ð´Ð¾|ÐµÐ³Ð¾|ÐºÐ°Ðº|Ð°Ñ‚Ð¾| Ð¸Ð·|Ð½ÐµÐ³|Ð° Ñ‚|Ð´ÐµÐ½|Ð° Ðº|Ñ‰ÐµÑ|Ð° Ñ€|Ñ‚Ñ€Ñ|Ð° Ñ‡|Ñ€ÑÐ±|Ð¾ Ð¾|Ð²ÐµÐ½|ÑÐ±Ð²|Ð±Ð²Ð°|Ð´ÑŠÑ€|Ð³Ð¾Ð²|Ð½Ð°Ñ†|ÐµÐ½Ð¾|Ñ‚Ð²Ðµ|ÑŠÑ€Ð¶|Ðµ Ð´|Ð½Ð¾Ñ|Ñ€Ð¶Ð°|Ð° Ð·|Ð²Ð¸Ñ‚|Ð·Ð¸ |Ð°ÐºÐ²|Ð»ÐµÐ½| Ñ‚Ð°|ÐµÐ¶Ð´|Ð¸ Ð·|Ñ€Ð¾Ð´|Ðµ Ð¾|Ð¾Ð±Ñ€|Ð½Ð¾Ñ‚| Ð½Ð¸| Ñ |Ñ‚ Ñ|Ð½Ð°Ñ€|Ð¾ Ñ‚|Ð¾Ð½Ð°|ÐµÐ· |Ð¹ÑÑ‚|ÐºÐ°Ñ‚|Ð¸Ñ‡Ðµ| Ð±Ðµ|Ð¶Ð°Ð²|Ðµ Ñ‚|Ðµ Ð²|Ñ‚Ð²Ð°|Ð·Ð°Ðº|Ð°Ñ€Ð¾|ÐºÐ¾Ð¹|Ð¾ÑÐ½| Ð»Ð¸|ÑƒÐ²Ð°|Ð°Ð²Ð½|ÐµÐ¹Ñ|ÑÐ½Ð¾|Ñ€ÐµÑ|Ð¿Ð¾Ð»|Ð½ÐµÐ½|Ð²Ð½Ð¸|Ð±ÐµÐ·|Ñ€Ð¸ |ÑÑ‚Ñ€| ÑÑ‚|ÑÑ‚Ð¾|Ð¿Ð¾Ð´|Ñ‡ÐºÐ¸|Ð²Ð¸Ð´|Ð³Ð°Ð½|ÑÐ¸ |Ð´Ð¸ |Ð¸ Ðº|Ð½ÑÑ‚| Ñ‚Ðµ|Ð° Ðµ|Ð²ÑÐ¸|ÐµÐ¾Ð±| Ð´ÑŠ|ÑÐ¸Ñ‡|Ð¸Ñ‡Ðº|ÐµÐ´Ð²|Ð¶ÐµÐ½|Ð½Ð¸Ðº|Ð¾Ð´Ð°|Ñ‚ Ð½|Ð¾ Ñ€|Ð°ÐºÐ°|ÐµÐ»Ð¸|Ð¾Ð´Ð½|ÐµÐ»Ð½|Ð»Ð¸Ñ‡| Ñ‡Ðµ|Ñ‡ÐµÑ|Ð±Ñ‰Ðµ| Ñ€Ðµ|Ð¸ Ð¼| ÑÑ€|ÑÑ€Ðµ|Ð¸ Ñ€|ÑÐ° |Ð»Ð½Ð¸| ÑÐ¸|Ð´Ð²Ð¸|Ð¸Ñ‡Ð½|Ð¶Ð´Ð°| ÐºÑŠ|Ð¾ÐµÑ‚|Ð¸Ñ€Ð°|Ñ Ð½|Ð´ÐµÐ¹| Ð¼Ðµ|ÐµÐ´Ð¸|Ð´Ñ€Ñƒ|Ñ…Ð¾Ð´|ÐµÐ¼Ðµ|ÐºÑ€Ð¸|Ñ‡Ðµ |Ð´Ð¾Ñ|ÑÑ‚Ð°|Ð³Ñ€Ð°| Ñ‚Ð¾|Ð¾Ð¹ |Ñ‚ÑŠÐ¿|Ð²ÑŠÐ·|Ð¸ÐºÐ¾|Ð¸ Ñƒ|Ð½ÐµÑ‚| ÑÐ¾|Ð°Ð²Ð¸|Ñ‚Ð¾Ð¹|ÐµÐ»Ñ|Ð¼ÐµÐ¶|Ñ‡Ð¸Ñ‚|Ð¸Ñ‚Ð°|Ñ‰Ð¾ |ÑŠÐ¼ |Ð°Ð·Ð¾|Ð·Ð¾Ð²|Ð½Ð¸Ñ‡|Ð½Ð°Ð»|Ð´Ð½Ð¾| Ð¼Ð¾|Ð¸Ð½Ðµ|Ð° Ñƒ|Ñ‚Ð½Ð¾|Ñ‚Ð°Ð·|ÐºÐ¾Ð½|Ð»Ð¸Ñ‚|Ð°Ð½ |ÐºÐ»ÑŽ|Ð»ÑŽÑ‡|Ð¿Ð¾Ñ|Ñ‚Ð²Ð¸|Ð° Ð¼|Ð¹ Ð½|Ñ‚ Ð¸|Ð¸Ð·Ð²|Ñ€ÐµÐ·|Ð°Ð·Ð¸|Ñ€Ð° |Ð¾ÑÑ‚|Ð½ÐµÐ¾|Ñ‡Ñ€Ðµ",
                        kaz: "ÐµÐ½ |Ð½Ðµ | Ò›Ò±|Ñ‚Ð°Ñ€|Ò±Ò›Ñ‹| Ð±Ð°| Ò›Ð°|Ò“Ð° |Ð°Ð´Ð°|Ð´Ð°Ð¼|Ò›Ò±Ò›|Ñ‹Ò› | Ð±Ð¾| Ð°Ð´|Ñ‹Ò›Ñ‚|Ò›Ñ‚Ð°|Ñ‹Ð½Ð°|Ð°Ñ€ | Ð¶Ó™|Ñ‹Ò£ |Ñ‹Ð»Ñ‹|Ó™Ð½Ðµ|Ð¶Ó™Ð½| Ð½Ðµ|Ð¼ÐµÐ½|Ð»Ñ‹Ò›|Ð½Ð° |Ñ€ Ð°|Ð´Ðµ | Ð¶Ð°|Ñ–Ð½ |Ð° Ò›|Ð°Ñ€Ñ‹|Ð°Ð½ | Ó™Ñ€|Ò›Ñ‹Ð»|Ð°Ñ€Ð°|Ð°Ð»Ð°| Ð¼Ðµ|Ð½ Ò›|ÐµÐ¼Ðµ|ÑƒÒ“Ð°|Ð½Ñ‹Ò£| Ð´Ðµ|Ð°ÑÑ‹|Ð°Ð¼ |Ñ–Ð½Ðµ|Ñ‚Ð°Ð½|Ð»Ñ‹ |Ð½Ð´Ñ‹|Ð´Ð° |Ó™Ñ€ |Ñ‹Ò“Ñ‹|ÑÑ‚Ð°|ÐµÐºÐµ| Ó©Ð·|Ñ‹Ð½ |Ò“Ð°Ð½|Ð°Ð½Ð´|Ð¼ÐµÑ| Ð±Ñ–| Ò›Ð¾|Ð´Ñ‹ |Ñ–Ò£ |Ð±Ð°Ñ|Ð±Ð¾Ð»|ÐµÑ‚Ñ‚|Ñ‹Ð¿ |Ð½ Ð±|Ñ–Ð»Ñ–|Ò›Ñ‹Ò›|Ð½Ð´Ðµ|ÐµÑ€Ñ–|Ðµ Ò›|Ð°Ð»Ñ‹|Ð½ÐµÐ¼|ÑÐµ |Ð±Ñ–Ñ€|Ð»Ð°Ñ€|ÐµÑÐµ|Ñ‹ Ð±|Ñ‚Ñ‹Ð½|Ð° Ð¶| ÐºÐµ|Ñ‚Ð¸Ñ–|Ð¾ÑÑ‚|Ð³Ðµ |Ð±Ð°Ñ€| Ñ‚Ð¸|Ðµ Ð±| Ð°Ñ€|Ð´Ñ‹Ò›|ÑÑ‹ |Ñ–Ð½Ð´|Ðµ Ð°|Ð°Ñ‚Ñ‹| Ñ‚Ð°| Ð±Ðµ|Ñ‹ Ñ‚|Ñ–Ðº |Ð¾Ð»Ñ‹|Ð½Ð´Ð°|Ò“Ñ‹Ð½|Ñ€Ñ‹ |Ð¸Ñ–Ñ|Ò“Ñ‹ | Ñ‚Ðµ|Ð±Ð¾Ñ|Ð»ÑƒÑ‹|Ð°Ð»Ñƒ|ÑÑ‹Ð½|Ñ€Ñ‹Ð½|ÐµÑ‚Ñ–|Ñ–Ñ |Ñ€Ð´Ðµ|Ò›Ñ‹Ò“|Ðµ Ð¶|Ñ€Ñ–Ð½|Ð´Ð°Ñ€|Ñ–Ð½Ñ–|Ð½ Ð¶|Ñ‚Ñ‚Ñ–|Ò›Ð°Ñ€|Ð½ Ðº|Ñ–Ð¼ | ÐµÑ€|ÐµÐ³Ñ–|Ñ‹Ñ€Ñ‹|Ñ‹Ð½Ñ‹| ÑÐ°|Ñ€Ò“Ð°|Ð³ÐµÐ½|Ñ‹Ð½Ð´|Ð°Ð½Ñ‹|ÑƒÑ‹Ð½|Ñ‹ Ð¼|Ð»Ò“Ð°|Ð°Ð½Ð°|Ð½Ñ–Ò£|Ñ‚ÐµÑ€|ÑƒÑ‹ |ÐµÐ¹ |Ñ‚Ñ–Ðº|ÐºÐµ |ÑÒ›Ð°|Ò›Ð° |Ð¼Ñ‹Ñ|Ñ‚Ñ‹Ò›|Ð¼ Ð±|Ð°Ñ€Ð´| Ð¾Ñ‚|Ðµ Ð½|Ðµ Ñ‚|Ð¼Ð½Ñ‹|Ó©Ð·Ñ–|Ð½Ð°Ð½|Ð³Ñ–Ð·|ÐµÐ³Ðµ| Ð½Ð°|Ñ‹ Ó™|Ð°Ð·Ð°|Ò£ Ò›|Ð»Ð°Ð½|Ð½ÐµÐ³|Ð°ÑÒ›|ÐºÑ–Ð½|Ð°Ð¼Ð½|ÐºÐµÑ‚|Ñ€Ð°Ð»|Ð°Ð¹Ð´|Ð»ÑƒÒ“|Ð°ÑÐ°|Ñ‚Ñ– |Ñ€Ð´Ñ‹|Ñ– Ð±|Ð° Ð±|Ñ€Ñƒ | Ð¶Ðµ|Ñ€ Ð¼|Ð´Ñ– |Ñ‚Ñ‚Ð°|Ð¼ÐµÑ‚|Ð»Ñ–Ðº|Ñ‚Ñ‹Ñ€|Ð°Ð¼Ð°|Ð¶Ð°Ñ|Ð½ Ð½|Ð»Ñ‹Ð¿| Ð¼Ò¯|Ð´Ð°Ð¹|Ó©Ð· |Ñ–Ð³Ñ–| Ð°Ð»|Ð°ÑƒÐ´|Ð´ÐµÐ¹|Ð·Ñ–Ð½|Ð±ÐµÑ€|Ñ€ Ð±|ÑƒÐ´Ð°|ÐºÐµÐ»|Ð±Ñ–Ð»|Ñ– Ñ‚|Ò›Ð¾Ñ€|Ñ‚ÐµÒ£|Ð»Ð³Ðµ| Ð¶Ò¯|Ð´ÐµÐ½|Ñ‹ Ð°|ÐµÐ»Ñ–|Ð´ÐµÑ€|Ñ‹ Ð¶|Ð° Ñ‚|Ñ€Ò›Ñ‹|Ñ€Ð»Ñ‹|Ð°Ñ€Ò›| Ñ‚Ò¯|Ò›Ð°Ð¼|ÐµÐ»Ðµ|Ð° Ð¾|Ðµ Ó©|Ñ‚Ñ–Ð½|Ñ–Ñ€ |ÐµÒ£ |ÑƒÐ³Ðµ|Ðµ Ð¼|Ð»Ð´Ðµ|Ð°Ñƒ |Ð°ÑƒÑ‹|Ñ€ÐºÑ–|Ð½ Ð°|Ñ‹ Ðµ|Ð¾Ð½Ñ‹|Ð½ Ñ‚|Ñ€Ñ‹Ð»|Ñ‚Ò¯Ñ€|Ñ†Ð¸Ñ|Ð³Ñ–Ð½| Ñ‚Ð¾| Ñ…Ð°|Ð¶Ð°Ò“|Ð¾Ò“Ð°|Ð¾ÑÑ‹|Ð·Ð´Ðµ| Ð¾Ñ|Ñ–ÐºÑ‚|ÐºÑ‚Ñ–|Ð° Ð´|Ò±Ð»Ñ‚|Ð»Ñ‚Ñ‚|Ñ‚Ñ‚Ñ‹|Ð»Ñ–Ð¼|Ò“Ð´Ð°| Ð°Ñƒ| Ð´Ð°|Ñ…Ð°Ð»|Ñ‚Ñ‚Ðµ|Ð»Ð¼Ð°| Ò±Ð»|Ð°Ð¼Ð´|Ò›Ò±Ñ€|Ñ–Ñ€Ñ–|Ò›Ð°Ñ‚|Ñ‚Ð°Ð»|Ð¾Ñ€Ò“|Ð·Ñ– |ÐµÐ»Ð³|ÑÑ–Ð·|Ð°Ò“Ñ‹| ÐµÐ»|Ò£ Ð±|Ñ‹Ñ | Ð°Ñ|Ñ–Ð¼Ð´|Ð¾Ñ‚Ñ‹| Ó™Ð»|Ð½ Ðµ|Ð°Ò“Ð´|Ò›Ñ‚Ñ‹|ÑˆÑ–Ð½|ÐµÑ€Ðº|Ðµ Ð´|ÐµÐº |ÐµÐ½Ñ–|ÐºÑ–Ð¼|Ñ‹Ð»Ð¼|ÑˆÑ–Ð»|Ð°Ò“Ð°|ÑÑ‚Ñ‹|Ð»ÐµÑ€|Ð³Ñ– |Ð°Ñ‚Ñ‚|ÐºÐµÐ½| ÐºÓ©|Ñ‹Ð¼â€| ÐºÒ±|ÐºÒ±Ò›|Ñ€Ð° |Ñ€Ñ–Ðº|Ð½ Ó™| ÐµÑˆ",
                        tat: " Ò»Ó™|Ð»Ð°Ñ€|Ó™Ð¼ |Ò»Ó™Ð¼| ÐºÐµ| Ñ…Ð¾|ÐºÑƒÐº|Ð¾ÐºÑƒ|Ñ…Ð¾Ðº|ÐµÑˆÐµ| Ð±Ðµ|Ð»Ó™Ñ€|ÐºÐµÑˆ|Ð³Ð° |Ó™Ñ€ |Ñ€Ð³Ð°|Ð°Ð½ |ÐºÐ»Ð°| Ð±Ñƒ|Ð°Ñ€ |ÐµÒ£ |Ð½ÐµÒ£|Ð³Ó™ | Ñ‚Ð¾| Ð±Ð°|Ð´Ð° |Ñ€Ð³Ó™| Ñ‚Ð¸|Ñ‹Ñ€Ð³|Ò»Ó™Ñ€|ÐµÐ½Ðµ|Ð±ÐµÑ€|Ó™Ð½ |ÐµÐ½ |Ñ€ Ðº|Ð±ÑƒÐ»|ÑƒÐºÐ»|Ð´Ó™ |Ð° Ñ‚|Ð°Ñ€Ñ‹|Ñ‚Ð¾Ñ€|Ð¸Ñ€Ðµ| Ò¯Ð·|Ð½Ð° |Ð³Ð°Ð½|Ð°Ñ€Ð°| ÐºÐ°| Ð°Ð»|Ó™ Ñ‚|Ð½Ó™ | Ð¸Ñ‚| Ð´Ó™|Ñ‹ Ð±| Ð¸Ñ€|Ñ€Ñ‹Ð½|ÑˆÐµ |Ñ‹Ð½ |ÐµÐ½Ó™|Ñ‚Ð¸Ðµ|Ð»Ñ‹Ðº|ÐµÐºÐ»|Ñ‹Ð½Ð°|Ð½ Ñ‚|Ð¸ÐµÑˆ|Ð±Ð°Ñ€|ÐµÐ»Ðµ|ÐºÐ° |ÐµÐ»Ó™|Ð° Ñ…|Ð½ Ð±|ÐºÑ‹ |Ñ€ÐµÐº|Ð°Ð»Ð°|ÐºÐ°Ñ€| Ñ‚Ð°|Ó™ Ðº|Ð½Ð´Ð°|ÐµÑˆ |Ð»Ó™Ð½|Ð±ÐµÐ»|ÑƒÐºÑ‹|Ð»Ð°Ð½|Ð¸Ñ‚Ðµ|Ñ‚Ó™ |ÑˆÐµÐ½|Ð»Ðµ |Ð»Ñ‹ |ÐµÐ· |ÐµÑ€Ð³|Ð½ Ð¸|Ó™ Ð±|Ð° Ðº|ÐºÐ»Ó™|Ò¯Ð· |Ñ‚ÐµÐ»|Ð»Ñ‹Ñ€|Ð½Ðµ |Ó™Ñ€Ð³|Ñ‹ Ò»|Ðµ Ð±| Ð³Ð°| Ñ…Ð°|Ð°Ð»Ñ‹|Ñ€Ð½Ðµ|Ð¼ Ð¸|Ñ‚ÐµÐ½|Ó™Ñ€Ð½|Ð° Ð±|Ð½Ñ‹Ò£|Ñ‹Ð½Ð´|Ñ‹Ò£ |Ð»Ó™Ñ‚|Ð´Ð°Ð½|ÑÓ™ | ÑÐº|Ð»Ð³Ð°|ÑƒÐ»Ñ‹|ÐµÐ» |Ð° Ð°| ÑÐ¸|ÑÐ¸Ñ|Ð°ÑÑ‹|Ñˆ Ñ‚|Ð° Ò»| ÑÐ°|Ñ€Ð»Ó™|Ð»ÐµÐº|Ð¸Ð³Ðµ|Ó™ Ñ…|Ð³ÐµÐ·|Ð¾Ñ€Ð¼|ÐµÐ¼ |Ð°Ð½Ñ‹|Ñ€ Ð±|Ð¼ Ð°|Ñ€ Ò»|Ñ€Ð¼Ñ‹|Ð¼Ñ‹Ñˆ|ÑÑ‹Ð½|ÑˆÐºÐ°|Ó™ Ò»|Ð¸ÑÓ™|Ñ‚Ó™Ñ€|Ò¯Ð»Ó™|Ó™Ñ‚ |Ð¼Ó™Ñ‚|ÑÐµÐ½|ÑÐµÐ·|Ñ‡ÐµÐ½| Ð½Ð¸|Ó™ Ð¸|Ð½ Ð¼|Ð¸Ð»Ð»|ÑÑ‚ÑŒ|Ð½Ñ‹ |Ñ‹Ð»Ñ‹|Ò¯Ð·Ðµ| ÐºÐ¸| ÑÑˆ| Ñ‚Ñƒ|Ð°Ð»Ñƒ|Ð°ÐºÑ‹|Ñ‹Ð¿ |ÑƒÐ³Ð°|Ð»ÑŒ |Ñ‚Ð°Ð½|Ð½ Ðº|Ð»Ñƒ |Ð±Ñƒ |Ð¼Ð°Ñ|Ñ€ÐµÐ½|ÐºÓ™ | Ñ‚Ò¯| Ñ‚Ó™|Ñ‚Ò¯Ð³|Ð·ÐµÐ½| Ò—Ó™|Ñ‚Ñ‹Ð½|Ð´Ð¸ |Ð±Ð°Ñˆ|ÐºÐ»Ðµ|Ð³Ó™Ð½|Ñ‚ÑŒ | Ð±Ð¸|Ó™Ñ€Ðµ|ÑˆÑ‚Ó™|Ð³Ñ‹Ð½|Ó™Ò¯Ð»|ÐµÑ€ |Ð¼Ð¸Ð»| Ð¼Ð¸|ÐºÐ»Ñ‹|Ð³ÐµÐ»|Ñ‹Ñˆ |Ð»ÐµÑ€|ÐµÑ€Ð»|Ó™Ð²Ðµ|Ñ€Ð´Ó™|Ð° Ñ|Ñ€ Ð°| Ð¼Ó™| Ñ€Ó™|Ð»ÐµÐ¼|Ñ…Ð°Ð»| Ð°Ð½|Ò£ Ñ‚| Ð°Ñˆ|Ñ‹Ðº |Ñ†Ð¸Ñ|Ðµ Ñ…|ÑÑ‚Ó™|Ó™ Ð´|Ð°Ð»ÑŒ|Ñ€Ð°Ðº|ÐµÐº | Ð´Ðµ|Ñ€Ó™Ð²|Ñ‚Ð¾Ñ‚|ÐºÓ™Ð½|ÑƒÐ»Ð³|Ð¾Ñ€Ð³|Ð²ÐµÑˆ|ÐµÑˆÑ‚|Ð½Ð¸ |Ð¸Ñ‚Ó™|ÐºÐºÐ°|Ð¼ Ñ‚|Ò¯Ð³Ðµ|ÑˆÐµÐ»|Ð° Ð¸|Ð½Ð´Ó™| Ð´Ð°|Ñ€ÐµÐ»|ÐºÐµÑ€| ÐºÑ‹|ÐµÑ€Ó™|Ñ‚Ð° |Ð½ Ñ|ÐµÐ³Ðµ|Ñ‹Ð¹ |Ð° Ð´|Ð°Ñ†Ð¸|Ñ€ Ð¾|ÑˆÐ»Ð°|Ñ‚Ð»Ó™|Ó™Ñ‚Ð»|Ð½ Ð´|Ð°Ð¹Ð»|Ð»Ð»Ó™|Ð°Ñ€Ð´|Ñ€Ð´Ð°|ÐºÑ‚Ð°|ÑˆÐºÓ™| Ð·Ð°|Ð³Ðµ |Ð»Ó™Ñˆ|Ñˆ Ð±|Ó™ÑÐµ|ÐºÐ¾Ð½|ÑˆÑ‹Ñ€|Ñ†Ð¸Ð°|Ð½Ð¸Ð½|Ð»Ð°Ñƒ|ÑƒÑ€Ñ‹|Ñ€Ñ‹ |Ð¾Ñ‚Ñ‹|Ó™Ð½Ðµ| Ñ‚Ó©|Ð¸Ð½Ð´|Ð½Ð´Ð¸| Ò—Ð¸|Ð¾Ñ†Ð¸|ÑÐ¾Ñ†|Ð»Ó™ |Ð°Ñ€Ñ‚|ÑÐºÐ»|Ð·Ð°Ðº|Ñ‚Ð¸Ð³|Ñ€ÐºÐµ| Ð´Ð¸| ÑÐ¾|Ñ‹ÐºÐ»|ÐºÐµÐ¼| ÐºÐ¾|Ñ€ Ð¸|Ò£ Ð±|Ó™Ñ‚Ðµ|Ð³Ñ‹Ñ|Ñ‡Ð°Ñ€|Ò¯Ð³Ó™|Ð¸Ð½ |Ð¸Ð»Ðµ| ÑÓ™| Ð¸Ð»|Ð¼Ð³Ñ‹| Ð°Ðµ|Ð½ Ð°|Ð°ÐµÑ€|Ñ‹Ð½Ñ‹|Ð» Ò»",
                        tuk: " Ð±Ð¸|Ð»Ð°Ñ€| Ð²Ðµ|Ð²Ðµ |Ð´Ð° |Ð°Ð´Ð°|Ð°Ñ€Ñ‹| Ñ…Ðµ|Ð¸Ñ€ | Ð°Ð´|Ð±Ð¸Ñ€|Ð´Ð°Ð¼|ÐºÐ»Ð°|ÐµÑ€ |Ñ€ Ð±|Ñ‹Ò£ | Ñ…Ð°|Ð°Ñ€Ð°|Ð³Ð° |ÐµÐ½ |Ð»Ð°Ð½|Ñ‹Ð½Ñ‹|Ð¸Ð»Ð¸|Ð´Ñ‹Ñ€|Ð°Ð¼ |Ð°Ð»Ð°| Ð±Ð¾|Ñ…ÐµÑ€|Ñ€ Ð°|Ñ‹Ñ€ |Ð»Ñ‹ |Ð»ÐµÑ€|Ð°Ð½ |Ð±Ð¸Ð»|Ð¸Ò£ |Ñ‹Ð´Ñ‹|Ñ€ Ñ…|Ð°ÐºÐ»|Ð½Ð´Ð°| Ó©Ð·|ÐºÐ»Ñ‹|Ð½Ñ‹ |Ñ…ÑƒÐº|ÐµÑ€Ð¸| Ñ…Ñƒ|ÑƒÐºÑƒ|Ð°Ð³Ð°|Ð½Ðµ |Ð»Ñ‹Ð´|Ð¸Ð½Ðµ|Ñ‹Ð½Ð°|Ð»ÐµÐ½|Ð½Ð° |Ñ…Ð°Ðº|Ð´Ðµ |â€Ð´Ð°|Ð¸Ð½ |Ñ€Ñ‹Ð½|Ð°Ñ‚Ð»| ÑÐ´|Ð¼Ð°Ð³|Ó©Ð· | Ð´Ðµ|Ð°ÑÑ‹|Ð»Ñ‹Ð³|ÐºÑƒÐº|Ðµ Ð°|Ñ‹Ð½Ð´|Ð°Ð»Ñ‹|Ð»Ð¼Ð°|Ð±Ð¾Ð»|Ð´Ð°Ð½|Ð¸Ð½Ð¸|Ð° Ñ…| Ñâ€|Ðµ Ñ…|Ð³Ðµ |Ð¸Ð»Ðµ|Ñâ€Ð´|Ð°Ñ€ |Ð°Ð¼Ð°|Ð»Ð¸ |Ñ‹Ð³Ñ‹|ÐµÑ‚Ð¸| Ð±Ð°| Ð³Ð°|Ð³Ñ‹Ð½|ÐµÑ€Ðµ|ÑƒÐºÐ»|Ð»Ð¸Ð³|Ð½Ñ‹Ò£|Ð·Ð°Ñ‚|Ð»Ñ‹Ðº|Ñ‚Ð»Ñ‹|Ð½Ð´Ðµ|Ð½Ð¸ |Ð»Ð¸Ðº|Ð´ÐµÐ½|Ð¼Ð°Ðº|ÑÑ‹Ð½|Ð´Ð¸Ð»|Ñ€Ñ‹ |Ð°Ð½Ñ‹|ÐºÐ¸Ð½|Ó™Ð³Ðµ|Ð¿ Ð±|Ð° Ð³|Ñ…ÐµÐ¼|Ð¸Ð³Ð¸|ÑÑ€Ðº|Ð°Ð·Ð°|Ð° Ð´|Ð¼ÐµÐº| ÑÑ€|Ð¼Ð°Ð»|Ñ‹ÐºÐ»|Ð¼Ó™Ð³|ÑÐ°Ñ| ÑÑ|ÐµÐºÐ»| Ð¼Ð°|Ñ€Ð¸Ð½|ÑÑÐ°|Ð¾Ð»Ð°|Ñ‹ Ð±|Ð°Ð¹Ñ‹|Ð½ Ñ|ÑÐ´Ð¸| Ð³Ó©| Ñ…Ð¸|ÑÑ‹ | Ð°Ð·|Ð±Ð°Ñˆ|Ñ‹ Ð´|Ð¹Ð´Ð°|ÑˆÐ³Ð°|Ð°ÑˆÐ³|Ð° Ð²| Ð´Ð¾|Ñ‹ÐµÑ‚|Ñ‹ Ð²|Ð´Ð°Ðº|Ð½Ð¸Ò£|Ñ€ÐºÐ¸|Ð³Ð°Ð»|Ñ‡Ð¸Ð½|Ð³Ð´Ð°|Ð°Ðº | Ò—Ðµ|Ð° Ð±| ÑÑ‚|ÑÑ‚Ð¼|ÐºÑ‹ |Ð»ÐµÑ‚|Ð¹Ó™Ð½| Ñ‚Ð°|Ð³Ð¸Ð½|ÑÐ½ |Ñ‚Ð¼Ðµ|Ñ…Ð¸Ñ‡|Ð¸Ñ‡ |Ð¼ÐµÐ·| Ð³Ñƒ|Ñ…Ð°Ð»|Ñ‹Ð»Ñ‹|Ò¯Ð½Ð´|Ð¸Ð»Ð¼|Ð´Ð°Ð¹|ÑÐ³Ð´| ÑÐ³|Ð¸ Ð²|Ð¸Ð¼ |Ð°ÐºÑ‹|Ñ‹ Ð³|Ó™Ð½ |Ð° Ð°|Ñ€Ñ‹Ò£|Ð³Ð¸ |Ñ‚Ð»Ðµ|Ð½ Ð¼| Ð³Ð¾|Ð¸Ð¿ |Ð°Ð» |ÐµÑÐ¸| ÑÐµ|Ð»Ð¼Ðµ| ÐºÐ°|Ð¼ Ñ…|Ð´ÐµÒ£|Ò£ Ñ…|Ðµ Ð´|Ð´Ð¸Ñ€|Ð¸Ð»Ð»|Ñ€Ð¸Ð»| Ð°Ð»|ÐºÐ°Ð½|Ðµ Ð³|Ð»Ð¸Ð½|Ñ€Ð° |Ð´Ð¾Ð»| Ð±Ðµ| Ð¼Ð¸|Ð¼Ð¸Ð»|Ò£ Ð´|Ð½ Ñ…|ÐµÐ»Ð¸|Ð½ Ð°|Ðµ Ð¼| Ð³Ðµ|Ñ‹ Ñ…| Ð´Ó©|Ð¸Ðº | ÑÐ¾|Ò£ Ð°|Ñ‡Ð¸Ð»|Ð´Ó©Ð²|Ðµ Ð±| ÑÐ°|Ð³Ð°Ñ€|Ðµ Ð²|ÐµÒ£ |Ð½ Ð±|Ñ€Ð¼Ð°| Ð¼Ðµ|ÐºÐ»Ð¸|Ò¯Ñ‡Ð¸| Ð´Ó™| Ò¯Ñ‡|Ñ†Ð¸Ñ|Ð½ Ð²| Ð´Ò¯|Ð¸ Ð±|Ð°Ð¹Ð´|ÐºÐ»Ðµ|ÑÐµÑ€|Ð° Ñ|ÑÐ¾Ñ†|Ð³Ð¾Ñ€|Ð¾Ñ†Ð¸|Ð´Ð°Ð»|Ð¼Ñ‹ |Ð¾Ð»Ð¼|Ñ†Ð¸Ð°|ÑƒÒ£ | Ð¾Ð½|ÑƒÐ¿ |ÐºÐ´Ð°|Ð´Ó™Ð»|Ð¸Ñ€Ð¸| Ð´Ð¸|ÐµÐ»Ðµ|Ð»Ð¸Ð¿|Ð°Ð»Ðº|Ð»Ð¸Ð¼|Ð³ÑƒÑ€|Ò¯Ð½Ð¸|Ð½Ð¼Ðµ| Ó™Ñ…|Ð½ Ð³| Ð¸Ñˆ|Ñ‹ Ó©|Ò£ Ñ|Ð½ÑƒÐ½|ÐµÐ³Ð¸|Ñ‚Ð¸Ð½|Ñ‹ Ð°|Ñ€Ð»Ðµ|Ð°Ñ†Ð¸|Ñ‹Ð· |Ð· Ñ…|ÑÑ‹Ð·|Ð°Ñ…Ð°|Ð¼ Ñ|Ð¾Ð»Ñ‹|Ñ€Ð°Ð¼| Ñ‚Ñƒ| Ð½Ð¸|Ñ‹Ð¿ |ÐµÑ€Ñ‚|Ð°Ð»Ð¼|Ð¾Ñ€Ð°|Ð¸ Ñ…|Ñ…Ð»Ð¸|Ó™Ñ…Ð»|Ðº Ñ|Ó©Ð²Ð»|Ð²Ð»Ðµ|Ñ‚Ð¼Ó™|ÐµÑ‚ |Ð½Ð»Ð¸|Ð°Ñ…Ñ|Ð³Ó©Ð·|Ð³Ñ‹ |ÐµÑ‚Ð»|Ñ‹ Ò¯|Ð½ÑƒÒ£|Ð¾Ð½Ñƒ|ÑÐ¸Ð·|ÐµÐ¼Ð¼|ÐµÐº ",
                        tgk: "Ð°Ñ€ | Ð±Ð°| Ò³Ð°| Ð´Ð°|Ð°Ð´ | Ð²Ð°|Ð¾Ð½ |Ð²Ð° | Ñ‚Ð°|Ð´Ð°Ñ€|Ñ‚Ð¸ | Ð¸Ð½|Ð±Ð° | Ð±Ð¾| ÐºÐ¸|Ð°Ñ€Ð¾| Ð´Ð¾|Ð¾Ð¸ |Ð´Ð¾Ñ€|Ð°Ñ€Ð´|ÐºÐ¸ |Ð±Ð°Ñ€|Ð´ Ò³|ÑƒÒ›Ñƒ| ÑÐº|Ð¸Ð½ |Ò³Ð°Ñ€|Ð¸ Ð¾| Ð½Ð°| Ð¼Ð°|Ð¸ Ð¼|Ð¾Ñ€Ð°| Ò³Ñƒ|ÑÐº |Ð½Ð¸ |Ð½ÑÐ¾|Ð¸Ð½Ñ|Ð¸ Ò³|Ð°Ð¸ |Ð¸ Ð±|ÑÐ¾Ð½|Ñ€Ð°Ð´| Ð¼Ñƒ|Ò³Ð¾Ð¸|Ñ€ Ñ|Ò³ÑƒÒ›|Ò›ÑƒÒ›|Ò³Ð°Ò›|Ð¸Ð¸ |Ðº Ð¸| ÑˆÐ°|Ð¸ Ð´| Ð°Ð·|Ð¸ Ð¸| Ð¾Ð·|Ð½Ð´ |ÑÐ´ |Ò› Ð´|Ð¾Ð·Ð¾|Ð°Ð· |Ð·Ð¾Ð´|Ð°Ð½Ð´|Ð´ Ð±|Ð¾ÑÐ´| ÐºÐ°|Ð¸ÑÑ‚|Ð¾Ð½Ð°|Ð´Ð° |Ð°Ð¼Ð¾|Ð°Ò› |Ð° Ð±|Ð´Ð¸ | Ñ‘ |Ð³Ð°Ñ€|Ð°Ñ‚ |Ð´Ð°Ð½|Ò³Ð°Ð¼|Ð¾Ð´Ð¸|Ñ€Ð´Ð°|Ð¼Ð¾Ñ| Ð¾Ð½|ÑƒÐ´Ð°|Ò›Ð¸ | Ñ…Ñƒ|Ð±Ð¾ |Ð¸ Ñ‚|Ð´Ð¾Ð½|ÑÑ‚ |Ð½Ð°Ð¼|Ð½ Ò³|Ð¾Ð´Ð°|Ð¸ Ñ|Ð°Ð½ |Ð½ Ð±|Ð¼Ð¸Ð»|Ð¸ Ñ…|Ð±Ð¾Ñˆ|Ð¾Ð½Ð¸|Ð¾ÑˆÐ°|Ñ…ÑƒÐ´|Ð°Ð²Ð°|Ð±Ð¾Ñ|Ð°ÑÑ‚|Ð¸ Ð°|Ñ€Ð¾ | Ð¼Ðµ|Ð° Ò³|Ð¸Ð¼Ð¾|Ð¸Ð»Ð°|Ð¾Ð¼Ð¸|Ð¾Ð±Ð°|Ð¸Ð´Ð°|ÐºÐ°Ñ€|Ð½ Ð´|Ð»Ð°Ñ‚|Ð´ Ð²|Ð° Ñˆ|Ò³Ð¾ | Ð°Ñ|Ñ‚Ð°Ò³|Ñ€Ð¾Ð¸|Ð¸ Ð½|Ð´ Ðº|ÑÑ‚Ð¸| Ð´Ð¸|ÑˆÐ°Ð´|Ó£ Ð²|Ñ€Ð¸ |Ñ€Ð´Ð¾|ÑˆÐ°Ð²| Ð¼Ð¸|Ðµ Ðº|Ñ€Ð¾Ð±|Ñ‚Ð°Ñ€|Ñ‚Ð° |ÐºÐ¾Ñ€| Ð±Ðµ|Ð¾ Ð´|Ð²Ð°Ð´|Ð¼Ð¾Ð½|Ð¸Ò³Ð¾|Ð»Ð¸ |ÑƒÐ´ |Ð¾ÑÐ¸|Ð¾ÑˆÑ‚|Ð¼Ð¸ |Ñ€ Ð¼|Ð°Ñ‚Ð¸|Ñ‚ Ð±| ÑÐ¾|Ó£ Ñ‘|Ð½Ò³Ð¾|Ð¼Ð¸Ð½|ÑˆÐ°Ñ€|Ð°Ñ€Ð°|Ñ‚Ð°ÑŠ|Ð°Ð½Ð¸|Ð° Ð²|Ð¸Ñ€Ð¾|Ð° Ð´|Ð´Ð°Ð²|ÑÑ‚ |Ð´Ð°Ð°| ÑÐ°|Ð°Ð¼Ð°|Ð´Ð¾Ñˆ|Ñ€Ð°Ñ„|ÑˆÑƒÐ´|Ð»Ó£ |Ð´ Ð°|Ð¾Ñ‚Ð¸|Ð° Ð¼| Ñ„Ð°|Ð¸ÑÑ‚|Ð¾Ñ€ |Ñ€ Ò³|Ð½Ð° |Ð¸ Ðº|Ñ€ Ðº|Ð´ Ñ‚|Ð¸ Ò·|Ð¸ Ñˆ| ÑÑŠ| ÑÑƒ|Ð½ Ð¼|Ð½ Ð²|Ð¸ Ó¯|Ñ„Ð¸ |Ð²Ð°Ñ€|Ð´Ð¸Ò³|Ð¸Ð³Ð°|Ð·Ð°Ñ€| ÑˆÑƒ|Ð°Ñ€Ð¸|Ð° Ñ‚| Ð¸Ò·| Ð°Ò›| Ò³Ð¸|Ð°ÑÐ¾|Ñ€ Ð±|Ñ‚ Ò³|Ð° Ð°|Ð¾Ð´Ð¾|Ð¼ÑƒÐ¼|Ñ€ Ð²|Ð° Ð¾| Ó¯ |Ñ€Ð¾Ð½|Ð½Ð°Ð·|Ð´Ð¸Ð³| Ð½Ð¸|Ð±Ð¾Ñ‚| Ò·Ð°|Ð°Ð²Ñ€| Ò›Ð°|ÑÐ¸ |Ñ€ Ð´|ÑƒÒ›Ð¸|Ð»Ð°Ð»|ÐºÐ°Ñ|ÑˆÑ‚Ð°|ÑƒÐ½Ð°|ÐµÒ· |Ð¸Ð½Ð¾|Ñ‚Ò³Ð¾|ÑƒÐ½Ð¸|Ð°Ð±Ð¾|ÑÑ‚Ð¸| Ð²Ð¾|Ð°Ð²Ð»|Ð¸ Ò›|Ð²Ð»Ð°|ÑƒÐ½ |Ñƒ Ð¾|Ó£ Ð±| Ò³Ðµ|Ð´Ó£ |Ò›Ñƒ |Ñ‡ÑƒÐ½|Ð½ Ð¸|ÑÐ°Ñ€|Ð¾ÑÐ¸|Ñ‚Ð°Ð²|Ð¼Ð°Ò³|Ð¾Ð½Ò³|Ò›Ð°Ñ€|Ð°Ñ‚Ò³|Ñ‚Ð¸Ñ€|Ð¾Ò³ |Ð°Ñ…Ñ| Ò›Ð¾|ÑƒÒ› |Ð¾Ð»Ð¸| Ð¸Ñ|Ð´ Ð´|Ð¸ Ð·| ÐºÐ¾|Ð°Ð·Ð°|Ð¾Ñ€Ð¸|Ñ„Ð°Ñ€|ÑÐ¾Ñ|Ñ€Ð°Ð½|Ð½ Ðº|Ñ€ Ð°|Ò·Ñ‚Ð¸|Ð¾Ð½Ñƒ|ÑÓ£ |Ð¸Ñ€Ð¸|Ñ€Ñ€Ð°|Ñ€Ó£ |Ò³ÐµÒ·| Ð·Ð°|Ð¸Ð´ |Ò³Ñ‚Ð¸|Ñ€Ð¸Ð¸|Ð°Ð¼Ð¸|Ò›Ð¾Ð½|ÑƒÐ´Ð¸|Ð½ Ð½| Ð¾Ð´|Ð¸Ò·Ñ‚|Ð¼Ð¸Ñ|ÑŠÐ»Ð¾|Ð»Ð¾Ð¼|Ð¸ÑŽ |Ð½Ð°Ð¸|Ð°Ð»Ð¸|Ð½Ð´Ð°|Ð¾Ó£ |Ð¾ÑÑ‚|ÑÐ½Ð´| Ð·Ð¸|Ð¾ÑÐ½|Ó£ Ò³|Ð¸ Ð¿|Ð¾Ñ„Ð¸|ÐºÐ¸Ñˆ|Ò³Ð¸Ð¼|Ñ€Ð°Ñ‚|Ñ‚Ð¸Ð¼",
                        kir: " Ð¶Ð°|Ð½Ð° |Ð°Ð½Ð°|Ð¶Ð°Ð½| Ð±Ð¸|ÑƒÑƒ |ÑƒÐºÑƒ|Ð³Ð° |Ð±Ð¸Ñ€| ÑƒÐº|Ð°Ñ€ |ÐµÐ½ |Ð»ÑƒÑƒ|Ñ‚Ð°Ñ€|ÐºÑƒÐº|ÑƒÐºÑ‚| ÐºÐ°| Ð°Ð´|Ñ‹Ð½ |Ð°Ð´Ð°|ÑƒÑƒÐ³|Ð´Ð°Ð¼| Ð¼Ðµ|ÑƒÐ³Ð°|Ñ‹Ðº | Ð°Ñ€|ÐµÐ½Ðµ|Ð¼ÐµÐ½|Ð½ÐµÐ½|Ð°Ð½ |Ð°Ñ€Ñ‹|Ð¾Ð»Ñƒ| Ð±Ð¾|Ð¸Ð½ |Ð°Ð¼ |Ð³Ð°Ð½|Ð¸Ñ€ |Ð±Ð¾Ð»| Ð°Ð»|Ð°Ñ€Ð°|Ð½Ð´Ð°|Ð½ Ðº|Ñ‚ÑƒÑƒ|Ñ€ Ð±|Ð½ Ð¶| Ð±Ð°|Ð°Ð½Ð´| Ð¶Ðµ|Ñ€ Ð°|ÐºÑ‚Ð°|Ñ‹Ð½Ð°|Ð°Ñ€Ð´|ÐºÑ‚Ñƒ|ÑÑ€Ðº|Ò¯Ð½ |Ð´Ð° |Ð½ Ð±|Ð½ Ñ| ÑÑ€|Ð½Ð´Ð¸|Ð° Ñ‚| ÐºÐ¾|Ñ€Ð´Ñ‹|Ð½ Ð°|Ð´Ñ‹Ðº|Ñ€ÐºÐ¸|Ð¸Ð½Ð´|Ð° Ð¶|ÐºÐ¸Ð½|Ð°Ð»Ð°|Ð° Ð°|Ð»Ð°Ñ€|Ð°Ð½Ñ‹|Ò¯Ò¯ | Ó©Ð·|Ð° Ðº|Ñ‚ÐµÑ€|Ð°Ð»Ñƒ| Ñ‚Ð°|Ð° Ñƒ|Ð°Ð»Ñ‹|Ð° Ñ|Ð¶Ðµ |ÑƒÐº |Ð¸Ð¹Ð¸| Ñ‚Ð¸|Ð¸Ñˆ |Ñ‚Ð¸Ð¹| Ð¼Ð°|Ð³Ó© |ÐºÑ‹Ð»|Ð¹Ð¸Ñˆ|ÑƒÐ»Ñƒ|Ð½Ñ‹Ð½|ÐºÐµ |Ð½ Ñ‚|ÐºÐ°Ñ€|Ð±Ð°Ñ€|Ð¸Ð»Ð¸|Ñƒ Ð¼| ÐºÑ‹|Ð¸Ð³Ð¸|Ñ€Ñ‹Ð½|Ð° Ð±|Ò¯Ð³Ó©|Ñ€Ð³Ð°|Ðµ Ð°|ÑƒÐ½ |ÐµÑ‚Ñ‚|Ð´Ð¸Ðº| Ñ‚Ñƒ|Ð´Ð°Ñ€|Ñ‚Ñ‚Ð°|Ð±Ð°Ñˆ|Ñƒ Ð°|Ð½ Ñƒ| ÑÑ|Ð´Ñ‹Ð½|Ð¸Ð¼ |Ñ€Ò¯Ò¯|Ð³Ð¸Ð½|Ð»Ñ‹Ðº|ÑƒÑˆÑƒ|Ð½Ð´Ñ‹|Ñ‚ÑƒÑ€| ÑÐ°| ÑÐ»| ÑÐ¼| Ð¼Ò¯|Ð³Ð¾Ð½|Ð»Ð³Ð°|Ð°Ð»Ð´|Ð¸ÐºÑ‚|Ò¯Ò¯Ð³| Ð±Ðµ|Ñ€Ñ‹ |Ó©Ð· |Ð½Ð°Ð½|Ð¾Ð½ | Ð°Ð½|ÐºÑ‚Ðµ|ÑƒÐ» |Ð´Ð°Ð¹|ÐµÑ€Ð´|Ð´Ð¸Ð³|Ñ€ Ð¼|ÐµÑ€Ð¸|Ò¯Ñ‡Ò¯| Ð½Ðµ|Ð°Ñ‚Ñ‚|Ð»Ð´Ñ‹|ÐµÐºÐµ|ÐµÐ³Ð¸|Ò¯Ð½Ó©|Ð»ÑƒÐº|Ð°Ð¼Ð´|Ñƒ Ð±|Ñ‹Ð½Ð´|Ò¯Ð½Ò¯|Ñ€Ð´Ð¸|Ñ‚ÑƒÐº|ÐºÐ° |ÐºÐ°Ð½|Ðº Ð¶| ÐºÐ¸|Ð¼ Ð°|ÐºÒ¯Ð½|Ð½Ðµ |Ð¸Ð½Ðµ|Ð¼Ð´Ð°|Ñ€Ð¸Ð½|Ð¾Ð³Ð¾|ÐºÐµÑ‚| ÑÐ¾|ÐºÐ°Ð¼|Ð´Ð¸Ð½|Ðº Ð¼| ÑÑ‡| Ñ‚Ð¾|ÑÑ‹Ð·|Ñ‹Ð»Ñƒ|Ó©Ð·Ò¯| Ð´Ðµ|Ð½ Ð¼|Ñ†Ð¸Ñ|ÑÑ |Ñ‡Ò¯Ð½|Ð³Ð¸Ð·|ÑƒÐ¿ |Ð½ÐµÐ³|ÑÑ‡ |Ñ€ÑƒÑƒ|Ñ‹Ð· |Ð¼ÐµÑ|ÑÐ¼Ðµ| Ð¸Ñˆ|Ð»ÑƒÑ‚|Ñ‹ Ð¼|ÑˆÐºÐ°|Ñ‹ÐºÑ‚|Ð¼Ð°Ð¼|Ð°ÑˆÐº|Ð»Ð´Ðµ| ÐºÐµ|Ð»Ð³Ð¾| Ñ‚Ò¯|Ó© Ð¶|Ð¾Ð»Ð³|ÐµÑ |Ðº Ñ‚|ÐºÐ¾Ñ€|Ð³Ðµ |Ð±Ð¸Ð»|Ñ‚Ò¯Ò¯|ÑƒÐ³Ñƒ|Ñ€Ð°Ð»|Ð°Ð»Ð³|Ñ‚Ñ‹Ð½|ÐºÐµÐ½| ÑƒÐ»|Ð»Ð¸Ð¼|ÑƒÑ‚Ñ‚|Ñ‹Ð³Ñ‹|Ð¾Ñ€Ð³|Ð½ Ð½|Ñƒ Ð¶|Ñ€Ð´Ðµ|Ð½ÑƒÑƒ|Ñ‚Ð°Ð»|Ñ‡ Ðº|Ñ€Ð³Ð¾|Ð¼Ð°Ðº| Ñ‚Ðµ| ÑƒÑˆ|ÑƒÐ½Ñƒ|ÐºÑ‚Ó©|Ð´Ð¸ |Ð°ÐºÑ‚|Ð½Ò¯Ð½| Ð´Ð¸|Ð·Ò¯Ð½|Ð¸Ð»Ðµ| ÐºÓ©|ÐºÐ°Ñ‚|Ð°Ñ†Ð¸|Ð¼ÑÑ‹| ÑÑ|Ñ‚Ñ‹Ðº|Ðµ Ðº|ÐµÐ¹ |Ñ‚Ð°Ð½|Ðµ Ñ|Ð°Ð¹ |ÐµÑ€ |ÑÐ¾Ñ†|Ð¾Ñ†Ð¸|Ñ†Ð¸Ð°|Ð°Ñ‚Ñ‹| Ð¶Ð¾|Ðº Ðº|Ð°Ð¼Ñ|Ð»Ð°Ð½|Ð° Ð¼|Ð¸Ñ€Ð¸|ÑÐºÐµ|Ð°Ð¹Ð´|Ð¸Ñ€Ð´| Ð¼Ñ‹|Ñ‹Ð»Ñ‹|Ð·Ð³Ð¸|Ñ‹Ð½Ñ‹|Ð°Ð³Ð°|Ð³ÐµÐ½|Ðµ Ð±|ÑˆÑƒÐ»|Ñ‚Ð¾Ð»|Ó©Ð½Ò¯|Ð´Ñ‹Ð³|Ðµ Ð¶|Ò¯ Ò¯|Ð· Ðº|Ð°Ð¹Ñ‹|Ñ€Ð°Ð±|ÐµÐ½Ð´|Ð°Ð±Ñ‹|Ð¶Ð°Ð»|Ò¯ Ð¶|Ð¾Ð¾ |ÑƒÐ½Ð°|Ðº Ð°|ÐºÐ°Ð»|Ð»ÐµÐº|ÐµÐºÑ‚|Ñ€Ð¼Ð°|Ð´ÐµÐ¹| Ò¯Ñ‡|Ñ‚Ð¾Ð¾|Ð¼Ð°Ñ‚|Ñƒ Ñ|Ð±ÐµÑ€",
                        mkd: " Ð½Ð°|Ð½Ð° | Ð¿Ñ€| Ð¸ |Ð²Ð¾ | ÑÐµ|Ñ‚Ð¾ |Ð¸Ñ‚Ðµ|Ñ‚Ðµ |Ñ€Ð°Ð²|Ñ‚Ð° |Ð° Ñ|Ð¿Ñ€Ð°|ÑƒÐ²Ð°|Ð´Ð° | Ð´Ð°| Ð½Ðµ|Ð²Ð° |Ð° Ð¿|Ð° Ð½|Ð¸ Ñ|Ð°Ñ‚Ð°|Ð¾ Ð½|ÐµÐºÐ¾|Ð° Ð¸| Ð¿Ð¾|Ð½Ð¾ |Ð¾Ñ˜ |ÐºÐ¾Ñ˜| ÑÐ¾| Ð·Ð°| Ð²Ð¾|ÑÑ‚Ð²|Ñ˜Ð° |ÑšÐµ |Ð°ÑšÐµ|Ð°Ð²Ð¾|Ð½Ð¸ | Ð¸Ð¼|Ð¾Ñ‚ |Ðµ Ð¿|Ðµ Ð½|Ð¼Ð° |Ð°Ñ‚ |Ð²Ð°Ñš|Ð¾ÑÑ‚|Ð° Ð´|Ð¾ Ñ|Ðµ Ð¸|ÑÐµ |Ð¾Ð²Ð°|Ð¸Ñ˜Ð°|Ð¸ Ð¿| ÑÐ»|Ð° Ð¾|Ð¸Ð¼Ð°|ÑÐµÐº|ÑÐ»Ð¾|Ð¾Ñ‚Ð¾|Ð»Ð¸ |Ð¾ Ð´|Ð°Ð²Ð°|Ð¾Ð±Ð¾|Ð¾ Ð¸| Ð¸Ð»|Ð¸Ð»Ð¸| Ð±Ð¸|Ð±Ð¾Ð´|Ð¸ Ð½|Ð»Ð¾Ð±| Ð¾Ð´|Ð±Ð¸Ð´|Ñ€ÐµÐ´|ÐµÐ½ |Ð¿Ñ€Ð¸|Ð²Ð¾Ñ‚|Ð¸Ð´Ðµ|Ð° Ð²|ÑÑ‚Ð°| Ð¾Ð±|Ð¸ Ð¸|Ð¸ Ð´|Ð¿Ñ€Ðµ|Ð½Ð¾Ñ|ÑÑ‚ |Ðµ Ñ| Ð½Ð¸| ÑœÐµ|Ð¾Ð²Ðµ|Ð°Ð°Ñ‚|Ð°Ñ†Ð¸|ÑœÐµ |ÑÐ¾ |Ð¾Ð²Ð¸|Ð¿Ñ€Ð¾|Ñ˜ Ð¸|Ñ‚Ð²Ð¾| Ñ€Ð°|ÐµÑÑ‚|ÑˆÑ‚Ð¾| Ð´Ðµ|Ñ‚ Ð¸|Ð°ÐºÐ²| ÐºÐ¾|Ñ€Ð°Ð·|Ð³Ð¾Ð²|ÐµÐ³Ð¾|Ð½ÐµÐ³|Ð°Ð½Ð¸|ÐµÐ´Ð½|Ð°ÐºÐ¾|Ñ†Ð¸Ñ˜|Ð±Ñ€Ð°|Ð¾Ð´ |Ð° Ð·|Ðµ Ð±|Ð¸ Ð¾|Ð° Ð±|Ð¾ Ð¿|Ð²Ð°Ñ‚| Ðµ | Ð´Ñ€|ÐµÑ‚Ð¾|Ð²Ð°Ð°|ÐºÐ°Ðº|Ð´Ð¸ |Ñ‚ Ñ| ÐºÐ°| Ñ‡Ð¾|ÐµÐ½Ð¸|Ð°Ð»Ð½|Ð¾Ð´Ð½|ÐµÐ½Ð¾| ÑÐ¸|Ñ‡Ð¾Ð²| ÑˆÑ‚|Ð° Ð³|Ð° Ðµ|Ð²ÐµÐ½|Ð½Ð¸Ñ‚| Ñ˜Ð°|Ð´Ðµ |Ð¾Ð´Ð¸|Ðµ Ð¾|Ñ€Ð°Ð½|Ð¸ Ð·|ÑÐ½Ð¾|Ð½Ð¾Ñ‚| ÐµÐ´|Ñ‚Ð¸Ñ‚|Ð»Ð½Ð¾|Ð²Ð¸ |Ñ˜Ð°Ñ‚|Ð´ÐµÐ½|Ñ‚ Ð½|Ð½Ð°Ñ†| Ð¾Ð¿| Ð´Ð¾| Ð¾Ñ|Ð¸ Ð²|Ð¾ÑÐ½|ÐºÐ¾Ð½|Ð´Ð½Ð°|Ðµ Ð´| ÑÑ‚|Ð²ÐµÐº|Ð¾ Ð¾|Ñ€Ð¾Ð´|ÑÑ‚Ð¾|ÑÐ¸Ñ‚|ÐµÐ¼Ðµ|Ð°Ñ€Ð°|Ð´Ð½Ð¾|Ð¾Ð±Ñ€|Ñ˜ Ð½|Ð¿ÑˆÑ‚|ÐµÐ´Ð¸|Ð¾Ð¿Ñˆ|Ð·Ð° |Ð½Ð¸Ðµ|Ð°Ñ€Ð¾|Ð½Ð¾Ð²|Ð° Ðº|Ð²Ð½Ð¸|Ð´Ñ€Ñƒ| Ð¾Ð²|Ñ‚Ð²Ðµ|Ð¶Ð¸Ð²|ÑˆÑ‚Ðµ|Ð´ Ð½|Ð¸Ðµ | Ð¼Ðµ|ÐµÐ´ |Ð¸Ð¾Ñ‚|Ð¸ Ð¼|Ð¾ Ð²|ÑœÐ¸ |Ð´Ð°Ñ‚|ÑˆÑ‚Ð¸|Ñ˜ÑœÐ¸|Ð±ÐµÐ·|Ð±ÐµÐ´|ÐºÐ¸ |ÐºÐ¾Ð²|ÐºÐ¾ |Ð° Ñ€|Ð½Ð°Ñ€|Ñ‡Ð½Ð¾|Ð´Ð½Ð¸| Ð²Ñ€|ÐµÐ»Ð¸|Ð½Ð°Ðº|Ð°ÑˆÑ‚|Ð¸Ñ‡Ð½|ÐºÐ° |ÐµÐ¼Ð°|Ñ†ÐµÐ»|Ð·ÐµÐ¼|ÐµÐ´Ñƒ|Ñ‡ÑƒÐ²|Ñ‚ÐµÑ|Ð´Ñ€Ð¶|Ð½Ð¸Ðº|Ñ‚ Ð¿|Ð»ÑƒÑ‡|Ð°Ð° |Ð´ÐµÑ˜|Ð½ÑÑ‚|Ð½Ðµ |Ð° Ñ‡|Ñ€ÑƒÐ³|Ð¾Ð´Ð°|Ð¸Ð²Ð½| Ñ†Ðµ|Ð½Ð¸Ð²|Ð´Ð¸Ð½|Ð°Ð²Ð½| Ð·Ðµ|Ð½Ð¸Ð¾|Ð¿Ð¾Ñ€|Ð° Ð¼|Ð·Ð°Ñˆ|Ð»Ð°Ñ|Ð²Ð¸Ñ‚|Ð´ÐµÐº|Ð³Ð¾ |Ð¸Ð½Ðµ|ÐµÐ»Ð¾|Ð½ÐµÑ‚|ÐµÐ· |Ñ‚ÐµÐ½| Ñ€Ðµ| Ð¸Ð·|Ð¿Ð¾Ð´|Ñ€Ð°Ð±|Ð°Ð±Ð¾|Ð±Ð¾Ñ‚|Ð´ÑƒÐ²|Ð½ÑƒÐ²| Ð±Ðµ|ÐµÑšÐµ|ÐµÐ´Ðµ|Ð¾Ð½ |ÑšÐµÑ‚|Ð·Ð¾Ð²|Ð¸Ñ‚Ñƒ|Ð²Ð°Ð½|Ð½ Ð¸|Ð°Ñ“Ð°|Ðµ Ð²|ÐµÑ“Ñƒ|Ñ€ÐµÐ¼|Ð´ÐµÐ»|Ð¾ Ðº|ÐºÐ¾Ñ‚|Ð¸Ð¼ | Ð¶Ð¸|Ð´Ð¾Ñ|Ð²Ñ€Ðµ|Ð¼ÐµÑ“|Ð¾Ð»Ð½|Ð½Ð°Ð¿| Ð³Ð¾|ÐµÐ¼Ñ˜|ÐºÑ€Ð¸|ÑƒÐ½Ð°|Ð½ÐµÐ¼|Ð¾Ñ˜Ð°| ÑÑƒ|Ð¸Ñ‚Ð°|Ð°Ð·Ð¾|Ð»Ð¸Ñ‚|Ñ‚Ð¾Ñ€|Ð¸Ð½Ñ|Ð¾Ñ€Ð°|Ð¾Ð³Ð»|Ð¸Ð¿Ð°|Ð¿Ð¾Ñ‚|ÑÐ»Ñƒ|ÐºÐ²Ð¸",
                        khk: " ÑÑ€|ÑÑ€Ñ…| Ñ…Ò¯|Ð½Ð¸Ð¹|Ð½ Ð±|ÑÐ½ |Ñ‚ÑÐ¹|Ð¸Ð¹Ð³|Ñ… Ñ|ÑÐ¹ | Ð±Ð¾|Ñ…Ò¯Ð½| Ð±Ò¯|Ð¹Ð½ |Ð°Ð½ |Ð°Ñ… | Ð±Ð°|Ð¸Ð¹Ð½|Ð±Ð¾Ð»|Ð¸Ð¹ | Ñ…Ð°|Ð±Ð°Ð¹|ÑƒÑƒÐ»|Ñ€Ñ… |Ð¾Ð»Ð¾|Ð¹ Ñ…|Ð¹Ð³ |Ð³Ð°Ð°|ÑÑ… |Ð±Ò¯Ñ€|Ð³Ò¯Ð¹|Ò¯Ð½ | Ð±Ñƒ|Ð¾Ð½ |Ð°Ð°Ñ€|Ñ€Ñ…Ñ‚|Ò¯Ð½Ð´|Ñ…Ñ‚Ñ|Ò¯Ñ€ |Ð»ÑÑ…|Ð°Ñ€ | Ð·Ð°|Ð½ Ñ…|Ð»Ð°Ñ…|ÑÑ€ | Ñ…Ñ|Ð¹ Ð±|Ó©Ð»Ó©|Ð½ Ñ|Ð»Ó©Ó©|ÑÐ» | Ò¯Ð½|Ð°Ð° | ÑƒÐ»|Ñ‹Ð½ |Ñ…Ð¸Ð¹|Ò¯Ð¹ | Ð¾Ñ€| Ñ‚Ñƒ|ÑƒÐ»Ñ|ÑƒÐ»Ð°|Ò¯Ð»Ñ| Ñ‡Ó©|Ñ‡Ó©Ð»|Ð½ Ñ‚|Ò¯Ò¯Ð»| Ñ…Ñƒ|ÑÑÐ½| Ð½Ð¸|Ð½Ð´Ñ|Ð»Ð¾Ð½|Ð³ÑÑ|Ñ€ Ñ…|Ó©Ó©Ñ€|ÑÐ°Ð½| Ð½Ñ|Ð½Ñ‹ | Ñ‘Ñ|Ð½ÑŒ |ÑÐ´ | Ð³Ñ| Ð½ÑŒ| Ñ‡ | Ñ‚Ó©| Ñ‚Ñ|Ð»Ð°Ð³|Ð¾Ñ€Ð¾|Ð´ÑÑ|Ð»Ñ |Ð³ Ñ…|Ð¾Ñ… |Ò¯Ð½Ð¸|ÑÑÑ€|Ñ…Ð°Ð¼|Ñ… Ñ‘| ÑˆÐ°|Ð´ Ñ…|Ñ€ Ñ|Ð»Ð³Ð¾|Ð»Ð´ | Ð´Ñ|Ð½ Ð°|Ð±ÑƒÑŽ|ÑƒÑŽÑƒ|Ð³ÑƒÑƒ|Ñ‚Ó©Ñ€|Ð°Ð¹ |ÑŽÑƒ |Ñ‚Ð°Ð¹|ÑÑ |Ð¶ Ð±|ÑÐ³ |Ð»Ð¸Ð¹|Ñ…Ð°Ð½|Ñ‹Ð³ | ÑÐ´| Ñ‚Ð¾|Ñ… Ð±|Ð´ÑÑ|Ð¹ Ñ|Ñ€Ð³Ð°| Ð°Ð»|Ñ…Ð°Ñ€|Ð°Ñ€Ð³|Ð°Ð´ |Ð»Ð³Ð°|Ñ€ÑÐ³| Ð·Ð¾|Ð°Ð¹Ð³|Ð°Ð³Ð°| Ñ‚Ò¯|Ð» Ñ…|Ð°Ð» | Ñ…Ó©|Ó©Ó©Ñ‚| ÑÐ°|Ð½ Ð½|Ð¹Ð³Ñ|Ð´ÑÐ»|Ð½Ð´ |Ð³Ð¸Ð¹|Ð½ Ð·|Ð¾Ð» |Ð°Ð²Ð°|Ð»Ð»Ð°| Ó©Ó©|Ñ€Ð¾Ð»|Ó©Ñ‚Ñ|Ð³ÑÑ€|Ð³ Ð±|Ð» Ð±|Ð±ÑƒÑ|Ð½ÑÐ³|Ð½ Ð´|Ð°Ð³ |Ð°Ð°Ð»|Ð½ Ò¯|Ð°Ð»Ð´|Ñ€Ð»Ð°| Ò¯Ð·|Ð³ÑÐ¼|Ð¹ Ð°|Ð½ Ñƒ| Ð¾Ð»|Ñ…ÑƒÑƒ|Ñ… Ñ‡|ÑÑ€Ñ|Ð¼Ð³Ð°|Ð¾Ð»Ð³|ÑÑ |Ñ…Ò¯Ò¯|Ñ‚Ð¾Ð¹| Ð°Ñ€|Ò¯Ò¯ |Ð»Ð°Ð»| ÑÐ½| Ð¼Ó©|Ð¹Ñ… |Ð¸Ð½ |Ó©Ñ€Ó©|Ñ… Ñ‚|Ð»ÑƒÑƒ|Ñ€Ð¸Ð¹|ÑÐ¾Ð½| Ð³Ð°|Ñ…ÑÐ½|Ð°Ð¹Ñ…|ÑÐ½Ð¸| Ð°Ð¼|Ð³Ð»Ð°|Ó©Ñ€ |Ð°ÑÐ°|Ð°Ð½Ð°|Ð°Ð¼Ð³| Ð±Ð¸|Ð°Ñ€Ð´| ÑÐ»|Ð¹Ð³Ð¼|Ð¾Ð¹ |Ð»Ñ‹Ð½|Ò¯Ñ€Ñ|ÑÐ³Ñ‚| Ð°Ð²|ÑÐ´Ñ|Ð¾Ð¾ |Ð¼Ð¸Ð¹|Ñ… Ð½|Ð°Ð°Ð½|Ò¯Ð¹Ð»|Ð°Ñ€Ð»|Ð½Ñ…Ð°|Ñ‚Ð³Ñ|Ð´ÑÑ|Ñ Ð¾|Ñ€Ñ…Ð¸|Ð»Ð¾Ð²|Ð´ Ð½|Ñ‚ÑÐ³|Ó©Ð³ |Ó©Ð½ |Ñ…ÑÑ€|Ð»ÑÐ½|Ó©Ó©Ð³|Ò¯Ò¯Ð½|Ð²ÑÑ€|Ð³Ð° |Ñ€ Ñ‚| Ñ…Ð¸|Ñ…Ò¯Ñ€|Ñ€Ð¾Ð½|Ñ‡ Ð±| Ñ…Ð¾|Ð³Ó©Ó©| Ð¼Ñ|Ð±Ð¸Ðµ|Ð½ Ð³|ÑƒÑ€Ð°|Ð±Ò¯Ñ…|Ð¾Ñ€Ð¸|Ð°Ð»Ð¸| Ð°Ð¶| Ò¯Ð¹| ÑÐ²|Ó©Ñ… |Ñ…ÑÑ|Ð³ Ð½|Ð°Ñ‚Ð°| Ñ‚Ð°|Ð³Ñˆ |Ð³ Ò¯|ÑÐ³Ñˆ|Ð²Ð°Ñ…|Ð»Ð¾Ñ…|ÑÐ³Ð´|Ð´Ð»Ñ|Ñ… Ò¯|Ð³Ð¾Ñ…|Ò¯Ñ… |ÑÐ½Ñ|Ð»Ð¶ |Ð¾Ð»Ñ†| ÑˆÒ¯|Ð» Ñ‚| Ð´Ð°|Ð´Ð°Ð»|ÑÐ¶ |Ð´ Ð±|Ð»Ð°Ð½|Ð¹ Ñ‚|Ð°Ð¹Ð»|Ð» Ð½|Ñ… Ð°|Ð°Ð³Ð»|Ñ‚Ð¾Ð¾| ÑÐ¾|Ó©Ñ€Ð¸|Ð¹Ð³Ñƒ|Ð³Ð¼Ð¸|Ð´Ð¸Ð»|ÑÑÐ½|Ð´Ð°Ñ€|Ð½ Ñˆ|ÑˆÒ¯Ò¯|Ð¾Ð²Ñ| Ð°Ð´|Ð° Ñ…|Ñ€ Ñ‡|Ð°Ð´Ð¸|Ð°Ð°Ð³|Ð»Ð°Ð°|Ð°Ð¹Ð´|Ð°Ð¼ÑŒ|Ð³Ñ‚Ñ|Ð½ Ñ|Ð´ Ñ‚|Ð¸Ð¹Ñ‚|Ð»ÑÐ»|Ñ… Ñˆ|Ð½ Ñ‡|ÑƒÐ½Ñ…",
                        kbd: "Ð³ÑŠÑ|Ñ‹Ð³ÑŠ| ÐºÑŠ| Ñ…Ñƒ|Ñ‹Ñ…Ñƒ|Ð½Ñ‹Ð³| Ð·Ñ‹|ÑÐ¼ |Ð½Ñƒ |Ñ…ÑƒÐ¸|Ñ…ÑƒÑ|ÑŠÑ | Ð¸ |ÑƒÐ¸Ñ‚|ÑÑ…Ñ|ÐºÑŠÑ‹|Ð³ÑŠÑƒ|Ñ‚Ñ‹Ð½| Ð·Ñ|Ñ Ð·|ÓÑ‹Ñ…|Ñ‹Ð¼ |ÑŠÑÑ€|Ñ…ÑŒÑ|ÑÑ€ | Ñ†Ó|Ñ†ÓÑ‹|Ñ…ÑÐ¼|Ñ Ð¸|ÑŠÑƒÑ|ÑÑ…Ñƒ|Ð°Ð³ÑŠ|Ñ‹Ð½Ñ‹|Ð¸Ñ‚Ñ‹|Ð½Ñ |ÐºÑŠÑ|Ð·Ñ‹ |ÑƒÑ | Ð´Ñ|ÑÑƒ |Ð¼ Ð¸|ÑÐ³ÑŠ|ÑÐ½Ñƒ|ÑÐ½Ñ|ÑÐ½Ñ‹|Ñ€Ð°Ð»|ÑÑ€Ð°|ÑÑ‰ |Ñ…ÑŠÑƒ|Ð¼ Ñ…|Ñ‚Ñ…Ñ|ÑÑ‚Ñ…|ÓÑ |Ñ…ÑÐ½|Ð´ÑÑ‚|Ñ Ñ…|Ñƒ Ñ…|Ð¸Ð³ÑŠ|Ñ‰Ñ…ÑŒ|Ñ‹ Ñ†|Ð·ÑÑ…| Ð³ÑŠ| Ñ…Ñ|ÐºÓÑ|Ñ€Ñ |Ñ‹Ð½Ñƒ|ÑŠÑÑ…|Ñƒ Ð·| Ñ‰Ñ‹|ÑƒÐ¼ |ÑƒÑÑ„|Ñ‰ÓÑ|ÑÐ´Ñ|Ñ…ÑÑ€|ÑŠÑƒÐ½|Ð¼Ð¸ |Ñ…ÑƒÐ¼|Ð»ÑŠÑ|ÑƒÑÐ´|Ñ–Ñ | Ð¸Ðº|Ð¼Ñ€Ñ|ÑƒÑÐ½|ÑŠÑÐ¼|Ñ…ÑÑ‚|Ð¼ Ðº| Ð½Ñ|Ð¸ Ñ…|Ñ Ñ‰|Ñ…ÑƒÐ°|ÑÐ¼Ñ€|Ñ Ðº|Ð¿ÑÐ¾|Ð»ÑŠÑ‹|ÑÐºÓ| Ð¼Ñ‹| Ðµ |Ð¸Ñ–Ñ| Ð¸Ñ–| Ñ |ÑŠÑÐ¿|Ñƒ Ð´|Ñ„Ð°Ñ‰| Ð»ÑŠ|Ð°Ñ‰Ñ|ÐºÑŠÑƒ|ÑÑ€Ñ‹|Ð·ÑÑ€|Ñ€ Ð·|ÑÑ„Ð°|ÓÐ¸ |Ñ‚Ð¸ |Ð°Ð»ÑŠ|ÑÑ‚Ð¸|Ñ€Ð¸ |Ñ–ÑÑ‰|Ñ Ð³|Ð°Ð» |ÑƒÑÑ…|Ð°ÑƒÑ|Ñ‰Ñ–Ñ| Ñ…ÑŠ| Ñ‰Ó|ÑƒÐ½Ñƒ|ÑŠÑ‹Ð¼|ÑŠÑÑ‰|ÐµÐ·Ñ‹|Ð·Ñ‹Ñ…|ÑÐºÑ–|Ñƒ Ðº|Ð¼ Ñ‰|ÐºÑ–Ñ|ÓÑƒÑ|Ð½ÑˆÑ|ÑŠÑ‹Ñ…|Ñ…Ñƒ |ÑŠÑ‹Ñ‰|Ñ‰ÑÑ…|Ð°Ð»Ñ‹|Ð¸ÐºÓ|Ð·Ñ‹Ð¼|Ð±Ð·Ñ|Ñƒ Ð¸|ÑƒÐºÑŠ|ÐºÓÐ¸| Ð¿Ñ|ÑÑ‰Ó| Ñ‰Ñ…| Ñ…Ð°|Ð°Ð±Ð·|Ð¼ Ðµ|Ñ–ÑƒÑ|Ð¸ Ðº|ÑÐ³Ñƒ| Ð³Ñƒ|ÑƒÐ½Ðµ|Ð½ÐµÐ¹| ÑƒÐ½|Ñ‹Ñ…Ñ|ÑƒÐ¼Ñ|ÓÑÑ‰|Ð½ÑƒÐº|Ñƒ Ñ‰|ÑÐ¿Ñ|ÑŠÑƒÐ¼| Ð¸Ó|ÑŒÑÐ½|Ð¸ÓÑ|Ñ…Ð°Ð±|Ñ‰Ñ‹Ñ‚|ÑÐ¿Ñ| ÐµÐ·|Ñ…ÑŠÑ|Ð»Ñ‹Ð¼|Ñ‹Ñ…ÑŒ|Ð¸ Ñ†|Ñ€Ð¸Ð³|Ñ‰ÓÑ‹|ÑŠÑÐº|ÑŠÑ‹Ñ‚|Ð·ÑÐ³|ÑÑ€Ð¸|ÑˆÑÑƒ|Ð½ÑÐ³|ÑŠÑÐ¶|ÑÑ‰Ñ…|ÑŠÑÑƒ|ÑÑ…ÑŠ|Ñƒ Ð¿|Ð¼Ñ‹ |ÐµÐ¹Ð¿|Ð´Ñ |ÑÐ½ |ÑƒÑƒ | Ð´Ñƒ|Ð¸ Ð·|ÑÑÐ½|ÑŠÑÐ·| Ð°Ð¼|Ð¹Ð¿Ñ|Ð¿Ñ…ÑŠ|Ð°Ð¼Ð°|Ð¼Ð°Ð»|Ð´ÑƒÐ½|Ð°Ð»Ñ…|Ð»Ñ…Ñ|Ð¼ÑÐ½|Ð´ÑÑƒ|ÑŒÑ |ÑŒÑÐ¿|Ñ Ð´|Ð¼ Ð·|ÑŒÑÑ…|Ñ‹Ð»ÑŠ|Ñ‹Ñ‰Ñ‹|ÑƒÑÑ‰|Ñ–Ñ‹Ñ…|ÑƒÐ½Ð°|Ñ†Ñ–Ñ‹| Ñ†Ñ–| Ñ‰Ñ–|Ñ Ñ|Ñ‰Ñ–Ð°|Ñ…ÑƒÑ€|ÑÐ¶Ñ‹|ÑÑÑ|Ñ‚Ñƒ |Ñ Ðµ|Ð½ Ñ…| Ð·Ð¸|ÑÐ¾ |ÑÑ‚Ñ‹|ÑŠÑÑ|ÑÐ¾Ð¼|Ñ‹ÐºÓ|Ð½ÑÑ…|Ð¿ÑÑ|Ð¸ Ð»|Ð°Ð¿Ñ‰|Ñ…ÑÐ³|ÑŠÑƒÐ°|Ñ‹Ð½Ñˆ|Ð¸ Ð½|Ð»ÑŠÑ…|Ð¶ÑŒÑ|Ð¸ Ð´|Ñ‹Ð·Ñ|Ð¶Ñ‹Ð½|Ð¿Ñ‰Ó|Ð¿ÐºÑŠ|ÐµÐ³ÑŠ|ÑÐ½Ñˆ|Ð°Ð¼ |Ð°Ð¿Ñ…|Ñ‹Ñ€ |ÑŠÑÐ³| Ð¸Ñ€| Ñ‚Ðµ|Ð¸Ñ‚Ñƒ|Ð¸ Ð¸|Ñ€ Ð¸|Ð½Ñ‹Ð¼|Ð¼ Ñ|Ð¸ Ñ‰|Ð¼ Ð´|Ð¿ÑÑ‹|Ñ Ð¿|ÑÑ‰Ñ–|Ñ‹Ñ‚ |Ñ…ÑƒÐµ|ÐºÓÑƒ|Ñ‚ÑÐ½|ÑÐ·Ñ|Ð´Ð¶Ñ|Ñ Ð»|Ð³ÑƒÐ¿| Ð·Ð°|ÐºÑŠÐµ|Ñ‹Ð´Ñ|ÑƒÑÐ¼|Ð°Ñ„Ñ|ÑƒÐ¶ÑŒ|Ð¶ÑŒÑ‹|ÑƒÑÑ‚|Ð¸ Ñƒ|Ð¾Ð¼Ð¸|Ñ‹Ð½ |Ñ‹Ñ‚Ñ‹|Ñ‹Ñ‚Ñ|Ñ€Ð°Ð³|ÑƒÑ€ |Ñ‹ÐºÑŠ|ÑÑÑ…|Ð¿ÑÐ°|Ð¸ Ñ|Ñ€ Ñ‰|ÑÐ¼Ð¸|ÑÑÑƒ|ÑÐ¿Ðº|ÐºÑ ",
                        oss: "Ð¼Ó• |Ó•Ð½ | Ó•Ð¼|Ó•Ð¼Ó•|Ó•Ð¹ |Ð±Ð°Ñ€| Ð±Ð°|Ð°Ð´Ó•|Ð¾Ð½ | ÐºÓ•|Ð´Ó•Ñ€|Ó•Ñ€ |Ñ‚Ñ‹ | Ð°Ð´|Ñ‹ Ð°|Ñ‚Ó• | Ñ…ÑŠ|Ð´Ó•Ð¹| Ð´Ó•|Ð½ Ó•| Ð¸Ñ|Ð°Ñ€ |ÐºÓ•Ð½| Ð¹Ó•|Ð½Ð°Ð´|Ó•Ð¹Ð¼|Ð´Ñ‹ |Ð¹Ð¼Ð°|Ó• Ó•|Ð³Ó•Ð½|Ð¹Ó• |Ð°Ð»Ñ‹| Ð°Ð»|Ð»Ñ‹ |Ð½Ñ‹Ð½|Ð¼Ð°Ð³|Ð¸Ñ |Ð½Ó•Ð½|Ð½ Ð´| Ó•Ñ…|Ñ…ÑƒÑ‹| ÑƒÐ°|Ñ…ÑŠÑƒ|Ó•Ð½Ñ‹|Ð°Ð³Ó•|Ñ‹ Ð±|Ó•Ð½Ó•|Ñ†Ñ‹ |Ñ‹Ð½Ó•|Ñ‹Ð½ |Ð°Ð¼Ó•|ÑƒÐ°Ð¼|ÑŠÑƒÐ°|Ó•ÑÑ‚|ÑƒÐ° | Ð¿Ð°|Ð¾Ð½Ð´|Ð°Ñ€Ñ‚|Ð°Ð´ |ÑÑ‚Ñ‹|Ð´Ó•Ð¼|Ó• Ðº|Ð½ Ð°|Ó•Ð½Ð´|Ñ€ Ð¸| Ð¼Ð°|ÑÓ•Ð½|Ð´Ð·Ð¸|Ñ€Ñ‚Ó•|Ð°Ð´Ñ‹|ÑƒÑ‹Ñ|Ñ Ð±| ÐºÑƒ|Ó• Ñƒ|Ó•Ñ…Ñ…|ÑÑ‚ |Ñ€ Ó•|Ó•Ñ†Ñ‹|Ð°Ð´Ð´|Ó• Ñ…| Ð°Ñ…|Ó• Ð±|Ð°Ñ†Ð¸|Ð´Ð´Ð·|Ó• Ð°|Ð·Ð¸Ð½| ÑƒÑ‹|Ð°Ñ…ÑŠ|Ð´Ð¾Ð½|Ñ…ÑŠÓ•|Ñ‹ Ó•| Ñ†Ó•|ÐºÓ•Ñ†| ÑÓ•| Ñ€Ð°|Ð½Ó•Ð¹| Ó•Ð½|Ñ‹ Ñƒ|Ó• Ñ|Ð³Ó• |Ð´Ð·Ð°|Ð´Ð·Ó•|Ñ‹ÑÑ‚|Ð¿Ð°Ð´|Ð¸Ð½Ð°|Ñ…ÑÓ•|Ñ‹ Ñ…|Ð°Ñ…Ð°|Ð·Ð°Ñ…|ÑÑ‚Ó•|Ó•Ð½Ð°|Ñ‚Ó•Ð¹|ÑƒÑ‹Ð´|Ð½ Ðº| Ñ…Ð¸|Ð½Ó• |Ð°Ñ€Ð°|Ð°Ñ€Ð´| Ð½Ó•|Ó•Ñ€Ð´|Ñ†Ó•Ñƒ|Ñ…Ð¸Ñ†|ÐºÑƒÑ‹|Ð¸Ñ†Ó•|Ð¹Ñ‹ |Ð½Ð´ |Ð¾Ð¹ |Ð»Ð¾Ð½|Ð·Ð¾Ð½|Ð°Ð»Ð¾|Ð½Ñ‹ |Ð´Ð¶Ñ‹|Ó•Ñ…Ñ|Ð½ Ð±| ÑÑ‚|Ñ…ÑŠÐ°|Ð¸Ð±Ð°|Ð¹Ó•Ñ…|Ó•Ð½Ð³|Ð¹ Ó•|Ñ†Ó•Ð½|Ð°Ñ†Ñ‹| Ð½Ð°|Ð±Ñ‹Ð½| Ð°Ñ€|Ð´ Ð°|Ó•Ð¼ | ÑƒÓ•|Ð³Ð¾Ð½|Ó•Ñ…Ð¸|Ó• Ð¹|Ó• Ð¼|Ñ…Ð°Ð´| Ð°Ñ†|Ð½ Ñ…|Ñ‹Ð½Ð°|Ð¼Ð°Ð´|Ñ€Ð´ |ÑŠÓ•Ð½|Ñ‹Ð½Ð´|Ñ…Ó•Ñ|Ð²Ó•Ñ€|Ð°Ñ€Ó•|Ó• Ð½|Ð½ Ð¸| Ñ†Ð°|ÑƒÑ‹Ð·|ÑŠÐ°Ñ…|ÑƒÑ‹Ñ€|Ð¹ Ð°|Ñ‹ Ð´|Ñ€Ð°Ð´|Ð°Ð´Ð·|Ð°Ð³ |Ñ…Ñ…Ñƒ|Ñ‹Ð´ | Ð±Ñ‹| Ñ„Ó•|Ó•Ð³ |Ð½ Ñƒ|Ð½Ð´Ñ‹|Ñ„Ó•Ð½|Ñ‹Ñ‚Ó•|Ó• Ð³|ÑÐ³Ó•|Ð¸Ð½Ð¾|Ð°Ð´Ð¾|Ð½Ð¾Ð½|Ð¿Ð¿Ó•|Ñ‹ Ð½|Ð¸Ð¼Ó•| Ñ€Ó•|Ñ…Ñ…Ó•|Ð·Ó•Ð½|Ñ…Ð¸ |Ñ†Ð¸Ð¹|Ð¿Ó•Ñ‚|ÐºÓ•Ð¹| Ó•Ð¿|Ñ€Ó•Ð¹| Ð·Ð°|Ð¼Ó•Ð¹|ÐºÑŠÐ¾| Ð³Ó•|Ð¹ Ñ€| Ð½Ñ‹|Ð´ÑƒÑ€|Ó•ÑƒÑ‹|Ð³Ó•Ð¹|Ó• Ð¸|Ó•Ð¼Ð±|Ð°Ñ…Ó•|Ð°ÐºÓ•|Ñ€Ð´Ñ‹|Ñ€Ð°Ð·|Ð½Ð´Ñƒ|Ñ€Ð¾Ð½|Ð´ Ó•|Ó•Ð¿Ð¿|Ñ€ Ðº|Ñ‚Ó•Ð½|Ó•Ñ€Ð¸|Ñ€Ð¸Ð±|Ð¸Ð¹Ñ‹|Ñ‹ Ñ„|Ð´Ð¼Ó•|ÑƒÑ‹Ð½|Ð¶Ñ‹ |Ñ€Ó•Ñ|Ñ‚ Ðº| Ó•Ð²|ÑƒÑ‹ | Ñ…Ó•|Ñ‹Ð½Ñ‹|ÑÓ• |Ñ†Ð¸Ð°|Ñ‹Ð·Ð¾|Ñ‹Ñ |Ñ‹ Ñ€|Ð·Ð°Ðº|Ñ€ Ð°| Ð´Ðµ|Ñ€Ñ‹Ð½|Ñ‹ Ñ|Ð¾Ñ†Ð¸|Ñ€ Ñ…|Ó•Ð¼Ñ‹|Ð°Ð¼Ñ‹|Ð½Ð´Ó•|ÑÐ¾Ñ†|Ó•ÑÐ³|Ð³Ó•Ñ|Ð¸ÑÑ‚|Ð¹ Ñ|Ð¹ Ñ…|ÑŠÐ¾Ð½|Ð°ÐºÑŠ|Ð¼Ñ…Ñƒ|ÑÓ•Ñ€|Ó• Ñ†|Ð´Ñ‚Ó•| Ó•Ñ€|Ð°Ñ€Ñ‹|Ð°Ð²Ó•|Ñ†Ð°Ñ€|Ð¹ Ðº|Ñ€ Ð¹|Ð»Ð°Ñ€|Ð¸Ð°Ð»|Ð°Ð¹Ð´| Ð±Ð¸|Ð±Ð¸Ð½|Ð¼Ó•Ð½|Ð¼Ñ‹Ñ|Ð¼Ð±Ó•|Ð½Ð°Ñ†| Ñ…Ð°|Ó• Ñ„|Ð°Ð½Ð¸|Ð´ÐµÐº|Ð¾Ð½Ñ‚|Ó• Ð¿|ÐºÐ¾Ð½|Ð°Ñ…Ñƒ|Ð° Ó•|Ó•Ð´Ñ‚|Ó•Ð¼Ñ…|Ð°Ñ‚Ñ‹|Ð¼Ñ‹ |Ñ Ó•|Ð½Ð°Ð¼|Ð°Ð´Ð¶|Ð·Ó•Ñ€|Ð½Ð´Ð·| Ñ„Ñ‹|ÑÑ‹Ð½|Ñ†Ñ‹Ñ‚| ÑÑ‹|Ñ…Ó•Ð´| Ð¸Ð½",
                        sah: "Ð°Ñ€ | ÐºÐ¸|Ð°Ð½ | Ð±Ñ‹|Ð°Ð°Ñ…|Ñ‚Ð°Ð°|ÑÑ€ |Ð°Ñ… |Ð½Ð½Ð°|Ð°Ñ€Ñ‹|Ð»Ð°Ñ€|ÑƒÐ¾Ð½|Ð½Ð° | ÑƒÐ¾|Ð¾Ð½Ð½| Ñ…Ð°| Ð±Ñƒ|Ñ€Ð°Ð°|Ñ‹Ñ€Ð°|Ð¸Ò»Ð¸|Ð±Ñ‹Ñ€| ÑÑƒ|ÐºÐ¸Ò»| ÐºÓ©|Ñ‹Ð½ | Ñ‚Ñƒ|Ñ‚Ð°Ñ€|Ñ€ Ð±|Ò»Ð¸ | Ð±Ð¸|ÑƒÐ¾Ð»|Ð¸Ð½ |Ð°Ð°Ð¿|Ð¸Ð¸Ñ€|Ð½ Ñ‚|ÑÑƒÐ¾|Ð½ Ð±|Ð°Ð¿Ñ‚|Ð¸Ð¸ |Ñ Ð±|ÑƒÐ¾Ñ…|Ð° Ðº|Ð¿Ñ‚Ð°|Ð°Ñ |Ð±Ð¸Ð¸|ÑÐ¹Ñ|Ð° Ñ|Ñ‚Ñ‚Ð°|Ñ…Ñ‚Ð°|Ð°Ð¹ |Ð±ÑƒÐ¾|Ñ€Ð´Ð¸|Ð´Ð¸Ð¸|Ð¸Ñ€Ð´| Ð±Ñ|Ñ‚ÑÑ€|ÑÑ€Ð¸|ÑÐ½ |Ð½Ð°Ð½|Ð¸ Ðº| Ð´ÑŒ|Ñ…Ð°Ñ|Ð½Ð°Ð¹|Ð½ Ñ|Ñ‚Ð°Ð½|Ð±ÑÐ¹|Ð°Ñ€Ð°|Ñ‹Ð½Ð°|Ð½ Ðº|Ñ€ Ðº|Ð³ÑÑ€|Ð³Ð°Ñ€|Ð¾Ñ…Ñ‚|Ð¸Ð³Ñ| Ð¾Ð»|Ð°Ñ‚Ñ‹| Ð±Ð°|Ñ‚Ñ‹Ð½|Ð¾Ð»Ð¾|ÑÑ‚Ñ|Ð°Ð»Ð°|Ð°Ð½Ð°|ÑÑ‚Ð¸|Ñ€Ñ‹Ð½|Ñ… Ñ…|Ñ… Ð±|Ó©Ò¥Ò¯|Ð¸ Ð±|Ð¹ÑÑ‚|Ð³Ð° |ÑƒÐ³Ð°|ÐºÓ©Ò¥|Ñ‚Ð¸Ð½|Ò¥Ò¯Ð»|Ð°Ñ†Ð¸|Ð¾Ñ€Ñƒ| ÑÐ°|Ñ‹Ð»Ð°|Ð»Ð»Ñ|Ð»ÑÑ€|Ñ€ Ñ‚|Ñ†Ð¸Ñ|Ð¾Ð»Ð°|Ñ€ Ñƒ|Ñ‹Ñ‚Ñ‚| Ð´Ð°| ÑÐ¾|ÑÑ‚Ð°| ÐºÑ|Ð¾Ñ… | Ñ‚Ð°|Ñ‹Ð³Ð°|Ð°ÑÑ‚|Ð°Ò•Ð°|Ð°Ñ…Ñ‚|Ð½Ñ‹ |Ð»Ð»Ð°|ÑÑ… |Ñ‚ÑƒÒ»|Ð¾Ð»Ñƒ|Ð½ Ð´|ÑƒÐ»Ñƒ|Ð°Ð»ÑŒ|ÑƒÑ‚Ñƒ|ÑÑ‚Ð²|Ñ‹Ðº |Ð°Ð½Ð½|Ð¸Ð½Ð¸|Ð°Ð±Ñ‹|ÑŒÐ½Ð°|Ñ‹Ñ‹Ñ‚|ÑƒÑ€Ñƒ|Ò»Ð¸Ð½|Ð»ÑŒÐ½|ÑÑÑ…|Ð°Ð°Ð±|Ð±Ñ‹Ò»|ÐºÓ©Ð¼|Ð°Ð½Ñ‹|Ñ‹Ñ‚Ñ‹| Ñ‚Ó©|ÑÒ»Ð¸|Ð° Ð±|Ð¾Ò»Ñƒ|Ñ‚ÑƒÑ‚| ÐºÑ‹|Ñ‹Ò»Ñ‹|Ð¾Ò•Ð¾|Ñ…Ð°Ð½|Ð¸Ð»Ð»|Ð½Ð½Ñ‹| Ð´Ð¾|Ñ‚Ð²Ð¾|Ð¾Ñ€ | ÑÑ‹| Ð½Ð°|Ñ€ Ñ|Ñ Ñ|Ð°Ð°Ñ€|Ð¾Ð½ |Ð½Ð°Ð°|Ð±ÑÑ‚|Ð°Ò»Ñ‹|Ð½Ð°Ñ€|Ñ‹Ð±Ð°|Ð°Ò•Ñ‹|Ð½Ð¸ |Ñ… Ðº| Ñ‹Ð»| ÑÐ±|ÑŒÐ¾Ð½|ÐºÐ¸Ð½|Ð»ÑƒÐ¾|ÑƒÑƒ |Ñ‹Ð»Ð»|Ð½ Ñƒ|Ð´ÑŒÐ¾|Ð»Ð°Ð°|Ñ‚Ñ‚Ñ|Ñ€ÑƒÐ¾|Ñ€Ð¸Ð½|ÑÐ±Ñ|Ð´Ð° |Ñ‚ÑÐ½|Ñ‚ Ð±|Ò»Ñ‹Ñ‹|Ð»Ð¾Ñ€| ÐºÑƒ|Ð¸Ñ‚Ñ|Ð½ÑÐ½|ÑÑ‚Ñ‹|Ð±Ð°Ñ€|Ð½Ñ‹Ðº|Ð½ Ð°|ÑÒ¥ | Ñ‚Ñ| Ð¼Ð°|Ñ€Ñ‹Ñ‚| Ñ…Ð¾|Ñ‹Ñ‚Ð°|Ñ€ÑƒÐ¹|Ð° Ñ‚|Ò¯Ð½ |Ñ‚ÑÑ|ÑƒÒ»Ð°|Ð»Ð°Ð½| Ñ‚Ò¯|Ð¾Ñ€Ð¾|ÑƒÒ»Ñƒ|Ð¹Ð´Ñƒ|Ð½ Ð¾|Ñ…Ñ‚Ñ|Ð²Ð¾ |Ò¯Ó©Ñ€| Ò¯Ó©|Ñ€Ð³Ð°|Ò¯Ð»Ð»|Ð½Ð¾Ñ€|Ò¯Ð»Ò¯|Ñ€ Ð¸|ÑÑ€Ñ|Ó©Ñ€Ò¯|Ò»Ñ‹Ð½|ÐºÓ©Ñ€|Ó©Ñ€Ñ|Ð±ÑƒÑ€|Ð»Ñ‚Ð°|Ñ‚ÑÒ¥| Ð½Ð¾|Ð¾Ò¥Ð¾|Ð½ÑÑ€|ÑÑ…Ñ‚| Ð¾Ò¥|ÐºÑƒÐ¾|Ð´Ð¾Ð¹|ÑƒÐ¾Ñ‚|Ñ‚Ñ |Ð¾Ð¹Ð´|Ñ‚Ð° |Ñ Ð±|Ð¸ Ð¾|Ð¸Ñ‚Ð¸|Ð±Ð¸Ð»|Ñ‹ÑÑ‚|ÑƒÑ‚Ñ‚|Ñ€Ð°Ñ€|Ñ‚ÑƒÑ€|Ñ€Ð³Ñ|Ñ…Ð¾Ð»|Ñ€ Ñ…|ÑƒÐ¾Ð±|Ñ€ Ð´|Ð°Ð¹Ñ‹|Ñ€Ñ‹ |Ñ€Ð¾Ñ€|Ð°Ñ‚ |Ð½Ð°Ñ†|Ð±Ð°Ñ‚|Ð±Ñƒ |Ð´ÑŒÐ¸|Ñ€Ñ‹Ð³| ÑÐ¸|ÑƒÐ´Ð°|ÑÑƒÐ´|ÐºÑÐ¼|Ñ‚Ð°Ð»|Ð°Ð°Ñ|Ò¯Ð»Ñ|ÑÐ»Ñ|Ò¯Ð³Ñ|Ò•Ð°Ð½|Ð¹Ñ |Ð°Ð°Ò•|Ñ€Ñ‹Ñ|Ð»Ð»Ñ‹|ÑÑ€Ð³|Ñ‚ÑƒÐ»|ÐµÑÑ‚|Ð½ Ñ…|Ñƒ Ð±| Ð°Ñ€|Ñ‚ÑÒ•|ÑÒ•Ñ|Ð¾Ð»Ð±|Ñ†Ð¸Ð°|Ð¾Ñ†Ð¸|ÑƒÐºÑ‚|ÐºÑ‚Ð°|Ð½Ñƒ |Ñ€ Ð¾| Ð¾Ñ€|Ð¸ÑÑ…|Ò•Ñ‹Ð½|ÑÐ¾Ñ†|Ð¸ÑÐ»|ÑÐ»Ð°|Ð±Ð¸Ñ‚|Ð¸Ð»Ð¸|Ð°Ð°Ò»|ÑÐ½Ð¸",
                        tyv: " Ð±Ð¾|Ð»Ð³Ð°|Ð±Ð¾Ð»| ÑÑ€|Ñ€Ð³Ðµ|ÑÑ€Ð³|Ð³Ð° | ÐºÐ¸|Ð°Ñˆ |Ð¾Ð»Ð³|Ð³ÐµÐ»| Ð±Ð°|Ð³Ð°Ñˆ|Ð°Ñ€Ñ‹| Ð±Ò¯|Ð°Ð·Ñ‹|Ð½Ð³Ð°|Ð¸Ð¶Ð¸|ÐºÐ¸Ð¶|Ð°Ð½ |Ð³Ðµ |Ð¸Ð³ |Ð°Ñ€ |Ð»ÐµÑ€|Ò¯Ñ€Ò¯|Ð¸Ò£ | Ñ…Ð¾|Ñ‹Ò£ |Ð°Ð·Ð°|Ð·Ð° |Ñ‹Ð½Ð³|Ð±Ð°Ð·|Ñ€Ð¸Ð½| Ñ‚Ñƒ|Ð½Ð¸Ò£|Ð»Ð¸Ð³|ÐµÐ»Ð¸|Ð¸ Ð±|Ò¯Ð·Ò¯|Ð¸Ð»Ðµ|ÐµÑ€Ð¸| Ñ‡Ð¾|Ñ€Ñ‹Ð½|Ð¶Ð¸ |Ð°Ð°Ñ€|Ñ‚ÑƒÑ€|Ð½Ñ‹Ò£| ÐºÐ°|ÑƒÐ³ |Ð³Ð°Ð½|Ð³ Ðº|Ð»Ð°Ñ€|Ð½ Ð±|Ñ‹Ð½ |ÐµÐ»Ðµ| Ñ…Ð°|Ð¸Ð½ |Ð³ Ð±|Ð°Ð¶Ñ‹|Ð·Ñ‹ |Ð±Ò¯Ñ€|Ñ€Ò¯Ð·|Ð°Ð»Ð°|Ð·Ò¯ | Ð´Ðµ|Ð¾ÑÑ‚|Ñ…Ð¾Ñ|Ð½Ð³Ðµ|Ð´Ñ‹Ñ€|Ð·Ñ‹Ð½|Ð»Ð³Ðµ|Ñ€Ð³Ð°|Ñ€ Ð±|Ð°Ð½Ð´| Ð±Ð¸|Ð»Ð´Ñ‹| ÐºÑ‹|Ð´Ð°Ð°|Ð°Ð»Ð³|Ð° Ð±|ÑƒÑ€Ð°|Ò£ Ð±|Ñ‹Ð½Ñ‹|Ð¾Ð»Ñƒ|Ð´Ð° |Ð»ÑƒÐ³| Ð´Ð°|Ð°Ð°Ð½|Ð³Ð°Ð»|Ð±Ð¸Ð»|ÑƒÑ€Ð»|Ð»Ðµ |Ð°Ð° |Ñ€Ð°Ñ€|Ð°Ð»Ñ‹|Ðµ Ð±|Ñ‹Ñ€ |Ð¶ÑƒÑ€|Ð° Ðº|ÑƒÐ¶Ñƒ| ÑƒÐ¶|Ð½Ð´Ñ‹|Ð¸Ð½Ð¸| Ð°Ð¶|Ñ‹Ð³ | Ð°Ð·|Ð°Ð»Ð´|ÐµÐ´Ð¸|ÑÑ‚Ð°| Ð°Ð»|Ð·Ð¸Ð½|Ñ‚Ð°Ð»|ÑƒÑ€ |Ð¿ Ñ‚|ÐµÐ»Ð´|ÐµÐ·Ð¸|Ñ€ Ñ|Ð°Ð´Ñ‹|Ñ‹Ñ€Ñ‹|Ð¾Ñ€Ñƒ|Ð°Ð½Ñ‹|Ñ€Ð»Ñƒ|Ò¯Ð³Ò¯|ÐµÐ½ |Ð½ Ñ‡|Ð»ÑƒÑ€|Ñ‚Ñ‚Ñ‹|Ð½ Ðº|Ð° Ð°|Ò£ Ðº|Ð°Ñ |Ð´Ñ‹Ð³|Ðµ Ð°|Ð° Ñ|Ð½Ð´Ð°|ÑˆÐºÑ‹|Ð½Ð´Ðµ|Ñ‹Ð»Ð´|Ð»ÑÑ|Ñ‹ÑˆÐº|Ð¸Ð½Ð³|Ñ‹ Ð±|Ñ€Ð½Ð¸|Ð´Ð°Ñ€|ÑƒÒ£ | ÐºÒ¯|Ñ‡Ð¾Ðº|Ð°Ñ‚Ñ‚|ÐµÐ½Ð¸|Ð¼Ð°Ð°|Ñ‹Ð»Ð³|Ð±Ò¯Ð³|Ò£ Ñ…|ÐºÑ‹Ð½| Ñ‚Ð°|Ñ‹Ñ€Ð°|Ð°Ñ†Ð¸|Ð°Ð» |Ð³Ð°Ð°|Ð½ Ñ…| ÑÐ¾|Ñ€Ð»Ð°|ÑÑÑ€|Ò£ Ñ|Ð¸Ñ€ | Ñ‡Ñƒ|Ñ‹Ð¿ |Ò£ Ñ‡| Ð½Ð°|ÑƒÑ€Ñƒ|Ð¸Ð¸Ñ‚|ÐµÑ€ |Ð½ Ð°|Ð»Ð´Ð°|Ð±Ð¾Ð´|Ð°Ð¼Ð°|Ñ€Ò¯Ð½|Ð³Ð°Ð·|Ð³Ð»Ð°|Ð¸Ñ‚Ð¸| Ñ‡Ð°|Ñ€ Ðº| Ð°Ñ€| Ð¾Ð¾|Ð¿ Ð±|Ð³Ò¯ |Ð° Ñ…|ÐµÑ€Ð½|Ñ†Ð¸Ñ|Ó©Ó©Ñ€|Ðµ Ðº|Ñ€Ð½Ñ‹|ÐºÐ°Ð½|Ð°Ñ€Ð½|Ñ…Ð°Ð¼|Ð¶Ñ‹Ð»|Ð°Ñ€Ð°|ÑƒÐ»Ð³| Ñ…Ò¯|Ð½ÑƒÒ£|Ñ€ Ñƒ|ÑÑ‚Ñƒ|Ñ‚ÑƒÐ³|Ð¾Ò£ |Ð»Ð°Ð°| ÑÐ°|Ð¾Ð¾Ò£|Ð´Ð°Ð»|Ò¯ Ðº| Ñ…Ðµ|ÑƒÐ½Ñƒ|Ð´ÑƒÐ½| Ñ‡Ò¯|Ð¾Ð´Ñƒ|Ð½Ð¸ |Ð»Ð´Ðµ|Ð° Ñ‡|Ó©Ñ€Ðµ|Ð° Ð´|Ñ€ Ð°|Ñ‹Ð½Ð´|ÑƒÑ€Ð³|ÑÑÐ½|ÐºÑ‹Ð»|Ò¯Ð»Ñ|Ò¯Ð»Ð³|Ð¾Ðº |Ð´ÐµÒ£| Ð½Ð¸|Ñ‚Ñ‚Ð°|Ð½Ð¸Ð¸|Ð»Ñ‹Ñ€|Ð½ Ñ‚|Ò¯Ð½Ðµ|ÑƒÐ³Ñƒ|Ð´ÐµÐ½| ÑƒÐ³|Ð½ Ð´|ÐµÐ¿ |ÑˆÐ°Ð°|ÐµÒ£ |Ñ‚Ñ‹Ð½|Ñ…Ð°Ð½|Ð½Ð°Ñ€|Ð½Ð½Ð°|Ñ‹ Ñ…|Ñ‡Ð¾Ñ€|Ð´ÐµÑ€|Ð°Ñ€Ð»|Ñ‡ÑƒÑ€|Ð°Ñ€Ð³|Ð¾Ð¹Ð»| ÐºÓ©|Ð´Ð¸Ð»|ÑÐ¿ |Ð° Ñ‚|Ð°Ð»Ð±|ÐºÐ° |Ñˆ Ñ…| ÐºÐµ|ÑÐºÐµ|Ð¸Ñ€Ð¸|Ð°Ð°Ñˆ|Ñ€Ñ‹Ð»|Ð½Ñ‹ |ÐµÑ‚Ðº|Ð³ÑƒÑƒ|Ñ€ Ð´|Ò¯ Ð±|ÑƒÑ€Ñ‚|Ð¸Ð»Ð³|Ò¯Ð½Ð´|Ð³ÐµÐ½|Ó©ÑÐº| Ó©Ñ| Ð¾Ð»|Ð¸Ð½Ð´|ÐºÒ¯Ñ€|Ð±Ð¾Ñ‚|Ð½Ð°Ñ†|ÐµÐ³Ðµ|Ð°Ð¼Ð³| Ñ‡Ðµ|ÑÑ€ |Ð»ÐµÐ»|Ó©Ñ€Ò¯|Ñ‹ÑˆÐ°|Ñ€ÐµÐ´|Ð°Ð´Ð°|ÑÐ·Ñ‹|ÐµÐ²Ð¸|ÐºÐ°Ð¼|Ð°ÑˆÐº|Ð´Ñ‹ |Ñ…Ð¾Ð¾|Ð´Ð°Ð½|Ð°Ð¹Ñ‹|Ñ‹ Ðº|Ñ€Ð°Ð»|ÑˆÐºÐ°",
                        ady: "Ð³ÑŠÑ|ÑÑƒ |Ñ‹Ð³ÑŠ| ÐºÑŠ|Ñ€Ñ |Ð½Ñ‹Ð³|ÑŠÑ |Ð½ÑÑƒ| Ñ…Ñ| Ð·Ñ‹|ÑÐ¼ |Ñ„Ð¸Ñ‚|ÑŠÑÑ€| Ð·Ñ|Ñ‚Ñ‹Ð½|Ð°Ð³ÑŠ|ÑÑ…Ñ|Ñ…ÑÑ‚|Ñ†iÑ‹|iÑ‹Ñ„|Ñ‹Ð½Ñ‹|ÐºÑŠÑ‹|ÑŠÑÑƒ| Ñ†i|Ñ…ÑŒÑ| Ñ„Ð¸|ÐºÑŠÑ|ÑÑ€ |Ð¸Ñ‚Ñ‹|Ñ…ÑÐ¼|ÐºiÑ|Ñ…ÑŠÑƒ|ÑÑ€Ð°|Ñ‹Ð¼ |ÑÐ½Ñ‹|Ñ€Ð°Ð»| Ñ„Ñ|ÑŠÑÐ¼|Ñ Ñ†|ÑÐ½Ñ|Ñ Ð¸|Ñ Ð·|Ñ‚ÑÑƒ|ÑÑˆÑŠ|ÑŠÑ…ÑŒ|Ñ‹Ñ„Ð¸|Ñ‹Ðºi|ÑÑ‚Ñ€|Ñ‚Ñ€Ñ|Ñƒ Ð·|Ñƒ Ñ…|Ð¸ Ñ„|Ð³ÑŠÐ¾|Ð¸Ð³ÑŠ|ÑˆÑŠÑ…|ÑÑ€Ñ|Ñ„Ð¸ |Ð»ÑŠÑ|iÑ |Ñ‹Ð½Ñ|ÑÐ´Ñ|ÑÐ³ÑŠ|Ñƒ Ðº|Ð¼Ð¸ |Ñ„ÑÑˆ| Ð³ÑŠ|ÑŠÑÑ…| Ñ‰Ñ‹|Ð¼ Ð¸|ÑŠÑƒÐ°|ÑˆÑŠÑƒ|ÑÐºi|Ð¶ÑŒÑ‹|ÐºÑ–Ñ|Ñ…ÑÑ€|Ñ Ðº|Ð¼Ñ€Ñ|Ñ„ÑÐ´|Ð»ÑŠÑ‹|ÑÐ¼Ñ€|Ñ‹Ñ„ |Ñ–Ñ |Ð¼ Ðº|Ñ Ñ…|Ð¿ÑÑ‚|ÑÑ‚Ñ|Ñ‚Ð¸ | Ñ…ÑŠ|ÑÑ‚Ð¸| Ð¼Ñ‹|ÑƒÐ°Ñˆ|Ð·ÑÑ€| Ð¸Ñ–|ÑÐºÑ–|iÐ¸ |ÑƒÐ½Ñ| Ñ‹Ðº| Ðµ |ÑŠÑÐ¿| ÑˆÑŠ|Ñƒ Ñ‰|ÐºiÐ¸|Ð¼Ñ |Ð½Ñ‡ÑŠ|ÑŠÑÑˆ|Ð°Ð» |Ñ Ð°|ÑŒÑÐ½|Ñ‹Ñ‚Ñ‹|ÑƒÑ‰Ñ‚|Ñ‰Ñ‚Ñ|ÑŠÑ‹Ñ‚|Ñ Ñˆ|Ñ‹Ñ‚Ñ|Ð¸Ñ– |Ñ‹Ð»ÑŠ| Ð¿Ñ|Ð·Ñ‹ |Ñ€ Ð·|Ð·ÑÑ„|Ð°Ð»ÑŠ|Ñ Ð³|ÑŠÑƒÑ‰|ÑÐ¼Ñ‹|ÑÑ„Ñ| Ð»ÑŠ|Ñ Ñ„|Ñ‰Ñ‹Ñ‚|Ñ Ñ|ÑÐ¿ |Ð±Ð·Ñ|ÑŠÑÐº|Ñ‚ÑÐ¿|ÑƒÐ¼Ñ|Ñƒ Ð°|Ð°ÑˆÑ|Ð¸ Ðº|ÑƒÐ³ÑŠ|Ñ‹ÐºÑ–|Ð·ÑÑ…|Ñ€Ð¸Ð³| Ð½Ñ|ÑÑˆi| ÐµÐ¶|ÑÐ¿Ñ|Ð°Ð»Ñ‹|Ñ‡ÑŠÑ|Ð³ÑŠÑƒ|ÐµÐ¶ÑŒ|ÑƒÐ½Ð°|Ñ‹Ð·Ñ|ÑŠÑƒÐ¼| Ñ…Ð°|Ñ Ð»|Ð·Ñ‹Ñ„|ÑˆÑ–Ñ|Ñ‹Ñ€Ñ|ÑƒÑ…ÑŠ|Ð¸ Ð·|Ñ Ñ‹| Ð¸i|Ð°Ð±Ð·|Ð½Ñ‹Ð¼|Ð°Ð¼Ð°|Ð¼Ð°Ð»|Ñ†Ñ–Ñ‹|ÑŠÑÐ³|Ñ„Ð°Ð³|Ñ„Ñ‹Ð³| Ð¶ÑŠ|ÑŠÑ‹Ñ…|Ð·ÑÐ³|ÑÐ¶ÑŒ|Ñ…ÑŠÑ|Ñ–Ñ‹Ñ„|Ð¼Ñ‹Ðº|ÐºÑŠÐ°|ÑˆÑÑ…|Ð¸ Ð¸|ÐµÐ¿Ñ|ÑÐµÐ¿|Ð½ÑÐµ|Ð¸ Ð°|Ð´ÑƒÐ½| Ð´Ñƒ|Ñ…Ð°Ð±|Ñ‹Ñ…Ñ|Ð¾Ñƒ |Ð¿ÑÑ|ÑŠÐ¾ |ÑŠÐ¾Ð½|Ð¼Ñ‹ |ÑŠÑƒÐ³| Ð°Ð¼|ÑÑ„Ð¸|Ñ‚Ñ‹Ñ€|Ð¶ÑŒÑ|Ð»Ñ‹Ð¼|Ð°Ðµ |iÑÑƒ|Ñ‹Ñ€Ð¸|ÑÐ¿Ñ|Ñƒ Ð¸|Ð¼ÑÐ½|Ñ‹Ñ„Ñ|ÑÑÑƒ|ÑÑÑ|ÑÑÐ½|Ð½ÑÐ¼|ÑˆÑŠÐ¾|Ð¿ÐºÑŠ|Ð¼ Ðµ|Ð·Ñ‹Ð½|Ñ‹Ñ€Ð°|Ñ„ÑÑƒ|ÑŠÑÐ·|ÑŒÑÐ¿|ÑŒÑ |Ð°Ñ„Ñ|Ñ‚ÑÐ½|Ñ‹Ñ„Ñ‹|Ð»Ñ…Ñ|Ð°Ð»Ñ…|ÑÑƒÐ¼|Ñ‹Ð½Ñ‡|Ð´Ð¶Ñ|Ñ‹iÑ|Ð·Ñ |ÐºiÐ¾|Ñ„ Ñ„|Ñ‹ Ñ…|Ñƒ Ð¿|Ð´ÑÑƒ|Ð´Ñ |ÑŠÑÑ| Ð¸Ðº|ÐºÑŠÐ¾|Ð¿Ñ…ÑŠ|Ñ‹Ñ€ |Ð¼ Ñ„|Ñƒ Ñ‹|ÑÑ€Ð¸|Ð°ÑÑ|Ð¸Ñ‚Ñ|ÑƒÐ¸ |Ñ€Ð¸ |Ð½ Ñ„|Ð¸Ð¼Ñ‹|ÑˆiÑ‹|ÑÐ½ |ÑŠÑ‹Ñ‰|Ð°ÑˆÑŠ|Ñ Ðµ|Ñƒ Ðµ|Ñ„ Ð¶|Ð¶ÑŠÑƒ|ÑŠÑÐ½|Ð½Ñ | Ðºi|ÑŒÑÑ„|ÐµÐ³ÑŠ|ÑÑ…ÑŒ|iÑÐ½|Ð·Ñ‹Ñ€|ÑƒÐ¼Ð¸| ÑˆÑ–|iÑ‹Ð³|Ð¿ Ñ…|Ð±Ð³ÑŠ|ÑÐ»ÑŠ|ÑŒÑ‹Ð¼| Ð°Ñ„|Ñƒ Ñ„|ÑÑƒÑ…|Ð»ÑÐ¶|Ñ€ Ðº|ÐºÑ–Ð¾|ÐºiÑ‹|ÑÐ¿Ðº|ÑˆÑ–Ð°|Ñ…ÑÐ´|ÑÐ´Ð·| Ð¸ |Ð¾Ñ‚Ñ‹|Ñƒ Ð³|ÑŒÑ‹Ð½|Ð·ÑÐº| Ñ†Ñ–| Ñ„Ð°| ÑÑ‹|Ñ‚Ñ‹Ð³| Ð¸Ñƒ|Ñ‰Ñ‚ |Ð¼Ñ‹Ð»|Ñ€Ð°Ð³|ÑÐ¼Ð¸|ÑˆiÑ|iÐ°Ð³|Ð»ÑŠÑ„|Ð¸ÐºÑŠ",
                        abk: "Ð°Ñ€Ð°|Ñ€Ð° |ÐµÐ¸ |Ð°Ð»Ð°|Ð° Ð°|Ð° Ð¸| Ð¸Ð°| Ð°Ñƒ|Ð°ÑƒÐ°|Ð·Ð°Ð°|Ñ€ÐµÐ¸| Ð°Ð·|Ð°Ò›Ó™|Ð·Ð¸Ð½|ÑƒÐ¿ |Ð°Ð·Ð°|Ó™Ð° |Ð¸ Ð°|Ñ‹ Ð¸| Ð´Ð°|Ð¾ÑƒÐ¿|Ð³ÑŒÑ‹|Ð»Ð°Ðº|Ð°Ðº |ÑŒÑ‹ |ÑƒÐ°Ò©|Ð·Ð°Ñ€|Ð°Ñ‚Ó™|Ð»Ð°Ñ€|Ð°Ò©Ñ‹|Ð°Ð°Ð»|Ð°Ñ€Ð±| ÐµÐ¸|Ðº Ð°|Ñ‹Ð»Ð°|Ð°Ð°Ñ€|Ò›Ó™Ð°|Ð´Ð°Ñ€|Ò©Ñ‹ |Ñƒ Ð°|Ñ‹ Ð°|Ñ€Ð±Ð°|Ó™ÐµÐ¸|Ð±Ð°Ð½|Ð°Ð·Ð¸|Ð»Ð° |Ð° Ñ€|Ð¼Ð¾Ñƒ|Ð¸Ð°Ñ€|Ñ€Ð¾Ñƒ|Ñ‚Ó™ |Ð¾Ñƒ | Ð¸Ð¼|Ð°Ð½Ð·|Ò›Ó™Ðµ|Ð½Ð·Ð°|Ð¸Ð½ |Ð½Ñ‹ | Ñ€Ñ‹|Ð°Ñ€Ðµ|Ð°Ñ€Ð¾|Ð¸ Ð¸| Ð¼Ð°|Ð½ Ð¸| Ð°Ñ…|Ó™Ð°Ñ€| Ð¸Ñ…|Ð¸Ð¼Ð¾|Ð¸Ð»Ð°|Ñ€Ð°Ñ‚|Ð°Ò­Ð°|ÑˆÑŒÐ°|Ð°Ñ…ÑŒ|Ð° Ð´|Ð°ÒµÐ°|ÒµÐ°Ñ€|Ð¸ Ñ€|Ñ€Ð°Ò›|Ð°Ñ…Ð°| Ð°Ð»| Ð°Ð¸|Ð°Ð· |ÑƒÐ° |Ð¿ Ð°|Ò›Ó™Ð¸|Ó™Ð¸Ò­|Ð°Ð½Ñ‹|Ð¸Ò§Ñˆ| Ð¸Ð·|ÐµÐ¸Ò§|Ò­Ñ€Ð°| Ð°Ð¼|Ð°Ñ…Ó™|Ð½Ò›Ó™| Ð¸Ñ€|Ð¸Ð½Ò›| Ð·Ðµ|Ñ‚Ó™Ñ‹|Ó™Ð»Ð°|Ñ‹ Ð´|Ð° Ð¼|ÑƒÑ€Ð°|ÑˆÓ™Ð°|Ó™Ñ‹Ð»|ÐµÐ³ÑŒ|Ð¶Ó™Ð»|Ð°Ñ†Ó™|Ð°Ð½Ð°|Ð½ÐµÐ¸| Ð¸Ð½|Ñ†Ó™Ð°|Ñ€Ñ€Ð°|Ñ…Ó™Ð°|Ò³Ó™Ð°|Ð° Ð·|Ð¼Ð° |Ð° Ñƒ|Ð¿ Ð´| Ð°Ð°|Ð¼Ð·Ð°|Ð°Ð½ |Ð¸Ð½Ð°|ÑŒÐ°Ñ€|Ð»ÐµÐ¸|Ð³ÑŒ |Ñ€Ñ‹Ð¼|Ð°Ñ€Ñ€| ÑƒÐ±|Ð°Ñ€Ð³|Ð¼Ð°Ð¼| Ð°Ò­| Ð°Ð±|Ó™Ð°Ð½|ÑÐ³ÑŒ|Ð°ÑÐ³|Ñ…Ð°Ñ€|Ð³Ñ‹Ð»| Ð°Ð´|Ñ…Ñ€Ð°|Ð·Ñ‹ |Ð·ÐµÐ³|Ó™Ð¸ | Ð½Ð°|Ð¸Ò­Ñ€|Ð°Ð·Ñ‹|Ð°Ñ |Ð°Ð¶Ó™|ÐºÓ™Ð°|Ð°ÐºÓ™|Ò­Ð°Ð·|Ð¼Ò­Ð°|ÑƒÐ°Ð°|Ð°Ñ€Ñ†|Ð¸Ð°Ð»|Ð°Ð¼Ð·|Ð±Ð°Ñ|Ñ‚Ó™Ð¸| Ò³Ó™|Ð¸Ñ…Ð°|Ð°Ò³Ó™|Ñ€Ð¸ |Ñ€Ð³ÑŒ|Ñ…Ð°Ò›|Ð°Ð³ÑŒ| Ñ€Ð·|Ð°Ð°Ñ†|Ò­Ð°Ð°|Ð»Ð°Ð·|Ð°Ò§Ñˆ|Ð´ÑƒÐ½|ÐºÐ°Ð°|Ð¸Ð¼Ð°| Ñ…Ð°|Ð· Ð°|ÑƒÐ½Ðµ|Ñ‹Ò›Ó™|Ð¸Ð·Ð¸|ÑƒÐ±Ð°|Ñ‹ÑˆÑŒ|Ð°ÑˆÑŒ|Ð°Ð³Ð°|Ð°Ñ€ |ÐµÐ¸Ð»|Ñ€Ð°Ð·|Ð°Ò­Ñ‹| Ñ€Ðµ|Ð½Ð°Ð³|Ò³Ó™Ñ‹|Ñ€Ð°Ð»|Ð»Ð°Ò­| Ð°Ò³|Ñ…Ó™Ñ‹|Ð¼Ð¸Ð»|Ñ€Ò­ |Ñ‹ Ðµ|Ñ€Ñ† |Ð°Ð±Ð°|Ð´Ð° |Ñ€Ð°Ð°| Ð´Ñ‹|Ð»Ð°Ñ…|Ð¸Ð´Ñƒ|Ð°Ð´Ð°| Ð¸Ð´|Ò§ÑˆÑ‹|Ð°Ñ…Ñ‹|Ð¾ Ð°|Ð¸ÒŸÐ°|Ð½Ð°Ñ|Ð±Ð°Ñ€|Ð°Ð¼Ò­|Ð°Ó¡Ó™|Ò­Ð°Ñ…|Ñ…ÑŒÐ°|Ó™Ñ‹Ñ€|Ð¿ Ð¸|Ñ‹ÒŸÐ°|Ð±Ð¶ÑŒ|Ð³Ð°Ñ€|Ñƒ Ð¸|Ð°Ð»Ð¾|Ñ€Ñ…Ó™|ÒŸÐ°Ð·|Ð°Ð°Ð½| Ð°Ò§|Ð·Ð°Ðº|Ð°Ð°Ð¼|Ò­Ò›Ð°|Ð°Ò³Ð°|Ð¼Ò©Ð°|Ð´Ñ‹Ñ€|Ó™Ñ‹Ð¼|Ó™Ð°Ò§|Ñ‹Ñ€Ñˆ|Ð°ÑƒÑ|Ð½Ò­Ò›|Ð¼Ð°Ð·|Ð°Ð¼Ð¸|Ñ…Ñ‹ |Ð¸Ñ€Ñ‹|Ð·ÐµÐ¸| Ð°Ó¡|ÐºÑƒÐ°|Ñ‹Ð½Ò­|ÐµÐ¸Ð´| Ð°Ð½| Ð¸Ñˆ|Ó™Ñ‹Ð½|Ð°Ð° |Ò›Ó™Ñ‹|ÑˆÑŒÒ­| ÒŸÐ°|Ð¸Ò­Ð°|Ò›Ð°Ñ€|Ð³Ó¡Ð°|ÑƒÑ |Ð°Ò§Ñ|Ñ‹Ð¼ |Ð¼ Ð°|Ñ€ Ð°|Ò§Ñˆ |Ò­Ð°Ñ€|Ñ…ÑŒÑ‡|Ó™Ð°Ð»|Ñ…ÑŒÑ‹|Ð°Ð»Ñ…| ÑƒÑ|Ó¡Ð±Ð°|Ð¸ Ð´|Ñ…Ð°Ò­|Ð»Ð°Ð³|Ñ Ð¸|Ð° ÒŸ|Ò¿ÐºÐ°|Ð¸Ò¿Ðº|ÑŒÒ­Ñ€|Ð±Ñ€Ð¸|Ó™Ñ€Ð°|ÑŒÐ°Ò›|Ò³Ð°Ò­|Ð¶ÑŒÐ°|Ð°ÒŸÐ°|Ñ€Ñ‹Ð»| Ð°ÒŸ|Ð°Ñ€Ò­|Ñ†Ð¸Ð°|Ð°Ð¼ |Ð°Ð±Ñ€|ÑƒÐ°Ð·| Ð°Òµ|ÐºÐ³ÑŒ|Ð°Ñ†Ñ…|Ð°ÐºÐ³|Ð°Ð³Ó¡|Ò­Ñ‹Ñ€| Ð¸ÒŸ|ÐµÐ¸Ñ†|Ñ Ð°|Ó™Ð³ÑŒ|Ð°ÑˆÐ°",
                        alt: " Ñ˜Ð°| Ñ‚Ð°|Ð»Ð° | ÐºÐ°|Ñ‚Ð°Ð¿|Ñ€Ð¸Ðº| ÐºÐ¸| Ð»Ð°|ÑÑ€Ð¸|Ñ‹Ò¥ |Ð¸ÐºÑ‚|Ð¿â€Ñ|â€ÑÑ€|Ð° Ðº|Ð°Ð¿â€|Ð¸Ð¶Ð¸| Ð±Ð¾|ÐºÐ¸Ð¶|Ð»Ñƒ |Ð½Ñ‹Ò¥|Ð°Ð¶Ñ‹|Ñ‚Ó± |ÐºÑ‚Ó±|Ð»Ðµ |Ñ‹Ð½Ð°|Ð°Ð¹Ñ‹| Ñ‚Ñƒ| Ð¾Ð½|Ñ‹ Ð»|Ð»Ð°Ñ€| ÐºÐµ|Ð¶Ñ‹ |Ð° Ñ‚|Ñ˜Ð°Ñ€|ÐµÑ€Ð¸|ÐºÐ°Ð¶|Ð±Ð¾Ð»|Ð´Ð° |Ð°Ñ€ |Ð³Ð° |Ñ€Ð³Ð°| Ð´Ðµ|ÑƒÑ‡Ñƒ|Ð´Ðµ |Ð¶Ð¸ | ÑƒÑ‡|Ñ‹Ð¹ |Ð¸Ò¥ |Ñ‡ÑƒÑ€|Ñ‹Ð½ | Ð±Ð¸|Ñ‹Ð½Ð´|Ð°Ñ€Ñ‹|Ð¹Ñ‹Ð¼|Ðµ Ñ˜|Ñ€Ð»Ñƒ|ÑƒÑ€Ð»|ÐµÑ€ |Ñ˜Ð°Ð¹|Ðµ Ðº|Ð½Ð´Ñ‹|Ð¾Ð»Ð¾|Ð°Ñ€Ð³| Ð»Ðµ|Ñ€Ñ‹Ð½| ÑÐ¼|ÑÐ¼Ðµ|Ð°Ñ€Ð°|Ð°Ò¥ |Ð°Ð½ | Ñ‚Ðµ|Ð·Ðµ |Ð¸Ð½ |ÐµÐ·Ðµ|Ð³Ð°Ð½| Ð¾Ñ€|Ò¥ Ñ‚|Ð¾Ð½Ñ‹|Ð½Ð¸Ò¥|Ð»Ð³Ð°|Ð·Ñ‹Ð½|Ð¹Ñ‹Ð½|Ð¼ÐµÐ·|Ñ‹Ð½Ñ‹| Ñ˜Ðµ|Ð°Ð»Ñ‹|ÑƒÐ»Ð°|Ò¥ Ðº|ÐºÐµÑ€| Ð°Ð»|Ñ‹Ðº |Ñ€Ð¸Ð½|Ð¾Ðº |Ó± Ðº| Ð°Ð¹|Ð½Ð°Ò¥|ÐµÑ€Ðµ|Ð´Ð¾ |Ð¸Ñ€Ð¸|Ñ†Ð¸Ñ|ÐºÐ°Ð½|Ð½Ð´Ð°|Ð°Ð»Ð°|Ð»Ñ‹Ðº|Ð° Ñ˜|Ñ‚ÑƒÑ€| Ð±Ð°|Ñ€ Ñ‚|Ñ€ Ñƒ|Ñ€Ó±Ð¼|Ð»Ð¾Ñ€|Ñ‚ÐµÑ€|Ð¸Ð½Ð¸|Ð°Ñ†Ð¸|Ð±Ð¸Ñ€|Ðµ Ñ‚|Ò¥ Ñ˜| ÐºÐ¾|Ð°Ð½Ð´|Ñ‹ÐºÑ‚|Ð½Ð° |Ð¾ Ð¾|Ð¾Ñ€ |Ð° Ð°|ÐºÑ‚Ðµ| Ñ˜Ð¾|Ñ˜Ð°Ò¥|Ñ˜Ó±Ñ€|Ñ‹ Ñ˜|Ð¸Ð½Ðµ|Ñ‹Ð¼ |Ó±Ñ€Ðµ|Ñ€ÐµÐº|Ð°Ð·Ñ‹|Ñƒ Ðº|Ð±Ð¾Ð¹|Ð°Ð½Ñ‹| Ð¾Ð»|Ð°Ñ€Ñƒ|ÐµÐ½ |Ð¾Ð¹Ñ‹|â€Ñ‚Ð°|Ð¸Ðº |Ð¸ Ñ˜|Ð½Ñ‹Ð¹|ÑƒÐ»Ñƒ|Ð° Ð±|Ð°Ò¥Ñ‹|ÐºÐµÐ¼|Ð°Ð¹ |ÐºÐ¾Ñ€|Ð»Ð°Ð½|Ñ‹Ð»Ð°|Ð³Ðµ |Ð¾Ð½Ð¾| Ð¸Ñˆ|Ð´Ñ‹Ð¹|Ð½ Ñ˜|Ð¸ Ðº| Ð±Ñƒ|Ñ€ÑƒÐ»|ÐºÐ°Ð»|Ñ€ Ð°|Ð¸Ð»Ðµ| Ñ‚Ó§|Ðº Ðº| Ñ˜Ó±|Ñ‚Ð°Ð¹| Ð°Ñ€|Ð¶Ð¸Ð½|Ñ‚Ð°Ñ€|Ð°Ð»Ð´|Ð°Ð¼Ð°|Ð½ Ð°| ÐºÓ§|Ð·Ð¸Ð½|Ð»ÐµÑ€|Ð°Ð´Ñ‹|Ó±Ð¼Ð¸|ÐºÑ‚Ð°| Ð¾Ðº|Ð½ Ñ‚|ÐµÐ¿ |Ð°Ñ€Ð´|Ð°Ð½Ð°|Ð°Ð»Ð³|Ð½ Ðº|Ð¹Ð´Ð¾|Ð¾Ð¹Ð´|Ð¼Ð¸Ð½|Ð´Ð°Ñ€|Ð³ÐµÐ½|Ð½Ð¾Ð¹|Ó±Ñ€Ó±|Ñ‚ÐµÒ¥|Ñƒ Ð±|Ð½Ðµ |Ñ€Ð¸ |Ñ˜ÐµÑ‚|Ð¾Ð» |Ñ€Ð´Ñ‹|Ñ€ Ð¾|Ð´ÐµÐ¿|Ó§Ð¼Ó§| ÑƒÐ»|Ñ€ Ð»|Ðº Ð±| Ñ‡Ñ‹|Ð° Ð¾|Ñ€Ñ‹ |ÑÑ‚Ð²|Ð¾Ð¾Ð½|ÐµÐ´Ó±|Ñ‚ÐºÐ¸|Ðµ Ð±|Ð»Ð³Ðµ|Ð¾Ñ€Ñƒ| Ñ‚Ð¾|ÑŒÐ½Ñ‹|Ò¥ Ð±|Ð»ÑŒÐ½|Ð°Ð»ÑŒ|Ò¥â€Ñ‚|Ñ‚Ó§Ð·|Ð°Ð¹Ð°|Ð½Ñ‹ |Ð½Ð°Ñ€|Ð½Ð´Ðµ|ÐµÐº |Ð¿ Ñ˜|ÐºÑ‚Ð¸|Ñ‚ÐµÐº| ÐºÓ±|ÐµÒ¥â€|Ð¸Ñ€Ðµ|Ð°Ð¼Ñ‹|Ð¾Ñ€Ð¾|Ñ‚Ð²Ð¾|Ñ€Ð¾Ð¾|Ð°Ñ | Ð±Ó±|Ð´Ð¸ |Ð¾Ð³Ñ‹|Ð¾Ð´Ð¾|Ð¾Ñ€Ñ‹|Ð¸ÑˆÑ‚|Ð»Ð¸Ðº|Ñ Ñƒ|ÐºÑˆÐ¸|ÐµÐºÑˆ|Ð¸Ð½Ð´|ÐµÑ‚Ðº|Ð¹Ð°Ð»|ÐµÐµÑ€|Ð°Ð´Ð°|Ñ€ÐµÑ€|Ð° Ñ|Ð»ÑƒÑ|Ð¸ Ð±|ÐµÐºÑ‚|Ð½Ñ‡Ð¾|Ð¾Ð½Ñ‡|Ó± Ð¾|Ñ‹ Ð±|Ò¥ Ð°|ÐºÓ§Ñ€| Ó±Ñ€|Ñ€ÑƒÐ³|ÑÐ¾Ñ†|Ð°Ñ˜Ð°|Ñ‚Ð¾Ð´| Ð°Ñ˜|ÐºÐ¸Ñ€|Ð´Ñ‹ |Ó±Ð¼Ð´|Ñ€Ð¸Ð»|Ð¸Ñ€ |Ð¸Ð»Ð³|Ð·Ñ‹ |Ð±Ð°Ð·|Ñ‡Ñ‹Ð½|Ñ˜Ó§Ð¼|Ð»Ð´Ð°| Ð½Ð°|Ó§Ð·Ð¸|Ðµ Ñ|ÐºÐ° |Ñ€Ñ‚Ð¾|Ð¾Ñ€Ñ‚|Ð¸ÑÐ»|Ñ‹Ð¿ |Ðµ Ð¾|Ð´Ñ‹Ò¥|Ò¥Ñ‹Ð½|ÐµÒ¥ |Ð³Ð°Ð»|Ð¸ Ð¾|ÑˆÐ¸ |Ñ€ÐµÐ´|Ñ‹ Ð°",
                        kjh: " Ð¿Ð°| Ð¿Ð¾|Ð°Ð·Ð°|Ð¿Ð°Ð·|Ð° Ð¿|Ð·Ð° |Ð°Ð¹ |Ð»Ð°Ñ€|Ð°Ñ€ |Ð¿Ð¾Ð»|Ð° Ðº|Ò“Ð° |Ñ‹Ò£ | Ñ‚Ñ˜| ÐºÑ–|Ð°Ð»Ð°|Ò“Ð°Ð½|Ñ€Ò“Ð°|Ð½Ð° | Ñ…Ð°|Ñ–Ð·Ñ–|Ð°Ð½ |ÐºÑ–Ð·|Ð½Ñ‹Ò£|Ð»Ò“Ð°|Ð°Ñ€Ò“|Ñ‚Ñ˜Ñ€| ÐºÐ¸|Ñ˜Ñ€Ðµ|Ðµ Ð¿|Ð°Ð½Ñ‹| Ð°Ð»|Ð·Ñ‹Ð½|Ð°Ñ€Ð°| Ð½Ð°| Ð¿Ñ€|Ñ–Ò£ |ÐºÐ¸Ñ€|Ð½Ñ–Ò£|Ð¸Ñ€Ðµ|Ñ–Ð½Ñ–|Ð·Ñ–Ð½|Ð¾Ð»Ò“| ÑÐ°|Ð´Ð° |Ð½ Ð½|Ñ‹Ð½ |Ð°Ð·Ñ‹|Ò£ Ð¿|Ð¿Ñ€Ð°| Ñ‡Ð°| Ñ‡Ð¾|Ð½Ð°Ð¹|Ñ€ Ð¿|Ñ€Ð³Ðµ|Ð¿Ð°Ñ€|Ð³Ðµ |Ñ€ Ñ‚|Ñ€ÐµÐº|Ñ€Ðµ |Ð° Ð°|Ð½Ð°Ñ€|Ð°Ñ€Ñ‹|Ð¿Ð¾Ñ|Ñ‹Ð½Ð°|Ð»ÐµÑ€| Ñ…Ð¾|Ð½ Ð¿|Ð½Ð´Ð°| Ð¿Ñ–|Ð¾Ð»Ð°|ÐµÐ½Ñ–|Ð°Ñ†Ð¸|ÑÑ‚Ñ‹|ÑÑ…Ð°|Ð° Ñ‚|Ð¾Ñ | Ð°Ñ€|Ð° Ñ‡|Ð° Ñ…|Ð¹ Ð¿|ÐµÐº |Ñ‹Ñ€Ð°| Ñ‚Ð¾|Ð½Ñ‹ |Ñ‹Ð½Ñ‹|Ñ†Ð¸Ñ|Ñ‡Ð°Ñ€|Ð»Ð°Ð¹|Ñ…Ð°Ð¹|Ñ‹Ò“ |Ñ€Ñ‹Ð½|Ð³ÐµÐ½|ÑÑ‚Ð°|Ð¾ÑÑ‚|Ñ‹ Ð¿|Ð´Ð°Ð¹|Ð° Ñ| Ð¾Ò£|Ð½Ð½Ð°|ÐµÑ€ |ÐµÐ½ | Ð°Ð½|Ð¾Ò£Ð´|Ò£Ð´Ð°|ÐµÐ»Ðµ|Ñ‹Ð½Ð´|ÐµÑ€Ð³|Ñ‡Ð¾Ð½|Ð¿Ñ–Ñ€|Ñ€Ð°Ð¹|Ð¾Ð½Ð½|Ñ€Ð° |Ñ–Ð³ | Ñ‚Ñƒ| Ñ‡Ñƒ|Ð°ÑÑ…|Ñ…Ð° |ÑƒÑ€Ñ‚|Ñ‡ÑƒÑ€|Ð°Ð»Ñ‹|Ò£ Ñ‚|Ð»ÑŒÐ½|Ð°Ð»ÑŒ|ÑŒÐ½Ð°|Ð½Ñ‹Ð½|Ð½Ðµ |Ð·Ñ– |Ð·Ð°Ñ€|Ñ€ÐµÐ»| Ñ‚Ð¸|Ð°Ð¹Ð´|ÑÐ°Ð½|Ñ€Ñ‚Ð°|Ð°Ñ€Ð½|ÐµÑ€Ñ–|Ñ€Ð°Ð²|Ñ Ð¾|Ñ–Ð½Ðµ|Ñ–Ð½ |Ñ€Ð½Ñ‹|Ñ‚Ñ‹Ñ€|Ð½Ñ–Ð½|Ñ– Ð¿|Ð°Ð¹Ð»|Ð¾Ð·Ñ‹|Ð·Ð½Ð°|Ñ…Ð°Ð½|Ðµ Ð°|Ò£ Ð°|Ñ…Ð°Ð·|Ð·Ñ‹ |Ñ‡Ð° |Ñ‡Ð¾Ñ…|Ñ‚ÐµÑ€|Ð»Ð°Ð½|Ò“Ñ‹Ñ|Ñ‚Ð°Ñ€|ÑÑ‚Ðµ|Ð½ Ñ‚| Ð¿Ñƒ|Ñ€ Ð°|Ðº Ð¿|Ð¾Ñ… |Ð¿Ñƒ | ÑÑ‹|Ð½Ð¸Ð¼|Ñ‹Ñ |Ñ‚Ð¾Ò“|Ð¿Ð°Ñ|Ð¾Ò“Ñ‹|Ð½Ñ‡Ð°|Ð½Ñ– |Ð¸Ð¼Ðµ| Ð½Ð¸|Ð°Ð²Ð¾|Ð´Ñ‹Ñ€|Ñ€Ð°Ð·|Ð°Ð·Ð½|Ð°Ò“Ñ‹|Ð¿Ð¾Ð·|Ð°Ñ |Ð°Ð½Ð´|Ñ…Ð¾Ð¾|Ñ‚Ð° |Ð³Ñ€Ðµ|Ò£ Ñ‡|Ð½Ð°Ð»|Ð¾Ð¾Ñ| Ñ‚Ð°|Ò“Ð»Ð°| Ð¾Ð»|Ð°Ð±Ð°|Ð½Ð°Ñ†|ÐºÐµÐ½|Ñ€ÐµÑ€|Ð»Ð³Ðµ| Ð´Ð°|Ð°Ð½Ð°|Ð½ Ñ…|Ñ‚Ð°Ñ|Ð°Ð´Ñ‹|Ñ€Ð°Ð´|Ð° Ð¾|ÐµÐ·Ñ–|Ð´Ð°Ò“|Ñ‚Ñ…Ð°|Ñ Ð¿|Ñ–Ñ€Ðµ|Ðµ Ñ…|Ð¹ Ðº|Ð¹ Ñ‡|Ð¿Ð¸Ñ€| Ð¿Ð¸| Ñ‡Ð¸|Ð¸Ñ€Ð³|Ð°ÑÑ‚|ÐµÐ´Ñ–|Ð¹Ð·Ñ‹|Ð°Ð¹Ð·|Ð¸Ò£ | Ð´Ðµ|Ðµ Ñ‡|Ð°Ñ€Ð´|Ð½ Ñ|Ð¹Ð»Ð°|Ð°Ò“ |Ð¾Ð½Ð°|Ñ‡Ð°Ñ‚|Ðµ Ñ‚|Ñ–Ñ€Ñ–|Ð´Ñ‹Ð»|Ð±Ð¸Ð½|Ñ– Ñ‚|Ñ€ÐµÐµ|Ð½ Ðº|ÑÑ‹Ð½|Ñ€Ð³Ð°|Ð½Ñ–Ñ|Ð¾Ð»Ð´|Ñ‹Ð»Ò“|Ð¹ Ð°|Ñ‡Ñ‹Ð»|Ð»Ð´Ñ‹|Ð°Ð° |ÐºÑ–Ñ€|Ð»Ð¸ |Ð½ Ð°|Ð»Ð¸Ñ€|Ð»Ñ‹Ò“|Ð´Ðµ |Ñ…Ð¾Ð½|Ð»Ñ‹Ð½| ÑÐ¾|Ò£ Ñ|Ñ‚Ð¾Ð»|ÐµÑÑ‚|Ñ€ÐµÐ´|Ð³ Ð¿|Ñ‹Ñ… |Ð°Ð½Ð½| Ñ€Ðµ|Ð¹Ð´Ð°|Ð¸Ð½Ñ‡|Ñ‹Ð»Ð±|Ñ‚Ð¸Ò£|ÑÐºÐµ|ÐµÐºÑ‚|ÑÐ°Ð¹|Ð°Ð¹Ð±|Ð°Ñ‚Ñ…|Ð½Ð³Ðµ| ÐµÐ³|Ñ†Ð¸Ð°|Ð¾Ñ†Ð¸|ÑÐ¾Ñ†| Ñ‚Ðµ|Ð½Ò“Ð°|Ð°Ñ‡Ñ‹|Ñ€Ð°Ñ‡|Ñ‹Ð¿ | ÐºÐµ|Ð´Ñ–Ð³|ÐµÐ³Ñ€|Ñ€Ð´Ðµ|Ð»Ñ–Ð³|Ð½Ñ‹Ñ|Ñ Ñ‚|Ñ€Ñ– |Ò“ Ð¿|Ñ Ñ‡|Ñ˜ÑÑ‚|Ñ‚Ñ˜Ñ|Ð° Ð¸|Ð¸ÑÐº|Ñ‚ÑƒÐ·|Ñ€Ñ–Ð½|ÐµÐ½Ð½|Ð¸Ð¾Ð½|Ð¹ Ñ‚",
                        evn: "Ð¸Ð½ | Ð¸Ð»|Ð¸Ð»Ñ| Ñ‚Ñ|Ñ‚ÑÐ´|Ñ‡Ð¸Ð½|ÑÐ´Ðµ|ÐºÐ¸Ð½| Ð±Ð¸|Ð´Ñƒ |Ñ‚Ñ‹Ðº|Ñ‹ÐºÐ¸|ÑÐ» |Ñ‚Ñ‹Ð½| Ð¾Ì„|Ñ‹Ð½ | Ñ‚Ð°|Ð½ Ñ‚|ÑÌ„Ð½|ÑÑ‚Ñ‹|Ð½ Ð¸|Ð°Ñ‡Ð¸|Ò£Ð¸ |Ð½ Ñ|Ð¼Ð°Ñ‡|Ð»ÑÑ‚| ÑÑ€|Ì„Ð½ |Ð°Ð²Ð°|Ð´ÐµÑ‚| Ð´Ñ|ÐµÑ‚ |ÑÌ„ |ÑƒÐ¿Ðº|Ð½Ð° |Ð¸Ñ‚Ñ‹| Ð³Ñƒ|Ð½Ð°Ð¹|ÐºÐ¸ | Ð¼Ñ|Ð²ÑÐ»| Ð²Ñ|ÑÑ‚Ð²|ÑÐ»Ñ| ÑƒÐ¿| Ò»Ð°|Ð»ÑÐ»|ÑÑ€ |Ð°Ð½ |Ð½Ò£Ð¸|Ð¼Ð¸ |Ð¿ÐºÐ°|Ð°Ð¹ |Ð½Ñ |ÐºÐ°Ñ‚|Ð´ÑÑ€|Ì„Ð½Ð¼|Ð²Ð° |Ñ‡ÑÌ„|Ð½ Ð±|Ð¾Ì„Ð¼|Ñ‚Ð°Ñ€|Ð³Ñƒ | Ñ‚Ñ‹|Ð¼ÑÌ„|Ð»Ñ |Ð¼Ñ‡Ñ| Ð°Ñ|Ð´ÑƒÐº|Ð½Ð´Ñƒ|Ñ†Ð¸Ñ|Ð´ÐµÑ€|Ð²Ð¸ |Ð½ Ð°|ÑÌ„Ñ‚|ÑÑ‡Ð¸|Ð½ Ð³|Ð³Ð°Ð½|Ð´ÑÐ½|Ñ Ñ‚|Ð°Ñ†Ð¸|Ð½ Ð¾|ÑÐ½ |Ð¼ÑÑ‡|Ñ‚Ñ‡Ñ|ÑƒÐ½ |Ò»Ð°Ð²|Ð½Ð¼Ð°|ÑÑ€Ð¸|ÑÐ³Ñ|Ñ‚ Ð±|ÑÐ´Ñ|Ð¸Ì„ |Ð° Ñ‚|Ð°Ñ‚ |Ð´ÑƒÐ½|Ð±Ð¸Ð¼|Ñ€ Ð¸|Ð½ Ð´|Ì„Ð¼Ð°|Ð³ÑÌ„|Ð´ÐµÐ½|Ð° Ð´|Ð°Ð½Ð¸|Ñ€ÑÌ„| Ð´Ñƒ|Ð½Ð¼Ñƒ|Ð°Ð¼Ð°|ÑƒÒ£Ð°| Ð´Ð°|Ð²Ð°Ð´|Ð¸ Ñ‚|Ð¸ Ð´|Ñ‚Ñƒ |Ð° Ð¸| Ð°Ð²| Ð½Ñƒ|Ñ‚ Ñ‚|Ñƒ Ð¸|Ð¸ Ð¸|Ð¸Ð¼Ñ‡|ÑƒÑ€Ñ| Ò£Ð¸|Ñ‚Ð²Ð¾|Ð½ Ñƒ|Ñ‹ÑÑƒ|Ð´Ñ‹Ñ| Ð´Ñ‹|Ñ€Ñ |Ð¸Ð½Ð´|Ð´Ð¸ |Ñ€Ð³Ð°|Ð±Ð¸Ñ|Ð¸ÑÐ¸|Ð½ÑƒÒ£|Ð´ÑÌ„|Ð½ Ò»|Ð³Ð´Ñ‹|Ð»Ð´Ñƒ|Ì„Ñ‡Ð¸|ÑÑ€Ñƒ|Ð¼ÑƒÐº|Ð»Ð´Ñ‹|Ð»ÑÌ„|Ð°Ð´Ñ‹|Ð¸ Ð²|Ð¸Ñ‡Ñ| ÑÐ¾|Ð±Ð¸Ð´|ÑÐ¸Ì„|ÐºÐ¸Ñ‚| Ð¾Ð±|Ð¸Ñ‚ |ÑÑƒÐ´|Ì„Ð½Ò£|Ð´Ð° |Ñ‡Ð°Ì„|ÑÐ¸Ð½|Ò£Ð°Ð½|ÑÑ€Ñ|Ð½ Ñ|Ð°Ì„ |Ð¸ Ð±|ÑƒÐºÐ¸| Ð±Ñ|ÑÐ²Ðº|Ñ€Ð¸Ð½|Ð²ÐºÐ¸|Ì„Ñ‚Ñ‹|ÑÐ³Ð´| Ð±Ñƒ|Ð°Ð´Ñƒ| Ð´Ñ| Ð´Ðµ|ÐµÐ½ |Ð´Ñ‹Ñ‚|Ñ€ Ð´|Ð¼Ð° |Ð²Ñ |Ð°Ì„Ð½|ÑÑ€Ð°|ÑÐ»Ð´| Ð´ÑŽ|ÐºÑÌ„|Ð½ Ò£|ÐµÑ€Ð¸| ÑÐ¼|Ñƒ Ð´| ÑÐ²| Ð¸Ñ‚|ÑƒÐº | Ð³Ð°|Ð° Ñ|Ð¸Ñ€ | Ð¸Ñ‡|Ð°Ñ‚Ñ‹|Ð¸ Ð³|Ñ€Ð¸Ì„|ÑÐ´Ñƒ|Ð°Ñ€ |Ð¸Ð´Ðµ|Ð¸ Ð¾|ÑÌ„Ð»|ÑÐ²Ñ| ÑƒÑ€| Ð°Ñ|Ò»ÑÐ³| Ò»Ñ| Ò»Ñƒ|ÑÑ‚ |Ð»ÑŒÐ½|Ð´ÐµÐ¼|Ð°Ð»ÑŒ|ÑÌ„Ð²|Ð²ÑÑ€|Ò£ÑÌ„|Ð¼Ð°Ð½|Ð´Ñ‹ |Ð°Ñ€Ñ|Ñ€ÑÑ‚|Ð³ÑÐ»|Ð» Ð±|Ð» Ñ‚|Ð½Ð¸Ì„|Ð°Ð» |Ñ‚ÑÐ³| ÑÐ´|ÑÐ½Ð°|ÑÐ½ |Ð±Ð¸Ð½|Ð¸Ì„Ð²| ÑÐ°|Ñƒ Ñ‚|Ñ‡Ð¸Ñ€|Ñ‚Ñ‹Ì„|Ñ‚ÐºÐ¸| Ð³Ð¾|Ð³Ð¾Ñ|Ð¾ÑÑƒ|Ñ‚Ñ‹Ð»|ÑƒÐ´Ð°|Ð´Ð°Ñ€|Ð´Ð¸Ð½|ÑƒÌ„Ð½|Ñ€ÑÐ²|Ñ‡ÑÑ‚|Ð½ Ð¼|ÐµÑ€Ñ|ÑÐ½Ñ|ÐµÒ£Ñ| Ð³Ñ|Ð´ÐµÒ£|ÑÑÐ¸|Ð»Ð²Ð°|ÑƒÐºÑƒ|Ñ‚Ð²Ð°|Ð¸Ì„Ñ‡|ÑÐ¸ |ÑÑƒÑ‡|ÑƒÑ‡Ð¸|Ì„ Ñ‚|Ð¸ Ñƒ| â€“ | ÑÑƒ|ÑŒÐ½Ð°|Ð° Ð±|Ñ‚ Ð³| ÑƒÐ¼|ÑƒÐ¼Ñƒ|Ð½ Ð½|Ð»ÑÐ´|Ì„ Ð¸|Ð°Ð½Ð´|Ñ‚ÑƒÑ€|Ñƒ Ñ|ÑƒÒ£Ñ‚|Ð°Ð´Ñ|Ò£Ñ‚Ñƒ|Ð¸Ð»Ð´|ÑÐ¼Ð°|Ñƒ Ð±|ÑÐ¼Ñ|Ð» Ð¸|Ð±ÑÐ»|Ð½Ð½Ñ|Ð¸Ð½Ð¼| ÑÐ¸|Ñ‹Ð³Ð°|Ñ‚Ñ‹Ð³|Ñ‚Ð°Ñ‚| Ð½Ð°|Ð¸ Ð¼|Ð¸Ñ‡Ð°|Ð²ÑÑ‚|Ð°Ð»Ð´|Ð½Ð½Ð°|ÐµÐ½Ð½|Ì„Ð» |Ñ‹Ñ‚Ñ‹|Ð°Ð½Ò£",
                        cjs: "Ñ‹Ð½ | ÐºÐ¸|Ð¸Ð¶Ð¸| Ð¿Ð°|ÐºÐ¸Ð¶| Ð¿Ð¾|Ð´Ð° | Ò›Ð°|Ð½ Ðº|Ð¿Ð°Ñ€|Ð·Ñ‹Ð½|Ò“Ð° | Ñ‡Ð°|Ð¶Ð¸ |Ð° Ðº|Ñ€Ñ‡Ñ‹|Ñ‡Ñ‹Ð½|Ð°Ñ€Ñ‡|Ð³Ðµ |Ð° Ð¿| ÐºÐµ|Ð¸Ð½ |Ð°Ð½Ñ‹|Ð¿Ð¾Ð»|Ð°Ð½Ð°|Ð½ Ð¿| ÑÐ°|Ð°Ð»Ñ‹|Ñ€Ð³Ðµ| Ð´Ð°| Ñ‚Ðµ|Ò›Ð° |Ò“Ð°Ð½|Ð°Ñ€ |ÑÐ°Ð½|Ð·Ð° |Ð»Ð°Ñ€|Ñ‹Ò£ |Ð°Ð½ |Ð»ÐµÑ€|Ð·Ð¸Ð½|Ð°Ñ€Ò“|Ð½ Ò›|Ð°Ð·Ñ‹|Ð°Ñ€Ð°|ÐµÑ€Ðµ| Ñ‡Ð¾|Ò›Ð°Ð»|ÐºÐµÑ€|Ð° Ñ‡|Ð³ÐµÐ½|Ð½Ð°Ð·|Ð¾Ð»Ð°|Ð° Ñ‚|Ð½Ò“Ð°| Ñ‚Ð¾|Ð°Ð·Ð°|Ð½Ð°Ñ€|Ñ‹Ò“ | Ð¿Ð¸|Ð½Ñ‹Ð½|Ð° Ð°|Ð°Ò“Ð°| ÐºÓ§| Ð°Ð½|ÐµÑ€Ð³|Ð¸Ð»Ðµ|Ð¶Ð¸Ð»|ÐºÓ§Ñ€|Ñ€Ò“Ð°|Ð°Ò£ |Ò›Ð°Ð¹|Ñ‹Ð½Ò“|Ð»Ñ‹Ò›|Ð½ Ñ‚|Ð½Ñ‹Ò£|Ð¾Ð¾Ð»|Ñ‚Ð¾Ð¾|Ð½ Ð°|Ð°Ð¹Ð´|Ñ‹Ò“Ð°|ÐµÑ€ |ÐµÑ€Ð¸|ÑÑ‹Ð½|ÐµÒ£ |Ð½Ñ‹ |Ñ‹Ò›Ñ‚|Ñ‡Ð°Ð´|Ð°Ð´Ñ‹|Ð½Ð½Ð°|ÐµÐ½ |Ò›Ñ‚Ð°|ÑˆÒ›Ð°|ÑƒÒ“ |Ð»Ð·Ñ‹|Ð°Ñ€Ñ‹|Ñ‚Ð°Ñ€|Ñ‡Ð°Ñ€|Ð¿ Ðº|Ð°ÑˆÒ›|Ð¿Ð¸Ñ€|Ò£ Ðº|Ð½ÐµÑ€| ÑƒÐ»|Ð¸ Ð¿|ÐµÐ·Ð¸|ÑƒÐ»Ñƒ|Ð½ Ñ‡|Ð»ÑƒÒ“|Ð° Ò›|Ð°Ð±Ð°| Ñ‡Ðµ| Ð°Ð»|Ð¿Ð°Ñˆ|Ò›Ð°Ð½|Ð° Ñ|Ò“ Ñ‚|Ð´Ðµ |Ð¾Ð» |Ñ‹Ð½Ð½|Ñ‹ Ð¿|Ð¶Ð¸Ð½|Ð¿Ð¾Ð·| Ñ‚Ñƒ|Ñ€Ð±Ðµ|Ò£ Ð¿|Ð½Ð´Ð°|Ñ‹ Ñ‡|Ð¾Ð·Ñƒ| Ð¸Ñˆ|ÑÒ›Ð°|ÐµÐ³Ð¸|Ñ€ÐµÐ³|Ð³Ð¸Ð½| ÑˆÑ‹|Ñ€Ð¸Ð½|Ñ†Ð¸Ñ|Ñ‚ÐµÐ¿| Ò›Ñ‹|ÐµÐ¿ |Ó±Ñ€Ð³|Ñ‹Ð¿ |Ò“ Ð¿|Ð¿Ð¾Ñˆ|Ð·ÑƒÐ½|Ñ€Ñ‹Ð½|ÑƒÐ½Ñ‹|Ð±Ð°Ð·|Ó±Ð¿ |Ð¾Ñˆ |Ð°Ñ†Ð¸|Ðµ Ñ| Ð°Ð°|ÐºÐµÐ¼|Ñ€Ð±Ð°|Ð¸ Ò›|Ñ‚ÐµÒ£|ÐµÐ±Ðµ|ÑˆÑ‚Ðµ|Ð±Ð° |Ð¸ÑˆÑ‚|Ð¾Ð»Ð·|Ó§Ñ€Ó±|Ñ Ð¿|Ó§Ñ€Ðµ|Ñ‡ÐµÑ€|Ñ€Ó±Ð¿| Ð¾Ð»|Ñ‹Ð¹Ñ‹| Ð°Ñ€|Ð»Ñ‹Ò“|Ð´Ñ‹Ð¹|Ñ€ Ð¿|Ñ€ÐµÐº| Ñ‚Ó§|Ð½Ð½Ðµ|Ð¾Ð·Ð°|Ð°Ò“Ñ‹|ÐºÐ¸Ñ€|Ð¸Ð¿ |Ð½Ð³Ðµ|Ð¸Ð½Ð³| Ó±Ñ€|Ñ‚Ò›Ð°|Ñ‡Ð°Ñ‚|Ð¸Ð½Ð¸|Ð°ÑÒ›|Ñ‡Ð¾Ð·| Ð½Ðµ|Ñ‚ÐµÐ³|ÐµÐ»Ðµ|Ñ‚ÑÑ‹|ÐµÐ³Ðµ|Ð¿Ð°Ñ|Ñˆ Ñ‡|ÐºÐ»Ð°|Ð¿ Ð¿|ÐµÐº |Ð¸Ò£ |Ð¿Ð¾ |Ñ€Ò“Ñ‹|Ðµ Ñ‡|ÐµÐ½Ð¸|Ñ€ Ð°|Ñ€Ð° |Ñ‡Ñ‹Ò“|Ñ‡Ð° |Ð°Ð»Ð°| Ð½Ð¾|Ð½Ð¾Ð¾|Ð¹Ð´Ñ‹|Ð´Ñ‹Ò“|Ñ€Ð·Ð¸|Ð±Ðµ |ÐµÑ€Ð´|Ð½ÐµÐ±|Ðµ Ð°|Ò›Ð°Ð°|Ðµ Ñƒ|Ð½ Ð½|Ð°Ð°Ð½|Ñ‹Ð½Ð´|Ð° Ó±|Ð·Ð°Ò›|Ð½Ð°Ò£| Ð°Ð¹|Ò£ Ñ‡|Ð°Ñ |Ò›Ð°Ñ‚|Ð°Ð°Ò£|Ð¾Ð¾ |Ð¶Ð¸Ð³|Ð»Ð° |Ð°Ð»Ð·|Ð¸ Ñ‚|Ñ‚ÑƒÑ‚|Ð¾ Ð´|Ð¸Ñ€Ð¸|Ð¸Ð³Ðµ| Ð´Ðµ|Ð´ÐµÐº|ÐµÐºÐ»|Ðµ Ð´|Ñ€Ð°Ñ†|Ñ‚Ñ‹Ñ€|Ð° Ð´|Ð½Ð¸ |Ð¹Ð´Ð°|ÑÑ‚Ð°|Ðµ Ñ‚|Ð¸ Ð°|Ðµ Ð¿|Ð»Ð°Ò“|Ñ€Ð´Ð°|Ð¸Ð½Ð½|Ð¸ Ðº|Ð±ÐµÐ½|ÑˆÑÑ‹|Ð°Ò› |ÐµÐ¼ |Ñ€Ðµ |Ñ€ Ñ‡|Ñ‚Ñ‹Ò“|Ñ‹Ð½Ñ‹|Ð½ Ñ|Ð°Ñ‚Ò›|Ò“ Ð´|Ñ‡Ð¾Ð½|Ñ‹ÑÑ‚| Ð°Ò“|Ò›Ñ‚Ñ‹|Ð½Ð´Ðµ|Ñ‚Ñ‹Ò£|Ò£ Ò›|Ð°Ð½Ð´| Ò›Ñƒ|Ð¸ÐºÑ‚|Ð±Ñ‹Ñ|ÐºÑ‚Ðµ|ÑÐ·Ñ‹|Ñ‡Ð¾Ò›| Ð¿Ó±| Ñ‚Ð¸|Ð» Ð¿|Ñ€ Ðº|ÑÐ´Ð°|Ð½Ð°Ð½|ÑƒÐ½ |Ñ‹Ð½Ð°|Ð±ÐµÐ·|Ñ€Ð¸Ðº|Ð¾Ò› |Ñ‚Ñ‡Ð°|Ò£ Ñƒ|Ð¸Ð½Ð´|Ð´Ð°Ñ€| ÑÑ‚|Ð¾Ð½ |Ð°Ð°Ñ€|Ò›Ò›Ð°",
                        eve: "ÑÐ½ | Ð±Ñ|Ð±ÑÐ¹|Ð½ÑÐ½|Ð°Ð½ |Ð´Ð° |â€Ð´Ð°| Ð±Ð¸|ÑÐ¹ |Ð½ Ð±|Ð½ÑÐ½|ÑÐ½ |Ð½Ð½Ñ| Ð½Ñ|Ð½ Ñ‚|Ð½ Ð½|Ð» Ð±|Ð¼ÑÐ½|Ñ‚ÑÐ»|Ð¸Ð½Ð½|Ñ‡Ð¸Ð½|ÐºÑÐ½|ÑÐ» |Ó©Ð¼Ñ|Ð¼ÑÑ‚| Ð¼Ñ|ÑÑÐ½| Ò¥Ð¸| Ó©Ð¼| ÑÑ| Ñ‚Ð°|Ð½Ð¸ |ÑÑ‚Ñ|Ð¸â€Ð´|Ð° Ð±| Ð½Ð¾|Ð¸Ð½ |Ð½Ð¾Ò¥|ÑÐ»Ñ|ÑÐ½Ð¸|Ð¾Ò¥Ð°|Ð±Ð¸Ð½|ÑÑ‡Ð¸|Ð°Ñ€Ð°|Ð½ Ó©|Ð´ÑŒÐ¸| Ñ‚Ñ|Ð½ Ð´|Ò¥Ð°Ð½|ÑÑ‚Ð²| Ð³Ð¾|Ð½ Ñ|Ð½Ð½Ð°|Ð´ÑƒÐº| Ñ…Ð¾|Ð½ Ð³|Ñ€Ð°Ð²|Ò¥Ð¸â€|Ð½ Ò¥|Ñ€Ð³Ñ|ÑÐ¹Ð¸|Ð¸ÐºÑ|Ñ‚Ð°Ñ€|Ð½ Ñ…|Ð´ÑÐ½|Ñ‚Ñ‚Ð¸|Ð¹Ð¸Ð»|ÑÑƒÐ´| Ð¿Ñ€|Ñ‚Ð²Ð¾|Ð±Ð¸Ð´|Ð½Ð¸Ðº|Ð¸Ð´Ñ|ÑƒÑ€ |Ð¸ Ð½|ÑÑ‚Ñ‚|Ñ‚ÑÐ³|Ð° Ñ|ÑÐ³Ñ|Ð½ Ð¼|ÑŒÐ¸ |Ð´Ð°Ñ€|Ð¸Ð²Ñƒ|Ñ Ð±|Ð±ÑÐ»|Ð½Ð°Ð¹|Ð¸Ñ‡ |Ð°Ð¹ |ÑƒÐ´Ð°|Ð½ Ð°|Ð½Ð°Ð½| Ð´ÑŒ| Ñ…Ñƒ|ÐºÐ¸ |Ð²Ð¾ | Ñ‚Ó©|Ñ‚Ð¸ | ÑÐ½|Ñ‡Ð° |Ð³Ð¾Ñ|Ð°Ð»ÑŒ|ÑÐ¹Ð´|Ð°Ñ€Ñ|Ñ€ÑÑ‚|Ð¾ÑÑƒ|Ð³ÑƒÑ€|Ð¹ Ð½| Ð³Ð°|Ñ‡Ð¸Ð¼|Ð¸ Ñ|Ð¿Ñ€Ð°|Ð³ÑÐ»|ÐºÑÑ‚|Ð¸ Ñ‚|Ñ‹Ð½ |Ð»ÑÑ‡|Ð³ÑÑ‡|Ð½Ñ‚Ñ|ÑƒÑ€Ð³|Ð¹ Ð±| Ð³Ñƒ|Ð½ Ð¿|ÐºÑƒÑ‡| Ð±Ð°|Ð¸Ñ€ |Ð¹Ð´ÑŒ|Ð°Ñ‡ |Ð»Ð¸Ð²|ÑÐ½Ð´|Ð´ÑŒÑ|Ð³ÑÐ½| Ð°Ñ‡| Ð±Ð¾|Ð½Ð°Ñ‚|Ñ‚Ñ‚Ð°|Ñ‚Ð° |Ð»ÑŒÐ½|Ð»Ð° |ÑŒÐ½Ð°|ÑƒÐ½ |Ñ‚Ñ‹Ð½|Ð°Ð»Ð´|Ð¼ÑÑ€|Ðºâ€Ð´|ÐºÐ¾Ð½|Ð½ Ò»|Ñ‚Ñ | Ð°Ð¸|Ð¼Ð½Ñ|ÐºÐ°Ð½|Ð¸ Ð±|Ð¸Ð» |Ð¸Ð¼Ð½|ÑƒÑ‚Ñ‚|Ð½Ð´Ñƒ|ÑÐ½Ð¸|Ð¾Ð½Ñ‚|Ñ…Ð¾Ð½| Ò»Ð¸|ÑƒÐºÑƒ|Ñ€Ð´Ñƒ| ÐºÑƒ|Ð°Ð»Ð°| Ò»Ð°|ÑÑ€Ð³|Ð»ÑÐ½|Ð¸ Ò¥|ÑÐ½Ñ|Ð²Ð°Ð»|Ð¹ Ð¼|Ð°Ð² |ÑÑ‚Ñ‡|Ð»Ñ |Ñ‡ÑƒÑ€|Ð±Ñƒ |Ð¾ÐºÑ|Ð±Ð¾Ðº|Ð° Ð°|Ð»Ð±Ñƒ|Ñ†Ð¸Ñ|Ð½Ð´Ð¸|Ð¸Ð»Ð±|Ð°Ð¸Ñ‡|Ñ€ Ð±|Ð¸ Ñ…| Ò¥Ñ|Ò¥ÑÐ»|Ð°Ñ€Ð¸| Ð¸Ð»|Ð¸Ð´Ñƒ|Ð»Ð³Ñ|Ð´Ñ |Ð¸Ð»Ñ|Ð¸Ò»Ð¸|Ð°ÐºÐ°|ÑÐ¼Ð¸|Ð»Ð´Ð°|Ð±Ð°Ð»|Ð¸Ð´ÑŒ|Ð¸Ð¼Ñ|Ð»Ð½Ð¸|Ð¸Ð½Ñ|ÐºÑƒÐ¹|Ð¼Ð¸ |Ñ‚Ñ‡Ñƒ| ÐºÑ|Ð´ÑÐ»| ÑÐ¼| Ð´Ñ|Ñ‚Ó©Ñ€| Ð´ÑŽ|Ð³ÑÐ²|Ð¿ÐºÑƒ|ÑƒÐ¿Ðº|Ð°Ñ‚Ñ‚|Ð½ Ðº|Ð¼Ð°Ð½|Ð°Ð¼Ð°|Ñ…ÑƒÐ¿|Ð¹Ð¸ |Ñ‡ Ñ‚|Ð¸ Ð°|Ñ€ Ð³|Ò¥Ð¸Ð¸|Ð°Ð¹Ñƒ|Ð° Ð´|Ð°Ð²Ð°| Ð´Ðµ|Ñ‚Ð°Ð»|Ð¼Ð¸â€|Ð´Ð¾Ð»| Ð´Ð¾|Ð°Ð½Ð½| Ð·Ð°|ÑÑÐ½|Ð·Ð°Ðº|Ð°ÐºÐ¾|Ð°Ñ‡Ð°|Ñ€ÑÐº|Ð½â€Ð´|Ñ‡Ñ |Ð¸ Ð¸|Ð³ÑÑ‚|Ð¾Ð½Ð¸|Ð°Ñ†Ð¸|Ð»ÐºÑ| Ñ…Ð¸|Ð¹ Ñ…|Ð´Ð¸ |ÑÐ½Ð½| Ð½Ð°|ÑƒÐ½Ð½| ÑÑƒ|Ð½ Ð¸|ÑŒÑÐ½|Ñ‚Ó©Ð³|Ð½ Ñ|Ó©Ð³Ñ| ÑÑ€|ÑÐºÐ¸|Ð´ÑŒÐ¾|Ð¾Ð½ |ÑƒÐºâ€|Ð±Ð°Ðº|Ò¥Ð¸Ð´|Ð´Ð°Ñ‡|Ñ‡Ñ‡Ð°|Ð¹ÑƒÑ‚|Ð¸Ð°Ð»|Ñ†Ð¸Ð°|Ð¾Ñ†Ð¸|Ò»Ð°Ð¹|ÑÐ¾Ñ†| ÑÐ¾|Ð±Ð¸Ò»|Ð»Ð°Ð½|Ð²ÑƒÑ€|Ð´ÑŽÐ»|Ð¾Ð¼Ðº|Ð»Ð´Ñ|Ñ‚Ð°Ð¼|Ñ‚Ð°Ðº|Ð¸ÐºÐ°|Ð° Ð¾|ÑŒÐ¾Ð¼| Ð¾Ñ€|Ñ€Ð°Ðº|ÑÐ»Ð¸|Ð°Ðº |ÑÑ‡Ñ|Ñ‚ÑÐ½|Ð²ÑƒÐ½|Ñ‡ Ð±|Ð¹ Ð³|Ñ‚ÑƒÑ€| â€ |Ð¸Ñ‚Ðµ|ÑƒÐºÑ| Ð°Ð¹|Ð½ÑŽÐ½",
                        ykg: "ÑƒÐ¾Ð»|Ñ€Ð°w|Ð½ÑŒÑ|Ð´Ñ |Ð¾Ð» |Ð°wÐ½|Ð» Ð¼|ÑÐ¹ | Ð¼Ð¾|Ð¾Ñ€Ð°|Ð¼Ð¾Ñ€|Ð¹ÑƒÐ¾|ÑŒÑÐ¹|Ð°Ò•Ð°| Ñ‚Ð°|ÑÐ» |Ò•Ð° | ÑÐ»| ÐºÓ©|ÐºÓ©Ð´|ÑŒÑ |Ñ‚Ñ |wÐ½ÑŒ| Ð¿Ð°|Ð´ÑŒÑ|Ó©Ð´Ñ|ÑÒ¥ |Ð»ÑŒÑ|Ð°Ð½Ñ|Ò•Ð°Ð½|Ñ Ðº|Ð´Ð°Ò•|Ð°Ð°Ñ‚|Ð´Ð°Ð°|Ð¿Ð°Ñ€|Ð°Ñ‚Ñ|Ñ‚Ð°Ð´|Ð°Ð´Ð°|Ð½Ñ | Ñ‚Ñƒ|Ð¹Ð°w|ÑÒ•Ð°| Ð¹Ð°|Ð°Ñ€Ð°|wÐ½Ð°|Ñ‚ÑƒÐ´|ÑƒÐ´Ñ|Ñ Ñ‚|ÑÐ¹Ñƒ|Ð½Ð°Ñ€|wÐ°Ð°|Ð°wÐ°|ÑÐ»Ñ|Ñ Ð¹| Ð¼Ñ|Ð°Ñ€ |Ñ Ð¿| Ñ‡Ð°|ÑŒÑÐ»|Ñ w|Ð½ÑŒÐ¸| Ð½ÑŒ|wÐ¸Ñ|Ð°Ð°Ð½|Ð³Ð¸ |ÑÐº |Ð´ÑŒÐ¸|Ð°w |Ð»Ò•Ð°|ÑƒÑ€Ñ|Ð½Ð´ÑŒ|ÑÐ´Ñ|Ð»Ñ |Ð¹ Ñ‚| ÐºÐ¸|ÑŒÐ¸Ð»|Ð»ÑÐº| wÐ¸|Ð°Ð½ÑŒ|Ð»Ð»ÑŒ|ÑÐ´Ð°|ÑƒÐ¹Ñƒ|Ð¹ Ðº|w Ð¿|ÑƒÑ€Ð¸| ÑÑƒ|Ò•Ð°Ñ‚|ÐºÐ¸Ð½|ÑƒÑƒÑ€|Ñ Ñ‡|ÑÐ½ÑŒ|Ñ Ð¼| Ò¥Ð¾|Ð½ÑÐ¹| ÑƒÑƒ| Ñ‚Ñ|Ð¼Ñ |ÑƒÐ¾Ð½| ÐºÑ|Ñ Ñ|Ð½ÑƒÐ»|ÑÐ»Ðº|Ñ‚ÑÑ‚| ÑÐ½|Ñ€Ð¸ |ÑŒÐ¸Ð¸|Ð¸Ð½Ñƒ|ÑÐ½ |Ò•Ð°Ð´|Ð°Ð´ÑŒ|Ð½Ð½Ñƒ|Ð½ÑŒ |Ð¸Ð½ÑŒ|ÑÐ´ÑŒ|Ð±Ð°Ð½|Ð°Ñ‚ |Ð»Ðº |Ð¸ÑÐ¹|Ñ‚Ð°Ò¥|Ð½ÑƒÐ½|ÑÐ½Ð½|Ð¸Ñ‚Ñ|Ð°Ð»ÑŒ| ÑÐ¾|Ñ€ÑÒ¥|Ð´ÑÐ»|Ð¸ÑÐ½| wÐ°|Ð¾Ð´Ñ|Ð» Ñ‚|Ð»Ð³Ð¸|Ð½ÑŒÐ°|Ò¥ Ñ|ÑÑ€Ñ|Ð½ÑƒÐ¹|Ñ Ð½|Ðº Ñ| Ñ…Ð°|Ð½ÑƒÐ¾|ÑƒÐ» |Ñ‡Ð°Ò•| Ñw|Ð° Ñ|Ð¿ÑÐ´|Ð¼ÑÐ½| Ñ‡Ð¸|Ñ‡Ð¸Ð¸|ÑƒÐºÑƒ| Ð»ÑŒ|Ð´ÑÒ¥|Ð¸Ð¹Ñƒ| Ñ‡Ñƒ|Ð»ÑŒÐ¸|Ð°Ð½Ð´|Ñ Ð»|Ð¸ Ñ‚|Ð´Ð¸Ñ‚|Ð¸Ð¼Ñ|Ò¥Ð¾Ð»|Ð½ÑÒ¥|Ñ Ñƒ|Ñ Ñ…|Ò¥Ð´Ñ|ÑŒÑƒÐ¾|ÑwÑ|Ð¿ÑÒ•|wÑÐ¹|ÑÑ‚ |Ñ‡ÑƒÒ¥|Ð°Ñ€Ñƒ|Ð¾Ð»Ð»|Ð° Ðº|Ñ€ Ñ‚|ÐºÑƒÐ¾|Ð½Ò•Ð°|ÑƒÒ¥Ð´|Ð¼Ð°Ð°|ÑŒÑÑ€|Ð»ÑƒÐ¾|Ð°Ð°Ð»| Ð»Ñ| Ð¼Ð°|Ð»ÑŒÐ½|Ð»Ð´Ð°|Ò¥ Ñ‚|ÐºÑÐ´|ÑÐ³Ð¸|Ð¾Ð½ |ÑÐ¹Ð½|Ð´ÑÒ•|ÑƒÐ½Ò¥|ÑÑ€Ñƒ|ÐºÑƒÐ½|Ð» Ð»|ÑwÑ€|Ð¼ÑÐ´|Ð½ Ð½|Ð°Ð´Ð¸|ÑÐ¼Ñ|ÑƒÑ€Ð°|Ð»Ñw|Ð¹Ð½Ð±| ÑƒÑ€|Ð½Ð±Ñƒ|Ð±ÑƒÑ€|Ñ€ÑÐ±|Ò¥Ð¸ |Ð¾Ð»Ñƒ| Ð´Ð¸|Ð½ÑÐ¼|Ð°Ð¼Ñƒ|Ñ€ÑƒÐº|Ð°Ò¥Ñƒ|Ð¹ Ñ|Ñ‡Ð°Ð¼|ÑÐ»ÑŒ|ÑŒÑÒ¥|Ð´ÑŒÑƒ|Ñ€ Ñ| Ð¿Ñ€|Ð¸ Ñ|ÑÐ±Ñ|Ñ‡ÑƒÐ¾|Ð¾Ð»Ð°|Ð» Ñ‡|Ð¸ Ðº|ÑŒÐ½Ñ|Ð¸Ð» | Ð±Ð°|Ð¿Ñ |Ð°Ð¿Ñ|Ñ…Ð°Ð´|Ñ€Ð°Ð°|ÑÐ½Ð´|ÑÑ‚Ð²|Ð¸Ñ |Ð½ÑƒÑ€| Ð½Ñ|Ñ†Ð¸Ñ|Ð¹ Ñ‡|Ð°Ð»Ð»|ÑŒÐ°Ð»|Ð°Ð¹ |Ð½Ð°Ð¹|Ð»Ð´ÑŒ|Ð° Ñ‡|Ò¥Ð½Ñƒ|Ð»Ð¿Ñ|wÑ€Ñ|Ð¾Ð´ÑŒ|Ð¿ÑÐ»|Ò¥Ð¸Ð½| ÑÐ´| ÑƒÐ¾|Ð¸Ð½Ò•|Ð¾Ò¥Ð½|Ñ€ÑÐ»|Ð¹Ñ |Ð½ Ñ‡|Ð¾Ð»Ò•|Ð°Ð°Ð¿|Ð°Ð½ |Ð¸Ð¸Ð¹|ÑŒÐ¸Ð´|Ñ Ð±|Ñ Ñ|ÑƒÐ»Ò•| Ð½Ð¸|Ð½Ð¸Ð¼| Ñ‡Ð¾|Ñ‡Ð¾Ò¥|Ð°Ð°Ð¹|Ñ‚ÑÐ¹|ÐºÑÐ¹|Ð°Ð½Ñƒ|Ð¾Ò•Ð¾|Ð°Ð¼Ð±|Ñ‚ Ñ|Ð¼ÑÐ»|Ð¸Ð°Ð»|Ñ Ò¥| ÐºÐ¾|ÑƒÑƒÐ»|ÑÑƒÑƒ|Ð¾Ð»Ð½|ÑƒÑ‚ |Ð» Ñ| Ð¿Ð¾|Ð¸Ð¸Ð»|ÑƒÑƒÐ¹| Ñ‚Ð¸|Ð»Ð½ÑŒ|Ð¼Ó©Ñ€|Ð¾ÐºÑƒ|Ð¸Ð¸Ð³|Ð°Ð°Ñ€|Ð° Ð¼|Ð¸Ð³Ð¸|Ò¥ Ð¼|Ð°Ñ†Ð¸",
                        nio: "Ð½Ó™ | ÐºÑƒ| ÓˆÐ°|Ó™â€ |ÓˆÐ°Ð½|Ð¼Ó™Ð½| ÓˆÐ¸|Ð°ÑÐ°|Ð½Ñ‹ |Ð°Ð½Ð°|Ð¾Ð½Ó™|Ð½Ð°Ñ| ÓˆÐ¾| Ð¼Ó™|ÓˆÐ¾Ð½|Ó™Ð´Ð¸|Ó™Ð½Ñ‹|ÑÐ° |ÓˆÐ¸Ð»|Ð¸Ð»Ðµ|Ð»Ðµ |Ñ€Ó™Ð´|ÑƒÑ€Ó™|ÐºÑƒÑ€| Ð¿Ñ€|Ñ‚Ñ‹ |Ñ‚Ð¸ |â€ Óˆ|Ð¿Ñ€Ð°|Ñ€Ð°Ð²| Ð½Ð¸|Ñ‚Ñƒ |Ñ‚Ó™Ð½| ÐºÓ™|Ð¸Ñ‚Ðµ|Ðµ Ð¼|Ð½Ñ‚Ñƒ|Ó™Ð½Ó™|Ñ‚Ðµ | Ñ…Ð¾|Ð´Ð¸Ñ‚|Ð´Ñ | Ñ‚Ó™|Ñ…Ð¾Ð½|Ñ‚Ò¯ |Ðµ Óˆ|ÑÐ°Ð½|Ñ‹Ð½Ñ‚|Ñ‹ Óˆ|Ó™Ð½Ð´|Ð¸Ñ‚Ð¸|Ð°Ð½Ó™|Ð¼Ñ‹Ð½|Ò¯Ñ‚Ò¯| Ð¼Ñ‹|Ð½Ð´Ðµ| Ð½Ñ|Ð²Ð¾ |â€ Ðº| ÓˆÓ™|Ð±ÑÐ°|Ð½Ó™â€|Ð¸â€ |Ð½Ñ‚Ñ‹|Ñƒâ€ |Ð±ÑÑ|Ó™ Óˆ|Ð°Ð²Ð¾| Ñ‚Ð°|ÑÑ |Ó™ Ðº|ÐºÓ™Ñ€|Ó™ Ñ‚|Ó™ Ð¿|â€ Ñ…|Ñ‚Ñ‚Ð¸|Ð±Ð¸Ñ‚|â€ Ñ‚|Ñ‚Ð°Ð½|Ó™Ñ‚Ñ‚|Ð¾Ð½Ñ‚|Ð´Ðµâ€| Ð±Ó™|ÑƒÐ½Ð¸|Ðµâ€ |ÑƒÐ¾ | Ñ…Ðµ|Ó™Ð¹ |Ó™ Ð½|Ð¸ Óˆ| Ñ‚Ðµ|Ñ‹ Ðº|Ð¼Ó™Ó™|Ñ‚ÑƒÐ¾|Ð½ÑÐ³|Ð¸ Ð¼| Ñ…Ñƒ|ÐºÑƒÐ½|Ð° Ñ…|ÑÐ³Ó™|Ð½Ñ‹Ð¹|Ð³Ó™Ñ‚|Ñ…Ò¯Ñ‚|Ð¸Ð±Ð¸|Ð½Ð´Ñ|Ñ‚Ó™ | Ð¼Ðµ|Ð±Ó™Ð½| Ð´Ðµ|Ð°Ð½Ð´|Ñ‹Ð¹ |Ð¾â€ |Ð¸Ð·Ð¸|Ñ€Ò«Ñƒ|Ð¸Ñ‚Ñ‚|ÐµÐ»Ñ‹| ÑÑ‹|Ó™Ñ€Ò«|Ó™ Ð¼|Ñ‹Ñ‚Ñ‹|Ó™Ó™ |Ð½Ð´Ó™| Ð¸Ñ‚| ÓˆÑƒ|ÐºÓ™Ñ‚|Ñ‚Ò¯Ð¾|â€ Ð½|â€ Ñ|â€Ñ‚Ó™|ÑÑ‚Ð²|Ñ Óˆ|Ó™Ñ‚Ó™|Ó™Ñ‚Ñƒ|Ð½Ð¸Ð½| ÑÐ¸|Ð°Ð²Ð°|ÐµÐ½Ñ‹|Ñ Ðº|Ð½ÑÓ™|Ñ‚ÐµÐ½|Ñ‚Ñ‚Ò¯|Ð°Ñ†Ð¸|Ñ…ÐµÐ»|Ñƒ Ðº|Ó™Ð¼Ó™|Ñ‹ Ð½|Ð°Ð½Ñƒ|Ð°Ð»Ð¸|Ó™Ñ‚Ñ‹|Ð´Ð¸ |Ð½Ð¸Ð»|Ñ‹Óˆ |Ð° Óˆ|Ñ…ÑƒÐ½|Ñ‹â€ |Ñƒ Óˆ|ÓˆÓ™Ð·|Ó™ Ñ…|Ñ‚Ó™Ñ‚|Ó™Ó™Ð½|Ó™Ó™â€|Ð¼Ñ‚Ñ‹|Ð³ÑƒÐ¹|Ñ‚Ñ‹Óˆ|Ð»Ð¸Ñ‚|Ð½ÑÐ½|Ð·Ó™ |Ñ‚Ó™Ð±|Ð½Ð¸Ð±|Ñ‚Ó™Ñ€|Ð·Ð¸â€|Ð¸Ð½Ð¸|â€ Ð¼|Ð±Ó™Ñƒ|ÑÐ½Ð´|Ð½Ó™Ð¹| ÑÓ™|Ó™Ð±Ñ|ÓˆÑƒÐ¾|ÑƒÐ¾Ð¼|Ñ‹ Ñ|Ð½Ð¸ |Ð³Ð°Ð»|Ð³Ó™Ó™|ÐµÑ€Ó™| Ð½Ðµ|Ð¹ Óˆ|Ó™Ð¹Ð±|Ð¼ÐµÐ»|â€Ð´Ñ|Ñ‹Ð±Ð¸|ÐµÑ‚Ó™|Ñ‹ Ð¼|Ò¯ Ð¼|Ð¹Ð±Ó™| ÑÑƒ|Ð°â€ |ÓˆÓ™Ð¹| ÐºÐ°| Ð¾Ð±|Ðµ Ð½|ÓˆÐ¸Ð·|Ð¸Ð´Ðµ| Ð½Ð°|ÑÑ‹Ñ‚|Ñ‚ÑƒÐ¼|ÑƒÐ¾â€|Ñ‚Ñ‹Ó™| Ð¸Ñ…|Ð°Ð³Ó™| Ñ…Ò¯|Ð¾ Ñ‚|Ñ€Ó™â€|Ñ‹Ð±Ñ|Ñ Ð¸|ÑƒÐ½Ñ|Ñ‹Ñ€Ñ‹|Ð°Ñ‚Ó™|ÑÐ¸Ó™|Ð¹ Ð½|Ð¸Ð»Ñ‹|Óˆ Óˆ|ÑÑ‹ |Ó™Ð·Ñ‹|Ð¸ Ð½| Ð¼Ð¾|Ñ‹Ð·Ó™|ÑƒÐ¹Ñ|Ð½ÐµÐ½|â€ Ð´|ÑƒÐ¾Ð´|Ñ‹ Ð¸|Ð²Ð°Ð¹|Ð½Ð°Ð³|ÑÑƒÐ´|Ð° Ðº|Ð¼Ð¾Ñƒ|â€ Ð¿|Ð»Ñ‹â€|Ñ‹ Ñ…|Ó™ÑƒÐ·|ÑƒÐ·Ð°|ÐºÐ¾Ð½|Ñƒ Ð½|Ó™ Ñ|Ð¸Ð½Ñ‚|Ð¼Ñ‚Ñƒ|Ñ‚Ñ‹Ð³|Ñ‹Ð³Ñƒ|Ñ‹ Ñ‚|Ð¾ Óˆ|ÐµÐ»Ð¸|Ð¾ Ð½|Ð½Ñ‚Ó™|Ñ‹Ð¼Ñ‚| Ð´Ñ|Ñ†Ð¸Ñ|Ð°Ð¹Ñ‚|ÑƒÐ½Ñ‚|ÑÑ‹Ð»|Ð½Ð¸Ð¸| Ð³Ð¾|Ð´ÐµÐ¹| ÐºÐ¾|Ð¸Ó™Ñ€|Ð±Ð¸â€|Ò¯Ð¾â€|Ð¾Ð¼Ñ‚|Ð¹ Ñ|Ð»Ð¸Ð´|Ð¸Ð±Ñ|Ó™Ñ€Ó™|ÑƒÐ½Ó™|Ð¸ Ðº|ÑÑƒÐ½|Ò¯â€ |Ñ‹â€Ñ|Ð¹ÑÑ|â€ÑÑ‹|Ò¯Ð¾ |Ð¸Ñ…Ò¯|ÑÐ¸Ð±|Ò«Ñƒ |Ñ‚Ò¯Óˆ|ÑÐ±Ñ|Ð½Ð¸Ñ|Ð»Ñ‹Ð³|Ð´Ó™ |Ð³Ó™Ð¹|Ð¾ Ð´|Ñƒ Ñ‚| Ñ‚Ñ| Ð´Ò¯|ÓˆÓ™Ñ‚|Ò¯â€Ñ‚|ÑƒÐ´Ð°|Ð½Ð¸Ð°|Ó™Ð½Ò¯| Ð¼Ð°|Ð½ÐµÑ€"
                    },
                    Arabic: {
                        arb: " Ø§Ù„|ÙŠØ© | ÙÙŠ|Ø§Ù„Ø­|ÙÙŠ | ÙˆØ§|ÙˆØ§Ù„| Ø£Ùˆ|Ø© Ø§|Ø£Ùˆ |Ø§Ù„Ù…|Ø§Ù„Øª|Ù„Ø­Ù‚|Ø­Ù‚ |Ù„Ù‰ |ÙƒÙ„ |Ø§Ù† |Ø© Ùˆ|Ø§Ù„Ø£| Ù„Ùƒ|Ù„ÙƒÙ„|Ù† Ø§|Ù‡Ø§ |Ù‚ Ù|Ø§Øª |Ù…Ø© |ÙˆÙ† |Ø£Ù† |Ù…Ø§ |Ø§Ø¡ |ØªÙ‡ |Ùˆ Ø§|Ø§Ù„Ø¹|ÙŠ Ø§|Ø´Ø®Øµ|ÙŠ Ø£| Ø£Ù†|Ø§Ù„Ø¥|Ù… Ø§|Ø­Ø±ÙŠ| Ø¹Ù„|Ø© Ù„|Ù…Ù† |Ø§Ù„Ø§|Ø­Ù‚Ùˆ|Ø¹Ù„Ù‰|Ù‚ÙˆÙ‚|Øª Ø§|Ø£ÙŠ |Ø±Ø¯ | Ø´Ø®| Ù„Ù„| Ø£ÙŠ|Ù‚ Ø§|Ù„Ø§ |ÙØ±Ø¯|Ø±ÙŠØ©| ÙˆÙ„| Ù…Ù†|Ø¯ Ø§| ÙƒØ§| Ø¥Ù„|Ø®Øµ |ÙˆÙ‚ |Ø§ Ø§|Ø© Ø£|Ø§ ÙŠ|Ù„ Ù|Ù‡ Ø§|Ù†Ø³Ø§|Ø¬ØªÙ…|Ù† ÙŠ|Ø§Ù…Ø©|ÙƒØ§Ù†|Ø¯Ø© | Ø­Ù‚|Ø§Ù… |Ø§Ù„Ù‚|Ø© Ù…| ÙØ±|Ø§ÙŠØ©|Ø³Ø§Ù†|Ù„ Ø´|ÙŠÙ† |Ù† Øª|Ø¥Ù†Ø³|Ø§ Ù„| Ù„Ø§|Ø°Ø§ |Ù‡Ø°Ø§|Ù† Ø£|Ù„Ø© |ÙŠ Ø­| Ø¯Ùˆ|Ù‡ Ù„|Ù„Ùƒ |ØªØ±Ø§|Ù„ØªØ¹|Ø§Ù‹ |Ù„Ù‡ |Ø¥Ù„Ù‰| Ø¹Ù†|Ù‰ Ø§|Ù‡ Ùˆ|Ø¹ Ø§|Ù…Ø§Ø¹|Ø¯ Ø£|Ø§Ø³ÙŠ| Ø­Ø±|Ø© Ø¹|Ù…Ø¹ |Ø§Ù„Ø¯|Ù†ÙˆÙ†| Ø¨Ø§|Ù„Ø­Ø±|Ù„Ø¹Ø§|Ù† Ùˆ|ØŒ Ùˆ|ÙŠØ§Øª|ÙŠ Øª|Ø§Ù„Ø¬| Ù‡Ø°|ÙŠØ± |Ø¨Ø§Ù„|Ø¯ÙˆÙ„|Ù„Ø¥Ù†|Ø¹ÙŠØ©|Ø§Ù„Ù|Øµ Ø§| ÙˆÙŠ|Ø§Ù„Ùˆ|Ù„Ø£Ø³| Ø¥Ù†|Ø£Ø³Ø§|Ø³Ø§Ø³|Ù…Ø§ÙŠ|Ø­Ù…Ø§|Ø±Ø§Ù…|Ø³ÙŠØ©|Ø§Ù†Ùˆ|Ù…Ù„ |ÙŠ Ùˆ|Ø¹Ø§Ù…|Ø§ Ùˆ|ØªÙ…Ø§| Ù…Øª|Ø© Øª|Ø¹Ù„ÙŠ|Ø¹ Ø¨|Ùƒ Ø§| Ù„Ù‡|Ø© Ù|Ù‚Ø§Ù†|Ù‰ Ø£|ÙˆÙ„ |Ù‡Ù… |Ø§Ù„Ø¨|Ø© Ø¨|Ø³Ø§Ùˆ|Ù„Ù‚Ø§|Ø§Ù„Ø±|Ù„Ø¬Ù…|Ø§ Ùƒ|ØªÙ…Øª|Ù„ÙŠÙ‡|Ù„ØªÙ…|Ù„Ù…Øª|Ø§Ù†Øª| Ù‚Ø¯|Ø§Ø¯ |Ù‡ Ø£| ÙŠØ¬|Ø±ÙŠØ§|Ù‚ Ùˆ|Ù„ Ø§|Ø§ Ø¨|Ø§Ù„ |ÙŠÙ‡ |Ø§Ø¹ÙŠ|Ù„Ø¯Ùˆ|Ù„ Ùˆ|Ù„Ø¥Ø¹|Ù„Ù…ÙŠ|Ù„Ù…Ø¬|Ù„Ø£Ù…|ØªØ¹ |Ø¯Ù… |ØªØ³Ø§|Ø¹Ù…Ù„|Ø§ØªÙ‡|Ù„Ø§Ø¯|Ø±Ø© |Ø§Ø© |ØºÙŠØ±|Ù‚Ø¯Ù…|ÙˆØ² |Ø¬ÙˆØ²|ÙŠØ¬Ùˆ|Ø¹Ø§Ù„|Ù„Ø§Ù†|Ù…ØªØ¹|Ù…Ø§Ù†|ÙÙŠÙ‡|Ø§Ø¬Øª|Ù… Ùˆ|ÙŠØ¯ |ØªØ¹Ù„|Ù† Ù„|Ø± Ø§| ÙŠØ¹| ÙƒÙ„|Ù…Ù… |Ù…Ø¬Øª|ØªÙ…Ø¹|Ø¯ÙˆÙ†| Ù…Ø¹|ØªÙ…ÙŠ|Ø°Ù„Ùƒ|ÙƒØ±Ø§|ÙŠÙ‡Ø§| Ù…Ø³|Ù…ÙŠØ¹|Ø¥Ø¹Ù„|Ø¹Ù„Ø§| ØªÙ…| Ø¹Ø§|Ù…Ù„Ø§|Ø§Ø¹Ø§|Ù„Ø§Ø¬|Ù†ÙŠ |Ù„ÙŠÙ…|Ù…ØªØ³|ÙŠÙŠØ²|ÙŠÙ… |Ø§Ø¹Øª|Ø§Ù„Ø´| ØªØ¹|Ù…ÙŠÙŠ|Ø¹Ù† |ØªÙ†Ø§| Ø¨Ø­|Ù„Ù…Ø§|ÙŠ ÙŠ|ÙŠØ² |ÙˆØ¯ |Ø£Ù…Ù…|Ù„Ø§Øª|Ø£Ø³Ø±|Ø´ØªØ±|ØªÙŠ | Ø¬Ù…|Ù‡ Ø¹|Ø± Ùˆ|ÙŠ Ø¥|ØªØ­Ø¯|Ø­Ø¯Ø©| Ø£Ø³|Ø¹Ø© |ÙŠ Ù…|Ø©ØŒ |Ù…Ø¹ÙŠ|Ù† Ù…|Ù„Ù…Ø³|Ù… Ø¨|Ø§Ù‚ |Ø¬Ù…ÙŠ|Ù„ÙŠ |Ù…ÙŠØ©|Ø§Ù„Ø¶|Ø§Ù„Ø³|Ù„Ø¶Ù…|Ø¶Ù…Ø§|Ù„ÙØ±| ÙˆØ³|Ù„Ø­Ù…|Ø§Ù…Ù„|Ù‚ Ù…|Ø±Ø§ |Ø§ Ø­|Ù†Øª | ØªÙ†|ÙŠØªÙ‡| Ø£Ù…|Ø¥Ù„ÙŠ|ÙˆØ§Ø¬|Ø¯ Ùˆ|Ù„ØªÙŠ| Ù…Ø±|Ù…Ø±Ø§|Ù…ØªØ­| Ø°Ù„| ÙˆØ£| ØªØ­|Ø§ Ù| Ø¨Ù‡| ÙˆÙ…| Ø¨Ù…|ÙˆÙŠØ©|ÙˆÙ„ÙŠ|Ù„Ø²Ùˆ",
                        urd: "ÙˆØ± | Ø§Ùˆ|Ø§ÙˆØ±|Ú©Û’ | Ú©Û’| Ú©ÛŒ|ÛŒÚº | Ú©Ø§|Ú©ÛŒ | Ø­Ù‚|Û’ Ú©|Ú©Ø§ | Ú©Ùˆ|ÛŒØ§ |Ù†Û’ |Ø³Û’ | Ø§Ø³|Ø¦Û’ |Ú©Ùˆ |Ù…ÛŒÚº| ÛÛ’| Ù…ÛŒ|Û’ Ø§| Ú©Ø±| Ø§Ù†|ÙˆÚº | ÛÙˆ|Ø§Ø³ |Ø± Ø§|Ø´Ø®Øµ|ÛŒ Ø§| Ø´Ø®| Ø³Û’| Ø¬Ø§|Ø­Ù‚ |Ø®Øµ |ÛØ± |Ø§Ù… |Û’ Ù…|Úº Ú©|ÛÛŒÚº| ÛŒØ§|Ø³ÛŒ | Ø¢Ø²|Ø¢Ø²Ø§|Ø²Ø§Ø¯|Ø§Ø¯ÛŒ|Ø§Ø¦Û’|Ø§ Ø­|Øµ Ú©|Û Ø§|ÛÛ’ |Ø¬Ø§Ø¦|Øª Ú©|Ø± Ø´|Ú©Û |Ù… Ú©| Ù¾Ø±|ÛŒ Ú©|Ù¾Ø± |Ø§Ù† |Ø§ Ø¬|Û”ÛØ±|Ø³ Ú©|Ø¯ÛŒ |ÛÛ’Û”|Ù‚ Û|ÛŒ Ø­|Úº Ø§|Ùˆ Ø§|Ø± Ù…|Ø§Ø± |Ø­Ù‚Ùˆ|Ù‚ÙˆÙ‚|Ù† Ú©|Ø±ÛŒ |Ú©Ø³ÛŒ|Û’ Ú¯|ÛŒ Ø¬| Ù…Ø¹| ÛÛŒ|ÙˆÙ‚ |Ø³Ø§Ù†|Ù†ÛŒ |Ø± Ú©|Ú©Ø±Ù†|ÛŒ Øª| Ø­Ø§| Ø¬Ùˆ|ØªÛŒ |Ø¦ÛŒ | Ù†Û| Ú©Û|Ù„ Ú©|Ø§Ù¾Ù†|Ø¬Ùˆ |Ù†Ø³Ø§|Ø§Ù†Ø³|Û Ú©|Û’ Ø¨|Ù†Û |ÛÙˆ | Ù…Ù„| Ø§Ù¾|ÛŒØª |Ù…ÛŒ |Û’ Û|Ø±Ù†Û’|Û’ Ù„|Ù„ Û|Ø§ Ø§| Ú©Ø³|Ø±Û’ |ÛŒ Ø´| Ø§ÛŒ|ÙˆÛ |Û” Ø§|Ø§ØµÙ„|Ù†ÛÛŒ|ØµÙ„ |ÛŒ Ù…|ÛŒÚºÛ”|Ø­Ø§Øµ|Ù…Ø¹Ø§|Ø¯ Ú©|Ø§Ù†Û|Ø§ÛŒØ³|ÛŒ Ø¨|ÛŒ Û|Ù…Ù„Ú©|Ù‚ Ú©|Ø§Øª | ØªØ¹|Ø¯Û |Ù‚ÙˆÙ…| Ù‚Ùˆ|Û’ØŒ |Ø± Û|Ø§ Ù…|ÛŒÛ | Ø¯Ùˆ| Ù…Ù†| Ø¨Ù†| Ú¯Ø§|Ø§Ø´Ø±|Ú©ÛŒØ§|Úº Ù…|Ø¹Ø§Ø´|ÙˆØ§Ù…| Ø¹Ø§|Ø§Ø¯ |Ù‚ÙˆØ§|ÛŒ Ø³|Ø¨Ø± |Ø§Ù‚Ùˆ|Ø§Ù†ÛŒ| Ø¬Ø³| Ù„Ø¦|Ù„Ø¦Û’|Ø¯Ø§Ø±|Ø± Ø¨|Ø§Ø¦ÛŒ| ÙˆÛ|Û’Û”Û|Ù…Ù„ |Û’ Ø¬|Ø¹Ù„Ø§|ÛŒÙˆÚº| ÛŒÛ|Û’ Ø­|Û Ù…|Ùˆ Øª|Ø¬Ø³ |Ø§ Û|Ú©Ø± |Ø± Ù†|Ù„ÛŒÙ…|Ø§Ù†Ùˆ| Ù‚Ø§| Ùˆ |Û’Û” | Ø§Ù‚|ÛŒÙ… |Ø±ÛŒÙ‚|Ù„Ú© |Ú¯ÛŒ |ÛŒ Ø¢|Ø¯ÙˆØ³| Ú¯ÛŒ|ÙˆØ¦ÛŒ|Ø± Ù¾|ØŒ Ø§|Ù†ÛŒØ§|ØªØ¹Ù„| Ù…Ø³|Ø± Ø¹|ÛŒØŒ |ÛŒØ± |Ù„Ø§Ù‚|Ø®Ù„Ø§| Ø±Ú©|ÛŒÙ† | Ø¨Ø§|Ù† Ø§|ÛŒ Ù†|Û’ Ù¾|Ù¾Ù†Û’|ÙˆØ±ÛŒ|Ø§ Ø³| Ø³Ú©| Ø¯ÛŒ|ÙˆÙ† |Ú¯Ø§Û”|Ù… Ø§|Ø§Ù†Û’|Ø¹Ù„ÛŒ|ÛŒØ§Ø¯|Ù‚Ø§Ù†|Ù†ÙˆÙ†|Ø³ Ù…|Ø§Ù |Ø±Ú©Ú¾| Ø§Ø¹| Ù¾Ùˆ| Ø´Ø§|ÙˆØ³Ø±|Ù‚ Ø­|Ø³Ø¨ | Ø¨Ø±|Ø±ØªÛŒ| Ø¨ÛŒ|Ø§Ø±ÛŒ| Ø¨Ú¾|Ø±Ø§Ø¦| Ù…Ù…|Ø± Ø³|ÛŒØ³Û’|ÙˆÙ…ÛŒ|Ø¯Ú¯ÛŒ|Ù†Ø¯Ú¯| Ù…Ø±| Ù¾ÛŒ| Ú†Ø§|Ùˆ Ú¯|Ù†Ø§ |Û’ Ø®|Û Ùˆ|Ø§Ø¯Ø§| ÛØ±|Ø§ Ù¾|ØªÙ…Ø§|Ù¾ÙˆØ±|Ù…Ø§Ù…|Û’ Ø¹|Ø§Ø¦Ø¯| Ø¹Ù„|Ø¨Ú¾ÛŒ|Ú¾ÛŒ |Ø¹Ø§Ù…| Ù…Øª| Ù…Ù‚|Ù…Ù† |Ø¯ Ø§| Ø§Ù…|ÙˆÙ†Ú©| Ø®Ù„|Ù†Ú©Û|Ù„Ø§Ù|Ø§Ø¹Ù„|Ú©ÙˆØ¦|Ø§Úº |Ø±ÛŒØ¹|Ø°Ø±ÛŒ| Ø°Ø±|Ø¨Ù†ÛŒ| Ù„ÛŒ|Ùˆ Ú©|Ø¯Ø§Ù†|ÚºØŒ |Û’ ÛŒ|Ø§ Ú©| Ù…Ø­|ØŒ Ù…|Øª Ø§|Ø§Ù„ |Ù¾Ù†ÛŒ|Û’ Ø³|Ø± Ø¢|Ø± Ø­|Ø¯ÛŒÙˆ|ØºÛŒØ±| Ø·Ø±|ÛÙˆÚº|ÛŒ Ù¾|Ù Ù…|Ú©Ø±Û’| Ø³Ø§|Ø§Ø³Û’|Ø±Û |Ø¨Ø±Ø§",
                        fas: " Ùˆ | Ø­Ù‚| Ø¨Ø§|Ú©Ù‡ |Ù†Ø¯ | Ú©Ù‡| Ø¯Ø±|Ø¯Ø± |Ø±Ø¯ | Ø¯Ø§|Ø¯Ø§Ø±|Ø§Ø² | Ø§Ø²|Ù‡Ø± | Ù‡Ø±|ÛŒØª |Ø± Ú©|Ø­Ù‚ |Ø¯ Ù‡|Ø§ÛŒ |Ø¯ Ùˆ|Ø§Ù† | Ø±Ø§|ÛŒÙ† |ÙˆØ¯ |ÛŒØ§ | ÛŒØ§|Ø±Ø§ |Ø§Ø±Ø¯|ÛŒ Ùˆ|Ú©Ø³ | Ú©Ø³| Ø¨Ø±| Ø¢Ø²|Ø¨Ø§Ø´|Ù‡ Ø¨|Ø¢Ø²Ø§|Ø¯ Ú©| Ø®Ùˆ|Ù‡ Ø§|Ø¯ Ø¨|Ø²Ø§Ø¯| Ø§Ø³|Ø§Ø± | Ø¢Ù†|Ù‚ Ø¯|Ø´Ø¯ |Ø­Ù‚Ùˆ|Ù‚ÙˆÙ‚|ÛŒ Ø¨|ÙˆÙ‚ |Ø¯Ù‡ |Ù‡ Ø¯|ÛŒØ¯ |ÛŒ Ú©|Ùˆ Ø§|ÙˆØ± |Ø± Ù…|Ø±Ø§ÛŒ|Ø§Ø´Ø¯|Ø®ÙˆØ¯|Ø§Ø¯ÛŒ|ØªÙ…Ø§|Ø±ÛŒ | Ø§Ø¬|Ø§Ù… |Ø¯ÛŒ |Ø§ÛŒØ¯|Ø³ Ø­|Ø§Ø³Øª|Ø± Ø§|Ùˆ Ù…| Ø§Ù†|Ø¯ Ø§|Ù†Ù‡ | Ø¨ÛŒ|Ø¨Ø§ | Ù‡Ù…| Ù†Ù…|Ù…Ø§ÛŒ| ØªØ§|Ø¯ØŒ |ÛŒ Ø§|Ø§Ù†Ù‡|Ø§Øª |ÙˆÙ† |Ø§ÛŒØª|Ø§ Ø¨|Ø³Øª | Ú©Ù†|Ø¨Ø±Ø§|Ø§Ù†Ùˆ| Ø¨Ø´| Ù…Ùˆ|Ø§ÛŒÙ†| Ù…Ø±|Ø§Ø³Ø§| Ù…Ù„|ÙˆØ§Ù†|Ø± Ø¨|Ø¬ØªÙ…| Ø´Ùˆ| Ø§Ø¹|Ù† Ø§|ÙˆØ±Ø¯| Ù…ÛŒ| Ø§ÛŒ|Ø¢Ù† | Ø¨Ù‡|Ùˆ Ø¢|Ù…Ù„Ù„|Ø§ Ù…|Ù…Ø§Ø¹|Ù†ÛŒ |Øª Ø§|ØŒ Ø§|Øª Ùˆ|Ø¦ÛŒ |Ø¹ÛŒ |Ø§Ø¦ÛŒ|Ø§Ø¬Øª|Ùˆ Ø¨|Ù‡Ø§ÛŒ|Ù† Ù…|ÛŒ ÛŒ|Ø¨Ø´Ø±|Ú©Ù†Ø¯|Ø´ÙˆØ¯| Ù…Ù†| Ø²Ù†|Ù† Ùˆ|ÛŒØŒ |Ø¨Ø§ÛŒ|ÛŒ Ø±| Ù…Ø³|Ù…Ù„ |Ù…ÙˆØ±|Ø² Ø¢|ØªÙˆØ§|Ø¯Ø§Ù†|Ø§Ø±ÛŒ|Ø¹Ù„Ø§|Ú¯Ø±Ø¯|ÛŒÚ¯Ø±|Ú©Ø§Ø±| Ú¯Ø±| Ø¨Ø¯|Ù† Ø¨|Øª Ø¨|Øª Ù…|ÛŒ Ù…| Ù…Ù‚|Ø¯ Ø¢|Ø´ÙˆØ±|ÛŒÙ‡ |Ø§Ø¹ÛŒ| Ø¹Ù…|Ø± Ø®|Ù† Ø­| Ú©Ø´|Ø±Ù†Ø¯|Ù…ÛŒÙ†| Ø§Ø­|Ù† Øª|ÛŒ Ø¯| Ù…Øª|Ù‡ Ù…|Ø¯ Ø´| Ø­Ù…|Ùˆ Ø¯|Ø¯ÛŒÚ¯|Ù„Ø§Ù…|Ú©Ø´Ùˆ|Ù‡Ù” |Ù‡ Ùˆ|Ø§Ù†ÛŒ|Ù„ÛŒ |Øª Ú©| Ù…Ø¬|Ù‚ Ù…|Ù…ÛŒØª| Ú©Ø§| Ø´Ø¯|Ø§Ù‡ |Ù†ÙˆÙ†| Ø¢Ù…|Ø§Ø¯ |Ø§Ø¯Ø§|Ø§Ø¹Ù„|Ø¯ Ù…|Ù‚ Ùˆ|Ø§ Ú©|Ù…ÛŒ |ÛŒ Ø­|Ù„Ù„ |Ù†Ø¬Ø§| Ù…Ø­|Ø³Ø§Ø³|ÛŒØ¯Ù‡| Ù‚Ø§|Ø¨Ø¹ÛŒ|Ù‚Ø§Ù†|Ø± Ø´|Ù…Ù‚Ø§|Ø§ Ø¯|Ù‡Ø¯ |ÙˆÛŒ |Ù†ÙˆØ§|Ú¯ÛŒ |Ø³Ø§Ùˆ|Ø± Øª|Ø¨Ø± |Ø§Ù‹ |Ù†Ù…ÛŒ|Ø§Ø³ÛŒ|Ø§Ø¯Ù‡|Ø§Ùˆ | Ø§Ùˆ| Ø¯ÛŒ| Ù‡ÛŒ|Ù‡ÛŒÚ†|Ù‡â€ŒØ§|â€ŒÙ‡Ø§|ÛŒØ± |Ø®ÙˆØ§|Ø¯ Øª|Ù‡Ù…Ù‡|Ø§ Ù‡|ØªÛŒ |Ø­Ù…Ø§|Ø¯Ú¯ÛŒ|Ø¨ÛŒÙ†|Ø¹ Ø§|Ø³Ø§Ù†|Ø± Ùˆ|Ø´Ø¯Ù‡|ÙˆÙ…ÛŒ| Ø¹Ù‚| Ø¨Ø¹|Ø² Ø­|Ø´Ø± |Ù…Ù†Ø¯| Ø´Ø±|Ù”Ù…ÛŒ|Ø§Ù”Ù…|ØªØ§Ù”|Ø§Ù†Øª|Ø§Ù†Ø¯|Ø§ÙˆÛŒ|Ù…Ø³Ø§|Ø±Ø¯Ø¯|Ø¨Ù‡Ø±| Ø¨Ù…|Ø§Ø±Ù†|ÛŒØªÙˆ|Ù„ Ù…|Ø±Ø§Ù†|Ùˆ Ù‡|Ø± Ø¯|Ù… Ù…|Ø±Ø§Ø±|Ø¹Ù‚ÛŒ|Ø³ÛŒ |Ùˆ Øª|Ø²Ø´ | Ø¨Ùˆ|Ø§ Ø§|ÛŒ Ù†|Ù…ÙˆÙ…|Ø¬Ø§ |Ø¹Ù…Ùˆ|Ø±ÙØª|Ø¹ÛŒØª| ÙØ±|Ù†Ø¯Ú¯|ÙˆØ§Ù‡|Ø²Ù†Ø¯|Ù… Ùˆ|Ù†Ù…Ø§|Ù‡ Ø­|Ø§ Ø±|Ø¯ÛŒÙ‡|Ø¬Ø§Ù…|Ù…Ø±Ø¯|ØªØŒ |Ø¯ Ø±|Ù…Ø§Ù…| ØªÙ…|Ù…Ù„ÛŒ|Ù†Ù†Ø¯|Ø§Ù„Ù…|Ø·ÙˆØ±|ÛŒ Øª|ØªØ®Ø§|Ø§ Øª|Ø§Ù…ÛŒ|Ø§Ù…Ù„|Ø¯Ø¯ | Ø´Ø®|Ø´Ø®Øµ",
                        zlm: " Ø¯Ø§|Ø§Ù† |Ø¯Ø§Ù†| Ø¨Ø±| Ø§Ùˆ|Ù† Ø³| Ú¤Ø±|Ù„Ù‡ |ÙƒÙ† |Ù† Ùƒ|Ù† Ø§|Ø¯Ø§Ù„|Ù† Ø¯|Ø±Ú  |ÙŠÚ  |Ø­Ù‚ | ÙŠÚ |Ø§Ø±Ø§| ÙƒÚ¤|Ø£Ù† |ØªÙŠØ§|Ú¤Ø¯ |ÙˆØ±Ú |Ú Ù† |ÙŠØ§Ú¤| ØªØ±|Ø§Ù„Ù‡|ÙˆÙ„ÙŠ|Ù† Ú¤|Ø§ÙˆØ±|ÙƒÚ¤Ø¯|Ø¨Ø±Ø­|Ø±Ø­Ù‚|ÙŠÙ† |Ø§Ú¤ |Ø±Ø§ | Ø§Øª|Ù„ÙŠÙ‡|Ø³ØªÙŠ|Ù‡ Ø¨|ÙŠÙ‡ |Ø§ØªØ§| Ø³Øª| Ø¹Ø¯|Ø¹Ø¯Ø§|Ù† Ø¨|ØªØ§Ùˆ|Ù† Øª|ÙŠØ¨Ø³|Ú¤ Ø§|Ø§Ùˆ |Ø¨ÙŠØ¨|Ø³ÙŠ | ÙƒØ¨|Ù‡ Ø¯|Ù† Ù…| Ø³Ùˆ| Ù…Ù†| Ø­Ù‚| Ø³Ø§|Ù„Ù… |Ù‚ Ùƒ|Ø§Ø³Ø§|Ø§Ù„Ù…|Ù† ÙŠ| ØªÙŠ| Ø§ÙŠ|Ø³Ø§Ù…|Ø±Ù† |Ù†ØŒ | Ù…Ø§|Ø§ØªÙˆ|Ø¨Ø§Ú¬|Ø¨Ø³Ù†|Ø³Ù† |Ù†Ú¬Ø§|Ú¬Ø§Ø±|Ø§ÙŠÙ†| Ù…Ù…|Ø¯ Ø³| Ø¨Ø§|ÙƒØ¨ÙŠ|ÙŠ Ø¯|Ú  Ø¹|Ú†Ø§Ø±| Ø³Ø¨|Ú½ Ø³|Ø§Ú¬ÙŠ|Ø¯ Ú¤|Ù†Ø¯Ù‚|Ø³Ø¨Ø§|Ø§Ú½ | Ø¯ | Ú¤Ù…|Ù†Ø³ÙŠ|Ù‚Ù„Ù‡|ÙŠÙ†Ø¯|Ú¬ÙŠ |Ø§Ù… |ØªÙ† |ÙˆØ§Ù†|ØªØ§ |Ø§ÙˆÙ†|ÙŠ Ø§| Ù†Ú¬|Ù‡Ù† | Ø¨Ùˆ|Ø§ Ú¤|Ø£Ù†Ø³|Ø¨ÙˆÙ„| ÙƒØ³| Ø³Ù…| Ø³Ú†|Ú  Ø¨|Ø³Ú†Ø§|Ù…Ø£Ù†|Ø§ Ø¨|Ø§ Ø³|Ø¨Ú Ø³| Ú¤Ú |Ø¯Ú Ù†|Ø³ÙŠØ§|Ø§Ø³ÙŠ|Ø³Ø§Ø³| Ù…Ø£| Ø¯Ú | Ø§Ø³|Ø¨Ø§Ø±|Ù‡Ù†Ø¯|Ù…Ø§Ù†|Ø§Ø±Ú |Ø±ØªØ§|Ø¯Ù‚Ù„|ØªÙŠ |Øª Ø¯| Ù‡Ù†|Ú¤Ø±Ù„|Ù†Ú½ |Ø§Øª |Ø§Ø¯ÙŠ|Ù‚ Ù…|ØŒ Ùƒ|ØªØ±Ù‡|Ø±Ù‡Ø§|Ù‡Ø§Ø¯| Ú¤Ùˆ|Ø§Ø¯Ú¤| Ù„Ø§|ÙŠ Ù…|Ú¤Ø§ |ÙŠÙƒÙ†|Ø§ÙˆÙ„|Ú¤ÙˆÙ†|ØŒ Ø¯|ÙˆÙ† |Ú Ø³Ø§|Ù¢ Ø¯|Ø§ÙŠ |Ù‚Ù¢ |ØªÙˆ |ÙˆÙ‚ |Ø¯Ú¤ |ÙŠØ£Ù†|ÙˆÙŠÙ†|Ù† Ù‡|Ù†Ù¢ |Ø§ Ø¯|ÙˆÚ Ù†|Ù†ØªÙˆ|Ø§ÙƒÙ†|ÙˆØ§ |Ù†Ø¯Ùˆ|ÙˆØ§Øª|Ù‡ Ù…|ÙŠ Ø³|Ú Ù¢ | Ù…Ú | Ø§Ù†|Ø­Ù‚Ù¢|ÙŠÙƒ |Ø§Ø¯ |Ù…Ú¤Ùˆ|Ø±Ø§Øª|Ø§Ø³ |Ù…Ø±Ø§|Ø¨Ø±Ø³|Ø§Ø¦Ù†| Ù…Ù„| Ø³Ø³|Ù…Ø§Ø³| ÙƒÙˆ|Ø±ÙŠ | Ø¨ÙŠ|Ø³ÙˆØ§|Ú  Øª|Ø§ØŒ |ØŒ Øª|ÙŠØ§Ø¯|Ø§Ù…Ø±|Ø³Ù…Ùˆ|Ú  Ù…|Ú¤Ø±Ø§|Ù„ÙˆØ§|Ú¤Ø±ÙŠ|Ø¯ÙˆÚ |ÙŠ Ùƒ|Ù„ Ø¯|ØªØ§Ø±|Ø±ÙŠÙƒ|ØªÙŠÙƒ|Ø§Ø±Ùƒ|ÙˆÙ†Øª|Ù„ÙŠÙ†| Ø³Ø±|Ø±Ù„ÙŠ|Ø³Ø±Øª|ÙˆÙ†Ø¯|ÙˆØ§Ø³|Ø±Ø³Ø§|Ú¤Ù…Ø¨|ØªØ±Ù…|ØŒ Ø³|Ø§Ú¬Ø§|ÙŠØ±ÙŠ|Ø±Ø£Ù†| Ø¯Ø±|Ø§ Ø§|Ø¯ÙŠØ±| Ø¨Ú |ÙŠ Ú¤|Ù„Ø§Ø¦|Ø³ÙˆØ³|Ú  Ø³|ØªÙˆÙ‚|Ø³Ø£Ù†|ÙˆØ±Ùˆ|Ø¬ÙˆØ§|Ù‡Ø§Ø±|Ø§Ú¤Ø§|ÙˆÙƒÙ†| Ú¤Ù†|Ù¢ Ø¨|Ù…ÙˆØ§| ÙƒÙ…|Ø§Ø±Ø£|Ù†Ù† |Ù†Ø¯Ú |Ø§Ù¢ | ÙƒØ£|Ø¯Ú Ù¢|Ùˆ Ùƒ|ÙƒØ±Ø¬|ÙˆÙ‡ |Ø§ Ù…|Ú¤Ø±Ùƒ|ØªÙ‡Ø§|Ø§Ø¬Ø±|Ø¬Ø±Ù†|ÙŠØŒ |Ø´ØªÙ‡| Ø³Ú¤| Ø¨Ù‡|Ù†Ø¯ÙŠ|Ù‚ Ø§|Ú Ú¬Ùˆ|Ø¨Ù‡Ø§|Ú¤Ù¢ | Ù…Ø±|Ø³Ø§Øª|Ø±Ø§Ø³|Ø¨ÙˆØ§|Ù‡ Ø§|Ø§ Ùƒ|Ø¯ Ùƒ| Ú¤Ù„|Ù† Ø­|Ù„Ø§Ø¬|Ù‡Ú½ |Ú  Ø§|Ù…Ø¨ÙŠ|ÙŠÙ†Ú |Ø¨Ø³ | Ø§Ú¤|Ù…Ù„Ø§|ÙƒÙˆØ±|ÙˆØ§Ø±|Ù… Ú¤|Ø³Ø³ÙŠ|Ù†ØªÙŠ|ØªÙŠÚ | Ø¯Ù„|Ø³Ø§Ù„|ÙˆØ¨Ùˆ|Ù…Ù†Ùˆ|Ú¤ÙˆÙ„|Ù…ÙˆÙ„|Ú  Ø¯|Ù†ØªØ§|Ø§Ù†Øª|Ø§Ù„ ",
                        skr: "ØªÛ’ |Ø§Úº | ØªÛ’|Ø¯Û’ |Ø¯ÛŒ |ÙˆÚº | Ø¯Ø§| Ø­Ù‚| Ú©Ùˆ|Û’ Ø§|Ú©ÙˆÚº| Ø¯Û’|Ø¯Ø§ | Ø¯ÛŒ|ÛŒØ§Úº| Ú©ÛŒ|Û’ Û”|ÛŒÚº |ÛØ± | Û” |Ú©ÛŒØª|ÛÛ’ | ÙˆÚ†| ÛÛ’|ÙˆÚ† | Ø§Ù†| Ø´Ø®|Ø´Ø®Øµ|Ø§Ø¯ÛŒ|Ø§Ù„ | Ø­Ø§|Ø§ØµÙ„|Ø­Ù‚ |Ø­Ø§Øµ|Û’ Ù…|Ø®Øµ |ØµÙ„ |Úº Ø¯| Ù†Ø§|ÛŒØ§ | Ø§ÛŒ|Ø§ØªÛ’|Ù‚ Ø­|Ù„ Û|Û’ Ùˆ|Úº Ú©| Ø§Øª|ÛÛŒÚº|Ø³ÛŒ | Ù…Ù„|Ù†Ø§Ù„|Ø²Ø§Ø¯|Ø§Ø²Ø§|ÛŒ Øª| Ø§Ø²|Ù‚ÙˆÙ‚|Ø§Ø± |Ø§ Ø­|Ø­Ù‚Ùˆ| Ø§Ùˆ|Øµ Ú©| Û”Û|Û”ÛØ±|Ø± Ø´|Ø¯ÛŒØ§|Û’ Ø¬|ÙˆÙ‚ |Ù†Ø¯Û’| Ú©Ø±|ÛŒÙ†Ø¯| ÛŒØ§|Ù†Û | Ø¬Ùˆ|Ú©ÛÛŒ|Ø¦Û’ |ÛŒ Ø¯|Ø³Ø§Ù†|Ù†Ø³Ø§|ÙˆÙ†Ø¯|ÛŒ Ø§|ÛŒØªÛ’|Ø§Ù†Ø³|Ø§ Ø§|Ù…Ù„Ú©|Û’ Ø­|Ùˆ Ú„|Û’ Ú©|Ú» Ø¯| ÙˆÛŒ|ÛŒØ³ÛŒ|Û’ Ø¨|Ø§ Ùˆ| ÛÙˆ|Úº Ø§|Ø¦ÛŒ |Ù†Ø¯ÛŒ|ØªÛŒ |Ø¢Ù¾Ú»|ÙˆÚ» |Ø± Ú©|Ù† Û”| Ù†Û|Ø§Ù†Û|Ø¬Ùˆ | Ú©Ù†| Ø¢Ù¾| Ø¬ÛŒ|Ø§ÙˆÙ†|ÙˆÛŒØ³|ÛŒ Ù†| ØªÚ¾| Ú©Û|Ø§Ù† |Ø±ÛŒ |Ú»Û’ | Ú„Ø¦| ÛØ±|Û’ Ù†|Ø¯Û |Ø§Ù… |Úº Ù…|Û’ Û|ØªÚ¾ÛŒ|Úº Ùˆ|Û” Ø§|Úº Øª|ÛŒ Û”|Ú©Ù†Ùˆ|ÛŒ Ø­|ÛŒ Ú©|Ù†ÙˆÚº|Ø±Û’ |ÛØ§Úº| Ø¨Ú†|ÙˆÙ† |Û’ Øª|Ú©Ùˆ | Ù…Ù†|ÛŒ Û|Ø§Ø±ÛŒ|ÙˆØ± |Ù†ÛØ§|ÛÚ©Ùˆ|ÛŒØªØ§|Ù†ÛŒ |ÛŒØ§Ø¯|Øª Ø¯|Ù† Ø¯| ÙˆÙ†|ÙˆØ§Ù…|ÛŒ Ù…|Ù‚ÙˆØ§|ØªØ§ |Ú„Ø¦Û’|Ù¾Ú»Û’| ÛÚ©|Ù…ÛŒ | Ù‚Ùˆ|Ù‚ Øª|Û’ Ø¯|Ù„Û’ |Ø§Ù |Ù„ Ú©|Ù„ Øª| ØªØ¹|Ú† Ø§|ÛŒÙ† |Ø®Ù„Ø§|Ø§Û’ |Ø¹Ù„Ø§| Ø³Ø§|Ø¬ÛŒØ§|Ø¦Ùˆ |Ú©Ø±Ú»|ÛŒ Ùˆ|Ø§Ù†ÛŒ|ÛÙˆ |Ø¯Ø§Ø±| Ùˆ |ÛŒ Ø¬| Ø§Ù‚|Ù† Ø§|ÛŒØª |Ø§Ø±Û’|Û’ Ø³|Ù„Ú© |Ù‚ Ø¯|ÛÙˆÙˆ| Ú‹Ùˆ|Ø± Øª| Ø§Û’|Û’ Ø®| Ú†Ø§| Ø®Ù„|Ù„Ø§Ù|Ù‚Ù†Ùˆ|Ù†ÙˆÙ†|Ù¾ÙˆØ±|Ú» Ú©| Ù¾Ùˆ|Ø§ÛŒÛ|Ø¨Ú†Ø¦|Ú†Ø¦Ùˆ|Ø§Øª |Ø§Ù„Ø§|ÙˆÙ†Ú„|ÙˆØ±ÛŒ|Ø§ÛŒÙ†| ÙˆØ³| Ù„Ùˆ|Ùˆ Ø§|Û Ø¯| Ø±Ú©|ÛŒØ¨ |Ø³ÛŒØ¨|ÙˆØ³ÛŒ|ÛŒØ± |Ø§ Ú©|Ù‚ÙˆÙ…|Ø±ÛŒØ§|Úº Ø¢| Ø¬Ø§|Ø±Ú©Ú¾|Ù…Ù„ |Ú©Ø§Úº|Ø±Ú» |Ø§Ø¯ |Ø§Ùˆ |Ø¹Ø²Øª| Ù‚Ù†|Ø¨ Ø¯|ÙˆØ¦ÛŒ|Û’ Ø¹| Ø¹Ø²| Û”Ú©| Ù…Ø¹|Ø§Ù‚Ùˆ|Ø§ÛŒÚº|Ù… Ù…|Ø²Øª |Ú»ÛŒ |ÛŒÙˆÚ»|Ø± Û| Ø³Ù…|Úº Ø³|Ù„ÙˆÚ©| Ø¬Ú¾| Ø³ÛŒ|Ø¬Ú¾ÛŒ|Øª Øª|Ù„ Ø§|Ø§ÙˆÚ»|Ú©ÙˆØ¦|Úº Ø¬|ÛÛŒ |Ø­Ø¯Û|ØªØ¹Ù„|Û’ Ø°|ÙˆÛ’ |ØªØ­Ø¯|Ù…ØªØ­|Ù„Ø§ |Ø§ Øª|Ú©Ø§Ø±| Ø§Ø¹|Û’ Ø±| Ù…Øª|Ø± Ø§|Ø§ Ù…|Ú¾ÛŒÙ†|Ú¾ÛŒÙˆ|ÛŒÛÙˆ| Ù…Ø·| Ø³Ú±|ÛŒ Ø³|Ú„Û’ |Ù†Ú„Û’|Ø³Ú±Ø¯|Ù„ÛŒÙ…|Ø¹Ù„ÛŒ|Û’ Ù‚| Ø°Ø±|Ù… Øª| Ú©Ú¾|Ù† Ú©| Ú©Ù…|Û Ø§|Ø³Ø§Ø±|Ø§Ø¦Ø¯|Ø§Ø¦ÛŒ|Ø¯ Ø§| ÛÙ†|ÛÙ† |ÛŒØŒ |Ùˆ Ú©|Úº Ø¨|Ú¾ÛŒØ§|Ø°Ø±ÛŒ|Úº Ù¾|Ù„ÛŒ ",
                        uig: " Ø¦Ø§| Ú¾Û•|Ù‰Ù†Ù‰|Û• Ø¦|Ù†Ù‰Ú­|Ù‰Ù„Ù‰| Û‹Û•|Ù‰Ú­ |Û‹Û• | Ø¦Ù‰| Ø¨Ùˆ|Ú¾ÙˆÙ‚|ÙˆÙ‚Û‡| Ú¾Ùˆ|Ù‚Û‡Ù‚|Ù†Ù‰ |Ø¨ÙˆÙ„| Ø¦Û•|Ù„Ù‰Ùƒ|Ù‚Ù‰Ù„|Ù‰Ù† |Ù„Ù‰Ø´|Ø´Ù‚Ø§|Ù‚Ø§ |Û•Ù† | Ù‚Ù‰|Ù† Ø¨|Ú¾Û•Ù…|Ù‰ Ø¦|Ø¦Ø§Ø¯|Ù‰Ø´Ù‰|Ø¯Û•Ù…|Ø§Ø¯Û•|ÙƒÙ‰ |Ù„Ù‰Ù‚|ØºØ§Ù†|Ù‰ÙŠ |Ù‰ØºØ§|Ú¯Û• | Ø¨Ù‰|Ø¯Ù‰Ù†|Ù‰Ø¯Ù‰|Û•Øª |ÙƒÙ‰Ù†|Ù‰ÙƒÙ‰|Ù†Ø¯Ø§|Û‡Ù‚ | ØªÛ•|Ù†Ù„Ù‰|ØªÙ‰Ù†|Û•Ù… |Ù„Û•Øª|Ù‚Ø§Ù†|Ù‰Ú¯Û•|Ù‰ØªÙ‰|Ù‰Ø´ |Ú¾Û•Ø±|Ø¦Û•Ø±| Ø¨Ø§|ÙˆÙ„Û‡|Ø¯Û†Ù„|ØºØ§ |Ø§Ù†Ø¯| Ø¯Û†|Ø§Ù‚ |Ù…Û• |Ù„Û‡Ø´|Ø¯Û• |Ù„Û‡Ù‚| Ø¦Û†|Ø§Ù† | ÙŠØ§|Û•Ø±Ù‚|Û†Ù„Û•|Ø±ÙƒÙ‰| Ù‚Ø§|Û•Ø±Ùƒ|Û•Ù…Ù…|Ø§ Ø¦|Ù…Ù…Û•|Û‡Ù‚Ù‰|Ù‰Ù‚ | Ø¨Û•|Ø±Ù‚Ø§|Ø¯Ø§Ù‚|Ø§Ø±Ø§|Ù‰Ù„Û•|Ø±Ù‰Ù…|Ù‰Ø´Ù‚|Ù‰ Û‹|Ù„ØºØ§|Ù…Û•Ù†|Ø§ÙƒÙ‰|Û•Ø± |Ø§ Ú¾|Ø¯Û‡ |ÙŠØ§Ùƒ|Û‡Ù‚Ù„|Ø¦Ø§Ø±|Ù‚ Ø¦|Ù‰Ù†Ù„|Ù„Ø§Ø±| Ø¦Û|Ù‰ Ø¨|Ù„Ù‰Ù†|Ú­ Ø¦|Ø¦Û†Ø²|Ù‚ Ú¾|Ø´Ù‰ |Ù‰Ù…Û•|Ù‚Ù„Û‡|Ù† Ø¦|Ù„Û•Ø±|Û•ØªÙ„|Ù†Ù‰Ø´|Ù‰Ùƒ |Û•Ú¾Ø±| Ù…Û•|Ú¾Ø±Ù‰|Ù„Û•Ù†|Ù‰Ù„Ø§|Ø§Ø± |Ø¨Û•Ú¾| Ø¦Û‡|Û• Ù‚|Ø¦Ù‰ÙŠ|Ø§Ø³Ù‰| Ù…Û‡|Ø±Ù„Ù‰| Ø¦Ùˆ|Ø¨Ù‰Ø±|ØŒ Ø¦|Ø¨Ù‰Ù„|Ø´ Ú¾|Ø¨Ø§Ø±|Ù‰ØŒ |Û‡ Ú¾|Ø§ÙŠØ¯|Û‡Ø´Ù‚|Ø´ÙƒÛ•|Û• Ø¨|ÙŠÛ•Øª|Ø§ Ø¨|Ø±Ù†Ù‰|ÙƒÛ• |Ù‰Ø³Ù‰| ÙƒÛ|ÛÙ„Ù‰|Ø§Ù„Ù‰|Û•Ùƒ |Ù… Ø¦|Ù…Ø§ÙŠ|ÙˆÙ„Ù…|ØªÙ†Ù‰|Ù‰Ø¯Ø§|Ø§Ø±Ù‰|ÙŠØ¯Û‡|Ù„Ù‰Ø¯| Ù‚Ùˆ|Û•Ø´Ùƒ|ØªÙ„Û•|Ùƒ Ú¾|Ø§Ù†Ù„|Û•Ù…Ø¯|Ù…Ø§Ø¦|Ø¦Ø§Ù„|Ø± Ø¦|Ù…Ø¯Û•|Ù‰ÙŠÛ•|Ø´ Ø¦|Û• Ú¾|Ù„Ù…Ø§|Ø§Ø¦Ù‰|Ø¦Ù‰Ú¯|Ø¯Ø§ |ÙŠ Ø¦|Û‡Ø´Ù‰|Ø±Ø§Û‹|Ø§ØŒ |Ø³Ù‰ÙŠ| ØªÛ‡|ÙƒÙ‰Ù„|Û• Øª|Ù‰Ù‚Ù‰|Ù‚Ù‰ |Û†Ø²Ù‰|ÛØªÙ‰|Ù‰Ø±Ù‰|Ù‰Ø± |Ù‰Ù¾ |Ù‰ Ùƒ|Ù†ØŒ |Ø± Ø¨|Ù„Û•Ø´|Ø§Ø³Ø§|Ø§Û‹Ø§|Ù‰ Ú¾|Ø´Ù„Ù‰|Ø³Ø§Ø³|Ø§Ø¯Ù‰|ØªÙ‰ |Ø§Ø´Ù‚|Û•ØªØª|Ù‚Ù‰Øº|Ù‰Ù…Ø§|Ø§Ù†Ù‰| Ø®Ù‰|Û‡Ø±Û‡| Ø®Û•|Ù† Ù‚|Ù…Ù†Ù‰| Ø®Ø§|Ú†Û• |Ù‰ Ù‚| Ø¬Û•|Ø±Ù‚Ù‰|ØªÙ‰Ø¯| Ú¾Û†|Ø¨Ø§Ø´|Ø§Ø±Ù„|Ø¦Ù‰Ø´|ØªÛ‡Ø±| Ø¬Ù‰|Ù…Û‡Ø´|Ù†Û‡Ù†|Ø´Û‡ |Ø§Ù†Û‡|Û‡Ø´ |Ø±Û•Ùƒ|ÛØ±Û•|ÙƒÛØ±| Ø³Ø§|Ø§Ù„Øº|Û‡Ù†Ù‰|Ø¦ÛÙ„|Ù‰Ø´Ù„|ØªÛ•Ø´|Ø®Û•Ù„|Ù…Û•Øª|Ø§Ø´ |Ø¯Ù‰Øº|ÙƒÛ•Ù†|Û•Ù„Ù‚|ØªÙ‰Ø´|Ù…Ù‰Ù†|Ø§ÙŠÙ‰|Ø³Ù‰Ø²|Ù‚ Û‹|Ù†Ù‰ÙŠ|Ø¬Ù‰Ù†|Ø±Ù‰Ø´|Ù¾ Ù‚| ÙƒÙ‰|ÛØ±Ù‰|Ø¦Ø§Ø³|Û•Ù„Ù‰| Ù…Ø§|ØªØªÙ‰|Ù‰Ø±Ù„|ÙˆÙ„Ù‰| Ø¯Û•|Ø§Ø±Ù‚|Ø³Ù‰Øª|Û• Ù…| Ù‚Û•|Ø´Ù‰Ù„| ØªÙ‰|Û•Ø±Ù†|ÙƒÙ‰Ø´|Ù† Ú¾|Û•Ù„Ú¯|Û•Ù…Ù†|Ùƒ Ø¦| ØªÙˆ|Ù‰ ÙŠ|Ù‚ØªÙ‰|Ø¦Ø§Ø´|ØªÙ‰Ù…|ØªÛ•Û‹|Ù†Ø§ÙŠ|Ù‰Ø¯Û•|Ù‰Ù†Ø§| Ø¨Û‡|Ù‰ÙŠØ§|Ø²Ù‰Ù†|Ø§Ù…Ù‰|Ù‚Ø§Ø±|Ø´ÙƒÙ‰|Ù‰Ø² | Ø¦Ûˆ|Û•Û‹Û•|Û†Ø±Ù…|Û• Ø®|Ø´Ù‰Ø´|Ù‰ÙŠÙ‰|Ø¬ØªÙ‰|Ù‰Ø¬Øª|Ø¦Ù‰Ø¬|Ù†Ø§Ù…|ØªÛ•Ø±",
                        pnb: "ØªÛ’ | ØªÛ’| Û” |Ø¯Ø§ |Ø¯ÛŒ |Ø¯Û’ |ÙˆÚº |Ø§Úº |Û’ Ø§|Û” Û”|Ø§Û’ | Ø§Û’| Ø¯Ø§| Ø­Ù‚| Ø§Ùˆ| Ø¯ÛŒ|Ø§ÙˆÛ|Ø¦ÛŒ | Ø¯Û’| Ø§ÛŒ|Ù†ÙˆÚº| Ú©Ø±|ÛŒ Ø§|Û’ Û”| ÙˆÚ†| Ù†Ùˆ|ÙˆÚ† |ÛŒØ§ |ÛØ± | Ø´Ø®|Ø´Ø®Øµ|Ø­Ù‚ |Û’ Ù†| Ø¬Ø§|Ø®Øµ | Ø§Ù†|Ù„ Ø§|Ù† Ø¯|ÛŒØ§Úº|Ø§Ø¯ÛŒ|Ø§ Ø§|Û’ Ù…|Ø³Û’ |ÛŒ Ø­| Ø­Ø§|Û’ Ùˆ|Ø§ØµÙ„|Ú©Ø³Û’|ÙˆÛØ¯|Ø§Ù„ |ØµÙ„ |Ø­Ø§Øµ|Ø§Ù† | ØªÙˆ|ÛŒÚº |Ø³Ø§Ù†|Ú©Ø±Ù†| Ù†Û|ØªÙˆÚº|Úº Ø¯|Ù†Û’ |Ø± Ø´|Ù†ÛŒ |Ø§ÛŒÛ| Ù†Ø§|Ù‚ÙˆÙ‚|ÛŒ Øª|Ø§Ù¾Ù†|Ø­Ù‚Ùˆ|Ø§ÛŒØ³| ÛŒØ§| ÙˆÛŒ| Ú©Ùˆ|Øµ Ù†|Ù†Ø³Ø§| Ú©Ø³|Úº Øª|Ø²Ø§Ø¯|Ø¢Ø²Ø§|Ø¦Û’ |Ù†Ø§Ù„|Ø§ Ø­|Ù† Øª|ÙˆÙ‚ |Ø§Ù†Ø³|Ø§ Ø¬|ÙˆÛŒ |Û’ Øª|ØªÛŒ |Ù‚ Ø­|ÛŒ Ø¯|Ø§Ù… | Ø¢Ø²|Ø±Ù† | Ø§Ù¾|Úº Ø§| ÛÙˆ|ÙˆØ¦ÛŒ|Û’ Ø¨|ÛŒØ³ |ÛØ¯Û’| ÛØ±|Ú©ÙˆØ¦|Û’ Ø¬|ÙˆÛÙ†| Ù…Ù†|ÛŒÛÛ|ÛÛ |Û’ Ú©|ÙˆØ± | Ù…Ù„| Ø³Ø§| Ù…Ø¹|Ø§Ù†ÛŒ|Ø§ Ú©|Ø§Ø± |Úº Ù†|Ù…Ù„Ú©|Ø±Û’ |Ø³Ú©Ø¯|Û’ Ø¯|Úº Ú©|Û”ÛØ±| Û”Û|ÙˆÙ† |Û” Ø§|Ù†Û | Ø±Ú©|Û’ Ø­|ÛŒ Ù†|Ù¾Ù†Û’| Ù¾Ø¦|Ù†Ø§Úº|Ù¾Ø¦ÛŒ|Ø§ Ø³|Û’ Ú¯|ÛÛŒÚº|Ú©Û’ |Øª Ø¯|Ø§ Ù…|Û’ Ù¾|ØªØ§ | Ø³Ú©| Ø¯Ùˆ|Û Øª|ÛŒ Ø´|Ø± Ø¯|Ù†ÛÛŒ|Ù„ Ú©| Ú©ÛŒ|Ù…Ø¹Ø§|Ú©ÛŒØª|ÛŒ Ù…|Ù…ÛŒ |ÛŒØª |ÛŒ Ø¬|ÛŒ Ú©|Û’ Ø³|Úº Ø¨|ÛÙ†Ø§|Ø±ÛŒ | Ù†ÛŒ|Ù… Ø¯|Ø§Ø¦Û’|ÙˆÛ |Ù„Ú© | Ù„Ùˆ|Û’ Ø¹|Ù‚ÙˆÙ…|Ø§Ù†Ùˆ|Ø¬Û’ |Ø± Ø§| Ú©Û’| Ù„Ø¦|ÛŒ Ùˆ|Ù… Ú©| Ø§Ù|Ø¬Ø§Ø¦|Ø¯ÛŒØ§|Ø³Ø§Ø±|Û’ Ù„|Øª Øª| Ø§Ú©|Ù„Ø¦ÛŒ|Û Ø§|Ù†ÛŒÚº|Ø§Ø±ÛŒ| Ù‚Ùˆ|Úº Ùˆ|Ú©Ø¯Ø§|Ø¯Û |Ù‚ Ø§|ÛŒØ§Ø¯|ÛŒØªØ§|ÙˆØ§Ù…|Ø±Ú©Ú¾|Ø¬ÛŒØ§|ÙØªÛ’|Ø§ÙØª| ØªØ¹| Ù‚Ø§| Ø´Ø§|Ø§Ù‚Ùˆ|ÛÙ† |Û’ Ø±|Ø± Ú©|Øª Ú©|Ø± Ùˆ|Ù„Û’ |ÛŒ Û|ÛŒÙ† |Ø´ÙˆØ±|Ù†Ø´Ùˆ|Ù‚ Ø¯|Ø¬Ø§ | Û”Ú©|Ø§ Ùˆ|Ø§Ø±Û’|Ù…Ù†Ø´|Ù‚ÙˆØ§|Ù†ØŒ | Ø¹Ø§|Û’ Ø°|Ø§Ø¦ÛŒ|Ø¬Ø§Ù†|Û Û|Ù…Ù„ |Ø¹Ø§Ø´| ÙˆØ§|Ø§Ø´Ø±| Ø§Ù‚|ÛŒ Ø¹| Ù…Ø±|ÛÙˆÙ†|ÛÛŒ |ÛŒÙ… |Ù„ÛŒÙ…|Úº Û”|ÛŒØ± |ØªØ¹Ù„|Ù„ÙˆÚ©|Ø± Øª|Ø§Øª |ÙØ§Ø¸|Û”Ú©Ø³|Ø§Ù…Ù„|Ù† Ú©|Ú¾Ø§Ù†|Ø¬Ú¾ÛŒ|Ø§ Ø¯| Ø­Ù|ÛÙ†Ùˆ|Úº Ø³|Ú† Ø§|Ø¹Ù„ÛŒ|Ø§Ø¸Øª| Ø¹Ø²|Ù… Ù…| Ø¨Ø§|ÛŒØŒ |Ù† Ø§|Ø­ÙØ§|ÛØ¯ÛŒ|Ú©Û |Ø¸Øª |Ø¯ÙˆØ¬|ØŒ Ø§|Ù„ÛŒ |Û’ØŒ |ØºÛŒØ±| Ù†Û’| Ø¨ÛŒ|Ù†ÙˆÙ†|Ø§ Øª| Ø¨Ø±|Ú‘Û’ | Ù¾ÛŒ|Ú©Ø§Úº|Ø¹Ø§Ù…|Ùˆ Ø¬| Ø±Û| Ú©Ù…|ÙˆØ±ÛŒ| Ø¨Ú¾|Ú©Ù… |Û’ Û| Ù…Øª|Ù…ØªØ­|ØªØ­Ø¯|Øµ Ø¯| Ø¬Ù†|Ø­Ø¯Û|Û Ø¯|Ù¾Ù†ÛŒ|Øª Ù†| Ø³Ù…|Ø±ÛŒØ¹|Ø°Ø±ÛŒ|Û Ø­|Û Ø³"
                    },
                    Devanagari: {
                        hin: "à¤•à¥‡ |à¤ªà¥à¤°|à¤”à¤° | à¤”à¤°| à¤•à¥‡|à¥‹à¤‚ | à¤•à¤¾|à¤•à¤¾à¤°| à¤ªà¥|à¤•à¤¾ | à¤•à¥‹|à¤¯à¤¾ |à¤‚ à¤•|à¤¤à¤¿ |à¤¾à¤° |à¤•à¥‹ | à¤¹à¥ˆ|à¤¿à¤•à¤¾|à¤¨à¥‡ |à¤¹à¥ˆ |à¥à¤°à¤¤|à¤§à¤¿à¤•| à¤…à¤§|à¤…à¤§à¤¿|à¤•à¥€ |à¤¾ à¤•| à¤•à¤¿| à¤•à¥€| à¤¸à¤®|à¥‡à¤‚ |à¤µà¥à¤¯|à¥à¤¤à¤¿|à¤•à¥à¤¤|à¤¸à¥‡ | à¤µà¥|à¤¾ à¤…|à¥à¤¯à¤•|à¤®à¥‡à¤‚|à¤®à¤¾à¤¨|à¤¿ à¤•| à¤¸à¥| à¤®à¥‡|à¤¸à¥€ |à¤¨à¥à¤¤| à¤¹à¥‹|à¥‡ à¤•|à¤¤à¤¾ |à¤¯à¤•à¥|à¤•à¥à¤·|à¥ˆ à¥¤|à¤¿à¤• |à¤¤à¥à¤¯| à¤•à¤°|à¥à¤¯ | à¤¯à¤¾|à¤­à¥€ | à¤µà¤¿|à¤°à¤¤à¥|à¤° à¤¸|à¥€ à¤¸| à¤œà¤¾|à¤¸à¥à¤µ|à¤°à¥‹à¤‚|à¥à¤¯à¥‡|à¥‡à¤• |à¤¯à¥‡à¤•|à¤¤à¥à¤°|à¤¿à¤¯à¤¾|à¤¾ à¤œ|à¤• à¤µ|à¤° à¤¹|à¤¿à¤¤ |à¥à¤°à¤¾|à¤•à¤¿à¤¸| à¤…à¤¨|à¤¾ à¤¸|à¤¿à¤¸à¥€|à¤¾ à¤¹|à¤¨à¤¾ | à¤¸à¥‡| à¤ªà¤°|à¤° à¤•| à¤¸à¤¾|à¤¦à¥‡à¤¶|à¤—à¤¾ | à¥¤ | à¤…à¤ª|à¥à¤¤à¥|à¥‡ à¤¸|à¤¸à¤®à¤¾|à¤¾à¤¨ |à¥€ à¤•|à¥à¤¤ |à¤µà¤¾à¤°| à¥¤à¤ª|à¤¾ à¤ª| à¤°à¤¾|à¤·à¤¾ |à¤¨ à¤•|à¥¤à¤ªà¥|à¤·à¥à¤Ÿ|à¤¥à¤¾ |à¤…à¤¨à¥| à¤®à¤¾|à¥à¤·à¤¾|à¥à¤µà¤¾|à¤¾à¤°à¥‹|à¤¤à¤¨à¥|à¤µà¤¤à¤¨|à¤Ÿà¥à¤°|à¥à¤µà¤¤|à¤ªà¥à¤¤|à¤¾à¤ªà¥|à¥à¤Ÿà¥|à¤°à¤¾à¤·|à¤¾à¤·à¥| à¤‡à¤¸|à¥‡ à¤…| à¤‰à¤¸| à¤¸à¤‚|à¤°à¤¾à¤ª|à¤•à¤¿ |à¤¤ à¤¹|à¤¹à¥‹ |à¤‚ à¤”|à¤¾à¤°à¥|à¤¾ à¥¤|à¤•à¤¿à¤¯|à¥‡ à¤ª| à¤¦à¥‡| à¤­à¥€|à¤•à¤°à¤¨|à¤°à¥€ |à¤œà¤¾à¤|à¥€ à¤ª| à¤¨ |à¤° à¤…|à¤• à¤¸|à¤…à¤ªà¤¨|à¥‡ à¤µ|à¤¾à¤“à¤‚|à¥à¤¤à¤°|à¤“à¤‚ | à¤¨à¤¿|à¤¸à¤­à¥€|à¤°à¤¾ | à¤¤à¤¥|à¤¤à¤¥à¤¾|à¤¿à¤µà¤¾|à¤¯à¥‹à¤‚|à¤ªà¤° | à¤à¤¸|à¤°à¤¤à¤¾|à¤¾à¤°à¤¾|à¥à¤°à¥€|à¤¸à¤®à¥| à¤¦à¥|à¥€à¤¯ |à¤¿à¤ |à¤µ à¤•|à¤¸à¤•à¥‡|à¤¦à¥à¤µ|à¤¹à¥‹à¤—| à¤¸à¤­|à¤‚ à¤®|à¤®à¤¾à¤œ|à¤°à¤¨à¥‡|à¤¿à¤•à¥|à¥à¤¯à¤¾|à¤¾ à¤µ|à¤° à¤ª| à¤œà¤¿|à¥‹ à¤¸|à¤° à¤‰|à¤°à¤•à¥|à¥‡ à¤®|à¤ªà¥‚à¤°| à¤²à¤¿|à¤¾à¤à¤—| à¤­à¤¾|à¤‡à¤¸ |à¤¤ à¤•|à¤¾à¤µ |à¤¸à¥à¤¥|à¤ªà¤¨à¥‡|à¤¾ à¤”|à¤¦à¥à¤§|à¤¶à¥à¤¯|à¤°à¥à¤µ| à¤˜à¥‹|à¤˜à¥‹à¤·|à¤°à¥‚à¤ª|à¤­à¤¾à¤µ|à¤¾à¤¨à¥‡|à¤•à¥ƒà¤¤|à¥‹ à¤ª|à¥‡ à¤²|à¤²à¤¿à¤|à¤¶à¤¿à¤•|à¥‚à¤°à¥| à¤‰à¤¨|à¥¤ à¤‡|à¤‚ à¤¸|à¤¯ à¤•|à¥à¤§ |à¤¦à¥€ |à¥€ à¤°|à¤°à¥à¤¯|à¤£à¤¾ |à¤à¤—à¤¾|à¤¨à¥à¤¯|à¤°à¥€à¤¯|à¥‡à¤¶ |à¤°à¤¤à¤¿|à¥‡ à¤¬| à¤°à¥‚|à¥‚à¤ª |à¤ªà¤°à¤¾|à¥à¤° |à¤¤à¤°à¥| à¤ªà¤¾| à¤¸à¥|à¤œà¤¿à¤¸|à¤¤à¤¿à¤•|à¤¸à¤¾à¤°|à¤œà¥‹ |à¥‡à¤¶à¥‹| à¤¶à¤¿|à¤¾à¤¨à¤µ|à¥€ à¤…|à¤šà¤¿à¤¤|à¥‡ à¤”| à¤ªà¥‚|à¤¿à¤¯à¥‹|à¤¾ à¤‰|à¤® à¤•|à¥€ à¤­|à¤¶à¥‹à¤‚| à¤¬à¥|à¤®à¥à¤®|à¤¸à¥à¤¤|à¤¿à¤¶à¥|à¥à¤°à¥‹|à¥à¤® |à¥‹ à¤•| à¤¯à¤¹|à¤° à¤¦|à¤¨à¤µ |à¤šà¤¾à¤°|à¤¦à¤¿à¤¯|à¥‡ à¤¯|à¤°à¥à¤£|à¤°à¤¾à¤§|à¥‹à¤—à¤¾|à¤²à¥‡ |à¤¨à¥‚à¤¨|à¤¾à¤¨à¥‚|à¥‹à¤·à¤£|à¤·à¤£à¤¾|à¤µà¤¿à¤¶| à¤œà¤¨|à¤¾à¤°à¥€|à¤ªà¤°à¤¿|à¤—à¥€ |à¤µà¤¾à¤¹|à¤¸à¤¾à¤®|à¤¾à¤¨à¤¾|à¤°à¤•à¤¾| à¤œà¥‹|à¤¾à¤œ |à¥€ à¤œ|à¤§ à¤•|à¤¬à¤¨à¥|à¤¤à¤¾à¤“|à¤‚à¤•à¤¿|à¥‚à¤‚à¤•|à¤¾à¤¸ |à¤•à¤° |à¤šà¥‚à¤‚|à¥€ à¤µ|à¤¯ à¤¹|à¤¾ à¤—|à¤¯ à¤¸|à¤¨ à¤¸|à¤¤ à¤°|à¤•à¥‹à¤ˆ|à¥à¤•à¥|à¥‹à¤ˆ | à¥¤à¤•|à¤‚ à¤¨|à¤¹à¤¿à¤¤|à¤¨à¤¿à¤¯|à¤¯à¤¾à¤¦|à¤¾à¤¦à¥€|à¥à¤®à¤¾|à¥à¤¥à¤¾|à¤¾à¤®à¤¾|à¤¾à¤¹ |à¥€ à¤®|à¥‡ à¤œ",
                        mar: "à¥à¤¯à¤¾|à¤¯à¤¾ |à¤¤à¥à¤¯|à¤¯à¤¾à¤š|à¤šà¤¾ | à¤µ |à¤£à¥à¤¯|à¤ªà¥à¤°|à¤•à¤¾à¤°|à¤¾à¤šà¤¾| à¤ªà¥|à¤§à¤¿à¤•|à¤¿à¤•à¤¾| à¤…à¤§|à¤…à¤§à¤¿|à¤šà¥à¤¯|à¤¾à¤° |à¤†à¤¹à¥‡| à¤†à¤¹|à¤¾ à¤…|à¤¹à¥‡ | à¤¸à¥|à¥à¤°à¤¤|à¥à¤¯à¥‡|à¤¾ à¤•|à¤¸à¥à¤µ| à¤•à¤°|à¥à¤µà¤¾|à¤¤à¤¾ |à¤¾à¤¸ |à¤¾ à¤¸|à¤¾ à¤µ|à¤¤à¥à¤°| à¤¤à¥|à¤µà¤¾ |à¤¾à¤‚à¤š|à¤¯à¤¾à¤‚|à¤¿à¤• |à¤®à¤¾à¤¨| à¤¯à¤¾|à¥à¤¯ | à¤•à¤¾| à¤…à¤¸|à¤°à¤¤à¥|à¤·à¥à¤Ÿ|à¤°à¥à¤¯|à¤¯à¥‡à¤•|à¤²à¥à¤¯|à¤° à¤†|à¤¾à¤¹à¤¿|à¤•à¥à¤·| à¤•à¥‹|à¤¾à¤®à¤¾|à¤•à¥‹à¤£| à¤¸à¤‚|à¤¾à¤šà¥|à¤¾à¤¤ |à¤¾ à¤¨| à¤°à¤¾|à¤‚à¤¤à¥|à¥‚à¤¨ |à¥‡à¤•à¤¾| à¤¸à¤¾|à¤°à¤¾à¤·|à¤¾à¤·à¥|à¤šà¥‡ |à¥à¤Ÿà¥|à¤Ÿà¥à¤°|à¤¤à¤‚à¤¤| à¤®à¤¾|à¤¨à¥‡ |à¤•à¤¿à¤‚| à¤•à¤¿|à¤µà¥à¤¯|à¤µà¤¾à¤¤|à¥‡ à¤¸|à¤•à¤°à¤£|à¤‚à¤µà¤¾|à¤¿à¤‚à¤µ|à¤¯à¥‡ |à¤•à¥à¤¤| à¤¸à¤®|à¤¾ à¤ª|à¤¨à¤¾ | à¤®à¤¿|à¤•à¤¾à¤¸|à¤¾à¤¤à¤‚|à¥à¤°à¥|à¤°à¥à¤µ|à¤¸à¤®à¤¾|à¤®à¤¿à¤³| à¤œà¤¾|à¥‡ à¤ª|à¤µ à¤¸|à¤¯à¤¾à¤¸|à¥‹à¤£à¤¤|à¤°à¤£à¥|à¤•à¤¾à¤®|à¥€à¤¯ |à¤¾ à¤†| à¤¦à¥‡|à¥‡ à¤•|à¤¾à¤‚à¤¨|à¤¹à¤¿ |à¤°à¤¾à¤‚| à¤µà¥|à¥à¤¯à¤•|à¤¾ à¤®|à¤¿à¤³à¤£|à¤¹à¥€ | à¤ªà¤¾|à¥à¤·à¤£|à¤¾à¤°à¥|à¤¾à¤¨ |à¥‡ à¤…| à¤†à¤ª| à¤µà¤¿|à¤³à¤£à¥|à¤¾à¤¹à¥€|à¤šà¥€ |à¥‡ à¤µ|à¥à¤°à¤¾|à¤®à¤¾ |à¤²à¥€ |à¤‚à¤šà¥|à¤¾à¤°à¤¾|à¤¾ à¤¦| à¤†à¤£| à¤¨à¤¿|à¤£à¥‡ |à¤¦à¥à¤§| à¤¨à¤¯|à¤²à¤¾ |à¤¾ à¤¹|à¤¨à¤¯à¥‡| à¤¸à¤°|à¤¸à¤°à¥|à¥à¤°à¥€|à¤¬à¤‚à¤§|à¥€ à¤ª|à¤†à¤ªà¤²|à¤²à¥‡ |à¥€à¤² |à¤®à¤¾à¤œ| à¤¹à¥‹|à¥à¤¤ |à¤¤ à¤•|à¤¾à¤šà¥‡|à¥à¤µ |à¤·à¤£ |à¤‚à¤¨à¤¾|à¤²à¥‡à¤²|à¥€ à¤…|à¤¦à¥‡à¤¶|à¤†à¤£à¤¿|à¤£à¤¿ |à¤§à¥à¤¯| à¤¶à¤¿|à¥€ à¤¸|à¥‡ à¤œ|à¤¶à¤¿à¤•|à¤°à¥€à¤¯|à¤¾à¤¨à¤µ|à¤ªà¤¾à¤¹|à¤¹à¤¿à¤œ|à¤¿à¤œà¥‡|à¤œà¥‡ |à¤• à¤¸|à¤¯à¤•à¥|à¤¨ à¤•|à¤µ à¤¤|à¤¾ à¤œ|à¤¯à¤¾à¤¤|à¤ªà¤²à¥|à¤¨à¥à¤¯|à¤µà¥€ |à¤¸à¥à¤¥|à¤œà¥à¤¯| à¤œà¥|à¥‡ à¤†|à¤°à¤•à¥|à¤¤ à¤¸|à¤¿à¤•à¥|à¤‚à¤¬à¤‚|à¤¸à¤‚à¤¬| à¤•à¥‡|à¤• à¤µ|à¤•à¥‡à¤²|à¤…à¤¸à¤²|à¤¯ à¤…|à¤¯ à¤•|à¤¤ à¤µ|à¥€à¤¤ |à¤£à¤¤à¥|à¤¤à¥à¤µ|à¤¾à¤¨à¥‡| à¤‰à¤ª|à¥à¤µà¤¤|à¤­à¤¾à¤µ|à¥‡ à¤¤|à¤•à¤°à¤¤|à¤¯à¤¾à¤¹|à¤°à¤¤à¤¾|à¤¿à¤·à¥|à¤µ à¤®|à¤•à¤¾à¤‚|à¤¸à¤¾à¤®|à¤°à¤¤à¤¿|à¤¸à¤¾à¤°|à¤‚à¤šà¤¾|à¤° à¤µ|à¤• à¤†|à¤¯à¤¾à¤¯|à¤¾à¤¸à¤¾|à¤¸à¤¾à¤ |à¤¾à¤ à¥€|à¥à¤¤à¥€|à¤ à¥€ |à¥‡à¤£à¥|à¤°à¥à¤¥|à¥€à¤¨à¥‡|à¥‡ à¤¯|à¤œà¤¾à¤¹|à¥‹à¤£à¤¾|à¤¸à¤‚à¤°|à¤¾à¤¯à¤¦|à¤šà¥à¤›|à¤¸ à¤¸|à¤‚à¤°à¤•|à¤¤à¥€à¤²|à¥€ à¤µ|à¤¤ à¤†|à¥€ à¤†|à¤‚à¤§à¤¾|à¥‡à¤¶à¤¾|à¤¿à¤¤ | à¤…à¤¶|à¤¹à¥€à¤°| à¤¹à¤•|à¤¹à¤•à¥|à¤•à¥à¤•|à¤¯ à¤µ|à¤¶à¤¾ |à¤µ à¤†|à¤¤à¥€à¤¨|à¤£ à¤®|à¥‚à¤°à¥|à¥‡à¤²à¥|à¤¦à¥à¤¯|à¥‡à¤²à¥‡|à¤¾à¤‚à¤¤|à¤¾ à¤¯|à¤¾ à¤¬|à¥€ à¤®|à¤‚à¤šà¥‡|à¤¯à¤¾à¤µ|à¤¦à¥‡à¤£|à¤•à¥ƒà¤¤|à¤¾à¤°à¤£|à¥‡à¤¤ |à¤¿à¤µà¤¾|à¤µà¤¸à¥|à¤¸à¥à¤¤|à¤¾à¤šà¥€|à¤¨à¤µà¥€| à¤…à¤°|à¤¥à¤µà¤¾|à¤…à¤¥à¤µ|à¤¾ à¤¤| à¤…à¤¥|à¤…à¤°à¥|à¤¤à¥€ |à¤ªà¥‚à¤°|à¤‡à¤¤à¤°|à¤°à¥à¤£|à¥€ à¤•|à¤¯à¤¤à¥| à¤‡à¤¤| à¤¶à¤¾|à¤°à¤•à¤¾|à¤¤à¤¿à¤·|à¤£ à¤¸|à¤¤à¤¿à¤•|à¥à¤°à¤•|à¥à¤§ |à¤°à¤£à¤¾| à¤†à¤²|à¥‡à¤² |à¤¾à¤œà¤¿| à¤¨à¥|à¤§à¤¾à¤¤|à¤°à¥‚à¤¨|à¤¶à¥à¤°|à¤…à¤¸à¥‡|à¤·à¥à¤ |à¥à¤•à¥|à¥‡à¤¶ |à¤¤à¥‹ |à¤œà¤¿à¤•|à¥‡ à¤®",
                        mai: "à¤¾à¤• |à¤ªà¥à¤°|à¤•à¤¾à¤°|à¤¿à¤•à¤¾|à¤§à¤¿à¤•|à¤¾à¤° | à¤†Ê¼|à¤†Ê¼ |à¥à¤°à¤¤|à¥‡à¤ |à¤• à¤…|à¥à¤¯à¤•|à¤¿à¤• |à¥à¤¤à¤¿| à¤…à¤§|à¤µà¥à¤¯|à¤…à¤§à¤¿|à¤• à¤¸| à¤ªà¥| à¤µà¥|à¤•à¥à¤¤|à¤•à¥‡à¤|à¤¯à¤•à¥|à¤¤à¤¿à¤•|à¤¹à¤¿ | à¤¸à¥|à¤¨à¥à¤¤|à¤• à¤µ|à¤®à¥‡ |à¤¬à¤¾à¤•| à¤¸à¤®|à¤®à¤¾à¤¨|à¤¤à¥à¤¯|à¤•à¥à¤·|à¤›à¥ˆà¤•| à¤›à¥ˆ|à¥‡à¤• |à¤¸à¥à¤µ|à¤°à¤¤à¥|à¤¤à¥à¤°| à¤…à¤ª|à¥à¤¯à¥‡|à¤·à¥à¤Ÿ|à¤¯à¥‡à¤•|à¤° à¤›|à¤¸à¤ |à¤¿à¤¤ |à¥ˆà¤•à¥¤| à¤à¤¹| à¤µà¤¿|à¤µà¤¾ | à¤œà¤¾|à¥à¤¤à¥|à¤¿à¤•à¥‡|à¤¤à¤¿ |à¤Ÿà¥à¤°|à¤¾à¤·à¥| à¤¹à¥‹|à¥à¤Ÿà¥|à¤°à¤¾à¤·| à¤…à¤¨| à¤°à¤¾| à¤¸à¤¾|à¥à¤¯ |à¤…à¤ªà¤¨| à¤•à¤°|à¤•à¥‹à¤¨|à¥¤à¤ªà¥|à¥à¤µà¤¤|à¤• à¤†|à¤¤à¤¨à¥|à¤…à¤›à¤¿| à¤…à¤›|à¤µà¤¤à¤¨| à¤•à¥‹|à¤¥à¤¾ | à¤µà¤¾|à¤¤à¤¾à¤•| à¤ªà¤°|à¤¾à¤°à¥|à¤à¤¹à¤¿|à¤¨à¤¹à¤¿|à¤ªà¤¨ |à¤¾ à¤†|à¤°à¤¤à¤¾|à¤¸à¤®à¤¾| à¤®à¤¾|à¥à¤°à¥€|à¤¨à¥‹ | à¤¨à¤¹|à¥à¤·à¤¾|à¤¦à¥‡à¤¶|à¤• à¤ª| à¤¦à¥‡| à¤•à¤¾| à¤•à¤|à¤°à¤• | à¤¨à¤¿| à¤¸à¤‚|à¤¨à¥à¤¯|à¤¿ à¤•|à¥‹à¤¨à¥‹|à¤›à¤¿ |à¥à¤¤ |à¤¾à¤°à¤•|à¥à¤µà¤¾|à¤¾ à¤¸|à¤¾à¤¨à¥|à¤² à¤œ|à¤¤à¤¥à¤¾| à¤¤à¤¥|à¤¾à¤¨ |à¤•à¤°à¤¬|à¤ à¤•| à¤† |à¤° à¤†|à¥€à¤¯ |à¤¤à¤¾ |à¤• à¤¹|à¤µà¤¾à¤°| à¤œà¥‡|à¥à¤¯à¤¾|à¤¿à¤µà¤¾|à¤œà¤¾à¤|à¤¨à¤¾ |à¤“à¤° |à¤¾à¤¨à¤µ|à¤¾ à¤ª|à¤ à¤…|à¤…à¤¨à¥|à¤¾à¤°à¤£|à¤®à¤¾à¤œ|à¤¸à¥à¤¥|à¤˜à¥‹à¤·| à¤†à¤“|à¥à¤¤à¤°| à¤à¤•|à¤¸à¤¾à¤®|à¤°à¥à¤µ|à¤†à¤“à¤°|à¤§à¤¾à¤°|à¤¤ à¤•|à¤ªà¤°à¤¿|à¤°à¥€à¤¯|à¥à¤°à¤¸|à¤•à¤à¤²|à¤¾à¤®à¤¾|à¥à¤°à¤¾|à¤°à¤£ |à¤ à¤¸| à¤¸à¤­|à¤¦à¥à¤§|à¤¸à¥à¤¤|à¤à¤¬à¤¾|à¤ªà¥‚à¤°|Ê¼ à¤¸|à¤¾ à¤…| à¤˜à¥‹|à¤·à¤¾ |à¤¾à¤¹à¤¿|Ê¼ à¤…|à¤•à¥¤à¤ª|à¤¯à¤• |à¤¨à¤• |à¤°à¤•à¥|à¤°à¤¬à¤¾|à¤šà¤¿à¤¤|à¤¿à¤•à¥|à¤• à¤œ|à¥‹à¤·à¤£|à¤•à¤° |à¤° à¤ª|à¥‡à¤¤à¥|à¤¹à¥‡à¤¤|à¤¶à¤¿à¤•|à¤à¤² |à¤¸à¤®à¥| à¤‰à¤ª|à¤¾à¤§à¤¿|à¤à¤¹à¤¨|à¤¹à¤¨ |à¤¤ à¤…|à¤¤à¥ |à¥‚à¤°à¥|à¤·à¤£à¤¾| à¤¹à¥‡|à¤¿à¤®à¥‡| à¤…à¤µ|à¥‡à¤² |à¤¸à¤­ |à¥‡ à¤¸|à¤¿ à¤œ|à¤¨à¤¿à¤°| à¤¶à¤¿|à¤¿à¤°à¥|à¤°à¤¤à¤¿|à¤¹à¥‹à¤|à¤…à¤¨à¥|à¤° à¤…|à¤œà¤¾à¤¹|à¤• à¤•|à¤¹à¥‹ |à¥à¤§ |à¤°à¥‚à¤ª|à¤µà¤• |à¤šà¥à¤›|à¤ªà¥à¤¤|à¤ à¤| à¤¸à¤•|à¤­à¤¾à¤µ|à¤• à¤‰|à¤¾à¤ªà¥|à¤¸à¤­à¤•|à¤¤ à¤†|à¤¿ à¤†|à¤°à¥à¤£|à¤¤ à¤¸|à¥à¤°à¤•|à¤à¤¤à¥¤|à¤°à¥à¤¯|à¤¤ à¤¹|à¤œà¤¿à¤•| à¤œà¤¨|à¤¾à¤œà¤¿|à¤šà¤¾à¤°|à¤£ à¤¸|à¥ˆà¤• |à¤°à¤¾ |à¤¿ à¤¸|à¤¾à¤°à¤¾|à¤°à¥€ |à¤¿à¤¶à¥|à¤µà¤¾à¤§|à¤¾ à¤µ|à¤¾à¤à¤¤|à¤¨ à¤…| à¤“ |à¤¹à¥ |à¤•à¤¾à¤¨|à¤œà¥‡ |à¤¨ à¤µ|à¤¿à¤¸à¤|à¤°à¤¸à¤‚|à¤µà¤¿à¤µ|à¤•à¥ƒà¤¤|à¤¿ à¤˜|à¤• à¤¬| à¤­à¤¾|à¤‰à¤¦à¥|à¥‹à¤à¤¤| à¤‰à¤¦|à¤°à¤¾à¤ª|Ê¼ à¤ª|à¤¶à¥à¤¯|à¤¨ à¤ª|à¥à¤£ |à¤¯ à¤†|à¤¦à¥à¤µ| à¤¦à¥|à¤¿à¤·à¥| à¤¸à¤¹|à¤¿ à¤¦|à¤§à¤• | à¤¬à¥€|à¥‡à¤¶ | à¤ªà¥‚|à¤·à¤¾à¤•|à¤¨à¤µà¤¾|à¤¾à¤¸ |à¤¾à¤®à¥‡|à¤ à¤¸|à¤œà¥‡à¤| à¤•à¤¿|à¤•à¤¿ |à¤• à¤²| à¤­à¥‡|à¤ªà¤° |à¤¯à¤¤à¤¾| à¤°à¥‚|à¤“ à¤µ|à¤¾à¤•à¥‡| à¤ªà¤|à¤•à¥‡à¤“|à¥‡à¤“ |à¤ªà¤à¤¬|à¤°à¤¾à¤œ| à¤…à¤¥|à¤…à¤¥à¤µ|à¤¥à¤µà¤¾|à¤¤à¥à¤¤|à¤µà¤¿à¤¶|à¥à¤¥à¤¿|à¤¯ à¤ª|à¤¾ à¤•|à¤¨ à¤•|à¤µà¤¾à¤¸|à¤°à¤¿à¤µ|à¤• à¤°| à¤¦à¥‹|à¤¸à¤¾à¤°",
                        bho: " à¤•à¥‡|à¤•à¥‡ |à¤¾à¤° |à¥‡ à¤•|à¤•à¤¾à¤°|à¤§à¤¿à¤•|à¤¿à¤•à¤¾|à¤“à¤° |à¤†à¤“à¤°| à¤†à¤“| à¤…à¤§|à¤…à¤§à¤¿|à¥‡ à¤¸|à¤¾ à¤•|à¥‡ à¤…| à¤¹à¥‹| à¤¸à¤‚|à¤° à¤•|à¤° à¤¸|à¥‡à¤‚ | à¤®à¥‡|à¤®à¥‡à¤‚|à¤¿à¤• | à¤•à¤°|à¤¾ à¤¸|à¤° à¤¹| à¤¸à¥‡|à¤¸à¥‡ |à¤°à¤¾ |à¤®à¤¾à¤¨| à¤¸à¤®|à¤¨ à¤•|à¤•à¥à¤·|à¥‡ à¤¬|à¤¨à¥‹ | à¤šà¤¾|à¤µà¥‡ |à¤¤à¤¾ |à¤šà¤¾à¤¹|à¤·à¥à¤Ÿ| à¤°à¤¾|à¤¤à¤¿ |à¥à¤°à¤¾|à¤–à¥‡ |à¤°à¤¾à¤·|à¤¾à¤·à¥|à¤ªà¥à¤°| à¤¸à¤¾| à¤•à¤¾|à¤Ÿà¥à¤°|à¥‡ à¤†| à¤ªà¥| à¤¸à¤•| à¤®à¤¾|à¥à¤Ÿà¥| à¤¸à¥|à¤¹à¥‹à¤–| à¤¬à¤¾|à¤•à¤°à¥‡|à¤¿ à¤•|à¥Œà¤¨à¥‹|à¤¤ à¤•|à¤¥à¤¾ |à¤•à¥Œà¤¨|à¤ªà¤¨ | à¤œà¤¾| à¤•à¥Œ|à¤°à¥‡ |à¤¾à¤¤à¤¿|à¤²à¤¾ | à¤“à¤•|à¥‡à¤²à¤¾|à¤¤à¤¥à¤¾|à¤†à¤ªà¤¨|à¥à¤¤ | à¤†à¤ª|à¤•à¤° |à¤¹à¤µà¥‡|à¤° à¤®| à¤¹à¤µ| à¤¤à¤¥|à¤¸à¤¬à¤¹|à¤° à¤†|à¥‹à¤–à¥‡| à¤¹à¥¤|à¤¿à¤° |à¥‡ à¤“|à¤•à¥‡à¤²|à¤¸à¤•à¥‡|à¤¹à¥‡ | à¤”à¤°|à¤¹à¥€ |à¤¤à¤¿à¤°|à¤¤à¥à¤°|à¤œà¤¾ |à¤¨à¤¾ |à¤¬à¤¹à¤¿|à¥¤à¤¸à¤¬|à¥‡ à¤š| à¤–à¤¾|à¥‡ à¤®| à¤ªà¤°|à¤–à¤¾à¤¤|à¤¾à¤¨ |à¤° à¤¬|à¤¨ à¤¸|à¤¾à¤µà¥‡| à¤²à¥‹|à¤·à¤¾ |à¤¾à¤¹à¥‡|à¥€ à¤•|à¤“à¤•à¤°|à¤¾ à¤†|à¤®à¤¾à¤œ|à¤¿à¤¤ |à¥‡ à¤œ|à¤² à¤œ|à¤®à¤¿à¤²|à¤¸à¤‚à¤—|à¥à¤·à¤¾|à¤‚ à¤•| à¤¸à¤¬|à¤¾ à¤ª|à¤”à¤° |à¤°à¤•à¥|à¤µà¥‡à¥¤|à¤¿à¤‚ |à¥‡ à¤¹|à¤‚à¤¤à¥|à¤¾à¤œ |à¤¸à¥à¤µ|à¤¹à¤¿à¤‚|à¤¨à¤‡à¤–|à¤•à¤¾à¤¨|à¥‹ à¤¸| à¤œà¥‡|à¤¸à¤®à¤¾|à¤• à¤¸|à¤²à¥‹à¤—|à¤•à¤°à¤¾|à¤•à¥à¤¤|à¥à¤°à¤¤|à¤²à¤¾à¥¤| à¤¨à¤‡|à¥‡à¥¤ |à¤¾à¤¨à¤µ|à¤¿à¤¯à¤¾|à¤¹à¥ |à¤‡à¤–à¥‡|à¥à¤° |à¤°à¤¤à¤¾|à¥à¤µà¤¤|à¤¾à¤¨à¥‚|à¥‡ à¤¨|à¤¾à¤® |à¤¨à¥‚à¤¨|à¤¾à¤¹à¥€|à¤µà¤¤à¤‚|à¤ªà¤° |à¥€ à¤¸| à¤“ |à¥‡ à¤‰|à¥‡ à¤µ|à¥à¤°à¥€|à¤°à¥€à¤¯|à¤¸à¥à¤¥|à¤¤à¤‚à¤¤|à¤¦à¥€ |à¥€à¤¯ |à¥‡ à¤¤|à¤° à¤…|à¤° à¤ª|à¥à¤¯ |à¤¸à¤¾à¤®|à¤¬à¤¾à¥¤| à¤†à¤¦|à¥‚à¤¨ |à¥¤ à¤¸|à¤µà¥à¤¯|à¤¾à¥¤à¤¸|à¤¸à¤­à¥‡|à¤­à¥‡ |à¤¯à¤¾ | à¤¦à¥‡|à¤¾ à¤®|à¥‡ à¤–| à¤µà¤¿| à¤¸à¥|à¤•à¥‡à¤¹|à¤ªà¥à¤¤|à¤¯à¥‹à¤—|à¥ à¤•|à¥‹à¤— |à¥‡ à¤¦|à¤šà¤¾à¤°|à¤¾à¤¦à¥€|à¤¾à¤ªà¥| à¤¦à¥‹| à¤¯à¤¾|à¤°à¤¾à¤ª|à¤² à¤¹|à¤ªà¥‚à¤°| à¤®à¤¿|à¤¤à¤¿à¤•|à¤–à¤² |à¤¯à¤¤à¤¾|à¥à¤¤à¤¿| à¤¬à¤¿|à¤ à¤•|à¤†à¤¦à¤¿|à¤¦à¤¿à¤®| à¤¹à¥€|à¤¹à¤¿ |à¤®à¥€ | à¤¨à¤¿|à¤° à¤¨| à¤‡ |à¥‡à¤¹à¥|à¤¨à¤µà¤¾|à¤¾ à¤¹|à¤°à¥€ |à¤²à¥‡ | à¤ªà¤¾|à¤¾à¤§à¤¿| à¤¸à¤¹| à¤‰à¤ª|à¥à¤¯à¤¾| à¤œà¤°|à¤·à¤£ | à¤¸à¤­|à¤¿à¤®à¥€|à¤¦à¥‡à¤¶|à¥‡ à¤ª|à¤® à¤•|à¤œà¥‡ |à¤¾à¤µ | à¤…à¤ª|à¤¶à¤¿à¤•|à¤¾à¤œà¤¿|à¤œà¤¾à¤¦|à¤œà¤¿à¤•|à¥‡ à¤­|à¤• à¤†|à¥à¤¤à¤°|à¤¿à¤•à¥|à¤¿ à¤®|à¥‡à¤•à¤°|à¥à¤•à¥|à¤µà¤¾à¤§|à¤—à¤ à¤¨| à¤µà¥|à¤¨à¤¿à¤¯|à¤ à¤¨ |à¥¤à¤•à¥‡|à¤¾à¤®à¤¾|à¤°à¥‹ | à¤œà¥€|à¤¯ à¤•|à¤¨ à¤®|à¥‡ à¤²|à¤¨ à¤¹|à¤¾à¤¸ |à¥‡à¤¶ | à¤¶à¤¾|à¤˜à¥‹à¤·|à¤‚à¤—à¤ |à¤¿à¤² | à¤˜à¥‹|à¥à¤·à¤£| à¤ªà¥‚|à¥‡ à¤°|à¤‚à¤°à¤•|à¤¸à¤‚à¤°|à¤‰à¤ªà¤¯|à¤ªà¤¯à¥‹|à¤¹à¥‹ |à¤¬à¤¾ |à¥€ à¤¬|à¥à¤® |à¤¸à¤¬ |à¤¦à¥‹à¤¸|à¤¾à¥¤ | à¤†à¤œ|à¤¸à¤¾à¤¥| à¤¶à¤¿|à¤†à¤œà¤¾| à¤­à¥€| à¤‰à¤š|à¤¨à¥‡ |à¤šà¤¿à¤¤| à¤…à¤‚|à¤° à¤µ|à¤œ à¤•|à¤¨ à¤†| à¤²à¥‡|à¤¨à¤¿ |à¤¾à¤°à¥|à¤•à¤¿ |à¤¯à¤¾à¤¹|à¥à¤¥à¤¿",
                        nep: "à¤•à¥‹ | à¤° |à¤•à¤¾à¤°|à¤ªà¥à¤°|à¤¾à¤° |à¤¨à¥‡ |à¤¿à¤•à¤¾|à¤•à¥à¤¤|à¤§à¤¿à¤•|à¥à¤¯à¤•| à¤—à¤°|à¤µà¥à¤¯|à¥à¤°à¤¤| à¤ªà¥|à¤…à¤§à¤¿|à¥à¤¤à¤¿| à¤…à¤§| à¤µà¥|à¤¯à¤•à¥|à¤®à¤¾ |à¤¿à¤• |à¤¤à¥à¤¯|à¤¾à¤ˆ |à¤²à¤¾à¤ˆ|à¤¨à¥à¤¤|à¤®à¤¾à¤¨| à¤¸à¤®|à¤¤à¥à¤°|à¤—à¤°à¥|à¤°à¥à¤¨|à¤• à¤µ| à¤µà¤¾|à¥à¤¨à¥‡|à¤µà¤¾ | à¤¸à¥|à¤°à¤¤à¥|à¤° à¤¸|à¥à¤¯à¥‡|à¤¤à¤¿à¤²|à¤¯à¥‡à¤•|à¥‡à¤• |à¤› à¥¤|à¥‹ à¤¸|à¤¾ à¤¸|à¤¹à¤°à¥‚| à¤µà¤¿|à¤•à¥à¤·|à¥à¤¤à¥|à¤¿à¤²à¤¾| à¥¤ |à¤¸à¥à¤µ|à¤¹à¥à¤¨|à¤¤à¤¿ | à¤¹à¥|à¤²à¥‡ | à¤°à¤¾| à¤®à¤¾|à¤·à¥à¤Ÿ|à¤¸à¤®à¤¾|à¤µà¤¤à¤¨|à¤¤à¤¨à¥| à¤› |à¤° à¤›| à¤¸à¤‚|à¥à¤Ÿà¥|à¤Ÿà¥à¤°|à¤¾à¤·à¥|à¥‹ à¤…|à¤°à¤¾à¤·|à¥à¤µà¤¤|à¥à¤¨à¥‡|à¤¨à¥‡à¤›|à¤¹à¤°à¥|à¤¾à¤¨ |à¤¤à¤¾ |à¥‡ à¤…|à¥à¤° | à¤•à¤¾|à¤¿à¤¨à¥‡|à¤¾à¤•à¥‹|à¤—à¤°à¤¿|à¥‡ à¤›|à¤¨à¤¾ | à¤…à¤¨| à¤¨à¤¿|à¤°à¤¤à¤¾|à¤¨à¥ˆ | à¤¸à¤¾|à¤¿à¤¤ |à¤¤à¤¿à¤•|à¤• à¤¸|à¤° à¤°|à¤°à¥‚ |à¤¾ à¤…|à¤¥à¤¾ |à¤¸à¥à¤¤|à¤•à¥à¤¨|à¤¾ à¤°|à¥à¤¨à¥ˆ| à¤›à¥ˆ|à¥à¤¤ |à¤›à¥ˆà¤¨|à¤¾ à¤ª|à¤¾à¤°à¥|à¤µà¤¾à¤°|à¤¾ à¤µ| à¤ªà¤°|à¤¤à¤¥à¤¾| à¤¤à¤¥|à¤•à¤¾ |à¥à¤¯à¤¾|à¤à¤•à¥‹|à¤°à¥ |à¥à¤·à¤¾|à¤®à¤¾à¤œ|à¤°à¤•à¥|à¤ªà¤°à¤¿|à¤¦à¥à¤§|à¥¤ à¤ª| à¤²à¤¾|à¤¸à¤•à¥‹|à¤¾à¤®à¤¾| à¤¯à¤¸|à¤¾à¤¹à¤°|à¥‡à¤› |à¤§à¤¾à¤°|à¥à¤°à¤¾|à¥‹ à¤ª|à¤¨à¤¿ |à¤¦à¥‡à¤¶|à¤­à¤¾à¤µ|à¤¿à¤µà¤¾|à¥à¤¯ |à¤° à¤¹|à¤° à¤µ|à¤° à¤®|à¤¸à¤¬à¥ˆ|à¤¨ à¤…|à¥‡ à¤°|à¤¨ à¤¸|à¤°à¤•à¥‹|à¤…à¤¨à¥|à¤¤à¤¾à¤•|à¤‚à¤°à¤•|à¤¸à¤‚à¤°|à¥à¤µà¤¾| à¤¤à¥|à¤¸à¤®à¥|à¤°à¥€ |à¥‹ à¤µ|à¤¾ à¤­|à¤°à¤¹à¤°| à¤•à¥|à¥à¤°à¤¿|à¤¤ à¤°|à¤°à¤¿à¤¨|à¤¶à¥à¤¯|à¤ªà¤¨à¤¿|à¥ˆ à¤µ|à¤¯à¤¸à¥|à¤¾à¤°à¤¾|à¤¾à¤¨à¤µ| à¤¶à¤¿|à¤¾ à¤¤|à¤²à¤¾à¤—|à¤°à¤¾ |à¤¶à¤¿à¤•| à¤¸à¤¬|à¤¾à¤‰à¤¨|à¤¿à¤•à¥|à¥à¤¨ |à¤¾à¤°à¤•|à¤¾ à¤¨|à¤°à¤¿à¤¯|à¥à¤¯à¤¸|à¤¦à¥à¤µ|à¤°à¤¤à¤¿|à¤šà¤¾à¤°| à¤¸à¤¹|à¥à¤·à¤£| à¤¸à¥|à¤¾à¤°à¤®|à¥à¤•à¥|à¥à¤¦à¥|à¤¸à¤¾à¤®|à¤·à¤¾ |à¥ˆà¤¨ | à¤…à¤ª| à¤­à¤|à¤¬à¤¾à¤Ÿ|à¥à¤¨ | à¤‰à¤ª|à¤¾à¤¨à¥|à¥‹ à¤†|à¥à¤¤à¤°|à¤¿à¤¯ |à¤•à¤¾à¤¨|à¤¿ à¤°|à¤°à¥‚à¤•|à¤¦à¥à¤¦|à¤° à¤ª|à¤¾à¤µ |à¥‹ à¤²|à¤¤à¥‹ | à¤ªà¤¨|à¥ˆà¤¨à¥¤| à¤†à¤µ|à¤¾ à¤—|à¥¤à¤ªà¥|à¤¬à¥ˆ |à¥‚à¤°à¥|à¤¿à¤à¤•|à¤° à¤¤|à¤¨à¤¿à¤œ|à¤¤à¥à¤ª| à¤­à¥‡|à¤œà¤¿à¤•|à¥‡à¤›à¥¤|à¤¿à¤•à¥‹|à¥à¤¤à¥‹|à¤µà¤¾à¤¹|à¤¤ à¤¸|à¤¾à¤Ÿ | à¤…à¤°|à¤¾à¤œà¤¿|à¥à¤§ | à¤‰à¤¸|à¤°à¤®à¤¾|à¤¾à¤¤à¥|à¤°à¥à¤¯|à¤¨à¤•à¥‹|à¤¾à¤¯ |à¤œà¤•à¥‹|à¤¿à¤¤à¥|à¤¾à¤—à¤¿| à¤…à¤­|à¤¨ à¤—|à¤—à¤¿ |à¤¾ à¤®| à¤†à¤§|à¤¸à¥à¤¥| à¤ªà¤¾|à¤¾à¤°à¤¹|à¤˜à¥‹à¤·|à¤¤à¥à¤µ|à¤¯à¤¤à¤¾|à¤¾ à¤•|à¤°à¥à¤¦| à¤®à¤¤|à¤µà¤¿à¤§| à¤¸à¤•|à¤¸à¤¾à¤°|à¤ªà¤°à¤¾|à¤¯à¥à¤•|à¤°à¤¾à¤§| à¤˜à¥‹|à¤£à¤•à¥‹|à¤…à¤ªà¤°|à¥‡ à¤¸|à¤¾à¤°à¥€|à¥¤à¤•à¥| à¤¦à¤¿| à¤œà¤¨|à¤­à¥‡à¤¦|à¤°à¤¿à¤µ|à¤‰à¤¸à¤•|à¤• à¤°|à¤° à¤…|à¤¿ à¤¸|à¤¾à¤¨à¥|à¥‹ à¤¹|à¤°à¥à¤¦| à¤›à¥¤|à¥‚à¤•à¥‹|à¤°à¤•à¤¾|à¤¨à¤®à¤¾| à¤­à¤¨|à¤°à¥à¤®|à¤¹à¤¿à¤¤|à¤ªà¥‚à¤°|à¤¨à¥à¤¯|à¤• à¤…|à¤¾ à¤¬|à¥‹ à¤­|à¤°à¤¾à¤œ|à¤…à¤¨à¥|à¥‹à¤·à¤£|à¤·à¤£à¤¾|à¤¯ à¤°| à¤®à¤¨| à¤¬à¤¿|à¥à¤§à¤¾| à¤¦à¥‡|à¤¨à¤¿à¤°|à¤¤à¤¾à¤¹|à¤° à¤‰|à¤¯à¤¸ |à¤‰à¤¨à¥‡|à¤°à¤£ |à¤µà¤¿à¤•",
                        mag: "à¤•à¥‡ | à¤•à¥‡|à¤¾à¤° | à¤¹à¤ˆ|à¤•à¤¾à¤°|à¤¿à¤•à¤¾|à¤§à¤¿à¤•|à¤¹à¤ˆà¥¤| à¤”à¤°|à¥‡ à¤…|à¤”à¤° |à¤…à¤§à¤¿| à¤…à¤§|à¤¾ à¤•|à¤° à¤¹|à¥‡ à¤¸|à¥‡ à¤•|à¤¸à¤¬ |à¥‡à¤‚ |à¤®à¥‡à¤‚| à¤®à¥‡| à¤•à¤°|à¤¸à¥‡ | à¤¸à¤®|à¤¥à¤¾ |à¤¤à¤¥à¤¾| à¤¹à¥‹| à¤¸à¥‡|à¤° à¤¸|à¤° à¤•|à¤¿à¤• | à¤¤à¤¥| à¤¸à¤¬| à¤¸à¤‚|à¤•à¥à¤·|à¤®à¤¾à¤¨|à¤¬ à¤•|à¤¾ à¤¸|à¤¨à¤¾ | à¤¸à¤¾|à¤ªà¥à¤°|à¤•à¤° | à¤ªà¥| à¤­à¥€|à¤¤à¤¿ |à¤ˆà¥¤ |à¤°à¤¾ |à¤­à¥€ |à¥à¤°à¤¾| à¤…à¤ª| à¤•à¤¾|à¤¤ à¤•|à¤¯à¤¾ |à¤…à¤ªà¤¨| à¤•à¥‹|à¤Ÿà¥à¤°|à¤• à¤¹|à¤ªà¤¨ | à¤ªà¤°| à¤®à¤¾| à¤°à¤¾| à¤¯à¤¾|à¥€ à¤•|à¤¤à¤¾ | à¤¸à¥| à¤“à¤•|à¤·à¥à¤Ÿ|à¤¹à¥€ |à¤¾à¤¨ |à¥à¤¤ |à¤•à¤°à¥‡|à¥à¤°à¤¤|à¤¤à¥à¤°|à¤¾à¤·à¥|à¥à¤Ÿà¥| à¤¸à¤•|à¤¨ à¤•|à¤°à¤¾à¤·|à¤“à¤•à¤°|à¥¤à¤¸à¤¬|à¤°à¥‡ |à¥‡à¤² |à¤¹à¤ˆ |à¥‡ à¤¬| à¤œà¤¾|à¤ˆà¥¤à¤¸|à¤°à¤•à¥| à¤²à¥‡|à¤‚à¤¤à¥|à¥‡ à¤®| à¤¹à¥€|à¤¸à¤• |à¤¨à¥‹ |à¤° à¤®| à¤¨à¤¾|à¤¸à¥à¤µ|à¤¾à¤® |à¤¹à¥‹à¤|à¤° à¤”|à¤¦à¥€ |à¤µà¥à¤¯|à¤•à¥à¤¤|à¤¾ à¤ª|à¤µà¤¤à¤‚|à¤¾à¤¨à¤µ|à¤¿à¤¤ | à¤¶à¤¾|à¤¾à¤¦à¥€|à¤·à¤¾ |à¤®à¤¾à¤œ| à¤‡ |à¤¤à¤‚à¤¤|à¤ªà¤° |à¥€ à¤¸|à¥à¤µà¤¤|à¥à¤¯ |à¥‡ à¤‰|à¥à¤° |à¥‹à¤— |à¤µà¥‡ |à¥à¤·à¤¾|à¥‡ à¤­|à¥‡ à¤²|à¤¨ à¤¸|à¤•à¤°à¤¾|à¤•à¤¾à¤¨| à¤à¤•|à¤² à¤œ|à¤® à¤•|à¤²à¥‡à¤²|à¥à¤¤à¤¿|à¤¾à¤µà¥‡| à¤¦à¥‡|à¤°à¤¤à¤¾|à¤• à¤¸|à¤¸à¤¾à¤¥|à¤¾à¤¨à¥‚|à¤¨à¥‚à¤¨|à¥‡à¤•à¤°|à¤° à¤…|à¤¯ à¤•|à¤¾à¤¥ |à¤ªà¥à¤¤|à¤¾ à¤®|à¤²à¤¾ |à¤ˆà¥¤à¤•| à¤µà¤¿|à¤¸à¤®à¤¾|à¥‚à¤¨ |à¥‡ à¤ª|à¤¸à¤¾à¤®|à¥¤ à¤¸|à¤¾ à¤¹| à¤œà¥‡|à¥‡ à¤¹| à¤šà¤¾|à¥‹à¤ˆ |à¤œà¤¾ |à¤®à¤¿à¤²| à¤µà¥|à¤¿ à¤•|à¤¬à¥‡ |à¤¾à¤ªà¥|à¤°à¤¾à¤ª|à¥‹à¤ |à¤°à¥‹ |à¤µà¤¾à¤°|à¤•à¥‹à¤ˆ|à¤šà¤¾à¤¹| à¤¦à¥‹|à¤µ à¤•| à¤¨à¤¿|à¤šà¤¾à¤°|à¤° à¤µ|à¤¾à¤§à¤¿| à¤ªà¤¾|à¤° à¤ª|à¤¸à¥à¤¤|à¤à¤² |à¤•à¥‹à¤¨|à¥‡ à¤µ|à¥‹à¤¨à¥‹|à¤•à¤¾à¤®|à¥‹ à¤¸|à¥à¤® |à¥‡ à¤“|à¤¯à¥‹à¤—| à¤¸à¥|à¤ à¤•|à¤¨à¤µà¤¾|à¤¨ à¤¹|à¤·à¤£ |à¥€à¤¯ |à¤à¤• |à¤ªà¤°à¤¿| à¤‰à¤ª|à¥‡ à¤†|à¥à¤¤à¤°| à¤¸à¤¹|à¤¾à¤œà¤¿|à¤² à¤¹|à¤¸à¤‚à¤°|à¤ˆ à¤•|à¤¾à¤¸ |à¤ªà¥‚à¤°|à¤‚ à¤¸|à¤‚à¤°à¤•|à¥‹ à¤•|à¤œà¤¿à¤•|à¤¦à¥‡à¤¶|à¥à¤•à¥|à¤¾à¤®à¤¾|à¤¹à¥‹à¤¬|à¤¸à¤®à¥|à¥¤à¤•à¥‡|à¥à¤¯à¤•|à¥‡ à¤š|à¤•à¥‡à¤•|à¥à¤µà¤¾|à¤ªà¤¯à¥‹|à¤‰à¤ªà¤¯|à¤°à¥€ |à¥€ à¤¹|à¤¾à¤¹à¥€|à¤¦à¥‹à¤¸|à¤° à¤†| à¤‰à¤š|à¤¾à¤¤à¤¿|à¤®à¥à¤®|à¥à¤®à¤¾|à¥‡ à¤–| à¤²à¥‹|à¤¤à¤¿à¤•|à¤°à¤¤à¤¿|à¥‡à¤¶ |à¤¨ à¤”|à¤¸à¥à¤¥|à¤µà¤¾ |à¤®à¥€ |à¥‡ à¤¤| à¤†à¤¦|à¤¨à¤¿à¤¯|à¤¨ à¤ª|à¤µà¤¾à¤§| à¤˜à¥‹|à¤˜à¥‹à¤·|à¤¬ à¤…|à¤°à¤¿à¤µ|à¤¾ à¤¬|à¤•à¤¿ |à¤® à¤¸|à¤°à¥€à¤¯|à¥à¤°à¥€|à¤¯ à¤¸|à¤¯à¤•à¥|à¤¿ à¤®|à¤¾ à¤¦|à¤¾ à¤¤|à¤¬ à¤¹|à¤œà¤¾à¤¦|à¤‰à¤šà¤¿|à¤¯à¥à¤•|à¤‚à¤¯à¥|à¤¸à¤‚à¤¯| à¤‰ |à¤‡ à¤¸|à¥‡ à¤‡|à¥à¤·à¤£|à¥¤ à¤¤|à¤šà¤¿à¤¤|à¤¾ à¤”|à¤µ à¤¹|à¤¹à¥‡ |à¤¤ à¤¸| à¤ªà¥‚|à¤• à¤”|à¤— à¤•|à¥‡ à¤¨|à¤¨ à¤¦|à¤•à¤°à¥‹|à¤²à¥‹à¤—|à¥‹à¤·à¤£|à¤¾à¤°à¤¾|à¤° à¤¨|à¤¿à¤² |à¤¸à¤®à¤¯|à¤•à¥Œà¤¨|à¤‚ à¤•|à¤®à¤¯ |à¥Œà¤¨à¥‹|à¥à¤°à¤•|à¥‹ à¤­| à¤­à¤¾|à¤¾à¤œ | à¤•à¤|à¤•à¤à¤²|à¤¸à¥à¤°|à¤°à¥à¤®|à¤¾à¤µ |à¤¿à¤µà¤¾",
                        san: "à¤ªà¥à¤°|à¤¾à¤‚ |à¤¸à¥à¤¯|à¥à¤¯à¤¾| à¤ªà¥|à¥à¤¯ |à¤ªà¤¿ |à¤¿à¤•à¤¾| à¤¸à¥|à¤•à¤¾à¤°|à¤¸à¥à¤µ|à¤¨à¥à¤¤|à¤§à¤¿à¤•| à¤š |à¤‚ à¤¸| à¤¸à¤‚|à¥à¤°à¤¤|à¤•à¥à¤·|à¥à¤µà¤¾|à¤¤à¥à¤‚|à¥à¤‚ |à¤¤à¥à¤¯| à¤µà¤¿|à¤®à¤¾à¤¨|à¤¾à¤°à¥| à¤¸à¤®|à¤¤à¥à¤°|à¤·à¥à¤Ÿ|à¥à¤¯à¥‡|à¤¾à¤¨à¤¾|à¤‚ à¤…| à¤œà¤¨|à¥à¤¤à¤¿|à¤°à¤¤à¥|à¤°à¥à¤µ|à¤¨à¤¾à¤‚|à¤¸à¥à¤¤|à¤¾à¤£à¤¾|à¤‚ à¤µ|à¤¾à¤§à¤¿|à¥à¤¤à¥|à¤¤à¤¨à¥|à¤¤à¥‡à¥¤|à¤¾à¤°à¤¾|à¤µà¥à¤¯|à¤°à¥à¤¯|à¤£à¤¾à¤‚|à¤®à¤ªà¤¿|à¤¯à¥‡à¤•| à¤¨à¤¿|à¤Ÿà¥à¤°|à¥à¤Ÿà¥|à¤¤à¤¿à¥¤|à¤°à¤¾à¤·|à¤¾à¤·à¥|à¤¾ à¤¸|à¤…à¤§à¤¿| à¤…à¤§| à¤¸à¤¾|à¤¤à¥à¤¤|à¤µà¤¾ |à¤š à¤¸|à¤°à¤‚ |à¤¯à¤¾ |à¤¤à¥‡ |à¥à¤¯à¤¤|à¤¸à¤°à¥|à¤µà¥€à¤¯|à¤µà¤°à¥|à¤¾à¤¨à¥|à¤¿à¤·à¥| à¤µà¤¾|à¤¿à¤¤à¤¾| à¤°à¤¾|à¥‡à¤•à¤®|à¤§à¤¾à¤°|à¤•à¤®à¤ª|à¥à¤µà¥€|à¤•à¥à¤¤|à¤œà¤¨ |à¤¯ à¤¸| à¤®à¤¾|à¤°à¤¾à¤£|à¤·à¥ |à¤¿ à¤š|à¤¿à¤¤à¥|à¥à¤¤à¥|à¤°à¥à¤¤|à¥‡à¤¨ |à¤¾à¤¯à¤¾|à¤¸à¤¾à¤®|à¤‚ à¤ª| à¤¸à¤°|à¥à¤µà¥‡|à¤¾à¤°à¤‚|à¤µà¤¾à¤¤|à¥à¤¤à¥‡|à¤¿à¤• |à¤¨à¥à¤¯|à¥‡à¤·à¥|à¤·à¥à¤¯|à¤¨ à¤¸|à¤•à¥ƒà¤¤|à¤¤à¥à¤µ|à¤‚ à¤š|à¤°à¥à¤¥|à¥‡ à¤¸|à¤¾à¤¨à¤µ|à¤°à¤•à¥|à¤¿ à¤¸|à¤½à¤ªà¤¿|à¤¾à¤¤à¤¨|à¤¯à¤¿à¤¤|à¤¿ à¤œ|à¤¯à¤¤à¥‡| à¤…à¤¨|à¤‚ à¤¨|à¤®à¥ |à¥à¤¥à¤‚| à¤ªà¤°| à¤µà¤°|à¤¨à¤¿à¤°|à¤¯à¤¾à¤£|à¤¨à¤‚ |à¤¥à¤‚ |à¤¯à¤¤à¤¿|à¤¤à¤¿ |à¥‹à¤½à¤ª|à¤µà¤¾à¤§|à¥à¤¤à¤°| à¤…à¤­|à¤¸à¤‚à¤§|à¤¿à¤°à¥|à¥à¤¯à¤•|à¤¾à¤®à¤¾|à¤µà¤¸à¥|à¤°à¤¸à¥|à¤µà¤¿à¤§|à¤¶à¥à¤š|à¤¸à¤®à¥|à¤¿à¤µà¤¾|à¤•à¤¸à¥|à¤¾à¤°à¤¯|à¤ªà¤°à¤¿|à¤®à¤¾à¤œ|à¥¤à¤ªà¥|à¤¸à¤‚à¤°|à¥à¤š |à¤·à¤£à¤¾|à¤¤à¤¾à¤¨|à¥à¤° |à¥‡à¤£ |à¤…à¤­à¤¿|à¤¯à¤¾à¤‚| à¤•à¤¾|à¤¾ à¤…| à¤…à¤ª|à¥€à¤¯ |à¤‚à¤°à¤•|à¤¨ à¤•|à¤¯à¤‚ |à¤¾ à¤µ|à¤¿à¤¤à¥|à¤­à¤µà¤¿|à¥à¤·à¤£|à¥à¤·à¤¾|à¤¯ à¤ª|à¤¸à¤®à¤¾|à¤•à¤‚ |à¥à¤°à¤¾|à¤µà¤¿à¤¤|à¤¾à¤¤à¥| à¤à¤¤|à¤¿à¤•à¥|à¤˜à¥‹à¤·|à¤…à¤ªà¤¿|à¤°à¤¤à¤¿|à¤¯à¥à¤µ|à¤• à¤¸| à¤•à¥ƒ|à¤¿à¤˜à¥‹|à¤¨à¤µà¤¾|à¤°à¤¯à¤¤|à¤ªà¥‚à¤°|à¤°à¥à¤£| à¤µà¥|à¤§à¤¤à¥|à¤‚ à¤œ|à¤¾à¤¸à¥|à¤·à¤¾ |à¥à¤°à¥|à¤­à¤¿à¤˜|à¤¤à¥ |à¤šà¤¿à¤¤|à¥ƒà¤¤à¥‡|à¤§à¥à¤¯|à¤¸à¤‚à¤˜|à¤¾à¤œà¤¿| à¤¨ |à¤½à¤¸à¥|à¤¿à¤¶à¥|à¤¾à¤° |à¤‚ à¤§|à¤¶à¤¿à¤•|à¥‹à¤·à¤£|à¥‚à¤°à¥|à¥à¤°à¥€|à¤šà¥à¤›|à¥¤ à¤…|à¤¨à¤¾à¤¨| à¤­à¤µ|à¤¦à¥‡à¤¶|à¤°à¥à¤¹|à¤š à¤ª|à¥à¤°à¤¿|à¤‚ à¤•|à¤‚à¤§à¤¤|à¤¾à¤¨à¤¿|à¤¨à¤¿ |à¥à¤¤à¤¾|à¤°à¤¿à¤•|à¤µà¤¿à¤•|à¥ˆà¤µ |à¥à¤°à¤¸|à¤¯à¤•à¥|à¤œà¤¿à¤•|à¤°à¤¾à¤§|à¤¤à¤‚ |à¤µà¤¾à¤°|à¤¯ à¤•|à¤¤à¤¿à¤¤|à¤¯ à¤š|à¤¨ à¤µ|à¥‡à¥¤ |à¥ à¤¸|à¤¤à¤¾ |à¤µà¤¿à¤µ|à¤¤à¤¿à¤•|à¤° à¤¸|à¤¨à¤¾ |à¤¤à¤¾à¤¯|à¥à¤žà¤¾|à¤¯à¤¾à¤¨|à¥à¤¯à¤®|à¤¾à¤°à¥‡|à¤œà¥à¤ž|à¤…à¤¨à¥|à¥‡ à¤š|à¥‹à¤½à¤¸| à¤¶à¤¿|à¤µà¤¿à¤°|à¥à¤°à¤®|à¤¨à¥ˆà¤µ|à¥à¤µà¤¸|à¤¿à¥¤à¤ª|à¤·à¥à¤ |à¤¯à¥‹à¤—|à¤¸à¥à¤¥|à¤¨à¤¸à¥|à¤¯ à¤µ|à¤¯à¤¤à¤¾|à¤°à¤¿à¤µ|à¤¸à¤®à¥|à¤•à¥‹à¤½| à¤•à¥‹|à¤¿ à¤¨| à¤µà¥ˆ|à¤¯à¤¸à¥|à¤¿ à¤µ|à¤¯à¤¾à¤ª|à¤¦à¥à¤§|à¥à¤°à¤µ|à¤¤à¤¾à¥¤|à¥‡à¤·à¤¾| à¤§à¤¾|à¤¸à¤‚à¤¯| à¤¸à¤¹|à¥à¤•à¥|à¤œà¥€à¤µ|à¤¾ à¤ª|à¥à¤·à¥‡|à¥à¤¤à¤¨|à¥‡ à¤ª|à¤¨à¥‡ |à¤¶à¥à¤¯|à¤¨à¥ |à¤š à¤µ|à¤ªà¤°à¤¾|à¤¿ à¤ª|à¥à¤°à¤¯|à¤¿à¤°à¥|à¥à¤µà¤¤|à¥à¤žà¥|à¤¯à¤¤à¥|à¤­à¤¾à¤µ|à¤¨à¥à¤ž|à¤°à¥à¤§|à¥à¤§à¥| à¤ªà¥‚|à¤¨à¤¿à¤¯"
                    },
                    Myanmar: {
                        mya: "á€„á€·á€º|á€„á€ºá€¸|á€­á€¯á€„|á€¯á€„á€º|á€±á€¬á€„|á€žá€Šá€º|á€€á€­á€¯|á€·á€º |á€Šá€ºá€¸|á€½á€„á€·|á€á€½á€„|á€¬á€„á€º|á€ºá€¸á€€|á€á€­á€¯|á€žá€±á€¬|á€­á€¯ |á€¼á€…á€º|á€”á€­á€¯|á€»á€¬á€¸|á€™á€»á€¬|á€„á€º |á€œá€Šá€º|á€¼á€„á€º| á€¡á€|á€€á€±á€¬|á€¸á€€á€±|á€­á€¯á€·|á€›á€±á€¸|á€–á€¼á€…|á€º á€¡|á€¸áŠ |á€¾á€„á€·|á€”á€¾á€„|á€›á€¾á€­|á€¸á€€á€­|á€ºá€¸áŠ|á€Šá€ºá‹|á€ºá€á€½|á€º á€œ|á€±á€¬á€€|á€™á€¾á€¯|á€ºá€¸ |á€½á€„á€º|á€á€¼á€„|á€á€½á€„|á€±á€¬ |á€Šá€ºá€·|á€„á€ºá€| á€œá€°|á€ºá€…á€±|á€½á€á€º|á€œá€½á€|á€™á€ºá€¸|á€á€ºá€œ|á€¬á€€á€º|á€œá€•á€º|á€¾á€­á€ž|á€±á€¬á€º|á€„á€ºá€›|á€­á€žá€Š|á€ºá€œá€•|á€ºá€¸á€™|á€¡á€á€½|á€¡á€›á€±|á€·á€ºá€¡|á€ºá€žá€±|á€€á€¼á€±|á€…á€½á€¬|á€ºá€· | á€–á€¼|á€°á€á€­| á€œá€½|á€œá€°á€|á€…á€ºá€…|á€ºáŠ |á€™á€Šá€º|á€½á€¬ |á€ºá€¡á€›|á€‘á€­á€¯|á€ºá€œá€Š|á€¬á€¸ | á€‘á€­|á€­á€¯á€¸|á€Šá€º |á€¸á€á€½|á€¬á€¸á€€|á€›á€”á€º| á€™á€­|á€¼á€¬á€¸|á€¼á€„á€·|á€¸á€™á€»|á€¯á€•á€º|á€€á€º |á€”á€º |á€ºá€¸á€|á€–á€¼á€„|á€„á€ºá€„|á€ºá€„á€¶|á€½á€€á€º|á€†á€­á€¯|á€¸á€”á€¾|á€¡á€¬á€¸|á€…á€±á€›|á€·á€ºá€›|á€ºá€…á€½|á€¼á€Šá€º|á€¬á€ºá€œ|á€­á€™á€­|á€ºá€›á€¾|á€¯á€¶á€¸|á€”á€ºá€¸|á€±áŠ |á‹á€œá€°| á€œá€Š|á€ºá€žá€Š|á€•á€¼á€¯| á€žá€±| á€”á€­|á€¼á€±á€¬|á€™á€­á€™|á€ºá€™á€¾| á€•á€¼|á€¬ á€¡|á€•á€ºá€…|á€¸á€žá€Š|á€±á€¸á€™|á€•á€¼á€Š|á€…á€±áŠ|á€¡á€á€¼|á€•á€­á€¯|á€º á€™|á€¯á€á€º|á€á€„á€º|á€¸ á€™|á€¸á€–á€¼|á€…á€¬á€¸|á€¸ á€¡|á€ºá€¸á€ž|á€›á€™á€Š|á€½á€šá€º|á€º á€•|á€­á€¯á€€|á€ºá‹á€œ|á€º á€–|á€á€¼á€¬|á€¡á€•á€¼|áŠ á€¡|á€ºá€á€¼|á€–á€½á€²|áŠ á€œ|á€žá€­á€¯| á€›á€¾|á€½á€²á€·|á€­á€™á€º|á€¸á€™á€¾|á€á€…á€º|á€œá€¯á€•|á€· á€¡|á€ºá€”á€­|á€º á€›|á€…á€Šá€º|á€»á€€á€º|á€¸á€á€¼|á€ºá€¸á€•|á€ºá€•á€¼|á€¸á€€á€¼|á€¯ á€œ|á€¯ á€¡|á€á€¶á€…|á€á€º |á€º á€€|á€¬á€„á€·|á€¡á€á€½|á€ºá€–á€¼|á€¬á€¸á€ž|á€•á€¼á€„|á€žá€¬á€¸|á€¬á€¸á€”|á€„á€ºá€ž| á€¡á€¬| á€á€¶|á€•á€ºá€|á€±á€¸ |á€º á€”|á€¼á€®á€¸|á€á€Šá€º|á€€á€ºá€™|á€•á€ºá€ž|á€Ÿá€¯á€|á€ºá€›á€½|á€™á€Ÿá€¯|á€ºá€¸á€|á€±á€¸á€€|á€ºá€žá€­|á€€á€ºá€ž|á€ºá‹ |á€¡á€–á€½|á€œá€­á€¯|á€™á€»á€¾|á€¯á€€á€º|á€ºá€™á€»| á€žá€­|á€ºá€›á€¬|á€Šá€ºá€ž|á€•á€’á€±|á€¥á€•á€’|á€¬á€¸á€–|áŠ á€™|á€º á€ž|áŠ á€€| á€¡á€€|á€¸á€á€­|á€ºá€á€»|á€¸á€á€»|á€±á€Šá€¬|á€†á€±á€¬|á€€á€½á€š|á€…á€ºá€ž|á€¬á€¸á€œ|á€»á€­á€¯|á€›á€¬á€¸|á€á€½á€€|á€™á€¾ | á€€á€¼|á€•á€Šá€¬|á€á€›á€¬|á€žá€„á€º|á€¼á€±á€Š|á€ºá€›á€±|á€á€¼á€±|á€ºá€”á€¾|á€¯á€·á€|á€ºá€€á€­|á€º á€‘|á€¬ á€œ| á€¡á€•|á€¬á€¸á€|á€•á€¼á€…|á€ºá€›á€”|á€žá€€á€º|á€›á€¬ |á€ºá€™á€¼|á€œá€°á€·|á€ºá€¸á€”|áŠ á€ž|á€á€ºá€|á€œá€°á€™|á€±á€¸á€|á€°á€Šá€®|á€á€°á€Š| á€¡á€†|á€¶á€…á€¬|á€¬á€¸á€›|á€±á€›á€”| á€á€°| á€¡á€|á€¬á€¸á€…|á€»á€„á€º|áŠ á€”| á€á€­|á€œá€¯á€¶|á€½á€±á€¸|á€¾á€¯ |á€•á€±á€¸|á€°á€™á€»|á€žá€­á€™|á€•á€º |á€­á€¯á€ž|á€º á€|á€ºá€¸á€œ|á€„á€ºá€™|á€™á€­á|á€€á€ºá€…|á€ºá€žá€°|á á€¡|á€…á€ºá€™|á€¾á€±á€¬|á€‘á€¬á€¸|á€ºá€¸á€¡| á€¡á€œ|á€¯ á€ž|á€‚á€¹á€‚|á€¬á€¸á€| á€”á€¾| á€™á€»|á€›á€½á€€|á€¸á€žá€±| á€€á€­|á€¬ á€ž|á€¬á€¸á€•|á€„á€ºáŠ|á€°á€·á€¡|á€ºá€€á€¼|á€€á€»á€„| á€¥á€•|á€’á€±á€¡|á€€á€ºá€›|á€™á€‚á€¹|á€¸á€…á€½|á€„á€ºá€€",
                        shn: "á€„á€ºá‚ˆ|á¼á€ºá€¸|á€œá‚†á‚ˆ|á€„á€ºá€¸|á€¯á¼á€º|á€ºá€¸ |á€°á€„á€º|á€°á¼á€º|á€á€ºá€¸|á¼á€ºá‚‰|á€½á€„á€º|á€­á€°á€„|á€ºá‚‡á€œ|á¼á¼á€º|á¼á€ºá‚‡|á€°á€á€º|á€ºá‚ˆá€œ|á‚‡á€œá‚†|á€™á€ºá‚‡|á€ºá€¸áµ|á€™á€­á€°|á€„á€ºá‚‡|áµá€°á¼|á€žá€¯á¼|á¢á€„á€º|á€¯á€„á€º|á€á€ºá‚ˆ|á€á‚ƒá‚‡|á€¢á€™á€º|á€œá‚„á‚ˆ|á¼á‚†á‚‰|á€™á€®á€¸|á€á€ºá€¸|á€œá€½á€„|á€­á€°á€|á‚†á‚‰ |á€™á€ºá€¸|á€¢á¼á€º|á€ºá‚ˆ |á€á€ºá‚ˆ|á€­á€¯á€„|á€ºá€¸á€œ|áµá€±á‚ƒ|á¼á€º |á€µá¼á€º|á‚ˆ á€| á€œá€½|á€ºá€¸á¼|á€¯áµá€º|á¢á¼á€º|á€½á€á€º| á€á‚ƒ|á‚„á‚ˆ |á€¯á€™á€º|á‚†á‚ˆ |áµá€ºá€¸|á‚…á€á€º|á€œá‚…á€|á€œá€½á€|á€šá€°á‚‡|á€µá€„á€º|á€¸á€žá€¯|áµá€°á‚Š| á€á€±|á€ºá€¸á€|á€±á‚ƒá‚‰|áµá¼á€º| á€¢á¼|áµá€ºá‚‡|á€®á€¸á€ž| á€œá‚„| á€™á€®|á€ºá‚ˆá€™|á€ºá‚ˆáµ|á€ºá‚‰ |á¸á‚‚á€º|á€­á€¯á¼|á€•á€µá¼|á€™á€ºá‚ˆ|á€žá€± |á‚ˆ á€œ|áµá€ºá‚ˆ|á€½á¼á€º|á€•á€­á€°|á€¸áµá€°|á€ºá€¸á€•|á€ºá€¸á€ž|á¸á€­á€¯|á€ºá‚‡á€•|á€ºá€¸á€™|á€á€ºá‚‡|á‚ƒá‚‰á¼|á€ºá‚ˆá€|á€á€®á‚ˆ|á€ºá‚‡ |á€ºáŠ |á€ºá€¸á¸|á‚ˆá€™á€­|á€°á‚Šáµ|á‚ˆá€œá‚…|á€ºá‚ˆá€•|á‚Šáµá€±|á€¯á€á€º|á€­á€¯á€|á€ºá‚‡á¼|á¶á€á€º|á€•á€ºá‚‰|á€á€„á€º|á€ºá‚ˆá¸|á‚‰á¼á‚†|á€ºá‚‡á€™|á€°á‚‡á‹|á‚‚á€ºá‚ˆ|á¼á€ºá‚ˆ|á‚‰ á€™|á€±á€¢á€™|á€¸á¼á¼| áµá€°|á¼á€ºáµ|á¢á‚†á€¸|á‚‰ á€|á€­á€„á€º|á€„á€º |á€á€±á‚ƒ|áµá¢á¼|á¼á€ºá€œ|á€ºá€¸á€š|á€ºá€¸á‚|á€¸ á€œ|á‚á€µá€|á€µá€á€º|á€º á€œ|á¢á€á€º|á‚ƒá‚ˆ |á€œá‚‚á€º|á€•á€­á€¯|á€±á‚ƒá‚‡|á€­á€°á¼|á€žá€„á€º|á€•á¼á€º|á‚ˆá€œá€½|á‚‡á€•á€µ|á‹áµá€°|á€ºá€¸á¶|á€±á€œá‚†|á‚ƒá‚‡ |á€™á¼á€º|á€ºá‚ˆá¼|á‚á‚‚á€º|á€°áºá€º|á€ºá‚‰á€|á€á€ºá‚‡|á€á€±á€œ|á‚‡á¼á¼|á¾á€­á€„|á€á€º |á€±á‚ƒá‚ˆ|á€ºá‚‡á‚|á€¸á€™á€­|á¢á€™á€º|á€ºá‚‡áµ|á€‘á€¯áµ|á€ºá‚ˆá‚|á€¸ á€¢|á€ºá‚‰á€œ|á€ºá¼á¼|á€á€±á€¢|á€œá€¯á€™|á‚ˆá€žá€„|á€žá¢á€„|á¼á€ºá€•|á€½á€™á€º|áµá€ºá‚‰|á¼á€ºá½|á‚ˆá€á‚ƒ|á¼á‚ƒá‚ˆ|á€¸á€•á€­|á¼á€„á€º|á€á¢á€„| á€¢á€™| á€žá€¯|á‚„á‚ˆá€ž|á€º á€|á½á€µá€„|á€•á¢á‚†|á€ºá‚ˆá€¢|á¢á‚†á‚‡|á€ºáµá€°|á€¸áŠ |á€ºá‚ˆá€š|á€ºá¼á‚†|áµá€á€º|á¸á€½á€™|á‚ƒá‚‡á¶|áºá€ºá‚ˆ|á‚ˆ á€¢|á€°á€™á€º|á‚†á‚ˆá€|á€¸á€œá€½|á¸á€¯á€™|á€ºá‚‰á€š|á€‘á€­á€¯|á€•á€ºá€¸|á€ºá€žá€±|á€œá€¯áµ|á€º á€¢|á‚á€•á€º|á¼á€ºá¼|á€ºá€¸á€¢|á€¢á€á€º|á€œá€­á€°|á€ºá‚‰á‚|á¼á‚‚á€º|á¸á€­á€°|á€ºá‚‡á¸|á‚ˆá€œá‚†|á‚‚á€ºá€¸|á‚ˆá¸á€­|á¢á€á€º|á‚‡á‹áµ|á‚‰ á€œ|á€œá€°áº|á‚‚á€ºá‚‰|á€ºá‚‰áµ|á¼á€ºá€™|á€ºá¸á€­|á€ºá€¸áŠ|á€á€ºá‚‰|á€½áµá€º|á€ºá‚‡á€|á€ºá‚‡á½|á¼á€ºá€¢|á¶á€½á€„|á€á€ºá¼|áŠ á€œ|á€¸á¼á‚†|á€á‚†á‚‰|á¼á€ºá€|á€•á€µá€„|á€á€­á€¯|á€ºá‚‡á¶|á‚ƒá‚‡á€œ|á‚‰á€šá€°|á€¸á€œá‚…|á€ºá€¸á€‘|á‚ƒá‚‡áµ|á€„á€ºáŠ|á€ºá‚‰á€ž|á‚†á‚ˆá€™|á€á‚ƒá‚ˆ|á¾á¢á‚†|á€¸á€žá€±| á€•á€­|á€á€°á€|á‚‡á¶á€|á€„á€ºá¸| á€œá€¯|á€­áµá€º|á‚†á‚ˆá€•|á€•á€½á€„| á€™á€­|á‚ˆá€™á€®|á€„á€ºá€ž|á¼á€ºá€ž|á‚á€°á€™|á‚ˆ á€•|á€¸ á¸|á‚…á€„á€º|á‚†á‚ˆá€ž|áµá€­á€°|á‚á€­á€¯|á‚ˆá¾á‚ƒ|á‚‡ á€œ|á‚á¼á€º|á€ºá‚ˆá¾|á€¸á€á€±|á¼á€ºá¸|á€¸áµá¢|á€°á€•á€º|á‚ˆáµá€°|á€¸á€žá¢|á€°áµá€º|á‚‚á€ºá‚‡| á¾á¢|á€„á€ºá‚Š|á€šá€™á€º|á‚ƒá‚‡á€| á¼á‚‚|á€¸ á€|á€ºá€á€±|á¾á‚ƒá‚‰|á‚‡áµá¼|á€°á€á€º|á€®á€¸á€œ| á€á€®|á‚…á€á€º|á‚ˆá€•á€­|áŠ á€|á€šá€µá¼|á‚ˆá€œá€¯"
                    },
                    Ethiopic: {
                        amh: "á¡áˆ˜á‰¥|áˆ°á‹á¡|á‰µá¡áŠ |á‰¥á‰µá¡|áˆ˜á‰¥á‰µ|á¡áˆ°á‹|á¡áŠ áˆˆ|á¡á‹ˆá‹­|á‹ˆá‹­áˆ|á‹­áˆá¡|áŠá‰µá¡|áŠ•á‹±á¡|áŠ áˆˆá‹|áˆˆá‹á¢|á‹³áŠ•á‹±|á‹«áŠ•á‹³|áŠ•á‹³áŠ•|áŠ¥á‹«áŠ•|á‹±á¡áˆ°|á‰µá¡áˆ˜|á¡áŠ¥áŠ•|á¡á‹¨áˆ˜|á¢áŠ¥á‹«|áŠ¥áŠ•á‹²|á¡áŠáŒ»|á¡á‹¨á‰°|áˆá¡á‰ |á‹á¡á‹¨|áˆá¡á‹¨|á¡á‹¨áˆš|áŠ“á¡á‰ |áŠ•á¡á‹¨|á¡á‹¨áˆ›|á¡áŠ á‹­|áŠáŒ»áŠ|áŠ“á¡á‹¨|á‹á¡á‰ |á‰¶á‰½á¡|á‹á¢á¡|áˆ†áŠá¡|á‰µá¡á‹¨|á¡á‰ áˆš|á¡áˆ˜áŠ•|á‹á¢áŠ¥|á‰µáŠ“á¡|áŠ€á‰¥áˆ¨|á‰µáŠ•á¡|á‹áˆá¡|áŠ•áŠ›á‹|áŠ¥áŠ©áˆ|á‰¥á‰»á¡|áŠ›á‹áˆ|áŠ•áˆá¡|á¡áˆˆáˆ˜|á¡á‹«áˆˆ|áˆá¡áˆ°|áˆ›áŠ•áŠ›|áˆ˜á‰¥á‰¶|á¡áŠ áŒˆ|á‰µá¡á‰ |áˆ«á‹Šá¡|á¡áŠ¥áŠ©|á¡áˆˆáˆ›|áˆˆá‰µá¡|á‰ á‰µá¡|áˆ†áŠ•á¡|áˆ˜áŠ•áŒ|á¡á‰ á‰°|áˆ¨á‰µá¡|á‰¥á‰¶á‰½|áŒ‹á‰¥á‰»|á‹Žá‰½á¡|áˆ…áŠ•áŠ|áŒ»áŠá‰µ|áˆá¡áŠ¥|á‹ˆáŠ•áŒ€|á¡áˆá‹©|áˆ°á‰¥á¡|áˆ›áŠ•áˆ|áŒ á‰ á‰…|áŠ©áˆá¡|á‹°áˆ…áŠ•|á¢áˆ›áŠ•|áŠáŒ»á¡|áŒáŠ˜á‰µ|áˆ›áŒáŠ˜|á¢á¡áŠ¥|á¡á‹¨áˆ†|á¡áˆáˆ‰|á‰½á¡á‰ |á¡á‰ áˆ˜|áˆ¥áˆ«á¡|á¡á‹°áˆ…|áˆáŒ¸áˆ|áˆá¡áˆ˜|á‰°áŒá‰£|á¡á‹µáˆ­|á‰µá¡á‹ˆ|á‹á¢áˆ›|ááˆ­á‹µ|áˆ­á‹µá¡|á¡á‰ áˆ†|áˆ­á¡á‹ˆ|á‰ á‰µáˆ|á‰µáˆá¡|á‹­áŠá‰µ|á‰¸á‹á¡|á‰¥á¡á‹¨|áŠá‰µáŠ“|á‰±áŠ•á¡|áˆ•áŒá¡|áŠ•áŠ“á¡|á¡áˆ¥áˆ«|á‹¨áˆ›áŒ|á¡áˆ˜áˆ |áŠ˜á‰µá¡|á¡áŒŠá‹œ|áŒ»áŠá‰¶|áŠá‰¶á‰½|á‰ áˆ­á¡|á‰ áŠ€á‰¥|á‹©áŠá‰µ|áˆá‹©áŠ|á¡á‰ áŠ€|á¡á‹“á‹­|á‹“á‹­áŠ|á‰½áŠ“á¡|áŒá‰£áˆ­|á‰£áˆ­á¡|á¡á‹°áˆ¨|áŠá‹á¢|á¡áŠá‹|á‹°áˆ¨áŒƒ|áˆá¢áŠ¥|áˆá¡áˆ˜|á¡á‹ˆáŠ•|á‹­áˆ›áŠ–|áˆ›áŠ€á‰ |áˆƒá‹­áˆ›|á¡áŠ‘áˆ®|áˆ˜áˆ áˆ¨|áˆáˆ‰á¡|áŠá‰±á¡|áˆŒáˆŽá‰½|áŠ•áŒáˆ¥|á‰ á‰…á¡|á‹¨áˆ†áŠ|á¡á‹­áˆ…|áŠ•á‹²áŒ |áŒˆáˆ­á¡|á‰°á‰£á‰ |á‰µáŠ­áŠ­|áŒ¸áˆá¡|áˆ­á¡á‹¨|á‹²áŒ á‰ |á‰µáˆá¢|á‹á¡áŠ¨|á¡áŠ¥á‹«|áˆ©á‰µá¡|á‹µáˆ­áŒ…|á¡á‰¥á‰»|áŠ“á¡áˆˆ|á‹­áŒˆá‰£|á‹¨áˆ˜áŠ–|á¡áˆ›áŠ•|áŠ•áŠá‰µ|á‰¤á‰°áˆ°|áˆ­áŒ…á‰µ|á‰µá¡á‹µ|á¡áˆ˜áˆ°|áŠ¥áŠ•á‹°|á¡áŠ áˆ‹|á‰¥áˆ”áˆ«|á‰µá¡áˆˆ|áˆ”áˆ«á‹Š|áˆ­á‰µá¡|áˆ…áˆ­á‰µ|á‹áŠ•á¡|á‹¨áˆšá‹«|áˆá¢áŠ¥|áˆ†áŠ‘á¡|áˆáˆ…áˆ­|á‰µáˆáˆ…|á‰ á‰µá¢|áˆˆá‰ á‰µ|áŠ áˆˆá‰ |á¡áŠ áˆµ|áˆŽá‰½á¡|á‰½á¡á‹¨|á¡á‰ áˆ•|á‰¥áˆ¨á¡|á¡áŠ¨áˆš|áŠ•á¡áŠ |á‰µá¡áŠ¥|áŠ•á¡á‹ˆ|áˆ¨áŒá¡|á‰ áˆ†áŠ|á‹¨áŠ€á‰¥|á¡á‹¨áŠ€|áˆ˜áˆ†áŠ•|á¡áˆ˜áˆ†|áŠ•á¡áˆ˜|á¡á‹áˆ³|áŠ•áŒ€áˆ|áˆáˆ‹áŒŠ|áˆ…áˆá¡|áˆ¨á‰³á‹Š|áŠ­áˆˆáŠ›|áŠ­áŠ­áˆˆ|á‰³á‹Šá¡|áŒ€áˆá¡|áŠ‘áˆ®á¡|á¢á¡á‹­|á‹“á‹Šá¡|á‹œáŒáŠ|áŠ•á‹²áˆ|á‹²áˆáˆ|á¡áˆ›áŠ€|áŒˆáˆ©á¡|áˆ­á¡á‰ |á‰¥á‹“á‹Š|áŠ áŒˆáˆ©|áˆáˆá¡|áŠ“á¡áŠ|áˆ°á‰¥á‹“|á‹¨á‰°á‰£|áŒ…á‰µá¡|áˆ›áŠ–á‰µ|áˆ­á¡áŠ |áŠ•áŒáˆµ|áŠ–á‰µá¡|á‰ áˆ•áŒ|áˆ˜áŠ–áˆ­|á‹á¡á‹«|áˆ˜áŒ á‰ |áˆ¨áŒƒá¡|á¡á‰ áˆ›|áŠá‰µáŠ•|á‰¥áŠá‰µ|áŒˆá‰¥áŠ|á¡áŒˆá‰¥|áˆ˜áˆáŒ¸|á¡áˆáŠ”|áˆáŠ”á‰³|áŠ•á¡áˆˆ|á‹á¡áˆˆ|á¡á‰°áŒ|á¡á‹¨áŠ |á¡á‹­áŒˆ|á¡á‰ áŠ |á‰½áŠ•á¡|á¡á‰µáˆ|áŠá‰±áŠ•|á¡á‰¢áˆ†|á‰¢áˆ†áŠ•|áŒŠá‹œá¡|áˆ¨á¡áˆ°|á‰µá¡áŒŠ|áˆ°á‰¡á¡|áˆá‰ á‰µ|áˆ‹á‰¸á‹|áŠ áˆ‹á‰¸|á‰ áŠáŒ»|á¡á‰ áŠ|áŠ áŠ•á‹µ|á‰…á¡áˆ˜|á¡áˆ˜áŒ |á‰µá¡á‹­|áˆ˜áˆ°áˆ¨|áŒ¥á¡á‹¨|áˆµáŒ¥á¡|áˆáŒ¸áˆ˜|á‹áˆµáŒ¥|áŠ•á‹µá¡|á¡á‹áˆµ|á¡á‰ áŒ|á¡áˆ†áŠ–|áˆ‰á¡á‰ |á¡áŒ‹á‰¥|áŠ•áˆµá¡|áŠ•áŠá‰±|áˆ˜á‹á¡|á‹¨áˆšáˆ|áŠ á‹­áˆ|á‰¥áˆ¨áˆ°|áŠá¡áˆ˜|á¡á‹¨áˆƒ|áˆá¡áŠ¨|á‰½á¡áŠ¥|áˆµá‰µá¡|áˆ™áˆ‰á¡|áŠ áŒˆáˆ­|áˆ†áŠ–á¡|á‹°áˆ¨áŒ|áŠ¢áŠ•á‰°|áŠ•á‰°áˆ­|á‰°áˆ­áŠ“|áˆ­áŠ“áˆ½|áŠ“áˆ½áŠ“|áˆ½áŠ“áˆ",
                        tir: " áˆ˜áˆ°| áˆ°á‰¥|áˆ°á‰¥ | áŠ¦áˆˆ|á‰µáŠ• |áŠ¦áˆˆá‹Ž|áŠ“á‹­ | áŠ“á‹­| áŠ¦á‰¥|á‹Žá¡á¡|áˆˆá‹Žá¡|áˆ•á‹µáˆ•|áŠ¦á‰¥ |á‹µáˆ•á‹µ|áˆ•á‹µ |áˆ˜áˆ°áˆ|á‹áŠ• |áˆ°áˆ |á‹µ áˆ°|á‹­ áˆ|áˆ áŠ¦|áŠ«á‰¥ |á¡áˆ•á‹µ|á¡á¡áˆ•| á‹ˆá‹­|á‹ˆá‹­ | áˆ˜áŠ•| áŠáƒ|áŠ• áˆ˜|á‹áŠ¾áŠ|á¡á¡ |á‰³á‰µ |á‰¥ á‹|áŠá‰µ |áŠ• áŠ| áŠ«á‰¥|áˆ˜áˆ°áˆ‹|áŠáƒáŠ| áŠ¥á‹š|á‰¥ áˆ˜|áŠ¦á‹Š |á‰³á‰µáŠ•|áˆ˜áŠ•áŒ|á‹Š áˆ˜| áŠ¥áŠ•|á‰¥ á‰¥|áŠ•áŒáˆµ|á‰µ áŠ¦|áˆ°áˆ‹á‰µ|áŠ• áˆ|áŠ¾áŠ |áŠ¥á‹š |á‰¥áŠ¦á‹Š|áˆ°á‰¥áŠ¦|áŠ• áŠ¦|áŠ•á¡á¡| áŠ•áŠ­| á‹áŠ¾|áŠ• áŠ•| áˆáˆ­|áŠ¹áŠ• |á‹­áŠ¹áŠ•| á‹­áŠ¹|áˆáˆ­áŠ«|áˆ­áŠ«á‰¥| áŠ¦á‹­| áˆƒáŒˆ|áˆ•áŒŠ |áˆ«á‰µ |áˆŽáˆ | á‰¥áˆ•|áŠ á‹­| áŠ¨áˆ|áˆ›á‹•áˆª|á‹­ á‰¥| áŠ•áˆ| á‹á‰°|áˆ­áŠ• |áŠ• á‰¥|áˆ«á‹Š | á£ |á‰¥ áˆ•|áˆ‹á‰µáŠ•|á‰¥ áŠ¦|áˆ›áˆ•á‰ |áŠá‰³á‰µ| áŠ¦á‹µ|á‹•áˆª | áˆ›á‹•|áˆµá‰³á‰µ|áŒáˆµá‰³|â€™á‹áŠ•|á‰µ áˆ˜|áŠ• á‹|á‰³á‹Š |á£ á‰¥| áˆ›áˆ•|áŠá‰µáŠ•|áŠ•áŒ‹áŒˆ|á‹µáŠ•áŒ‹| áˆµáˆˆ| á‹µáŠ•|áˆµáˆ«áˆ•|áŠ©áˆŽáˆ|áˆ•á‰ áˆ«|áŠ¦á‰µ |áŠ• áˆ°|á‹“áˆˆáˆ|áƒáŠá‰³| á‰¥áˆ|á‰µ á‹ˆ|áˆ˜áˆ°áˆª| áˆµáˆ«|áƒáŠá‰µ|á‰°áˆ°á‰¥|áŠ«áˆáŠ¦|áˆáŠ¦á‰µ|áŠ• áˆ“|á‹“á‰µ |á‹‹áŠ• |á‰¡áˆ«á‰µ|áˆ•á‰¡áˆ«| áˆ•á‰¡|á‰¥áˆ•áŒŠ|á‹µá‰¥ |á‹á‹µá‰¥| á‹á‹µ|á‰¥áŠ• |á‰µáˆáˆ…|áŠá‰± |á‹š á‹µ|á£ áŠ¦|áˆƒáŒˆáˆ«| áŠ©áˆŽ|áˆˆá‹Žáˆ|áˆáˆ…áˆ­|áˆá¡á¡|áˆ áˆ˜| á‰¥á‹|áˆáŠ¡â€™|áŠ¡â€™á‹|áŠ¥áŠ•á‰µ| á‹“áˆˆ| á‰¥á‹˜|á‰ áˆ«á‹Š| áˆ“áˆˆ|áˆ“áˆˆá‹‹|á‹Žáˆá¡|á‰± áŠ•|á‰µ á‰¥|áŒ‹áŒˆ |áŠáƒ | áˆá‹ƒ|áŠ• á‹˜| áŒˆá‰ |á‰µá£ | á‰µáˆ|áŠ¸á‹áŠ•|áˆ«áˆ• | á‹˜á‹­|áˆ…áˆ­á‰²|áˆ­á‰² |áŠ¨áˆáŠ¡|áˆƒá‹­áˆ›| áˆáˆµ|áŠá£ |áŠ¥áŠ•á‰°| áˆµáˆ­|áˆµáˆ­á‹“|áˆ­á‹“á‰µ|á‰£á‰µ |á‹­áˆ›áŠ–|áˆ°áˆªá‰³|áŠ• áŠ“| áŠ­á‰¥|áˆáŠ• | á‰¥áˆ›|áŒˆáˆ© | áˆ…á‹|áˆ‹á‰µ |á‰µ áŠ“|á‹­ áŠ¦|á‹•áˆŠ |áˆˆá‹áŠ¾|áˆµáˆˆá‹|áˆªá‰°áˆ°|á‰¥áˆªá‰°|áˆ•á‰¥áˆª| áˆ•á‰¥|áŠ• á‰°|áŠ¾áŠá£|á‰ áŠ• |áˆƒáŒˆáˆ©|áŒˆ áŠ¥|áŠ»á‹Š | áˆƒá‹­|áŠ¥áŠ• |áˆªáŒ‹áŒˆ| áˆáˆ•|áŠ• áŠ¥|áˆˆáŠ»á‹Š|áˆ­á£ | á‰¥áˆ“| á‰¥áˆƒ| áŠ­áŠ¸|áŠ­áŠ¸á‹|á‰¥ á‹˜|á‹ƒáŠ‘ |á‹Š áŠ­|áˆáŠ• |áˆ“á‹° |áˆá‹ƒáŠ‘|áˆ áŠ•|á‰µ áŠ¥|á‹Š á‹ˆ|á‰³á‹áŠ•| áˆ•á‹µ|á‰¥á‹˜á‹­| áˆ•áŒŠ|á‰µ áŠ•| áˆá‹•| áŠ«áˆ|áŠ• áŠ«|áˆ°á‰£á‰µ|áŠ• áˆµ|áŠ“áŠ• |á‰¤á‰°áˆ°|áˆ•áŠ• |áˆˆáˆáˆˆ|á‰µ áˆµ|áˆáˆˆáŠ»|á£ áŠ¨|á‰°á‹°áŠ•|á‰£áˆ |áŠ¦á‹µáˆ‹|áŠ¥á‹‹áŠ•| áŠ¥á‹‹|á‹°á‰‚ | á‹°á‰‚| áˆ°á‰£|áƒáŠ• |áŠáƒáŠ•|áŒáˆµá‰²|á£ áŠ•|á‹š á‰¥|áˆµá‰² | á‰¤á‰°|áˆáŒ¥áˆ“| áŠ­áˆ³| áŠá‹š|áŠ• áŠ­|áŠá‰² | áŠá‰²|áŠá‹š | áˆáŠ¥|á‰¥áŠáƒ| áˆá‹•|áˆá‹•á‰£|á‹•á‰£áˆˆ|áŠ­áˆ³á‰¥| á‰¥áŠ|áˆ áŠ¥|á‹š áˆ˜|áˆá‹•áˆŠ|áŠ­á‰¥áˆ©|á‰¥áˆ›á‹•|áˆ³á‰¥ |áˆ…á‹­á‹ˆ|áŠ¦á‰¶áˆ|áˆáˆµ |áŠ•áŒˆáŒˆ|áŠ¥áˆáŠ| áŠ¥áˆ|á‹µ áŠ¦|á‰¶áˆ |á‰² áŠ­|áá‰µáˆ“|áˆˆáˆ | áá‰µ|á‰¥ áŠ•|áŠ• á‹“|áˆ«á‹áŠ•|áˆ“áˆáˆ»|á‹°áŠ•áŒˆ|áˆ á‰¥|á‰µá‹®áŠ•| á‹áˆ°|á‹á‰°á‹°|áˆ‰ áˆ˜|á‰¥ áŠ“|áŒŠ áŠ«|áˆá‹Ž |áŠ¦á‰£áˆ| áŠ¦á‰£|á‹µáˆá‹Ž|áŠ• á‹µ|áŠ¦á‹µáˆ|á‹œáŒáŠ|áˆ‹á‹áŠ•| á‹µáˆ•"
                    },
                    Tibetan: {
                        bod: "à½ à½²à¼‹|à¼‹à½‘à½„|à½‚à½¦à¼‹|à¾±à½²à¼‹|à½„à¼Œà¼|à¼Œà¼ |à½¼à½–à¼‹|à¼‹à½à½¼|à½‘à½„à¼Œ|à¼‹à½¡à½¼|à¼‹à½–à¾±|à½à½¼à½–|à½¼à½‘à¼‹|à¼‹à½€à¾±|à¼‹à½”à¼‹|à½²à¼‹à½|à½¼à½¦à¼‹|à½‘à¼‹à½”|à½€à¾±à½²|à¼‹à½”à½ |à½”à½ à½²|à½ºà½‘à¼‹|à½¦à¼‹à½€|à½„à¼‹à½‘|à½¦à¼‹à½¦|à½´à½„à¼‹|à½„à¼‹à½–|à½¢à¾’à¾±|à½–à¼‹à½|à½¢à½„à¼‹|à½–à¾±à½º|à½¼à½“à¼‹|à½²à¼‹à½¢|à¼‹à½à½„|à¼‹à½‘à½–|à½“à½¦à¼‹|à½¡à½¼à½‘|à¼‹à½ à½‘|à½à½„à¼‹|à½„à¼‹à½¡|à½¦à¼‹à½”|à¼‹à½˜à½²|à¾±à½ºà½‘|à½˜à½¦à¼‹|à½¦à¼‹à½ |à¼‹à½£à¼‹|à¼‹à½¢à¾’|à½²à½‚à¼‹|à½‘à½–à½„|à½¦à¾à¾±|à¼‹à½‘à½‚|à¼‹à½¢à½º|à½–à½„à¼‹|à¼‹à½¢à½„|à¼‹à½¦à¾|à½¦à¼‹à½£|à¼‹à½¦à¾¤|à½ºà¼‹à½–|à¼‹à½¡à½²|à½¼à½‚à½¦|à½¦à¾¤à¾±|à¼‹à½ à½‚|à½„à½¦à¼‹|à½¼à½„à¼‹|à½²à½“à¼‹|à¼‹à½–à½…|à¼‹à½‚à½²|à½¦à¼‹à½‘|à½„à¼‹à½‚|à½‘à½ºà¼‹|à½¡à½²à½“|à½£à¼‹à½–|à¼‹à½“à½¦|à½¦à½´à¼‹|à¼‹à½–à½¦|à½„à¼‹à½ |à½˜à½²à¼‹|à½¦à¼‹à½–|à½¼à½‚à¼‹|à½–à½…à½¦|à½‚à¾±à½²|à¼‹à½šà½¼|à¼‹à½–à¼‹|à¼‹à½‚à¾±|à½…à½¦à¼‹|à½‚à½²à¼‹|à½‚à½¼à½¦|à½‘à½‚à½¼|à¾à¾±à½º|à¾±à½ºà¼‹|à½ºà½“à¼‹|à¼‹à½¢à½²|à½¢à½²à½‚|à½“à¼‹à½‚|à½„à¼‹à½˜|à½ºà½¦à¼‹|à½²à¼‹à½˜|à¾±à½£à¼‹|à½„à¼‹à½¦|à¾’à¾±à½£|à½”à¼‹à½‘|à¼ à½¢|à½²à½‚à½¦|à½¼à½„à½¦|à½£à¼‹à½‚|à½‘à½¼à½“|à½‚à½„à¼‹|à¼ à½‘|à¼‹à½žà½²|à½ºà½¢à¼‹|à¼‹à½‚à½„|à½¡à½„à¼‹|à½„à¼‹à½¢|à¼‹à½–à½¢|à½ºà¼‹à½¢|à½²à¼‹à½¦|à½–à½¦à¼‹|à½²à¼‹à½‚|à½‘à½„à¼‹|à¼‹à½‘à½¼|à½ºà½£à¼‹|à½¼à¼‹à½¢|à½²à¼‹à½–|à¼‹à½ à½–|à½¢à½ºà¼‹|à¼‹à½–à½¼|à½¦à¼‹à½˜|à½´à½£à¼‹|à½šà½¼à½‚|à½ à½‚à¾²|à½£à½¦à¼‹|à½²à¼‹à½‘|à¼‹à½‚à½“|à½–à½¼à¼‹|à¼‹à½‚à½ž|à½´à½‚à½¦|à½‘à¼‹à½‘|à½£à¼‹à½|à½²à½¦à¼‹|à½˜à¼ |à½à¾²à½²|à½“à¼‹à½‘|à½²à½˜à½¦|à¼‹à½‘à½´|à½˜à½‰à½˜|à½“à¼‹à½–|à½–à¼‹à½‘|à¼‹à½¦à½´|à¼‹à½˜à½|à¾²à½²à½˜|à¼‹à½–à½ |à½¦à¼‹à½‚|à½¢à¼‹à½–|à¾±à½¼à½‘|à½‰à½˜à¼‹|à¾¤à¾±à½¼|à¼‹à½¡à½„|à½¼à¼‹à½–|à½¼à½‘à¼|à½¢à¼‹à½¢|à½¦à¼‹à½¢|à½²à½ à½²|à½–à½ à½²|à½‚à¼‹à½‚|à½‘à½´à¼‹|à¼‹à½‘à½º|à½ à½‘à¾²|à½“à¼‹à½”|à½“à¼‹à½¢|à½„à¼‹à½£|à¼‹à½à½–|à½žà½²à½‚|à¼‹à½£à½¦|à½‚à¾²à½¼|à¼‹à½£à½º|à¼‹à½†à½º|à¼‹à½‚à½|à¾¤à¾±à½²|à½´à½¦à¼‹|à½´à½“à¼‹|à¼‹à½¢à½´|à¼‹à½¦à¾’|à½“à¼‹à½¦|à½£à½ºà½“|à½‘à¾²à¼‹|à½–à¾±à½´|à½²à¼‹à½ |à¾²à½ºà½£| à½‘à½º|à½¼à½‘à¼Ž|à½²à¼‹à½†|à¼‹à½à¾²|à½²à½‘à¼‹|à½‚à½“à½¦|à½¦à¾’à¾²|à¼‹à½˜à½‰|à½´à¼‹à½¡|à¼‹à½†à½¼|à¼‹à½šà½´|à½£à¼‹à½¦|à½à½–à¼‹|à½¢à½ºà½¢|à½¡à½¼à½„|à¾²à½¼à¼‹|à¼‹à½¦à¾¦|à½‚à¼‹à½£|à½¢à¼‹à½‘|à½‚à½£à¼‹|à¼‹à½“à½„|à½¦à¼‹à½¡|à½¢à½´à½„|à¾±à½´à½„|à¼‹à½ à½›|à¼ à½¦|à½‘à½‚à¼‹|à½‘à¼Žà½¦|à½“à½„à¼‹|à½ à½‘à½²|à½à½¼à½‚|à½‚à¼‹à½‘|à½†à½¼à½‚|à¼‹à½¦à¾Ÿ|à½„à¼‹à½“|à½“à¼‹à½£|à¼Žà½¦à¾|à½†à½ºà¼‹|à½–à¾±à¼‹|à½‘à½²à¼‹|à¾²à¼‹à½˜|à½²à¼‹à½|à½˜à½²à½ |à½šà½„à¼‹|à¾à¾±à½¼|à¾Ÿà½¢à¼‹|à¾’à¾±à½´|à¼‹à½”à½¢|à¼‹à½‚à½¦|à½²à¼‹à½“|à½´à½¢à¼‹|à¼‹à½¤à½º|à½”à½¢à¼‹|à¼ à½ |à½”à¼‹à½¡|à½¤à½ºà½¦|à½„à¼‹à½š|à¼‹à½£à½´|à¼‹à½¢à¾©| à½¢à½„|à¼ à½‚|à½²à¼‹à½š|à½žà½²à¼‹|à¼‹à½¦à¾¡|à½¦à¼‹à½š|à½‘à¼‹à½€|à½–à¼‹à½–|à½¦à½£à¼‹|à¾±à½²à½¦|à½²à¼‹à½£|à½´à½‚à¼‹|à½£à½‚à¼‹|à½‚à¼‹à½“|à¼‹à½£à½‚|à½–à¼‹à½˜|à½–à¼‹à½¦|à½ à½‘à½¼|à½¢à¼‹à½‚|à½šà½´à½£|à½²à½„à¼‹|à½‚à½žà½²|à½–à¼‹à½”|à½ à½‚à½£|à½¢à¼‹à½ |à¼‹à½–à½€|à¼‹à½˜à½„|à¼‹à½“à½²|à½–à½¦à¾Ÿ|à¼ à½˜|à½¦à¼‹à½¤|à½²à½“à¼|à½‘à¼‹à½–|à¾±à½¦à¼‹|à½‚à½¦à½£|à¾±à½„à¼‹|à¼‹à½”à½¼|à¼‹à½–à½‘|à½£à¼‹à½‘|à½¼à¼‹à½“|à½‚à¼‹à½–|à½´à¼‹à½¦|à½šà½¼à¼‹|à¼‹à½šà½„|à½¦à¼‹à½|à½‚à¼‹à½”|à½à½¼à½„|à½“à¼‹à½ |à½‚à½à½¼|à½¼à½¢à¼‹|à¼‹à½ à½š|à½–à½¦à¾’|à½ à½šà½¼",
                        dzo: "à½ à½²à¼‹|à¼‹à½‘à½„|à½‘à½„à¼‹|à¼‹à½£à½´|à½˜à½²à¼‹|à¼‹à½‘à½–|à½–à½„à¼‹|à½‘à½–à½„|à½£à½´à¼‹|à¼‹à½˜à½²|à½‚à½¦à¼‹|à¼‹à½¡à½¼|à¼‹à½ à½–|à¼‹à½à½¼|à¼‹à½¢à¼‹|à½²à¼‹à½‘|à¼‹à½‚à½²|à¼‹à½šà½´|à½‘à½ºà¼‹|à½”à½ à½²|à¼‹à½”à½ |à¾±à½²à¼‹|à½–à¼‹à½‘|à½¼à½–à¼‹|à½¡à½¼à½‘|à½à½¼à½–|à½„à¼‹à½‘|à½šà½´à¼‹|à½£à½¦à¼‹|à¼‹à½£à½¦|à½‚à¼‹à½¢|à½„à¼‹ |à½¼à½‘à¼‹|à½²à¼‹à½|à½ à½–à½‘|à½„à¼‹à½‚|à¼‹à½“à½²|à½–à½‘à¼‹|à½‚à½²à¼‹|à½´à½„à¼‹|à¼‹à½‘à½‚|à½‘à½‚à½¼|à½²à½“à¼‹|à½„à¼‹à½ |à½²à¼‹à½‚|à¼‹à½‚à¼‹|à¼‹à½ à½‘|à½¢à¾’à¾±|à½ºà½“à¼‹|à½²à½ à½²|à½´à¼‹ |à½¼à½‚à¼‹|à½²à¼‹à½¢|à½¦à¼‹à½ |à½‘à¼‹à½‘|à¼‹à½¢à½²|à½¼à½‚à½¦|à½¢à½„à¼‹|à½ºà½¦à¼‹|à½£à¼‹à½‘| à½‘à½º|à½„à¼‹à½¡|à½²à½‚à¼‹|à¼‹à½¨à½²|à½¨à½²à½“|à½˜à½¦à¼‹|à½¢à¼‹à½£|à½¼à½“à¼‹|à½¼à¼‹à½–|à¼‹ à½¢|à½²à¼‹à½¦|à¼‹à½–à¼‹|à¼‹à½¦à½¼|à½¼à½‘à¼|à½‚à¼‹à½£|à½„à¼‹à¼|à½‘à½£à¼‹|à½€à¾±à½²|à½“à½„à¼‹|à¼‹à½¡à½„|à¼‹à½€à¾±|à¼‹à½“à½„|à½¦à¼‹à½¦|à½ºà½£à¼‹|à¼‹à¼ |à½„à¼‹à½£|à½„à¼‹à½¦|à½˜à¼‹à½‚|à¼‹à½¦à¾|à¼‹à½‘à½£|à½²à¼‹à½–|à½‘à¼‹à½”|à½¼à½„à¼‹|à¾’à¾±à½£|à¾±à½£à¼‹|à½²à¼‹à½˜|à½“à¼‹à½‘|à¼‹à½‘à½º|à½²à¼‹ |à½²à½¦à¼‹|à¼‹à½†à½¼|à½„à½¦à¼‹|à½“à½²à¼‹|à½à¾²à½²|à½–à¼‹à½˜|à¼‹ à½‘|à½¦à¼‹ |à½¦à¾¤à¾±|à½‚à½¼à¼‹|à¼‹à½–à½ |à½–à½ à½²|à¼‹à½‚à¾±|à½¦à¼‹à½‚|à½¼à½¦à¼‹|à½…à½²à½‚|à½‚à¾²à½¼|à¼‹à½–à½¢|à½‚à¾±à½²|à¼‹à½–à½¦|à¼‹ à½ |à¼‹à½¢à½´|à½²à¼‹à½š|à½ºà¼‹à½¡|à¼ à½‘|à¾²à½¼à¼‹|à¼‹ à½‚|à½ à½‚à¾²|à½¢à½´à½„|à½´à¼‹à½‚|à¼‹à½…à½²|à½´à½‚à½¦|à½¡à½„à¼‹|à½–à½¦à¼‹|à¼‹à½¦à¾¤|à¼‹à½¢à¾’|à½„à¼‹à½¢|à½‘à½²à¼‹|à½ à½‘à½²|à¼‹à½‚à½ž|à½†à½¼à½‚|à½¦à¼‹à½˜|à½„à¼‹à½–|à¼‹à½¦à¾¡|à¼‹à½‰à½º|à½¦à¼‹à½£|à¾²à½²à½˜| à½˜à½²|à½²à½˜à½¦|à½“à¼‹ |à½“à¼‹à½¢|à½£à¼‹à½–|à¼‹à½˜à½º|à½„à½“à¼‹|à½¡à½„à½“|à½²à¼‹à½„|à½£à¼‹à½|à½“à¼‹à½‚|à¼‹à½–à½Ÿ|à½¦à¾à¾±|à¼‹à½–à½€|à½¦à¼‹à½”|à½¦à¼‹à½‘|à¼‹à½„à½¼|à¼‹à½”à¼‹|à¼‹à½šà½¼|à½¦à¼‹à½€|à½˜à½ºà½‘| à½¢à½„|à½¼à½ à½²|à½¢à½²à½‚|à½“à½²à½ |à¼‹ à½˜|à½¦à¼‹à½–|à¼‹à½¦à¾²|à½ºà½‘à¼‹|à½´à½¦à¼‹|à¼‹à½ à½‚|à½¦à¼‹à½š|à½„à¼‹à½š|à½šà½¼à½‚|à½à½–à¼‹|à½¦à¾¡à½º|à½‰à½ºà½“|à½¦à½¼à½ |à¼‹à½˜à¼‹|à¼‹à½à½–|à½²à½„à¼‹|à¾¤à¾±à½²|à½žà½²à¼‹|à½²à¼‹à½£|à¼‹à½‚à½|à¼‹à½ à½›|à½¼à¼‹à½”| à½¢à¾’|à½²à¼‹à½ |à½£à¼‹à½‚|à½à½¼à½‚|à½ à½–à¾²|à¾²à½ºà½£|à½“à¼‹à½¦|à¼‹à½‚à½“|à½˜à½²à½ |à½‘à¼‹à½˜|à½ºà¼‹à½–|à½¦à¼‹à½¡|à½¢à¼‹à½‘|à½à½„à¼‹|à½‘à½¼à½“|à½‘à½”à¼‹|à¼‹à½‘à½¼|à½¼à½˜à¼‹|à½–à¾²à½º|à½¢à¼‹à½¨|à½‰à½ºà½¦|à½¦à¼‹à½¢|à½£à½±à¼‹|à¼‹à½¢à½„|à½“à¼‹à½”|à¼‹à½à¾²|à½²à½‚à½¦|à¼‹à½†à¼‹|à½„à½¼à½˜|à½à½ºà¼‹|à½´à¼‹à½–|à¼‹à½¦à¾Ÿ|à¼‹à½à½º|à½„à¼‹à½˜|à¼‹à½¦à¾¦| à½ à½‚|à½ºà¼‹ |à½˜à¼‹à½ |à¼‹à½‚à½¼|à¼à½‚à¼‹|à½‚à½¼à¼|à½ºà¼‹à½£|à½‚à½²à½¦|à¼‹à½šà½‘|à¼‹à½ à½|à½¦à¾²à½´|à¾²à½´à½„|à½‚à½žà½²| à½¡à½„|à½¤à½ºà½¦|à½¼à¼‹à½¦|à½²à¼‹à½|à¾¡à½ºà¼‹|à½²à¼‹à½‰|à½‚à¼‹à½‚|à½‚à¼‹à½ |à½‚à½…à½²|à½„à¼‹à½“|à¼‹à½”à½¢|à½¼à½”à¼‹|à½‚à½¼à½”|à½„à½¼à½¦|à¼‹à½˜à½‰|à½¼à½„à½¦|à¼‹à½‚à½…|à½”à½¢à¼‹|à½–à½¢à¾©|à½“à¼‹à½£|à½ à½‘à¾²|à½˜à½‰à½˜|à½²à¼‹à½†|à¼‹ à½¦|à¼‹ à½–|à¼‹à½‚à¾²|à½‘à¼‹à½–|à½‘à¾²à¼‹|à½¦à¼‹à½|à½´à¼‹à½ |à½‚à¼‹à½¦|à¾à½–à½¦|à½¦à¾à½–|à½‰à½˜à¼‹|à½¦à¼‹à½“|à½šà½‘à¼‹|à½‚à½à½„|à½”à¼‹à½˜|à½¦à¼ | à½‚à¼‹|à½²à¼‹à½“|à½“à¼‹à½ |à½‚à¼‹à½‘|à½‘à¼à½‚|à½‘à¼ |à½ºà¼‹à½‘|à½¦à¾Ÿà½º|à½‚à½¡à½¼|à¼‹à½‚à½¡|à½¢à¾©à½²|à½¡à½¼à½‚|à½¼à½¢à¼‹|à½ à½›à½˜|à½›à½˜à¼‹|à¼‹à½‚à¾³|à½‚à¾³à½²|à½´à½£à¼‹|à¾³à½²à½„|à¼‹à½£à¾¡"
                    },
                    Hebrew: {
                        heb: "×•×ª |×™× |×›×œ |×ª ×”| ×›×œ|×“× |××“×|×™×•×ª| ×©×œ| ×–×›|×œ ×| ××“|×©×œ |×œ ×”|××™ |×•×™×•|×›××™|×ª ×•|×™ ×œ|×–×›×| ×•×œ|×œ× | ×•×”|×¨×•×ª|×–×›×•|×™×ª |×™×¨×•|×™×Ÿ | ××•|× ×–| ×œ×| ×”×—|××• | ×”×| ×•×‘| ×”×ž|×—×™×¨|×ª ×œ|×™×™×|× ×œ|××ª |×ª ×‘|×ª ×©|×¨×” |×•×Ÿ | ×œ×”|× ×” |×›×•×™|×•×ª×™|×” ×©|×• ×œ|×• ×‘| ×”×•|×ª ×|× ×‘|× ×•|×ª×• | ××ª|×œ×” |× ×™ |××•×ž| ×‘×ž|×“×” |× ×™|×” ×”|×” ×‘|×¢×œ |× ×”| ×¢×œ|×”×•×|×•×š |×” ×|×‘×•×“|×•×“ |×•××™|× ×•×ª|×” ×•|×ª ×›|×™ ×”|×™×” |× ×©|×• ×•| ×©×”|× ×|×• ×›|×™× ×•|×Ÿ ×”| ×©×•|×©×•×•|×”×—×™|×›×•×ª|×œ××•|×‘×•×ª|×“×•×ª|×” ×œ|×œ×™×ª|×” ×ž| ×‘×™|×•×” |×•× | ×”×™| ×œ×¤|×•×¨ | ×œ×‘|×œ ×‘|×‘×—×™|×”×›×¨|×œ×• |×ª ×ž|×Ÿ ×©|×”×—×•|×” ×›| ×‘×›|×•×ž×™|×‘×™×Ÿ|×Ÿ ×•|×Ÿ ×œ|×¨×•×™|×¤×œ×™|×•×œ×”|×œ×™×”| ×”×–|×—×™× | ×œ×¢| ×‘× |×™×‘×•|×—×•×§| ××—|×—×‘×¨| ×™×”| ×—×™|×ž×™ |×™×¨×”| ×—×•|×”××“|×•×•×”|×—×•×¤|×•×¤×©|×•×§ |× ×• |×™×• |×œ ×ž|×ž×“×™|×›×‘×•| ×”×¢|× ×•×š| ×”×“|×™ ×|×™ ×•| ×”×›|×‘× ×™|×¢×” |×• ×|×¨×¦×•|×“×™× |×‘×–×›|×ž×•×ª|×™×¤×•| ××œ|×¡×•×“|×œ× |××™×©|×¨×š | ××™|×”×’× |×”× |×¤×™ |× ×›|×—×•×ª|×œ ×•|××™×œ|×™×œ×™|×ª×™×”|×›×œ×œ|××œ×™|×™×¡×•|×”××•|×–×© | ×‘×|×¨ ×|×• ×”|×–×• |××—×¨| ×”×¤| ×‘×¢| ×‘×–|×ž×©×¤| ×‘×”| ×œ×—|×“×¨×š|×•×ž×•| ×‘×—| ×“×¨| ×ž×¢|×œ ×™|×ª×•×š|×ž× ×•| ×‘×©|×œ×œ |×¨×‘×•| ×œ×ž|×¤× ×™| ×œ×§|×ª× |×©×” |×©×™×ª|×œ×œ×|×œ×¤×™|×”×™×”|×ž×¢×©|×“×• |×©×•×ª|×œ×”×’|×•×¦×™|×©×•×|××™×Ÿ|×•×™ |×ª×™ |×•× ×•|×œ×™×œ| ×œ×•|×—×™×™|×œ ×–| ×–×•|×”×™×|×™× |× ×ª×•|×” ×¤|×œ×ª |×•×‘×™| ×œ×›|×š ×”|×™×œ |×™ ×©|×©×™×•|×Ÿ ×‘|×¢×•×œ|×”×ž×“|×•×“×”|×•×œ×| ×•×ž|× ×”|×•×œ×| ×‘×ª|×”×›×œ| ×¡×•| ×ž×©| ×¢×‘|×¡×•×¦|××¨×¦| ××¨|×¦×™×|×“ ×|×œ×—×™|×”×Ÿ |×™×—×¡| ×™×—|×™××œ|×”×–×›|× × | ×©×¨|×‘×• |×¢×‘×•|×”×™×¡| ×œ×™|×ª ×–|×¤×•×œ|×™×”×™|×’×‘×œ|×ª×™×•|×”×ž×|×©×”×™|× ×œ|×ž××•| ×™×•|×•×ª×•|×™×©×™|×’× ×”|×¤×©×™|×•×—×“|×™×”×|×—×¨×•|×œ×›×œ|×™×“×”|×¢×•×ª|×•× ×”|×•× |×—×” |×¢× |×©×¨×™|× ×™|×©×¨ |×•×”×—| ××©| ×”×’|×§ ×‘|×”×¤×œ|× ×©×•|×”×’×‘|×“ ×•",
                        ydd: " ×¤Ö¿|×•×Ÿ |×¢×¨ |×Ÿ ×| ×Ö·|×“×¢×¨|×˜ ×| ××•|××•×Ÿ|×Ö·×¨|×¢×Ÿ |×¤Ö¿×•| ××±| ××™|×Ÿ ×¤|Ö¿×•×Ÿ|×¨×¢×›| ×“×¢| ×¨×¢|×¢×›×˜|×¤Ö¿×|×Ÿ ×“|×›×˜ | ×“×™|×“×™ |×Ö· |××±×£|×±×£ |Ö¿×Ö·| ×–×²| ×’×¢|×Ö·×œ|×Ö¸×¡| ×Ö¸|×•× ×’| ×”×|×”×Ö¸|×–×²Ö·| ×ž×¢|×Ö¸×œ|× ×’ |×°×Ö¸|Ö·×Ÿ |×Ö·× |×¨×²Ö·| ×°×|Ö¸×¡ |×‘×Ö·| ×™×¢|×™×¢×“|× ×™×˜|×Ÿ ×–|×¨ ×|×™×˜ |×Ö¸×˜|×Ö¸×¨|×¢×“×¢|×ž×¢×Ÿ|×–×Ö¸|Ö¸×˜ |×¤Ö¿×¨|×²Ö·×Ÿ| ×‘×|×˜×Ÿ |××™×Ÿ|×Ÿ ×’|×™×Ÿ |×Ÿ ×°|× ×Ö·|Ö¿×¨×²|×¨ ×”| ×–×|×œ×¢×›|×¢ ×|×Ö¸×“|Ö· ×¨|×¢× ×˜|×Ö·×¦|Ö·×¦×™|×Ö¸× | ×¦×•| ×°×¢|×™×– |×ž×¢× |Ö¸×“×¢|××™×–|×Ÿ ×ž|Ö·×œ×¢|×‘×Ÿ |×¨ ×ž|×˜×¢×¨| ×ž×™| ×¤Ö¼|×ž×™×˜|×˜×œ×¢|Ö¸×œ |×¢×›×¢|×²×˜ |Ö·× ×“|×¢ ×¤|×œ×¢ |×’×¢×–|×œ×Ö·|×Ö·×¤|×¢×–×¢|×¨×Ö·| × ×™|Ö·×¤Ö¿|×¨×Ÿ |×²Ö·× |× ×¢×Ÿ|×˜×™×§|×›×¢ |×¤Ö¿×¢|×™×¢ |×”×²×˜|Ö·×”×²|× ×˜×©|×²Ö·×”|×˜ ×“|×Ÿ ×‘|×œ×Ÿ |×Ÿ × |×¤Ö¿×˜|×©×Ö·|×¨×•× | ×–×™| ×°×™|×˜ ×¤| ×“×|×˜×Ö¸|×“×™×§|×§×Ÿ |×¨ ×¤|×¨ ×’|×™×§×Ÿ|×Ö¸×‘|×£ ×|×Ö·×§|×§×¢×¨|×¢×¨×¢|×›×¢×¨|×™ ×¤|×•×ª |Ö·×¨×‘|×¤Ö¼×¨|×§×˜ |×¢× |×™×Ö¸|×¦×™×¢|×¦×™×|×™×˜Ö¾|×¦×• |×™×©×¢| ×§×²|×Ÿ ×§|×¡×¢×¨| ×’×œ|×“×Ö¸|×•× ×˜|×’×Ÿ |Ö·×¨×|×™×§×¢| ×˜×|×¢× ×¢|×œ×²Ö·|×©×Ÿ |Ö·× ×¢|×™×§ |×˜×Ö·|×¡ ×|×¢×˜ |× ×’×¢|×˜Ö¾×|Ö¸× ×|Ö¾××™|×™×§×˜|× ×˜×¢|×²× ×¢|Ö¾× ×™|Ö¸×¨ |×°×¢×¨|×™ ×|×Ÿ ×™|×™×š |×–×™×š|×¢×¨Ö¾|×¢×¨×Ÿ|××±×¡|Ö¸×‘×Ÿ|× ×“×¢|Ö¸×¡×¢|×°×™ |Ö¿×¢×œ|×¨Ö¾× |×Ÿ ×”| ×’×¨|×’×œ×²| ×¦×™|×¨×Ö¸|×–×¢×œ|×¢×œ×§|× ×“ |×œ×§×¢|×Ö¸×¤| ×›Ö¼|×˜ ×°|×’ ×| × ×|×˜ ×¦|×¨ ×“|×¢×¡ |×“×•×¨|×’×¢×Ÿ|×§×¢ |×’ ×¤|Ö¿×˜ |×Ÿ ×œ|×©×¢ |×¨ ×–|×¨×¢ |×²×˜×Ÿ|×¤Ö¼×¢|×§×œ×|×§×²×˜|×™×˜×¢|×™× |×¡ ×–|×²Ö· | ×“×•|×Ö·×˜| ×œ×|×¨ ×°|×§×²× |×¢×œ×©|×™ ×“|×œ×©×|×™×•×ª|× ×˜ |Ö·×¨×–|×¢ ×¨|×œ ×–|×Ö·×ž|×Ÿ ×©| ×©×•|××™× |× ×˜×œ| ×”×™|×‘×¢×˜|Ö¸×¤Ö¼|×£ ×¤|×²Ö·×›|×‘×¢×¨|×Ÿ ×¦|×ž×Ö¸| ×©×˜| ×œ×¢|×’×¢×¨|×•×¨×š|×¨×š |× ×¢×|×’×¨×•|×¤Ö¿×Ÿ|×œ×¢×¨|×°×¢×œ|×¢ ×ž|×•× |×©×¤Ö¼|×š ×|×™×•× |×¨×‘×¢|×¢×¤Ö¿|×˜×¢×˜|×Ÿ ×›|×¨×¢×¡|×¢×¨×¦|×– ×|×¢×ž×¢|× ×|×©×˜×¢|×›×Ÿ |×¨×˜ |×™ ×’|×¡×Ÿ |× ×¢×¨|×œ×™×˜|×˜ ×–|× ×¢×ž|Ö¼×¨×|×”×™×•|×Ö·×©|×ª ×°|××•×ž|×§ ×|×™×‘×¢|Ö¿×Ÿ |×¥ ×|×¤Ö¿×™|×²×Ÿ |× ×˜"
                    },
                    Canadian_Aboriginal: {
                        csw: "á‘­á’‹ | á‘­á’‹|á“€á¢á‘•| á“€á¢|á¢á‘• | á‘² | á | á±á‘¯|á“‚á  |á’¥á“¯áŒ|á  á“€|á“¯áŸ |á±á‘¯ |áŽá£ |á‘¯áŽá“¯|áŽá“‚á | áƒá”‘|áŽá“‡ |á“¯áŒ |á’‹ áƒ|áŸ á“€|á“‚á¤ |á  á‘­|á—á  |áá‘² |á’¥á“‚á‘¯| á‘Žá¯| á’¥á“‚|áƒá”‘ | áƒá“‚|á‘• á±|áŒá“‡ |áŠáŒá“‡|á“‚á‘¯áŽ| áŠáŒ|áƒá“‚á“‚| á…á’‹| áŠá¢|á…áŸ |áŠá¢á‘­| á…áŸ|á’‹á  |áŒ áŠ|á“‚á“‚á¤|á  á…| áá‘²|á‘•á‘¯á“¯|á“‚á—á |á™®á’¥á“¯|á’‹ áŠ|á…á’‹ | á‘²á“‡|á‘² á‘­|á“¯áŽá“‡| á’¥á“¯|áŸ á‘­|áŸ áƒ| áá”‘|á‘Œá“‚á‘•|á“‡ á|á“‚á’¥á‘Ž| áŠá“‚| á¯á”­|á  á|á‘• á|á“‚á‘•á‘¯|áŸ á…| áƒá‘•|á‘• á‘­|á‘Žá¯á“‚|á¯á“‚á’¥|áá”‘ | áŠá¸|áŽá“¯áŸ|á‘•á¢á‘²|á“¯áŽá“‚|áŸ áŠ|áŽá“¯áŽ|á‘­á  |á‘• á‘²|á¯á”­á‘¾| á‘­á¢|á’‹ á…|á‘² á…|áŽá“‚á“‚|á‘•á’§áŽ| áƒá¢|á‘¯á“¯áŸ|á¢á‘­á |á‘Žá“¯áŽ|á“‚á‘•á’§|á‘² áŠ|á”‘ á‘²|á‘Œá  |á  á‘²|á’‹á‘²á‘Œ|á¤ á‘­|á£ á‘­| á±á’‹|á“¯áŽá£|á‘²á  |á‘²á‘Œá |áƒá¢á±|á“‡á—á¸|á¢á‘²á“€|á‘•áŸ |á‘² á±| á…á‘­|á‘áŽá“‚|á±á’‹ |á‘²á“‡á—|á’‹ á’¥| áƒá‘—|á“‚á’‹á‘²|á¢á± |á’‹ á‘­|á‘²á“€á“¯|á  áƒ|á’¥á‘Žá“±|á’§áŽá£|á‘•á  |á‘­ áƒ| áƒá‘Œ|á’‹ á“‡|á¢á‘²á’¥|á¢á‘Œá“‚|áƒá‘•á¢|á£ á“€|á  á±|á“‡ á“€|á‘¾á£ |á‘¯á“¯áŽ| á…á“‡|á  áŠ| á‘Žá¸|á¤ á“€|á“‚á“‚á | á…á‘Ž|áƒá‘Œá“‚|á‘² áƒ|á’‹ á“‚|á“€á“¯áŽ| á…á‘•|á—á¸á’¥|á± á‘²|á‘­á¢á‘Œ| áŽá’‹|á‘¯ á‘­|á‘•á“‚á—|á‘¾á  | á‘•áº|á‘• á…|á¤ á|á“‚á“‚á—|á á™®á’¥|á’¥áŸ |á”“áŒáŽ|á“‡á”“áŒ|á“‚á“‚áŽ| áŠá”­|áŠá¸á‘Ž|á¸á‘Žá“¯|á‘Žá“±áŽ|á’‹ á’ª|á‘• áŠ| á’ªá‘²|á±á’ªá‘Ž| á‘­ |á…á‘­á’ª|á’‹ á‘²|á™® á|á‘²á“‡áŒ|á“‚á á™®|á“‡áŒá“‚|áŒáŽá“‚| á‘« |á…á’ª |á“‚áŽ |á™®áá‘²| á‘¯á‘•|á”¦á“‚á‘•| á…á’ª|á£ á|á’ªá‘²á |á’ªá‘Žá“¯|á’¥á‘¯áŽ|á”­á‘¾á£|á‘•áŒá“‚|á…á“‡á”“|á“‚á‘­ | á‘«á‘¾|áŸ á|á”‘ á’¥|á’ªá‘² |áŠá”­á’¥|á’ªáŸ |á“‚áƒ |áŠá“‚áƒ|á  á’¥| á“‚á¸|á“‚á¸áŽ|á¸áŽá’ª|áŽá’ªá‘²|á á’¥| á’ªá’ª|á‘­á’ªáŽ|á’ªáŽáŽ|á“‚á’¥á‘¯|á áƒ|áºá”¦á“‚|á‘•áºá”¦|á‘­á”­ |á‘Žá“¯áŸ|á’ªá’ªáŽ|á¢á‘¯á“‚|á’ªáŽ |á“‚á”‘á’‹|áŽ á’¥|á‘«áŽá“‚|á‘² á‘Ž| áŠá”‘| á“‡á‘•|á“‡áŒ |á¸á’¥áŸ|á¸á’‹á‘•|á¸á‘­á‘Ž|á”­á‘¾á“„|á‘• á’¥| á±á’ª|á’‹ á±|á‘¯áŸ |á“„á  | á‘á‘•|áŒá“‚á’¥|á á‘­| á—á“‚| á‘²á‘•|á—á“‚á”‘|áŽá£á™®|á‘Žá“‡á’ª|á’‹á‘•áŸ| á¸á‘­|á“‡ á‘­|á¤ á‘²|á“‡ á‘²|á’‹ á¸|á”‘á’‹á‘«|áŠá¸á’‹|á‘á‘•á’§|á‘Žá¯á“‡|á‘­ áŠ|á‘¯á‘•á‘­|á‘• á‘Ž|á£ á…|áŒá“‚á‘•|á’¥á‘Žá“¯|áŽáŽá“‚|á‘² á|á’‹á‘«áŽ|á“‡á¢á‘¯|á‘á’‹á |áƒáŸ |á‘Œá‘­ |á‘²á‘Œá‘­|áŽá‘­á‘|á¯á“‡áŒ|áŠá“‚á‘­|á“¯á¤ |áŒ á‘²|á“‚á‘•á‘¾|á’‹ á‘Ž|áƒá‘—áŽ| áŽá“‡|á‘•á’ªá‘«|á‘Žá¯á£| áŽá‘­|á‘¾á“„á |á£á‘• |á¸á¢á‘¯|á‘¯á“‚á‘²|á”‘á“‡á‘¾|á’¥á  |á‘²á’¥á |áŒá¢á‘²|á“¯áŒá¢|áŸ á±|á”‘ á“‚|á á™® |á“¯á’‹á |á¨ á‘²| á±á‘|á  á¸|á“‡á‘•á’ª|á‘² á—|á‘¯ á‘²| á‘¾á”­|á‘¾á”­á¢|á’‹á á™®| áá‘¯|á’ª á‘²",
                        ojb: "áŽá“ |á“ á‘²|á“‚á’ƒ | á‘²áƒ|á’ƒ á‘²| á’¥á“‡|á‘²áƒá”‘|á‘•á‘¯á“¯|á—á’ƒ |á’¥á“‡ |á“¯áŽá“|áŽá“‚á’ƒ| á‘²á‘­|á“ á…|á‘«á‘•á‘¯|á‘Œá¸á‘«|á‘¯á“¯áŽ|á¸á‘«á‘•|á‘²á”¦ | á‘Œá¸| á‘²á”¦|á’ƒ á’¥| á…á‘•|á“ á’¥|á…á’‹ |á“‚á—á’ƒ|áƒá”‘ |á‘²á‘­á“‡|á‘­á“ |á’ƒ á’‹|á“‡á“ |á’ƒ á…|á“€á“ |á’¥á“¯áŒ|á—á‘¦ |á‘¦ á‘²|á“ á‘Œ| á’¥á“¯|á‘­á“‡áŒ|á…á‘•á”­|á‘Œá’ƒ |á’‹á‘²á‘Œ|áŒá“€á“|á‘¦ á…|á“‡áŒá“€|á‘«áŽá“|á“‡á“‚á—|á”­á“ | á’‹áƒ|á‘¯á“‚á‘«|á“ á’‹|á’‹áƒá”‘| á…á’‹| áƒá”‘|á‘•á”­á“|á“‡á— |á‘²á‘Œá’ƒ|á“‚á‘«áŽ| á’‹á…|áŽá“‡á“|á‘¾á’ƒ | á‘Žá¯| á‘²á…|á“ áŠ|á‘•á”¥ |á‘Œá‘­á“|á’ƒ áŠ|á’ªá‘Žá“¯| á’‹á‘­|áƒá”‘á“‡|á“‡ á‘²| á…á’ª|á‘²áŽá“|á¸á“ | á’‹áŠ| á‘²áŽ| á±á‘¯| áŠá‘­|á‘²á‘Œá‘­|á“¯á‘¦ |á’ƒ á‘­|á‘«áŽá“‚|áŠáŽá”­|á…á’ª |á“ áƒ|á…áŒ | áŠáŽ|á“‚á’¥á‘Ž|á‘Žá¯á“‚|á‘­á’ƒ |á‘•á’ƒ |á±á‘¯ |áŒá“‚ |á“¯áŒá‘²|á“¯áŒ |á‘²á“‡áŒ|á’¥á“‡á—|á¯á“‚á’¥| áŠá“‚|á“„á“ |á±á’ªá‘Ž|áŽá‘¦ |á“‡á‘¯á“‚|á‘•á‘¾á’ƒ|á’‹á…á’‹|áŠá‘­á’ƒ|á’¥á’ƒ |á‘²á’¥á’ƒ|á“‚á‘²á‘Œ|áŒá‘²á’¥|á‘²á…á’‹|á‘Žá¸á‘¯| á’£á‘¾|á’£á‘¾ | á‘Žá¸|á’ƒ á‘«|á‘Žá“±áŽ|á—á“ | áƒá‘•|á“ á‘«| á‘²áŠ|áŽá”­ | á‘²á‘•| á‘«á’ª|á‘«á’ª | á‘­á’‹| á…áŒ|áƒá‘•á”¥| á‘­áƒ|á‘­á‘«á‘•| á‘«á‘¯|á¸á‘¯á“‚|á‘²á“ |á”­á’ƒ |á’ª á‘²|á‘ŽáŽá“‚|á“‡ á’‹|á‘á’‹á‘²|á’¥á‘Žá“±|á—á¨ |á’ƒ áƒ|á“ á|á’§áŽá“|á‘¦ áŠ|áƒá”‘á’‹|áƒá’ª |áŒ áƒ|á‘²á“‚áŽ| á’ªá’ª|á‘­á“‡ | á‘•á±| á‘²á“‡|áƒá”‘áŠ|á“‚á—á“|á“‚ á…|á‘¯ á’‹|á“‡áŒá‘•|áƒá‘¯ | áƒá‘¯|á’ª áŠ|á’‹á‘«áŽ|á“ á‘­|áƒá“€á‘•|á“ á‘•| á…á‘Ž|áƒá”‘á‘­| á…á“‡|á‘•á±á‘•|á‘Žá“‡á“‚|á’‹ á‘²|á“¯áŽá“‡|á‘Žá“¯á‘¦|á”­ á‘•|áŠá“„á‘­|á“±áŽá“‚| á±á“´| á‘¯á‘•| á‘•áƒ|á‘«á‘•á‘¾|á…á‘­á’ª|á±á‘• | áŠá”­|á’‹áŽá‘Ž| á‘«áŽ|á…áŒá“‚|á‘²á’ƒ |á‘­áƒá”‘| á’‹á‘²|á‘«áŽá“‡| á’¥á…|á‘Žá¯á‘•|á’¥á…áŒ|á”¥ á’£|á”‘á“‡á‘¾|á“ á’ª| áƒá’ª|á“¯á“‡áƒ|á‘Žá“¯áŽ|á‘²á“‚á—|á‘­á’‹áƒ|á’‹áƒá“€|á‘¯ á‘²|á“ á±|áƒá‘ŽáŽ| áá”‘|á‘²á“€á“¯|á“ áŽ|á‘•á‘²á“€|á…á“‡á‘¯|á’‹áŠá”­|á‘• áƒ|á”‘á“‡á‘¯|á— á‘²|á‘•áƒá”‘|á‘Œá“‚á’ƒ|á¯á’ªá‘Ž| á‘²á‘Ž| áƒá“‡| á‘Žá±| á¯á’ª|á‘•á‘¾á‘­|áƒá“‡á‘¯|á‘«á‘¦ | á‘¾á”­|á¸á’‹á’§|á“‡á—á¸|á“ á’£|á”¦ á‘­|á“±áŽá“|á’ƒ á±|á“ á‘Ž|á“¯áŽá“‚|á“‡á‘¯á“¯|á”¦ á’‹|á“¯á“‡á“‚|á’ƒ á‘Ž|á“¯á“„á“|áŒ áŠ|á’§á—á‘¦|á“‡áƒá‘²|á±áƒá‘²|áƒá‘²á“‚|á’ªá“¯á“‡| á’ªá“¯|á”‘ áŠ|á‘Žá¸á’‹|á‘¦ á‘Œ|á’ƒ á’ª|áŽá‘Žá‘«|á‘¾á”­á’ƒ|á’‹á’§áŽ|á‘­á‘²á“‡|á“¯á’ƒ |áƒá‘²á‘Œ|áŒá“‚á’¥| á’ªá—|á±á“‚á‘²|á‘²á‘Œá“‚| áŠá“„|á…á‘•á±|á“‚áŽá‘¦|á’ªá’ªá”‘|á‘•á’§á—|á“‡ áŠ|á±áƒá‘Ž|á‘¦ á’‹|á‘¯á“ |á…á‘•á‘­|á‘•á’§áŽ|áŽá’‹áŽ|á…á‘¾á±|á‘¦ á’¥| á…á‘¾|á¤ á…|á’‹á‘²á“‚|á’ªá¤ |á’ªá’ªá¤| á‘­á”¥|áŒ á‘²|á‘­á”¥á±|á±á“‡áŒ|áƒá”‘á‘•|á‘Žá±á“‡|á”¥á±á“|á‘­á¸á“|á‘«á‘¯á“‡|á’¥á‘•á”¥|á‘²á“‚á’ƒ|á±á“ |á‘¯á“‡á“|á”‘á‘­á‘«|á…á”‘á±| á…á”‘|á‘²á“‡á—| á±á’ª|á‘¯á“¯á‘¦|á‘­á‘áŽ|á±á“´á“|á“´á“ |á‘²áƒá“‡",
                        ike: "á‘¦ áŠ|áŠá’»á’ª|áƒá“á“‡|á’»á’ªá“—|á’ªá“— | áŠá’»|á‘áƒá“|á‘¦ áƒ|á‘¦á‘ŽáŠ|á‘¯á‘¦ |á’ƒá‘¯á‘¦|á”ªá“á“‡|á“„á‘¦ |á’á‘¦ |á“‚á’ƒá‘¯|á“á“‡á…|á‘¦ á±| á±á”ª|á“‡á…á‘Ž|á‘Žá–ƒá•|á…á‘Žá–ƒ|á’§á‘¦ |á±á”ªá“|á’ƒá“´á…|á“‚á’ƒ | á‘­á“‡|á’¥á’ƒ |á“‡á’ƒá‘¯| áƒá“±| áƒá“…|á’ƒ áŠ|á“á“‡á•| á‘•á’ª|á‘Žá’ƒ |á“‚á•á’¥| á…á•|á…á•á•™|á‘­á“‡á’ƒ|áƒá“±á’ª|á‘¦ á…|á‘Žá’á‘¦|á’‹á‘¦ |á’ƒá‘¯á‘|á‘¦ á‘­|á‘¯á‘áƒ|á•á“‚á•|á“á“ƒá‘¦|á“ƒá‘¦ |á“˜á“á“ƒ|á“—á’ |á“á“‡á–…|á•á”ªáŠ|á–ƒá–…á‘|á³á‘¦ |á•á’§á‘¦|á•™á“˜á“|á‘á’ƒá“´|á•á•™á“˜|áŠá‘¦ |á–…á‘á’ƒ|á•ˆá“á“‡|á“—á“‚ | á“„á“‡|á“‡á•á“‚|á‘ŽáŠá‘¦|á“—á’‹á‘¦|á–ƒá•á³|á‘Žá‘¦á‘Ž|á“‡á‘¦á‘Ž|á–…á‘•á…|á“‚á•á’§|á”ªáŠá•|á•á“‚á’ƒ|á•á³á‘¦|á“‡á–… |á•á“¯á’ª|á‘¦ á‘•|á•á’¥á’ƒ|á–ƒá•á“‚|á‘Žá‘•á…|á“— áƒ|á“´á…á™±|áŠá•á’¥|á“•á’«á‘¦|á“‚á–… |á‘¦ á“‡|á“— áŠ|á“á“‡á‘¦|á‘¦ á“´|á“—á‘Žá’ƒ|á“ªá“—á’|á”¾á”ªá‘Ž|áŠá•á“‚| á“¯á“š|á“¯á’ªá”ª|á“±á’ªá–…|á±á–á”­|á“¯á“šá•|á“šá•á”ª| áŠá”¾| á±á–|á•á’¥á…|á…á™±á“š|á–…á‘áƒ|á‘á‘¦ |á’ªá–…á“±|á–… áŠ|á“‚ áŠ|áŠá”¾á”¨|á”ªá‘¦ |á…á“¯á’ª|á’ƒ áƒ|á–… áƒ|á‘ŽáŠá–…|á–ƒá‘Žá’Œ| áƒá“„|á•á“—á“‚|á‘ŽáŠá•|á•†áŠá–ƒ|á‘•á…á“¯| áƒá“•|á“šá–… |á…á‘‰ |á‘¦ á“¯|á“ªá“—á’‹|á’‹á”­á…|áƒá“…á–ƒ|á™±á“šá–…|á‘Žá“ªá“—|á’ªá‘¦ |á‘•á…á”ª|á“— á“‡|á’«á‘¦á‘Ž| áƒá“š|á‘¦ á‘²|á–•á’¥á“‚|á‘¦ á“„|á–á“ªá“—|á–•á’‹á“| áŠá–‘|á“‡á–•á’¥|á“‚á‘áƒ| á“‡á–•|á“±á•ˆá“| áŠá‘|áŠá–‘á‘Ž|á“á“‚áŠ|á”­á…á”ª|á“¯á’ªá“‚|á–¢á‘Žá’ƒ| á“‡á“‚|á–…á“±á•ˆ| á…á–ƒ|á–…á‘Žá‘¦|á“— á±|á“¯á…á‘Ž| á“´á³|á…á“‚á’ƒ|á‘•á’ªá’ƒ|á”¾á”¨á…|á“á“‡á“•|á•—á‘¦ |á“‡á“‚á‘| áƒá‘²|á“‡á“•á’«|á‘•á…á“‚|áŠá–…á‘|á…á”ªá‘¦| á–ƒá“„|áƒá“…á“¯|áƒá‘²á”ª|á“‡á“±áŠ|á–ƒá‘¦á‘Ž|á•á–¢á‘Ž|á’¥á“‚á’ƒ|á“á“‡áƒ|á“ªá“•áŠ|á‘²á”ªá–…| áŠá•|á’¥á’á‘¦|á“´á³á’»|á”ªá–ƒá–…|á³á’»á’¥|á–… á±| á’ªá“•|á’ƒá‘Žá’|á’»á’¥á”­| á“´á“‡|á’ƒ á±|á’ áŠ|áŠá–… |á–…á‘Žá‘•|á…á”ªá’¥|á–ƒá“„áƒ|áŠá•á“‡|á“‚ áƒ|á‘¦ á–ƒ|áŠá•á“—|á…á‘¦ |á”ªá–…á‘|á‘¦á‘Žá”ª|á•á“±áŠ|á•á“‚á–…|á–…á“¯á…| á“‡á“ª|áƒá’ªáƒ|á‘Žá“„á‘¦| áƒá’ª| áŠá“¯|á”­á…á‘Ž|á“á“‡ |á–‘á‘Žá…|áƒá’»á’ª|áƒá‘¦ |á“‡á“ªá“•|á’ƒá‘¯áŠ| áŠá‘­|á’ªá’ƒá‘¯|á’¥á’ƒá‘Ž|á“•á…á–…|á“‡áƒá‘¦|á‘¯áŠ |á…á‘Žá…|á“‚á•ˆáŠ| á“‚á•ˆ|á•á“—á‘Ž|áŠá–•á’|á‘Žá…á”ª| á’á•™|á“ªá“šá•†|á“— á‘•| á“‡á“—|á“±áŠá•| á‘²á‘Ž|á”­á’¥á“‚|á‘á”¾á”¨|á“‡á“—á“‡|á“—á“‡áƒ|á“‚áŠá•| áŠá“‚|á“‚ á±|á–“á“„á‘¦|á–“á“‚á’ƒ|á–á‘Žá’‹|á•á’¥á’| á“ˆá“š|á‘¦ á’ª|á•á••á–ƒ| á‘²á‘|á’ƒ á…|á–“á’á‘¦|á’ªáƒá’»|á”ªá’ƒá“´|áŠá–ƒá•|á”ªá–… |á’»á’ªá‘¦|á“…á–ƒá‘Ž|á“±á’ªá’‹|á‘¦ á‘|á’¥á”­á…|á’ªá•á’¥|á•ˆá‘•á…|á‘•á’ªá•|á–… á‘­| á‘­á’¡|á“„á“‡á’‹|á“‡á’‹á”­|á“‚áŠá–…|á’¥á“‚á–…|á“‡á‘áƒ|á“‚á–ƒá•|áŠá•†á“—|á“‚á‘¦ |á’ªá‘• |á™±á“ªá“—| áŠá‘•|á”ªá’¥á’ƒ|á“ªá“—á‘Ž|á‘Žá–ƒá‘¦|á–…á‘²á–…|á–•á’ |á’ªá…á‘Ž| áŠá–|á“á“‚á’ƒ|á‘Žá”ªá–ƒ|á••á–ƒá–…|áƒá–…á‘²|á…á”ªá“|á“ªá“—á“‚| áƒá–…|á™±á‘¦á‘|áƒá”¾á”ª|á‘²á‘á”¾|á’¥á…á“„|á…á“„á‘¦|á‘Žá“‚á’ƒ|á’á•™á’ª|á’ƒ á‘­|á“±áŠá•†|á“á“„á‘¦"
                    }
                }
            }, {}],
        2: [function (a, i, e) {
                i.exports = {
                    cmn: /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FCC\uF900-\uFA6D\uFA70-\uFAD9]|[\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/g,
                    Latin: /[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]/g,
                    Cyrillic: /[\u0400-\u0484\u0487-\u052F\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69D\uA69F]/g,
                    Arabic: /[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061E\u0620-\u063F\u0641-\u064A\u0656-\u065F\u066A-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u08A0-\u08B2\u08E4-\u08FF\uFB50-\uFBC1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFD\uFE70-\uFE74\uFE76-\uFEFC]|\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/g,
                    ben: /[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FB]/g,
                    Devanagari: /[\u0900-\u0950\u0953-\u0963\u0966-\u097F\uA8E0-\uA8FB]/g,
                    jpn: /[\u3041-\u3096\u309D-\u309F]|\uD82C\uDC01|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82C\uDC00/g,
                    kor: /[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,
                    tel: /[\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7F]/g,
                    tam: /[\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA]/g,
                    guj: /[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1]/g,
                    kan: /[\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2]/g,
                    mal: /[\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D75\u0D79-\u0D7F]/g,
                    Myanmar: /[\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F]/g,
                    ori: /[\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B77]/g,
                    pan: /[\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75]/g,
                    Ethiopic: /[\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]/g,
                    tha: /[\u0E01-\u0E3A\u0E40-\u0E5B]/g,
                    sin: /[\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4]|\uD804[\uDDE1-\uDDF4]/g,
                    ell: /[\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65]|\uD800[\uDD40-\uDD8C\uDDA0]|\uD834[\uDE00-\uDE45]/g,
                    khm: /[\u1780-\u17DD\u17E0-\u17E9\u17F0-\u17F9\u19E0-\u19FF]/g,
                    hye: /[\u0531-\u0556\u0559-\u055F\u0561-\u0587\u058A\u058D-\u058F\uFB13-\uFB17]/g,
                    sat: /[\u1C50-\u1C7F]/g,
                    Tibetan: /[\u0F00-\u0F47\u0F49-\u0F6C\u0F71-\u0F97\u0F99-\u0FBC\u0FBE-\u0FCC\u0FCE-\u0FD4\u0FD9\u0FDA]/g,
                    Hebrew: /[\u0591-\u05C7\u05D0-\u05EA\u05F0-\u05F4\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFB4F]/g,
                    kat: /[\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u10FF\u2D00-\u2D25\u2D27\u2D2D]/g,
                    lao: /[\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF]/g,
                    zgh: /[\u2D30-\u2D67\u2D6F\u2D70\u2D7F]/g,
                    iii: /[\uA000-\uA48C\uA490-\uA4C6]/g,
                    aii: /[\u0700-\u070D\u070F-\u074A\u074D-\u074F]/g,
                    div: /[\u0780-\u07B1]/g,
                    vai: /[\uA500-\uA62B]/g,
                    Canadian_Aboriginal: /[\u1400-\u167F\u18B0-\u18F5]/g,
                    ccp: /\uD804[\uDD00-\uDD34\uDD36-\uDD43]/g,
                    chr: /[\u13A0-\u13F4]/g,
                    kkh: /[\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA0-\u1AAD]/g,
                    blt: /[\uAA80-\uAAC2\uAADB-\uAADF]/g
                }
            }, {}],
        3: [function (a, i, e) {
                function n(a) {
                    return String(a).replace(/\s+/g, " ")
                }
                i.exports = n
            }, {}],
        4: [function (a, i, e) {
                function n(a) {
                    function i(i) {
                        var e, n = [];
                        if (null === i || void 0 === i)
                            return n;
                        if (i = String(i), (e = i.length - a + 1) < 1)
                            return n;
                        for (; e--; )
                            n[e] = i.substr(e, a);
                        return n
                    }
                    if ("number" != typeof a || isNaN(a) || a < 1 || a === 1 / 0)
                        throw new Error("`" + a + "` is not a valid argument for n-gram");
                    return i
                }
                i.exports = e = n, e.bigram = n(2), e.trigram = n(3)
            }, {}],
        5: [function (a, i, e) {
                function n(a) {
                    return null === a || void 0 === a ? "" : k(m(String(a).replace(/[\u0021-\u0040]+/g, " "))).toLowerCase()
                }

                function t(a) {
                    return l(" " + n(a) + " ")
                }

                function o(a) {
                    for (var i, e = t(a), n = e.length, o = {}; n--; )
                        i = e[n], d.call(o, i) ? o[i]++ : o[i] = 1;
                    return o
                }

                function u(a) {
                    var i, e = o(a),
                            n = [];
                    for (i in e)
                        n.push([i, e[i]]);
                    return n.sort(r), n
                }

                function s(a) {
                    for (var i, e = a.length, n = {}; e--; )
                        i = a[e], n[i[0]] = i[1];
                    return n
                }

                function r(a, i) {
                    return a[1] - i[1]
                }
                var l = a("n-gram").trigram,
                        m = a("collapse-white-space"),
                        k = a("trim"),
                        d = {}.hasOwnProperty;
                e.clean = n, e.trigrams = t, e.asDictionary = o, e.asTuples = u, e.tuplesAsDictionary = s
            }, {
                "collapse-white-space": 3,
                "n-gram": 4,
                trim: 6
            }],
        6: [function (a, i, e) {
                function n(a) {
                    return a.replace(/^\s*|\s*$/g, "")
                }
                e = i.exports = n, e.left = function (a) {
                    return a.replace(/^\s*/, "")
                }, e.right = function (a) {
                    return a.replace(/\s*$/, "")
                }
            }, {}],
        7: [function (a, i, e) {
                function n(a, i) {
                    return t(a, i)[0][0]
                }

                function t(a, i) {
                    var e, n = i || {},
                            t = w;
                    return null !== n.minLength && void 0 !== n.minLength && (t = n.minLength), !a || a.length < t ? k() : (a = a.substr(0, p), e = u(a, y), e[0] in c ? o(a, r(h.asTuples(a), c[e[0]], n)) : 0 === e[1] ? k() : d(e[0]))
                }

                function o(a, i) {
                    for (var e = i[0][1], n = a.length * b - e, t = -1, o = i.length; ++t < o; )
                        i[t][1] = 1 - (i[t][1] - e) / n || 0;
                    return i
                }

                function u(a, i) {
                    var e, n, t, o = -1;
                    for (n in i)
                        (t = s(a, i[n])) > o && (o = t, e = n);
                    return [e, o]
                }

                function s(a, i) {
                    var e = a.match(i);
                    return (e ? e.length : 0) / a.length || 0
                }

                function r(a, i, e) {
                    var n, t = [],
                            o = e.whitelist || [],
                            u = e.blacklist || [];
                    i = m(i, o, u);
                    for (n in i)
                        t.push([n, l(a, i[n])]);
                    return t.length ? t.sort(g) : k()
                }

                function l(a, i) {
                    for (var e, n, t = 0, o = -1, u = a.length; ++o < u; )
                        e = a[o], e[0] in i ? (n = e[1] - i[e[0]] - 1) < 0 && (n = -n) : n = b, t += n;
                    return t
                }

                function m(a, i, e) {
                    var n, t;
                    if (0 === i.length && 0 === e.length)
                        return a;
                    n = {};
                    for (t in a)
                        (0 === i.length || -1 !== i.indexOf(t)) && -1 === e.indexOf(t) && (n[t] = a[t]);
                    return n
                }

                function k() {
                    return d("und")
                }

                function d(a) {
                    return [
                        [a, 1]
                    ]
                }

                function g(a, i) {
                    return a[1] - i[1]
                }
                var h = a("trigram-utils"),
                        y = a("./expressions.js"),
                        c = a("./data.json");
                n.all = t, i.exports = n;
                var p = 2048,
                        w = 10,
                        b = 300;
                !function (a, i, e, n, t, o) {
                    for (t in c) {
                        a = c[t];
                        for (i in a) {
                            for (n = a[i].split("|"), o = n.length, e = {}; o--; )
                                e[n[o]] = o;
                            a[i] = e
                        }
                    }
                }()
            }, {
                "./data.json": 1,
                "./expressions.js": 2,
                "trigram-utils": 5
            }]
    }, {}, [7])(7)
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
    return typeof a
} : function (a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
};
!function (a) {
    if ("object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module)
        module.exports = a();
    else if ("function" == typeof define && define.amd)
        define([], a);
    else {
        var i;
        "undefined" != typeof window ? i = window : "undefined" != typeof global ? i = global : "undefined" != typeof self && (i = self), i.html2canvas = a()
    }
}(function () {
    var a;
    return function a(i, e, n) {
        function t(u, s) {
            if (!e[u]) {
                if (!i[u]) {
                    var r = "function" == typeof require && require;
                    if (!s && r)
                        return r(u, !0);
                    if (o)
                        return o(u, !0);
                    var l = new Error("Cannot find module '" + u + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var m = e[u] = {
                    exports: {}
                };
                i[u][0].call(m.exports, function (a) {
                    var e = i[u][1][a];
                    return t(e || a)
                }, m, m.exports, a, i, e, n)
            }
            return e[u].exports
        }
        for (var o = "function" == typeof require && require, u = 0; u < n.length; u++)
            t(n[u]);
        return t
    }({
        1: [function (i, e, n) {
                (function (i) {
                    !function (t) {
                        function o(a) {
                            throw RangeError(N[a])
                        }

                        function u(a, i) {
                            for (var e = a.length; e--; )
                                a[e] = i(a[e]);
                            return a
                        }

                        function s(a, i) {
                            return u(a.split(q), i).join(".")
                        }

                        function r(a) {
                            for (var i, e, n = [], t = 0, o = a.length; t < o; )
                                i = a.charCodeAt(t++), i >= 55296 && i <= 56319 && t < o ? (e = a.charCodeAt(t++), 56320 == (64512 & e) ? n.push(((1023 & i) << 10) + (1023 & e) + 65536) : (n.push(i), t--)) : n.push(i);
                            return n
                        }

                        function l(a) {
                            return u(a, function (a) {
                                var i = "";
                                return a > 65535 && (a -= 65536, i += _(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), i += _(a)
                            }).join("")
                        }

                        function m(a) {
                            return a - 48 < 10 ? a - 22 : a - 65 < 26 ? a - 65 : a - 97 < 26 ? a - 97 : I
                        }

                        function k(a, i) {
                            return a + 22 + 75 * (a < 26) - ((0 !== i) << 5)
                        }

                        function d(a, i, e) {
                            var n = 0;
                            for (a = e ? E(a / z) : a >> 1, a += E(a / i); a > A * f >> 1; n += I)
                                a = E(a / A);
                            return E(n + (A + 1) * a / (a + M))
                        }

                        function g(a) {
                            var i, e, n, t, u, s, r, k, g, h, y = [],
                                    c = a.length,
                                    p = 0,
                                    w = O,
                                    b = x;
                            for (e = a.lastIndexOf(T), e < 0 && (e = 0), n = 0; n < e; ++n)
                                a.charCodeAt(n) >= 128 && o("not-basic"), y.push(a.charCodeAt(n));
                            for (t = e > 0 ? e + 1 : 0; t < c; ) {
                                for (u = p, s = 1, r = I; t >= c && o("invalid-input"), k = m(a.charCodeAt(t++)), (k >= I || k > E((S - p) / s)) && o("overflow"), p += k * s, g = r <= b ? L : r >= b + f ? f : r - b, !(k < g); r += I)
                                    h = I - g, s > E(S / h) && o("overflow"), s *= h;
                                i = y.length + 1, b = d(p - u, i, 0 === u), E(p / i) > S - w && o("overflow"), w += E(p / i), p %= i, y.splice(p++, 0, w)
                            }
                            return l(y)
                        }

                        function h(a) {
                            var i, e, n, t, u, s, l, m, g, h, y, c, p, w, b, j = [];
                            for (a = r(a), c = a.length, i = O, e = 0, u = x, s = 0; s < c; ++s)
                                (y = a[s]) < 128 && j.push(_(y));
                            for (n = t = j.length, t && j.push(T); n < c; ) {
                                for (l = S, s = 0; s < c; ++s)
                                    (y = a[s]) >= i && y < l && (l = y);
                                for (p = n + 1, l - i > E((S - e) / p) && o("overflow"), e += (l - i) * p, i = l, s = 0; s < c; ++s)
                                    if (y = a[s], y < i && ++e > S && o("overflow"), y == i) {
                                        for (m = e, g = I; h = g <= u ? L : g >= u + f ? f : g - u, !(m < h); g += I)
                                            b = m - h, w = I - h, j.push(_(k(h + b % w, 0))), m = E(b / w);
                                        j.push(_(k(m, 0))), u = d(e, p, n == t), e = 0, ++n
                                    }
                                ++e, ++i
                            }
                            return j.join("")
                        }

                        function y(a) {
                            return s(a, function (a) {
                                return D.test(a) ? g(a.slice(4).toLowerCase()) : a
                            })
                        }

                        function c(a) {
                            return s(a, function (a) {
                                return C.test(a) ? "xn--" + h(a) : a
                            })
                        }
                        var p = "object" == (void 0 === n ? "undefined" : _typeof(n)) && n,
                                w = "object" == (void 0 === e ? "undefined" : _typeof(e)) && e && e.exports == p && e,
                                b = "object" == (void 0 === i ? "undefined" : _typeof(i)) && i;
                        b.global !== b && b.window !== b || (t = b);
                        var j, v, S = 2147483647,
                                I = 36,
                                L = 1,
                                f = 26,
                                M = 38,
                                z = 700,
                                x = 72,
                                O = 128,
                                T = "-",
                                D = /^xn--/,
                                C = /[^ -~]/,
                                q = /\x2E|\u3002|\uFF0E|\uFF61/g,
                                N = {
                                    overflow: "Overflow: input needs wider integers to process",
                                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                                    "invalid-input": "Invalid input"
                                },
                                A = I - L,
                                E = Math.floor,
                                _ = String.fromCharCode;
                        if (j = {
                            version: "1.2.4",
                            ucs2: {
                                decode: r,
                                encode: l
                            },
                            decode: g,
                            encode: h,
                            toASCII: c,
                            toUnicode: y
                        }, "function" == typeof a && "object" == _typeof(a.amd) && a.amd)
                            a("punycode", function () {
                                return j
                            });
                        else if (p && !p.nodeType)
                            if (w)
                                w.exports = j;
                            else
                                for (v in j)
                                    j.hasOwnProperty(v) && (p[v] = j[v]);
                        else
                            t.punycode = j
                    }(this)
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
        2: [function (a, i, e) {
                function n(a, i, e) {
                    !a.defaultView || i === a.defaultView.pageXOffset && e === a.defaultView.pageYOffset || a.defaultView.scrollTo(i, e)
                }

                function t(a, i) {
                    try {
                        i && (i.width = a.width, i.height = a.height, i.getContext("2d").putImageData(a.getContext("2d").getImageData(0, 0, a.width, a.height), 0, 0))
                    } catch (i) {
                        s("Unable to copy canvas content from", a, i)
                    }
                }

                function o(a, i) {
                    for (var e = 3 === a.nodeType ? document.createTextNode(a.nodeValue) : a.cloneNode(!1), n = a.firstChild; n; )
                        !0 !== i && 1 === n.nodeType && "SCRIPT" === n.nodeName || e.appendChild(o(n, i)), n = n.nextSibling;
                    return 1 === a.nodeType && (e._scrollTop = a.scrollTop, e._scrollLeft = a.scrollLeft, "CANVAS" === a.nodeName ? t(a, e) : "TEXTAREA" !== a.nodeName && "SELECT" !== a.nodeName || (e.value = a.value)), e
                }

                function u(a) {
                    if (1 === a.nodeType) {
                        a.scrollTop = a._scrollTop, a.scrollLeft = a._scrollLeft;
                        for (var i = a.firstChild; i; )
                            u(i), i = i.nextSibling
                    }
                }
                var s = a("./log");
                i.exports = function (a, i, e, t, s, r, l) {
                    var m = o(a.documentElement, s.javascriptEnabled),
                            k = i.createElement("iframe");
                    return k.className = "html2canvas-container", k.style.visibility = "hidden", k.style.position = "fixed", k.style.left = "-10000px", k.style.top = "0px", k.style.border = "0", k.width = e, k.height = t, k.scrolling = "no", i.body.appendChild(k), new Promise(function (i) {
                        var e = k.contentWindow.document;
                        k.contentWindow.onload = k.onload = function () {
                            var a = setInterval(function () {
                                e.body.childNodes.length > 0 && (u(e.documentElement), clearInterval(a), "view" === s.type && (k.contentWindow.scrollTo(r, l), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || k.contentWindow.scrollY === l && k.contentWindow.scrollX === r || (e.documentElement.style.top = -l + "px", e.documentElement.style.left = -r + "px", e.documentElement.style.position = "absolute")), i(k))
                            }, 50)
                        }, e.open(), e.write("<!DOCTYPE html><html></html>"), n(a, r, l), e.replaceChild(e.adoptNode(m), e.documentElement), e.close()
                    })
                }
            }, {
                "./log": 13
            }],
        3: [function (a, i, e) {
                function n(a) {
                    this.r = 0, this.g = 0, this.b = 0, this.a = null;
                    this.fromArray(a) || this.namedColor(a) || this.rgb(a) || this.rgba(a) || this.hex6(a) || this.hex3(a)
                }
                n.prototype.darken = function (a) {
                    var i = 1 - a;
                    return new n([Math.round(this.r * i), Math.round(this.g * i), Math.round(this.b * i), this.a])
                }, n.prototype.isTransparent = function () {
                    return 0 === this.a
                }, n.prototype.isBlack = function () {
                    return 0 === this.r && 0 === this.g && 0 === this.b
                }, n.prototype.fromArray = function (a) {
                    return Array.isArray(a) && (this.r = Math.min(a[0], 255), this.g = Math.min(a[1], 255), this.b = Math.min(a[2], 255), a.length > 3 && (this.a = a[3])), Array.isArray(a)
                };
                var t = /^#([a-f0-9]{3})$/i;
                n.prototype.hex3 = function (a) {
                    var i = null;
                    return null !== (i = a.match(t)) && (this.r = parseInt(i[1][0] + i[1][0], 16), this.g = parseInt(i[1][1] + i[1][1], 16), this.b = parseInt(i[1][2] + i[1][2], 16)), null !== i
                };
                var o = /^#([a-f0-9]{6})$/i;
                n.prototype.hex6 = function (a) {
                    var i = null;
                    return null !== (i = a.match(o)) && (this.r = parseInt(i[1].substring(0, 2), 16), this.g = parseInt(i[1].substring(2, 4), 16), this.b = parseInt(i[1].substring(4, 6), 16)), null !== i
                };
                var u = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
                n.prototype.rgb = function (a) {
                    var i = null;
                    return null !== (i = a.match(u)) && (this.r = Number(i[1]), this.g = Number(i[2]), this.b = Number(i[3])), null !== i
                };
                var s = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
                n.prototype.rgba = function (a) {
                    var i = null;
                    return null !== (i = a.match(s)) && (this.r = Number(i[1]), this.g = Number(i[2]), this.b = Number(i[3]), this.a = Number(i[4])), null !== i
                }, n.prototype.toString = function () {
                    return null !== this.a && 1 !== this.a ? "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" : "rgb(" + [this.r, this.g, this.b].join(",") + ")"
                }, n.prototype.namedColor = function (a) {
                    a = a.toLowerCase();
                    var i = r[a];
                    if (i)
                        this.r = i[0], this.g = i[1], this.b = i[2];
                    else if ("transparent" === a)
                        return this.r = this.g = this.b = this.a = 0, !0;
                    return !!i
                }, n.prototype.isColor = !0;
                var r = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                };
                i.exports = n
            }, {}],
        4: [function (i, e, n) {
                function t(a, i) {
                    var e = I++;
                    if (i = i || {}, i.logging && (p.options.logging = !0, p.options.start = Date.now()), i.async = void 0 === i.async || i.async, i.allowTaint = void 0 !== i.allowTaint && i.allowTaint, i.removeContainer = void 0 === i.removeContainer || i.removeContainer, i.javascriptEnabled = void 0 !== i.javascriptEnabled && i.javascriptEnabled, i.imageTimeout = void 0 === i.imageTimeout ? 1e4 : i.imageTimeout, i.renderer = "function" == typeof i.renderer ? i.renderer : g, i.strict = !!i.strict, "string" == typeof a) {
                        if ("string" != typeof i.proxy)
                            return Promise.reject("Proxy must be used when rendering url");
                        var n = null !== i.width ? i.width : window.innerWidth,
                                t = null !== i.height ? i.height : window.innerHeight;
                        return j(k(a), i.proxy, document, n, t, i).then(function (a) {
                            return u(a.contentWindow.document.documentElement, a, i, n, t)
                        })
                    }
                    var s = (void 0 === a ? [document.documentElement] : a.length ? a : [a])[0];
                    return s.setAttribute(S + e, e), o(s.ownerDocument, i, s.ownerDocument.defaultView.innerWidth, s.ownerDocument.defaultView.innerHeight, e).then(function (a) {
                        return "function" == typeof i.onrendered && (p("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"), i.onrendered(a)), a
                    })
                }

                function o(a, i, e, n, t) {
                    return b(a, a, e, n, i, a.defaultView.pageXOffset, a.defaultView.pageYOffset).then(function (o) {
                        p("Document cloned");
                        var s = S + t,
                                r = "[" + s + "='" + t + "']";
                        a.querySelector(r).removeAttribute(s);
                        var l = o.contentWindow,
                                m = l.document.querySelector(r);
                        return ("function" == typeof i.onclone ? Promise.resolve(i.onclone(l.document)) : Promise.resolve(!0)).then(function () {
                            return u(m, o, i, e, n)
                        })
                    })
                }

                function u(a, i, e, n, t) {
                    var o = i.contentWindow,
                            u = new d(o.document),
                            k = new h(e, u),
                            g = v(a),
                            c = "view" === e.type ? n : l(o.document),
                            w = "view" === e.type ? t : m(o.document),
                            b = new e.renderer(c, w, k, e, document);
                    return new y(a, b, u, k, e).ready.then(function () {
                        p("Finished rendering");
                        var n;
                        return n = "view" === e.type ? r(b.canvas, {
                            width: b.canvas.width,
                            height: b.canvas.height,
                            top: 0,
                            left: 0,
                            x: 0,
                            y: 0
                        }) : a === o.document.body || a === o.document.documentElement || null !== e.canvas ? b.canvas : r(b.canvas, {
                            width: null !== e.width ? e.width : g.width,
                            height: null !== e.height ? e.height : g.height,
                            top: g.top,
                            left: g.left,
                            x: 0,
                            y: 0
                        }), s(i, e), n
                    })
                }

                function s(a, i) {
                    i.removeContainer && (a.parentNode.removeChild(a), p("Cleaned up container"))
                }

                function r(a, i) {
                    var e = document.createElement("canvas"),
                            n = Math.min(a.width - 1, Math.max(0, i.left)),
                            t = Math.min(a.width, Math.max(1, i.left + i.width)),
                            o = Math.min(a.height - 1, Math.max(0, i.top)),
                            u = Math.min(a.height, Math.max(1, i.top + i.height));
                    e.width = i.width, e.height = i.height;
                    var s = t - n,
                            r = u - o;
                    return p("Cropping canvas at:", "left:", i.left, "top:", i.top, "width:", s, "height:", r), p("Resulting crop with width", i.width, "and height", i.height, "with x", n, "and y", o), e.getContext("2d").drawImage(a, n, o, s, r, i.x, i.y, s, r), e
                }

                function l(a) {
                    return Math.max(Math.max(a.body.scrollWidth, a.documentElement.scrollWidth), Math.max(a.body.offsetWidth, a.documentElement.offsetWidth), Math.max(a.body.clientWidth, a.documentElement.clientWidth))
                }

                function m(a) {
                    return Math.max(Math.max(a.body.scrollHeight, a.documentElement.scrollHeight), Math.max(a.body.offsetHeight, a.documentElement.offsetHeight), Math.max(a.body.clientHeight, a.documentElement.clientHeight))
                }

                function k(a) {
                    var i = document.createElement("a");
                    return i.href = a, i.href = i.href, i
                }
                var d = i("./support"),
                        g = i("./renderers/canvas"),
                        h = i("./imageloader"),
                        y = i("./nodeparser"),
                        c = i("./nodecontainer"),
                        p = i("./log"),
                        w = i("./utils"),
                        b = i("./clone"),
                        j = i("./proxy").loadUrlDocument,
                        v = w.getBounds,
                        S = "data-html2canvas-node",
                        I = 0;
                t.CanvasRenderer = g, t.NodeContainer = c, t.log = p, t.utils = w;
                var L = "undefined" == typeof document || "function" != typeof Object.create || "function" != typeof document.createElement("canvas").getContext ? function () {
                    return Promise.reject("No canvas support")
                } : t;
                e.exports = L, "function" == typeof a && a.amd && a("html2canvas", [], function () {
                    return L
                })
            }, {
                "./clone": 2,
                "./imageloader": 11,
                "./log": 13,
                "./nodecontainer": 14,
                "./nodeparser": 15,
                "./proxy": 16,
                "./renderers/canvas": 20,
                "./support": 22,
                "./utils": 26
            }],
        5: [function (a, i, e) {
                function n(a) {
                    if (this.src = a, t("DummyImageContainer for", a), !this.promise || !this.image) {
                        t("Initiating DummyImageContainer"), n.prototype.image = new Image;
                        var i = this.image;
                        n.prototype.promise = new Promise(function (a, e) {
                            i.onload = a, i.onerror = e, i.src = o(), !0 === i.complete && a(i)
                        })
                    }
                }
                var t = a("./log"),
                        o = a("./utils").smallImage;
                i.exports = n
            }, {
                "./log": 13,
                "./utils": 26
            }],
        6: [function (a, i, e) {
                function n(a, i) {
                    var e, n, o = document.createElement("div"),
                            u = document.createElement("img"),
                            s = document.createElement("span");
                    o.style.visibility = "hidden", o.style.fontFamily = a, o.style.fontSize = i, o.style.margin = 0, o.style.padding = 0, document.body.appendChild(o), u.src = t(), u.width = 1, u.height = 1, u.style.margin = 0, u.style.padding = 0, u.style.verticalAlign = "baseline", s.style.fontFamily = a, s.style.fontSize = i, s.style.margin = 0, s.style.padding = 0, s.appendChild(document.createTextNode("Hidden Text")), o.appendChild(s), o.appendChild(u), e = u.offsetTop - s.offsetTop + 1, o.removeChild(s), o.appendChild(document.createTextNode("Hidden Text")), o.style.lineHeight = "normal", u.style.verticalAlign = "super", n = u.offsetTop - o.offsetTop + 1, document.body.removeChild(o), this.baseline = e, this.lineWidth = 1, this.middle = n
                }
                var t = a("./utils").smallImage;
                i.exports = n
            }, {
                "./utils": 26
            }],
        7: [function (a, i, e) {
                function n() {
                    this.data = {}
                }
                var t = a("./font");
                n.prototype.getMetrics = function (a, i) {
                    return void 0 === this.data[a + "-" + i] && (this.data[a + "-" + i] = new t(a, i)), this.data[a + "-" + i]
                }, i.exports = n
            }, {
                "./font": 6
            }],
        8: [function (a, i, e) {
                function n(i, e, n) {
                    this.image = null, this.src = i;
                    var t = this,
                            u = o(i);
                    this.promise = (e ? new Promise(function (a) {
                        "about:blank" === i.contentWindow.document.URL || null === i.contentWindow.document.documentElement ? i.contentWindow.onload = i.onload = function () {
                            a(i)
                        } : a(i)
                    }) : this.proxyLoad(n.proxy, u, n)).then(function (i) {
                        return a("./core")(i.contentWindow.document.documentElement, {
                            type: "view",
                            width: i.width,
                            height: i.height,
                            proxy: n.proxy,
                            javascriptEnabled: n.javascriptEnabled,
                            removeContainer: n.removeContainer,
                            allowTaint: n.allowTaint,
                            imageTimeout: n.imageTimeout / 2
                        })
                    }).then(function (a) {
                        return t.image = a
                    })
                }
                var t = a("./utils"),
                        o = t.getBounds,
                        u = a("./proxy").loadUrlDocument;
                n.prototype.proxyLoad = function (a, i, e) {
                    var n = this.src;
                    return u(n.src, a, n.ownerDocument, i.width, i.height, e)
                }, i.exports = n
            }, {
                "./core": 4,
                "./proxy": 16,
                "./utils": 26
            }],
        9: [function (a, i, e) {
                function n(a) {
                    this.src = a.value, this.colorStops = [], this.type = null, this.x0 = .5, this.y0 = .5, this.x1 = .5, this.y1 = .5, this.promise = Promise.resolve(!0)
                }
                n.TYPES = {
                    LINEAR: 1,
                    RADIAL: 2
                }, n.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i, i.exports = n
            }, {}],
        10: [function (a, i, e) {
                function n(a, i) {
                    this.src = a, this.image = new Image;
                    var e = this;
                    this.tainted = null, this.promise = new Promise(function (n, t) {
                        e.image.onload = n, e.image.onerror = t, i && (e.image.crossOrigin = "anonymous"), e.image.src = a, !0 === e.image.complete && n(e.image)
                    })
                }
                i.exports = n
            }, {}],
        11: [function (a, i, e) {
                function n(a, i) {
                    this.link = null, this.options = a, this.support = i, this.origin = this.getOrigin(window.location.href)
                }
                var t = a("./log"),
                        o = a("./imagecontainer"),
                        u = a("./dummyimagecontainer"),
                        s = a("./proxyimagecontainer"),
                        r = a("./framecontainer"),
                        l = a("./svgcontainer"),
                        m = a("./svgnodecontainer"),
                        k = a("./lineargradientcontainer"),
                        d = a("./webkitgradientcontainer"),
                        g = a("./utils").bind;
                n.prototype.findImages = function (a) {
                    var i = [];
                    return a.reduce(function (a, i) {
                        switch (i.node.nodeName) {
                            case "IMG":
                                return a.concat([{
                                        args: [i.node.src],
                                        method: "url"
                                    }]);
                            case "svg":
                            case "IFRAME":
                                return a.concat([{
                                        args: [i.node],
                                        method: i.node.nodeName
                                    }])
                        }
                        return a
                    }, []).forEach(this.addImage(i, this.loadImage), this), i
                }, n.prototype.findBackgroundImage = function (a, i) {
                    return i.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(a, this.loadImage), this), a
                }, n.prototype.addImage = function (a, i) {
                    return function (e) {
                        e.args.forEach(function (n) {
                            this.imageExists(a, n) || (a.splice(0, 0, i.call(this, e)), t("Added image #" + a.length, "string" == typeof n ? n.substring(0, 100) : n))
                        }, this)
                    }
                }, n.prototype.hasImageBackground = function (a) {
                    return "none" !== a.method
                }, n.prototype.loadImage = function (a) {
                    if ("url" === a.method) {
                        var i = a.args[0];
                        return !this.isSVG(i) || this.support.svg || this.options.allowTaint ? i.match(/data:image\/.*;base64,/i) ? new o(i.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), !1) : this.isSameOrigin(i) || !0 === this.options.allowTaint || this.isSVG(i) ? new o(i, !1) : this.support.cors && !this.options.allowTaint && this.options.useCORS ? new o(i, !0) : this.options.proxy ? new s(i, this.options.proxy) : new u(i) : new l(i)
                    }
                    return "linear-gradient" === a.method ? new k(a) : "gradient" === a.method ? new d(a) : "svg" === a.method ? new m(a.args[0], this.support.svg) : "IFRAME" === a.method ? new r(a.args[0], this.isSameOrigin(a.args[0].src), this.options) : new u(a)
                }, n.prototype.isSVG = function (a) {
                    return "svg" === a.substring(a.length - 3).toLowerCase() || l.prototype.isInline(a)
                }, n.prototype.imageExists = function (a, i) {
                    return a.some(function (a) {
                        return a.src === i
                    })
                }, n.prototype.isSameOrigin = function (a) {
                    return this.getOrigin(a) === this.origin
                }, n.prototype.getOrigin = function (a) {
                    var i = this.link || (this.link = document.createElement("a"));
                    return i.href = a, i.href = i.href, i.protocol + i.hostname + i.port
                }, n.prototype.getPromise = function (a) {
                    return this.timeout(a, this.options.imageTimeout).catch(function () {
                        return new u(a.src).promise.then(function (i) {
                            a.image = i
                        })
                    })
                }, n.prototype.get = function (a) {
                    var i = null;
                    return this.images.some(function (e) {
                        return (i = e).src === a
                    }) ? i : null
                }, n.prototype.fetch = function (a) {
                    return this.images = a.reduce(g(this.findBackgroundImage, this), this.findImages(a)), this.images.forEach(function (a, i) {
                        a.promise.then(function () {
                            t("Succesfully loaded image #" + (i + 1), a)
                        }, function (e) {
                            t("Failed loading image #" + (i + 1), a, e)
                        })
                    }), this.ready = Promise.all(this.images.map(this.getPromise, this)), t("Finished searching images"), this
                }, n.prototype.timeout = function (a, i) {
                    var e, n = Promise.race([a.promise, new Promise(function (n, o) {
                            e = setTimeout(function () {
                                t("Timed out loading image", a), o(a)
                            }, i)
                        })]).then(function (a) {
                        return clearTimeout(e), a
                    });
                    return n.catch(function () {
                        clearTimeout(e)
                    }), n
                }, i.exports = n
            }, {
                "./dummyimagecontainer": 5,
                "./framecontainer": 8,
                "./imagecontainer": 10,
                "./lineargradientcontainer": 12,
                "./log": 13,
                "./proxyimagecontainer": 17,
                "./svgcontainer": 23,
                "./svgnodecontainer": 24,
                "./utils": 26,
                "./webkitgradientcontainer": 27
            }],
        12: [function (a, i, e) {
                function n(a) {
                    t.apply(this, arguments), this.type = t.TYPES.LINEAR;
                    var i = n.REGEXP_DIRECTION.test(a.args[0]) || !t.REGEXP_COLORSTOP.test(a.args[0]);
                    i ? a.args[0].split(/\s+/).reverse().forEach(function (a, i) {
                        switch (a) {
                            case "left":
                                this.x0 = 0, this.x1 = 1;
                                break;
                            case "top":
                                this.y0 = 0, this.y1 = 1;
                                break;
                            case "right":
                                this.x0 = 1, this.x1 = 0;
                                break;
                            case "bottom":
                                this.y0 = 1, this.y1 = 0;
                                break;
                            case "to":
                                var e = this.y0,
                                        n = this.x0;
                                this.y0 = this.y1, this.x0 = this.x1, this.x1 = n, this.y1 = e;
                                break;
                            case "center":
                                break;
                            default:
                                var t = .01 * parseFloat(a, 10);
                                if (isNaN(t))
                                    break;
                                0 === i ? (this.y0 = t, this.y1 = 1 - this.y0) : (this.x0 = t, this.x1 = 1 - this.x0)
                        }
                    }, this) : (this.y0 = 0, this.y1 = 1), this.colorStops = a.args.slice(i ? 1 : 0).map(function (a) {
                        var i = a.match(t.REGEXP_COLORSTOP),
                                e = +i[2],
                                n = 0 === e ? "%" : i[3];
                        return {
                            color: new o(i[1]),
                            stop: "%" === n ? e / 100 : null
                        }
                    }), null === this.colorStops[0].stop && (this.colorStops[0].stop = 0), null === this.colorStops[this.colorStops.length - 1].stop && (this.colorStops[this.colorStops.length - 1].stop = 1), this.colorStops.forEach(function (a, i) {
                        null === a.stop && this.colorStops.slice(i).some(function (e, n) {
                            return null !== e.stop && (a.stop = (e.stop - this.colorStops[i - 1].stop) / (n + 1) + this.colorStops[i - 1].stop, !0)
                        }, this)
                    }, this)
                }
                var t = a("./gradientcontainer"),
                        o = a("./color");
                n.prototype = Object.create(t.prototype), n.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i, i.exports = n
            }, {
                "./color": 3,
                "./gradientcontainer": 9
            }],
        13: [function (a, i, e) {
                var n = function a() {
                    a.options.logging && window.console && window.console.log && Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - a.options.start + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)))
                };
                n.options = {
                    logging: !1
                }, i.exports = n
            }, {}],
        14: [function (a, i, e) {
                function n(a, i) {
                    this.node = a, this.parent = i, this.stack = null, this.bounds = null, this.borders = null, this.clip = [], this.backgroundClip = [], this.offsetBounds = null, this.visible = null, this.computedStyles = null, this.colors = {}, this.styles = {}, this.backgroundImages = null, this.transformData = null, this.transformMatrix = null, this.isPseudoElement = !1, this.opacity = null
                }

                function t(a) {
                    var i = a.options[a.selectedIndex || 0];
                    return i ? i.text || "" : ""
                }

                function o(a) {
                    if (a && "matrix" === a[1])
                        return a[2].split(",").map(function (a) {
                            return parseFloat(a.trim())
                        });
                    if (a && "matrix3d" === a[1]) {
                        var i = a[2].split(",").map(function (a) {
                            return parseFloat(a.trim())
                        });
                        return [i[0], i[1], i[4], i[5], i[12], i[13]]
                    }
                }

                function u(a) {
                    return -1 !== a.toString().indexOf("%")
                }

                function s(a) {
                    return a.replace("px", "")
                }

                function r(a) {
                    return parseFloat(a)
                }
                var l = a("./color"),
                        m = a("./utils"),
                        k = m.getBounds,
                        d = m.parseBackgrounds,
                        g = m.offsetBounds;
                n.prototype.cloneTo = function (a) {
                    a.visible = this.visible, a.borders = this.borders, a.bounds = this.bounds, a.clip = this.clip, a.backgroundClip = this.backgroundClip, a.computedStyles = this.computedStyles, a.styles = this.styles, a.backgroundImages = this.backgroundImages, a.opacity = this.opacity
                }, n.prototype.getOpacity = function () {
                    return null === this.opacity ? this.opacity = this.cssFloat("opacity") : this.opacity
                }, n.prototype.assignStack = function (a) {
                    this.stack = a, a.children.push(this)
                }, n.prototype.isElementVisible = function () {
                    return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : "none" !== this.css("display") && "hidden" !== this.css("visibility") && !this.node.hasAttribute("data-html2canvas-ignore") && ("INPUT" !== this.node.nodeName || "hidden" !== this.node.getAttribute("type"))
                }, n.prototype.css = function (a) {
                    return this.computedStyles || (this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null)), this.styles[a] || (this.styles[a] = this.computedStyles[a])
                }, n.prototype.prefixedCss = function (a) {
                    var i = ["webkit", "moz", "ms", "o"],
                            e = this.css(a);
                    return void 0 === e && i.some(function (i) {
                        return void 0 !== (e = this.css(i + a.substr(0, 1).toUpperCase() + a.substr(1)))
                    }, this), void 0 === e ? null : e
                }, n.prototype.computedStyle = function (a) {
                    return this.node.ownerDocument.defaultView.getComputedStyle(this.node, a)
                }, n.prototype.cssInt = function (a) {
                    var i = parseInt(this.css(a), 10);
                    return isNaN(i) ? 0 : i
                }, n.prototype.color = function (a) {
                    return this.colors[a] || (this.colors[a] = new l(this.css(a)))
                }, n.prototype.cssFloat = function (a) {
                    var i = parseFloat(this.css(a));
                    return isNaN(i) ? 0 : i
                }, n.prototype.fontWeight = function () {
                    var a = this.css("fontWeight");
                    switch (parseInt(a, 10)) {
                        case 401:
                            a = "bold";
                            break;
                        case 400:
                            a = "normal"
                    }
                    return a
                }, n.prototype.parseClip = function () {
                    var a = this.css("clip").match(this.CLIP);
                    return a ? {
                        top: parseInt(a[1], 10),
                        right: parseInt(a[2], 10),
                        bottom: parseInt(a[3], 10),
                        left: parseInt(a[4], 10)
                    } : null
                }, n.prototype.parseBackgroundImages = function () {
                    return this.backgroundImages || (this.backgroundImages = d(this.css("backgroundImage")))
                }, n.prototype.cssList = function (a, i) {
                    var e = (this.css(a) || "").split(",");
                    return e = e[i || 0] || e[0] || "auto", e = e.trim().split(" "), 1 === e.length && (e = [e[0], u(e[0]) ? "auto" : e[0]]), e
                }, n.prototype.parseBackgroundSize = function (a, i, e) {
                    var n, t, o = this.cssList("backgroundSize", e);
                    if (u(o[0]))
                        n = a.width * parseFloat(o[0]) / 100;
                    else {
                        if (/contain|cover/.test(o[0])) {
                            var s = a.width / a.height,
                                    r = i.width / i.height;
                            return s < r ^ "contain" === o[0] ? {
                                width: a.height * r,
                                height: a.height
                            } : {
                                width: a.width,
                                height: a.width / r
                            }
                        }
                        n = parseInt(o[0], 10)
                    }
                    return t = "auto" === o[0] && "auto" === o[1] ? i.height : "auto" === o[1] ? n / i.width * i.height : u(o[1]) ? a.height * parseFloat(o[1]) / 100 : parseInt(o[1], 10), "auto" === o[0] && (n = t / i.height * i.width), {
                        width: n,
                        height: t
                    }
                }, n.prototype.parseBackgroundPosition = function (a, i, e, n) {
                    var t, o, s = this.cssList("backgroundPosition", e);
                    return t = u(s[0]) ? (a.width - (n || i).width) * (parseFloat(s[0]) / 100) : parseInt(s[0], 10), o = "auto" === s[1] ? t / i.width * i.height : u(s[1]) ? (a.height - (n || i).height) * parseFloat(s[1]) / 100 : parseInt(s[1], 10), "auto" === s[0] && (t = o / i.height * i.width), {
                        left: t,
                        top: o
                    }
                }, n.prototype.parseBackgroundRepeat = function (a) {
                    return this.cssList("backgroundRepeat", a)[0]
                }, n.prototype.parseTextShadows = function () {
                    var a = this.css("textShadow"),
                            i = [];
                    if (a && "none" !== a)
                        for (var e = a.match(this.TEXT_SHADOW_PROPERTY), n = 0; e && n < e.length; n++) {
                            var t = e[n].match(this.TEXT_SHADOW_VALUES);
                            i.push({
                                color: new l(t[0]),
                                offsetX: t[1] ? parseFloat(t[1].replace("px", "")) : 0,
                                offsetY: t[2] ? parseFloat(t[2].replace("px", "")) : 0,
                                blur: t[3] ? t[3].replace("px", "") : 0
                            })
                        }
                    return i
                }, n.prototype.parseTransform = function () {
                    if (!this.transformData)
                        if (this.hasTransform()) {
                            var a = this.parseBounds(),
                                    i = this.prefixedCss("transformOrigin").split(" ").map(s).map(r);
                            i[0] += a.left, i[1] += a.top, this.transformData = {
                                origin: i,
                                matrix: this.parseTransformMatrix()
                            }
                        } else
                            this.transformData = {
                                origin: [0, 0],
                                matrix: [1, 0, 0, 1, 0, 0]
                            };
                    return this.transformData
                }, n.prototype.parseTransformMatrix = function () {
                    if (!this.transformMatrix) {
                        var a = this.prefixedCss("transform"),
                                i = a ? o(a.match(this.MATRIX_PROPERTY)) : null;
                        this.transformMatrix = i || [1, 0, 0, 1, 0, 0]
                    }
                    return this.transformMatrix
                }, n.prototype.parseBounds = function () {
                    return this.bounds || (this.bounds = this.hasTransform() ? g(this.node) : k(this.node))
                }, n.prototype.hasTransform = function () {
                    return "1,0,0,1,0,0" !== this.parseTransformMatrix().join(",") || this.parent && this.parent.hasTransform()
                }, n.prototype.getValue = function () {
                    var a = this.node.value || "";
                    return "SELECT" === this.node.tagName ? a = t(this.node) : "password" === this.node.type && (a = Array(a.length + 1).join("â€¢")), 0 === a.length ? this.node.placeholder || "" : a
                }, n.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/, n.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g, n.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g, n.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/, i.exports = n
            }, {
                "./color": 3,
                "./utils": 26
            }],
        15: [function (a, i, e) {
                function n(a, i, e, n, t) {
                    F("Starting NodeParser"), this.renderer = i, this.options = t, this.range = null, this.support = e, this.renderQueue = [], this.stack = new Q(!0, 1, a.ownerDocument, null);
                    var o = new Z(a, null);
                    if (t.background && i.rectangle(0, 0, i.width, i.height, new H(t.background)), a === a.ownerDocument.documentElement) {
                        var u = new Z(o.color("backgroundColor").isTransparent() ? a.ownerDocument.body : a.ownerDocument.documentElement, null);
                        i.rectangle(0, 0, i.width, i.height, u.color("backgroundColor"))
                    }
                    o.visibile = o.isElementVisible(), this.createPseudoHideStyles(a.ownerDocument), this.disableAnimations(a.ownerDocument), this.nodes = A([o].concat(this.getChildren(o)).filter(function (a) {
                        return a.visible = a.isElementVisible()
                    }).map(this.getPseudoElements, this)), this.fontMetrics = new R, F("Fetched nodes, total:", this.nodes.length), F("Calculate overflow clips"), this.calculateOverflowClips(), F("Start fetching images"), this.images = n.fetch(this.nodes.filter(z)), this.ready = this.images.ready.then(V(function () {
                        return F("Images loaded, starting parsing"), F("Creating stacking contexts"), this.createStackingContexts(), F("Sorting stacking contexts"), this.sortStackingContexts(this.stack), this.parse(this.stack), F("Render queue created with " + this.renderQueue.length + " items"), new Promise(V(function (a) {
                            t.async ? "function" == typeof t.async ? t.async.call(this, this.renderQueue, a) : this.renderQueue.length > 0 ? (this.renderIndex = 0, this.asyncRenderer(this.renderQueue, a)) : a() : (this.renderQueue.forEach(this.paint, this), a())
                        }, this))
                    }, this))
                }

                function t(a) {
                    return a.parent && a.parent.clip.length
                }

                function o(a) {
                    return a.replace(/(\-[a-z])/g, function (a) {
                        return a.toUpperCase().replace("-", "")
                    })
                }

                function u() {}

                function s(a, i, e, n) {
                    return a.map(function (t, o) {
                        if (t.width > 0) {
                            var u = i.left,
                                    s = i.top,
                                    r = i.width,
                                    l = i.height - a[2].width;
                            switch (o) {
                                case 0:
                                    l = a[0].width, t.args = k({
                                        c1: [u, s],
                                        c2: [u + r, s],
                                        c3: [u + r - a[1].width, s + l],
                                        c4: [u + a[3].width, s + l]
                                    }, n[0], n[1], e.topLeftOuter, e.topLeftInner, e.topRightOuter, e.topRightInner);
                                    break;
                                case 1:
                                    u = i.left + i.width - a[1].width, r = a[1].width, t.args = k({
                                        c1: [u + r, s],
                                        c2: [u + r, s + l + a[2].width],
                                        c3: [u, s + l],
                                        c4: [u, s + a[0].width]
                                    }, n[1], n[2], e.topRightOuter, e.topRightInner, e.bottomRightOuter, e.bottomRightInner);
                                    break;
                                case 2:
                                    s = s + i.height - a[2].width, l = a[2].width, t.args = k({
                                        c1: [u + r, s + l],
                                        c2: [u, s + l],
                                        c3: [u + a[3].width, s],
                                        c4: [u + r - a[3].width, s]
                                    }, n[2], n[3], e.bottomRightOuter, e.bottomRightInner, e.bottomLeftOuter, e.bottomLeftInner);
                                    break;
                                case 3:
                                    r = a[3].width, t.args = k({
                                        c1: [u, s + l + a[2].width],
                                        c2: [u, s],
                                        c3: [u + r, s + a[0].width],
                                        c4: [u + r, s + l]
                                    }, n[3], n[0], e.bottomLeftOuter, e.bottomLeftInner, e.topLeftOuter, e.topLeftInner)
                            }
                        }
                        return t
                    })
                }

                function r(a, i, e, n) {
                    var t = (Math.sqrt(2) - 1) / 3 * 4,
                            o = e * t,
                            u = n * t,
                            s = a + e,
                            r = i + n;
                    return {
                        topLeft: m({
                            x: a,
                            y: r
                        }, {
                            x: a,
                            y: r - u
                        }, {
                            x: s - o,
                            y: i
                        }, {
                            x: s,
                            y: i
                        }),
                        topRight: m({
                            x: a,
                            y: i
                        }, {
                            x: a + o,
                            y: i
                        }, {
                            x: s,
                            y: r - u
                        }, {
                            x: s,
                            y: r
                        }),
                        bottomRight: m({
                            x: s,
                            y: i
                        }, {
                            x: s,
                            y: i + u
                        }, {
                            x: a + o,
                            y: r
                        }, {
                            x: a,
                            y: r
                        }),
                        bottomLeft: m({
                            x: s,
                            y: r
                        }, {
                            x: s - o,
                            y: r
                        }, {
                            x: a,
                            y: i + u
                        }, {
                            x: a,
                            y: i
                        })
                    }
                }

                function l(a, i, e) {
                    var n = a.left,
                            t = a.top,
                            o = a.width,
                            u = a.height,
                            s = i[0][0] < o / 2 ? i[0][0] : o / 2,
                            l = i[0][1] < u / 2 ? i[0][1] : u / 2,
                            m = i[1][0] < o / 2 ? i[1][0] : o / 2,
                            k = i[1][1] < u / 2 ? i[1][1] : u / 2,
                            d = i[2][0] < o / 2 ? i[2][0] : o / 2,
                            g = i[2][1] < u / 2 ? i[2][1] : u / 2,
                            h = i[3][0] < o / 2 ? i[3][0] : o / 2,
                            y = i[3][1] < u / 2 ? i[3][1] : u / 2,
                            c = o - m,
                            p = u - g,
                            w = o - d,
                            b = u - y;
                    return {
                        topLeftOuter: r(n, t, s, l).topLeft.subdivide(.5),
                        topLeftInner: r(n + e[3].width, t + e[0].width, Math.max(0, s - e[3].width), Math.max(0, l - e[0].width)).topLeft.subdivide(.5),
                        topRightOuter: r(n + c, t, m, k).topRight.subdivide(.5),
                        topRightInner: r(n + Math.min(c, o + e[3].width), t + e[0].width, c > o + e[3].width ? 0 : m - e[3].width, k - e[0].width).topRight.subdivide(.5),
                        bottomRightOuter: r(n + w, t + p, d, g).bottomRight.subdivide(.5),
                        bottomRightInner: r(n + Math.min(w, o - e[3].width), t + Math.min(p, u + e[0].width), Math.max(0, d - e[1].width), g - e[2].width).bottomRight.subdivide(.5),
                        bottomLeftOuter: r(n, t + b, h, y).bottomLeft.subdivide(.5),
                        bottomLeftInner: r(n + e[3].width, t + b, Math.max(0, h - e[3].width), y - e[2].width).bottomLeft.subdivide(.5)
                    }
                }

                function m(a, i, e, n) {
                    var t = function (a, i, e) {
                        return {
                            x: a.x + (i.x - a.x) * e,
                            y: a.y + (i.y - a.y) * e
                        }
                    };
                    return {
                        start: a,
                        startControl: i,
                        endControl: e,
                        end: n,
                        subdivide: function (o) {
                            var u = t(a, i, o),
                                    s = t(i, e, o),
                                    r = t(e, n, o),
                                    l = t(u, s, o),
                                    k = t(s, r, o),
                                    d = t(l, k, o);
                            return [m(a, u, l, d), m(d, k, r, n)]
                        },
                        curveTo: function (a) {
                            a.push(["bezierCurve", i.x, i.y, e.x, e.y, n.x, n.y])
                        },
                        curveToReversed: function (n) {
                            n.push(["bezierCurve", e.x, e.y, i.x, i.y, a.x, a.y])
                        }
                    }
                }

                function k(a, i, e, n, t, o, u) {
                    var s = [];
                    return i[0] > 0 || i[1] > 0 ? (s.push(["line", n[1].start.x, n[1].start.y]), n[1].curveTo(s)) : s.push(["line", a.c1[0], a.c1[1]]), e[0] > 0 || e[1] > 0 ? (s.push(["line", o[0].start.x, o[0].start.y]), o[0].curveTo(s), s.push(["line", u[0].end.x, u[0].end.y]), u[0].curveToReversed(s)) : (s.push(["line", a.c2[0], a.c2[1]]), s.push(["line", a.c3[0], a.c3[1]])), i[0] > 0 || i[1] > 0 ? (s.push(["line", t[1].end.x, t[1].end.y]), t[1].curveToReversed(s)) : s.push(["line", a.c4[0], a.c4[1]]), s
                }

                function d(a, i, e, n, t, o, u) {
                    i[0] > 0 || i[1] > 0 ? (a.push(["line", n[0].start.x, n[0].start.y]), n[0].curveTo(a), n[1].curveTo(a)) : a.push(["line", o, u]), (e[0] > 0 || e[1] > 0) && a.push(["line", t[0].start.x, t[0].start.y])
                }

                function g(a) {
                    return a.cssInt("zIndex") < 0
                }

                function h(a) {
                    return a.cssInt("zIndex") > 0
                }

                function y(a) {
                    return 0 === a.cssInt("zIndex")
                }

                function c(a) {
                    return -1 !== ["inline", "inline-block", "inline-table"].indexOf(a.css("display"))
                }

                function p(a) {
                    return a instanceof Q
                }

                function w(a) {
                    return a.node.data.trim().length > 0
                }

                function b(a) {
                    return /^(normal|none|0px)$/.test(a.parent.css("letterSpacing"))
                }

                function j(a) {
                    return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function (i) {
                        var e = a.css("border" + i + "Radius"),
                                n = e.split(" ");
                        return n.length <= 1 && (n[1] = n[0]), n.map(C)
                    })
                }

                function v(a) {
                    return a.nodeType === Node.TEXT_NODE || a.nodeType === Node.ELEMENT_NODE
                }

                function S(a) {
                    return "auto" !== (-1 !== ["absolute", "relative", "fixed"].indexOf(a.css("position")) ? a.css("zIndex") : "auto")
                }

                function I(a) {
                    return "static" !== a.css("position")
                }

                function L(a) {
                    return "none" !== a.css("float")
                }

                function f(a) {
                    return -1 !== ["inline-block", "inline-table"].indexOf(a.css("display"))
                }

                function M(a) {
                    var i = this;
                    return function () {
                        return !a.apply(i, arguments)
                    }
                }

                function z(a) {
                    return a.node.nodeType === Node.ELEMENT_NODE
                }

                function x(a) {
                    return !0 === a.isPseudoElement
                }

                function O(a) {
                    return a.node.nodeType === Node.TEXT_NODE
                }

                function T(a) {
                    return function (i, e) {
                        return i.cssInt("zIndex") + a.indexOf(i) / a.length - (e.cssInt("zIndex") + a.indexOf(e) / a.length)
                    }
                }

                function D(a) {
                    return a.getOpacity() < 1
                }

                function C(a) {
                    return parseInt(a, 10)
                }

                function q(a) {
                    return a.width
                }

                function N(a) {
                    return a.node.nodeType !== Node.ELEMENT_NODE || -1 === ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(a.node.nodeName)
                }

                function A(a) {
                    return [].concat.apply([], a)
                }

                function E(a) {
                    var i = a.substr(0, 1);
                    return i === a.substr(a.length - 1) && i.match(/'|"/) ? a.substr(1, a.length - 2) : a
                }

                function _(a) {
                    for (var i, e = [], n = 0, t = !1; a.length; )
                        B(a[n]) === t ? (i = a.splice(0, n), i.length && e.push(U.ucs2.encode(i)), t = !t, n = 0) : n++, n >= a.length && (i = a.splice(0, n), i.length && e.push(U.ucs2.encode(i)));
                    return e
                }

                function B(a) {
                    return -1 !== [32, 13, 10, 9, 45].indexOf(a)
                }

                function Y(a) {
                    return /[^\u0000-\u00ff]/.test(a)
                }
                var F = a("./log"),
                        U = a("punycode"),
                        Z = a("./nodecontainer"),
                        P = a("./textcontainer"),
                        G = a("./pseudoelementcontainer"),
                        R = a("./fontmetrics"),
                        H = a("./color"),
                        Q = a("./stackingcontext"),
                        W = a("./utils"),
                        V = W.bind,
                        J = W.getBounds,
                        X = W.parseBackgrounds,
                        K = W.offsetBounds;
                n.prototype.calculateOverflowClips = function () {
                    this.nodes.forEach(function (a) {
                        if (z(a)) {
                            x(a) && a.appendToDOM(), a.borders = this.parseBorders(a);
                            var i = "hidden" === a.css("overflow") ? [a.borders.clip] : [],
                                    e = a.parseClip();
                            e && -1 !== ["absolute", "fixed"].indexOf(a.css("position")) && i.push([
                                ["rect", a.bounds.left + e.left, a.bounds.top + e.top, e.right - e.left, e.bottom - e.top]
                            ]), a.clip = t(a) ? a.parent.clip.concat(i) : i, a.backgroundClip = "hidden" !== a.css("overflow") ? a.clip.concat([a.borders.clip]) : a.clip, x(a) && a.cleanDOM()
                        } else
                            O(a) && (a.clip = t(a) ? a.parent.clip : []);
                        x(a) || (a.bounds = null)
                    }, this)
                }, n.prototype.asyncRenderer = function (a, i, e) {
                    e = e || Date.now(), this.paint(a[this.renderIndex++]), a.length === this.renderIndex ? i() : e + 20 > Date.now() ? this.asyncRenderer(a, i, e) : setTimeout(V(function () {
                        this.asyncRenderer(a, i)
                    }, this), 0)
                }, n.prototype.createPseudoHideStyles = function (a) {
                    this.createStyles(a, "." + G.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }.' + G.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }')
                }, n.prototype.disableAnimations = function (a) {
                    this.createStyles(a, "* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}")
                }, n.prototype.createStyles = function (a, i) {
                    var e = a.createElement("style");
                    e.innerHTML = i, a.body.appendChild(e)
                }, n.prototype.getPseudoElements = function (a) {
                    var i = [
                        [a]
                    ];
                    if (a.node.nodeType === Node.ELEMENT_NODE) {
                        var e = this.getPseudoElement(a, ":before"),
                                n = this.getPseudoElement(a, ":after");
                        e && i.push(e), n && i.push(n)
                    }
                    return A(i)
                }, n.prototype.getPseudoElement = function (a, i) {
                    var e = a.computedStyle(i);
                    if (!e || !e.content || "none" === e.content || "-moz-alt-content" === e.content || "none" === e.display)
                        return null;
                    for (var n = E(e.content), t = "url" === n.substr(0, 3), u = document.createElement(t ? "img" : "html2canvaspseudoelement"), s = new G(u, a, i), r = e.length - 1; r >= 0; r--) {
                        var l = o(e.item(r));
                        u.style[l] = e[l]
                    }
                    if (u.className = G.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + G.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER, t)
                        return u.src = X(n)[0].args[0], [s];
                    var m = document.createTextNode(n);
                    return u.appendChild(m), [s, new P(m, s)]
                }, n.prototype.getChildren = function (a) {
                    return A([].filter.call(a.node.childNodes, v).map(function (i) {
                        var e = [i.nodeType === Node.TEXT_NODE ? new P(i, a) : new Z(i, a)].filter(N);
                        return i.nodeType === Node.ELEMENT_NODE && e.length && "TEXTAREA" !== i.tagName ? e[0].isElementVisible() ? e.concat(this.getChildren(e[0])) : [] : e
                    }, this))
                }, n.prototype.newStackingContext = function (a, i) {
                    var e = new Q(i, a.getOpacity(), a.node, a.parent);
                    a.cloneTo(e), (i ? e.getParentStack(this) : e.parent.stack).contexts.push(e), a.stack = e
                }, n.prototype.createStackingContexts = function () {
                    this.nodes.forEach(function (a) {
                        z(a) && (this.isRootElement(a) || D(a) || S(a) || this.isBodyWithTransparentRoot(a) || a.hasTransform()) ? this.newStackingContext(a, !0) : z(a) && (I(a) && y(a) || f(a) || L(a)) ? this.newStackingContext(a, !1) : a.assignStack(a.parent.stack)
                    }, this)
                }, n.prototype.isBodyWithTransparentRoot = function (a) {
                    return "BODY" === a.node.nodeName && a.parent.color("backgroundColor").isTransparent()
                }, n.prototype.isRootElement = function (a) {
                    return null === a.parent
                }, n.prototype.sortStackingContexts = function (a) {
                    a.contexts.sort(T(a.contexts.slice(0))), a.contexts.forEach(this.sortStackingContexts, this)
                }, n.prototype.parseTextBounds = function (a) {
                    return function (i, e, n) {
                        if ("none" !== a.parent.css("textDecoration").substr(0, 4) || 0 !== i.trim().length) {
                            if (this.support.rangeBounds && !a.parent.hasTransform()) {
                                var t = n.slice(0, e).join("").length;
                                return this.getRangeBounds(a.node, t, i.length)
                            }
                            if (a.node && "string" == typeof a.node.data) {
                                var o = a.node.splitText(i.length),
                                        u = this.getWrapperBounds(a.node, a.parent.hasTransform());
                                return a.node = o, u
                            }
                        } else
                            this.support.rangeBounds && !a.parent.hasTransform() || (a.node = a.node.splitText(i.length));
                        return {}
                    }
                }, n.prototype.getWrapperBounds = function (a, i) {
                    var e = a.ownerDocument.createElement("html2canvaswrapper"),
                            n = a.parentNode,
                            t = a.cloneNode(!0);
                    e.appendChild(a.cloneNode(!0)), n.replaceChild(e, a);
                    var o = i ? K(e) : J(e);
                    return n.replaceChild(t, e), o
                }, n.prototype.getRangeBounds = function (a, i, e) {
                    var n = this.range || (this.range = a.ownerDocument.createRange());
                    return n.setStart(a, i), n.setEnd(a, i + e), n.getBoundingClientRect()
                }, n.prototype.parse = function (a) {
                    var i = a.contexts.filter(g),
                            e = a.children.filter(z),
                            n = e.filter(M(L)),
                            t = n.filter(M(I)).filter(M(c)),
                            o = e.filter(M(I)).filter(L),
                            s = n.filter(M(I)).filter(c),
                            r = a.contexts.concat(n.filter(I)).filter(y),
                            l = a.children.filter(O).filter(w),
                            m = a.contexts.filter(h);
                    i.concat(t).concat(o).concat(s).concat(r).concat(l).concat(m).forEach(function (a) {
                        this.renderQueue.push(a), p(a) && (this.parse(a), this.renderQueue.push(new u))
                    }, this)
                }, n.prototype.paint = function (a) {
                    try {
                        a instanceof u ? this.renderer.ctx.restore() : O(a) ? (x(a.parent) && a.parent.appendToDOM(), this.paintText(a), x(a.parent) && a.parent.cleanDOM()) : this.paintNode(a)
                    } catch (a) {
                        if (F(a), this.options.strict)
                            throw a
                    }
                }, n.prototype.paintNode = function (a) {
                    p(a) && (this.renderer.setOpacity(a.opacity), this.renderer.ctx.save(), a.hasTransform() && this.renderer.setTransform(a.parseTransform())), "INPUT" === a.node.nodeName && "checkbox" === a.node.type ? this.paintCheckbox(a) : "INPUT" === a.node.nodeName && "radio" === a.node.type ? this.paintRadio(a) : this.paintElement(a)
                }, n.prototype.paintElement = function (a) {
                    var i = a.parseBounds();
                    this.renderer.clip(a.backgroundClip, function () {
                        this.renderer.renderBackground(a, i, a.borders.borders.map(q))
                    }, this), this.renderer.clip(a.clip, function () {
                        this.renderer.renderBorders(a.borders.borders)
                    }, this), this.renderer.clip(a.backgroundClip, function () {
                        switch (a.node.nodeName) {
                            case "svg":
                            case "IFRAME":
                                var e = this.images.get(a.node);
                                e ? this.renderer.renderImage(a, i, a.borders, e) : F("Error loading <" + a.node.nodeName + ">", a.node);
                                break;
                            case "IMG":
                                var n = this.images.get(a.node.src);
                                n ? this.renderer.renderImage(a, i, a.borders, n) : F("Error loading <img>", a.node.src);
                                break;
                            case "CANVAS":
                                this.renderer.renderImage(a, i, a.borders, {
                                    image: a.node
                                });
                                break;
                            case "SELECT":
                            case "INPUT":
                            case "TEXTAREA":
                                this.paintFormValue(a)
                        }
                    }, this)
                }, n.prototype.paintCheckbox = function (a) {
                    var i = a.parseBounds(),
                            e = Math.min(i.width, i.height),
                            n = {
                                width: e - 1,
                                height: e - 1,
                                top: i.top,
                                left: i.left
                            },
                            t = [3, 3],
                            o = [t, t, t, t],
                            u = [1, 1, 1, 1].map(function (a) {
                        return {
                            color: new H("#A5A5A5"),
                            width: a
                        }
                    }),
                            r = l(n, o, u);
                    this.renderer.clip(a.backgroundClip, function () {
                        this.renderer.rectangle(n.left + 1, n.top + 1, n.width - 2, n.height - 2, new H("#DEDEDE")), this.renderer.renderBorders(s(u, n, r, o)), a.node.checked && (this.renderer.font(new H("#424242"), "normal", "normal", "bold", e - 3 + "px", "arial"), this.renderer.text("âœ”", n.left + e / 6, n.top + e - 1))
                    }, this)
                }, n.prototype.paintRadio = function (a) {
                    var i = a.parseBounds(),
                            e = Math.min(i.width, i.height) - 2;
                    this.renderer.clip(a.backgroundClip, function () {
                        this.renderer.circleStroke(i.left + 1, i.top + 1, e, new H("#DEDEDE"), 1, new H("#A5A5A5")), a.node.checked && this.renderer.circle(Math.ceil(i.left + e / 4) + 1, Math.ceil(i.top + e / 4) + 1, Math.floor(e / 2), new H("#424242"))
                    }, this)
                }, n.prototype.paintFormValue = function (a) {
                    var i = a.getValue();
                    if (i.length > 0) {
                        var e = a.node.ownerDocument,
                                n = e.createElement("html2canvaswrapper");
                        ["lineHeight", "textAlign", "fontFamily", "fontWeight", "fontSize", "color", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "width", "height", "borderLeftStyle", "borderTopStyle", "borderLeftWidth", "borderTopWidth", "boxSizing", "whiteSpace", "wordWrap"].forEach(function (i) {
                            try {
                                n.style[i] = a.css(i)
                            } catch (a) {
                                F("html2canvas: Parse: Exception caught in renderFormValue: " + a.message)
                            }
                        });
                        var t = a.parseBounds();
                        n.style.position = "fixed", n.style.left = t.left + "px", n.style.top = t.top + "px", n.textContent = i, e.body.appendChild(n), this.paintText(new P(n.firstChild, a)), e.body.removeChild(n)
                    }
                }, n.prototype.paintText = function (a) {
                    a.applyTextTransform();
                    var i = U.ucs2.decode(a.node.data),
                            e = this.options.letterRendering && !b(a) || Y(a.node.data) ? i.map(function (a) {
                        return U.ucs2.encode([a])
                    }) : _(i),
                            n = a.parent.fontWeight(),
                            t = a.parent.css("fontSize"),
                            o = a.parent.css("fontFamily"),
                            u = a.parent.parseTextShadows();
                    this.renderer.font(a.parent.color("color"), a.parent.css("fontStyle"), a.parent.css("fontVariant"), n, t, o), u.length ? this.renderer.fontShadow(u[0].color, u[0].offsetX, u[0].offsetY, u[0].blur) : this.renderer.clearShadow(), this.renderer.clip(a.parent.clip, function () {
                        e.map(this.parseTextBounds(a), this).forEach(function (i, n) {
                            i && (this.renderer.text(e[n], i.left, i.bottom), this.renderTextDecoration(a.parent, i, this.fontMetrics.getMetrics(o, t)))
                        }, this)
                    }, this)
                }, n.prototype.renderTextDecoration = function (a, i, e) {
                    switch (a.css("textDecoration").split(" ")[0]) {
                        case "underline":
                            this.renderer.rectangle(i.left, Math.round(i.top + e.baseline + e.lineWidth), i.width, 1, a.color("color"));
                            break;
                        case "overline":
                            this.renderer.rectangle(i.left, Math.round(i.top), i.width, 1, a.color("color"));
                            break;
                        case "line-through":
                            this.renderer.rectangle(i.left, Math.ceil(i.top + e.middle + e.lineWidth), i.width, 1, a.color("color"))
                    }
                };
                var $ = {
                    inset: [
                        ["darken", .6],
                        ["darken", .1],
                        ["darken", .1],
                        ["darken", .6]
                    ]
                };
                n.prototype.parseBorders = function (a) {
                    var i = a.parseBounds(),
                            e = j(a),
                            n = ["Top", "Right", "Bottom", "Left"].map(function (i, e) {
                        var n = a.css("border" + i + "Style"),
                                t = a.color("border" + i + "Color");
                        "inset" === n && t.isBlack() && (t = new H([255, 255, 255, t.a]));
                        var o = $[n] ? $[n][e] : null;
                        return {
                            width: a.cssInt("border" + i + "Width"),
                            color: o ? t[o[0]](o[1]) : t,
                            args: null
                        }
                    }),
                            t = l(i, e, n);
                    return {
                        clip: this.parseBackgroundClip(a, t, n, e, i),
                        borders: s(n, i, t, e)
                    }
                }, n.prototype.parseBackgroundClip = function (a, i, e, n, t) {
                    var o = a.css("backgroundClip"),
                            u = [];
                    switch (o) {
                        case "content-box":
                        case "padding-box":
                            d(u, n[0], n[1], i.topLeftInner, i.topRightInner, t.left + e[3].width, t.top + e[0].width), d(u, n[1], n[2], i.topRightInner, i.bottomRightInner, t.left + t.width - e[1].width, t.top + e[0].width), d(u, n[2], n[3], i.bottomRightInner, i.bottomLeftInner, t.left + t.width - e[1].width, t.top + t.height - e[2].width), d(u, n[3], n[0], i.bottomLeftInner, i.topLeftInner, t.left + e[3].width, t.top + t.height - e[2].width);
                            break;
                        default:
                            d(u, n[0], n[1], i.topLeftOuter, i.topRightOuter, t.left, t.top), d(u, n[1], n[2], i.topRightOuter, i.bottomRightOuter, t.left + t.width, t.top), d(u, n[2], n[3], i.bottomRightOuter, i.bottomLeftOuter, t.left + t.width, t.top + t.height), d(u, n[3], n[0], i.bottomLeftOuter, i.topLeftOuter, t.left, t.top + t.height)
                    }
                    return u
                }, i.exports = n
            }, {
                "./color": 3,
                "./fontmetrics": 7,
                "./log": 13,
                "./nodecontainer": 14,
                "./pseudoelementcontainer": 18,
                "./stackingcontext": 21,
                "./textcontainer": 25,
                "./utils": 26,
                punycode: 1
            }],
        16: [function (a, i, e) {
                function n(a, i, e) {
                    var n = "withCredentials" in new XMLHttpRequest;
                    if (!i)
                        return Promise.reject("No proxy configured");
                    var t = u(n),
                            r = s(i, a, t);
                    return n ? m(r) : o(e, r, t).then(function (a) {
                        return h(a.content)
                    })
                }

                function t(a, i, e) {
                    var n = "crossOrigin" in new Image,
                            t = u(n),
                            r = s(i, a, t);
                    return n ? Promise.resolve(r) : o(e, r, t).then(function (a) {
                        return "data:" + a.type + ";base64," + a.content
                    })
                }

                function o(a, i, e) {
                    return new Promise(function (n, t) {
                        var o = a.createElement("script"),
                                u = function () {
                                    delete window.html2canvas.proxy[e], a.body.removeChild(o)
                                };
                        window.html2canvas.proxy[e] = function (a) {
                            u(), n(a)
                        }, o.src = i, o.onerror = function (a) {
                            u(), t(a)
                        }, a.body.appendChild(o)
                    })
                }

                function u(a) {
                    return a ? "" : "html2canvas_" + Date.now() + "_" + ++y + "_" + Math.round(1e5 * Math.random())
                }

                function s(a, i, e) {
                    return a + "?url=" + encodeURIComponent(i) + (e.length ? "&callback=html2canvas.proxy." + e : "")
                }

                function r(a) {
                    return function (i) {
                        var e, n = new DOMParser;
                        try {
                            e = n.parseFromString(i, "text/html")
                        } catch (a) {
                            d("DOMParser not supported, falling back to createHTMLDocument"), e = document.implementation.createHTMLDocument("");
                            try {
                                e.open(), e.write(i), e.close()
                            } catch (a) {
                                d("createHTMLDocument write not supported, falling back to document.body.innerHTML"), e.body.innerHTML = i
                            }
                        }
                        var t = e.querySelector("base");
                        if (!t || !t.href.host) {
                            var o = e.createElement("base");
                            o.href = a, e.head.insertBefore(o, e.head.firstChild)
                        }
                        return e
                    }
                }

                function l(a, i, e, t, o, u) {
                    return new n(a, i, window.document).then(r(a)).then(function (a) {
                        return g(a, e, t, o, u, 0, 0)
                    })
                }
                var m = a("./xhr"),
                        k = a("./utils"),
                        d = a("./log"),
                        g = a("./clone"),
                        h = k.decode64,
                        y = 0;
                e.Proxy = n, e.ProxyURL = t, e.loadUrlDocument = l
            }, {
                "./clone": 2,
                "./log": 13,
                "./utils": 26,
                "./xhr": 28
            }],
        17: [function (a, i, e) {
                function n(a, i) {
                    var e = document.createElement("a");
                    e.href = a, a = e.href, this.src = a, this.image = new Image;
                    var n = this;
                    this.promise = new Promise(function (e, o) {
                        n.image.crossOrigin = "Anonymous", n.image.onload = e, n.image.onerror = o, new t(a, i, document).then(function (a) {
                            n.image.src = a
                        }).catch(o)
                    })
                }
                var t = a("./proxy").ProxyURL;
                i.exports = n
            }, {
                "./proxy": 16
            }],
        18: [function (a, i, e) {
                function n(a, i, e) {
                    t.call(this, a, i), this.isPseudoElement = !0, this.before = ":before" === e
                }
                var t = a("./nodecontainer");
                n.prototype.cloneTo = function (a) {
                    n.prototype.cloneTo.call(this, a), a.isPseudoElement = !0, a.before = this.before
                }, n.prototype = Object.create(t.prototype), n.prototype.appendToDOM = function () {
                    this.before ? this.parent.node.insertBefore(this.node, this.parent.node.firstChild) : this.parent.node.appendChild(this.node), this.parent.node.className += " " + this.getHideClass()
                }, n.prototype.cleanDOM = function () {
                    this.node.parentNode.removeChild(this.node), this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "")
                }, n.prototype.getHideClass = function () {
                    return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")]
                }, n.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before", n.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after", i.exports = n
            }, {
                "./nodecontainer": 14
            }],
        19: [function (a, i, e) {
                function n(a, i, e, n, t) {
                    this.width = a, this.height = i, this.images = e, this.options = n, this.document = t
                }
                var t = a("./log");
                n.prototype.renderImage = function (a, i, e, n) {
                    var t = a.cssInt("paddingLeft"),
                            o = a.cssInt("paddingTop"),
                            u = a.cssInt("paddingRight"),
                            s = a.cssInt("paddingBottom"),
                            r = e.borders,
                            l = i.width - (r[1].width + r[3].width + t + u),
                            m = i.height - (r[0].width + r[2].width + o + s);
                    this.drawImage(n, 0, 0, n.image.width || l, n.image.height || m, i.left + t + r[3].width, i.top + o + r[0].width, l, m)
                }, n.prototype.renderBackground = function (a, i, e) {
                    i.height > 0 && i.width > 0 && (this.renderBackgroundColor(a, i), this.renderBackgroundImage(a, i, e))
                }, n.prototype.renderBackgroundColor = function (a, i) {
                    var e = a.color("backgroundColor");
                    e.isTransparent() || this.rectangle(i.left, i.top, i.width, i.height, e)
                }, n.prototype.renderBorders = function (a) {
                    a.forEach(this.renderBorder, this)
                }, n.prototype.renderBorder = function (a) {
                    a.color.isTransparent() || null === a.args || this.drawShape(a.args, a.color)
                }, n.prototype.renderBackgroundImage = function (a, i, e) {
                    a.parseBackgroundImages().reverse().forEach(function (n, o, u) {
                        switch (n.method) {
                            case "url":
                                var s = this.images.get(n.args[0]);
                                s ? this.renderBackgroundRepeating(a, i, s, u.length - (o + 1), e) : t("Error loading background-image", n.args[0]);
                                break;
                            case "linear-gradient":
                            case "gradient":
                                var r = this.images.get(n.value);
                                r ? this.renderBackgroundGradient(r, i, e) : t("Error loading background-image", n.args[0]);
                                break;
                            case "none":
                                break;
                            default:
                                t("Unknown background-image type", n.args[0])
                        }
                    }, this)
                }, n.prototype.renderBackgroundRepeating = function (a, i, e, n, t) {
                    var o = a.parseBackgroundSize(i, e.image, n),
                            u = a.parseBackgroundPosition(i, e.image, n, o);
                    switch (a.parseBackgroundRepeat(n)) {
                        case "repeat-x":
                        case "repeat no-repeat":
                            this.backgroundRepeatShape(e, u, o, i, i.left + t[3], i.top + u.top + t[0], 99999, o.height, t);
                            break;
                        case "repeat-y":
                        case "no-repeat repeat":
                            this.backgroundRepeatShape(e, u, o, i, i.left + u.left + t[3], i.top + t[0], o.width, 99999, t);
                            break;
                        case "no-repeat":
                            this.backgroundRepeatShape(e, u, o, i, i.left + u.left + t[3], i.top + u.top + t[0], o.width, o.height, t);
                            break;
                        default:
                            this.renderBackgroundRepeat(e, u, o, {
                                top: i.top,
                                left: i.left
                            }, t[3], t[0])
                    }
                }, i.exports = n
            }, {
                "./log": 13
            }],
        20: [function (a, i, e) {
                function n(a, i) {
                    o.apply(this, arguments), this.canvas = this.options.canvas || this.document.createElement("canvas"), this.options.canvas || (this.canvas.width = a, this.canvas.height = i), this.ctx = this.canvas.getContext("2d"), this.taintCtx = this.document.createElement("canvas").getContext("2d"), this.ctx.textBaseline = "bottom", this.variables = {}, s("Initialized CanvasRenderer with size", a, "x", i)
                }

                function t(a) {
                    return a.length > 0
                }
                var o = a("../renderer"),
                        u = a("../lineargradientcontainer"),
                        s = a("../log");
                n.prototype = Object.create(o.prototype), n.prototype.setFillStyle = function (a) {
                    return this.ctx.fillStyle = "object" === (void 0 === a ? "undefined" : _typeof(a)) && a.isColor ? a.toString() : a, this.ctx
                }, n.prototype.rectangle = function (a, i, e, n, t) {
                    this.setFillStyle(t).fillRect(a, i, e, n)
                }, n.prototype.circle = function (a, i, e, n) {
                    this.setFillStyle(n), this.ctx.beginPath(), this.ctx.arc(a + e / 2, i + e / 2, e / 2, 0, 2 * Math.PI, !0), this.ctx.closePath(), this.ctx.fill()
                }, n.prototype.circleStroke = function (a, i, e, n, t, o) {
                    this.circle(a, i, e, n), this.ctx.strokeStyle = o.toString(), this.ctx.stroke()
                }, n.prototype.drawShape = function (a, i) {
                    this.shape(a), this.setFillStyle(i).fill()
                }, n.prototype.taints = function (a) {
                    if (null === a.tainted) {
                        this.taintCtx.drawImage(a.image, 0, 0);
                        try {
                            this.taintCtx.getImageData(0, 0, 1, 1), a.tainted = !1
                        } catch (i) {
                            this.taintCtx = document.createElement("canvas").getContext("2d"), a.tainted = !0
                        }
                    }
                    return a.tainted
                }, n.prototype.drawImage = function (a, i, e, n, t, o, u, s, r) {
                    this.taints(a) && !this.options.allowTaint || this.ctx.drawImage(a.image, i, e, n, t, o, u, s, r)
                }, n.prototype.clip = function (a, i, e) {
                    this.ctx.save(), a.filter(t).forEach(function (a) {
                        this.shape(a).clip()
                    }, this), i.call(e), this.ctx.restore()
                }, n.prototype.shape = function (a) {
                    return this.ctx.beginPath(), a.forEach(function (a, i) {
                        "rect" === a[0] ? this.ctx.rect.apply(this.ctx, a.slice(1)) : this.ctx[0 === i ? "moveTo" : a[0] + "To"].apply(this.ctx, a.slice(1))
                    }, this), this.ctx.closePath(), this.ctx
                }, n.prototype.font = function (a, i, e, n, t, o) {
                    this.setFillStyle(a).font = [i, e, n, t, o].join(" ").split(",")[0]
                }, n.prototype.fontShadow = function (a, i, e, n) {
                    this.setVariable("shadowColor", a.toString()).setVariable("shadowOffsetY", i).setVariable("shadowOffsetX", e).setVariable("shadowBlur", n)
                }, n.prototype.clearShadow = function () {
                    this.setVariable("shadowColor", "rgba(0,0,0,0)")
                }, n.prototype.setOpacity = function (a) {
                    this.ctx.globalAlpha = a
                }, n.prototype.setTransform = function (a) {
                    this.ctx.translate(a.origin[0], a.origin[1]), this.ctx.transform.apply(this.ctx, a.matrix), this.ctx.translate(-a.origin[0], -a.origin[1])
                }, n.prototype.setVariable = function (a, i) {
                    return this.variables[a] !== i && (this.variables[a] = this.ctx[a] = i), this
                }, n.prototype.text = function (a, i, e) {
                    this.ctx.fillText(a, i, e)
                }, n.prototype.backgroundRepeatShape = function (a, i, e, n, t, o, u, s, r) {
                    var l = [
                        ["line", Math.round(t), Math.round(o)],
                        ["line", Math.round(t + u), Math.round(o)],
                        ["line", Math.round(t + u), Math.round(s + o)],
                        ["line", Math.round(t), Math.round(s + o)]
                    ];
                    this.clip([l], function () {
                        this.renderBackgroundRepeat(a, i, e, n, r[3], r[0])
                    }, this)
                }, n.prototype.renderBackgroundRepeat = function (a, i, e, n, t, o) {
                    var u = Math.round(n.left + i.left + t),
                            s = Math.round(n.top + i.top + o);
                    this.setFillStyle(this.ctx.createPattern(this.resizeImage(a, e), "repeat")), this.ctx.translate(u, s), this.ctx.fill(), this.ctx.translate(-u, -s)
                }, n.prototype.renderBackgroundGradient = function (a, i) {
                    if (a instanceof u) {
                        var e = this.ctx.createLinearGradient(i.left + i.width * a.x0, i.top + i.height * a.y0, i.left + i.width * a.x1, i.top + i.height * a.y1);
                        a.colorStops.forEach(function (a) {
                            e.addColorStop(a.stop, a.color.toString())
                        }), this.rectangle(i.left, i.top, i.width, i.height, e)
                    }
                }, n.prototype.resizeImage = function (a, i) {
                    var e = a.image;
                    if (e.width === i.width && e.height === i.height)
                        return e;
                    var n, t = document.createElement("canvas");
                    return t.width = i.width, t.height = i.height, n = t.getContext("2d"), n.drawImage(e, 0, 0, e.width, e.height, 0, 0, i.width, i.height), t
                }, i.exports = n
            }, {
                "../lineargradientcontainer": 12,
                "../log": 13,
                "../renderer": 19
            }],
        21: [function (a, i, e) {
                function n(a, i, e, n) {
                    t.call(this, e, n), this.ownStacking = a, this.contexts = [], this.children = [], this.opacity = (this.parent ? this.parent.stack.opacity : 1) * i
                }
                var t = a("./nodecontainer");
                n.prototype = Object.create(t.prototype), n.prototype.getParentStack = function (a) {
                    var i = this.parent ? this.parent.stack : null;
                    return i ? i.ownStacking ? i : i.getParentStack(a) : a.stack
                }, i.exports = n
            }, {
                "./nodecontainer": 14
            }],
        22: [function (a, i, e) {
                function n(a) {
                    this.rangeBounds = this.testRangeBounds(a), this.cors = this.testCORS(), this.svg = this.testSVG()
                }
                n.prototype.testRangeBounds = function (a) {
                    var i, e, n, t, o = !1;
                    return a.createRange && (i = a.createRange(), i.getBoundingClientRect && (e = a.createElement("boundtest"), e.style.height = "123px", e.style.display = "block", a.body.appendChild(e), i.selectNode(e), n = i.getBoundingClientRect(), t = n.height, 123 === t && (o = !0), a.body.removeChild(e))), o
                }, n.prototype.testCORS = function () {
                    return void 0 !== (new Image).crossOrigin
                }, n.prototype.testSVG = function () {
                    var a = new Image,
                            i = document.createElement("canvas"),
                            e = i.getContext("2d");
                    a.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                    try {
                        e.drawImage(a, 0, 0), i.toDataURL()
                    } catch (a) {
                        return !1
                    }
                    return !0
                }, i.exports = n
            }, {}],
        23: [function (a, i, e) {
                function n(a) {
                    this.src = a, this.image = null;
                    var i = this;
                    this.promise = this.hasFabric().then(function () {
                        return i.isInline(a) ? Promise.resolve(i.inlineFormatting(a)) : t(a)
                    }).then(function (a) {
                        return new Promise(function (e) {
                            window.html2canvas.svg.fabric.loadSVGFromString(a, i.createCanvas.call(i, e))
                        })
                    })
                }
                var t = a("./xhr"),
                        o = a("./utils").decode64;
                n.prototype.hasFabric = function () {
                    return window.html2canvas.svg && window.html2canvas.svg.fabric ? Promise.resolve() : Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"))
                }, n.prototype.inlineFormatting = function (a) {
                    return /^data:image\/svg\+xml;base64,/.test(a) ? this.decode64(this.removeContentType(a)) : this.removeContentType(a)
                }, n.prototype.removeContentType = function (a) {
                    return a.replace(/^data:image\/svg\+xml(;base64)?,/, "")
                }, n.prototype.isInline = function (a) {
                    return /^data:image\/svg\+xml/i.test(a)
                }, n.prototype.createCanvas = function (a) {
                    var i = this;
                    return function (e, n) {
                        var t = new window.html2canvas.svg.fabric.StaticCanvas("c");
                        i.image = t.lowerCanvasEl, t.setWidth(n.width).setHeight(n.height).add(window.html2canvas.svg.fabric.util.groupSVGElements(e, n)).renderAll(), a(t.lowerCanvasEl)
                    }
                }, n.prototype.decode64 = function (a) {
                    return "function" == typeof window.atob ? window.atob(a) : o(a)
                }, i.exports = n
            }, {
                "./utils": 26,
                "./xhr": 28
            }],
        24: [function (a, i, e) {
                function n(a, i) {
                    this.src = a, this.image = null;
                    var e = this;
                    this.promise = i ? new Promise(function (i, n) {
                        e.image = new Image, e.image.onload = i, e.image.onerror = n, e.image.src = "data:image/svg+xml," + (new XMLSerializer).serializeToString(a), !0 === e.image.complete && i(e.image)
                    }) : this.hasFabric().then(function () {
                        return new Promise(function (i) {
                            window.html2canvas.svg.fabric.parseSVGDocument(a, e.createCanvas.call(e, i))
                        })
                    })
                }
                var t = a("./svgcontainer");
                n.prototype = Object.create(t.prototype), i.exports = n
            }, {
                "./svgcontainer": 23
            }],
        25: [function (a, i, e) {
                function n(a, i) {
                    o.call(this, a, i)
                }

                function t(a, i, e) {
                    if (a.length > 0)
                        return i + e.toUpperCase()
                }
                var o = a("./nodecontainer");
                n.prototype = Object.create(o.prototype), n.prototype.applyTextTransform = function () {
                    this.node.data = this.transform(this.parent.css("textTransform"))
                }, n.prototype.transform = function (a) {
                    var i = this.node.data;
                    switch (a) {
                        case "lowercase":
                            return i.toLowerCase();
                        case "capitalize":
                            return i.replace(/(^|\s|:|-|\(|\))([a-z])/g, t);
                        case "uppercase":
                            return i.toUpperCase();
                        default:
                            return i
                    }
                }, i.exports = n
            }, {
                "./nodecontainer": 14
            }],
        26: [function (a, i, e) {
                e.smallImage = function () {
                    return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                }, e.bind = function (a, i) {
                    return function () {
                        return a.apply(i, arguments)
                    }
                }, e.decode64 = function (a) {
                    var i, e, n, t, o, u, s, r, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                            m = a.length,
                            k = "";
                    for (i = 0; i < m; i += 4)
                        e = l.indexOf(a[i]), n = l.indexOf(a[i + 1]), t = l.indexOf(a[i + 2]), o = l.indexOf(a[i + 3]), u = e << 2 | n >> 4, s = (15 & n) << 4 | t >> 2, r = (3 & t) << 6 | o, k += 64 === t ? String.fromCharCode(u) : 64 === o || -1 === o ? String.fromCharCode(u, s) : String.fromCharCode(u, s, r);
                    return k
                }, e.getBounds = function (a) {
                    if (a.getBoundingClientRect) {
                        var i = a.getBoundingClientRect(),
                                e = null === a.offsetWidth ? i.width : a.offsetWidth;
                        return {
                            top: i.top,
                            bottom: i.bottom || i.top + i.height,
                            right: i.left + e,
                            left: i.left,
                            width: e,
                            height: null === a.offsetHeight ? i.height : a.offsetHeight
                        }
                    }
                    return {}
                }, e.offsetBounds = function (a) {
                    var i = a.offsetParent ? e.offsetBounds(a.offsetParent) : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: a.offsetTop + i.top,
                        bottom: a.offsetTop + a.offsetHeight + i.top,
                        right: a.offsetLeft + i.left + a.offsetWidth,
                        left: a.offsetLeft + i.left,
                        width: a.offsetWidth,
                        height: a.offsetHeight
                    }
                }, e.parseBackgrounds = function (a) {
                    var i, e, n, t, o, u, s, r = " \r\n\t",
                            l = [],
                            m = 0,
                            k = 0,
                            d = function () {
                                i && ('"' === e.substr(0, 1) && (e = e.substr(1, e.length - 2)), e && s.push(e), "-" === i.substr(0, 1) && (t = i.indexOf("-", 1) + 1) > 0 && (n = i.substr(0, t), i = i.substr(t)), l.push({
                                    prefix: n,
                                    method: i.toLowerCase(),
                                    value: o,
                                    args: s,
                                    image: null
                                })), s = [], i = n = e = o = ""
                            };
                    return s = [], i = n = e = o = "", a.split("").forEach(function (a) {
                        if (!(0 === m && r.indexOf(a) > -1)) {
                            switch (a) {
                                case '"':
                                    u ? u === a && (u = null) : u = a;
                                    break;
                                case "(":
                                    if (u)
                                        break;
                                    if (0 === m)
                                        return m = 1, void(o += a);
                                    k++;
                                    break;
                                case ")":
                                    if (u)
                                        break;
                                    if (1 === m) {
                                        if (0 === k)
                                            return m = 0, o += a, void d();
                                        k--
                                    }
                                    break;
                                case ",":
                                    if (u)
                                        break;
                                    if (0 === m)
                                        return void d();
                                    if (1 === m && 0 === k && !i.match(/^url$/i))
                                        return s.push(e), e = "", void(o += a)
                            }
                            o += a, 0 === m ? i += a : e += a
                        }
                    }), d(), l
                }
            }, {}],
        27: [function (a, i, e) {
                function n(a) {
                    t.apply(this, arguments), this.type = "linear" === a.args[0] ? t.TYPES.LINEAR : t.TYPES.RADIAL
                }
                var t = a("./gradientcontainer");
                n.prototype = Object.create(t.prototype), i.exports = n
            }, {
                "./gradientcontainer": 9
            }],
        28: [function (a, i, e) {
                function n(a) {
                    return new Promise(function (i, e) {
                        var n = new XMLHttpRequest;
                        n.open("GET", a), n.onload = function () {
                            200 === n.status ? i(n.responseText) : e(new Error(n.statusText))
                        }, n.onerror = function () {
                            e(new Error("Network Error"))
                        }, n.send()
                    })
                }
                i.exports = n
            }, {}]
    }, {}, [4])(4)
});
var lngCollection = [{
        "ISO 639-2/5": "aar",
        "ISO 639-3": "aar",
        "ISO 639-1": "aa",
        "Language name": "Afar",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "aav",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Austro-Asiatic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "abk",
        "ISO 639-3": "abk",
        "ISO 639-1": "ab",
        "Language name": "Abkhazian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Cyrl"
    }, {
        "ISO 639-2/5": "ace",
        "ISO 639-3": "ace",
        "ISO 639-1": "",
        "Language name": "Achinese",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ach",
        "ISO 639-3": "ach",
        "ISO 639-1": "",
        "Language name": "Acoli",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ada",
        "ISO 639-3": "ada",
        "ISO 639-1": "",
        "Language name": "Adangme",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ady",
        "ISO 639-3": "ady",
        "ISO 639-1": "",
        "Language name": "Adyghe",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "afa",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Afro-Asiatic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "afh",
        "ISO 639-3": "afh",
        "ISO 639-1": "",
        "Language name": "Afrihili",
        Scope: "Individual",
        Type: "Constructed"
    }, {
        "ISO 639-2/5": "afr",
        "ISO 639-3": "afr",
        "ISO 639-1": "af",
        "Language name": "Afrikaans",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "ain",
        "ISO 639-3": "ain",
        "ISO 639-1": "",
        "Language name": "Ainu (Japan)",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "aka",
        "ISO 639-3": "aka",
        "ISO 639-1": "ak",
        "Language name": "Akan",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "akk",
        "ISO 639-3": "akk",
        "ISO 639-1": "",
        "Language name": "Akkadian",
        Scope: "Individual",
        Type: "Ancient"
    }, {
        "ISO 639-2/5": "alb* / sqi",
        "ISO 639-3": "sqi",
        "ISO 639-1": "sq",
        "Language name": "Albanian",
        Scope: "Macrolanguage",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "ale",
        "ISO 639-3": "ale",
        "ISO 639-1": "",
        "Language name": "Aleut",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "alg",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Algonquian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "alt",
        "ISO 639-3": "alt",
        "ISO 639-1": "",
        "Language name": "Southern Altai",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "alv",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Atlantic-Congo languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "amh",
        "ISO 639-3": "amh",
        "ISO 639-1": "am",
        "Language name": "Amharic",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Ethi"
    }, {
        "ISO 639-2/5": "ang",
        "ISO 639-3": "ang",
        "ISO 639-1": "",
        "Language name": "Old English (c. 450â€“1100)",
        Scope: "Individual",
        Type: "Historical"
    }, {
        "ISO 639-2/5": "anp",
        "ISO 639-3": "anp",
        "ISO 639-1": "",
        "Language name": "Angika",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "apa",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Apache languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "aqa",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Alacalufan languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "aql",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Algic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "ara",
        "ISO 639-3": "ara",
        "ISO 639-1": "ar",
        "Language name": "Arabic",
        Scope: "Macrolanguage",
        Type: "Living",
        "Default script": "Arab"
    }, {
        "ISO 639-2/5": "arc",
        "ISO 639-3": "arc",
        "ISO 639-1": "",
        "Language name": "Official Aramaic (700â€“300 BCE)",
        Scope: "Individual",
        Type: "Ancient"
    }, {
        "ISO 639-2/5": "arg",
        "ISO 639-3": "arg",
        "ISO 639-1": "an",
        "Language name": "Aragonese",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "arm* / hye",
        "ISO 639-3": "hye",
        "ISO 639-1": "hy",
        "Language name": "Armenian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Armn"
    }, {
        "ISO 639-2/5": "arn",
        "ISO 639-3": "arn",
        "ISO 639-1": "",
        "Language name": "Mapudungun",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "arp",
        "ISO 639-3": "arp",
        "ISO 639-1": "",
        "Language name": "Arapaho",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "art",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Artificial languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "arw",
        "ISO 639-3": "arw",
        "ISO 639-1": "",
        "Language name": "Arawak",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "asm",
        "ISO 639-3": "asm",
        "ISO 639-1": "as",
        "Language name": "Assamese",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Beng"
    }, {
        "ISO 639-2/5": "ast",
        "ISO 639-3": "ast",
        "ISO 639-1": "",
        "Language name": "Asturian",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ath",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Athapascan languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "auf",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Arauan languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "aus",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Australian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "ava",
        "ISO 639-3": "ava",
        "ISO 639-1": "av",
        "Language name": "Avaric",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ave",
        "ISO 639-3": "ave",
        "ISO 639-1": "ae",
        "Language name": "Avestan",
        Scope: "Individual",
        Type: "Ancient"
    }, {
        "ISO 639-2/5": "awa",
        "ISO 639-3": "awa",
        "ISO 639-1": "",
        "Language name": "Awadhi",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "awd",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Arawakan languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "aym",
        "ISO 639-3": "aym",
        "ISO 639-1": "ay",
        "Language name": "Aymara",
        Scope: "Macrolanguage",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "azc",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Uto-Aztecan languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "aze",
        "ISO 639-3": "aze",
        "ISO 639-1": "az",
        "Language name": "Azerbaijani",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "bad",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Banda languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "bai",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Bamileke languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "bak",
        "ISO 639-3": "bak",
        "ISO 639-1": "ba",
        "Language name": "Bashkir",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "bal",
        "ISO 639-3": "bal",
        "ISO 639-1": "",
        "Language name": "Baluchi",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "bam",
        "ISO 639-3": "bam",
        "ISO 639-1": "bm",
        "Language name": "Bambara",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ban",
        "ISO 639-3": "ban",
        "ISO 639-1": "",
        "Language name": "Balinese",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "baq* / eus",
        "ISO 639-3": "eus",
        "ISO 639-1": "eu",
        "Language name": "Basque",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "bas",
        "ISO 639-3": "bas",
        "ISO 639-1": "",
        "Language name": "Basa (Cameroon)",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "bat",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Baltic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "bej",
        "ISO 639-3": "bej",
        "ISO 639-1": "",
        "Language name": "Beja",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "bel",
        "ISO 639-3": "bel",
        "ISO 639-1": "be",
        "Language name": "Belarusian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Cyrl"
    }, {
        "ISO 639-2/5": "bem",
        "ISO 639-3": "bem",
        "ISO 639-1": "",
        "Language name": "Bemba (Zambia)",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ben",
        "ISO 639-3": "ben",
        "ISO 639-1": "bn",
        "Language name": "Bengali",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Beng"
    }, {
        "ISO 639-2/5": "ber",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Berber languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "bho",
        "ISO 639-3": "bho",
        "ISO 639-1": "",
        "Language name": "Bhojpuri",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "bih",
        "ISO 639-3": "",
        "ISO 639-1": "bh",
        "Language name": "Bihari languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "bik",
        "ISO 639-3": "bik",
        "ISO 639-1": "",
        "Language name": "Bikol",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "bin",
        "ISO 639-3": "bin",
        "ISO 639-1": "",
        "Language name": "Bini",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "bis",
        "ISO 639-3": "bis",
        "ISO 639-1": "bi",
        "Language name": "Bislama",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "bla",
        "ISO 639-3": "bla",
        "ISO 639-1": "",
        "Language name": "Siksika",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "bnt",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Bantu languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "bod / tib*",
        "ISO 639-3": "bod",
        "ISO 639-1": "bo",
        "Language name": "Tibetan",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "bos",
        "ISO 639-3": "bos",
        "ISO 639-1": "bs",
        "Language name": "Bosnian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "bra",
        "ISO 639-3": "bra",
        "ISO 639-1": "",
        "Language name": "Braj",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "bre",
        "ISO 639-3": "bre",
        "ISO 639-1": "br",
        "Language name": "Breton",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "btk",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Batak languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "bua",
        "ISO 639-3": "bua",
        "ISO 639-1": "",
        "Language name": "Buriat",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "bug",
        "ISO 639-3": "bug",
        "ISO 639-1": "",
        "Language name": "Buginese",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "bul",
        "ISO 639-3": "bul",
        "ISO 639-1": "bg",
        "Language name": "Bulgarian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Cyrl"
    }, {
        "ISO 639-2/5": "bur* / mya",
        "ISO 639-3": "mya",
        "ISO 639-1": "my",
        "Language name": "Burmese",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Mymr"
    }, {
        "ISO 639-2/5": "byn",
        "ISO 639-3": "byn",
        "ISO 639-1": "",
        "Language name": "Bilin",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "cad",
        "ISO 639-3": "cad",
        "ISO 639-1": "",
        "Language name": "Caddo",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "cai",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Central American Indian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "car",
        "ISO 639-3": "car",
        "ISO 639-1": "",
        "Language name": "Galibi Carib",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "cat",
        "ISO 639-3": "cat",
        "ISO 639-1": "ca",
        "Language name": "Catalan",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "cau",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Caucasian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "cba",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Chibchan languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "ccn",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "North Caucasian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "ccs",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "South Caucasian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "cdc",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Chadic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "cdd",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Caddoan languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "ceb",
        "ISO 639-3": "ceb",
        "ISO 639-1": "",
        "Language name": "Cebuano",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "cel",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Celtic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "ces / cze*",
        "ISO 639-3": "ces",
        "ISO 639-1": "cs",
        "Language name": "Czech",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "cha",
        "ISO 639-3": "cha",
        "ISO 639-1": "ch",
        "Language name": "Chamorro",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "chb",
        "ISO 639-3": "chb",
        "ISO 639-1": "",
        "Language name": "Chibcha",
        Scope: "Individual",
        Type: "Extinct"
    }, {
        "ISO 639-2/5": "che",
        "ISO 639-3": "che",
        "ISO 639-1": "ce",
        "Language name": "Chechen",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "chg",
        "ISO 639-3": "chg",
        "ISO 639-1": "",
        "Language name": "Chagatai",
        Scope: "Individual",
        Type: "Extinct"
    }, {
        "ISO 639-2/5": "chi* / zho",
        "ISO 639-3": "zho",
        "ISO 639-1": "zh",
        "Language name": "Chinese",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "chk",
        "ISO 639-3": "chk",
        "ISO 639-1": "",
        "Language name": "Chuukese",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "chm",
        "ISO 639-3": "chm",
        "ISO 639-1": "",
        "Language name": "Mari (Russia)",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "chn",
        "ISO 639-3": "chn",
        "ISO 639-1": "",
        "Language name": "Chinook jargon",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "cho",
        "ISO 639-3": "cho",
        "ISO 639-1": "",
        "Language name": "Choctaw",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "chp",
        "ISO 639-3": "chp",
        "ISO 639-1": "",
        "Language name": "Chipewyan",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "chr",
        "ISO 639-3": "chr",
        "ISO 639-1": "",
        "Language name": "Cherokee",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "chu",
        "ISO 639-3": "chu",
        "ISO 639-1": "cu",
        "Language name": "Church Slavic",
        Scope: "Individual",
        Type: "Ancient"
    }, {
        "ISO 639-2/5": "chv",
        "ISO 639-3": "chv",
        "ISO 639-1": "cv",
        "Language name": "Chuvash",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "chy",
        "ISO 639-3": "chy",
        "ISO 639-1": "",
        "Language name": "Cheyenne",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "cmc",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Chamic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "cop",
        "ISO 639-3": "cop",
        "ISO 639-1": "",
        "Language name": "Coptic",
        Scope: "Individual",
        Type: "Extinct"
    }, {
        "ISO 639-2/5": "cor",
        "ISO 639-3": "cor",
        "ISO 639-1": "kw",
        "Language name": "Cornish",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "cos",
        "ISO 639-3": "cos",
        "ISO 639-1": "co",
        "Language name": "Corsican",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "cpe",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "English based Creoles and pidgins",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "cpf",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "French-Based Creoles and pidgins",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "cpp",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Portuguese-Based Creoles and pidgins",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "cre",
        "ISO 639-3": "cre",
        "ISO 639-1": "cr",
        "Language name": "Cree",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "crh",
        "ISO 639-3": "crh",
        "ISO 639-1": "",
        "Language name": "Crimean Tatar",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "crp",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Creoles and pidgins",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "csb",
        "ISO 639-3": "csb",
        "ISO 639-1": "",
        "Language name": "Kashubian",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "csu",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Central Sudanic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "cus",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Cushitic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "cym / wel*",
        "ISO 639-3": "cym",
        "ISO 639-1": "cy",
        "Language name": "Welsh",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "cze* / ces",
        "ISO 639-3": "ces",
        "ISO 639-1": "cs",
        "Language name": "Czech",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "dak",
        "ISO 639-3": "dak",
        "ISO 639-1": "",
        "Language name": "Dakota",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "dan",
        "ISO 639-3": "dan",
        "ISO 639-1": "da",
        "Language name": "Danish",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "dar",
        "ISO 639-3": "dar",
        "ISO 639-1": "",
        "Language name": "Dargwa",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "day",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Land Dayak languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "del",
        "ISO 639-3": "del",
        "ISO 639-1": "",
        "Language name": "Delaware",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "den",
        "ISO 639-3": "den",
        "ISO 639-1": "",
        "Language name": "Slave (Athapascan)",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "deu / ger*",
        "ISO 639-3": "deu",
        "ISO 639-1": "de",
        "Language name": "German",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "dgr",
        "ISO 639-3": "dgr",
        "ISO 639-1": "",
        "Language name": "Dogrib",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "din",
        "ISO 639-3": "din",
        "ISO 639-1": "",
        "Language name": "Dinka",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "div",
        "ISO 639-3": "div",
        "ISO 639-1": "dv",
        "Language name": "Dhivehi",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Thaa"
    }, {
        "ISO 639-2/5": "dmn",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Mande languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "doi",
        "ISO 639-3": "doi",
        "ISO 639-1": "",
        "Language name": "Dogri (macrolanguage)",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "dra",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Dravidian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "dsb",
        "ISO 639-3": "dsb",
        "ISO 639-1": "",
        "Language name": "Lower Sorbian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "dua",
        "ISO 639-3": "dua",
        "ISO 639-1": "",
        "Language name": "Duala",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "dum",
        "ISO 639-3": "dum",
        "ISO 639-1": "",
        "Language name": "Middle Dutch (c. 1050â€“1350)",
        Scope: "Individual",
        Type: "Historical"
    }, {
        "ISO 639-2/5": "dut* / nld",
        "ISO 639-3": "nld",
        "ISO 639-1": "nl",
        "Language name": "Dutch",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "dyu",
        "ISO 639-3": "dyu",
        "ISO 639-1": "",
        "Language name": "Dyula",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "dzo",
        "ISO 639-3": "dzo",
        "ISO 639-1": "dz",
        "Language name": "Dzongkha",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Tibt"
    }, {
        "ISO 639-2/5": "efi",
        "ISO 639-3": "efi",
        "ISO 639-1": "",
        "Language name": "Efik",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "egx",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Egyptian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "egy",
        "ISO 639-3": "egy",
        "ISO 639-1": "",
        "Language name": "Egyptian (Ancient)",
        Scope: "Individual",
        Type: "Ancient"
    }, {
        "ISO 639-2/5": "eka",
        "ISO 639-3": "eka",
        "ISO 639-1": "",
        "Language name": "Ekajuk",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "elx",
        "ISO 639-3": "elx",
        "ISO 639-1": "",
        "Language name": "Elamite",
        Scope: "Individual",
        Type: "Ancient"
    }, {
        "ISO 639-2/5": "eng",
        "ISO 639-3": "eng",
        "ISO 639-1": "en",
        "Language name": "English",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "enm",
        "ISO 639-3": "enm",
        "ISO 639-1": "",
        "Language name": "Middle English (1100-1500)",
        Scope: "Individual",
        Type: "Historical"
    }, {
        "ISO 639-2/5": "epo",
        "ISO 639-3": "epo",
        "ISO 639-1": "eo",
        "Language name": "Esperanto",
        Scope: "Individual",
        Type: "Constructed",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "est",
        "ISO 639-3": "est",
        "ISO 639-1": "et",
        "Language name": "Estonian",
        Scope: "Macrolanguage",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "esx",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Eskimo-Aleut languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "euq",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Basque (family)",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "eus / baq*",
        "ISO 639-3": "eus",
        "ISO 639-1": "eu",
        "Language name": "Basque",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ewe",
        "ISO 639-3": "ewe",
        "ISO 639-1": "ee",
        "Language name": "Ewe",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ewo",
        "ISO 639-3": "ewo",
        "ISO 639-1": "",
        "Language name": "Ewondo",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "fan",
        "ISO 639-3": "fan",
        "ISO 639-1": "",
        "Language name": "Fang (Equatorial Guinea)",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "fao",
        "ISO 639-3": "fao",
        "ISO 639-1": "fo",
        "Language name": "Faroese",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "fas / per*",
        "ISO 639-3": "fas",
        "ISO 639-1": "fa",
        "Language name": "Persian",
        Scope: "Macrolanguage",
        Type: "Living",
        "Default script": "Arab"
    }, {
        "ISO 639-2/5": "fat",
        "ISO 639-3": "fat",
        "ISO 639-1": "",
        "Language name": "Fanti",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "fij",
        "ISO 639-3": "fij",
        "ISO 639-1": "fj",
        "Language name": "Fijian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "fil",
        "ISO 639-3": "fil",
        "ISO 639-1": "",
        "Language name": "Filipino",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "fin",
        "ISO 639-3": "fin",
        "ISO 639-1": "fi",
        "Language name": "Finnish",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "fiu",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Finno-Ugrian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "fon",
        "ISO 639-3": "fon",
        "ISO 639-1": "",
        "Language name": "Fon",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "fox",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Formosan languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "fra / fre*",
        "ISO 639-3": "fra",
        "ISO 639-1": "fr",
        "Language name": "French",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "fre* / fra",
        "ISO 639-3": "fra",
        "ISO 639-1": "fr",
        "Language name": "French",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "frm",
        "ISO 639-3": "frm",
        "ISO 639-1": "",
        "Language name": "Middle French (c. 1400â€“1600)",
        Scope: "Individual",
        Type: "Historical"
    }, {
        "ISO 639-2/5": "fro",
        "ISO 639-3": "fro",
        "ISO 639-1": "",
        "Language name": "Old French (842â€“c. 1400)",
        Scope: "Individual",
        Type: "Historical"
    }, {
        "ISO 639-2/5": "frr",
        "ISO 639-3": "frr",
        "ISO 639-1": "",
        "Language name": "Northern Frisian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "frs",
        "ISO 639-3": "frs",
        "ISO 639-1": "",
        "Language name": "Eastern Frisian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "fry",
        "ISO 639-3": "fry",
        "ISO 639-1": "fy",
        "Language name": "Western Frisian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "ful",
        "ISO 639-3": "ful",
        "ISO 639-1": "ff",
        "Language name": "Fulah",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "fur",
        "ISO 639-3": "fur",
        "ISO 639-1": "",
        "Language name": "Friulian",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "gaa",
        "ISO 639-3": "gaa",
        "ISO 639-1": "",
        "Language name": "Ga",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "gay",
        "ISO 639-3": "gay",
        "ISO 639-1": "",
        "Language name": "Gayo",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "gba",
        "ISO 639-3": "gba",
        "ISO 639-1": "",
        "Language name": "Gbaya (Central African Republic)",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "gem",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Germanic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "geo* / kat",
        "ISO 639-3": "kat",
        "ISO 639-1": "ka",
        "Language name": "Georgian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Geor"
    }, {
        "ISO 639-2/5": "ger* / deu",
        "ISO 639-3": "deu",
        "ISO 639-1": "de",
        "Language name": "German",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "gez",
        "ISO 639-3": "gez",
        "ISO 639-1": "",
        "Language name": "Ge'ez",
        Scope: "Individual",
        Type: "Ancient"
    }, {
        "ISO 639-2/5": "gil",
        "ISO 639-3": "gil",
        "ISO 639-1": "",
        "Language name": "Gilbertese",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "gla",
        "ISO 639-3": "gla",
        "ISO 639-1": "gd",
        "Language name": "Scottish Gaelic",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "gle",
        "ISO 639-3": "gle",
        "ISO 639-1": "ga",
        "Language name": "Irish",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "glg",
        "ISO 639-3": "glg",
        "ISO 639-1": "gl",
        "Language name": "Galician",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "glv",
        "ISO 639-3": "glv",
        "ISO 639-1": "gv",
        "Language name": "Manx",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "gme",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "East Germanic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "gmh",
        "ISO 639-3": "gmh",
        "ISO 639-1": "",
        "Language name": "Middle High German (c. 1050â€“1500)",
        Scope: "Individual",
        Type: "Historical"
    }, {
        "ISO 639-2/5": "gmq",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "North Germanic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "gmw",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "West Germanic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "goh",
        "ISO 639-3": "goh",
        "ISO 639-1": "",
        "Language name": "Old High German (c. 750â€“1050)",
        Scope: "Individual",
        Type: "Historical"
    }, {
        "ISO 639-2/5": "gon",
        "ISO 639-3": "gon",
        "ISO 639-1": "",
        "Language name": "Gondi",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "gor",
        "ISO 639-3": "gor",
        "ISO 639-1": "",
        "Language name": "Gorontalo",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "got",
        "ISO 639-3": "got",
        "ISO 639-1": "",
        "Language name": "Gothic",
        Scope: "Individual",
        Type: "Ancient"
    }, {
        "ISO 639-2/5": "grb",
        "ISO 639-3": "grb",
        "ISO 639-1": "",
        "Language name": "Grebo",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "grc",
        "ISO 639-3": "grc",
        "ISO 639-1": "",
        "Language name": "Ancient Greek (to 1453)",
        Scope: "Individual",
        Type: "Historical"
    }, {
        "ISO 639-2/5": "gre* / ell",
        "ISO 639-3": "ell",
        "ISO 639-1": "el",
        "Language name": "Modern Greek (1453-)",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Grek"
    }, {
        "ISO 639-2/5": "grk",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Greek languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "grn",
        "ISO 639-3": "grn",
        "ISO 639-1": "gn",
        "Language name": "Guarani",
        Scope: "Macrolanguage",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "gsw",
        "ISO 639-3": "gsw",
        "ISO 639-1": "",
        "Language name": "Swiss German",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "guj",
        "ISO 639-3": "guj",
        "ISO 639-1": "gu",
        "Language name": "Gujarati",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Gujr"
    }, {
        "ISO 639-2/5": "gwi",
        "ISO 639-3": "gwi",
        "ISO 639-1": "",
        "Language name": "GwichÊ¼in",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "hai",
        "ISO 639-3": "hai",
        "ISO 639-1": "",
        "Language name": "Haida",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "hat",
        "ISO 639-3": "hat",
        "ISO 639-1": "ht",
        "Language name": "Haitian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "hau",
        "ISO 639-3": "hau",
        "ISO 639-1": "ha",
        "Language name": "Hausa",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "haw",
        "ISO 639-3": "haw",
        "ISO 639-1": "",
        "Language name": "Hawaiian",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "heb",
        "ISO 639-3": "heb",
        "ISO 639-1": "he",
        "Language name": "Hebrew",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Hebr"
    }, {
        "ISO 639-2/5": "her",
        "ISO 639-3": "her",
        "ISO 639-1": "hz",
        "Language name": "Herero",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "hil",
        "ISO 639-3": "hil",
        "ISO 639-1": "",
        "Language name": "Hiligaynon",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "him",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Himachali languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "hin",
        "ISO 639-3": "hin",
        "ISO 639-1": "hi",
        "Language name": "Hindi",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Deva"
    }, {
        "ISO 639-2/5": "hit",
        "ISO 639-3": "hit",
        "ISO 639-1": "",
        "Language name": "Hittite",
        Scope: "Individual",
        Type: "Ancient"
    }, {
        "ISO 639-2/5": "hmn",
        "ISO 639-3": "hmn",
        "ISO 639-1": "",
        "Language name": "Hmong",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "hmo",
        "ISO 639-3": "hmo",
        "ISO 639-1": "ho",
        "Language name": "Hiri Motu",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "hmx",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Hmong-Mien languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "hok",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Hokan languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "hrv",
        "ISO 639-3": "hrv",
        "ISO 639-1": "hr",
        "Language name": "Croatian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "hsb",
        "ISO 639-3": "hsb",
        "ISO 639-1": "",
        "Language name": "Upper Sorbian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "hun",
        "ISO 639-3": "hun",
        "ISO 639-1": "hu",
        "Language name": "Hungarian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "hup",
        "ISO 639-3": "hup",
        "ISO 639-1": "",
        "Language name": "Hupa",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "hye / arm*",
        "ISO 639-3": "hye",
        "ISO 639-1": "hy",
        "Language name": "Armenian",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "hyx",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Armenian (family)",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "iba",
        "ISO 639-3": "iba",
        "ISO 639-1": "",
        "Language name": "Iban",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ibo",
        "ISO 639-3": "ibo",
        "ISO 639-1": "ig",
        "Language name": "Igbo",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ice* / isl",
        "ISO 639-3": "isl",
        "ISO 639-1": "is",
        "Language name": "Icelandic",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "ido",
        "ISO 639-3": "ido",
        "ISO 639-1": "io",
        "Language name": "Ido",
        Scope: "Individual",
        Type: "Constructed"
    }, {
        "ISO 639-2/5": "iii",
        "ISO 639-3": "iii",
        "ISO 639-1": "ii",
        "Language name": "Sichuan Yi",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "iir",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Indo-Iranian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "ijo",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Ijo languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "iku",
        "ISO 639-3": "iku",
        "ISO 639-1": "iu",
        "Language name": "Inuktitut",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ile",
        "ISO 639-3": "ile",
        "ISO 639-1": "ie",
        "Language name": "Interlingue",
        Scope: "Individual",
        Type: "Constructed"
    }, {
        "ISO 639-2/5": "ilo",
        "ISO 639-3": "ilo",
        "ISO 639-1": "",
        "Language name": "Iloko",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ina",
        "ISO 639-3": "ina",
        "ISO 639-1": "ia",
        "Language name": "Interlingua (International Auxiliary Language Association)",
        Scope: "Individual",
        Type: "Constructed"
    }, {
        "ISO 639-2/5": "inc",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Indic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "ind",
        "ISO 639-3": "ind",
        "ISO 639-1": "id",
        "Language name": "Indonesian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "ine",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Indo-European languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "inh",
        "ISO 639-3": "inh",
        "ISO 639-1": "",
        "Language name": "Ingush",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ipk",
        "ISO 639-3": "ipk",
        "ISO 639-1": "ik",
        "Language name": "Inupiaq",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ira",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Iranian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "iro",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Iroquoian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "isl / ice*",
        "ISO 639-3": "isl",
        "ISO 639-1": "is",
        "Language name": "Icelandic",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ita",
        "ISO 639-3": "ita",
        "ISO 639-1": "it",
        "Language name": "Italian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "itc",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Italic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "jav",
        "ISO 639-3": "jav",
        "ISO 639-1": "jv",
        "Language name": "Javanese",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "jbo",
        "ISO 639-3": "jbo",
        "ISO 639-1": "",
        "Language name": "Lojban",
        Scope: "Individual",
        Type: "Constructed"
    }, {
        "ISO 639-2/5": "jpn",
        "ISO 639-3": "jpn",
        "ISO 639-1": "ja",
        "Language name": "Japanese",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Jpan"
    }, {
        "ISO 639-2/5": "jpr",
        "ISO 639-3": "jpr",
        "ISO 639-1": "",
        "Language name": "Judeo-Persian",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "jpx",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Japanese (family)",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "jrb",
        "ISO 639-3": "jrb",
        "ISO 639-1": "",
        "Language name": "Judeo-Arabic",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kaa",
        "ISO 639-3": "kaa",
        "ISO 639-1": "",
        "Language name": "Kara-Kalpak",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kab",
        "ISO 639-3": "kab",
        "ISO 639-1": "",
        "Language name": "Kabyle",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kac",
        "ISO 639-3": "kac",
        "ISO 639-1": "",
        "Language name": "Kachin",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kal",
        "ISO 639-3": "kal",
        "ISO 639-1": "kl",
        "Language name": "Kalaallisut",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "kam",
        "ISO 639-3": "kam",
        "ISO 639-1": "",
        "Language name": "Kamba (Kenya)",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kan",
        "ISO 639-3": "kan",
        "ISO 639-1": "kn",
        "Language name": "Kannada",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Knda"
    }, {
        "ISO 639-2/5": "kar",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Karen languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "kas",
        "ISO 639-3": "kas",
        "ISO 639-1": "ks",
        "Language name": "Kashmiri",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kat / geo*",
        "ISO 639-3": "kat",
        "ISO 639-1": "ka",
        "Language name": "Georgian",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kau",
        "ISO 639-3": "kau",
        "ISO 639-1": "kr",
        "Language name": "Kanuri",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kaw",
        "ISO 639-3": "kaw",
        "ISO 639-1": "",
        "Language name": "Kawi",
        Scope: "Individual",
        Type: "Ancient"
    }, {
        "ISO 639-2/5": "kaz",
        "ISO 639-3": "kaz",
        "ISO 639-1": "kk",
        "Language name": "Kazakh",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Cyrl"
    }, {
        "ISO 639-2/5": "kbd",
        "ISO 639-3": "kbd",
        "ISO 639-1": "",
        "Language name": "Kabardian",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kdo",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Kordofanian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "kha",
        "ISO 639-3": "kha",
        "ISO 639-1": "",
        "Language name": "Khasi",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "khi",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Khoisan languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "khm",
        "ISO 639-3": "khm",
        "ISO 639-1": "km",
        "Language name": "Central Khmer",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Khmr"
    }, {
        "ISO 639-2/5": "kho",
        "ISO 639-3": "kho",
        "ISO 639-1": "",
        "Language name": "Khotanese",
        Scope: "Individual",
        Type: "Ancient"
    }, {
        "ISO 639-2/5": "kik",
        "ISO 639-3": "kik",
        "ISO 639-1": "ki",
        "Language name": "Kikuyu",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kin",
        "ISO 639-3": "kin",
        "ISO 639-1": "rw",
        "Language name": "Kinyarwanda",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "kir",
        "ISO 639-3": "kir",
        "ISO 639-1": "ky",
        "Language name": "Kirghiz",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kmb",
        "ISO 639-3": "kmb",
        "ISO 639-1": "",
        "Language name": "Kimbundu",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kok",
        "ISO 639-3": "kok",
        "ISO 639-1": "",
        "Language name": "Konkani (macrolanguage)",
        Scope: "Macrolanguage",
        Type: "Living",
        "Default script": "Deva"
    }, {
        "ISO 639-2/5": "kom",
        "ISO 639-3": "kom",
        "ISO 639-1": "kv",
        "Language name": "Komi",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kon",
        "ISO 639-3": "kon",
        "ISO 639-1": "kg",
        "Language name": "Kongo",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kor",
        "ISO 639-3": "kor",
        "ISO 639-1": "ko",
        "Language name": "Korean",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Kore"
    }, {
        "ISO 639-2/5": "kos",
        "ISO 639-3": "kos",
        "ISO 639-1": "",
        "Language name": "Kosraean",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kpe",
        "ISO 639-3": "kpe",
        "ISO 639-1": "",
        "Language name": "Kpelle",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "krc",
        "ISO 639-3": "krc",
        "ISO 639-1": "",
        "Language name": "Karachay-Balkar",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "krl",
        "ISO 639-3": "krl",
        "ISO 639-1": "",
        "Language name": "Karelian",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kro",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Kru languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "kru",
        "ISO 639-3": "kru",
        "ISO 639-1": "",
        "Language name": "Kurukh",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kua",
        "ISO 639-3": "kua",
        "ISO 639-1": "kj",
        "Language name": "Kuanyama",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kum",
        "ISO 639-3": "kum",
        "ISO 639-1": "",
        "Language name": "Kumyk",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kur",
        "ISO 639-3": "kur",
        "ISO 639-1": "ku",
        "Language name": "Kurdish",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "kut",
        "ISO 639-3": "kut",
        "ISO 639-1": "",
        "Language name": "Kutenai",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "lad",
        "ISO 639-3": "lad",
        "ISO 639-1": "",
        "Language name": "Ladino",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "lah",
        "ISO 639-3": "lah",
        "ISO 639-1": "",
        "Language name": "Lahnda",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "lam",
        "ISO 639-3": "lam",
        "ISO 639-1": "",
        "Language name": "Lamba",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "lao",
        "ISO 639-3": "lao",
        "ISO 639-1": "lo",
        "Language name": "Lao",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Laoo"
    }, {
        "ISO 639-2/5": "lat",
        "ISO 639-3": "lat",
        "ISO 639-1": "la",
        "Language name": "Latin",
        Scope: "Individual",
        Type: "Ancient",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "lav",
        "ISO 639-3": "lav",
        "ISO 639-1": "lv",
        "Language name": "Latvian",
        Scope: "Macrolanguage",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "lez",
        "ISO 639-3": "lez",
        "ISO 639-1": "",
        "Language name": "Lezghian",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "lim",
        "ISO 639-3": "lim",
        "ISO 639-1": "li",
        "Language name": "Limburgan",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "lin",
        "ISO 639-3": "lin",
        "ISO 639-1": "ln",
        "Language name": "Lingala",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "lit",
        "ISO 639-3": "lit",
        "ISO 639-1": "lt",
        "Language name": "Lithuanian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "lol",
        "ISO 639-3": "lol",
        "ISO 639-1": "",
        "Language name": "Mongo",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "loz",
        "ISO 639-3": "loz",
        "ISO 639-1": "",
        "Language name": "Lozi",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ltz",
        "ISO 639-3": "ltz",
        "ISO 639-1": "lb",
        "Language name": "Luxembourgish",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "lua",
        "ISO 639-3": "lua",
        "ISO 639-1": "",
        "Language name": "Luba-Lulua",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "lub",
        "ISO 639-3": "lub",
        "ISO 639-1": "lu",
        "Language name": "Luba-Katanga",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "lug",
        "ISO 639-3": "lug",
        "ISO 639-1": "lg",
        "Language name": "Ganda",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "lui",
        "ISO 639-3": "lui",
        "ISO 639-1": "",
        "Language name": "Luiseno",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "lun",
        "ISO 639-3": "lun",
        "ISO 639-1": "",
        "Language name": "Lunda",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "luo",
        "ISO 639-3": "luo",
        "ISO 639-1": "",
        "Language name": "Luo (Kenya and Tanzania)",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "lus",
        "ISO 639-3": "lus",
        "ISO 639-1": "",
        "Language name": "Lushai",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "mac* / mkd",
        "ISO 639-3": "mkd",
        "ISO 639-1": "mk",
        "Language name": "Macedonian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Cyrl"
    }, {
        "ISO 639-2/5": "mad",
        "ISO 639-3": "mad",
        "ISO 639-1": "",
        "Language name": "Madurese",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "mag",
        "ISO 639-3": "mag",
        "ISO 639-1": "",
        "Language name": "Magahi",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "mah",
        "ISO 639-3": "mah",
        "ISO 639-1": "mh",
        "Language name": "Marshallese",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "mai",
        "ISO 639-3": "mai",
        "ISO 639-1": "",
        "Language name": "Maithili",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Deva"
    }, {
        "ISO 639-2/5": "mak",
        "ISO 639-3": "mak",
        "ISO 639-1": "",
        "Language name": "Makasar",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "mal",
        "ISO 639-3": "mal",
        "ISO 639-1": "ml",
        "Language name": "Malayalam",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Mlym"
    }, {
        "ISO 639-2/5": "man",
        "ISO 639-3": "man",
        "ISO 639-1": "",
        "Language name": "Mandingo",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "mao* / mri",
        "ISO 639-3": "mri",
        "ISO 639-1": "mi",
        "Language name": "Maori",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "map",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Austronesian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "mar",
        "ISO 639-3": "mar",
        "ISO 639-1": "mr",
        "Language name": "Marathi",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Deva"
    }, {
        "ISO 639-2/5": "mas",
        "ISO 639-3": "mas",
        "ISO 639-1": "",
        "Language name": "Masai",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "may* / msa",
        "ISO 639-3": "msa",
        "ISO 639-1": "ms",
        "Language name": "Malay (macrolanguage)",
        Scope: "Macrolanguage",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "mdf",
        "ISO 639-3": "mdf",
        "ISO 639-1": "",
        "Language name": "Moksha",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "mdr",
        "ISO 639-3": "mdr",
        "ISO 639-1": "",
        "Language name": "Mandar",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "men",
        "ISO 639-3": "men",
        "ISO 639-1": "",
        "Language name": "Mende (Sierra Leone)",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "mga",
        "ISO 639-3": "mga",
        "ISO 639-1": "",
        "Language name": "Middle Irish (900-1200)",
        Scope: "Individual",
        Type: "Historical"
    }, {
        "ISO 639-2/5": "mic",
        "ISO 639-3": "mic",
        "ISO 639-1": "",
        "Language name": "Mi'kmaq",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "min",
        "ISO 639-3": "min",
        "ISO 639-1": "",
        "Language name": "Minangkabau",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "mis",
        "ISO 639-3": "mis",
        "ISO 639-1": "",
        "Language name": "Uncoded languages",
        Scope: "Special",
        Type: ""
    }, {
        "ISO 639-2/5": "mkd / mac*",
        "ISO 639-3": "mkd",
        "ISO 639-1": "mk",
        "Language name": "Macedonian",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "mkh",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Mon-Khmer languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "mlg",
        "ISO 639-3": "mlg",
        "ISO 639-1": "mg",
        "Language name": "Malagasy",
        Scope: "Macrolanguage",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "mlt",
        "ISO 639-3": "mlt",
        "ISO 639-1": "mt",
        "Language name": "Maltese",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "mnc",
        "ISO 639-3": "mnc",
        "ISO 639-1": "",
        "Language name": "Manchu",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "mni",
        "ISO 639-3": "mni",
        "ISO 639-1": "",
        "Language name": "Manipuri",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "mno",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Manobo languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "moh",
        "ISO 639-3": "moh",
        "ISO 639-1": "",
        "Language name": "Mohawk",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "mon",
        "ISO 639-3": "mon",
        "ISO 639-1": "mn",
        "Language name": "Mongolian",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "mos",
        "ISO 639-3": "mos",
        "ISO 639-1": "",
        "Language name": "Mossi",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "mri / mao*",
        "ISO 639-3": "mri",
        "ISO 639-1": "mi",
        "Language name": "Maori",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "msa / may*",
        "ISO 639-3": "msa",
        "ISO 639-1": "ms",
        "Language name": "Malay (macrolanguage)",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "mul",
        "ISO 639-3": "mul",
        "ISO 639-1": "",
        "Language name": "Multiple languages",
        Scope: "Special",
        Type: ""
    }, {
        "ISO 639-2/5": "mun",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Munda languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "mus",
        "ISO 639-3": "mus",
        "ISO 639-1": "",
        "Language name": "Creek",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "mwl",
        "ISO 639-3": "mwl",
        "ISO 639-1": "",
        "Language name": "Mirandese",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "mwr",
        "ISO 639-3": "mwr",
        "ISO 639-1": "",
        "Language name": "Marwari",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "mya / bur*",
        "ISO 639-3": "mya",
        "ISO 639-1": "my",
        "Language name": "Burmese",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "myn",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Mayan languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "myv",
        "ISO 639-3": "myv",
        "ISO 639-1": "",
        "Language name": "Erzya",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "nah",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Nahuatl languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "nai",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "North American Indian",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "nap",
        "ISO 639-3": "nap",
        "ISO 639-1": "",
        "Language name": "Neapolitan",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "nau",
        "ISO 639-3": "nau",
        "ISO 639-1": "na",
        "Language name": "Nauru",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "nav",
        "ISO 639-3": "nav",
        "ISO 639-1": "nv",
        "Language name": "Navajo",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "nbl",
        "ISO 639-3": "nbl",
        "ISO 639-1": "nr",
        "Language name": "South Ndebele",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "nde",
        "ISO 639-3": "nde",
        "ISO 639-1": "nd",
        "Language name": "North Ndebele",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "ndo",
        "ISO 639-3": "ndo",
        "ISO 639-1": "ng",
        "Language name": "Ndonga",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "nds",
        "ISO 639-3": "nds",
        "ISO 639-1": "",
        "Language name": "Low German",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "nep",
        "ISO 639-3": "nep",
        "ISO 639-1": "ne",
        "Language name": "Nepali (macrolanguage)",
        Scope: "Macrolanguage",
        Type: "Living",
        "Default script": "Deva"
    }, {
        "ISO 639-2/5": "new",
        "ISO 639-3": "new",
        "ISO 639-1": "",
        "Language name": "Nepal Bhasa",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ngf",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Trans-New Guinea languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "nia",
        "ISO 639-3": "nia",
        "ISO 639-1": "",
        "Language name": "Nias",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "nic",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Niger-Kordofanian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "niu",
        "ISO 639-3": "niu",
        "ISO 639-1": "",
        "Language name": "Niuean",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "nld / dut*",
        "ISO 639-3": "nld",
        "ISO 639-1": "nl",
        "Language name": "Dutch",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "nno",
        "ISO 639-3": "nno",
        "ISO 639-1": "nn",
        "Language name": "Norwegian Nynorsk",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "nob",
        "ISO 639-3": "nob",
        "ISO 639-1": "nb",
        "Language name": "Norwegian BokmÃ¥l",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "nog",
        "ISO 639-3": "nog",
        "ISO 639-1": "",
        "Language name": "Nogai",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "non",
        "ISO 639-3": "non",
        "ISO 639-1": "",
        "Language name": "Old Norse",
        Scope: "Individual",
        Type: "Historical"
    }, {
        "ISO 639-2/5": "nor",
        "ISO 639-3": "nor",
        "ISO 639-1": "no",
        "Language name": "Norwegian",
        Scope: "Macrolanguage",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "nqo",
        "ISO 639-3": "nqo",
        "ISO 639-1": "",
        "Language name": "N'Ko",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Nkoo"
    }, {
        "ISO 639-2/5": "nso",
        "ISO 639-3": "nso",
        "ISO 639-1": "",
        "Language name": "Pedi",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "nub",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Nubian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "nwc",
        "ISO 639-3": "nwc",
        "ISO 639-1": "",
        "Language name": "Classical Newari",
        Scope: "Individual",
        Type: "Historical"
    }, {
        "ISO 639-2/5": "nya",
        "ISO 639-3": "nya",
        "ISO 639-1": "ny",
        "Language name": "Nyanja",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "nym",
        "ISO 639-3": "nym",
        "ISO 639-1": "",
        "Language name": "Nyamwezi",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "nyn",
        "ISO 639-3": "nyn",
        "ISO 639-1": "",
        "Language name": "Nyankole",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "nyo",
        "ISO 639-3": "nyo",
        "ISO 639-1": "",
        "Language name": "Nyoro",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "nzi",
        "ISO 639-3": "nzi",
        "ISO 639-1": "",
        "Language name": "Nzima",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "oci",
        "ISO 639-3": "oci",
        "ISO 639-1": "oc",
        "Language name": "Occitan (post 1500)",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "oji",
        "ISO 639-3": "oji",
        "ISO 639-1": "oj",
        "Language name": "Ojibwa",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "omq",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Oto-Manguean languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "omv",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Omotic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "ori",
        "ISO 639-3": "ori",
        "ISO 639-1": "or",
        "Language name": "Odiya (macrolanguage)",
        Scope: "Macrolanguage",
        Type: "Living",
        "Default script": "Orya"
    }, {
        "ISO 639-2/5": "orm",
        "ISO 639-3": "orm",
        "ISO 639-1": "om",
        "Language name": "Oromo",
        Scope: "Macrolanguage",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "osa",
        "ISO 639-3": "osa",
        "ISO 639-1": "",
        "Language name": "Osage",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "oss",
        "ISO 639-3": "oss",
        "ISO 639-1": "os",
        "Language name": "Ossetian",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ota",
        "ISO 639-3": "ota",
        "ISO 639-1": "",
        "Language name": "Ottoman Turkish (1500-1928)",
        Scope: "Individual",
        Type: "Historical"
    }, {
        "ISO 639-2/5": "oto",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Otomian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "paa",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Papuan languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "pag",
        "ISO 639-3": "pag",
        "ISO 639-1": "",
        "Language name": "Pangasinan",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "pal",
        "ISO 639-3": "pal",
        "ISO 639-1": "",
        "Language name": "Pahlavi",
        Scope: "Individual",
        Type: "Ancient"
    }, {
        "ISO 639-2/5": "pam",
        "ISO 639-3": "pam",
        "ISO 639-1": "",
        "Language name": "Pampanga",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "pan",
        "ISO 639-3": "pan",
        "ISO 639-1": "pa",
        "Language name": "Panjabi",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Guru"
    }, {
        "ISO 639-2/5": "pap",
        "ISO 639-3": "pap",
        "ISO 639-1": "",
        "Language name": "Papiamento",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "pau",
        "ISO 639-3": "pau",
        "ISO 639-1": "",
        "Language name": "Palauan",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "peo",
        "ISO 639-3": "peo",
        "ISO 639-1": "",
        "Language name": "Old Persian (c. 600â€“400 B.C.)",
        Scope: "Individual",
        Type: "Historical"
    }, {
        "ISO 639-2/5": "per* / fas",
        "ISO 639-3": "fas",
        "ISO 639-1": "fa",
        "Language name": "Persian",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "phi",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Philippine languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "phn",
        "ISO 639-3": "phn",
        "ISO 639-1": "",
        "Language name": "Phoenician",
        Scope: "Individual",
        Type: "Ancient"
    }, {
        "ISO 639-2/5": "plf",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Central Malayo-Polynesian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "pli",
        "ISO 639-3": "pli",
        "ISO 639-1": "pi",
        "Language name": "Pali",
        Scope: "Individual",
        Type: "Ancient"
    }, {
        "ISO 639-2/5": "pny",
        "ISO 639-3": "pny",
        "ISO 639-1": "",
        "Language name": "Pinyin",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "pol",
        "ISO 639-3": "pol",
        "ISO 639-1": "pl",
        "Language name": "Polish",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "pon",
        "ISO 639-3": "pon",
        "ISO 639-1": "",
        "Language name": "Pohnpeian",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "por",
        "ISO 639-3": "por",
        "ISO 639-1": "pt",
        "Language name": "Portuguese",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "poz",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Malayo-Polynesian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "pqe",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Eastern Malayo-Polynesian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "pqw",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Western Malayo-Polynesian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "pra",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Prakrit languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "pro",
        "ISO 639-3": "pro",
        "ISO 639-1": "",
        "Language name": "Old ProvenÃ§al (to 1500)",
        Scope: "Individual",
        Type: "Historical"
    }, {
        "ISO 639-2/5": "pus",
        "ISO 639-3": "pus",
        "ISO 639-1": "ps",
        "Language name": "Pushto",
        Scope: "Macrolanguage",
        Type: "Living",
        "Default script": "Arab"
    }, {
        "ISO 639-2/5": "qaa-qtz",
        "ISO 639-3": "qaa-qtz",
        "ISO 639-1": "",
        "Language name": "Reserved for local use",
        Scope: "Local",
        Type: ""
    }, {
        "ISO 639-2/5": "que",
        "ISO 639-3": "que",
        "ISO 639-1": "qu",
        "Language name": "Quechua",
        Scope: "Macrolanguage",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "qwe",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Quechuan (family)",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "raj",
        "ISO 639-3": "raj",
        "ISO 639-1": "",
        "Language name": "Rajasthani",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "rap",
        "ISO 639-3": "rap",
        "ISO 639-1": "",
        "Language name": "Rapanui",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "rar",
        "ISO 639-3": "rar",
        "ISO 639-1": "",
        "Language name": "Rarotongan",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "rcf",
        "ISO 639-3": "rcf",
        "ISO 639-1": "rc",
        "Language name": "Reunionese, Reunion Creole",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "roa",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Romance languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "roh",
        "ISO 639-3": "roh",
        "ISO 639-1": "rm",
        "Language name": "Romansh",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "rom",
        "ISO 639-3": "rom",
        "ISO 639-1": "",
        "Language name": "Romany",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ron / rum*",
        "ISO 639-3": "ron",
        "ISO 639-1": "ro",
        "Language name": "Romanian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "run",
        "ISO 639-3": "run",
        "ISO 639-1": "rn",
        "Language name": "Rundi",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "rup",
        "ISO 639-3": "rup",
        "ISO 639-1": "",
        "Language name": "Macedo-Romanian",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "rus",
        "ISO 639-3": "rus",
        "ISO 639-1": "ru",
        "Language name": "Russian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Cyrl"
    }, {
        "ISO 639-2/5": "sad",
        "ISO 639-3": "sad",
        "ISO 639-1": "",
        "Language name": "Sandawe",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "sag",
        "ISO 639-3": "sag",
        "ISO 639-1": "sg",
        "Language name": "Sango",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "sah",
        "ISO 639-3": "sah",
        "ISO 639-1": "",
        "Language name": "Yakut",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "sai",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "South American Indian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "sal",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Salishan languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "sam",
        "ISO 639-3": "sam",
        "ISO 639-1": "",
        "Language name": "Samaritan Aramaic",
        Scope: "Individual",
        Type: "Extinct"
    }, {
        "ISO 639-2/5": "san",
        "ISO 639-3": "san",
        "ISO 639-1": "sa",
        "Language name": "Sanskrit",
        Scope: "Individual",
        Type: "Ancient"
    }, {
        "ISO 639-2/5": "sas",
        "ISO 639-3": "sas",
        "ISO 639-1": "",
        "Language name": "Sasak",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "sat",
        "ISO 639-3": "sat",
        "ISO 639-1": "",
        "Language name": "Santali",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "scn",
        "ISO 639-3": "scn",
        "ISO 639-1": "",
        "Language name": "Sicilian",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "sco",
        "ISO 639-3": "sco",
        "ISO 639-1": "",
        "Language name": "Scots",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "sdv",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Eastern Sudanic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "sel",
        "ISO 639-3": "sel",
        "ISO 639-1": "",
        "Language name": "Selkup",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "sem",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Semitic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "sga",
        "ISO 639-3": "sga",
        "ISO 639-1": "",
        "Language name": "Old Irish (to 900)",
        Scope: "Individual",
        Type: "Historical"
    }, {
        "ISO 639-2/5": "sgn",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Sign languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "shn",
        "ISO 639-3": "shn",
        "ISO 639-1": "",
        "Language name": "Shan",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "sid",
        "ISO 639-3": "sid",
        "ISO 639-1": "",
        "Language name": "Sidamo",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "sin",
        "ISO 639-3": "sin",
        "ISO 639-1": "si",
        "Language name": "Sinhala",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Sinh"
    }, {
        "ISO 639-2/5": "sio",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Siouan languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "sit",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Sino-Tibetan languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "sla",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Slavic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "slk / slo*",
        "ISO 639-3": "slk",
        "ISO 639-1": "sk",
        "Language name": "Slovak",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "slv",
        "ISO 639-3": "slv",
        "ISO 639-1": "sl",
        "Language name": "Slovenian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "sma",
        "ISO 639-3": "sma",
        "ISO 639-1": "",
        "Language name": "Southern Sami",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "sme",
        "ISO 639-3": "sme",
        "ISO 639-1": "se",
        "Language name": "Northern Sami",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "smi",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Sami languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "smj",
        "ISO 639-3": "smj",
        "ISO 639-1": "",
        "Language name": "Lule Sami",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "smn",
        "ISO 639-3": "smn",
        "ISO 639-1": "",
        "Language name": "Inari Sami",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "smo",
        "ISO 639-3": "smo",
        "ISO 639-1": "sm",
        "Language name": "Samoan",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "sms",
        "ISO 639-3": "sms",
        "ISO 639-1": "",
        "Language name": "Skolt Sami",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "sna",
        "ISO 639-3": "sna",
        "ISO 639-1": "sn",
        "Language name": "Shona",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "snd",
        "ISO 639-3": "snd",
        "ISO 639-1": "sd",
        "Language name": "Sindhi",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "snk",
        "ISO 639-3": "snk",
        "ISO 639-1": "",
        "Language name": "Soninke",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "sog",
        "ISO 639-3": "sog",
        "ISO 639-1": "",
        "Language name": "Sogdian",
        Scope: "Individual",
        Type: "Ancient"
    }, {
        "ISO 639-2/5": "som",
        "ISO 639-3": "som",
        "ISO 639-1": "so",
        "Language name": "Somali",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "son",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Songhai languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "sot",
        "ISO 639-3": "sot",
        "ISO 639-1": "st",
        "Language name": "Southern Sotho",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "spa",
        "ISO 639-3": "spa",
        "ISO 639-1": "es",
        "Language name": "Spanish",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "sqi / alb*",
        "ISO 639-3": "sqi",
        "ISO 639-1": "sq",
        "Language name": "Albanian",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "sqi",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Albanian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "srd",
        "ISO 639-3": "srd",
        "ISO 639-1": "sc",
        "Language name": "Sardinian",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "srn",
        "ISO 639-3": "srn",
        "ISO 639-1": "",
        "Language name": "Sranan Tongo",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "srp / scc*",
        "ISO 639-3": "srp",
        "ISO 639-1": "sr",
        "Language name": "Serbian",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "srr",
        "ISO 639-3": "srr",
        "ISO 639-1": "",
        "Language name": "Serer",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ssa",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Nilo-Saharan languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "ssw",
        "ISO 639-3": "ssw",
        "ISO 639-1": "ss",
        "Language name": "Swati",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "suk",
        "ISO 639-3": "suk",
        "ISO 639-1": "",
        "Language name": "Sukuma",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "sun",
        "ISO 639-3": "sun",
        "ISO 639-1": "su",
        "Language name": "Sundanese",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "sus",
        "ISO 639-3": "sus",
        "ISO 639-1": "",
        "Language name": "Susu",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "sux",
        "ISO 639-3": "sux",
        "ISO 639-1": "",
        "Language name": "Sumerian",
        Scope: "Individual",
        Type: "Ancient"
    }, {
        "ISO 639-2/5": "swa",
        "ISO 639-3": "swa",
        "ISO 639-1": "sw",
        "Language name": "Swahili (macrolanguage)",
        Scope: "Macrolanguage",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "swe",
        "ISO 639-3": "swe",
        "ISO 639-1": "sv",
        "Language name": "Swedish",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "syc",
        "ISO 639-3": "syc",
        "ISO 639-1": "",
        "Language name": "Classical Syriac",
        Scope: "Individual",
        Type: "Historical"
    }, {
        "ISO 639-2/5": "syd",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Samoyedic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "syr",
        "ISO 639-3": "syr",
        "ISO 639-1": "",
        "Language name": "Syriac",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "tah",
        "ISO 639-3": "tah",
        "ISO 639-1": "ty",
        "Language name": "Tahitian",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "tai",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Tai languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "tam",
        "ISO 639-3": "tam",
        "ISO 639-1": "ta",
        "Language name": "Tamil",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Taml"
    }, {
        "ISO 639-2/5": "tat",
        "ISO 639-3": "tat",
        "ISO 639-1": "tt",
        "Language name": "Tatar",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "tbq",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Tibeto-Burman languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "tel",
        "ISO 639-3": "tel",
        "ISO 639-1": "te",
        "Language name": "Telugu",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Telu"
    }, {
        "ISO 639-2/5": "tem",
        "ISO 639-3": "tem",
        "ISO 639-1": "",
        "Language name": "Timne",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "ter",
        "ISO 639-3": "ter",
        "ISO 639-1": "",
        "Language name": "Tereno",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "tet",
        "ISO 639-3": "tet",
        "ISO 639-1": "",
        "Language name": "Tetum",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "tgk",
        "ISO 639-3": "tgk",
        "ISO 639-1": "tg",
        "Language name": "Tajik",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "tgl",
        "ISO 639-3": "tgl",
        "ISO 639-1": "tl",
        "Language name": "Tagalog",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "tha",
        "ISO 639-3": "tha",
        "ISO 639-1": "th",
        "Language name": "Thai",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Thai"
    }, {
        "ISO 639-2/5": "tib* / bod",
        "ISO 639-3": "bod",
        "ISO 639-1": "bo",
        "Language name": "Tibetan",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "tig",
        "ISO 639-3": "tig",
        "ISO 639-1": "",
        "Language name": "Tigre",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "tir",
        "ISO 639-3": "tir",
        "ISO 639-1": "ti",
        "Language name": "Tigrinya",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Ethi"
    }, {
        "ISO 639-2/5": "tiv",
        "ISO 639-3": "tiv",
        "ISO 639-1": "",
        "Language name": "Tiv",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "tkl",
        "ISO 639-3": "tkl",
        "ISO 639-1": "",
        "Language name": "Tokelau",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "tlh",
        "ISO 639-3": "tlh",
        "ISO 639-1": "",
        "Language name": "Klingon",
        Scope: "Individual",
        Type: "Constructed"
    }, {
        "ISO 639-2/5": "tli",
        "ISO 639-3": "tli",
        "ISO 639-1": "",
        "Language name": "Tlingit",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "tmh",
        "ISO 639-3": "tmh",
        "ISO 639-1": "",
        "Language name": "Tamashek",
        Scope: "Macrolanguage",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "tog",
        "ISO 639-3": "tog",
        "ISO 639-1": "",
        "Language name": "Tonga (Nyasa)",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ton",
        "ISO 639-3": "ton",
        "ISO 639-1": "to",
        "Language name": "Tonga (Tonga Islands)",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "tpi",
        "ISO 639-3": "tpi",
        "ISO 639-1": "",
        "Language name": "Tok Pisin",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "trk",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Turkic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "tsi",
        "ISO 639-3": "tsi",
        "ISO 639-1": "",
        "Language name": "Tsimshian",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "tsn",
        "ISO 639-3": "tsn",
        "ISO 639-1": "tn",
        "Language name": "Tswana",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "tso",
        "ISO 639-3": "tso",
        "ISO 639-1": "ts",
        "Language name": "Tsonga",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "tuk",
        "ISO 639-3": "tuk",
        "ISO 639-1": "tk",
        "Language name": "Turkmen",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "tum",
        "ISO 639-3": "tum",
        "ISO 639-1": "",
        "Language name": "Tumbuka",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "tup",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Tupi languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "tur",
        "ISO 639-3": "tur",
        "ISO 639-1": "tr",
        "Language name": "Turkish",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "tut",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Altaic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "tuw",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Tungus languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "tvl",
        "ISO 639-3": "tvl",
        "ISO 639-1": "",
        "Language name": "Tuvaluan",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "twi",
        "ISO 639-3": "twi",
        "ISO 639-1": "tw",
        "Language name": "Twi",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "tyv",
        "ISO 639-3": "tyv",
        "ISO 639-1": "",
        "Language name": "Tuvinian",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "udm",
        "ISO 639-3": "udm",
        "ISO 639-1": "",
        "Language name": "Udmurt",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "uga",
        "ISO 639-3": "uga",
        "ISO 639-1": "",
        "Language name": "Ugaritic",
        Scope: "Individual",
        Type: "Ancient"
    }, {
        "ISO 639-2/5": "uig",
        "ISO 639-3": "uig",
        "ISO 639-1": "ug",
        "Language name": "Uighur",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ukr",
        "ISO 639-3": "ukr",
        "ISO 639-1": "uk",
        "Language name": "Ukrainian",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Cyrl"
    }, {
        "ISO 639-2/5": "umb",
        "ISO 639-3": "umb",
        "ISO 639-1": "",
        "Language name": "Umbundu",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "und",
        "ISO 639-3": "und",
        "ISO 639-1": "",
        "Language name": "Undetermined",
        Scope: "Special",
        Type: ""
    }, {
        "ISO 639-2/5": "urd",
        "ISO 639-3": "urd",
        "ISO 639-1": "ur",
        "Language name": "Urdu",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Arab"
    }, {
        "ISO 639-2/5": "urj",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Uralic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "uzb",
        "ISO 639-3": "uzb",
        "ISO 639-1": "uz",
        "Language name": "Uzbek",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "vai",
        "ISO 639-3": "vai",
        "ISO 639-1": "",
        "Language name": "Vai",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ven",
        "ISO 639-3": "ven",
        "ISO 639-1": "ve",
        "Language name": "Venda",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "vie",
        "ISO 639-3": "vie",
        "ISO 639-1": "vi",
        "Language name": "Vietnamese",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "vol",
        "ISO 639-3": "vol",
        "ISO 639-1": "vo",
        "Language name": "VolapÃ¼k",
        Scope: "Individual",
        Type: "Constructed"
    }, {
        "ISO 639-2/5": "vot",
        "ISO 639-3": "vot",
        "ISO 639-1": "",
        "Language name": "Votic",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "wak",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Wakashan languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "wal",
        "ISO 639-3": "wal",
        "ISO 639-1": "",
        "Language name": "Wolaytta",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "war",
        "ISO 639-3": "war",
        "ISO 639-1": "",
        "Language name": "Waray (Philippines)",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "was",
        "ISO 639-3": "was",
        "ISO 639-1": "",
        "Language name": "Washo",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "wel* / cym",
        "ISO 639-3": "cym",
        "ISO 639-1": "cy",
        "Language name": "Welsh",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "wen",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Sorbian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "wln",
        "ISO 639-3": "wln",
        "ISO 639-1": "wa",
        "Language name": "Walloon",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "wol",
        "ISO 639-3": "wol",
        "ISO 639-1": "wo",
        "Language name": "Wolof",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "xal",
        "ISO 639-3": "xal",
        "ISO 639-1": "",
        "Language name": "Kalmyk",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "xgn",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Mongolian languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "xho",
        "ISO 639-3": "xho",
        "ISO 639-1": "xh",
        "Language name": "Xhosa",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "xnd",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Na-Dene languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "yao",
        "ISO 639-3": "yao",
        "ISO 639-1": "",
        "Language name": "Yao",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "yap",
        "ISO 639-3": "yap",
        "ISO 639-1": "",
        "Language name": "Yapese",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "yid",
        "ISO 639-3": "yid",
        "ISO 639-1": "yi",
        "Language name": "Yiddish",
        Scope: "Macrolanguage",
        Type: "Living",
        "Default script": "Hebr"
    }, {
        "ISO 639-2/5": "yor",
        "ISO 639-3": "yor",
        "ISO 639-1": "yo",
        "Language name": "Yoruba",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "ypk",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Yupik languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "zap",
        "ISO 639-3": "zap",
        "ISO 639-1": "",
        "Language name": "Zapotec",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "zbl",
        "ISO 639-3": "zbl",
        "ISO 639-1": "",
        "Language name": "Blissymbols",
        Scope: "Individual",
        Type: "Constructed",
        "Default script": "Blis"
    }, {
        "ISO 639-2/5": "zen",
        "ISO 639-3": "zen",
        "ISO 639-1": "",
        "Language name": "Zenaga",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "zgh",
        "ISO 639-3": "zgh",
        "ISO 639-1": "",
        "Language name": "Standard Moroccan Tamazight",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "zha",
        "ISO 639-3": "zha",
        "ISO 639-1": "za",
        "Language name": "Zhuang",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "zho / chi*",
        "ISO 639-3": "zho",
        "ISO 639-1": "zh",
        "Language name": "Chinese",
        Scope: "Macrolanguage",
        Type: "Living"
    }, {
        "ISO 639-2/5": "zhx",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Chinese (family)",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "zle",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "East Slavic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "zls",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "South Slavic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "zlw",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "West Slavic languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "znd",
        "ISO 639-3": "",
        "ISO 639-1": "",
        "Language name": "Zande languages",
        Scope: "Collective",
        Type: ""
    }, {
        "ISO 639-2/5": "zul",
        "ISO 639-3": "zul",
        "ISO 639-1": "zu",
        "Language name": "Zulu",
        Scope: "Individual",
        Type: "Living",
        "Default script": "Latn"
    }, {
        "ISO 639-2/5": "zun",
        "ISO 639-3": "zun",
        "ISO 639-1": "",
        "Language name": "Zuni",
        Scope: "Individual",
        Type: "Living"
    }, {
        "ISO 639-2/5": "zxx",
        "ISO 639-3": "zxx",
        "ISO 639-1": "",
        "Language name": "No linguistic content",
        Scope: "Special",
        Type: ""
    }, {
        "ISO 639-2/5": "zza",
        "ISO 639-3": "zza",
        "ISO 639-1": "",
        "Language name": "Zaza",
        Scope: "Macrolanguage",
        Type: ""
    }];