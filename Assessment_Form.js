$("#battery_tray").change(function() {
			if ($(this).val() == "yes") {
				$('#dyn_battery_tray').show();
				$('#tray_length').attr('required','');
				$('#tray_length').attr('data-error', 'This field is required.');
                $('#tray_width').attr('required','');
				$('#tray_width').attr('data-error', 'This field is required.');
			} else {
				$('#dyn_battery_tray').hide();
				$('#tray_length').removeAttr('required');
				$('#tray_length').removeAttr('data-error');	
                $('#tray_width').removeAttr('required');
				$('#tray_width').removeAttr('data-error');		
			}
		});
		$("#battery_tray").trigger("change");

$("#inverter").change(function() {
			if ($(this).val() == "yes") {
				$('#dyn_inverter').show();
				$('#inverter_brand').attr('required','');
				$('#inverter_brand').attr('data-error', 'This field is required.');
                $('#inverter_part_num').attr('required','');
				$('#inverter_part_num').attr('data-error', 'This field is required.');
                $('#inverter_model_num').attr('required','');
				$('#inverter_model_num').attr('data-error', 'This field is required.');
                $('#inverter_ctrl_part_num').attr('required','');
				$('#inverter_ctrl_part_num').attr('data-error', 'This field is required.');
                $('#inverter_ctrl_vers').attr('required','');
				$('#inverter_ctrl_vers').attr('data-error', 'This field is required.');
                $('#inverter_ctrl_revis').attr('required','');
				$('#inverter_ctrl_revis').attr('data-error', 'This field is required.');
			} else {
				$('#dyn_inverter').hide();
				$('#inverter_brand').removeAttr('required');
				$('#inverter_brand').removeAttr('data-error');	
                $('#inverter_part_num').removeAttr('required');
				$('#inverter_part_num').removeAttr('data-error');
                $('#inverter_model_num').removeAttr('required');
				$('#inverter_model_num').removeAttr('data-error');
                $('#inverter_ctrl_part_num').removeAttr('required');
				$('#inverter_ctrl_part_num').removeAttr('data-error');
                $('#inverter_ctrl_vers').removeAttr('required');
				$('#inverter_ctrl_vers').removeAttr('data-error');
                $('#inverter_ctrl_revis').removeAttr('required');
				$('#inverter_ctrl_revis').removeAttr('data-error');
			}
		});
		$("#inverter").trigger("change");

$("#bmk").change(function() {
			if ($(this).val() == "yes") {
				$('#dyn_bmk').show();
				$('#bmk_model_num').attr('required','');
				$('#bmk_model_num').attr('data-error', 'This field is required.');
			} else {
				$('#dyn_bmk').hide();
				$('#bmk_model_num').removeAttr('required');
				$('#bmk_model_num').removeAttr('data-error');	
			}
		});
		$("#bmk").trigger("change");

$("#generator").change(function() {
			if ($(this).val() == "yes") {
				$('#dyn_generator').show();
				$('#generator_make').attr('required','');
				$('#generator_make').attr('data-error', 'This field is required.');
                $('#generator_model').attr('required','');
				$('#generator_model').attr('data-error', 'This field is required.');
                $('#autogenstart').attr('required','');
				$('#autogenstart').attr('data-error', 'This field is required.');
			} else {
				$('#dyn_generator').hide();
				$('#generator_make').removeAttr('required');
				$('#generator_make').removeAttr('data-error');
                $('#generator_model').removeAttr('required');
				$('#generator_model').removeAttr('data-error');
                $('#autogenstart').removeAttr('required');
				$('#autogenstart').removeAttr('data-error');
			}
		});
		$("#generator").trigger("change");

$("#autogenstart").change(function() {
			if ($(this).val() == "yes") {
				$('#dyn_autogenstart').show();
				$('#autogenstart_vers').attr('required','');
				$('#autogenstart_vers').attr('data-error', 'This field is required.');
			} else {
				$('#dyn_bmk').hide();
				$('#autogenstart_vers').removeAttr('required');
				$('#autogenstart_vers').removeAttr('data-error');	
			}
		});
		$("#autogenstart").trigger("change");

$("#solar_panel").change(function() {
			if ($(this).val() == "yes") {
				$('#dyn_solar_panel').show();
				$('#solar_panel_num').attr('required','');
				$('#solar_panel_num').attr('data-error', 'This field is required.');
                $('#solar_panel_watt').attr('required','');
				$('#solar_panel_watt').attr('data-error', 'This field is required.');
                $('#solar_ctrl_make').attr('required','');
				$('#solar_ctrl_make').attr('data-error', 'This field is required.');
                $('#solar_ctrl_model').attr('required','');
				$('#solar_ctrl_model').attr('data-error', 'This field is required.');
                $('#solar_goal_cr').attr('required','');
				$('#solar_goal_cr').attr('data-error', 'This field is required.');
			} else {
				$('#dyn_solar_panel').hide();
				$('#solar_panel_num').removeAttr('required');
				$('#solar_panel_num').removeAttr('data-error');	
                $('#solar_panel_watt').removeAttr('required');
				$('#solar_panel_watt').removeAttr('data-error');
                $('#solar_panel_connect').removeAttr('required');
				$('#solar_panel_connect').removeAttr('data-error');
                $('#solar_ctrl_make').removeAttr('required');
				$('#solar_ctrl_make').removeAttr('data-error');
                $('#solar_ctrl_model').removeAttr('required');
				$('#solar_ctrl_model').removeAttr('data-error');
                $('#solar_goal_cr').removeAttr('required');
				$('#solar_goal_cr').removeAttr('data-error');
                }
		});
		$("#solar_panel").trigger("change");

$("#cent_elec_swtch_ctrl").change(function() {
			if ($(this).val() == "yes") {
				$('#dyn_cent_elec_swtch_ctrl').show();
				$('#cent_elec_swtch_ctrl_brand').attr('required','');
				$('#cent_elec_swtch_ctrl_brand').attr('data-error', 'This field is required.');
                $('#cent_elec_swtch_ctrl_vers').attr('required','');
				$('#cent_elec_swtch_ctrl_vers').attr('data-error', 'This field is required.');
			} else {
				$('#dyn_cent_elec_swtch_ctrl').hide();
				$('#cent_elec_swtch_ctrl_brand').removeAttr('required');
				$('#cent_elec_swtch_ctrl_brand').removeAttr('data-error');	
                $('#cent_elec_swtch_ctrl_vers').removeAttr('required');
				$('#cent_elec_swtch_ctrl_vers').removeAttr('data-error');		
			}
		});
		$("#cent_elec_swtch_ctrl").trigger("change");