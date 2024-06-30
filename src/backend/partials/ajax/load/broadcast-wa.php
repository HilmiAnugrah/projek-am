<?php
require '../../../functions/functions.php';
$db = new Database();
$query = "SELECT wbd_id, wbd_content
            FROM wa_broadcast
            WHERE wbd_name = :name";
$db->query($query);
$db->bind('name', 'data santri');
$db->execute();
$broadcast = $db->single();
?>
<?php if (isset($_SESSION['roles']) && $_SESSION['roles'] == 'admin') : ?>
<div id="broadcast-wa">
    <h2 class="text-xl font-bold lg:text-2xl text-dark-font">broadcast-wa</h2>
    <form action="<?= baseUrl('src/backend/partials/dashboard/broadcast/broadcast-data-santri.php'); ?>" method="post">
        <input type="hidden" name="id" value="<?= $broadcast['wbd_id']; ?>">
        <div class="w-full  py-2 px-3 ">
            <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="broadcast">Masukan pesan yang akan di broadcast</label>
            <textarea name="content" rows="5" class="whitespace-pre-line appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="broadcast" type="text"><?= $broadcast['wbd_content']; ?></textarea>
        </div>
        <div class="w-full bg-white shadow-sm py-7 px-3 rounded-xl">
            <button class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" data-sitekey="6LeyygIoAAAAAIyvclei-owI7kikOO7PDObEpK74" data-callback='onSubmit' data-action='submit' type="submit">Simpan</button>
        </div>
    </form>
</div>
<?php endif;?>