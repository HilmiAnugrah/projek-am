<?php
$totalBiayaSMA = query("SELECT * FROM program NATURAL JOIN program_biaya WHERE prg_id = 2");
$uraianBiayaSMA = query("SELECT * FROM program_biaya_uraian WHERE prg_id = 2");

?>

<section class="my-[150px] relative w-full " id="Semater">
    <div class="jenis-beasiswa bg-main-purple w-[90%] lg:w-[80%] pb-16 md:pb-28 mx-auto relative rounded-2xl">
        <!-- image vactor background -->
        <img class="absolute top-[100px] w-full" src="<?= base_url("src/img/vector-smater.svg"); ?>" alt="biaya pesantren bg">
        <img class="absolute top-[500px] w-full" src="<?= base_url("src/img/vector-smater.svg"); ?>" alt="biaya pesantren bg">
        <img class="absolute bottom-[150px] w-full" src="<?= base_url("src/img/vector-smater.svg"); ?>" alt="biaya pesantren bg">
        <!-- HEADING JENIS Biaya SMP -->
        <div class="flex-col -mt-14 lg:-mt-[70px] rounded-xl absolute top-0 left-1/2 -translate-x-1/2  bg-main-purple w-[90%] h-[80px] lg:w-[80%] lg:h-[100px] flex justify-center items-center">
            <h2 class="font-bold  px-[5%] text-center text-3xl sm:text-4xl text-body ">
                Biaya SMATER
            </h2>
            <p class="text-body ">MITRA SMA NEGRI 4 BANDUNG</p>
        </div>
        <!-- kategori biaya SMP -->

        <!-- biaya Pendaftaran -->
        <?php foreach ($totalBiayaSMA as $sma) : ?>
            <div class="relative w-[95%] lg:w-[80%] top-10 mx-auto main-shadow" id="<?= $sma['pgb_type']; ?>">
                <h3 class="text-center text-2xl sm:text-3xl text-body font-bold py-4 md:py-8 lg:pt-14"><?= $sma['pgb_type']; ?></h3>
                <table class="w-full bg-white border-separate border-spacing-x-[1px]">
                    <thead class="h-12 bg-second-green text-body text-md md:text-xl">
                        <th class="font-bold">NO</th>
                        <th class="font-bold">Uraian</th>
                        <th class="font-bold">Biaya</th>
                        <th class="font-bold">Keterangan</th>
                        <th class="font-bold">Beasiswa</th>
                    </thead>
                    <tbody class="text-center font-normal md:font-semibold text-[12px] md:text-lg">
                        <?php $noTotal = 0;
                        $filtered = array_filter($uraianBiayaSMA, function ($var) use ($sma) {
                            return $var['pgb_id'] == $sma['pgb_id'];
                        });
                        foreach ($filtered as $biaya) : $noTotal += 1; ?>
                            <tr class="<?= $noTotal % 2 == 0 ? "bg-second-green" : "bg-main-purple"; ?> text-body">
                                <td><?= $noTotal; ?></td>
                                <td><?= $biaya['pbu_name']; ?></td>
                                <?php if ($noTotal == 1) : ?>
                                    <td rowspan="<?= count($filtered); ?>">Rp <?= number_format($sma['pgb_biaya'], 0, ',', '.'); ?></td>
                                    <td rowspan="<?= count($filtered); ?>"><?= $sma['pgb_desc']; ?></td>
                                    <td rowspan="<?= count($filtered); ?>">Klik disini</td>
                                <?php endif; ?>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        <?php endforeach; ?>

        <!-- Total Biaya -->
        <div class="relative w-[95%] lg:w-[80%] top-10 mx-auto main-shadow" id="total-biaya">
            <h3 class="text-center text-2xl sm:text-3xl text-body font-bold py-4  md:py-8 lg:pt-14 lg:mt-10">Total Biaya</h3>
            <table class="w-full bg-white border-separate border-spacing-x-[1px]">
                <thead class="h-12 bg-second-green text-body text-md md:text-xl">
                    <th class="font-bold">NO</th>
                    <th class="font-bold">Uraian</th>
                    <th class="font-bold">Biaya</th>
                    <th class="font-bold">Total</th>
                </thead>
                <tbody class="text-center font-normal md:font-semibold text-[12px] md:text-lg">
                    <?php $noTotal = 0;
                    $sum = 0;
                    foreach ($totalBiayaSMA as $tb) :
                        $sum += $tb['pgb_biaya']; ?>
                    <?php endforeach; ?>
                    <?php foreach ($totalBiayaSMA as $tb) : $noTotal += 1; ?>
                        <tr class="<?= $noTotal % 2 == 0 ? "bg-second-green" : "bg-main-purple"; ?> text-body">
                            <td><?= $noTotal; ?></td>
                            <td><?= $tb['pgb_type']; ?></td>
                            <td>Rp <?= number_format($tb['pgb_biaya'], 0, ',', '.'); ?></td>
                            <?php
                            if ($noTotal == 1) : ?>
                                <td rowspan="<?= count($totalBiayaSMA); ?>">Rp <?= number_format($sum, 0, ',', '.'); ?></td>
                            <?php endif; ?>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>

        <button class="bg-second-green rounded relative flex justify-center items-center mx-auto mt-20 2xl:mt-28 main-shadow"><a href="#" class="text-lg font-bold text-center text-body py-2 px-5 md:py-4 md:px-8 md:text-2xl">Daftar Sekarang</a></button>
    </div>
</section>