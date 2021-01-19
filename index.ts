//imports for web framework and etc
import { opine, serveStatic } from "https://deno.land/x/opine@1.0.2/mod.ts";
import { renderFileToString } from "https://deno.land/x/dejs@0.9.3/mod.ts";
import { join, dirname } from "https://deno.land/x/opine@1.0.2/deps.ts";
//instantiate opine
const app = opine();

const __dirname = dirname(import.meta.url);

app.engine('.html', renderFileToString);
app.use(serveStatic(join(__dirname, 'public')));
app.use(serveStatic( "public"));

app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index', { title: 'Kaleb Park' });
});

app.listen(3000);
console.log('running on port 3000');