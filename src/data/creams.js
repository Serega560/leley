export const creams = [
    {
        id: 1,
        title:  "Ламеллярный крем с лифтинг эффектом",
        weight: "15 мл",
        category: "Крем",
        link: "https://www.ozon.ru/product/leley-lamellyarnyy-krem-dlya-kozhi-vokrug-glaz-s-lifting-effektom-ot-vseh-tipov-morshchin-ot-otekov-2121421631/?at=mqtkzGklEcLg2GrxCL52YGmF3LEwgQtVwonMJup2ERym",
        rating: "4.9",
        review: "325 отзывов",
        imgFile: "lifting.png",
        imgFileMb: "lifting_mb.png",
        rightBgFile: "lifting_bg1.png",
        leftBgFile: "lifting_bg2.png",
        gallery: [
            {
                fallback: new URL('../assets/img/lifting.png', import.meta.url).href,
                webp1x: new URL('../assets/img/lifting.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/lifting.png?format=webp&width=800', import.meta.url).href
            },
            {
                fallback: new URL('../assets/img/lifting_mb.png', import.meta.url).href,
                webp1x: new URL('../assets/img/lifting_mb.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/lifting_mb.png?format=webp&width=800', import.meta.url).href
            },
            // {
            //     fallback: new URL('../assets/img/doc_dp.jpg', import.meta.url).href,
            //     webp1x: new URL('../assets/img/doc_dp.jpg?format=webp&width=400', import.meta.url).href,
            //     webp2x: new URL('../assets/img/doc_dp.jpg?format=webp&width=800', import.meta.url).href
            // }
        ],
        // imgDoc:"doc.dp.jpg",
        skinNeeds: "Крем подойдет всем типам кожи, обезвоженной, раздраженной, против борьбы с возрастными изменениями, " +
            "в период восстановления после пилингов.",
        compound: "Состав INCI: Aqua, Cetearyl Olivate, Caprylic/Capric Triglyceride, Sorbitan Olivate, Glycerin, " +
            "Propylene Glycol, Dimethicone, Troxerutin, Butyrospermum Parkii (Shea) Butter, DL-Alpha Tocopheryl Acetate, " +
            "Dipeptide Diaminobutyroyl Benzylamide Diacetate, Acetyl Hexapeptide-8, Palmitoyl Tripeptide-5, Sodium PCA, " +
            "Sodium Lactate, Arginine, Aspartic Acid, PCA, Alanine, Glycine, Serine, Valine, Isoleucine, Threonine, " +
            "Proline, Histidine, Phenylalanine, Sucrose Stearate, Sucrose Palmitate, Phenoxyethanol, Ethylhexylglycerin, " +
            "1,2-Hexanediol, Rosa Canina Fruit Extract (CO2), Lecithin, Sodium Hyaluronate (SLMW), Alpha-Tocopherol, " +
            "Beta-Tocopherol, Gamma-Tocopherol, Delta-Tocopherol, Beta-Sitosterol, Glyceryl Linolenate, " +
            "Sodium Acrylates Copolymer.",

        info: {
            advertising: "Ламеллярный крем для кожи вокруг глаз с лифтинг-эффектом — это высокоэффективное " +
                "средство для ухода за деликатной кожей в области глаз. Крем способствует разглаживанию морщин, " +
                "уменьшению отёков и улучшению цвета кожи, возвращая ей свежий и ухоженный вид. Лёгкая текстура " +
                "быстро впитывается, не оставляет жирного блеска и подходит для всех типов кожи, включая чувствительную.",

            action: "Действие активных компонентов",

            actionDescription: "Пептиды-миорелаксанты — снижают активность мимических мышц, способствуют разглаживанию морщин и предотвращают появление новых.\n" +
                "Троксерутин — укрепляет сосудистую стенку, улучшает микроциркуляцию и помогает уменьшить отёки и мешки под глазами.\n" +
                "Фосфолипиды (лецитин) — восстанавливают и поддерживают барьерную функцию кожи, повышают увлажнение и эластичность.\n" +
                "Витамин Е — антиоксидант, защищает кожу от свободных радикалов и замедляет процессы старения.",

            choice: "Для кого подходит",

            choiceAdvantages: "Крем рекомендуется для всех типов кожи, особенно для тех, кто сталкивается с " +
                "мимическими морщинами, отёками, тёмными кругами и тусклым цветом лица в области глаз. " +
                "Он подходит для ежедневного ухода и помогает поддерживать кожу свежей, увлажнённой и упругой.",

            advantages: "Преимущества",

            advantagesDescription: "Ламеллярная структура для глубокого проникновения активных компонентов.\n" +
                "Комплексный уход за кожей вокруг глаз: морщины, отёки, тусклый тон.\n" +
                "Подходит для всех типов кожи, включая чувствительную.\n" +
                "Лёгкая текстура, быстро впитывается, не оставляет жирного блеска.",
            result: "Результат",

            resultDescription: "При регулярном использовании кожа вокруг глаз становится более упругой и эластичной, " +
                "морщины и отёки уменьшаются, а цвет кожи светлеет и выглядит более свежим и ухоженным.",

            application: "Применение",
            applicationDescription: "Наносите утром и вечером на очищенную кожу лица и век. Легко распределите крем массирующими движениями.",

            declaration: "декларация",
        }
    },
    {
        id: 2,
        title: "Крем-флюид с пептидами-миорелаксантами",
        weight: "30 мл",
        category: "Крем",
        link: "https://www.ozon.ru/product/leley-lamellyarnyy-krem-flyuid-dlya-litsa-i-vek-s-peptidami-miorelaksantami-ot-mimicheskih-morshchin-1636237962/?at=83tB18v09uM8KL7ocDgRR7JSk3EoWOFqwYMy2SjqjDV1",
        rating: "4.9",
        review: "325 отзывов",
        imgFile: "peptidyMio.png",
        imgFileMb: "peptidyMio_mb.png",
        rightBgFile: "peptidyMio_bg1.png",
        leftBgFile: "peptidyMio_bg2.png",
        gallery: [
            {
                fallback: new URL('../assets/img/peptidyMio.png', import.meta.url).href,
                webp1x: new URL('../assets/img/peptidyMio.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/peptidyMio.png?format=webp&width=800', import.meta.url).href
            },
            {
                fallback: new URL('../assets/img/peptidyMio_mb.png', import.meta.url).href,
                webp1x: new URL('../assets/img/peptidyMio_mb.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/peptidyMio_mb.png?format=webp&width=800', import.meta.url).href
            },
            {
                // fallback: new URL('../assets/img/doc_dc.jpg', import.meta.url).href,
                // webp1x: new URL('../assets/img/doc_dc.jpg?format=webp&width=400', import.meta.url).href,
                // webp2x: new URL('../assets/img/doc_dc.jpg?format=webp&width=800', import.meta.url).href
            }
        ],
        // imgDoc:"doc.dc.jpg",
        skinNeeds: "Крем подойдет всем типам кожи, обезвоженной, раздраженной, против борьбы с возрастными изменениями, " +
            "в период восстановления после пилингов.",
        compound: "Water, SYN-AKE (Glycerin, Water, Dipeptide Diaminobutyroyl Benzylamide Diacetate), " +
            "ARGIRELINE (Acetyl Hexapeptide-8, Water, Glycerin, 1,2-Hexanediol), cetearyl olivate and " +
            "sorbitan olivate, lecithin, сaprylic/capric triglyceride, troxerutin, dL–alpha tocopheryl acetate, " +
            "dipotassium glycyrrhizinate, biosaccharide gum-1, panthenol, squalane, CO2-rosmarinus officinalis extract, " +
            "phenoxyethanol and ethylhexylglycerin, cetearyl ethylhexanoate, sorbitol, tocobiol C (α-tocopherol, " +
            "β-tocopherol, γ-tocopherol, δ-tocopherol, β-sitosterol, glyceryl linolenate), sodium acrylates copolymer.",

        info: {
            advertising: "Ламеллярный крем-флюид с пептидами-миорелаксантами — это инновационное средство, предназначенное " +
                "для борьбы с мимическими морщинами и признаками старения кожи. Его формула сочетает в себе пептиды " +
                "SYN®-AKE и ARGIRELINE, которые обладают ботулоподобным эффектом, расслабляя мышцы и разглаживая морщины. " +
                "Крем также содержит витамин Е, известный своими антиоксидантными свойствами, и фосфолипиды, " +
                "которые укрепляют кожный барьер и улучшают увлажнение кожи.",

            action: "Действие активных компонентов",

            actionDescription: "SYN®-AKE (5%) — пептид, имитирующий действие змеиного яда, блокирует нервные импульсы, " +
                "расслабляя мышцы и уменьшая глубину морщин.\n" +
                "ARGIRELINE (5%) — пептид, уменьшающий микро-сокращения мышц, что способствует разглаживанию мимических " +
                "морщин и предотвращению их появления.\n" +
                "Витамин Е (1%) — антиоксидант, защищает кожу от свободных радикалов, замедляя процессы старения " +
                "и улучшая общий вид кожи.\n" +
                "Фосфолипиды — укрепляют липидный барьер кожи, улучшая её увлажнение и повышая устойчивость к внешним воздействиям.",

            choice: "Для кого подходит",

            choiceAdvantages: "Крем-флюид рекомендуется для зрелой кожи, склонной к образованию мимических морщин, " +
                "потере упругости и тусклому цвету лица. Он подходит для ежедневного использования и может быть " +
                "включён в утренний и вечерний уход.",

            advantages: "Преимущества",

            advantagesDescription: "Ботулоподобный эффект без инъекций.\n" +
                "Комплексный уход за кожей лица и век.\n" +
                "Укрепление кожного барьера и улучшение увлажнения.\n" +
                "Подходит для использования в любое время суток.",

            result: "Результат",

            resultDescription: "При регулярном использовании кожа становится более упругой, мимические морщины — менее " +
                "выраженными, а цвет лица — более ровным и сияющим. Крем способствует улучшению общего состояния кожи, придавая ей здоровый и ухоженный вид.",

            application: "Применение",
            applicationDescription: "Наносите утром и вечером на очищенную кожу лица и век. Легко распределите крем массирующими движениями.",

            declaration: "декларация",
        }
    },
    {
        id: 3,
        title: "Крем-флюид для лица с пептидами",
        weight: "30 мл",
        category: "Крем",
        link: "https://www.ozon.ru/product/leley-omolazhivayushchiy-krem-flyuid-dlya-litsa-i-vek-s-peptidami-i-trokserutinom-protiv-morshchin-1041330871/?at=79tnl9nN3f0omW9lHyqAyjrTnjgPrxipnAWj3cj1NQVE",
        rating: "4.9",
        review: "325 отзывов",
        imgFile: "peptidyLico.png",
        imgFileMb: "peptidyLico_mb.png",
        rightBgFile: "peptidyLico_bg1.png",
        leftBgFile: "peptidyLico_bg2.png",
        gallery: [
            {
                fallback: new URL('../assets/img/peptidyLico.png', import.meta.url).href,
                webp1x: new URL('../assets/img/peptidyLico.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/peptidyLico.png?format=webp&width=800', import.meta.url).href
            },
            {
                fallback: new URL('../assets/img/peptidyLico_mb.png', import.meta.url).href,
                webp1x: new URL('../assets/img/peptidyLico_mb.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/peptidyLico_mb.png?format=webp&width=800', import.meta.url).href
            },
            {
                // fallback: new URL('../assets/img/doc_du.jpg', import.meta.url).href,
                // webp1x: new URL('../assets/img/doc_du.jpg?format=webp&width=400', import.meta.url).href,
                // webp2x: new URL('../assets/img/doc_du.jpg?format=webp&width=800', import.meta.url).href
            }
        ],
        // imgDoc:"doc.du.jpg",
        skinNeeds: "Крем подойдет всем типам кожи",
        compound: "Water, Syn-Coll (glycerin, aqua, palmitoyl tripeptide-5), cetearyl olivate and sorbitan olivate, " +
            "lecithin, сaprylic/capric triglyceride, сopper tripeptide-1, troxerutin, dipotassium glycyrrhizinate, " +
            "biosaccharide gum-1, panthenol, squalane, CO2-rosmarinus officinalis extract, dL–alpha tocopheryl acetate, " +
            "phenoxyethanol and ethylhexylglycerin, cetearyl ethylhexanoate, sorbitol, tocobiol C (α-tocopherol, β-tocopherol, " +
            "γ-tocopherol, δ-tocopherol, β-sitosterol, glyceryl linolenate), sodium acrylates copolymer.",

        info: {
            advertising: "Омолаживающий крем-флюид с пептидами и троксерутином — это многофункциональный уход для зрелой кожи, " +
                "направленный на борьбу с морщинами, потерей упругости и тусклым цветом лица. Лёгкая текстура флюида быстро " +
                "впитывается, не оставляя жирного блеска, и подходит для использования как утром, так и вечером. " +
                "Средство можно применять как для кожи лица, так и для области вокруг глаз, обеспечивая комплексный уход.",

            action: "Действие активных компонентов",

            actionDescription: "Пептиды — стимулируют синтез коллагена и эластина, способствуя улучшению упругости и эластичности кожи.\n" +
                "Троксерутин — обладает антивозрастным и укрепляющим действием, улучшает микроциркуляцию и способствует уменьшению отёков.\n" +
                "Увлажняющие компоненты — обеспечивают длительное увлажнение, предотвращая сухость и стянутость кожи.",

            choice: "Для кого подходит",

            choiceAdvantages: "Крем-флюид рекомендуется для зрелой кожи, склонной к образованию морщин, потере упругости и " +
                "тусклому цвету лица. Он подходит для ежедневного использования и может быть включён в утренний и вечерний уход.",

            advantages: "Преимущества",

            advantagesDescription: "Лёгкая текстура, не оставляющая жирного блеска.\n" +
                "Подходит для использования на лице и вокруг глаз.\n" +
                "Комплексный уход, направленный на борьбу с признаками старения.\n" +
                "Увлажняет и питает кожу, улучшая её внешний вид.",

            result: "Результат",

            resultDescription: "При регулярном использовании кожа становится более упругой, морщины менее выраженными, " +
                "а цвет лица — более ровным и сияющим. Крем-флюид способствует улучшению общего состояния кожи, придавая ей здоровый и ухоженный вид.",

            application: "Применение",
            applicationDescription: " Наносите утром и вечером на очищенную кожу лица и век. Легко распределите крем массирующими движениями.",

            declaration: "декларация",
        }
    },
    {
        id: 4,
        title: "Крем-флюид с церамидами и пребиотиком",
        weight: "30 мл",
        category: "Крем",
        link: "https://www.ozon.ru/product/leley-lamellyarnyy-krem-flyuid-dlya-litsa-s-tseramidami-i-prebiotikom-dlya-vseh-tipov-kozhi-1042958905/?at=QktJO4Ap7cABpLYYtJ2ONv2fJwXjq5tq0NOvwho4RNzn",
        rating: "4.9",
        review: "325 отзывов",
        imgFile: "prebiotici.png",
        imgFileMb: "prebiotici_mb.png",
        rightBgFile: "prebiotici_bg1.png",
        leftBgFile: "prebiotici_bg2.png",
        gallery: [
            {
                fallback: new URL('../assets/img/prebiotici.png', import.meta.url).href,
                webp1x: new URL('../assets/img/prebiotici.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/prebiotici.png?format=webp&width=800', import.meta.url).href
            },
            {
                fallback: new URL('../assets/img/prebiotici_mb.png', import.meta.url).href,
                webp1x: new URL('../assets/img/prebiotici_mb.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/prebiotici_mb.png?format=webp&width=800', import.meta.url).href
            },
            {
                // fallback: new URL('../assets/img/doc_du.jpg', import.meta.url).href,
                // webp1x: new URL('../assets/img/doc_du.jpg?format=webp&width=400', import.meta.url).href,
                // webp2x: new URL('../assets/img/doc_du.jpg?format=webp&width=800', import.meta.url).href
            }
        ],
        // imgDoc:"doc.du.jpg",
        skinNeeds: "Крем подойдет всем типам кожи",
        compound: "Вода, полиглицерил-3 цетиловый эфир, оливат/сукцинат, глицерин, комплекс церамидов " +
            "(вода, церамиды 1 (EOS) и церамиды 2 (NS) и церамиды 3 (NP) и церамиды 6II (AP), бутиленгликоль, " +
            "пентиленгликоль, гидрогенизированный лецитин, эфиры полиглицерил-10 каприловых/каприновых глицеридов), " +
            "сквалан, бета-глюкан, лецитин, каприлик триглицерид, масло ши, масло жожоба, пантенол, инулин, " +
            "альфа-глюкан олигосахарид, витамин Е, аллантоин, бисаболол, СО2 экстракт розмарина, сорбитол, " +
            "феноксиэтанол и этилгексилглицерин, полиакрилатный кроссполимер- 6, бутиленгликоль, пентиленгликоль, " +
            "токобиол С (α-токоферол, β-токоферол, γ-токоферол, δ-токоферол, β-ситостерол, глицерилиноленат), ЭДТА",

        info: {
            advertising: "Ламеллярный крем-флюид с церамидами и пребиотиком — это лёгкий увлажняющий крем, предназначенный " +
                "для комплексного ухода за кожей лица всех типов. Его формула, основанная на ламеллярной технологии, " +
                "способствует глубокому проникновению активных компонентов, восстанавливая и поддерживая естественный баланс кожи. " +
                "Крем обладает лёгкой текстурой, быстро впитывается и не оставляет жирного блеска, что делает его идеальным для ежедневного использования.",

            action: "Действие активных компонентов",

            actionDescription: "Церамиды: Молекулы липидов, которые укрепляют кожный барьер, предотвращают потерю влаги и защищают от воздействия внешних факторов.\n" +
                "Пребиотик: Способствует поддержанию здоровой микрофлоры кожи, укрепляя её естественные защитные функции.",

            choice: "Для кого подходит",

            choiceAdvantages: "Крем-флюид рекомендуется для всех типов кожи, включая чувствительную. Он подходит для " +
                "ежедневного использования и может быть включён в утренний и вечерний уход.",

            advantages: "Преимущества",

            advantagesDescription: "Лёгкая текстура, не оставляющая жирного блеска.\n" +
                "Подходит для использования на лице и области шеи.\n" +
                "Укрепляет кожный барьер и поддерживает баланс микрофлоры.\n" +
                "Подходит для всех типов кожи, включая чувствительную.",

            result: "Результат",

            resultDescription: "При регулярном использовании кожа становится увлажнённой, мягкой и эластичной. " +
                "Церамиды и пребиотик способствуют восстановлению и поддержанию здорового состояния кожи, придавая ей естественный и ухоженный вид.",

            application: "Применение",
            applicationDescription: " Наносите утром и вечером на очищенную кожу лица и век. Легко распределите крем массирующими движениями.",

            declaration: "декларация",
        }
    },
    {
        id: 5,
        title: "Крем-сыворотка с витамином С и ниацинамидом",
        weight: "30 мл",
        category: "Крем",
        link: "https://www.ozon.ru/product/leley-syvorotka-s-vitaminom-s-2-i-niatsinamidom-5-ot-morshchin-pigmentatsii-dlya-siyaniya-kozhi-1041369100/?at=36tWqYAlZc89nlG5SE8plGWFvggZwSYZ090MuRGVrr1",
        rating: "4.9",
        review: "325 отзывов",
        imgFile: "vitamin.png",
        imgFileMb: "vitamin_mb.png",
        rightBgFile: "vitamin_bg1.png",
        leftBgFile: "vitamin_bg2.png",
        gallery: [
            {
                fallback: new URL('../assets/img/vitamin.png', import.meta.url).href,
                webp1x: new URL('../assets/img/vitamin.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/vitamin.png?format=webp&width=800', import.meta.url).href
            },
            {
                fallback: new URL('../assets/img/vitamin_mb.png', import.meta.url).href,
                webp1x: new URL('../assets/img/vitamin_mb.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/vitamin_mb.png?format=webp&width=800', import.meta.url).href
            },
            {
                // fallback: new URL('../assets/img/doc_du.jpg', import.meta.url).href,
                // webp1x: new URL('../assets/img/doc_du.jpg?format=webp&width=400', import.meta.url).href,
                // webp2x: new URL('../assets/img/doc_du.jpg?format=webp&width=800', import.meta.url).href
            }
        ],
        // imgDoc:"doc.du.jpg",
        skinNeeds: "Крем подойдет всем типам кожи",
        compound: "вода, ниацинамид, аскорбил тетраизопальмитат, глицерин, гликоль пальмитат, пропиленгликоль, " +
            "глицин, витамин Е, лецитин, трегалоза, сорбитол, СО2 экстракт шалфея, СО2 экстракт розмарина, " +
            "СО2-экстракт зеленого чая, феноксиэтанол и этилгексилглицерин, аллантоин, акриловый сополимер, ЭДТА.",

        info: {
            advertising: " Сыворотка с витамином С 2 % и ниацинамидом 5 % — продуманная формула, объединяющая антиоксидантные " +
                "свойства витамина С и выравнивающий, успокаивающий эффект ниацинамида. Средство направлено на борьбу с признаками " +
                "старения, неровностями тона и пигментацией. Благодаря сбалансированному составу сыворотка придаёт коже сияние, " +
                "визуально оживляет её, делает тон более ровным и свежим, не утяжеляя и не раздражая даже при склонности к чувствительности.",

            action: "Действие активных компонентов",

            actionDescription: "Витамин С (2 %) — антиоксидант, помогает бороться со свободными радикалами, осветляет кожу, " +
                "уменьшает выраженность пигментных пятен и выравнивает тон лица.\n" +
                "Ниацинамид (5 %) — укрепляет кожный барьер, уменьшает воспаления и покраснения, выравнивает текстуру кожи, " +
                "способствует устранению постакне и пигментных следов.",

            choice: "Для кого подходит",

            choiceAdvantages: "Эта сыворотка идеально подойдёт для людей с комбинированной, жирной или нормальной кожей, " +
                "особенно если есть проблемы с пигментацией, тусклым цветом лица, первыми морщинками или признаками усталости. " +
                "Также может быть интересна тем, кто хочет более яркий, свежий вид кожи без агрессивного воздействия.",

            advantages: "Преимущества",

            advantagesDescription: "Формула без отдушек, что уменьшает риск раздражения.\n" +
                "Лёгкая текстура, не перегружает кожу.\n" +
                "Суммарный эффект: антивозрастной уход, сияние и коррекция тона кожи.",

            result: "Результат",

            resultDescription: "При регулярном использовании кожа становится более светлой, сияющей, тон ровнеет, морщинки " +
                "выглядят менее выраженными, а пигментация и пятна после воспалений со временем заметно уменьшаются.",

            application: "Применение",
            applicationDescription: " Наносите утром и вечером на очищенную кожу лица и век. Легко распределите крем массирующими движениями.",

            declaration: "декларация",
        }
    },
    {
        id: 6,
        title: "Антивозрастная сыворотка с пептидами",
        weight: "30 мл",
        category: "Сыворотка",
        link: "https://www.ozon.ru/product/leley-antivozrastnaya-syvorotka-s-peptidami-lanablyu-i-ekstraktom-shipovnika-ot-morshchin-30-ml-1855402527/?at=ywtAZEAo9s0WwKPAImDG4pviR1xVLBu8XjN8EFor69xA",
        rating: "4.9",
        review: "325 отзывов",
        imgFile: "peptidyKoja.png",
        imgFileMb: "peptidyKoja_mb.png",
        rightBgFile:"peptidyKoja_bg1.png",
        leftBgFile:"peptidyKoja_bg2.png",
        gallery: [
            {
                fallback: new URL('../assets/img/peptidyKoja.png', import.meta.url).href,
                webp1x: new URL('../assets/img/peptidyKoja.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/peptidyKoja.png?format=webp&width=800', import.meta.url).href
            },
            {
                fallback: new URL('../assets/img/peptidyKoja_mb.png', import.meta.url).href,
                webp1x: new URL('../assets/img/peptidyKoja_mb.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/peptidyKoja_mb.png?format=webp&width=800', import.meta.url).href
            },
            {
                // fallback: new URL('../assets/img/doc_du.jpg', import.meta.url).href,
                // webp1x: new URL('../assets/img/doc_du.jpg?format=webp&width=400', import.meta.url).href,
                // webp2x: new URL('../assets/img/doc_du.jpg?format=webp&width=800', import.meta.url).href
            }
        ],
        // imgDoc:"doc.du.jpg",
        skinNeeds: "Крем подойдет всем типам кожи",
        compound: "Water, Aphanizomenon Flos-Aquae Extract (and) Hydrogenated Starch Hydrolysate, " +
            "Matrixyl 3000 (Glycerin (and) Aqua (and) Butylene Glycol (and) Carbomer (and) Polysorbate " +
            "20 (and) Palmitoyl Tripeptide-1 (and) Palmitoyl Tetrapeptide-7), panthenol, biosaccharide gum-1, " +
            "trehalose, dL–alpha tocopheryl acetate, CO2- rosa canina fruit extract, glycerin, sorbitol, " +
            "propylene glycol, lecithin, phenoxyethanol and ethylhexylglycerin, sodium acrylates copolymer, EDTA.",

        info: {
            advertising: "Антивозрастная сыворотка Leley с мощной формулой, включающей пептиды MATRIXYL 3000, " +
                "Lanablu и экстракт шиповника. Сыворотка направлена на борьбу с признаками старения — разглаживание морщин, " +
                "повышение упругости кожи и возвращение ей свежего и сияющего вида. Она устраняет тусклость, уменьшает " +
                "первые возрастные изменения, придаёт коже более гладкую и ухоженную текстуру, не перегружая её.",

            action: "Действие активных компонентов",

            actionDescription: "Пептиды MATRIXYL 3000 (3 %) — помогают уменьшить глубину морщин, стимулируют синтез коллагена и эластина, делая кожу более упругой.\n" +
                "Lanablu (5 %) — натуральный стимулятор обновления клеток и коллагена, повышает устойчивость кожи к стрессам и внешним раздражителям.\n" +
                "Экстракт шиповника СО₂ (1 %) — богат каротиноидами и витамином А, способствует регенерации, улучшению текстуры кожи и её гладкости.\n" +
                "Дополнительные увлажняющие и успокаивающие компоненты — фукогель, трегалоза, пантенол — глубоко увлажняют, успокаивают и делают кожу мягкой.\n" +
                "Витамин Е (1 %) — антиоксидант, защищает от окислительного стресса и помогает укреплять кожу.",

            choice: "Для кого подходит",

            choiceAdvantages: "Подходит для тех, кто хочет предотвратить и уменьшить признаки старения: мелкие морщины, " +
                "снижение упругости, тусклый тон лица. Особенно актуально для комбинированной, нормальной или слегка сухой кожи, " +
                "нуждающейся в восстановлении, сиянии и улучшении текстуры.",

            advantages: "Преимущества",

            advantagesDescription: "Формула с рабочими концентрациями проверенных активов.\n" +
                "Мягкий состав без излишней агрессии.\n" +
                "Улучшает внешний вид кожи: делает её более гладкой, упругой, сияющей.\n" +
                "Успокаивающие компоненты уменьшают раздражения и дискомфорт.",

            result: "Результат",

            resultDescription: "Кожа становится заметно более упругой и гладкой; мелкие морщинки — менее выраженными; " +
                "тон лица — ровнее; кожа — сияющей и ухоженной.",

            aapplication: "Применение",
            applicationDescription: " Наносите утром и вечером на очищенную кожу лица и век. Легко распределите крем массирующими движениями.",

            declaration: "декларация",
        }
    },
    {
        id: 7,
        title: "Сыворотка выравнивающая тон с транексамовой кислотой",
        weight: "30 мл",
        category: "Сыворотка",
        link: "https://www.ozon.ru/product/leley-syvorotka-vyravnivayushchaya-ton-s-traneksamovoy-kislotoy-i-ekstraktom-tsentelly-aziatskoy-2797212826/?at=gpt49gn6rh2G3gEyiJ0ryolt0Nwn0kfqQnZRgHmM68OL",
        rating: "5",
        review: "5 отзывов",
        imgFile: "kislota.png",
        imgFileMb: "kislota_mb.png",
        rightBgFile:"kislota_bg1.png",
        leftBgFile:"kislota_bg2.png",
        gallery: [
            {
                fallback: new URL('../assets/img/kislota_mb.png', import.meta.url).href,
                webp1x: new URL('../assets/img/kislota_mb.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/kislota_mb.png?format=webp&width=800', import.meta.url).href
            },
            {
                fallback: new URL('../assets/img/kislota_mb.png', import.meta.url).href,
                webp1x: new URL('../assets/img/kislota_mb.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/kislota_mb.png?format=webp&width=800', import.meta.url).href
            },
            {
                // fallback: new URL('../assets/img/doc_du.jpg', import.meta.url).href,
                // webp1x: new URL('../assets/img/doc_du.jpg?format=webp&width=400', import.meta.url).href,
                // webp2x: new URL('../assets/img/doc_du.jpg?format=webp&width=800', import.meta.url).href
            }
        ],
        // imgDoc:"doc.du.jpg",
        skinNeeds: "Крем подойдет всем типам кожи",
        compound: "Aqua, Tranexamic Acid, Niacinamide, Panthenol, Centella Asiatica Extract, Glycerin, Bifida Ferment Lysate, Lactobacillus " +
            "Ferment Lysate, Propionibacterium Ferment Lysate, Sorbitol, Phenoxyethanol, Allantoin, Ethylhexylglycerin, Sodium Acrylate/Sodium " +
            "Acryloyldimethyl Taurate Copolymer, Trideceth-6, PEG/PPG-18/18 Dimethicone, Dimethicone.",

        info: {
            advertising: "Выравнивающая сыворотка с транексамовой кислотой и экстрактом центеллы азиатской — это высокоэффективное средство, " +
                "предназначенное для коррекции тона кожи и борьбы с гиперпигментацией. Её уникальная формула сочетает в себе " +
                "транексамовую кислоту, известную своими осветляющими свойствами, и экстракт центеллы азиатской, который способствует " +
                "восстановлению и укреплению кожи. Сыворотка проникает глубоко в кожу, выравнивая её тон и придавая ей здоровый и сияющий вид.",

            action: "Действие активных компонентов",

            actionDescription: "Транексамовая кислота: Обладает осветляющим действием, снижает интенсивность пигментации и выравнивает тон кожи.\n" +
                "Экстракт центеллы азиатской: Ускоряет процессы заживления, укрепляет стенки сосудов, улучшает микроциркуляцию и способствует восстановлению кожи.\n" +
                "Гиалуроновая кислота: Обеспечивает глубокое увлажнение, заполняет морщины изнутри, придавая коже упругость и эластичность.\n" +
                "Витамин C: Антиоксидант, способствует осветлению пигментации и выравниванию тона кожи.",

            choice: "Для кого подходит",

            choiceAdvantages: "Сыворотка рекомендуется для кожи, склонной к гиперпигментации, пигментным пятнам и неровному тону. " +
                "Она подходит для использования в утреннем и вечернем уходе и может быть включена в регулярный уход за кожей лица.",

            advantages: "Преимущества",

            advantagesDescription: "Комплексный подход к выравниванию тона кожи и борьбе с гиперпигментацией.\n" +
                "Стимулирует обновление клеток и улучшает текстуру кожи.\n" +
                "Укрепляет и восстанавливает кожу, улучшая её упругость и эластичность.\n" +
                "Подходит для использования в утреннем и вечернем уходе.",

            result: "Результат",

            resultDescription: "При регулярном использовании сыворотки кожа становится более ровной, пигментные пятна становятся менее выраженными, " +
                "а цвет лица — более свежим и сияющим. Сыворотка способствует улучшению общего состояния кожи, придавая ей здоровый и ухоженный вид.",

            application: "Применение",
            applicationDescription: " Наносите утром и вечером на очищенную кожу лица и век. Легко распределите крем массирующими движениями.",

            declaration: "декларация",
        }
    },
    {
        id: 8,
        title: "Лифтинг-сыворотка с ретинолом 0,15% в липосомах",
        weight: "30 мл",
        category: "Сыворотка",
        link: "https://www.ozon.ru/product/leley-lifting-syvorotka-ot-morshchin-s-retinolom-0-15-i-ekstraktom-tsentelly-aziatskoy-2848551772/?at=Vvtz341B7sN0LVrxfkrKpNlhPXm7ZnSvOor0vu6rvNQz",
        rating: "5",
        review: "3 отзыва",
        imgFile: "retinol.png",
        imgFileMb: "retinol_mb.png",
        rightBgFile:"retinol_bg1.png",
        leftBgFile:"retinol_bg2.png",
        gallery: [
            {
                fallback: new URL('../assets/img/retinol.png', import.meta.url).href,
                webp1x: new URL('../assets/img/retinol.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/retinol.png?format=webp&width=800', import.meta.url).href
            },
            {
                fallback: new URL('../assets/img/retinol_mb.png', import.meta.url).href,
                webp1x: new URL('../assets/img/retinol_mb.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/retinol_mb.png?format=webp&width=800', import.meta.url).href
            },
            {
                // fallback: new URL('../assets/img/doc_du.jpg', import.meta.url).href,
                // webp1x: new URL('../assets/img/doc_du.jpg?format=webp&width=400', import.meta.url).href,
                // webp2x: new URL('../assets/img/doc_du.jpg?format=webp&width=800', import.meta.url).href
            }
        ],
        // imgDoc:"doc.du.jpg",
        skinNeeds: "Крем подойдет всем типам кожи",
        compound: "Aqua, glycerin, simmondsia chinensis (jojoba) seed oil, lecithin, caprylic/capric triglyceride and phospholipids and retinol, " +
            "dL–alpha tocopheryl acetate, phenoxyethanol, СО2-centella asiatica extract, bisabolol, ethylhexylglycerin, sodium acrylates copolymer.",

        info: {
            advertising: "Лифтинг-сывортка от морщин с ретинолом 0,15% и экстрактом центеллы азиатской — это высокоэффективное средство, предназначенное для комплексного " +
                "ухода за кожей лица, борющееся с признаками старения и усталости кожи. Его уникальная формула сочетает в себе ретинол, известный своими " +
                "антивозрастными свойствами, и экстракт центеллы азиатской, " +
                "который способствует восстановлению и укреплению кожи. Серум проникает глубоко в кожу, стимулируя обновление клеток и улучшая её текстуру и упругость.",

            action: "Действие активных компонентов",

            actionDescription: "Ретинол (0,15%): Стимулирует обновление клеток, способствует выработке коллагена, улучшает текстуру кожи и уменьшает видимость морщин.\n" +
                "Экстракт центеллы азиатской: Ускоряет процессы заживления, укрепляет стенки сосудов, улучшает микроциркуляцию и способствует восстановлению кожи.\n" +
                "Гиалуроновая кислота: Обеспечивает глубокое увлажнение, заполняет морщины изнутри, придавая коже упругость и эластичность.\n" +
                "Витамин E: Обладает антиоксидантными свойствами, защищает кожу от воздействия свободных радикалов и замедляет процессы старения.",

            choice: "Для кого подходит",

            choiceAdvantages: "Сыворотка рекомендуется для зрелой кожи, склонной к образованию морщин, потере упругости и тусклому " +
                "цвету лица. Он подходит для использования в вечернем уходе и может быть включён в регулярный уход за кожей лица.",

            advantages: "Преимущества",

            advantagesDescription: "Комплексный подход к борьбе с признаками старения кожи.\n" +
                "Стимулирует обновление клеток и выработку коллагена.\n" +
                "Укрепляет и восстанавливает кожу, улучшая её текстуру и упругость.\n" +
                "Подходит для использования в вечернем уходе.",

            result: "Результат",

            resultDescription: "При регулярном использовании сыворотки кожа становится более упругой, морщины — менее выраженными, " +
                "а цвет лица — более ровным и сияющим. Серум способствует улучшению общего состояния кожи, придавая ей здоровый и ухоженный вид.",

            application: "Применение",
            applicationDescription: " Наносите утром и вечером на очищенную кожу лица и век. Легко распределите крем массирующими движениями.",

            declaration: "декларация",
        }
    },
    {
        id: 9,
        title: "Увлажняющий тоник с пантенолом и эктоином",
        weight: "100 мл",
        category: "Тоник",
        link: "https://www.ozon.ru/product/leley-uvlazhnyayushchiy-omolazhivayushchiy-tonik-s-pantenolom-ektoinom-i-nuf-100-ml-1728660602/?at=08tYVyZDBcrKAow1UZBZ9LEsGwnXNGi6EqkW1HEmm2MV",
        rating: "4.9",
        review: "325 отзывов",
        imgFile: "uvlTonic.png",
        imgFileMb: "uvlTonic_mb.png",
        rightBgFile:"uvlTonic_bg1.png",
        leftBgFile:"uvlTonic_bg2.png",
        gallery: [
            {
                fallback: new URL('../assets/img/uvlTonic.png', import.meta.url).href,
                webp1x: new URL('../assets/img/uvlTonic.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/uvlTonic.png?format=webp&width=800', import.meta.url).href
            },
            {
                fallback: new URL('../assets/img/uvlTonic_mb.png', import.meta.url).href,
                webp1x: new URL('../assets/img/uvlTonic_mb.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/uvlTonic_mb.png?format=webp&width=800', import.meta.url).href
            },
            {
                // fallback: new URL('../assets/img/doc_du.jpg', import.meta.url).href,
                // webp1x: new URL('../assets/img/doc_du.jpg?format=webp&width=400', import.meta.url).href,
                // webp2x: new URL('../assets/img/doc_du.jpg?format=webp&width=800', import.meta.url).href
            }
        ],
        // imgDoc:"doc.du.jpg",
        skinNeeds: "Крем подойдет всем типам кожи",
        compound: "Water, panthenol, biosaccharide gum-1, ectoin, glycine, sodium PCA, sorbitol, sodium lactate, " +
            "phenoxyethanol and ethylhexylglycerin, allantoin, lactic acid.",

        info: {
            advertising: "Матирующий увлажняющий тоник с 5% ниацинамида, 0,5% цинка и пребиотиками — это высокоэффективное " +
                "средство для ухода за комбинированной и жирной кожей. Его уникальная формула сочетает в себе активные компоненты, " +
                "которые регулируют выработку себума, уменьшают воспаления и поддерживают баланс микрофлоры кожи. Тоник помогает " +
                "избавиться от жирного блеска, придавая коже матовость и свежесть на протяжении всего дня.",

            action: "Действие активных компонентов",

            actionDescription: "Ниацинамид (5%): Снижает выработку себума, уменьшает воспаления и покраснения, выравнивает тон кожи.\n" +
                "Цинк (0,5%): Регулирует работу сальных желез, обладает антисептическим и противовоспалительным действием.\n" +
                "Пребиотики: Поддерживают баланс микрофлоры кожи, укрепляют её защитные функции и способствуют восстановлению после воздействия внешних факторов.",

            choice: "Для кого подходит",

            choiceAdvantages: "Тоник рекомендуется для комбинированной и жирной кожи, склонной к появлению воспалений, акне и жирному блеску. " +
                "Он подходит для ежедневного использования и помогает поддерживать кожу чистой, матовой и увлажнённой.",

            advantages: "Преимущества",

            advantagesDescription: "Регулирует выработку себума, устраняя жирный блеск.\n" +
                "Уменьшает воспаления и покраснения, выравнивая тон кожи.\n" +
                "Поддерживает баланс микрофлоры кожи, укрепляя её защитные функции.\n" +
                "Лёгкая текстура, быстро впитывается, не оставляя липкости.",

            result: "Результат",

            resultDescription: "При регулярном использовании тоник помогает достичь матовости кожи, уменьшить количество воспалений и " +
                "выровнять её тон. Кожа становится более свежей, чистой и ухоженной, без ощущения стянутости или сухости.",

            application: "Применение",
            applicationDescription: " Наносите утром и вечером на очищенную кожу лица и век. Легко распределите крем массирующими движениями.",

            declaration: "декларация",
        }
    },
    {
        id: 10,
        title: "Матирующий тоник с ниацинамидом и цинком",
        weight: "100 мл",
        category: "Тоник",
        link: "https://www.ozon.ru/product/leley-matiruyushchiy-uvlazhnyayushchiy-tonik-s-5-niatsinamida-0-5-tsinka-i-prebiotikami-1610033976/?at=XQtk23kKpcxlBzzLfvMyXGQCXYo5xWfYYARj4SkB3Pr8",
        rating: "4.9",
        review: "325 отзывов",
        imgFile: "matTonic.png",
        imgFileMb: "matTonic_mb.png",
        rightBgFile:"matTonic_bg1.png",
        leftBgFile:"matTonic_bg2.png",
        gallery: [
            {
                fallback: new URL('../assets/img/matTonic.png', import.meta.url).href,
                webp1x: new URL('../assets/img/matTonic.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/matTonic.png?format=webp&width=800', import.meta.url).href
            },
            {
                fallback: new URL('../assets/img/matTonic_mb.png', import.meta.url).href,
                webp1x: new URL('../assets/img/matTonic_mb.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/matTonic_mb.png?format=webp&width=800', import.meta.url).href
            },
            {
                // fallback: new URL('../assets/img/doc_du.jpg', import.meta.url).href,
                // webp1x: new URL('../assets/img/doc_du.jpg?format=webp&width=400', import.meta.url).href,
                // webp2x: new URL('../assets/img/doc_du.jpg?format=webp&width=800', import.meta.url).href
            }
        ],
        // imgDoc:"doc.du.jpg",
        skinNeeds: "Крем подойдет всем типам кожи",
        compound: "Water, niacinamide, inulin and alpha-glucan oligosaccharide, sorbitol, sodium PCA, sodium lactate, " +
            "arginine, aspartic acid, PCA, alanine, glycine, serine, valine, isoleucine, threonine, proline, " +
            "histidine, phenylalanine, phenoxyethanol and ethylhexylglycerin, zinc PCA, lactic acid.",

        info: {
            advertising: "Матирующий увлажняющий тоник с 5% ниацинамида, 0,5% цинка и пребиотиками — это высокоэффективное " +
                "средство для ухода за комбинированной и жирной кожей. Его уникальная формула сочетает в себе активные компоненты, " +
                "которые регулируют выработку себума, уменьшают воспаления и поддерживают баланс микрофлоры кожи. Тоник помогает " +
                "избавиться от жирного блеска, придавая коже матовость и свежесть на протяжении всего дня.",

            action: "Действие активных компонентов",

            actionDescription: "Ниацинамид (5%): Снижает выработку себума, уменьшает воспаления и покраснения, выравнивает тон кожи.\n" +
                "Цинк (0,5%): Регулирует работу сальных желез, обладает антисептическим и противовоспалительным действием.\n" +
                "Пребиотики: Поддерживают баланс микрофлоры кожи, укрепляют её защитные функции и способствуют восстановлению после воздействия внешних факторов.",

            choice: "Для кого подходит",

            choiceAdvantages: "Тоник рекомендуется для комбинированной и жирной кожи, склонной к появлению воспалений, акне и жирному блеску. " +
                "Он подходит для ежедневного использования и помогает поддерживать кожу чистой, матовой и увлажнённой.",

            advantages: "Преимущества",

            advantagesDescription: "Регулирует выработку себума, устраняя жирный блеск.\n" +
                "Уменьшает воспаления и покраснения, выравнивая тон кожи.\n" +
                "Поддерживает баланс микрофлоры кожи, укрепляя её защитные функции.\n" +
                "Лёгкая текстура, быстро впитывается, не оставляя липкости.",

            result: "Результат",

            resultDescription: "При регулярном использовании тоник помогает достичь матовости кожи, уменьшить количество воспалений и " +
                "выровнять её тон. Кожа становится более свежей, чистой и ухоженной, без ощущения стянутости или сухости.",

            application: "Применение",
            applicationDescription: " Наносите утром и вечером на очищенную кожу лица и век. Легко распределите крем массирующими движениями.",

            declaration: "декларация",
        }
    }
].map(item => {
    const img = new URL(`../assets/img/${item.imgFile}`, import.meta.url).href;
    const bgRight = new URL(`../assets/img/${item.rightBgFile}`, import.meta.url).href;
    const bgLeft = new URL(`../assets/img/${item.leftBgFile}`, import.meta.url).href;
    const imgMb = new URL(`../assets/img/${item.imgFileMb}`, import.meta.url).href;
    const imgDoc = item.imgDoc ? new URL(`../assets/img/${item.imgDoc}`, import.meta.url).href : '';
    const webp1x = new URL(`../assets/img/${item.imgFile}?format=webp&width=400`, import.meta.url).href;
    const webp2x = new URL(`../assets/img/${item.imgFile}?format=webp&width=800`, import.meta.url).href;
    const fallback = new URL(`../assets/img/${item.imgFile}?width=400`, import.meta.url).href;
    const webpMb1x = new URL(`../assets/img/${item.imgFileMb}?format=webp&width=400`, import.meta.url).href;
    const webpMb2x = new URL(`../assets/img/${item.imgFileMb}?format=webp&width=800`, import.meta.url).href;
    const fallbackMb = new URL(`../assets/img/${item.imgFileMb}?width=400`, import.meta.url).href;

    // Оставляем gallery как массив объектов
    const gallery = item.gallery
        .filter(img => img) // убираем пустые
        .map(imgObj => ({
            fallback: imgObj.fallback,
            webp1x: imgObj.webp1x,
            webp2x: imgObj.webp2x,
            title: imgObj.title || item.title
        }));

    return {
        ...item,
        img,
        bgRight,
        bgLeft,
        imgMb,
        imgDoc,
        webp1x,
        webp2x,
        fallback,
        webpMb1x,
        webpMb2x,
        fallbackMb,
        gallery,
    };
});
