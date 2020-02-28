    var Devices = {"fan": {"commands": {"set_power": {"description": "Set power on/off", "parameters": [{"type": "string", "range": [true, false]}]}, "set_child_lock": {"description": "Set child lock on/off", "parameters": [{"type": "string", "range": [true, false]}]}, "set_buzzer": {"description": "Set buzzer on/off", "parameters": [{"type": "string", "range": [true, false]}]}, "set_led_b": {"description": "Set led brightness", "parameters": [{"type": "number", "range": [{"min": 0}, {"max": 2}]}]}, "set_angle": {"description": "Set the oscillation angle", "parameters": [{"type": "number", "range": [{"min": 0}, {"max": 120}]}]}, "set_natural_level": {"description": "Set natural level", "parameters": [{"type": "number", "range": [{"min": 0}, {"max": 100}]}]}, "set_speed_level": {"description": "Set speed level", "parameters": [{"type": "number", "range": [{"min": 0}, {"max": 100}]}]}, "set_angle_enable": {"description": "Set oscillate on/off", "parameters": [{"type": "string", "range": [true, false]}]}, "set_poweroff_time": {"description": "Set delay off seconds", "parameters": [{"type": "number", "range": [{"min": 1}]}]}}, "properties": {"power": {"description": "Current device power state", "results": [{"type": "string", "range": [true, false]}]}, "child_lock": {"description": "Current child lock state", "results": [{"type": "string", "range": [true, false]}]}, "buzzer": {"description": "Current buzzer state", "results": [{"type": "string", "range": [true, false]}]}, "led_b": {"description": "LED brightness", "results": [{"type": "number", "range": [{"min": 0}, {"max": 2}]}]}, "angle": {"description": "Current angle", "results": [{"type": "number", "range": [{"min": 0}, {"max": 120}]}]}, "natural_level": {"description": "Current natural level", "results": [{"type": "number", "range": [{"min": 0}, {"max": 100}]}]}, "speed_level": {"description": "Current speed level", "results": [{"type": "number", "range": [{"min": 0}, {"max": 100}]}]}, "angle_enable": {"description": "Current oscillation state", "results": [{"type": "string", "range": [true, false]}]}, "poweroff_time": {"description": "Countdown until turning off in seconds", "results": [{"type": "number", "range": [{"min": 1}]}]}, "speed": {"description": "Current fan speed", "results": [{"type": "number"}]}, "ac_power": {"description": "Powered by AC", "results": [{"type": "string", "range": [true, false]}]}, "use_time": {"description": "How long the device has been active in seconds", "results": [{"type": "number"}]}}, "vendors": {"zhimi": {"commands": {}, "properties": {}, "devices": {"v3": {"commands": {"set_power": {"description": "Set power on/off", "parameters": [{"type": "string", "range": [true, false]}]}, "set_child_lock": {"description": "Set child lock on/off", "parameters": [{"type": "string", "range": [true, false]}]}, "set_buzzer": {"description": "Set buzzer on/off", "parameters": [{"type": "string", "range": [true, false]}]}, "set_led_b": {"description": "Set led brightness", "parameters": [{"type": "number", "range": [{"min": 0}, {"max": 2}]}]}, "set_angle": {"description": "Set the oscillation angle", "parameters": [{"type": "number", "range": [{"min": 0}, {"max": 120}]}]}, "set_natural_level": {"description": "Set natural level", "parameters": [{"type": "number", "range": [{"min": 0}, {"max": 100}]}]}, "set_speed_level": {"description": "Set speed level", "parameters": [{"type": "number", "range": [{"min": 0}, {"max": 100}]}]}, "set_angle_enable": {"description": "Set oscillate on/off", "parameters": [{"type": "string", "range": [true, false]}]}, "set_poweroff_time": {"description": "Set delay off seconds", "parameters": [{"type": "number", "range": [{"min": 1}]}]}}, "properties": {"power": {"description": "Current device power state", "results": [{"type": "string", "range": [true, false]}]}, "child_lock": {"description": "Current child lock state", "results": [{"type": "string", "range": [true, false]}]}, "buzzer": {"description": "Current buzzer state", "results": [{"type": "string", "range": [true, false]}]}, "led_b": {"description": "LED brightness", "results": [{"type": "number", "range": [{"min": 0}, {"max": 2}]}]}, "angle": {"description": "Current angle", "results": [{"type": "number", "range": [{"min": 0}, {"max": 120}]}]}, "natural_level": {"description": "Current natural level", "results": [{"type": "number", "range": [{"min": 0}, {"max": 100}]}]}, "speed_level": {"description": "Current speed level", "results": [{"type": "number", "range": [{"min": 0}, {"max": 100}]}]}, "angle_enable": {"description": "Current oscillation state", "results": [{"type": "string", "range": [true, false]}]}, "poweroff_time": {"description": "Countdown until turning off in seconds", "results": [{"type": "number", "range": [{"min": 1}]}]}, "speed": {"description": "Current fan speed", "results": [{"type": "number"}]}, "ac_power": {"description": "Powered by AC", "results": [{"type": "string", "range": [true, false]}]}, "use_time": {"description": "How long the device has been active in seconds", "results": [{"type": "number"}]}, "humidity": {"description": "Current humidity", "results": [{"type": "number"}]}, "temp_dec": {"description": "Current temperature. Need divided by 10", "results": [{"type": "number"}]}, "battery": {"description": "Current battery level", "results": [{"type": "number", "range": [{"min": 0}, {"max": 100}]}]}, "bat_charge": {"description": "State of the battery charger", "results": [{"type": "string", "range": [true, false]}]}, "button_pressed": {"description": "Last pressed button", "results": [{"type": "string"}]}}}, "v2": {"commands": {"set_power": {"description": "Set power on/off", "parameters": [{"type": "string", "range": [true, false]}]}, "set_child_lock": {"description": "Set child lock on/off", "parameters": [{"type": "string", "range": [true, false]}]}, "set_buzzer": {"description": "Set buzzer on/off", "parameters": [{"type": "string", "range": [true, false]}]}, "set_led_b": {"description": "Set led brightness", "parameters": [{"type": "number", "range": [{"min": 0}, {"max": 2}]}]}, "set_angle": {"description": "Set the oscillation angle", "parameters": [{"type": "number", "range": [{"min": 0}, {"max": 120}]}]}, "set_natural_level": {"description": "Set natural level", "parameters": [{"type": "number", "range": [{"min": 0}, {"max": 100}]}]}, "set_speed_level": {"description": "Set speed level", "parameters": [{"type": "number", "range": [{"min": 0}, {"max": 100}]}]}, "set_angle_enable": {"description": "Set oscillate on/off", "parameters": [{"type": "string", "range": [true, false]}]}, "set_poweroff_time": {"description": "Set delay off seconds", "parameters": [{"type": "number", "range": [{"min": 1}]}]}, "set_led": {"description": "Turn led on/off", "parameters": [{"type": "string", "range": [true, false]}]}}, "properties": {"power": {"description": "Current device power state", "results": [{"type": "string", "range": [true, false]}]}, "child_lock": {"description": "Current child lock state", "results": [{"type": "string", "range": [true, false]}]}, "buzzer": {"description": "Current buzzer state", "results": [{"type": "string", "range": [true, false]}]}, "led_b": {"description": "LED brightness", "results": [{"type": "number", "range": [{"min": 0}, {"max": 2}]}]}, "angle": {"description": "Current angle", "results": [{"type": "number", "range": [{"min": 0}, {"max": 120}]}]}, "natural_level": {"description": "Current natural level", "results": [{"type": "number", "range": [{"min": 0}, {"max": 100}]}]}, "speed_level": {"description": "Current speed level", "results": [{"type": "number", "range": [{"min": 0}, {"max": 100}]}]}, "angle_enable": {"description": "Current oscillation state", "results": [{"type": "string", "range": [true, false]}]}, "poweroff_time": {"description": "Countdown until turning off in seconds", "results": [{"type": "number", "range": [{"min": 1}]}]}, "speed": {"description": "Current fan speed", "results": [{"type": "number"}]}, "ac_power": {"description": "Powered by AC", "results": [{"type": "string", "range": [true, false]}]}, "use_time": {"description": "How long the device has been active in seconds", "results": [{"type": "number"}]}, "led": {"description": "Current LED state", "results": [{"type": "string", "range": [true, false]}]}, "humidity": {"description": "Current humidity", "results": [{"type": "number"}]}, "temp_dec": {"description": "Current temperature. Need divided by 10", "results": [{"type": "number"}]}, "battery": {"description": "Current battery level", "results": [{"type": "number", "range": [{"min": 0}, {"max": 100}]}]}, "bat_charge": {"description": "State of the battery charger", "results": [{"type": "string", "range": [true, false]}]}, "button_pressed": {"description": "Last pressed button", "results": [{"type": "string"}]}, "bat_state": {"description": "State of the battery", "results": [{"type": "string"}]}}}}}}}, "waterheater": {"commands": {}, "properties": {}, "vendors": {"viomi": {"commands": {}, "properties": {}, "devices": {"e1": {"commands": {"set_power": {"description": "Turn water heater on/off", "parameters": [{"type": "number", "range": [0, 1]}]}, "set_mode": {"description": "Turn quick bath mode on/off", "parameters": [{"type": "number", "range": [0, 1]}]}, "set_temp": {"description": "Set heater target temperature", "parameters": [{"type": "number", "range": [{"min": 30}, {"max": 80}]}]}}, "properties": {"washStatus": {"description": "DON\u2019T KNOW", "results": [{"type": "number"}]}, "velocity": {"description": "DON\u2019T KNOW", "results": [{"type": "number"}]}, "waterTemp": {"description": "Current water temperature", "results": [{"type": "number"}]}, "targetTemp": {"description": "Heater target temperature", "results": [{"type": "number"}]}, "errStatus": {"description": "Error code", "results": [{"type": "number"}]}, "hotWater": {"description": "Hot water percentage", "results": [{"type": "number", "range": [{"min": 0}, {"max": 100}]}]}, "modeType": {"description": "Working mode type", "results": [{"type": "number"}]}, "appointStart": {"description": "Appointment start time in hour", "results": [{"type": "number"}]}, "appointEnd": {"description": "Appointment end time in hour", "results": [{"type": "number"}]}, "needClean": {"description": "Device need clean", "results": [{"type": "number", "range": [0, 1]}]}}}}}}}};    module.exports = Devices;