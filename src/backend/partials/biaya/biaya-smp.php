<?php
$totalBiayaSMP = query("SELECT * FROM program NATURAL JOIN program_biaya WHERE prg_id = 1");
$totalBiayaSMPFiltered = query("SELECT * FROM program NATURAL JOIN program_biaya WHERE prg_id = 1 AND pgb_type NOT LIKE '%seragam%'");
$uraianBiayaSMP = query("SELECT * FROM program_biaya_uraian WHERE prg_id = 1");

$totalBiayaPutraSMP = query("SELECT pgb_biaya FROM program NATURAL JOIN program_biaya WHERE prg_id = 1 AND pgb_type LIKE '%Putra%'")[0]['pgb_biaya'];
$totalBiayaPutriSMP = query("SELECT pgb_biaya FROM program NATURAL JOIN program_biaya WHERE prg_id = 1 AND pgb_type LIKE '%Putri%'")[0]['pgb_biaya'];
foreach ($totalBiayaSMPFiltered as $total) :
    $totalBiayaPutraSMP += $total['pgb_biaya'];
    $totalBiayaPutriSMP += $total['pgb_biaya'];
endforeach;

?>

<section class="my-[150px] relative w-full " id="smp">
    <div class="jenis-beasiswa bg-main-red w-[90%] lg:w-[80%] pb-16 md:pb-28 mx-auto relative rounded-2xl">
        <!-- image vactor background -->
        <img class="absolute top-0 w-full" src="<?= base_url("src/img/vector-smp.svg"); ?>" alt="biaya pesantren bg">
        <img class="absolute top-[500px] w-full" src="<?= base_url("src/img/vector-smp.svg"); ?>" alt="biaya pesantren bg">
        <img class="absolute bottom-[200px] w-full" src="<?= base_url("src/img/vector-smp.svg"); ?>" alt="biaya pesantren bg">
        <!-- HEADING JENIS Biaya SMP -->
        <div class="-mt-14 lg:-mt-[70px] rounded-xl absolute top-0 left-1/2 -translate-x-1/2  bg-main-red w-[90%] h-[80px] lg:w-[80%] lg:h-[100px] flex justify-center items-center">
            <h2 class="font-bold  px-[5%] text-center text-3xl sm:text-4xl text-body ">
                Biaya SMP PLUS
            </h2>
        </div>
        <!-- kategori biaya SMP -->

        <!-- biaya -->
        <?php foreach ($totalBiayaSMPFiltered as $smp) : ?>
            <div class="relative w-[95%] lg:w-[80%] top-10 mx-auto main-shadow" id="<?= $smp['pgb_type']; ?>">
                <h3 class="text-center text-2xl sm:text-3xl text-body font-bold py-4 md:py-8 lg:pt-14"><?= $smp['pgb_type']; ?></h3>
                <table class="w-full bg-white border-separate border-spacing-x-[1px]">
                    <thead class="h-12 bg-main-orange text-body text-md md:text-xl">
                        <th class="font-bold">NO</th>
                        <th class="font-bold">Uraian</th>
                        <th class="font-bold">Biaya</th>
                        <th class="font-bold">Keterangan</th>
                    </thead>
                    <tbody class="text-center font-normal md:font-semibold text-[12px] md:text-lg">
                        <?php $noTotal = 0;
                        $filtered = array_filter($uraianBiayaSMP, function ($var) use ($smp) {
                            return $var['pgb_id'] == $smp['pgb_id'];
                        });
                        foreach ($filtered as $biaya) : $noTotal += 1; ?>
                            <tr class="<?= $noTotal % 2 == 0 ? "bg-main-orange" : "bg-main-red"; ?> text-body">
                                <td><?= $noTotal; ?></td>
                                <td><?= $biaya['pbu_name']; ?></td>
                                <?php if ($noTotal == 1) : ?>
                                    <td rowspan="<?= count($filtered); ?>">Rp <?= number_format($smp['pgb_biaya'], 0, ',', '.'); ?></td>
                                    <td rowspan="<?= count($filtered); ?>"><?= $smp['pgb_desc']; ?></td>
                                <?php endif; ?>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        <?php endforeach; ?>

        <!-- Total Biaya -->
        <div class="relative w-[95%] lg:w-[80%] top-10 mx-auto main-shadow">
            <h3 id="total-biaya-smp" class="text-center text-2xl sm:text-3xl text-body font-bold py-4  md:py-8 lg:pt-14 lg:mt-10">Total Biaya</h3>
            <table class="w-full bg-white border-separate border-spacing-x-[1px]" aria-label="total-biaya-smp">
                <thead class="h-12 bg-main-orange text-body text-md md:text-xl">
                    <th class="font-bold">NO</th>
                    <th class="font-bold">Uraian</th>
                    <th class="font-bold">Biaya</th>
                    <th class="font-bold">Total</th>
                </thead>
                <tbody class="text-center font-normal md:font-semibold text-[12px] md:text-lg">
                    <?php $noTotal = 0;
                    foreach ($totalBiayaSMP as $tb) : $noTotal += 1; ?>
                        <tr class="<?= $noTotal % 2 == 0 ? "bg-main-orange" : "bg-main-red"; ?> text-body">
                            <td><?= $noTotal; ?></td>
                            <td><?= $tb["pgb_type"]; ?></td>
                            <td>Rp <?= number_format($tb["pgb_biaya"], 0, ',', '.'); ?></td>
                            <?php if ($noTotal == 1) : ?>
                                <td rowspan="<?= count($totalBiayaSMP); ?>">Putra Rp <?= number_format($totalBiayaPutraSMP, 0, ',', '.') . '<br> Putri Rp ' . number_format($totalBiayaPutriSMP, 0, ',', '.'); ?></td>
                            <?php endif; ?>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>

        <button class="bg-main-orange rounded relative flex justify-center items-center mx-auto mt-20 2xl:mt-28 main-shadow"><a href="#" class="text-lg font-bold text-center text-body py-2 px-5 md:py-4 md:px-8 md:text-2xl">Daftar Sekarang</a></button>
    </div>
</section>