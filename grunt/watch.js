module.exports = {
    css: {
        files: ['css/portfolio.scss', 'css/fonts.scss', 'css/colors.scss'],
        tasks: ['sass', 'cssmin']
    },
    js: {
        files: ['js/test.js'],
        tasks: ['uglify']
    }
};