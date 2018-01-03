inlets=1;
outlets=1;

this.box.message("border", 0);
this.box.message("ignoreclick", 1);

mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;
var name = jsarguments[1];
var bgcolor = this.patcher.getattr("bgcolor");
var isfirsttime = true;

function paint()
{
	if(name){
    	with(mgraphics) 
    	{
			set_source_rgba(bgcolor);
			paint();
    		move_to(4, 40);
    		select_font_face("Arial");
    		set_source_rgba(0.2, 0.2, 0.2, 1.0);
       		set_font_size(48);
        	show_text(name);
			fill();
			
			// auto fit the size the first time it redraws
			if (isfirsttime) {
				var width = text_measure(name)[0];
				var height = text_measure(name)[1];
				this.box.message("patching_rect", 10., 10., width + 5. /* extra, just to be nice */, height);
				isfirsttime = false;
			}
		}
	}
}