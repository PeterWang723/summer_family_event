// Greenwich Park 团建活动 - 交互功能
// 游戏详细规则数据
const gameRulesData = {
    "你画我猜": {
        station: "Station 1: 创意表达站",
        subtitle: "画图猜词，默契挑战",
        icon: "🎨",
        color: "primary",
        image: "./images/charades-game.png",
        overview: "经典的团队协作游戏，通过绘画和猜测来增进团队默契，考验创意表达和理解能力。",
        background: "你画我猜是一个源于古老的传统游戏，现在已成为全世界最受欢迎的团队建设活动之一。它不仅能带来欢声笑语，更能增强团队成员之间的理解和配合。",
        objective: "在限定时间内，通过画图和猜测获得最高分数，培养团队默契和沟通能力。",
        participants: "每队4-6人，最多可同时容纳8队参与",
        duration: "每轮3分钟，共进行3轮，总时长约15-20分钟",
        equipment: "白板或画纸、马克笔、题卡、计时器、评分表",
        venue: "需要平坦空间约6×8米，有展示画作的区域",
        rules: [
            "1. 队伍轮流派出一名画手，其他成员为猜测者",
            "2. 画手抽取题卡，开始画图，不能说话、写字或做手势",
            "3. 队友在3分钟内尽可能多地猜出画作内容",
            "4. 猜对一个词汇得10分，画手可以点头确认正确答案",
            "5. 画手不得使用数字、字母或箭头等文字符号",
            "6. 如果猜错，画手可以摇头示意，继续作画",
            "7. 时间结束后立即停止，统计本轮得分"
        ],
        victory: "三轮结束后总分最高的队伍获胜，平分则进行加时赛",
        safety: [
            "使用无毒水性笔，避免弄脏衣物",
            "画板放置稳固，防止倾倒伤人",
            "保持游戏区域整洁，及时清理画具"
        ]
    },
    "词汇拼图": {
        station: "Station 1: 创意表达站",
        subtitle: "团队协作，智慧比拼",
        icon: "🧩",
        color: "primary",
        image: "./images/word-puzzle.jpg",
        overview: "通过团队合作拼出完整词汇或句子，考验逻辑思维、沟通协调和策略规划能力。",
        background: "词汇拼图结合了传统拼图游戏和文字游戏的特点，要求团队成员在限制条件下协作完成任务，是锻炼团队协作能力的绝佳选择。",
        objective: "在规定时间内通过团队协作拼出指定的词汇或句子，考验团队的沟通和协调能力。",
        participants: "每队5-8人，可同时容纳6队参与",
        duration: "每轮5分钟，共进行2轮，总时长约15分钟",
        equipment: "字母拼图块、题目卡片、计时器、桌子、答案提交卡",
        venue: "需要平坦桌面空间，每队需要约2×2米的工作区域",
        rules: [
            "1. 每队获得一套打乱的字母拼图块和题目卡",
            "2. 队员可以讨论策略，但不能看其他队员的拼图块",
            "3. 每人只能操作自己分配到的拼图块",
            "4. 必须通过口头沟通协调拼图位置",
            "5. 队长负责最终确认答案并提交",
            "6. 拼对完整词汇得20分，部分正确得10分",
            "7. 提前完成可获得时间奖励分"
        ],
        victory: "两轮总分最高的队伍获胜，时间用时最短的队伍可获得额外奖励分",
        safety: [
            "拼图块较小，注意不要误食",
            "保持桌面干净，防止拼图块掉落",
            "避免激烈争论，保持友好沟通氛围"
        ]
    },
    "无声表演": {
        station: "Station 1: 创意表达站",
        subtitle: "肢体语言，创意演绎",
        icon: "🎭",
        color: "primary",
        image: "./images/mime-game.jpg",
        overview: "运用肢体动作和表情表演指定情景，队友通过观察猜测表演内容，培养创意表达和观察能力。",
        background: "无声表演源于古典哑剧艺术，通过纯粹的肢体语言进行表达。在团队建设中，它能极大提高成员的表达能力和观察力。",
        objective: "通过肢体表演让队友正确猜出指定内容，提升非语言沟通能力和团队默契。",
        participants: "每队4-6人，每轮1人表演其他人猜测",
        duration: "每个情景2分钟，每队表演3个情景，总时长约20分钟",
        equipment: "表演题卡、计时器、评分表、小道具（帽子、围巾等）",
        venue: "需要开阔平坦空间约5×5米，便于表演和观看",
        rules: [
            "1. 表演者抽取题卡，有30秒准备时间",
            "2. 表演过程中不能发声、不能写字",
            "3. 可以使用简单道具，但不能直接指向答案",
            "4. 队友可以随时猜测，表演者用点头摇头回应",
            "5. 猜对得15分，每个队伍轮流表演",
            "6. 可以分解动作，逐步引导队友理解",
            "7. 表演内容包括动物、职业、电影、日常活动等"
        ],
        victory: "三轮表演总分最高的队伍获胜，创意表演可获得额外加分",
        safety: [
            "表演动作要适度，避免过于激烈的动作",
            "确保表演区域无障碍物，防止摔倒",
            "尊重表演者，保持观看秩序"
        ]
    },
    "木头人": {
        station: "Station 2: 反应挑战站",
        subtitle: "音乐停止，瞬间静止",
        icon: "🕺",
        color: "secondary",
        image: "./images/freeze-game.jpg",
        overview: "音乐响起时尽情舞动，音乐停止瞬间必须立刻静止不动，考验反应速度和自控能力。",
        background: "木头人游戏是一个传统的儿童游戏，现在被改编为团队建设活动。它不仅能带来欢乐，还能提高参与者的反应能力和自我控制力。",
        objective: "通过音乐控制的启停来测试反应速度，最后坚持到底的参与者获胜。",
        participants: "每轮8-12人同时参与，可进行多轮比赛",
        duration: "每轮3-5分钟，可进行3轮，总时长约15分钟",
        equipment: "音响设备、音乐播放列表、标记区域的绳索或标线",
        venue: "需要开阔平坦空间约8×8米，地面平整无障碍",
        rules: [
            "1. 所有参与者在指定区域内站立准备",
            "2. 音乐响起时可以自由舞动、走动",
            "3. 音乐突然停止时必须立即静止不动",
            "4. 静止后观察3秒，任何动作都将被淘汰",
            "5. 被淘汰者需要离开游戏区域",
            "6. 重复进行直到剩余3人为止",
            "7. 最后3名参与者为本轮获胜者"
        ],
        victory: "坚持到最后的3名参与者获胜，可获得团队积分奖励",
        safety: [
            "确保游戏区域地面平整，无绊倒风险",
            "音乐音量适中，不要过于刺耳",
            "参与者要穿着舒适的运动鞋",
            "避免过于激烈的舞蹈动作"
        ]
    },
    "红绿灯": {
        station: "Station 2: 反应挑战站",
        subtitle: "听指令，快反应",
        icon: "🚦",
        color: "secondary",
        image: "./images/red-light-game.jpg",
        overview: "听到指令后快速做出相应反应，绿灯前进红灯停止，考验听觉反应和身体控制能力。",
        background: "红绿灯游戏模拟交通规则，通过听觉指令控制身体动作，是训练快速反应和遵守规则意识的经典游戏。",
        objective: "根据指令快速反应，率先到达终点线，培养快速反应能力和规则意识。",
        participants: "每轮10-15人，可进行多轮淘汰赛",
        duration: "每轮2-3分钟，进行3轮，总时长约12分钟",
        equipment: "口哨或喇叭、起始线和终点线标记、计时器",
        venue: "需要直线距离约20米的开阔空间，宽度至少8米",
        rules: [
            "1. 所有参与者在起始线后排成一列",
            "2. 听到'绿灯'指令时向前跑向终点",
            "3. 听到'红灯'指令时必须立即停止",
            "4. 红灯时继续移动者后退3步作为惩罚",
            "5. 可能会有连续的红灯或绿灯指令",
            "6. 率先触及终点线的前3名获胜",
            "7. 违规者累计3次将被淘汰"
        ],
        victory: "最先到达终点的前3名参与者获胜，违规次数最少者可获得公平竞赛奖",
        safety: [
            "确保跑道平整无障碍物",
            "参与者要穿着防滑运动鞋",
            "保持安全距离，避免碰撞",
            "指令要清晰响亮，确保所有人能听到"
        ]
    },
    "音乐椅子": {
        station: "Station 2: 反应挑战站",
        subtitle: "抢座位，拼速度",
        icon: "🪑",
        color: "secondary",
        image: "./images/musical-chairs.jpg",
        overview: "音乐停止时快速抢占座位，椅子数量总是比人数少一个，考验反应速度和战略位置选择。",
        background: "音乐椅子是世界各地都流行的经典游戏，它结合了音乐、运动和策略，能够在欢乐的氛围中培养快速反应能力。",
        objective: "在椅子数量不足的情况下快速找到座位，通过淘汰制决出最终获胜者。",
        participants: "开始时8-10人，椅子数量比人数少1个",
        duration: "每轮1-2分钟，总时长约10-15分钟",
        equipment: "椅子若干、音响设备、音乐播放设备",
        venue: "需要圆形空间约6×6米，中央放置椅子，周围有走动空间",
        rules: [
            "1. 椅子围成圆圈，数量比参与者少1个",
            "2. 音乐响起时，所有人围着椅子行走",
            "3. 音乐停止时，迅速找椅子坐下",
            "4. 没有抢到椅子的人被淘汰",
            "5. 移除一把椅子，继续下一轮",
            "6. 重复进行直到只剩一把椅子两个人",
            "7. 最后坐到椅子的人获胜"
        ],
        victory: "最后成功坐到唯一椅子的参与者获胜，可获得'抢座高手'称号",
        safety: [
            "椅子要稳固，避免翻倒",
            "控制行走速度，避免奔跑碰撞",
            "椅子周围要有足够的安全空间",
            "淘汰的参与者要及时离开游戏区域"
        ]
    },
    "蒙眼踢球": {
        station: "Station 3: 运动协作站",
        subtitle: "信任协作，精准射门",
        icon: "⚽",
        color: "accent",
        image: "./images/blind-soccer.jpg",
        overview: "蒙住双眼在队友语言指导下踢球进门，考验团队沟通协作能力和相互信任程度。",
        background: "蒙眼踢球是一项考验团队默契的运动游戏，它要求参与者完全信任队友的指导，同时锻炼空间感知和协调能力。",
        objective: "通过语言指导帮助蒙眼队友成功射门得分，培养团队信任和沟通技巧。",
        participants: "每组2人（1人踢球1人指导），最多可容纳8组",
        duration: "每组3次射门机会，每次2分钟，总时长约30分钟",
        equipment: "眼罩、软质足球、便携球门、安全垫、计分表",
        venue: "需要平坦草地或室内空间约10×15米，设置5米射门距离",
        rules: [
            "1. 踢球者戴上眼罩，在起点准备射门",
            "2. 指导者站在侧边，只能用语言指导",
            "3. 指导者不能触碰踢球者或球",
            "4. 踢球者有3次射门机会",
            "5. 进球得20分，击中门框得10分",
            "6. 每组完成后角色互换再进行",
            "7. 可以在射门前给踢球者1分钟熟悉场地"
        ],
        victory: "两人总分最高的组合获胜，进球数最多者可获得'神射手'奖",
        safety: [
            "使用软质足球，避免伤害",
            "确保射门区域无障碍物",
            "指导者要时刻关注踢球者安全",
            "踢球者要穿着合适的运动鞋",
            "在球门周围铺设安全垫"
        ]
    },
    "点球大战": {
        station: "Station 3: 运动协作站",
        subtitle: "技巧挑战，精准对决",
        icon: "🥅",
        color: "accent",
        image: "./images/penalty-game.jpg",
        overview: "传统足球点球比赛形式，考验个人射门技巧和心理素质，为团队争取最高分数。",
        background: "点球大战是足球运动中最激动人心的环节之一，在团队建设中能够培养参与者的抗压能力和精准技巧。",
        objective: "通过精准的射门技巧获得最高分数，同时承担一定的心理压力挑战。",
        participants: "每人5次射门机会，可容纳所有团队成员轮流参与",
        duration: "每人约3分钟，总时长根据参与人数而定",
        equipment: "标准足球、便携球门、标记点、计分板、守门员装备（可选）",
        venue: "需要标准足球场或平坦空地约15×10米",
        rules: [
            "1. 每人有5次射门机会，从罚球点射门",
            "2. 可以选择队友担任守门员或射空门",
            "3. 进球得10分，射中门框得5分",
            "4. 连续进球可获得连击奖励分",
            "5. 最后一球进门可获得压哨奖励分",
            "6. 射门时其他队员在安全区域观看",
            "7. 记录每人的总得分和进球数"
        ],
        victory: "个人最高得分者获胜，团队总得分最高的队伍获得团体奖",
        safety: [
            "确保守门员佩戴保护装备",
            "其他参与者要在安全距离观看",
            "使用标准足球，检查球的状况",
            "射门区域要平整，避免踏空",
            "准备急救包以防意外受伤"
        ]
    },
    "信任挑战": {
        station: "Station 3: 运动协作站",
        subtitle: "相互信任，团队配合",
        icon: "🤝",
        color: "accent",
        image: "./images/trust-game.png",
        overview: "通过信任倒、盲人引路等活动建立团队成员间的深度信任，增强团队凝聚力。",
        background: "信任挑战是团队建设中最重要的环节之一，通过各种信任练习帮助团队成员建立深度信任关系。",
        objective: "通过多种信任练习增强团队成员之间的信任感，提升团队凝聚力和协作效率。",
        participants: "全体团队成员，根据活动类型分组进行",
        duration: "每项活动5-8分钟，总时长约25分钟",
        equipment: "眼罩、软垫、障碍物、计时器、安全绳索",
        venue: "需要多个区域，包括开阔平地和设置障碍的路径",
        rules: [
            "1. 信任倒：后倒者闭眼向后倒，接应者确保安全",
            "2. 盲人引路：一人蒙眼，另一人语言指导通过障碍",
            "3. 人体椅子：团队围成圆圈，同时坐在后面人的腿上",
            "4. 信任行走：蒙眼者在队友搀扶下行走",
            "5. 每个活动都要轮换角色，确保每人都体验",
            "6. 活动结束后分享感受和体会",
            "7. 成功完成所有项目可获得团队信任分"
        ],
        victory: "成功完成所有信任挑战的团队获胜，最佳配合组合获得特别奖励",
        safety: [
            "所有活动都要有安全员在场监督",
            "信任倒活动要使用软垫保护",
            "盲人引路要确保路径安全",
            "参与者要根据身体状况选择适合的活动",
            "如有不适立即停止并寻求帮助"
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    
    // 平滑滚动功能
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // 为导航链接添加平滑滚动
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });

    // 滚动时导航栏背景变化
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.classList.add('bg-white/95');
            nav.classList.remove('bg-white/90');
        } else {
            nav.classList.add('bg-white/90');
            nav.classList.remove('bg-white/95');
        }
    });

    // 滚动动画观察器
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // 站点卡片悬浮效果
    const stationCards = document.querySelectorAll('.station-card');
    stationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // 游戏卡片点击效果和详情展示
    const gameCards = document.querySelectorAll('.game-card');
    const detailsOverlay = document.getElementById('game-details-overlay');
    const closeDetailsBtn = document.getElementById('close-details');
    const backToMainBtn = document.getElementById('back-to-main');
    let currentScrollPosition = 0;

    gameCards.forEach(card => {
        card.addEventListener('click', function() {
            // 添加点击反馈
            this.style.transform = 'scale(0.98) translateY(-2px)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
                // 显示游戏详情
                showGameDetailsPage(this);
            }, 150);
        });
        
        // 游戏卡片悬浮效果
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });

    // 关闭详情页面事件
    closeDetailsBtn.addEventListener('click', hideGameDetailsPage);
    backToMainBtn.addEventListener('click', hideGameDetailsPage);

    // 显示游戏详情页面
    function showGameDetailsPage(gameCard) {
        // 保存当前滚动位置
        currentScrollPosition = window.pageYOffset;
        
        // 获取游戏信息
        const gameName = gameCard.querySelector('h5').textContent.replace(/^[^\s]+ /, ''); // 移除emoji
        const gameData = gameRulesData[gameName];
        
        if (!gameData) {
            console.error('未找到游戏数据:', gameName);
            return;
        }
        
        // 填充详情页面内容
        populateGameDetails(gameData);
        
        // 显示覆盖层
        document.body.style.overflow = 'hidden'; // 防止背景滚动
        detailsOverlay.classList.remove('translate-x-full');
        detailsOverlay.classList.add('translate-x-0');
        
        // 滚动到顶部
        setTimeout(() => {
            detailsOverlay.scrollTop = 0;
        }, 100);
    }

    // 隐藏游戏详情页面
    function hideGameDetailsPage() {
        detailsOverlay.classList.remove('translate-x-0');
        detailsOverlay.classList.add('translate-x-full');
        document.body.style.overflow = ''; // 恢复滚动
        
        // 恢复原来的滚动位置
        setTimeout(() => {
            window.scrollTo(0, currentScrollPosition);
        }, 500);
    }

    // 填充游戏详情内容
    function populateGameDetails(gameData) {
        // 更新头部信息
        document.getElementById('game-title').textContent = gameData.subtitle;
        document.getElementById('game-station').textContent = gameData.station;
        document.getElementById('game-icon').textContent = gameData.icon;
        document.getElementById('game-icon').className = `w-12 h-12 rounded-full bg-${gameData.color} flex items-center justify-center text-white text-xl`;
        
        // 更新概览卡片
        document.getElementById('game-detail-image').src = gameData.image;
        document.getElementById('game-detail-image').alt = gameData.subtitle;
        document.getElementById('game-detail-name').textContent = gameData.subtitle;
        document.getElementById('game-detail-subtitle').textContent = gameData.station;
        document.getElementById('game-detail-overview').textContent = gameData.overview;
        
        // 更新详细内容
        const contentContainer = document.getElementById('game-detail-content');
        contentContainer.innerHTML = `
            <!-- 游戏背景 -->
            <div class="bg-white rounded-2xl shadow-lg p-6">
                <h3 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    📖 游戏背景
                </h3>
                <p class="text-gray-700 leading-relaxed">${gameData.background}</p>
            </div>

            <!-- 游戏目标 -->
            <div class="bg-white rounded-2xl shadow-lg p-6">
                <h3 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    🎯 游戏目标
                </h3>
                <p class="text-gray-700 leading-relaxed">${gameData.objective}</p>
            </div>

            <!-- 基本信息 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white rounded-2xl shadow-lg p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        👥 参与人数
                    </h3>
                    <p class="text-gray-700">${gameData.participants}</p>
                </div>
                <div class="bg-white rounded-2xl shadow-lg p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        ⏱️ 时间安排
                    </h3>
                    <p class="text-gray-700">${gameData.duration}</p>
                </div>
                <div class="bg-white rounded-2xl shadow-lg p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        🛠️ 所需装备
                    </h3>
                    <p class="text-gray-700">${gameData.equipment}</p>
                </div>
                <div class="bg-white rounded-2xl shadow-lg p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        📍 场地要求
                    </h3>
                    <p class="text-gray-700">${gameData.venue}</p>
                </div>
            </div>

            <!-- 详细规则 -->
            <div class="bg-white rounded-2xl shadow-lg p-6">
                <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    📋 详细规则
                </h3>
                <div class="space-y-3">
                    ${gameData.rules.map(rule => `
                        <div class="flex items-start p-3 bg-gray-50 rounded-lg">
                            <span class="text-${gameData.color} mr-3 font-bold">▶</span>
                            <span class="text-gray-700 flex-1">${rule}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- 获胜条件 -->
            <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl shadow-lg p-6">
                <h3 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    🏆 获胜条件
                </h3>
                <p class="text-gray-700 leading-relaxed font-medium">${gameData.victory}</p>
            </div>

            <!-- 安全提醒 -->
            <div class="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl shadow-lg p-6">
                <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    ⚠️ 安全提醒
                </h3>
                <div class="grid grid-cols-1 gap-3">
                    ${gameData.safety.map(safety => `
                        <div class="flex items-start p-3 bg-white rounded-lg shadow-sm">
                            <span class="text-red-500 mr-3">⚠️</span>
                            <span class="text-gray-700 flex-1">${safety}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // 悬浮提示功能
    function createTooltip(element, text) {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'absolute bg-gray-800 text-white px-3 py-2 rounded-lg text-sm z-50 pointer-events-none';
            tooltip.style.bottom = '100%';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translateX(-50%) translateY(-10px)';
            tooltip.textContent = text;
            
            this.style.position = 'relative';
            this.appendChild(tooltip);
            
            // 动画显示
            setTimeout(() => {
                tooltip.style.opacity = '1';
            }, 10);
        });

        element.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.absolute.bg-gray-800');
            if (tooltip) {
                tooltip.remove();
            }
        });
    }

    // 为游戏图标添加悬浮提示
    const gameIcons = document.querySelectorAll('.station-card .rounded-full');
    const tooltipTexts = ['创意表达', '反应能力', '团队协作'];
    gameIcons.forEach((icon, index) => {
        if (tooltipTexts[index]) {
            createTooltip(icon, tooltipTexts[index]);
        }
    });

    // ESC键关闭详情页面
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !detailsOverlay.classList.contains('translate-x-full')) {
            hideGameDetailsPage();
        }
    });

    // 倒计时功能（如果需要）
    function updateCountdown() {
        // 这里可以添加活动倒计时功能
        // 假设活动时间是固定的，可以根据实际需求修改
        const eventDate = new Date('2025-07-26T14:00:00');
        const now = new Date();
        const timeLeft = eventDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            
            // 可以在页面上显示倒计时
            console.log(`活动倒计时: ${days}天 ${hours}小时 ${minutes}分钟`);
        }
    }

    // 每分钟更新倒计时
    setInterval(updateCountdown, 60000);
    updateCountdown(); // 立即执行一次

    // 响应式菜单功能（移动端）
    let mobileMenuOpen = false;
    
    // 检测移动设备
    function isMobile() {
        return window.innerWidth < 768;
    }

    // 优化移动端滚动性能
    let ticking = false;
    function optimizedScrollHandler() {
        if (!ticking) {
            requestAnimationFrame(function() {
                // 这里可以添加需要在滚动时执行的优化代码
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

    // 触摸设备优化
    if ('ontouchstart' in window) {
        // 为触摸设备添加特殊处理
        document.body.classList.add('touch-device');
        
        document.addEventListener('touchmove', function(e) {
            const overlay = document.querySelector('#game-details-overlay');

            // 如果 overlay 是开启状态，并且用户正在触摸 overlay 内部 => 允许滚动
            if (overlay && overlay.contains(e.target)) {
                return; // ✅ 不阻止滚动
            }

            // 否则（背景层）阻止滚动
            if (e.target.closest('.fixed')) {
                e.preventDefault();
            }
        }, { passive: false });
    }

    // 页面加载完成后的初始化动画
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // 预加载重要图片
    function preloadImages() {
        const imagesToPreload = [
            './images/greenwich-park-bg.jpg',
            './images/team-building.jpeg',
            './images/charades-game.png',
            './images/freeze-game.jpg',
            './images/blind-soccer.jpg'
        ];

        imagesToPreload.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    preloadImages();

    // 错误处理
    window.addEventListener('error', function(e) {
        console.error('页面出现错误:', e.error);
        // 可以在这里添加错误报告功能
    });

    console.log('Greenwich Park 团建活动页面加载完成！🎉');
});

// 统计功能 - 跟踪用户交互
let gameInteractions = {};

function trackGameInteraction(gameName) {
    if (!gameInteractions[gameName]) {
        gameInteractions[gameName] = 0;
    }
    gameInteractions[gameName]++;
    
    // 可以用于统计哪些游戏最受欢迎
    console.log('游戏交互统计:', gameInteractions);
}

// 辅助函数：防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 辅助函数：节流
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}