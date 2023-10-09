<?php
include "script.php";
if (isset($_POST['R']) && isset($_POST['X']) && isset($_POST['Y'])) {
    $start_time = microtime(true) *1000000;
    $in_area = isHit();
    $in_area = true;
}
?>
<?php if (isset($in_area)) { ?>
                        <div class="interface-block" style="border-color: antiquewhite">
                            <table class="centering fillingLocation">
                                <tr>
                                    <td>
                                        <div>
                                            Результат:
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <?php
                                        /* выводит выражения */
                                        echo "<table id='requestAnswer' class='centering'>";
                                        echo "<tr><td class='requestAnswerTableBlockLeft'>R:</td><td class='requestAnswerTableBlockRight'>
<span class='answer' id='r'>" .$_POST['R'] . "</span>
</td></tr>";
                                        echo "<tr><td class='requestAnswerTableBlockLeft'>X:</td><td class='requestAnswerTableBlockRight'>
<span class='answer' id='x'>" .$_POST['X'] . "</span></td></tr>";
                                        echo "<tr><td class='requestAnswerTableBlockLeft'>Y:</td><td class='requestAnswerTableBlockRight'>
<span class='answer' id='y'>" .$_POST['Y'] . "</span></td></tr>";
                                        if($in_area == "true") {
                                            echo "<tr><td class='requestAnswerTableBlockLeft'>Попала:</td><td class='requestAnswerTableBlockRight'>
<span class='answer' id='In_area'>" . "Да" . "</span></td></tr>";
                                        } else {
                                            echo "<tr><td class='requestAnswerTableBlockLeft'>Попала:</td><td class='requestAnswerTableBlockRight'>
<span class='answer' id='In_area'>" . "Нет" . "</span></td></tr>";
                                        }
                                        $stop_time = microtime(true) * 1000000;
                                        echo "<tr><td class='requestAnswerTableBlockLeft'>Время работы:</td>
<td class='requestAnswerTableBlockRight'><span class='answer' id='PhpWorkingtime'>" . ($stop_time - $start_time) . " мкс" . "</span></td></tr>";
                                        echo "</table>";
                                        ?>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    <?php } ?>
