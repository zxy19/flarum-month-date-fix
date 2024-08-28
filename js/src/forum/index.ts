import app from 'flarum/forum/app';
import { override } from 'flarum/common/extend';
app.initializers.add('xypp/flarum-month-date-fix', () => {
  const dmmmReplacement = app.translator.trans('xypp-month-date-fix.forum.dmmm') + "";
  console.log(`Replace "D MMM" time format with "${dmmmReplacement}"`)
  override(dayjs.prototype, "format", function (this: any, originalFormat: Function, format: string, ...args) {
    if (format === "D MMM") {
      return originalFormat(dmmmReplacement, ...args);
    }
    return originalFormat(format, ...args);
  })
});
