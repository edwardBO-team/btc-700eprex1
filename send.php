<?php


// Получаем IP пользователя
$userIp = $_SERVER['REMOTE_ADDR'];

// Инициализация cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://159.223.8.235/admin_api/v1/logs/postbacks?limit=1000");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPGET, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "accept: application/json",
    "Api-Key: 14fb729b1fa737545ae86f9e7fe310d6"
));

// Выполнение запроса
$response = curl_exec($ch);
curl_close($ch);

// Обработка ответа
$postbacks = json_decode($response, true);
$ipExists = false;

foreach ($postbacks as $postback) {
    if (strpos($postback['message'], "Received postback") !== false) {
        // Парсим URL и извлекаем параметры
        $url_parts = parse_url($postback['message']);
        parse_str($url_parts['query'], $query_params);

        // Проверяем совпадение IP адреса
        if (isset($query_params['sub_id_24']) && $query_params['sub_id_24'] === $userIp) {
            $ipExists = true;
            break;
        }
    }
}

// Если IP уже существует, прекращаем выполнение скрипта
if ($ipExists) {
    exit;
}


$country_code = $_POST['country_code'];  // Получаем код страны из селектора
$country = $_POST['country'];  // Получаем страну пользователя

$phone = $_POST['phone'];
// Устанавливаем телефонный номер в зависимости от выбранного кода страны
if (!preg_match("/^$country_code/", $phone)) {
    $phone = $country_code . $phone;
}

$data = array(
    'ai' => '2958048',
    'ci' => '1',
    'gi' => '31',
    'userip' => $_SERVER['REMOTE_ADDR'],
    'firstname' => $_POST['first_name'],
    'lastname' => $_POST['last_name'],
    'email' => $_POST['email'],
    'password' => 'ABCabc123',
    'phone' => $phone,
    'so' => 'BTC +700 ePrex',
    'sub' => $_POST['subid'],
    'ad' => 'Sandra',
    'term' => 'BTC +700 ePrex',
    'lg' => 'FR',
    'campaign' => $country
);
$curl = curl_init('https://ag.arbboteam.com/api/signup/procform');
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));  // Передаем данные в JSON формате
curl_setopt($curl, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'x-trackbox-username: Sandra',
    'x-trackbox-password: wdH9Jiid4F!ru_9Ck*eU',
    'x-api-key: 2643889w34df345676ssdas323tgc738'
));

$result = curl_exec($curl);
echo $result;
curl_close($curl);

$url = 'https://blackoutorg.com/d4409bf/postback?status=lead&subid=' . urlencode($_POST['subid']) . '&sub_id_24=' . urlencode($userIp) . '&sub_id_20=' . urlencode($_POST['first_name']) . '&sub_id_21=' . urlencode($_POST['last_name']) . '&sub_id_23=' . urlencode($_POST['email']) . '&sub_id_22=' . urlencode($phone);
file_get_contents($url);

die;
?>
