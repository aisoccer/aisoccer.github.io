var PLAYERS_P1 = 
'#!/usr/bin/env python3\n'
+ '\n'
+ '# Author(s): Taeyoung Kim, Chansol Hong, Luiz Felipe Vecchietti\n'
+ '# Maintainer: Chansol Hong (cshong@rit.kaist.ac.kr)\n'
+ '\n'
+ 'import os\n'
+ 'import sys\n'
+ '\n'
+ 'sys.path.append(os.path.dirname(os.path.realpath(__file__)) + \'/../common\')\n'
+ 'try:\n'
+ '    from participant import Game, Frame\n'
+ 'except ImportError as err:\n'
+ '    print(\'player_random-walk: "participant" module cannot be imported:\', err)\n'
+ '    raise\n'
+ '\n'
+ 'import math\n'
+ '\n'
+ 'import helper\n'
+ '\n'
+ '#reset_reason\n'
+ 'NONE = Game.NONE\n'
+ 'GAME_START = Game.GAME_START\n'
+ 'SCORE_MYTEAM = Game.SCORE_MYTEAM\n'
+ 'SCORE_OPPONENT = Game.SCORE_OPPONENT\n'
+ 'GAME_END = Game.GAME_END\n'
+ 'DEADLOCK = Game.DEADLOCK\n'
+ 'GOALKICK = Game.GOALKICK\n'
+ 'CORNERKICK = Game.CORNERKICK\n'
+ 'PENALTYKICK = Game.PENALTYKICK\n'
+ 'HALFTIME = Game.HALFTIME\n'
+ 'EPISODE_END = Game.EPISODE_END\n'
+ '\n'
+ '#game_state\n'
+ 'STATE_DEFAULT = Game.STATE_DEFAULT\n'
+ 'STATE_KICKOFF = Game.STATE_KICKOFF\n'
+ 'STATE_GOALKICK = Game.GOALKICK\n'
+ 'STATE_CORNERKICK = Game.CORNERKICK\n'
+ 'STATE_PENALTYKICK = Game.STATE_PENALTYKICK\n'
+ '\n'
+ '#coordinates\n'
+ 'MY_TEAM = Frame.MY_TEAM\n'
+ 'OP_TEAM = Frame.OP_TEAM\n'
+ 'BALL = Frame.BALL\n'
+ 'X = Frame.X\n'
+ 'Y = Frame.Y\n'
+ 'Z = Frame.Z\n'
+ 'TH = Frame.TH\n'
+ 'ACTIVE = Frame.ACTIVE\n'
+ 'TOUCH = Frame.TOUCH\n'
+ 'BALL_POSSESSION = Frame.BALL_POSSESSION\n'
+ '\n'
+ 'class Goalkeeper:\n'
+ '\n'
+ '    def __init__(self, field, goal, penalty_area, goal_area, robot_size, max_linear_velocity):\n'
+ '        self.field = field\n'
+ '        self.goal = goal\n'
+ '        self.penalty_area = penalty_area\n'
+ '        self.goal_area = goal_area\n'
+ '        self.robot_size = robot_size\n'
+ '        self.max_linear_velocity = max_linear_velocity\n'
+ '\n'
+ '    def move(self, robot_id, idx, idx_opp, defense_angle, attack_angle, cur_posture, cur_posture_opp, previous_ball, cur_ball, predicted_ball, \ '
+ '            cross=False, kick=False, quickpass=False, jump=False, dribble=False):\n';

var PLAYERS_P2 = 
'\n'
+ '        left_wheel, right_wheel = helper.go_to(robot_id, x, y, cur_posture, cur_ball, self.max_linear_velocity)\n'
+ '        slider_horizontal, slider_vertical = helper.shoot(cross, kick, quickpass)\n'
+ '        slider_jump = helper.jump(jump)\n'
+ '        dribble_mode = helper.dribble(dribble)\n'
+ '        return left_wheel, right_wheel, slider_horizontal, slider_vertical, slider_jump, dribble_mode\n'
+ '\n'
+ 'class Defender_1:\n'
+ '\n'
+ '    def __init__(self, field, goal, penalty_area, goal_area, robot_size, max_linear_velocity):\n'
+ '        self.field = field\n'
+ '        self.goal = goal\n'
+ '        self.penalty_area = penalty_area\n'
+ '        self.goal_area = goal_area\n'
+ '        self.robot_size = robot_size\n'
+ '        self.max_linear_velocity = max_linear_velocity\n'
+ '\n'
+ '    def move(self, robot_id, idx, idx_opp, defense_angle, attack_angle, cur_posture, cur_posture_opp, previous_ball, cur_ball, predicted_ball, \ '
+ '            cross=False, kick=False, quickpass=False, jump=False, dribble=False):\n';

var PLAYERS_P3 = 
'\n'
+ '        left_wheel, right_wheel = helper.go_to(robot_id, x, y, cur_posture, cur_ball, self.max_linear_velocity)\n'
+ '        slider_horizontal, slider_vertical = helper.shoot(cross, kick, quickpass)\n'
+ '        slider_jump = helper.jump(jump)\n'
+ '        dribble_mode = helper.dribble(dribble)\n'
+ '        return left_wheel, right_wheel, slider_horizontal, slider_vertical, slider_jump, dribble_mode\n'
+ '\n'
+ 'class Defender_2:\n'
+ '\n'
+ '    def __init__(self, field, goal, penalty_area, goal_area, robot_size, max_linear_velocity):\n'
+ '        self.field = field\n'
+ '        self.goal = goal\n'
+ '        self.penalty_area = penalty_area\n'
+ '        self.goal_area = goal_area\n'
+ '        self.robot_size = robot_size\n'
+ '        self.max_linear_velocity = max_linear_velocity\n'
+ '\n'
+ '    def move(self, robot_id, idx, idx_opp, defense_angle, attack_angle, cur_posture, cur_posture_opp, previous_ball, cur_ball, predicted_ball, \ '
+ '            cross=False, kick=False, quickpass=False, jump=False, dribble=False):\n';

var PLAYERS_P4 = 
'\n'
+ '        left_wheel, right_wheel = helper.go_to(robot_id, x, y, cur_posture, cur_ball, self.max_linear_velocity)\n'
+ '        slider_horizontal, slider_vertical = helper.shoot(cross, kick, quickpass)\n'
+ '        slider_jump = helper.jump(jump)\n'
+ '        dribble_mode = helper.dribble(dribble)\n'
+ '        return left_wheel, right_wheel, slider_horizontal, slider_vertical, slider_jump, dribble_mode\n'
+ '\n'
+ 'class Forward_1:\n'
+ '\n'
+ '    def __init__(self, field, goal, penalty_area, goal_area, robot_size, max_linear_velocity):\n'
+ '        self.field = field\n'
+ '        self.goal = goal\n'
+ '        self.penalty_area = penalty_area\n'
+ '        self.goal_area = goal_area\n'
+ '        self.robot_size = robot_size\n'
+ '        self.max_linear_velocity = max_linear_velocity\n'
+ '\n'
+ '    def move(self, robot_id, idx, idx_opp, defense_angle, attack_angle, cur_posture, cur_posture_opp, previous_ball, cur_ball, predicted_ball, \ '
+ '            cross=False, kick=False, quickpass=False, jump=False, dribble=False):\n';

var PLAYERS_P5 = 
'\n'
+ '        left_wheel, right_wheel = helper.go_to(robot_id, x, y, cur_posture, cur_ball, self.max_linear_velocity)\n'
+ '        slider_horizontal, slider_vertical = helper.shoot(cross, kick, quickpass)\n'
+ '        slider_jump = helper.jump(jump)\n'
+ '        dribble_mode = helper.dribble(dribble)\n'
+ '        return left_wheel, right_wheel, slider_horizontal, slider_vertical, slider_jump, dribble_mode\n'
+ '\n'
+ 'class Forward_2:\n'
+ '\n'
+ '    def __init__(self, field, goal, penalty_area, goal_area, robot_size, max_linear_velocity):\n'
+ '        self.field = field\n'
+ '        self.goal = goal\n'
+ '        self.penalty_area = penalty_area\n'
+ '        self.goal_area = goal_area\n'
+ '        self.robot_size = robot_size\n'
+ '        self.max_linear_velocity = max_linear_velocity\n'
+ '\n'
+ '    def move(self, robot_id, idx, idx_opp, defense_angle, attack_angle, cur_posture, cur_posture_opp, previous_ball, cur_ball, predicted_ball, \ '
+ '            cross=False, kick=False, quickpass=False, jump=False, dribble=False):\n';

var PLAYERS_P6 = 
'\n'
+ '        left_wheel, right_wheel = helper.go_to(robot_id, x, y, cur_posture, cur_ball, self.max_linear_velocity)\n'
+ '        slider_horizontal, slider_vertical = helper.shoot(cross, kick, quickpass)\n'
+ '        slider_jump = helper.jump(jump)\n'
+ '        dribble_mode = helper.dribble(dribble)\n'
+ '        return left_wheel, right_wheel, slider_horizontal, slider_vertical, slider_jump, dribble_mode\n';

var MAIN = 
'#!/usr/bin/env python3\n'
+ '\n'
+ '# Author(s): Taeyoung Kim, Chansol Hong, Luiz Felipe Vecchietti\n'
+ '# Maintainer: Chansol Hong (cshong@rit.kaist.ac.kr)\n'
+ '\n'
+ 'import os\n'
+ 'import sys\n'
+ '\n'
+ 'sys.path.append(os.path.dirname(os.path.realpath(__file__)) + \'/../common\')\n'
+ 'try:\n'
+ '    from participant import Participant, Game, Frame\n'
+ 'except ImportError as err:\n'
+ '    print(\'player_random-walk: "participant" module cannot be imported:\', err)\n'
+ '    raise\n'
+ '\n'
+ 'import math\n'
+ 'import numpy as np\n'
+ '\n'
+ 'import helper\n'
+ '\n'
+ 'from players import Goalkeeper, Defender_1, Defender_2, Forward_1, Forward_2\n'
+ '\n'
+ '#reset_reason\n'
+ 'NONE = Game.NONE\n'
+ 'GAME_START = Game.GAME_START\n'
+ 'SCORE_MYTEAM = Game.SCORE_MYTEAM\n'
+ 'SCORE_OPPONENT = Game.SCORE_OPPONENT\n'
+ 'GAME_END = Game.GAME_END\n'
+ 'DEADLOCK = Game.DEADLOCK\n'
+ 'GOALKICK = Game.GOALKICK\n'
+ 'CORNERKICK = Game.CORNERKICK\n'
+ 'PENALTYKICK = Game.PENALTYKICK\n'
+ 'HALFTIME = Game.HALFTIME\n'
+ 'EPISODE_END = Game.EPISODE_END\n'
+ '\n'
+ '#game_state\n'
+ 'STATE_DEFAULT = Game.STATE_DEFAULT\n'
+ 'STATE_KICKOFF = Game.STATE_KICKOFF\n'
+ 'STATE_GOALKICK = Game.GOALKICK\n'
+ 'STATE_CORNERKICK = Game.CORNERKICK\n'
+ 'STATE_PENALTYKICK = Game.STATE_PENALTYKICK\n'
+ '\n'
+ '#coordinates\n'
+ 'MY_TEAM = Frame.MY_TEAM\n'
+ 'OP_TEAM = Frame.OP_TEAM\n'
+ 'BALL = Frame.BALL\n'
+ 'X = Frame.X\n'
+ 'Y = Frame.Y\n'
+ 'Z = Frame.Z\n'
+ 'TH = Frame.TH\n'
+ 'ACTIVE = Frame.ACTIVE\n'
+ 'TOUCH = Frame.TOUCH\n'
+ 'BALL_POSSESSION = Frame.BALL_POSSESSION\n'
+ '        \n'
+ 'class Frame(object): \n'
+ '    def __init__(self):\n'
+ '        self.time = None\n'
+ '        self.score = None\n'
+ '        self.reset_reason = None\n'
+ '        self.game_state = None\n'
+ '        self.subimages = None\n'
+ '        self.coordinates = None\n'
+ '        self.half_passed = None\n'
+ '\n'
+ 'class Player(Participant):\n'
+ '    def init(self, info): \n'
+ '        self.field = info[\'field\']\n'
+ '        self.max_linear_velocity = info[\'max_linear_velocity\']\n'
+ '        self.robot_size = info[\'robot_size\'][0]\n'
+ '        self.goal = info[\'goal\']\n'
+ '        self.penalty_area = info[\'penalty_area\']\n'
+ '        self.goal_area = info[\'goal_area\']\n'
+ '        self.number_of_robots = info[\'number_of_robots\']\n'
+ '        self.end_of_frame = False\n'
+ '        self._frame = 0 \n'
+ '        self.speeds = [0 for _ in range(30)]\n'
+ '        self.cur_posture = []\n'
+ '        self.cur_posture_opp = []\n'
+ '        self.cur_ball = []\n'
+ '        self.previous_ball = []\n'
+ '        self.predicted_ball = []\n'
+ '        self.idx = 0\n'
+ '        self.idx_opp = 0\n'
+ '        self.previous_frame = Frame()\n'
+ '        self.defense_angle = 0\n'
+ '        self.attack_angle = 0\n'
+ '        self.gk_index = 0\n'
+ '        self.d1_index = 1\n'
+ '        self.d2_index = 2\n'
+ '        self.f1_index = 3\n'
+ '        self.f2_index = 4\n'
+ '        self.GK = Goalkeeper(self.field, self.goal, self.penalty_area, \n'
+ '                                self.goal_area, self.robot_size,\n'
+ '                                self.max_linear_velocity[self.gk_index])\n'
+ '        self.D1 = Defender_1(self.field, self.goal, self.penalty_area, \n'
+ '                                self.goal_area, self.robot_size,\n'
+ '                                self.max_linear_velocity[self.d1_index])\n'
+ '        self.D2 = Defender_2(self.field, self.goal, self.penalty_area, \n'
+ '                                self.goal_area, self.robot_size,\n'
+ '                                self.max_linear_velocity[self.d2_index])\n'
+ '        self.F1 = Forward_1(self.field, self.goal, self.penalty_area, \n'
+ '                                self.goal_area, self.robot_size,\n'
+ '                                self.max_linear_velocity[self.f1_index])\n'
+ '        self.F2 = Forward_2(self.field, self.goal, self.penalty_area,\n'
+ '                                self.goal_area, self.robot_size,\n'
+ '                                self.max_linear_velocity[self.f2_index])\n'
+ '        helper.printConsole("Initializing variables...")\n'
+ '\n'
+ '    def get_coord(self, received_frame):\n'
+ '        self.cur_ball = received_frame.coordinates[BALL]\n'
+ '        self.cur_posture = received_frame.coordinates[MY_TEAM]\n'
+ '        self.cur_posture_opp = received_frame.coordinates[OP_TEAM]\n'
+ '\n'
+ '    def update(self, received_frame):\n'
+ '\n'
+ '        if (received_frame.end_of_frame):\n'
+ '	    \n'
+ '            self._frame += 1\n'
+ '\n'
+ '            if (self._frame == 1):\n'
+ '                self.previous_frame = received_frame\n'
+ '                self.get_coord(received_frame)\n'
+ '                self.previous_ball = self.cur_ball\n'
+ '\n'
+ '            self.get_coord(received_frame)\n'
+ '            self.predicted_ball = helper.predict_ball(self.cur_ball, self.previous_ball)\n'
+ '            self.idx = helper.find_closest_robot(self.cur_ball, self.cur_posture, self.number_of_robots)\n'
+ '            self.idx_opp = helper.find_closest_robot(self.cur_ball, self.cur_posture_opp, self.number_of_robots)\n'
+ '            self.defense_angle = helper.get_defense_kick_angle(self.predicted_ball, self.field, self.cur_ball)\n'
+ '            self.attack_angle = helper.get_attack_kick_angle(self.predicted_ball, self.field)\n'
+ '\n'
+ '##############################################################################\n'
+ '            #(update the robots wheels)\n'
+ '            # Robot Functions\n'
+ '            self.speeds[6 * self.gk_index : 6 * self.gk_index + 6] = self.GK.move(self.gk_index, \n'
+ '                                                                                self.idx, self.idx_opp, \n'
+ '                                                                                self.defense_angle, self.attack_angle,\n'
+ '                                                                                self.cur_posture, self.cur_posture_opp,\n'
+ '                                                                                self.previous_ball, self.cur_ball, self.predicted_ball)\n'
+ '            self.speeds[6 * self.d1_index : 6 * self.d1_index + 6] = self.D1.move(self.d1_index, \n'
+ '                                                                                self.idx, self.idx_opp, \n'
+ '                                                                                self.defense_angle, self.attack_angle,\n'
+ '                                                                                self.cur_posture, self.cur_posture_opp,\n'
+ '                                                                                self.previous_ball, self.cur_ball, self.predicted_ball)\n'
+ '            self.speeds[6 * self.d2_index : 6 * self.d2_index + 6] = self.D2.move(self.d2_index, \n'
+ '                                                                                self.idx, self.idx_opp, \n'
+ '                                                                                self.defense_angle, self.attack_angle,\n'
+ '                                                                                self.cur_posture, self.cur_posture_opp,\n'
+ '                                                                                self.previous_ball, self.cur_ball, self.predicted_ball)\n'
+ '            self.speeds[6 * self.f1_index : 6 * self.f1_index + 6] = self.F1.move(self.f1_index, \n'
+ '                                                                                self.idx, self.idx_opp, \n'
+ '                                                                                self.defense_angle, self.attack_angle,\n'
+ '                                                                                self.cur_posture, self.cur_posture_opp,\n'
+ '                                                                                self.previous_ball, self.cur_ball, self.predicted_ball)\n'
+ '            self.speeds[6 * self.f2_index : 6 * self.f2_index + 6] = self.F2.move(self.f2_index, \n'
+ '                                                                                self.idx, self.idx_opp, \n'
+ '                                                                                self.defense_angle, self.attack_angle,\n'
+ '                                                                                self.cur_posture, self.cur_posture_opp,\n'
+ '                                                                                self.previous_ball, self.cur_ball, self.predicted_ball)\n'
+ '            \n'
+ '            self.set_speeds(self.speeds)\n'
+ '##############################################################################\n'
+ '\n'
+ '            self.previous_frame = received_frame\n'
+ '            self.previous_ball = self.cur_ball\n'
+ '\n'
+ 'if __name__ == \'__main__\':\n'
+ '    player = Player()\n'
+ '    player.run()\n';

var HELPER =
'#!/usr/bin/env python3\n'
+ '\n'
+ '# Author(s): Taeyoung Kim, Chansol Hong, Luiz Felipe Vecchietti\n'
+ '# Maintainer: Chansol Hong (cshong@rit.kaist.ac.kr)\n'
+ '\n'
+ 'import os\n'
+ 'import sys\n'
+ 'sys.path.append(os.path.dirname(os.path.realpath(__file__)) + \'/../common\')\n'
+ 'try:\n'
+ '    from participant import Game, Frame\n'
+ 'except ImportError as err:\n'
+ '    print(\'player_random-walk: "participant" module cannot be imported:\', err)\n'
+ '    raise\n'
+ '\n'
+ 'import math\n'
+ '\n'
+ '#reset_reason\n'
+ 'NONE = Game.NONE\n'
+ 'GAME_START = Game.GAME_START\n'
+ 'SCORE_MYTEAM = Game.SCORE_MYTEAM\n'
+ 'SCORE_OPPONENT = Game.SCORE_OPPONENT\n'
+ 'GAME_END = Game.GAME_END\n'
+ 'DEADLOCK = Game.DEADLOCK\n'
+ 'GOALKICK = Game.GOALKICK\n'
+ 'CORNERKICK = Game.CORNERKICK\n'
+ 'PENALTYKICK = Game.PENALTYKICK\n'
+ 'HALFTIME = Game.HALFTIME\n'
+ 'EPISODE_END = Game.EPISODE_END\n'
+ '\n'
+ '#game_state\n'
+ 'STATE_DEFAULT = Game.STATE_DEFAULT\n'
+ 'STATE_KICKOFF = Game.STATE_KICKOFF\n'
+ 'STATE_GOALKICK = Game.GOALKICK\n'
+ 'STATE_CORNERKICK = Game.CORNERKICK\n'
+ 'STATE_PENALTYKICK = Game.STATE_PENALTYKICK\n'
+ '\n'
+ '#coordinates\n'
+ 'MY_TEAM = Frame.MY_TEAM\n'
+ 'OP_TEAM = Frame.OP_TEAM\n'
+ 'BALL = Frame.BALL\n'
+ 'X = Frame.X\n'
+ 'Y = Frame.Y\n'
+ 'Z = Frame.Z\n'
+ 'TH = Frame.TH\n'
+ 'ACTIVE = Frame.ACTIVE\n'
+ 'TOUCH = Frame.TOUCH\n'
+ 'BALL_POSSESSION = Frame.BALL_POSSESSION\n'
+ '\n'
+ 'def distance(x1, x2, y1, y2):\n'
+ '    return math.sqrt(math.pow(x1 - x2, 2) + math.pow(y1 - y2, 2))\n'
+ '\n'
+ 'def degree2radian(deg):\n'
+ '    return deg * math.pi / 180\n'
+ '\n'
+ 'def radian2degree(rad):\n'
+ '    return rad * 180 / math.pi\n'
+ '\n'
+ 'def wrap_to_pi(theta):\n'
+ '    while (theta > math.pi):\n'
+ '        theta -= 2 * math.pi\n'
+ '    while (theta < -math.pi):\n'
+ '        theta += 2 * math.pi\n'
+ '    return theta\n'
+ '\n'
+ 'def predict_ball(cur_ball, previous_ball):\n'
+ '    prediction_step = 1\n'
+ '    dx = cur_ball[X] - previous_ball[X]\n'
+ '    dy = cur_ball[Y] - previous_ball[Y]\n'
+ '    predicted_ball = [cur_ball[X] + prediction_step*dx, cur_ball[Y] + prediction_step*dy]\n'
+ '    return predicted_ball\n'
+ '\n'
+ 'def find_closest_robot(cur_ball, cur_posture, number_of_robots):\n'
+ '    min_idx = 0\n'
+ '    min_distance = 9999.99\n'
+ '    for i in range(number_of_robots):\n'
+ '        measured_distance = distance(cur_ball[X], cur_posture[i][X], cur_ball[Y], cur_posture[i][Y])\n'
+ '        if (measured_distance < min_distance):\n'
+ '            min_distance = measured_distance\n'
+ '            min_idx = i\n'
+ '    if (min_idx == 0):\n'
+ '        idx = 1\n'
+ '    else:\n'
+ '        idx = min_idx\n'
+ '    return idx\n'
+ '\n'
+ 'def ball_is_own_goal(predicted_ball, field, goal_area):\n'
+ '    return (-field[X]/2 <= predicted_ball[X] <= -field[X]/2 + goal_area[X] and\n'
+ '            -goal_area[Y]/2 <= predicted_ball[Y] <= goal_area[Y]/2)\n'
+ '\n'
+ 'def ball_is_own_penalty(predicted_ball, field, penalty_area):\n'
+ '    return (-field[X]/2 <= predicted_ball[X] <= -field[X]/2 + penalty_area[X] and\n'
+ '    	-penalty_area[Y]/2 <= predicted_ball[Y] <=  penalty_area[Y]/2)\n'
+ '\n'
+ 'def ball_is_own_field(predicted_ball):\n'
+ '    return (predicted_ball[X] <= 0)\n'
+ '\n'
+ 'def ball_is_opp_goal(predicted_ball, field, goal_area):\n'
+ '    return (field[X]/2  - goal_area[X] <= predicted_ball[X] <= field[X]/2 and\n'
+ '            -goal_area[Y]/2 <= predicted_ball[Y] <= goal_area[Y]/2)\n'
+ '\n'
+ 'def ball_is_opp_penalty(predicted_ball, field, penalty_area):\n'
+ '    return (field[X]/2  - penalty_area[X] <= predicted_ball[X] <= field[X]/2 and\n'
+ '            -penalty_area[Y]/2 <= predicted_ball[Y] <= penalty_area[Y]/2)\n'
+ '\n'
+ 'def ball_is_opp_field(predicted_ball):\n'
+ '    return (predicted_ball[X] > 0)\n'
+ '\n'
+ 'def get_defense_kick_angle(predicted_ball, field, cur_ball):\n'
+ '    if predicted_ball[X] >= -field[X] / 2:\n'
+ '        x = -field[X] / 2 - predicted_ball[X]\n'
+ '    else:\n'
+ '        x = -field[X] / 2 - cur_ball[X]\n'
+ '    y = predicted_ball[Y]\n'
+ '    return math.atan2(y, abs(x) + 0.00001)\n'
+ '\n'
+ 'def get_attack_kick_angle(predicted_ball, field):\n'
+ '    x = field[X] / 2 - predicted_ball[X] + 0.00001\n'
+ '    y = predicted_ball[Y]\n'
+ '    angle = math.atan2(y, x)\n'
+ '    return -angle\n'
+ '\n'
+ 'def set_wheel_velocity(max_linear_velocity, left_wheel, right_wheel):\n'
+ '    ratio_l = 1\n'
+ '    ratio_r = 1\n'
+ '\n'
+ '    if (left_wheel > max_linear_velocity or right_wheel > max_linear_velocity):\n'
+ '        diff = max(left_wheel, right_wheel) - max_linear_velocity\n'
+ '        left_wheel -= diff\n'
+ '        right_wheel -= diff\n'
+ '    if (left_wheel < -max_linear_velocity or right_wheel < -max_linear_velocity):\n'
+ '        diff = min(left_wheel, right_wheel) + max_linear_velocity\n'
+ '        left_wheel -= diff\n'
+ '        right_wheel -= diff\n'
+ '\n'
+ '    return left_wheel, right_wheel\n'
+ '\n'
+ 'def go_to(id, x, y, cur_posture, cur_ball, max_linear_velocity):\n'
+ '    sign = 1\n'
+ '    kd = 5\n'
+ '    ka = 0.25\n'
+ '\n'
+ '    tod = 0.005 # tolerance of distance\n'
+ '    tot = math.pi/360 # tolerance of theta\n'
+ '\n'
+ '    dx = x - cur_posture[id][X]\n'
+ '    dy = y - cur_posture[id][Y]\n'
+ '    d_e = math.sqrt(math.pow(dx, 2) + math.pow(dy, 2))\n'
+ '    desired_th = math.atan2(dy, dx)\n'
+ '\n'
+ '    d_th = wrap_to_pi(desired_th - cur_posture[id][TH])\n'
+ '    \n'
+ '    if (d_th > degree2radian(90)):\n'
+ '        d_th -= math.pi\n'
+ '        sign = -1\n'
+ '    elif (d_th < degree2radian(-90)):\n'
+ '        d_th += math.pi\n'
+ '        sign = -1\n'
+ '\n'
+ '    if (d_e < tod):\n'
+ '        kd = 0\n'
+ '    if (abs(d_th) < tot):\n'
+ '        ka = 0\n'
+ '\n'
+ '    if go_fast(id, cur_posture, cur_ball):\n'
+ '        kd *= 5\n'
+ '\n'
+ '    left_wheel, right_wheel = set_wheel_velocity(max_linear_velocity,\n'
+ '                  sign * (kd * d_e - ka * d_th), \n'
+ '                  sign * (kd * d_e + ka * d_th))\n'
+ '\n'
+ '    return left_wheel, right_wheel\n'
+ '\n'
+ 'def go_fast(id, cur_posture, cur_ball):\n'
+ '    distance2ball = distance(cur_ball[X], cur_posture[id][X],\n'
+ '                                cur_ball[Y], cur_posture[id][Y])\n'
+ '    d_bg = distance(cur_ball[X], 3.9,\n'
+ '                                cur_ball[Y], 0)\n'
+ '    d_rg = distance(3.9, cur_posture[id][X],\n'
+ '                                0, cur_posture[id][Y])\n'
+ '    \n'
+ '    if (distance2ball < 0.25 and d_rg > d_bg):\n'
+ '        if (cur_ball[X] > 3.7 and abs(cur_ball[Y]) > 0.5 and abs(cur_posture[id][TH]) < 30 * math.pi/180):\n'
+ '            return False\n'
+ '        else:\n'
+ '            return True\n'
+ '    else:\n'
+ '        return False\n'
+ '\n'
+ 'def shoot(cross, kick, quickpass):\n'
+ '    # return slider horizontal and slide vertical\n'
+ '    # slider range: 0-10\n'
+ '    if cross:\n'
+ '        return 10, 8\n'
+ '    elif kick:\n'
+ '        return 10, 0\n'
+ '    elif quickpass:\n'
+ '        return 5, 0\n'
+ '    else:\n'
+ '        return 0, 0\n'
+ '\n'
+ 'def jump(flag):\n'
+ '    # return slider horizontal and slide vertical\n'
+ '    # slider range: 0-10\n'
+ '    if flag:\n'
+ '        return 10\n'
+ '    else:\n'
+ '        return 0\n'
+ '\n'
+ 'def dribble(flag):\n'
+ '    # return slider horizontal and slide vertical\n'
+ '    # slider variable: boolean 0 (disabled) or 1 (enabled)\n'
+ '    if flag:\n'
+ '        return 1\n'
+ '    else:\n'
+ '        return 0\n'
+ '\n'
+ 'def printConsole(message):\n'
+ '    print(message)\n'
+ '    sys.__stdout__.flush()\n';