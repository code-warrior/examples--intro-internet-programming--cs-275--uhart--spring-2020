const { watch } = require(`gulp`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;

let serve = () => {
    browserSync({
        server: {
            baseDir: `./`
        }
    });

    watch([
        `./*.html`,
        `./js/**/*.js`
    ]).on(`change`, reload);
};

exports.default = serve;
