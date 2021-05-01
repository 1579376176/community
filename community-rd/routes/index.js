const router = require('koa-router')()
var jwt = require('jsonwebtoken')
const { verifyToken } = require('../auth/index')

router.prefix('/blog')
let a = [
    { blog_id: 1, title: '小两口烤肉拌饭还在吗……', content: '谁有他家的联系方式啊还， 真的巨想吃……', time: '2021年3月20日16:34:40', nickname: '崔瀚文1', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
    { blog_id: 2, title: '有偿求一张哈理工的饭卡', content: '有没有同学有不用的饭卡呀？麻烦联系我', time: '2021年3月21日16:34:41', nickname: '崔瀚文2', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
    { blog_id: 3, title: '兄弟们 校园网在哪办', content: '有人说锅炉房那里。可是我去了发现关门了.', time: '2021年3月21日16:34:42', nickname: '崔瀚文3', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
    { blog_id: 4, title: '英雄联盟开黑++++++', content: '比尔吉沃特，匹配有没有一块的', time: '2021年3月21日16:34:43', nickname: '崔瀚文4', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
];
let study = [
    { blog_id: 1, title: '来个创业竞赛队友', content: '如题，找个队友', time: '2021年1月20日16:34:40', nickname: '崔瀚文1', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
    { blog_id: 2, title: '求数学建模比赛战友', content: '想一块加油的联系我', time: '2021年1月21日16:34:41', nickname: '崔瀚文2', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
    { blog_id: 3, title: '一块学六级的', content: '备战六级英语拉', time: '2021年2月21日16:34:42', nickname: '崔瀚文3', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
    { blog_id: 4, title: '有没有一块复习期末的', content: '大二，软件工程，复习复习复习', time: '2021年2月21日16:34:43', nickname: '崔瀚文4', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
    { blog_id: 5, title: '蓝桥杯Java备战一起', content: '有的加我+++++冲', time: '2021年3月1日16:34:43', nickname: '崔瀚文4', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
];
let life = [
    { blog_id: 1, title: '小两口烤肉拌饭还在吗……', content: '谁有他家的联系方式啊还， 真的巨想吃……', time: '2021年3月20日16:34:40', nickname: '崔瀚文1', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
    { blog_id: 2, title: '有偿求一张哈理工的饭卡', content: '有没有同学有不用的饭卡呀？麻烦联系我', time: '2021年3月21日16:34:41', nickname: '崔瀚文2', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
    { blog_id: 3, title: '兄弟们 校园网在哪办', content: '有人说锅炉房那里。可是我去了发现关门了.', time: '2021年3月21日16:34:42', nickname: '崔瀚文3', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
    { blog_id: 4, title: '谁知道跟前有没有好吃的米线', content: '学校跟前米线好少', time: '2021年3月21日16:34:43', nickname: '崔瀚文4', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
    { blog_id: 5, title: '推荐一家黄焖鸡', content: '东门对面那条街有个黑色牌子的黄焖鸡', time: '2021年3月21日16:34:43', nickname: '崔瀚文4', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
    { blog_id: 6, title: '有没有代取快递的，有偿', content: '取个件，价格可议', time: '2021年3月21日16:34:43', nickname: '崔瀚文4', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
    { blog_id: 7, title: '出二手书', content: '出大一大二学校用书', time: '2021年3月21日16:34:43', nickname: '崔瀚文4', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },

];
let game = [
    { blog_id: 1, title: 'LOL比尔吉沃特匹配来个', content: '速+++++++', time: '2021年3月20日16:34:40', nickname: '崔瀚文1', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
    { blog_id: 2, title: '有没有玩原神的，一块啊', content: '有没有同学玩原神的啊啊啊', time: '2021年3月21日16:34:41', nickname: '崔瀚文2', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
    { blog_id: 3, title: '跨一毒奶粉打团来人', content: '来团来团来团，加我.', time: '2021年3月21日16:34:42', nickname: '崔瀚文3', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
    { blog_id: 4, title: '艾欧尼亚灵活3=2', content: '冲冲冲', time: '2021年3月21日16:34:43', nickname: '崔瀚文4', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
    { blog_id: 5, title: '王者荣耀星耀排位来个辅助', content: '有的加我', time: '2021年3月21日16:34:43', nickname: '崔瀚文4', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
    { blog_id: 6, title: '英雄联盟开黑++++++', content: '比尔吉沃特，匹配有没有一块的', time: '2021年3月21日16:34:43', nickname: '崔瀚文4', comment: [{ nickname: '毕员博', time: '2021年4月13日10:48:23', content: '我有我有我有' }, { nickname: '陈继远', time: '2021年4月12日9:30:21', content: '同求，我也想要' }, { nickname: '崔思博', time: '2021年4月12日8:30:21', content: '不知道' }, { nickname: '邓宇轩', time: '2021年4月10日15:45:11', content: '确实好吃' }] },
];
let q = 9;
//内容列表
router.get('/list',
        verifyToken,
        async(ctx, next) => {

            ctx.body = {
                a
            }
        })
    //获取生活区内容
router.get('/lifelist',
        async(ctx, next) => {

            ctx.body = {
                life
            }
        })
    //获取学习区内容
router.get('/studylist',
        async(ctx, next) => {

            ctx.body = {
                study
            }
        })
    //获取娱乐区内容
router.get('/gamelist',
        async(ctx, next) => {

            ctx.body = {
                game
            }
        })
    //展示内容
router.post('/content',
        async(ctx, next) => {
            let { blogId } = ctx.request.body;
            console.log(blogId);
            for (let i = 0; i < a.length; i++) {
                if (a[i].blog_id == blogId) {
                    let bb = a[i]
                    ctx.body = {
                        bb
                    }
                }
            }
        }
    )
    //提交评论
router.post(
        "/comment", async(ctx, next) => {
            let { content, blogId, postTime } = ctx.request.body;
            console.log(content, blogId, postTime);
            for (let i = 0; i < a.length; i++) {
                console.log(a[i].blog_id);
                if (a[i].blog_id == blogId) {
                    a[i].comment.push({ nickname: '匿名用户', time: postTime, content: content })
                    break;
                }
                console.log(a[i]);
            }

            for (let i = 0; i < a.length; i++) {
                if (a[i].blog_id == blogId) {
                    let bb = a[i]
                    ctx.body = {
                        bb
                    }
                }
            }
            // let results = await blogModel.saveCom(content, blogId, postTime, userId);
            // console.log(content, postTime, blogId, userId);
            // console.log(results.insertId); 

        }
    )
    //写内容
router.post(
    '/post', async(ctx, next) => {
        let { title, content, time } = ctx.request.body;
        console.log(title);

        console.log(a.length);
        let q = a.length;
        // for (let i = 0; i < a.length; i++) {
        //     q = a[length - 1].blog_id
        // }
        a.push({ blog_id: q, title: title, content: content, time: time, nickname: '游客', comment: [] })
        console.log('111111111111111');
        ctx.body = {
            q
        }

    }
)
module.exports = router