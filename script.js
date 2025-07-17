document.addEventListener("DOMContentLoaded", () => {
    // تحريك العنوان الرئيسي h1
    anime({
        targets: 'h1',
        translateY: [-100, 0],       // تحريك العنصر من الأعلى إلى وضعه الطبيعي
        opacity: [0, 1],             // إضافة تأثير التلاشي
        easing: 'easeOutExpo',       // نوع الحركة
        duration: 2000               // المدة الزمنية (بالمللي ثانية)
    });

    // تحريك أقسام الصفحة عند التمرير
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        anime({
            targets: section,
            opacity: [0, 1],
            translateY: [50, 0],
            delay: index * 300,
            easing: 'easeOutExpo',
            duration: 1000
        });
    });

    // تحريك بطاقات المشاريع عند التمرير
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        anime({
            targets: card,
            opacity: [0, 1],
            translateY: [30, 0],
            delay: anime.stagger(200),
            easing: 'easeOutExpo',
            duration: 1000
        });
    });
});