const gulp = require("gulp4");
const browserSync = require("browser-sync").create();

gulp.task("serve", done => {
  browserSync.init({
    server: {
      baseDir: "./",
      routes: {
        "/presentations": "./"
      }
    }
  });
  done();
});

gulp.task("reload", done => {
  browserSync.reload();
  done();
});

gulp.task("watch", done => {
  gulp.watch(["index.html", "slides/**/*", "app/**/*"], gulp.series("reload"));
  done();
});

gulp.task("default", gulp.parallel("serve", "watch"));
