<?php  
	function podium($d){
		$ret = '';
		$ret .= '<hr />';
		$ret .='<div id="rt-contain">';

			/* MAIN NAVIGATION
			=========================================*/
			$ret .= '<div id="rt-main">';
				for ($i = 0; $i < sizeof($d); $i++){
					$ret .= '<div class="rt-voice" voice="'.$i.'">';
						$ret .= '<div>';
							$ret .= '<img src="'.$d[$i]['podium_sq_img'].'">';
							$ret .= '<h2>'.$d[$i]['podium_author'].'</h2>';
							$ret .= '<h4>'.$d[$i]['podium_title'].'</h4>';
						$ret .= '</div>';

					$ret .= '</div>';
				}
			$ret .= '</div>';
			$ret .= '<a id="top"></a>';
			$ret .= '<div id="rt-segs">';
				for ($i = 0; $i < sizeof($d); $i++){
					$ret .= '<div class="rt-seg" voice="'.$i.'">';
						$ret .= '<div class="rt-seg-voice">';
							$ret .= '<div class="rt-seg-voice">';
								$ret .= '<div class="rt-voice">';
									$ret .= '<div>';
										$ret .= '<img src="'.$d[$i]['podium_sq_img'].'">';
										$ret .= '<h2>'.$d[$i]['podium_author'].'</h2>';
										$ret .= '<h4>'.$d[$i]['podium_title'].'</h4>';
									$ret .= '</div>';
								$ret .= '</div>';
							$ret .= '</div>';
						$ret .= '</div>';
						$ret .= '<div class="rt-seg-content">';
							$ret .= '<h2>'.$d[$i]['podium_hed'].'</h2>';
							$ret .= '<img src="'.$d[$i]['podium_img'].'">';
							$ret .= '<p>'.$d[$i]['podium_content'].'</p>';
							$ret .= '<p class="rt-bio">'.$d[$i]['podium_description'].'</p>';
						$ret .= '</div>';					
					$ret .= '</div>';
				}
			 $ret .= '</div>';
			$ret.= '<div id="rt-nav">';
				for ($i = 0; $i < sizeof($d); $i++){
					$ret .= '<div class="rt-voice" voice="'.$i.'">';
						$ret .= '<div>';
							$ret .= '<img src="'.$d[$i]['podium_sq_img'].'">';
							$ret .= '<h2>'.$d[$i]['podium_author'].'</h2>';
							$ret .= '<h4>'.$d[$i]['podium_title'].'</h4>';
						$ret .= '</div>';

					$ret .= '</div>';
				}
			$ret .= '</div>';
			$ret .= '<hr>';
		$ret .= '</div>';

		return $ret;
	}


	//      $ret .= '';


