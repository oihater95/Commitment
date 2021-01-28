import Vue from 'vue'
import Router from 'vue-router'
// 연결할 컴포넌트 import
import Index from '../views/Index.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Mypage from '../views/Mypage.vue'
import Ranking from '../views/Ranking.vue'
// 필수
Vue.use(Router)
export default new Router({
    mode: 'history', // history 모드는 자연스러운 url 가능, 지정하지 않으면 해시(#)기호로 url 사용
    routes: [
        {
            path: "/", // 경로
            name: "Index", // 해당 경로의 이름 
            component: Index, // 이동할 컴포넌트
            children: [
                {
                    path: '',
                    name: 'Main',
                    component:()=>import('../views/main/Main.vue'),
                },
                {
                    path: 'sns',
                    name: 'SNS',
                    component:()=>import('../views/main/SNS.vue'),
                },
<<<<<<< HEAD

=======
                {
                    path: 'rank',
                    name: 'Rank',
                    component:()=>import('../views/main/Rank.vue'),
                },
                {
                    path: 'likes',
                    name: 'Likes',
                    component:()=>import('../views/main/Likes.vue'),
                },
                {
                    path: 'mypage',
                    name: 'MyPage',
                    component:()=>import('../views/main/MyPage.vue'),
                },
>>>>>>> 63430c29b613c730bf0eeb69e6af4aa0a69aaed1
            ],
        },
        {
            path: "/signup",
            name: "Signup",
            component: Signup,
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
        },
        {
            path: "/mypage",
            name: "Mypage",
            component:Mypage,
        },
        {
            path: "/ranking",
            name: "Ranking",
            component:Ranking,
        }
    ]
})