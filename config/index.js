let url_config = ""

if(process.env.NODE_ENV === 'development'){
    // 开发环境
    url_config = 'https://test.com/api'
}else{
    // 生产环境
   url_config = 'https://test.com/api'
}

export default url_config