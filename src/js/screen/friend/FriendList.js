import React from 'react';
import {SectionList, Text, View, StyleSheet, Image, PixelRatio, TouchableHighlight, Dimensions} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const data = [
    {
        title: 'A',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '阿里巴巴',
                pinyin: 'ALIBABA',
                index: 'A'
            },
        ],
    },
    {
        title: 'B',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '百度',
                pinyin: 'BAIDU',
                index: 'B'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '暴风集团',
                pinyin: 'BAOFENGJITUAN',
                index: 'B'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '边锋网络',
                pinyin: 'BIANFENGWANGLUO',
                index: 'B'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '波克城市',
                pinyin: 'BOKECHENGSHI',
                index: 'B'
            },
        ],
    },
    {
        title: 'D',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '东方财富',
                pinyin: 'DONGFANGCAIFU',
                index: 'D'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '东方明珠新媒体',
                pinyin: 'DONGFANGMINGZHUXINMEITI',
                index: 'D'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '东方网',
                pinyin: 'DONGFANGWANG',
                index: 'D'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '东软集团',
                pinyin: 'DONGRUANJITUAN',
                index: 'D'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '斗鱼直播',
                pinyin: 'DOUYUZHIBO',
                index: 'D'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '多益网络',
                pinyin: 'DUOYIWANGLUO',
                index: 'D'
            },
        ],
    },
    {
        title: 'E',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '饿了么',
                pinyin: 'ELEME',
                index: 'E'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '二三四五',
                pinyin: 'ERSANSIWU',
                index: 'E'
            },
        ],
    },
    {
        title: 'F',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '房天下',
                pinyin: 'FANGTIANXIA',
                index: 'F'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '凤凰网',
                pinyin: 'FENGHUANGWANG',
                index: 'F'
            },
        ],
    },
    {
        title: 'G',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '钢银电商',
                pinyin: 'GANGYINDIANSHANG',
                index: 'G'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '光环新网',
                pinyin: 'GUANGHUANXINWANG',
                index: 'G'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '咕咪公司',
                pinyin: 'GUMIGONGSI',
                index: 'G'
            },
        ],
    },
    {
        title: 'J',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '吉比特',
                pinyin: 'JIBITE',
                index: 'J'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '京东',
                pinyin: 'JINGDONG',
                index: 'J'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '竞技世界',
                pinyin: 'JINGJISHIJIE',
                index: 'J'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '今日头条',
                pinyin: 'JINRITOUTIAO',
                index: 'J'
            },
        ],
    },
    {
        title: 'K',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '开创集团',
                pinyin: 'KAICHUANGJITUAN',
                index: 'K'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '科大讯飞',
                pinyin: 'KEDAXUNFEI',
                index: 'K'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '快乐阳光',
                pinyin: 'KUAILEYANGGUANG',
                index: 'K'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '昆仑万维',
                pinyin: 'KUNLUNWANWEI',
                index: 'K'
            },
        ],
    },
    {
        title: 'L',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '朗玛信息',
                pinyin: 'LANGMAXINXI',
                index: 'L'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '乐居',
                pinyin: 'LEJU',
                index: 'L'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '联动优势',
                pinyin: 'LIANDONGYOUSHI',
                index: 'L'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '连尚网络',
                pinyin: 'LIANSHANGWANGLUO',
                index: 'L'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '利嘉电商',
                pinyin: 'LIJIADIANSHANG',
                index: 'L'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '六间房',
                pinyin: 'LIUJIANFANG',
                index: 'L'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '龙采',
                pinyin: 'LONGCAI',
                index: 'L'
            },
        ],
    }, {
        title: 'M',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '美图',
                pinyin: 'MEITU',
                index: 'M'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '美团点评',
                pinyin: 'MEITUANDIANPING',
                index: 'M'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '梦网科技',
                pinyin: 'MENGWANGKEJI',
                index: 'M'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '米哈游',
                pinyin: 'MIHAYOU',
                index: 'M'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '蘑菇街',
                pinyin: 'MOGUJIE',
                index: 'M'
            },
        ],
    }, {
        title: 'P',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '鹏博士',
                pinyin: 'PENGBOSHI',
                index: 'P'
            },
        ],
    }, {
        title: 'Q',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '汽车之家',
                pinyin: 'QICHEZHIJIA',
                index: 'Q'
            },
        ],
    }, {
        title: 'R',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '人民网',
                pinyin: 'RENMINWANG',
                index: 'R'
            },
        ],
    }, {
        title: 'S',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '三七互娱',
                pinyin: 'SANQIHUYU',
                index: 'S'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '世纪互联',
                pinyin: 'SHIJIHULIAN',
                index: 'S'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '顺网科技',
                pinyin: 'SHUNWANGKEJI',
                index: 'S'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '思贝克',
                pinyin: 'SIBEIKE',
                index: 'S'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '搜狐',
                pinyin: 'SOUHU',
                'baseI ndexTag': 'S'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '苏宁控股',
                pinyin: 'SUNINGKONGGU',
                index: 'S'
            },
        ],
    }, {
        title: 'T',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '泰一指尚',
                pinyin: 'TAIYIZHISHANG',
                index: 'T'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '腾讯',
                pinyin: 'TENGXUN',
                index: 'T'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '同程集团',
                pinyin: 'TONGCHENGJITUAN',
                index: 'T'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '途牛旅游网',
                pinyin: 'TUNIULVYOUWANG',
                index: 'T'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '拓维信息',
                pinyin: 'TUOWEIXINXI',
                index: 'T'
            },
        ],
    }, {
        title: 'W',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '网龙',
                pinyin: 'WANGLONG',
                index: 'W'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '网宿科技',
                pinyin: 'WANGSUKEJI',
                index: 'W'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '网易',
                pinyin: 'WANGYI',
                index: 'W'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '微贷网',
                pinyin: 'WEIDAIWANG',
                index: 'W'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '蜗牛数字',
                pinyin: 'WONIUSHUZI',
                index: 'W'
            },
        ],
    }, {
        title: 'X',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '小米',
                pinyin: 'XIAOMI',
                index: 'X'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '携程旅行网',
                pinyin: 'XIECHENGLVXINGWANG',
                index: 'X'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '新华网',
                pinyin: 'XINHUAWANG',
                index: 'X'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '新浪',
                pinyin: 'XINLANG',
                index: 'X'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '迅雷网络',
                pinyin: 'XUNLEIWANGLUO',
                index: 'X'
            },
        ],
    }, {
        title: 'Y',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '央视网',
                pinyin: 'YANGSHIWANG',
                index: 'Y'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '易建科技',
                pinyin: 'YIJIANKEJI',
                index: 'Y'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '宜人贷',
                pinyin: 'YIRENDAI',
                index: 'Y'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '用友',
                pinyin: 'YONGYOU',
                index: 'Y'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '有米科技',
                pinyin: 'YOUMIKEJI',
                index: 'Y'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '游族网络',
                pinyin: 'YOUZUWANGLUO',
                index: 'Y'
            },
        ],
    }, {
        title: 'Z',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '找钢网',
                pinyin: 'ZHAOGANGWANG',
                index: 'Z'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '中钢网',
                pinyin: 'ZHONGGANGWANG',
                index: 'Z'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '猪八戒网',
                pinyin: 'ZHUBAJIEWANG',
                index: 'Z'
            },
        ],
    }, {
        title: '#',
        data: [
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '4399',
                pinyin: '4399',
                index: '#'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '263',
                pinyin: '263',
                index: '#'
            },
            {
                icon: {uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3375214077,2002261275&fm=173&app=12&f=JPEG?w=218&h=146&s=4E944984422D3B111C8E1C8503005089'},
                nick: '360',
                pinyin: '360',
                index: '#'
            }
        ],
    },
];

class FriendList extends React.Component {
    _onPressItem = (data, select) => {
        if (this.props.onPressItem !== undefined) {
            this.props.onPressItem(data,select);
        }
    };

    render() {
        return (
            <View>
                <SectionList
                    ListHeaderComponent={this.props.ListHeaderComponent}
                    ItemSeparatorComponent={() => (
                        <View style={{backgroundColor: 'white'}}><View style={styles.line}/></View>)}
                    renderSectionHeader={({section}) => <SectionItem section={section}/>}
                    renderItem={({item}) => <FriendItem data={item}
                                                        onPressItem={this._onPressItem}
                                                        showSelectIcon={this.props.showSelectIcon ? this.props.showSelectIcon : false}/>}
                    sections={data}
                />
            </View>
        );
    }
}

export default FriendList

class SectionItem extends React.Component {
    render() {
        return (
            <View style={styles.sectionWrapper}>
                <Text style={styles.sectionText}>{this.props.section.title}</Text>
            </View>
        )
    }
}

class FriendItem extends React.Component {
    _onPress = () => {
        if (this.props.onPressItem !== undefined) {
            this.props.onPressItem(this.props.data, !this.state.selected);
        }
        this.setState({
            selected: !this.state.selected,
        })
    };

    constructor(props) {
        super(props)
        this.state = {
            selected: false,
        }
    }

    render() {
        const selectIcon = this.props.showSelectIcon ?
            <Icon name={this.state.selected ? 'checkbox-marked' : 'checkbox-blank-outline'} size={22}
                  color={this.state.selected ? '#1aac19' : 'gray'}/>
            : null;
        return (
            <TouchableHighlight onPress={this._onPress} underlayColor={'#ddd'} activeOpacity={1}
                                style={{backgroundColor: 'white'}}>
                <View style={styles.friendWrapper}>
                    <Image style={styles.friendIcon} source={this.props.data.icon}/>
                    <Text style={styles.friendNick}>{this.props.data.nick}</Text>
                    {selectIcon}
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    line: {
        height: 1 / PixelRatio.get(),
        backgroundColor: '#e0e0e0',
        marginHorizontal: 12,
    },
    sectionWrapper: {
        flex: 1,
        backgroundColor: '#ebebeb',
        paddingVertical: 4,
        paddingHorizontal: 12,
    },
    sectionText: {
        flex: 1,
        height: 16,
        textAlignVertical: 'center',
        fontSize: 12,
        color: '#888888'
    },
    friendWrapper: {
        flex: 1,
        height: 48,
        flexDirection: 'row',
        paddingHorizontal: 13,
        alignItems: 'center'
    },
    friendIcon: {
        width: 36,
        height: 36,
        marginRight: 8,
    },
    friendNick: {
        width: Dimensions.get('window').width - 110,
        padding: 4,
        fontSize: 14,
        color: '#353535'
    },
});