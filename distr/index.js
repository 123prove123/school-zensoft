define(["require", "exports", './builder/builder', './builder/builder-html', './builder/builder-events'], function (require, exports, builder_1, builder_html_1, builder_events_1) {
    "use strict";
    builder_1.default.run();
    builder_html_1.default.run();
    builder_events_1.default.run();
});
