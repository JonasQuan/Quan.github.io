<script>
    function changeLanguage() {
        var selectedLanguage = document.getElementById("language").value;

        // Call a function to update content based on the selected language
        updateContent(selectedLanguage);
    }

    function updateContent(language) {
        // Example content for English and Chinese
        var englishContent = {
            welcome: "Welcome to MySpace",
            idea1: "Ideas that this archive on the internet will stay beyond time and space.",
            idea2: "Maybe the younger self and the older self would have gathered across different space-time to read this."
        };

        var chineseContent = {
            welcome: "欢迎来到我的空间",
            idea1: "这个存档在互联网上将超越时间和空间。",
            idea2: "也许年轻的自己和老年的自己会跨越不同的时空聚在一起阅读这个。"
        };

        // Update content based on the selected language
        document.querySelector('h2').textContent = language === 'en' ? englishContent.welcome : chineseContent.welcome;
        document.querySelectorAll('p1')[0].textContent = language === 'en' ? englishContent.idea1 : chineseContent.idea1;
        document.querySelectorAll('p1')[1].textContent = language === 'en' ? englishContent.idea2 : chineseContent.idea2;
    }
</script>
